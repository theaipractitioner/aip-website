---
title: "Digital Workers Policy"
policyId: "AIP-PS-007"
version: "1.0"
effectiveDate: 31 July 2026
nextReview: "31 July 2027, or sooner on material change"
owner: "Tim Parkin, Director"
appliesTo: "Every Digital Worker registered to operate within AIP, and every human who creates, supervises, reviews or retires one"
summary: "How we govern AI that operates as a registered, semi-autonomous member of our workforce, rather than as a tool a human is driving."
group: "how-we-work"
order: 2
---

## 1. Introduction and Purpose

AIP operates a governed digital workforce: AI-driven “Digital Workers” that perform defined operational, analytical, administrative, orchestration or supervisory roles alongside human personnel. This policy sets out the rules under which Digital Workers are created, authorised, supervised, reviewed and retired. It is the published policy expression of AIP's internal Digital Workforce Governance Framework.

This policy governs AI operating as a registered member of AIP's digital workforce. It is a companion to the AI Usage & Governance Policy (AIP-PS-006), which governs AI used as a tool under a human's direct, session-by-session control. Section 7 explains how the two are distinguished.

## 2. Classification of Ambiguous AI Capabilities

Where there is uncertainty as to whether an AI capability should be governed as a human-operated AI tool under the AI Usage & Governance Policy (AIP-PS-006) or as a registered Digital Worker under this policy, it shall be governed under this policy (AIP-PS-007) until its classification has been determined by the Director. Until the Director determines the correct classification, the requirements and controls of this policy apply to that capability.

## 3. Policy Hierarchy and Interpretation

This policy forms part of AIP’s integrated governance framework. Where policies overlap, they must be read together wherever possible. Where an actual conflict exists, the policy dealing most specifically with the subject matter takes precedence. Where uncertainty remains, the Director will determine the applicable interpretation pending formal clarification or amendment.

The Director’s interpretation is an interim governance determination and does not replace the formal policy amendment process.

## 4. Scope

This policy applies to every Digital Worker registered, or proposed for registration, within AIP's Digital Workers Register (DB01), and to every human who creates, owns, supervises, reviews, investigates an incident involving, or retires a Digital Worker. It applies irrespective of the underlying technology platform or AI provider used to implement a given worker.

## 5. Definitions

The following terms have the meanings set out below wherever they are used in this policy.

- **Digital Worker / Worker.** A governed digital entity that performs a defined role, function, responsibility or supervisory activity on behalf of AIP, as set out in Section 6. The terms “Digital Worker” and “Worker” are used interchangeably in this policy.
- **Human Authority.** The person(s) authorised to approve Worker creation, retirement, governance changes, expenditure and strategic decisions on AIP’s behalf; currently the Director, Tim Parkin, with this authority expected to extend to a future Governance Board as AIP grows, as set out in the Worker Authority Model at Section 10.
- **Governance Authority.** The level of authority (A1–A5) that determines what a Worker is authorised to do on behalf of AIP, as set out in the Worker Authority Model at Section 10.
- **Technical Permission.** The level of technical access a Worker holds within its implementation platform — Read Only; Read + Write; Read + Write + Archive; or Admin — independent of its Governance Authority, as set out in Section 10.
- **Platform.** The underlying technology or vendor infrastructure on which a Worker is implemented. A Worker’s identity and governance history are independent of its Platform, as set out in Section 15.
- **Infrastructure.** A tool, connector or automation with no independent identity or ongoing responsibility, and which therefore falls outside this policy, as distinguished from a Worker under the test in Section 6.
- **Supervisory Worker.** A Worker responsible for coordinating, assigning and reviewing the work of Operational Workers, as set out in Section 11 and Section 17.
- **Governance Worker.** A Worker that monitors governance compliance, registrations, review schedules and controls, and escalates issues, without independent authority to approve governance policy, as set out in Section 17.
- **Operational Worker.** A Worker that executes approved operational, analytical or administrative tasks within its delegated authority level, as set out in Section 17.

## 6. Definition of a Worker

A Worker is a governed digital entity that performs a defined role, function, responsibility or supervisory activity on behalf of AIP.

A digital entity is classified as a Worker, rather than as infrastructure, using the following test: if this entity were moved to a different platform tomorrow, would it still be the same governed asset? If yes, it is a Worker. If no — because it is a tool, connector or automation with no independent identity or ongoing responsibility — it is Infrastructure and falls outside this policy.

Where classification is unclear, the Director will determine whether the entity should be governed as a Digital Worker or as infrastructure.

| Entity | Classification |
| --- | --- |
| Hermes (supervisory and governance worker) | Worker |
| Research Worker / Content Worker / Marketing Worker / Governance Worker | Worker |
| Scheduled automation | Infrastructure |
| Workflow | Infrastructure |
| MCP connector | Infrastructure |
| Claude Project / Perplexity Workspace / ChatGPT Project / Gemini Workspace | Infrastructure |

## 7. Relationship to the AI Usage & Governance Policy

Occasional or session-by-session use of an AI assistant by a human — for example, drafting a document or researching a topic — is governed by the AI Usage & Governance Policy (AIP-PS-006) and does not require registration. Where AI use develops into an ongoing, named role with standing responsibilities and its own identity, it must be assessed against the Worker test in Section 6 and, if it qualifies, registered as a Digital Worker under this policy before it is deployed.

## 8. Guiding Principles

- **Technology neutrality.** This policy governs Workers by role, authority, responsibility and risk classification — irrespective of the underlying platform, vendor or AI model. A Worker's identity, governance history and authority survive a platform migration; only the platform attribute changes.
- **Human accountability.** Human personnel retain ultimate accountability for all business activity. Authority may be delegated to a Worker; accountability is never delegated away from a human.
- **Delegated authority.** Every Digital Worker operates only within the authority explicitly delegated to it. Authority not expressly delegated remains with Human Authority.
- **Archive, never delete.** Worker records, governance records and audit history are retained permanently. Workers may be retired or archived; their registration record and Worker ID are never deleted or reused.
- **Risk-based governance.** Review cycles and controls are set according to assessed risk. Quarterly review is the current default pending a formal risk-based review model.
- **Scalability.** The governance model is designed to remain workable as the digital workforce grows — the current planning assumption is a workforce of up to approximately 100 Digital Workers.
- **Build only what is justified.** Additional governance infrastructure (systems, databases, controls) is introduced only when growth, incident volume or operational complexity creates a demonstrable need — not speculatively.
- **Proportionate governance.** Governance controls, processes and documentation should remain proportionate to AIP’s size, maturity, operational complexity and risk profile, and should evolve as the organisation grows.

## 9. The Hybrid Organisation

AIP is organised as a Hybrid Organisation: human personnel and Digital Workers operate within a single structure. Human personnel retain governance, accountability and strategic control. Digital Workers perform approved operational, analytical, administrative, orchestration and supervisory activities within the authority delegated to them.

## 10. Worker Authority Model

AIP separates two independent forms of authority. Holding one does not automatically confer the other.

- **Technical Permissions** govern what a Worker is technically able to do within its implementation platform: Read Only; Read + Write; Read + Write + Archive; or Admin.
- **Governance Authority** governs what a Worker is authorised to do on behalf of AIP, set out in the five-level model below.

Technical Permissions and Governance Authority are independent. A Worker may require high technical permissions but limited governance authority, or vice versa, depending on its role.

| Level | Authority | Permitted | Cannot do without human approval |
| --- | --- | --- | --- |
| A1 | Advisory | Research, analysis, drafting, recommendation, reporting | Approve actions, commit expenditure, create or retire Workers, modify governance controls |
| A2 | Operational | Create/update records, execute approved workflows, perform assigned tasks | Approve governance decisions or expenditure, create or retire Workers |
| A3 | Supervisory | Review Worker outputs, assign work, coordinate Workers, escalate issues | Approve governance changes or expenditure, create or retire Workers without human approval |
| A4 | Governance | Review governance compliance, registrations, performance and controls; recommend action | Approve its own recommendations, commit expenditure, change governance policy |
| A5 | Human Authority | Approve Worker creation/retirement, governance changes, expenditure, strategic decisions | Not applicable — reserved for Human Authority (currently the Director, Tim Parkin; in future, a Governance Board) |

A Worker may only exercise authority explicitly delegated to it. Authority not explicitly delegated is reserved for Human Authority. No Digital Worker may independently commit AIP financially, sign a contract, approve a governance policy change, approve a strategic direction change, or create or retire a Worker without human approval.

Each Worker’s Governance Authority Level and Technical Permission Level must be explicitly approved and recorded in the Digital Workers Register (DB01). Authority must not be inferred from the Worker’s name, role description, platform configuration or technical permissions.

## 11. Worker Hierarchy and Supervision

- Every Operational Worker has an identified Supervisory Worker.
- Every Supervisory Worker is subject to governance oversight by either a Governance Worker or Human Authority.
- No Digital Worker may supervise Human Authority.
- Hermes is AIP's primary coordination, supervisory and governance oversight worker, holding a dual classification as Supervisory Worker and Governance Worker — the highest Worker authority level below Human Authority. Hermes may coordinate, assign and review work and monitor governance compliance, but may not approve governance policy, approve expenditure, approve strategic direction, or create or retire Workers.

## 12. Registration and the Digital Workers Register

The Digital Workers Register (DB01) is the single authoritative register of every Digital Worker operating within AIP. The following rules apply:

- **Register first, deploy second.** Registration is mandatory before deployment. A Worker does not officially exist, and may not operate within AIP's environment, until it is registered.
- **One record per Worker.** Each Worker holds a single, permanent registration record. Worker IDs are never reused, renumbered or reassigned.
- **Minimum registration record.** Each registration includes, as a minimum: Worker ID, Worker Name, Owner, Approved Purpose / Approved Role Statement, Governance Authority Level, Technical Permission Level, Platform, Status and Review Date. Additional attributes may be added as the governance model evolves.
- **Controlled changes.** Material changes to a Worker’s registration record, including changes to governance authority, ownership, status or platform, must be authorised by Human Authority and recorded in DB01. Routine operational updates may be made in accordance with delegated responsibilities.
- **Full lifecycle tracked in DB01.** Registration, review, change control, incident management, retirement and archiving are all recorded in DB01.

## 13. Worker Created in Error

Where a Worker registration is created in error — for example an accidental, duplicate or test registration — the following applies: the Worker ID remains allocated and is never reused; the registration record is retained; its status is changed to “Created in Error” or “Invalid Registration”; and it is archived with the reason recorded. This preserves auditability and identity continuity across the register.

## 14. Human Approval Requirements

The following activities always require human approval and may never be exercised independently by a Digital Worker:

- Financial commitments and expenditure approvals.
- Governance approvals and changes to governance policy.
- Creation, suspension or retirement of a Worker.
- Strategic business decisions.
- Entering into, varying or terminating any contract or other legally binding commitment.
- Granting or materially changing privileged system access.
- Authorising disclosure of personal, confidential or commercially sensitive information outside an approved process.
- Overriding, disabling or materially changing a governance, security or audit control.
- Issuing formal client, legal, regulatory, contractual or data-protection communications without appropriate prior human review.
- Any additional activity specifically designated by Human Authority as requiring approval.

Human Authority may designate further categories of mandatory-approval activity by internal governance decision, without requiring formal amendment of this policy; any new designation is recorded in DB01 and reflected at the policy’s next scheduled review.

## 15. Platform Neutrality

A Worker's identity is permanent and is not defined by the technology platform it runs on. Migrating a Worker from one platform to another does not create a new Worker: the Worker ID, registration record, authority, ownership and governance history are unchanged, and only the platform attribute changes. AIP currently implements its Digital Workforce on the Hermes / Notion Workers platform; alternative agentic platforms are monitored through an ongoing Technology Watch process and reviewed annually, and migration will only be considered where there is a demonstrable governance, security, operational or strategic advantage.

## 16. Review, Incidents and Retirement

- **Review.** Every Digital Worker is reviewed on a risk-based cycle; quarterly review is the current default. Routine operational oversight may occur continuously through normal management activities. The formal review cycle provides the documented governance review and does not replace ongoing supervision. In addition, a Worker that undergoes a material change — to its authority, permissions, platform, approved purpose or ownership — requires an additional governance review triggered by that change, rather than waiting for the next scheduled review cycle.
- **Incident management.** Incidents involving a Digital Worker are logged against its record in DB01 and escalated to Human Authority where they involve a breach of delegated authority, a data or security concern, or a client-facing error.
- **Continual improvement.** Where appropriate, significant incidents should be considered during subsequent governance reviews to determine whether changes to delegated authority, supervision arrangements, governance controls or policy are justified.
- **Retirement and archiving.** A Worker may be retired by Human Authority approval. Retired and archived Workers are never deleted; their record and history are preserved in line with the Archive Never Delete principle.

## 17. Roles and Responsibilities

- **Human Authority (Director, Tim Parkin):** ultimate accountability for the digital workforce; approves Worker creation, retirement, governance changes, expenditure and strategic decisions.
- **Governance Workers:** monitor governance compliance, registrations, review schedules and controls, and escalate issues — without independent authority to approve governance policy.
- **Supervisory Workers:** coordinate, assign and review the work of Operational Workers within delegated authority.
- **Operational Workers:** execute approved operational, analytical or administrative tasks within their delegated authority level.

## 18. Controlled Exceptions

Exceptions to this policy are expected to be exceptional and infrequent. Any temporary departure from the requirements of this policy must, wherever practicable, be approved in advance by Human Authority (currently the Director), documented with the reason, scope and duration of the exception, and reviewed once the exceptional circumstances have ended. Permanent changes to policy must be made only through the formal policy review and approval process.

Where advance approval is genuinely impracticable, the record and review should be completed as soon as reasonably possible under AIP’s established governance arrangements.

## 19. Review and Changes to This Policy

This policy is reviewed at least every 12 months, and sooner where the underlying AIP Digital Workforce Governance Framework is materially revised, where a new Governance Authority level or worker category is introduced, where there is a material change in legislation, regulatory guidance, recognised industry standards or the wider AI governance environment, following a significant incident under Section 16, or where a material change to the AI Usage & Governance Policy (AIP-PS-006) affects the distinction between AI tools used under human control and registered Digital Workers.

## 20. Contact

Policy owner: Tim Parkin, Director, Groundframe Ltd t/a The AI Practitioner

Email: info@theaipractitioner.ai
