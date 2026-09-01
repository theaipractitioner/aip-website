---
title: "Data Protection Policy"
policyId: "AIP-PS-003"
version: "1.0"
effectiveDate: 1 September 2026
nextReview: "1 September 2027, or sooner on material change"
owner: "Tim Parkin, Director"
appliesTo: "Internal — Tim Parkin, and any future employees, contractors or associates with data access"
summary: "How we handle personal data as a business: the standards we work to, and what happens if something goes wrong."
group: "legal"
order: 3
---

## 1. Purpose and Scope

This policy sets out how Groundframe Ltd t/a The AI Practitioner (“AIP”, “we”, “us”, “our”) collects, stores, uses and protects personal data across all of our business operations — client engagements, prospect and enquiry handling, and day-to-day administration — not only data collected through our website.

It applies to Tim Parkin, as sole director, and to any future employees, contractors or associates engaged by AIP who process personal data on our behalf. It is the principal internal operating standard for data protection at AIP, and the parent document for the more detailed Tier 2 and Tier 3 controls planned as the business grows.

This document, AIP-PS-003, is the single authoritative internal data protection policy for AIP. It takes precedence over any informal notes, superseded drafts, or prior verbal guidance on data protection matters; where an earlier draft or informal practice conflicts with this policy, this policy governs.

It should be read alongside our Privacy Policy (AIP-PS-001), which is the public-facing statement published for website visitors and prospective clients, and our Cookie Policy (AIP-PS-002). Where this policy and the Privacy Policy cover the same topic — for example international transfers, retention or data subject rights — the Privacy Policy states our public commitment and this policy sets out the fuller internal detail and process behind it. The two must not diverge: where an inconsistency is found on internal operating practice, this policy governs and the Privacy Policy is corrected at the next review.

## 2. Definitions

| Term | Definition |
| --- | --- |
| Personal data | Any information relating to an identified or identifiable living individual. |
| Processing | Anything done with personal data — including collecting, storing, using, sharing, or deleting it. |
| Data Controller | The organisation that decides why and how personal data is processed. Groundframe Ltd is the Data Controller. |
| Processor | An organisation that processes personal data on the Data Controller's behalf and under its instructions. |
| Data subject | The living individual to whom personal data relates. |
| Personal data breach | A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. |
| Data Protection Impact Assessment (DPIA) | A structured assessment carried out before higher-risk processing begins, to identify and reduce data protection risks. |
| UK GDPR | The United Kingdom General Data Protection Regulation, as it forms part of UK law under the Data Protection Act 2018. |
| PECR | The Privacy and Electronic Communications Regulations, the UK law governing cookies, similar technologies and electronic marketing. |
| Information Asset Register (IAR) | AIP's internal register of what data assets exist and where — every system, platform and data store we use, its owner and its criticality. See Section 9.1. |
| Data Protection Register (DPR) / Record of Processing Activities (RoPA) | AIP's internal register of what processing activities take place, the lawful basis relied on for each, and related detail such as recipients, transfers, retention and security measures. See Section 9.2. |
| Legitimate Interests Assessment (LIA) | A documented three-part test — purpose, necessity and balancing — carried out before relying on legitimate interests as the lawful basis for a processing activity. |
| Data protection by design and by default | Building data protection safeguards into new tools, processes and engagements from the outset, and applying privacy-protective default settings, rather than adding safeguards afterwards. See Section 4. |
| Policy Evidence and Source Register | AIP's internal register recording the evidence, sources and approvals underpinning its policies, including regulatory registrations such as ICO registration. See Section 10. |
| AI Tool Register | AIP's internal register of AI services, their approval status and the conditions attaching to their use. Maintained under the AI Usage & Governance Policy (AIP-PS-006). |
| Digital Workers Register | AIP's internal register of configured AI agents and automations operating on AIP's behalf. Maintained under the Digital Workers Policy (AIP-PS-007). |

## 3. Our Data Protection Principles

We handle personal data in line with the principles of UK GDPR:

| Principle | What this means in practice at AIP |
| --- | --- |
| Lawfulness, fairness & transparency | We only process data where we have a valid lawful basis, and we tell people clearly what we do with it (see our Privacy Policy) |
| Purpose limitation | We collect data for specific, stated purposes and do not repurpose it without a valid basis |
| Data minimisation | We collect only what is needed for the enquiry, engagement or administrative task in question |
| Accuracy | We keep client and contact records up to date and correct errors when identified |
| Storage limitation | We keep data only as long as necessary, per the master retention schedule in Section 16 — including at the end of any archive period |
| Integrity & confidentiality | We apply proportionate technical and organisational security measures (Sections 12 to 14) |
| Accountability | We can demonstrate compliance with the above — this policy, our registers, and our processes are how we do that |

## 4. Data Protection by Design and by Default

AIP applies data protection by design and by default as a working discipline, not only as a stated principle. In practice, this means:

- **Minimal collection by default** — our enquiry form, engagement templates and intake processes ask only for the personal data needed for the purpose in hand; optional fields are avoided unless they serve a clear purpose.
- **Privacy considered at tool selection** — before adopting a new tool, platform or AI service, we weigh its privacy and security posture as part of the approval decision in Section 11, not as an afterthought once it is already in use.
- **Data minimisation in client engagements** — where an engagement can be delivered using anonymised, pseudonymised or aggregated data, we use it in preference to full personal data, and client data shared with us is used only for the purpose of that engagement.
- **A lightweight DPIA-style check by default** — before any new higher-risk processing begins, we carry out a short, proportionate risk check (Section 19) even where a full statutory DPIA is not legally required.
- **Privacy-protective default settings** — where a system offers a choice of privacy or sharing settings, we default to the more protective option (for example, minimum retention, restricted sharing, analytics off, recording and transcription disabled) unless there is a specific, documented reason to change it.

As AIP grows beyond a sole-director operation, these practices will be formalised into a dedicated Information Security Policy and a documented DPIA template, as referenced in our Privacy Policy (AIP-PS-001), Section 16.

## 5. Roles and Responsibilities

**Data controller:** Groundframe Ltd, represented by Tim Parkin, Director, who is accountable for all data protection decisions across the business.

As a sole-director business, Tim personally holds day-to-day responsibility for data protection compliance, responding to data subject requests, managing any data breach, and carrying out due diligence on the tools and vendors we use.

A formal Data Protection Officer is not currently required — AIP does not carry out large-scale systematic monitoring or process special category data at scale. This will be reassessed as the business grows.

When contractors or associates are engaged in future who may access personal data, they will be bound by a written confidentiality and data-handling clause before being given access to any AIP system or client data.

**5.1 Operational Continuity**

Groundframe Ltd remains accountable as Data Controller at all times. Tim Parkin is currently the sole director and the sole person responsible for data protection at AIP. There is no second person who can act in his place, and this section states that position accurately rather than implying a resilience we do not have.

The controls that make this manageable are documentation, not delegation:

- **Documented access.** Account ownership, recovery routes and credential locations are recorded so that AIP's systems can be reached without relying on memory. Credentials themselves are held in NordPass (Section 14).
- **Documented incident instructions.** The breach-response steps in Section 18, including the 72-hour assessment and notification clock, are written down in a form that someone other than Tim could follow.
- **Short absences** — for example travel with intermittent connectivity — simply delay routine tasks such as register updates and minor access changes. At AIP's current scale this creates no material risk.
- **Extended absence.** If Tim were unavailable for an extended period while a time-critical obligation fell due, AIP's professional advisers may be contacted for support. They are engaged on an ad hoc basis and are **not** pre-authorised to act as interim controllers, do not hold standing access to AIP systems, and are not represented anywhere as a continuity arrangement. No retainer or formal continuity agreement is in place.

This is a known and accepted limitation, proportionate to AIP's size. As AIP takes on employees or contractors, this policy will be updated to name a specific backup contact and, where appropriate, to put a formal continuity arrangement in place. Subject to that continuing accountability, Tim Parkin may delegate specific data protection tasks on a documented, least-privilege basis to authorised personnel or to advisers providing specialist support.

## 6. ICO Registration Status

Groundframe Ltd is registered with the Information Commissioner's Office under registration reference **C2019678**. Registration was completed on 31 August 2026, immediately ahead of the commencement of trading on 1 September 2026.

The registration date, reference, fee and renewal date, together with the supporting evidence, are recorded in the Policy Evidence and Source Register (Section 10), which is the single authoritative internal record of AIP's regulatory registrations. That register is owned by Tim Parkin, Director. Renewal is tracked there and reviewed at each annual policy review.

Publishing the registration reference in the public Privacy Policy is optional; AIP does publish it, and the register entry remains authoritative either way. The corresponding statement in the Privacy Policy (AIP-PS-001), Section 20, must always match this section.

## 7. Data Classification

We classify information into four categories, applied consistently across all current and future systems, people, agents, digital workers and integrations:

| Classification | Description | Typical handling controls |
| --- | --- | --- |
| Public | Information intended for public consumption, for example published website content and marketing material. | No special handling required beyond normal publication approval. |
| Internal | Non-sensitive information for use within AIP, for example internal notes and working drafts. | Restricted to AIP personnel and authorised advisers; not published externally. |
| Confidential | Client and business information that would cause harm if disclosed, for example client engagement content, contracts and financial records. | Access restricted to those who need it; encrypted storage and transmission where available; not shared outside the engagement without permission; never entered into an AI service (Section 11). |
| Restricted | The most sensitive personal or business data, for example special-category data if ever received, authentication credentials, and breach investigation material. | Access limited to Tim (and, in future, named authorised personnel); MFA required; secret values held only in NordPass; enhanced logging where available. |

Classification determines the access, storage, transmission and disposal controls applied in Sections 12 to 14, and applies equally to data held by people, AI agents, digital workers and system integrations.

## 8. What Personal Data We Process

| Category | Typical fields | Primary systems |
| --- | --- | --- |
| Prospect / enquiry data | Name, organisation, email, message content | Website contact API, Notion, Google Workspace |
| Booking data | Name, email, meeting details | Cal.com/Cal.eu, Google Workspace |
| Client engagement data | Contact details, role, organisation, engagement content and outputs | Notion, Google Workspace |
| Business contact data | Name, email, company — partners, suppliers, advisers | Google Workspace, Notion |
| Financial and contractual data | Billing details, invoices, payment records | Xero, Stripe, business banking |
| Future employee / contractor data | Not yet applicable — will be added under our Tier 3 people policies once AIP engages staff | Not applicable |

Data collected specifically via theaipractitioner.ai is detailed in our Privacy Policy (AIP-PS-001); this section covers the fuller set of personal data AIP processes across the business. AIP does not create session recordings or transcripts: recording and transcription are disabled on the platforms we use, and no such data category exists at present.

## 9. Information Asset Register and Data Protection Register

AIP maintains two registers. They serve different purposes, are not interchangeable, and each is kept complete and current in its own right.

**9.1 Information Asset Register (IAR)**

**Purpose:** records what data assets exist and where — every system, platform and data store AIP uses, the data it holds, its owner and its criticality.

**Owner:** Tim Parkin, Director.

**Update cadence:** updated before any new system, service or integration is brought into operational use (Section 11); on any material change to an existing system; and reviewed in full at least annually under Section 21.

The register below is the confirmed production position as at the effective date of this policy. It is deliberately lightweight, but it is **not** selective: every system currently in use that processes or protects relevant data appears here.

| System | Purpose | Personal data typically held |
| --- | --- | --- |
| Google Workspace (Gmail, Drive, Calendar) | Correspondence, document storage, scheduling and enquiry notifications | Client and business contact data, correspondence, engagement documents |
| Notion | CRM, knowledge and project records, engagement records and the destination for contact-form submissions | Client and prospect contact and engagement data |
| Cloudflare | Website hosting, CDN, DNS and security; the /api/contact Worker endpoint; Cloudflare Web Analytics | Enquiry submissions in transit; aggregated, cookieless website usage data |
| Website contact API (/api/contact) | Receives enquiry submissions, creates a Notion record and triggers a Google Workspace notification | Name, organisation, email, message content |
| Namecheap | Domain registrar for theaipractitioner.ai | Registrant administrative contact data only; no client data |
| Xero | Accounting and invoicing | Client billing data, financial records |
| Stripe | Card payment processing | Payer name, email and transaction data; card details are held by Stripe, not by AIP |
| Business banking | Receipt and reconciliation of payments | Payer identification and transaction data |
| Cal.com / Cal.eu | External scheduling and booking, including the Cal Video meeting option | Booker name, email and meeting details |
| Zoom | Default remote meeting platform. Recording and transcription disabled | Participant name and email; meeting metadata |
| Microsoft Teams | Alternative remote meeting platform where a client requires it. Recording and transcription disabled | Participant name and email; meeting metadata |
| NordPass | Password and secret management — the target vault for all credentials and API-key values | Credentials for AIP systems; no client personal data |
| Apple / iCloud Notes | Transitional inventory of API keys, on an MFA-protected Apple account, pending migration to NordPass | No client personal data. See the secrets rule in Section 10 |
| Anthropic Claude | Approved AI assistant supporting AIP's own work | None — no identifiable, confidential or unpublished client information may be entered (Section 11) |
| OpenAI ChatGPT | Approved AI assistant supporting AIP's own work | None, under the same restriction |
| Google Gemini | Approved AI assistant supporting AIP's own work | None, under the same restriction |
| LinkedIn | Professional presence and a public source of professional information | Publicly available professional information; used as a source, not as a processor |

**Not current systems.** Slack is a future possibility only and is not in use; it is not an AIP information asset and must not be treated as one until it is approved and added here. Perplexity and Grok are likewise not in production use; accounts may exist, but neither is an approved AI service (Section 11).

**Linked governance records.** The AI Tool Register and the Digital Workers Register both exist and are in active use, and are treated as extensions of this register rather than duplicates of it. The AI Tool Register records the approval status and conditions attaching to each AI service; the Digital Workers Register records each configured agent or automation operating on AIP's behalf, including Hermes, which is operational. A digital worker with access to personal data is subject to the same approval, access-control and lifecycle requirements as a human user (Sections 11 to 13).

When a system is retired, its entry is not deleted — it is marked retired, with disposition evidence retained for accountability.

**9.2 Data Protection Register (Record of Processing Activities)**

**Purpose:** records what processing takes place and why — for each activity, the lawful basis relied on, the categories of data subject and data processed, recipients and processors involved, any international transfers and their safeguard (Section 15), the retention period applied (Section 16), and the security measures in place (Section 14). This is AIP's record of processing activities in the spirit of UK GDPR Article 30, kept proportionate to AIP's size.

**Owner:** Tim Parkin, Director.

**Update cadence:** updated whenever a new processing activity begins or an existing one changes materially — including a new vendor approved under Section 11, a change of lawful basis, or a retention change — and reviewed in full at least annually under Section 21.

The IAR and DPR are related but distinct: the IAR is asset-centric (what exists, and where), while the DPR is activity-centric (what happens to data, and on what basis). A single system in the IAR may support several processing activities, each recorded separately in the DPR.

## 10. Governance Registers

This policy relies on a small number of internal registers. Rather than maintain them as scattered documents, AIP keeps supplier, data-asset and access records in **one Notion governance database**, presented through linked views for each purpose. One structure, several views — so that a supplier's data-asset entry, its processor terms and who can reach it cannot drift apart.

The minimum fields for each record are:

- Supplier or system, and its business purpose
- Data categories and data subjects involved
- Account owner, and authorised human, service-account and automated access
- MFA status
- Processor terms or DPA, and the approval date
- Data location and transfer basis
- Retention rule
- Review date and current status

> **Secrets rule — absolute**
>
> The governance database may record that an API key or credential **exists** — its purpose, the permissions it carries, its owner, its rotation date, and where in NordPass it is held.
>
> It must **never** store the value of an API key, token, password or other secret. No exceptions, including “temporarily”.
>
> NordPass is the vault. Apple Notes remains a transitional inventory on an MFA-protected Apple account and is being migrated; it is not the target store and no new secret values are to be placed there.

The registers maintained through that database, together with the separate policy evidence record, are:

| Register | Purpose | Update trigger |
| --- | --- | --- |
| Policy Evidence and Source Register | The authoritative internal record of the evidence, sources and approvals underpinning AIP's policies, including regulatory registrations — ICO registration reference, date, fee and renewal (Section 6) | On each policy review or amendment, and whenever a registration or renewal occurs |
| Information Asset Register (IAR) | What data assets exist, where they are held, and their criticality (Section 9.1) | Before any new system goes live; on material change; annual review |
| Data Protection Register (RoPA) | What processing takes place, and on what lawful basis (Section 9.2) | New or materially changed processing activity; annual review |
| Vendor register | Per-supplier contracting entity, data location, transfer basis, processor terms, MFA status and next review — the source that the Privacy Policy recipient table is built from | On vendor approval under Section 11; on material change; annual review |
| Access Register | Who and what has access to which AIP system, and why — human users, service accounts, API identities, automations and external advisers (Section 12) | On each joiner, mover or leaver event (Section 13); periodic review under Section 21 |
| Legitimate Interests Assessments | Documented three-part test for any processing relying on legitimate interests | Before relying on legitimate interests for a new activity; on change of processing or context |
| Master retention schedule | The single authoritative set of retention periods, covering every category promised publicly (Section 16) | On any retention change; annual review |
| Data breach log | Every personal data breach, reportable or not, with what happened, its effect and the remedial action taken (Section 18) | Immediately on identifying a suspected breach |
| AI Tool Register | AI services, approval status and conditions of use (Section 11) | Before any new AI service is used; on change of use |
| Digital Workers Register | Configured AI agents and automations acting for AIP, including their access and oversight | Before a digital worker is deployed; on material change |

All registers are currently owned by Tim Parkin, Director, reflecting AIP's sole-director stage; ownership will be distributed as the business grows and this policy updated accordingly.

There is no consent-evidence log, because no consent-requiring cookie or similar technology is deployed on theaipractitioner.ai (Cookie Policy AIP-PS-002, Section 8). If one is ever introduced, the consent-evidence record required by that policy is created as part of the same change.

## 11. Vendor and Artificial Intelligence Approval

Before any new software, cloud service, model, agent, digital worker, automation, integration or API that will process personal data is adopted, we complete the following, proportionately:

- **Business justification** — why the tool is needed
- **Privacy and security review** — what personal data it will touch and how it protects it
- **Terms review** — confirming the provider's processor terms or DPA are in place and acceptable at the account tier we are buying
- **Transfer assessment** — the provider's contracting entity, where data is processed, and which transfer mechanism applies
- **DPIA** where the processing is higher-risk (Section 19)
- **Approval** by Tim Parkin, Director
- **Register entry** in the governance database (Sections 9 and 10) before operational use
- **Periodic reassessment** on the review cycle in Section 21
- **Controlled retirement**, with disposition evidence, when the tool is no longer used

Due diligence is kept deliberately lightweight and evidence-based: supplier, purpose, data, account tier, terms, transfer position, MFA status, approval and next review. We record what we have actually confirmed. We do not assert that a provider holds a certification, or that a contractual assurance has been obtained, unless the vendor record contains the evidence for it.

**11.1 Approved AI Services and the Client-Data Restriction**

The AI services approved for use at AIP are **Anthropic Claude, OpenAI ChatGPT and Google Gemini**.

> **Launch restriction on AI use — absolute**
>
> No identifiable, confidential or unpublished client information may be entered into any AI service. This applies to approved services and to every other service without exception.
>
> Permitted AI input is limited to public information, synthetic or illustrative material, properly anonymised material, and AIP's own non-client content.
>
> A person remains responsible for reviewing any AI-assisted output before it is relied upon or shared, in line with the AI Usage & Governance Policy (AIP-PS-006).
>
> Engagement-specific client restrictions on AI use, where recorded in a Statement of Work, apply in addition to this restriction and never in place of it.

Perplexity and Grok are **not** approved AI services. Accounts may exist, but neither is in material use, and neither may be used for AIP work until it has been assessed and approved through the AI Tool Register. The same applies to any AI service not named above.

**11.2 Vendor Continuity Actions**

Open vendor-continuity actions are tracked in the governance database. The current action is the migration of AIP's booking account from the Cal.eu environment to Cal.com, which must be completed **before 1 November 2026**, when the Cal.eu environment closes. This includes updating the booking links published on theaipractitioner.ai and confirming that account data has transferred correctly.

## 12. Access Control and Least Privilege

Access to AIP systems holding personal data is granted on a least-privilege basis:

- **Approval** — access is granted only following approval by Tim Parkin, Director
- **Minimum permissions** — access is scoped to the minimum needed for the role or task
- **Restricted administrative privileges** — administrative access is limited to those who genuinely need it
- **Unique accounts** — there are no shared human logins; each person has their own credentials
- **MFA** — required on all new systems that support it, and being rolled out across existing systems as described in Section 14.1
- **Periodic review** — access rights are reviewed on the cycle in Section 21
- **Time-limited temporary access** — any temporary access, for example for a contractor or adviser, is time-boxed and reviewed
- **Prompt revocation** — access is removed promptly when no longer needed
- **Logging** — access is logged where the system supports it

We maintain an auditable Access Register (Section 10). It records more than human users: **service accounts, API identities, automations, integrations and digital workers each appear as an access holder in their own right**, with an accountable owner, because a credential that can reach client data is a credential that must be governed whether or not a person is sitting behind it. External advisers with any access are recorded on the same basis.

## 13. Access Lifecycle Management

We apply joiner, mover and leaver controls to anyone or anything with access to AIP systems — employees, contractors, advisers, digital workers, agents, service accounts, automations and integrations:

- **Joiner** — access is provisioned only after approval, scoped per Section 12, and recorded in the Access Register
- **Mover** — access is adjusted when a role or engagement changes
- **Leaver** — on completion of an engagement or departure, we rotate or revoke passwords, keys, tokens and shared links; return or remove company data held by the leaver; and document that this has been completed

Confidentiality obligations continue to apply after access ends, in line with Section 13 of our Terms of Business (AIP-PS-005) where the leaver is an external contractor or adviser.

## 14. Data Handling and Security Measures

We apply the following as a matter of course:

- **Access** — only Tim (and, in future, contractors under a signed confidentiality agreement) can access AIP's business systems, subject to Sections 12 and 13
- **Client confidentiality** — information shared by a client for a specific engagement is not used for, or disclosed to, any other client without permission
- **AI tool use** — governed by the absolute restriction in Section 11.1; client data is never used to train or fine-tune public AI models
- **Recording** — session recording and transcription are disabled on the meeting platforms we use, and are not enabled without a specific written agreement

**14.1 Current Security Position**

This section states AIP's actual security posture. It is written to be accurate rather than reassuring, because a control we claim but do not have is worse than one we admit is outstanding.

**In place today:**

- Devices used for AIP business are encrypted, password protected, kept patched and backed up. This has been confirmed.
- NordPass is the password manager. Every account has a unique password. There are no shared human logins.
- HTTPS/TLS is enforced across theaipractitioner.ai and the cloud systems we use.
- Data minimisation is applied per Sections 4 and 8.
- An Access Register is maintained per Section 12, covering human users, service accounts, API identities, automations and external advisers.

**Multi-factor authentication.** MFA is *not* enabled on every core system. The exact position is:

| MFA status | Systems |
| --- | --- |
| Enabled | Stripe; Xero; NordPass; Apple ID / iCloud; business banking |
| Not currently enabled | Google Workspace; Notion; Cloudflare; Cal.com/Cal.eu; Namecheap; Claude; ChatGPT; Gemini; Zoom; Microsoft Teams; LinkedIn; With Jack where applicable; any source-code repository or separate deployment account |

Completing the MFA rollout is a tracked security-improvement action, not a control AIP already holds. It is prioritised in this order: **Google Workspace, Cloudflare, Namecheap, Notion** — the systems holding or protecting the most, and the ones whose compromise would matter most. Until the rollout is complete, every account relies on a unique, strong password stored in NordPass. MFA is required for any newly onboarded system that supports it, and for any higher-risk system, and this requirement stands whether or not the wider rollout is finished.

**Not in place, and not claimed:**

- Formal penetration testing — not performed, and not proportionate at AIP's current scale. It will be reconsidered if the risk profile changes materially.
- A certified Information Security Management System or ISO 27001-type certification — not held, and not represented as held in any AIP public or client-facing material.
- Independent verification of each supplier's own security certifications — we work with established providers, but we do not claim to have verified a provider's certification unless the evidence is in its vendor record.

This section will be superseded by a dedicated Information Security Policy as AIP grows (see Privacy Policy AIP-PS-001, Section 16).

## 15. International Data Transfers

This applies to AIP in two distinct ways.

**AIP's own access.** AIP's operations, including work carried out by Tim Parkin, are managed from Siem Reap, Cambodia. Groundframe Ltd is the Data Controller throughout. Current ICO guidance defines a restricted transfer by reference to personal data being made accessible to a *separate organisation* outside the United Kingdom, so routine access by AIP's own personnel, acting for the same UK controller, is not categorically described as a restricted transfer. That is a point about classification, not a claim of exemption: this access sits inside our controls, not outside them. It is documented in our registers, governed by the access controls in Sections 12 and 13 and the security measures in Section 14, and disclosed transparently to clients during onboarding and in our Privacy Policy.

**Transfers to suppliers.** Where we make personal data available to a processor or other organisation located outside the United Kingdom, that is a restricted transfer. We do not rely on a single blanket statement for this. Each supplier's contracting entity, the country in which data is processed, and the specific mechanism relied on — UK adequacy regulations, the UK International Data Transfer Addendum to the EU Standard Contractual Clauses, the UK Extension to the EU–US Data Privacy Framework, or another mechanism — are recorded individually in the vendor register (Section 10). The Privacy Policy recipient table is built from those records, and the two must match.

Where a supplier's transfer position has not been confirmed from primary evidence, we record it as unconfirmed in the vendor register and resolve it at the next review rather than publishing an assumption.

> **Recommended legal review**
>
> Qualified UK legal advice remains recommended to confirm the correct treatment of AIP's Cambodia access arrangement and how it should be disclosed to clients during onboarding.
>
> This is a standing recommendation, not a blocker to operating: the controls described above apply in either case, and the classification question does not change what protection the data receives. No external legal review has been carried out on this policy.

## 16. Data Retention

This section is the **master retention schedule**. It is the single authoritative source for how long AIP keeps personal data, and every retention period published in the Privacy Policy (AIP-PS-001), Section 15, is drawn from it. Where the two ever differ, this schedule governs and the Privacy Policy is corrected.

AIP prohibits uncontrolled or informal deletion of records. Our general practice is to archive rather than delete at the end of an engagement, restricting access rather than removing records outright — but this archive-not-delete approach is subject to, and does not override, the storage limitation principle in Section 3.

| Data | Retention | Basis |
| --- | --- | --- |
| Enquiry data that does not become a client relationship | 12 months from last contact, then deleted | No ongoing purpose beyond that point |
| Booking records that do not become an engagement | 12 months from the booking date, then deleted | As above |
| Client engagement records | 6 years from the end of the engagement | UK limitation periods |
| Contractual and procurement data | 6 years from the end of the contractual relationship | UK limitation periods |
| Financial and tax records | 6 years | HMRC requirements |
| Attendance and participation records | 6 years from the end of the related engagement | Aligned to client engagement records |
| Feedback, testimonials and survey responses | Retained while used for the stated purpose; reviewed at each policy review; deleted or anonymised on request | Consent, withdrawable at any time |
| Support and correspondence records | 24 months from resolution | No ongoing purpose beyond that point |
| Suppression / do-not-contact records | Retained for as long as necessary to honour the request | Legal obligation and legitimate interests |
| Data breach and data subject request logs | 6 years | Accountability |

No retention period is stated for recordings or transcripts, because none are created (Section 8). If a recording were ever made under a specific written agreement, its retention period would be set in that agreement and added to this schedule.

At the end of a retention period we review the record and either retain it under a documented lawful justification (for example, an ongoing legal matter), securely delete it, or irreversibly anonymise it. We keep a minimal disposal decision log recording what was retained, deleted or anonymised, and why.

## 17. Data Subject Requests

Anyone whose personal data we hold can ask to exercise their rights under UK GDPR (see Privacy Policy AIP-PS-001, Section 18). Our internal process:

- Acknowledge the request within 5 working days
- Verify the identity of the requester before disclosing any personal data
- Respond in full within 1 calendar month of receipt, extendable by up to 2 further months for complex requests, with the requester notified of the extension and the reason
- Recognise a request as a rights request however it is phrased, without requiring the requester to cite legislation or name a specific right
- Log the request, our response, and the outcome

## 18. Data Breach Management

A personal data breach is any incident leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. If a breach is identified:

- **Contain and assess** it as soon as possible — what happened, what data, how many people affected
- **Assess the risk** of harm to affected individuals
- **Notify the ICO** within 72 hours of becoming aware, if the breach is likely to result in a risk to individuals' rights and freedoms
- **Notify affected individuals** directly, without undue delay, if the breach is likely to result in a high risk to them
- **Log every breach** — reportable or not — in the breach log (Section 10), including what happened, its effect, and the remedial action taken

The 72-hour clock runs from awareness, not from confirmation. Where the full picture is not yet known, we notify on the basis of what we do know rather than waiting for certainty.

## 19. Data Protection Impact Assessments

Before adopting a new tool or process that involves higher-risk processing of personal data — for example, a new AI tool that would process client data, or any form of large-scale profiling — we complete a lightweight DPIA before it goes into use. This reflects the data protection by design commitment in Section 4. Given AIP's business is AI consultancy, it applies in particular to new AI tools introduced into client-facing delivery, and is applied alongside the AI Usage & Governance Policy (AIP-PS-006).

## 20. Third-Party and Vendor Due Diligence

Section 11 sets out the approval process for new vendors and AI services. Section 9.1 is the running register of the systems we use; the vendor register (Section 10) holds the per-supplier detail — contracting entity, data location, transfer basis, processor terms, MFA status and next review — and is the source from which the Privacy Policy recipient table is built.

## 21. Data Protection Governance Review

At least annually, we review: this policy and its registers (Section 10); our approved vendors and AI services; outstanding DPIAs; any incidents, complaints or data subject requests logged since the last review; access records under Sections 12 and 13; retention practice against the master schedule (Section 16); MFA rollout progress (Section 14.1); and relevant legal or operational change.

We trigger an additional review outside the normal cycle after: a material change in data protection law or regulatory guidance; adoption of a significant new technology; a significant incident; the introduction of a new digital worker or AI agent with access to personal data; or a material organisational change.

## 22. Training and Review

As a sole-director business, Tim commits to staying current with UK GDPR and PECR obligations relevant to AIP's operations, and to reviewing this policy at least annually or sooner if our tools, services, or the law change materially. Any future employee or contractor with data access will receive a data protection briefing before they start.

## 23. Related Policies

This policy should be read alongside our Privacy Policy (AIP-PS-001) and Cookie Policy (AIP-PS-002) — see Section 1 for how the three relate — and our Terms of Business (AIP-PS-005), which carries the client-facing confidentiality and AI provisions. Our AI Usage & Governance Policy (AIP-PS-006) and Digital Workers Policy (AIP-PS-007), both published at Version 1.0, set out in more depth how AI tools and digital workers interact with personal data in client delivery.

## 24. Changes to This Policy

We review and, where necessary, update this policy on the cycle set out in Section 21. The version number and status shown in the document control table above reflect the current version.

**24.1 What Changed at Version 1.0**

Version 1.0 is the outcome of the fifth and final review in this cycle, applying the v0.4 to v1.0 Update Notes of 31 August 2026. The substantive changes were:

- **ICO registration** recorded as completed under reference C2019678, and all pre-launch, mid-August and dormancy wording removed.
- **Continuity rewritten** (Section 5.1) to remove the implied adviser delegation and state the documented-access position honestly, including that no retainer or formal continuity arrangement exists.
- **Information Asset Register replaced** with the confirmed production register (Section 9.1). Slack removed as a current asset and classified as future only; Perplexity and Grok recorded as unapproved.
- **AI Tool Register and Digital Workers Register** added as linked governance records, with Hermes noted as operational.
- **Registers consolidated** into one Notion governance database with defined minimum fields, plus an absolute secrets rule: the register may record that a key exists, never its value.
- **Approved AI services named** — Claude, ChatGPT and Gemini — under an absolute restriction on identifiable, confidential or unpublished client information.
- **The MFA claim corrected.** The previous statement that MFA was enabled on Google Workspace and Notion was inaccurate. It is replaced by the exact status table in Section 14.1 and a prioritised rollout action.
- **Section 16 established as the single master retention schedule**, covering every category published in the Privacy Policy, with recordings removed.
- **Cal.eu migration** recorded as a vendor-continuity action due before 1 November 2026.
- **Cross-references corrected** — Privacy Policy security and rights references now point to Sections 16 and 18, and periodic-review references to Section 21 rather than Section 3.
- **Company number corrected** to 09715227.

This version is approved by Director approval. No external legal review has been carried out.

**24.2 Version History**

| Version | Date | Author / Approver | Status | Summary of change |
| --- | --- | --- | --- | --- |
| 0.1 | 12/Jul/2026 | Tim Parkin, Director | Working Draft | Initial working draft prepared for internal review. |
| 0.2 | 15/Jul/2026 | Tim Parkin, Director | Revised Working Draft | Corrected the Cambodia access wording. Added Definitions, Data Classification, vendor and AI approval, access control, access lifecycle and governance review. Qualified archive-not-delete against storage limitation. |
| 0.3 | 17/Jul/2026 | Tim Parkin, Director | Revised Working Draft | Added a single-authoritative-policy statement, data protection by design, an honest continuity statement, ICO registration status, a split IAR and RoPA, a register framework, and a security section audited against actual controls. |
| 0.4 | 18/Jul/2026 | Tim Parkin, Director | Revised Working Draft | Introduced a staged website-launch versus trading-commencement distinction; removed the assumed hosting provider pending final selection; made consent evidence conditional; corrected a Terms of Business cross-reference. |
| 1.0 | 31/Aug/2026 | Tim Parkin, Director | Approved | Fifth and final review. Adopted as Version 1.0, effective 1 September 2026. Changes are set out in full at Section 24.1. |

## 25. Policy Owner

**Owner:** Tim Parkin, Director, Groundframe Ltd t/a The AI Practitioner (company number 09715227)

**Email:**  info@theaipractitioner.ai

**Post:** 49 Station Road, Polegate, East Sussex, BN26 6EA, United Kingdom
