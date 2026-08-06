/* ------------------------------------------------------------------ */
/*  POST /api/contact — Cloudflare Pages Function                      */
/*                                                                     */
/*  Writes a website enquiry into The AI Practitioner CRM in Notion.   */
/*  Cloudflare already hosts the site so this adds no new supplier,    */
/*  and Notion is already the system of record (Marketing Plan §6.4,   */
/*  §8.5).                                                             */
/*                                                                     */
/*  Two records are written, matching how the CRM is designed:         */
/*                                                                     */
/*    1. DB01 — Contacts      the person, as Status "Prospect"         */
/*    2. DB05 — Interactions  the enquiry itself, related to (1)       */
/*                                                                     */
/*  Step 2 is best-effort. If it fails the contact is still saved and  */
/*  the visitor still gets a success response — losing the touchpoint  */
/*  log is recoverable, losing the lead is not.                        */
/*                                                                     */
/*  REQUIRED environment variable, set in the Cloudflare Pages         */
/*  dashboard under Settings → Environment variables. Never commit it. */
/*                                                                     */
/*    NOTION_TOKEN   Internal integration secret (starts ntn_)         */
/*                                                                     */
/*  The integration must be shared with both databases via             */
/*  "Connections" on each database page, or Notion returns 404.        */
/*                                                                     */
/*  Database ids are not secret, so they live here rather than in the  */
/*  environment. They are the ids from the CRM "Databases" page and    */
/*  are overridable by env var if a database is ever rebuilt.          */
/* ------------------------------------------------------------------ */

interface Env {
  NOTION_TOKEN: string;
  NOTION_CONTACTS_DB_ID?: string;
  NOTION_INTERACTIONS_DB_ID?: string;
}

const DEFAULT_CONTACTS_DB = "a9163899b44c4494a4ff7cd5124365e7"; // DB01
const DEFAULT_INTERACTIONS_DB = "d490326704144616b08f02500728ab91"; // DB05

const NOTION_VERSION = "2022-06-28";

/* Select values below MUST already exist as options in the CRM. Notion
   would silently create a new option for an unrecognised name, which is
   a structural change to a locked database — see the warning on the
   CRM's Databases page. Only existing options are used. */
const CONTACT_STATUS = "Prospect"; // DB01 Status
const CONTACT_SOURCE = "Inbound"; // DB01 Source
const INTERACTION_TYPE = "Other"; // DB05 Type — no "Website" option exists
const INTERACTION_OUTCOME = "Pending"; // DB05 Outcome

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

/** Notion rejects a single rich_text item over 2000 characters. */
const clamp = (s: string, max = 1900) =>
  s.length > max ? `${s.slice(0, max)}…[truncated]` : s;

const richText = (s: string) =>
  s ? { rich_text: [{ text: { content: clamp(s) } }] } : { rich_text: [] };

const notion = (env: Env, body: unknown) =>
  fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.NOTION_TOKEN}`,
      "notion-version": NOTION_VERSION,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.NOTION_TOKEN) {
    // Our misconfiguration, not the visitor's. Say so, so the page can
    // show the email address instead of pretending the enquiry landed.
    console.error("contact: NOTION_TOKEN not set");
    return json({ ok: false, error: "unconfigured" }, 503);
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const organisation = String(data.organisation ?? "").trim();
  // Honeypot: a real person never fills a field they cannot see. Return
  // success so the bot moves on, but write nothing.
  if (String(data.website ?? "").trim()) return json({ ok: true }, 200);

  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }

  /* DB01 Organisation is a RELATION to DB02, so a typed-in company name
     cannot be written to it directly — that would need a lookup-or-create
     against DB02 and risks duplicate organisation records from spelling
     variants. The name is recorded in Notes instead, for Tim to link by
     hand when he qualifies the lead.

     Accepted as the launch behaviour (6 Aug 2026). Revisit only if real
     enquiry volume makes the manual linking a burden. */
  const notes = [
    organisation ? `Organisation (as given): ${organisation}` : null,
    "",
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const contactRes = await notion(env, {
    parent: {
      database_id: env.NOTION_CONTACTS_DB_ID ?? DEFAULT_CONTACTS_DB,
    },
    properties: {
      Name: { title: [{ text: { content: clamp(name, 200) } }] },
      Email: { email },
      Notes: richText(notes),
      Status: { select: { name: CONTACT_STATUS } },
      Source: { select: { name: CONTACT_SOURCE } },
    },
  });

  if (!contactRes.ok) {
    // Log for debugging, never leak Notion's response to the page.
    console.error(
      "contact: notion rejected contact",
      contactRes.status,
      await contactRes.text()
    );
    return json({ ok: false, error: "upstream" }, 502);
  }

  const contact = (await contactRes.json()) as { id?: string };

  /* Best-effort touchpoint log. A failure here must not fail the
     request — the lead is already captured. */
  if (contact.id) {
    try {
      const summary = organisation
        ? `Website contact form — ${organisation}`
        : "Website contact form";

      const interactionRes = await notion(env, {
        parent: {
          database_id:
            env.NOTION_INTERACTIONS_DB_ID ?? DEFAULT_INTERACTIONS_DB,
        },
        properties: {
          Title: {
            title: [
              { text: { content: clamp(`Website enquiry — ${name}`, 200) } },
            ],
          },
          Summary: richText(`${summary}\n\n${message}`),
          Date: { date: { start: new Date().toISOString() } },
          Type: { select: { name: INTERACTION_TYPE } },
          Outcome: { select: { name: INTERACTION_OUTCOME } },
          "Follow Up Required": { checkbox: true },
          Contact: { relation: [{ id: contact.id }] },
        },
      });

      if (!interactionRes.ok) {
        console.error(
          "contact: interaction log failed",
          interactionRes.status,
          await interactionRes.text()
        );
      }
    } catch (err) {
      console.error("contact: interaction log threw", err);
    }
  }

  return json({ ok: true }, 200);
};
