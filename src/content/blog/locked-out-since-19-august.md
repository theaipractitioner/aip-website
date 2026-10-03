---
title: "My research agent has been locked out of OpenAI's website since 19 August"
publishDate: 2026-10-09
excerpt: "Every morning since 19 August, OpenAI's website has turned our research agent away. How it copes is a habit worth copying: label every claim it did not read itself."
category: "Tools & Techniques"
heroImage: ../../assets/blog/locked-out-since-19-august.png
heroImageAlt: "A closed glass office door in cool blue light, its handle in sharp focus and the corridor beyond blurred."
shareImage: /blog-share/locked-out-since-19-august.png
tags: ["research-practice", "source-checking", "building-in-public"]
readingTime: 4
featured: false
---

Every morning at six, an AI agent I built reads eight sources of AI news and writes me a digest. Since 19 August, one of those sources has refused to let it in.

OpenAI's website answers every request from the agent with the same error: 403 Forbidden. I do not know why. It could be a rule about automated visitors, or something about where the requests come from. I have not tried to get round it, and neither has the agent.

What the agent does instead is worth describing, because it is a habit most teams using AI for research do not have.

## The rule: say where you got it

The agent has a simple instruction for a source it cannot read. Try once, record the failure, and do not substitute someone else's summary as though it were the original.

So for six weeks, everything this project knows about OpenAI has come second-hand, and every claim says so. When OpenAI disclosed that its agents had reached US government websites, the digest cited Nextgov, the publication that reported it. When OpenAI held its developer conference, the details came from Simon Willison's live blog and were labelled that way.

When a newsletter reported which subscription plans include OpenAI's new team agents, the digest wrote "unconfirmed at OpenAI" beside it. Some claims never got past that label. One newsletter described further incidents that I could not find at any primary source, so they stayed marked unconfirmed and never reached a post.

The obvious objection is that plenty of sites republish OpenAI's announcements, so why not read a copy? The trouble is that a copy can be a summary, an excerpt or an interpretation. Once it is in the digest without a label, nobody downstream can tell which, and a journalist's reading of an announcement starts to look like the announcement itself.

That is a small amount of extra writing. It changes what you can safely do with the result.

## The same lesson from a source that was open

The second example came from a source with no lock on the door.

On 28 September Anthropic released a new model, Claude Sonnet 5.5. It never appeared on Anthropic's own news page. The launch had a separate page of its own, and the newsroom listing simply did not show it.

A check that read only the listing would have reported "nothing new from Anthropic" and been confidently wrong. The digest caught it because it looks for launches in more than one place. The general point holds either way: a source being reachable is not the same as having read the thing you needed from it.

## Why this matters outside a content pipeline

Most teams now use AI to summarise reading they do not have time for. A competitor's announcements, a regulator's guidance, a pile of supplier documents.

The summary arrives fluent and complete. It does not tell you which parts the tool read at source, which it took from a secondary report, and which it filled in because the original was not available. Those three kinds of claim look identical on the page, and they are not worth the same.

Take a team using an AI tool to summarise a regulator's new guidance. If the tool opened the guidance itself, the summary is a reading of the rules. If it could only find a law firm's article about the guidance, the summary is a reading of the law firm's reading. That may be accurate, but it is a different thing, and nothing on the page says so.

The fix is not a better tool. It is a label. Every claim you did not see yourself carries "as reported by" and the name of whoever reported it. When the original is closed to you, the honest move is to say where you got it, not to write as though you had read it.

That label does three jobs. It tells the reader how much weight to put on the claim. It tells you what to go back and check if the claim turns out to matter. And it stops a second-hand claim from quietly becoming a first-hand fact three documents later.

## The count that needed checking too

I went back through the agent's log to write this post and found something I had missed.

The agent keeps a running count of how long the block has lasted. On 2 October it reported "the 43rd day". But the first refusal was on 19 August, which makes 2 October the 45th day.

The count had drifted twice. Two runs in a row in early September both recorded "the eighteenth consecutive day". A few days later, two runs mentioned the block without giving a number, and the next numbered run picked up one day short.

Neither slip affected anything published. It is still a neat illustration of the same point. Even the agent's own tally of what it could not read was a claim worth checking against the source, and the source was its own log.

## What I would suggest

**Ask for the label.** Next time an AI tool or a colleague hands your team a research summary, ask which claims were read at source and which were repeated from someone else. If nobody can answer, that is the gap.

**Treat "could not read it" as a result.** A failed source recorded honestly is useful information. A failed source quietly filled in from somewhere else is a risk you have not seen yet.

**Check the counts as well as the claims.** Running totals, dates and tallies drift without anyone deciding to change them. They are the easiest thing to verify and the least often verified.

Forty-five days in, the agent still tries OpenAI's website once every morning, records the refusal, and moves on. I have come to think that is the most trustworthy thing it does.
