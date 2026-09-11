---
title: "It took him seven weeks to find out what the product does"
publishDate: 2026-09-09
excerpt: "Simon Willison spent seven weeks establishing what ChatGPT Work actually does, because the vendor explains it by use case rather than capability. What he found is a procurement problem."
category: "Tools & Techniques"
heroImage: ../../assets/blog/seven-weeks-to-find-out-what-the-product-does.png
heroImageAlt: "Stacked sealed cardboard boxes with printed shipping labels, waiting in a loading bay."
shareImage: /blog-share/seven-weeks-to-find-out-what-the-product-does.png
tags: ["procurement", "ai-tools", "shadow-it"]
readingTime: 4
featured: false
---

Simon Willison spent seven weeks working out what ChatGPT Work actually does, then published 2,234
words explaining it. He is a working software developer with twenty years of practice at reading
technical documentation.

His complaint is not that the product is bad. He describes it as extraordinarily confusing and very
powerful, in that order. His complaint is that the vendor explains it by use case rather than by
capability, and does not publish the system prompt or the tool descriptions, so a buyer cannot
establish what they are getting.

If it takes him seven weeks, the question for the rest of us is not whether to buy it. It is what we
have already got.

## The guidance is circular

The official advice he quotes: use Chat for an answer or a short draft, and use Work when you want
the task completed with a clear outcome.

He points out, reasonably, that he has been using Chat for exactly that for years. The guidance
describes an intention rather than a capability, and intentions do not tell you what a piece of
software is permitted to do inside your organisation.

That distinction is the whole of this post. A use case tells you what somebody imagined you might
want. A capability tells you what the thing can do at three in the morning when nobody is looking.

## What he found by testing rather than reading

Working it out by hand produced a list. Code execution with broad internet access, not a short
allowlist of approved destinations. A full headless browser that can run scripts, fill in forms and
take screenshots. Website deployment. Parallel sub-agents. Forty-four built-in skills covering
documents, spreadsheets, PDFs, images and dashboards.

Two items on that list deserve to be pulled out, because they are the ones that change what the
software is rather than what it can produce.

The first is a persistent filesystem. Files survive between conversations. His own account had
accumulated 171 folders without any deliberate act of filing.

The second is scheduled prompts, which run on their own. Work does not end when the conversation
ends.

Most people picture a chat window: you ask, it answers, you close the tab, nothing continues. Both of
those features break that picture, and neither appears in the guidance about drafts and clear
outcomes.

## Then he looked in the cache folder

A week later, Willison opened the runtime cache of the same company's desktop application and found
1.7GB of bundled software.

A full Python installation, at 440.6MB. A full Node.js installation, at 446.4MB. And 771MB of native
binaries, including a headless LibreOffice at 429.7MB, Poppler at 187.9MB and git at 148.1MB.

Somebody in a department installs a chat application. What actually arrives on the laptop is a
programming language, a second programming language, a version control system and an office suite.

None of that is sinister. The tools are there because the product needs them to open a spreadsheet
or convert a PDF, and bundling them is a sensible engineering decision. It is also four significant
pieces of software that appeared on a company machine without appearing in any approval.

## The question is not whether to buy it

Here is why this matters more than a normal software review would.

ChatGPT Work sits inside a subscription many people already pay for, at the $20 a month tier and
above. It arrives without a purchase decision. There is a Cloud half reached through the website and
the mobile applications, and a Local half that is a desktop application with access to files and
programs on the machine.

So the framing that matters for a manager is not "should we buy this". It is "we appear to have
bought something and nobody in this building can describe what it does".

That is a procurement question wearing technical clothes. It is answerable by non-technical people,
and it is not answerable by reading marketing copy.

## What to actually ask

Three questions, and they work against any AI tool your team already has.

What is it permitted to do without asking anyone? Not what it is for. What it is able to do,
including reaching the internet, writing files that persist, and running when nobody is present.

What did installing it put on the machine? Somebody in IT can answer this in ten minutes and will
probably enjoy being asked.

Where is that written down by the vendor, in a form we can check when it changes? If the answer is
nowhere, that is not a reason to avoid the tool. It is a reason to know that your understanding of
it has an expiry date you will not be told about.

## Why the vendor's silence is the story

It would be easy to read this as a complaint about one company's documentation, and easy to dismiss
on that basis. The reason it is worth more than that is what the silence does downstream.

Every organisation running an AI tool has made an implicit bet: that what the tool does today is
roughly what it did last month. That bet is only checkable if the vendor publishes what the tool is
instructed to do and tells you when the instructions change.

Where that is not published, your understanding of the software is a snapshot taken on the day
somebody last investigated. It can go out of date silently, and the first sign will be a behaviour
somebody notices by accident. Willison's seven weeks bought him an accurate picture of a moving
object, and the picture starts ageing immediately.

## Two honest caveats

Willison assesses the product against his own framing, which he calls the lethal trifecta: access to
private data, exposure to untrusted content, and a route to send information out. He observes that
ChatGPT Work has all three at once. That is his analytical model rather than an industry standard,
and it is a good one, but attribute it to him.

The 1.7GB breakdown is one person's observation on one machine. The sizes and the paths are his. Do
not assume the same numbers apply to your build, and do not generalise the finding to other AI
desktop applications without opening those too.

## The ten-minute version

Pick the AI tool your team already pays for. Ask whether anyone in the room can describe what it is
permitted to do, and what it put on the laptop.

If the answer comes back quickly and confidently, you are in better shape than most. If the room
goes quiet, you have found something worth an afternoon, and it took ten minutes rather than seven
weeks.
