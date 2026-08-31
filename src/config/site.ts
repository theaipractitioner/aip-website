/* ------------------------------------------------------------------ */
/*  Entity constants — single source of truth                          */
/*                                                                     */
/*  These values must stay identical across the website, LinkedIn,     */
/*  Facebook and Substack. AI engines assemble one understanding of    */
/*  the business from every source they can find; inconsistent         */
/*  descriptions weaken it. Change here, then mirror on every          */
/*  platform — never edit a page in isolation.                         */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://theaipractitioner.ai";

export const TRADING_NAME = "The AI Practitioner";
export const COMPANY_NAME = "Groundframe Ltd";
export const LEGAL_NAME = `${COMPANY_NAME} trading as ${TRADING_NAME}`;
export const FOUNDER = "Tim Parkin";

/* A UK limited company must state its registered name, company number and
   place of registration on its website, in readable text — structured data
   does not satisfy it. Taken from the approved policy documents, which give
   the entity as "Groundframe Ltd (Company No. 9715227)". Rendered in the
   footer on every page.

   The registered office is the company's statutory address in the UK. It is
   deliberately separate from LOCATION below, which is where Tim actually
   works and what the site says about being based in Cambodia — the two are
   different facts and must not be merged. */
export const COMPANY_NUMBER = "9715227";
export const COMPANY_JURISDICTION = "England and Wales";
export const REGISTERED_OFFICE = {
  street: "49 Station Road",
  town: "Polegate",
  county: "East Sussex",
  postcode: "BN26 6EA",
  country: "United Kingdom",
};
export const REGISTERED_OFFICE_LINE = [
  REGISTERED_OFFICE.street,
  REGISTERED_OFFICE.town,
  REGISTERED_OFFICE.county,
  REGISTERED_OFFICE.postcode,
].join(", ");

/** Used verbatim, everywhere. Supersedes the older "AI Fluency for Professionals". */
export const ANCHOR_PHRASE = "AI Fluency for Experienced Professionals";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/tim-parkin-ai-practitioner";
export const CONTACT_EMAIL = "info@theaipractitioner.ai";

export const LOCATION = {
  city: "Siem Reap",
  country: "Cambodia",
  countryCode: "KH",
};

/* ------------------------------------------------------------------ */
/*  Booking                                                            */
/*                                                                     */
/*  Live cal.eu event types. Wiring CTAs straight to these gives a     */
/*  working conversion path at soft launch without the /book page.     */
/*  NOTE: the marketing plan names Acuity Scheduling for Phase 2 —     */
/*  the live booking system is cal.eu. If that is reconciled in        */
/*  favour of Acuity, every CTA changes here and nowhere else.         */
/* ------------------------------------------------------------------ */

// `www` is deliberate: cal.eu 301s to www.cal.eu, so omitting it costs
// every booking CTA an extra redirect round trip.
const CAL = "https://www.cal.eu/etltmpn";

export const booking = {
  discoveryCall: `${CAL}/discovery-call`,
  oneToOne: `${CAL}/one-to-one-coaching`,
  followUp: `${CAL}/follow-up-one-to-one-session-s`,
  smallGroup: `${CAL}/small-group-workshop`,
  halfDay: `${CAL}/half-day-workshop`,
  halfDayAfternoon: `${CAL}/half-day-workshop-afternoon`,
  fullDay: `${CAL}/full-day-workshop`,
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/*                                                                     */
/*  Header and Footer both read from here so the two cannot drift.     */
/*  `softLaunch: false` hid a link at the 14 August soft launch — an    */
/*  empty blog and a non-functional booking page cost more credibility  */
/*  than they earn. Blog went live on 2026-08-29 with the week 34       */
/*  posts, and /book on 2026-09-01 for the full launch. Every link is   */
/*  now visible, so nothing is currently false.                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "About", href: "/about", softLaunch: true },
  { label: "Services", href: "/services", softLaunch: true },
  { label: "FAQ", href: "/faq", softLaunch: true },
  { label: "Book", href: "/book", softLaunch: true },
  { label: "Blog", href: "/blog", softLaunch: true },
  { label: "Contact", href: "/contact", softLaunch: true },
];

/** The links to render now. */
export const visibleNavLinks = navLinks.filter((link) => link.softLaunch);
