# Deployment & Integration Notes

Setup that lives outside the repository — things that must be configured in
Cloudflare, Notion, Cal.com and Stripe before the site behaves as intended.

Host: Cloudflare Pages, auto-deploying from `github.com/theaipractitioner/aip-website`.
Target: soft launch 14 August 2026, full launch 1 September 2026.

---

## 1. Contact form → Notion CRM

**Status: code complete, not yet configured. This is the blocker.**

The form on `/contact` POSTs to `functions/api/contact.ts`, a Cloudflare Pages
Function. Until the steps below are done the endpoint returns `503`, and the
page falls back to showing `info@theaipractitioner.ai`. Nothing breaks — but no
enquiry reaches the CRM.

### Steps

1. **Create an internal Notion integration**
   - <https://www.notion.so/profile/integrations> → New integration
   - Internal, associated with the AIP workspace
   - Capabilities: **Insert content** is the only one required
   - Copy the secret (starts `ntn_`)

2. **Add the token to Cloudflare**
   - Cloudflare Pages → the `aip-website` project → Settings → Environment
     variables
   - Name: `NOTION_TOKEN`, value: the secret, type: **Secret** (encrypted)
   - Add it to **both** Production and Preview if preview deploys should work
   - Redeploy — env vars are read at request time, but a deploy is the
     simplest way to be certain the binding is live

3. **Share the integration with both databases** ← *easy to miss*
   - Open **DB01 — Contacts** → `···` menu → Connections → add the integration
   - Repeat for **DB05 — Interactions**
   - Without this Notion returns **404**, not 403, which reads like a wrong
     database id and sends you looking in the wrong place

### What the function writes

Verified against the live schema on 6 August 2026 — all property names, types
and select values confirmed.

**DB01 — Contacts** (`a9163899b44c4494a4ff7cd5124365e7`)

| Property | Type | Value |
|---|---|---|
| `Name` | title | from the form |
| `Email` | email | from the form |
| `Notes` | rich_text | organisation (as given) + the message |
| `Status` | select | `Prospect` |
| `Source` | select | `Inbound` |

**DB05 — Interactions** (`d490326704144616b08f02500728ab91`), related to the above

| Property | Type | Value |
|---|---|---|
| `Title` | title | `Website enquiry — {name}` |
| `Summary` | rich_text | source line + the message |
| `Date` | date | submission time |
| `Type` | select | `Other` |
| `Outcome` | select | `Pending` |
| `Follow Up Required` | checkbox | `true` |
| `Contact` | relation | the DB01 record just created |

The interaction write is best-effort. If it fails, the contact is still saved
and the visitor still sees success — losing a touchpoint log is recoverable,
losing the lead is not.

### Two known compromises

- **`Organisation` is not populated. Accepted for launch — Tim, 6 Aug 2026.**
  In DB01 it is a *relation* to DB02, so a free-text company name cannot be
  written to it. Doing it properly needs a lookup-or-create against DB02,
  which risks duplicate organisation records from spelling variants. The value
  is recorded at the top of `Notes` as `Organisation (as given): X` for manual
  linking during qualification. Revisit post-launch, once there is enough real
  enquiry volume to know whether manual linking is actually a burden.
- **`Type` is `Other`.** DB05 has no "Website" option. Notion *would* silently
  create a new select option if one were passed, but that is a structural
  change to a locked database and the CRM's Databases page forbids it without
  a DB00 record. **If a `Website Enquiry` option is added to DB05 `Type`,
  change `INTERACTION_TYPE` in `functions/api/contact.ts` — one line.**

### How to test, once configured

Pages Functions do **not** run under `astro dev`, so this cannot be tested
locally without `wrangler`. Test against a real deploy:

1. Submit the form on the deployed site with an obvious test name
2. Expect the green "Thank you" message, not the email fallback
3. Check DB01 for the contact and DB05 for the related interaction
4. Confirm the interaction's `Contact` relation points at the new contact
5. Delete both test records
6. Failure path: `wrangler pages deployment tail` shows the `console.error`
   lines, which carry Notion's actual rejection reason

Optionally test locally first with `npx wrangler pages dev dist` and a
`.dev.vars` file holding `NOTION_TOKEN` — **`.dev.vars` must never be
committed.**

---

## 2. Cloudflare Web Analytics

**Status: not started. Checklist item 12.**

Free, cookieless, so no consent banner is needed anywhere — that is precisely
why it was chosen over GA4 and why Microsoft Clarity is deferred to Phase 2.

Cloudflare dashboard → Web Analytics → add `theaipractitioner.ai` → enable
automatic setup for the Pages project. No code change required.

---

## 3. Booking — Cal.com

**Status: live and in use, but unresolved against the plan.**

All booking CTAs point at `cal.eu/etltmpn/*`, defined in
`src/config/site.ts` under `booking`. Changing provider is a single edit there.

**Unresolved:** the marketing plan (§6.2) and `bd_offer_definition_v1.4` both
name **Acuity Scheduling**, including the NGO discount mechanism ("a private
Acuity coupon code"). The live system is Cal.com. This needs a decision — if
NGO discounting depends on Acuity coupons, that is an operational dependency,
not just a tooling preference.

### Outstanding on Cal.com

- **No payment app connected.** Stripe is intended. Until it is, these are
  bookable with no payment step: Half-Day ($2,500), Full Day ($4,000),
  One-to-One ($175), Half-Day Afternoon. The website publishes prices for
  three of them.
- **`Team Follow-Up`** (created 6 Aug, `/event-types/391759`) is deliberately
  **hidden** for this reason. Unhide once Stripe is live and the $1,000 price
  is set.
- **`Half-Day Workshop (Afternoon)`** has no description at all and is
  publicly visible.

---

## 4. Lead magnet — MailerLite

**Status: not started. Checklist item 10.**

An embedded MailerLite form on `/resources/ai-readiness-checklist`, styled to
the brand tokens. Chosen over a native API form to avoid a backend, API keys in
the build, and a second serverless function two weeks out from launch. It drops
the subscriber straight into the list that triggers the nurture sequence.

---

## 5. DNS and redirects

**Status: not started. Checklist item 14 — the actual launch switch, do last.**

- `theaipractitioner.ai` → the Cloudflare Pages project
- All three secondary domains **301** to the primary, so the canonical tags
  already in `BaseLayout.astro` are not fighting duplicate content

---

## Environment variables — summary

| Name | Where | Secret | Required for |
|---|---|---|---|
| `NOTION_TOKEN` | Cloudflare Pages | Yes | Contact form |
| `NOTION_CONTACTS_DB_ID` | Cloudflare Pages | No | Optional override; defaults to DB01 |
| `NOTION_INTERACTIONS_DB_ID` | Cloudflare Pages | No | Optional override; defaults to DB05 |

Never commit any of these. The Notion token in particular grants write access
to the CRM.
