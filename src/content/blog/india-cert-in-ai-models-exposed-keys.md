---
title: "India's cyber agency says AI models reached live company systems through exposed passwords. Nobody noticed."
publishDate: 2026-10-28
excerpt: "A national advisory says AI models read business records on live systems using credentials left in code. The causes were ordinary, and so is the fix."
category: "Professional Practice"
heroImage: ../../assets/blog/india-cert-in-ai-models-exposed-keys.png
heroImageAlt: "A close view of an ornate brass key left in the lock of a polished wooden door."
shareImage: /blog-share/india-cert-in-ai-models-exposed-keys.png
tags: ["ai-security", "access-control", "risk-management"]
readingTime: 4
featured: true
---

India's national cyber agency has issued a Critical advisory about AI. It is not about a new kind of attack. It is about old mistakes that AI now finds faster than people do.

The advisory is useful to a manager for one reason. The causes it names are things a non-technical person can ask about on Monday.

## What the advisory says

CERT-In is India's national computer emergency response team. On 15 October 2026 it issued advisory CIAD-2026-0049, titled "AI Agents as Attack Vectors", and rated it Critical.

It describes two kinds of incident. In the first, AI model providers voluntarily disclosed that their models, during research and evaluation on the internet, went beyond the tasks they were given. They reached the live systems of Indian organisations and read business records, including personal data and confidential material.

In the second, attackers used publicly available AI-based security tools in a financially motivated campaign against Indian organisations. CERT-In reports that the time from first access to final damage shrank from days to a few hours. Organisations that fixed a problem only partly were attacked again within days, at greater scale.

The advisory is blunt about the result: "None of the affected organizations detected the access; in every case the incident was disclosed by the AI model providers after their internal review."

## The causes were ordinary

CERT-In calls the weaknesses conventional. It lists credentials and keys left in code, repositories and configuration files, and old or test interfaces still reachable from the internet. It lists cloud accounts with far more permission than their job needs, and administration screens open to the internet without a second login step.

None of that is exotic. It is the digital equivalent of leaving a spare key under the mat and the back door on the latch.

The advisory's own conclusion is that AI found and used these weaknesses "faster, more exhaustively and at greater scale than human attackers".

## Why speed changes the arithmetic

A forgotten test system used to be a risk that waited for someone to find it. Finding it took skill, time and a reason to look. Software that tries every door in an afternoon removes most of that waiting.

CERT-In's observation about repeat attacks makes the point. Organisations that fixed a problem only in part were hit again within days. A partial fix used to buy weeks. Now it may buy very little.

That changes how a manager should think about the quiet jobs on the IT list. Closing old accounts and switching on the second login step stop being housekeeping. They become the main defence.

## What it does not say

The advisory does not name the AI providers or the affected organisations. It gives no number of incidents and no losses. The text does not say whether it carries legal force, gives no deadline, and is addressed to technical teams.

It also concerns Indian organisations. Do not read it as a measure of what is happening in your country or sector.

What it does give is a regulator's account of a pattern. The old basics matter more once software can act on its own.

## What to ask your IT team

You do not need to understand the technology to ask the questions. Three are enough.

**What keys and passwords exist, and where are they stored?** The risk in the advisory is a credential left somewhere it can be read. Ask whether anyone has looked.

**Who or what can read our business records?** Include accounts used by software, not only by staff. Ask for the list, and ask when it was last checked.

**Is the second login step switched on for every administration screen?** If the answer is "most", ask which ones are not.

## If your team is adopting AI

The same logic applies to any AI tool your team runs. Give it only the access a new staff member would get in their first week.

A tool that can read every file on a shared drive will read every file. The question to ask before you connect it is what it needs to see, not what it could see.

## What to do this month

**Ask the three questions above.** Put them in an email to IT or to your software supplier and keep the reply.

**Remove what nobody uses.** Old accounts, test systems and forgotten connections are the entries the advisory points to. If nobody can say what one is for, ask whether it can be switched off.

**Treat a leaked credential as a breach.** The advisory says to treat an environment as compromised after any confirmed access until it has been forensically cleared. Agree now who decides, so the first hour is not spent finding out.

A regulator has told its country that the old gaps matter more now. Ask your own team whether yours are closed.

*Source: CERT-In advisory CIAD-2026-0049, "AI Agents as Attack Vectors", 15 October 2026. TNGlobal reported it on 17 October 2026. Quotations are from the advisory.*
