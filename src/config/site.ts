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

const CAL = "https://cal.eu/etltmpn";

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
/*  `softLaunch: false` hides a link at the 14 August soft launch —    */
/*  an empty blog and a non-functional booking page cost more          */
/*  credibility than they earn. Flip both to true at the 1 September   */
/*  full launch, once /blog has real posts and /book has Acuity wired  */
/*  in.                                                                */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "About", href: "/about", softLaunch: true },
  { label: "Services", href: "/services", softLaunch: true },
  { label: "FAQ", href: "/faq", softLaunch: true },
  { label: "Book", href: "/book", softLaunch: false },
  { label: "Blog", href: "/blog", softLaunch: false },
  { label: "Contact", href: "/contact", softLaunch: true },
];

/** The links to render now. */
export const visibleNavLinks = navLinks.filter((link) => link.softLaunch);
