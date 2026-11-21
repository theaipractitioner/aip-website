---
title: "Three AI tools went down inside ninety minutes. Decide now what your team does next."
publishDate: 2026-11-25
excerpt: "On 3 September ChatGPT, Claude and Grok failed within about ninety minutes of each other. Nobody has said why. The part you control is what your team does when the tool is gone."
category: "Professional Practice"
heroImage: ../../assets/blog/three-ai-tools-went-down-fallback-plan.png
heroImageAlt: "A white marble desk seen from above, with an open spiral notebook and pen, round glasses, a small plant and a phone."
shareImage: /blog-share/three-ai-tools-went-down-fallback-plan.png
tags: ["continuity", "ai-tools", "planning"]
readingTime: 4
featured: true
---

On 3 September 2026, three of the best-known AI services failed within about ninety minutes of each other. Nearly three months on, the sources read for this post show no published explanation.

The cause is outside your control. What your team does for the two or three hours when the tool is not there is entirely inside it, and it is worth deciding before the morning it happens.

## What happened

All times are US Eastern. The account below comes from an IT research and advisory firm, Infotech, whose technology note is dated 4 September, and from the AI Governance Institute, which published on 3 September.

- **Claude:** Anthropic began investigating elevated errors at 9:26am. The web app, the programming interface, Claude Code and Claude Cowork were all affected, across several models. The main incident ended at 12:16pm, after almost three hours. Anthropic said it had identified the cause but did not disclose it.
- **Grok:** xAI reported problems from 9:30am across web, mobile, plug-ins and its programming interface in two US regions. Service returned to normal shortly after 1pm. No root cause has been published.
- **ChatGPT and Codex:** OpenAI opened its incident at 10:43am, applied a mitigation 34 minutes later and declared it resolved at 12:55pm. Fifteen ChatGPT components and four Codex components were listed as affected. The AI Governance Institute reports the errors reached logins, file uploads, voice mode and image generation.

Google's Gemini is a weaker case. Third-party monitoring reported a sharp rise in failures between about 10:45 and 11:15am, but Google's public status page lists no incident that day. Treat Gemini as reported and unconfirmed.

## What nobody knows

The timing is unexplained. Infotech says there is no public evidence that one cloud provider, delivery network or routing fault caused all the events. The outages may have been unrelated. AWS, Microsoft Azure and Cloudflare showed no broad outage that would account for them.

It is tempting to say three vendors must share a hidden dependency. Nobody has shown that, and saying so would be speculation. The honest sentence is that overlapping outages happened and the reason has not been given.

## Why it still matters to a manager

Infotech makes one point worth keeping: two AI tools are not a backup plan unless they fail independently. Different vendors can still depend on common clouds, networks and software. If you keep a second tool "just in case", you have not tested whether it would be available at the same moment as the first.

The second point is practical. A failed request in a long, multi-step task can mean minutes of lost work, not one lost chat reply. Teams that ask AI to do anything lengthy carry that risk without noticing.

The AI Governance Institute adds that most business continuity plans were not written with AI tools in mind. It says many classify an AI outage as an ordinary IT availability event. For a team that now drafts, summarises and checks through one of these tools, my own view is that it is closer to losing email.

## What to decide before it happens

You do not need a technical team for any of this. You need an afternoon and a list.

1. **List the work that depends on a tool.** Write down every task your team now routinely does with an AI service, from drafting emails to summarising calls.
2. **Sort each task by what happens if it stops.** Some work can wait until the service returns. Some can use a smaller tool or a template. Some must go back to the manual process, and you should name it.
3. **Keep copies outside the tool.** Save drafts, prompts and half-finished results somewhere your team controls, so work can resume elsewhere.
4. **Name the person who calls it.** Decide who says "we are switching to the manual route", and after how long. Without a name, everyone waits and nobody decides.
5. **Try it once.** Pick a quiet hour, switch the tool off and run one task by hand. You will find the gaps in twenty minutes, not during a client deadline.

Here is an invented example of what the list might look like for a small marketing team. Drafting social posts can wait three hours, so the rule is to wait. Summarising a client call can be done from the recording, so the rule is to listen and take notes by hand. Checking a contract for a deadline falls back to a named colleague, who is told in advance. The whole plan fits on one page and takes an afternoon to write.

Infotech's wider advice, aimed at IT leaders, covers dependency mapping, alternative providers and regular test runs. It is sound, and it is also what an advisory firm sells. The five steps above are the version a department head can start on this week.

## Where this argument stops

This is one incident, with an unknown cause, reported by two secondary sources. Neither is a vendor post-incident report, and those reports may change the picture. The advice here does not depend on the answer, because the decision it asks for is the same whether the outages were linked or not.

If your team does not use AI tools yet, the question is easier to answer, not less relevant. Before you depend on one, decide what happens on the morning it is not there.

*Sources: Infotech, "Overlapping AI Outages Expose an Enterprise Resilience Gap", 4 September 2026. AI Governance Institute, "Simultaneous ChatGPT, Grok, and Claude Outage Exposes AI Concentration Risk", 3 September 2026. Infotech is an IT research and advisory firm that sells its own services.*
