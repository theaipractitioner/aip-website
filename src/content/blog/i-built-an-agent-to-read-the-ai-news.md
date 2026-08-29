---
title: "I built an agent to read the AI news. It kept handing me year-old stories."
publishDate: 2026-08-21
excerpt: "Nothing was hallucinated. Every item was real, sourced and accurate. One wrong assumption in an instruction I wrote myself made half the digest useless."
category: "Tools & Techniques"
tags: ["agents", "verification", "practice"]
readingTime: 5
featured: false
---

Last Wednesday my research agent handed me a news digest in which roughly half the items were stale.

Three stories were over a year old and presented as current. Three were application deadlines that had already closed, written up as live opportunities worth acting on. One story appeared twice, because two of the feeds it reads carry the same syndicated content.

The agent scans eight sources every morning and summarises what is worth my attention. It had been running for weeks. I had been reading its output and finding it useful.

## What went wrong

It was reading each page's "last updated" timestamp and treating it as the publication date.

That is all. One wrong assumption, sitting quietly inside an instruction I wrote myself.

Pages get their timestamp touched for all sorts of reasons that have nothing to do with the content. Somebody adds a related-links block. The site changes a template. A cookie banner gets updated across every page on the domain. The article is from March 2025 and the stamp says yesterday, and both of those facts are correct.

## The part that matters

The agent was not broken. It was not hallucinating.

Nothing was invented. Every item in that digest was a real story, from a real source, at a real URL, accurately summarised. If you had checked any individual claim you would have found it stood up perfectly.

It did exactly what I told it to do. What I told it was subtly wrong.

That is the most common failure in real AI use, and it is close to invisible, because the output looks completely plausible. There is no error message. Nothing is flagged. The digest arrived looking exactly like every useful digest that came before it, with the same tone and the same confident structure, and the difference was entirely in whether the dates meant what I assumed they meant.

Yesterday's post was about an agent that never finishes. This is the opposite failure and it is worse, because at least the first one is visible. This one hands you something finished and wrong, and looks pleased with itself.

## Why I caught it

Not because I am careful, and not because I read the digest sceptically that morning. I caught it because the items were being checked against a database that already held the answers.

The stories go into a content log that has been running for weeks and already contained most of them. When the same story appeared as new, the log said otherwise. That comparison is what surfaced the problem. Without it I would have published from that digest and found out later, or not at all.

This is worth being precise about, because it is the only genuinely transferable part of the story. The control was not intelligence, or scepticism, or a better model. It was a point in the process where the agent's output met something that already knew the answer.

That is a mundane thing to build and it is the difference between an automation you can trust and one you are hoping about.

## The fix

An afternoon. I rewrote the instructions so the agent looks for a genuine publication date in the page's structured data, treats a missing one as unknown rather than assuming the timestamp, and flags anything it cannot date rather than presenting it as current.

Then I ran it against the same eight sources and compared the output to the log again, which is the same check that caught the problem in the first place.

No drama. A morning to notice, an afternoon to fix, and a version number.

## What this has to do with Monday

On Monday I wrote about a German tax network that got 84% of its people using AI every week, and the argument was that adoption is a management problem rather than a software problem.

This is what managing it looks like on an ordinary Wednesday. Not a crisis, not a governance framework, not a committee. Just somebody checking the work against something that already knows the answer, noticing a discrepancy, and spending an afternoon on it.

The business I run teaches people to use AI properly. That does not exempt me from this. It is mildly the opposite: if you use these tools daily on real work you will hit this more often than someone who uses them occasionally, because you give them more chances to be subtly wrong.

## The thing to take away

If you are running anything on autopilot, go and check one output against something you already know the answer to.

Not the whole thing. One output, against one fact you can verify independently. If it matches, you have learned something cheap. If it does not, you have found the version of this that is currently running in your own work.

It took me weeks to find mine, and I only found it because of a check I had built for a completely different reason.

---
Source: AIP internal. The digest in question landed on 12 August 2026 and the agent instructions were rewritten the following day.
