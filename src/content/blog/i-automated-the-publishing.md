---
title: "I automated the publishing. I forgot to automate the checking."
publishDate: 2026-09-18
excerpt: "Ten social posts went out on schedule all week. The blog posts behind them were never published, and nothing told me. I found it by hand, on a Friday, four days late."
category: "Case Study"
heroImage: ../../assets/blog/i-automated-the-publishing.png
heroImageAlt: "An empty conveyor belt running away from the camera through a quiet packing line."
shareImage: /blog-share/i-automated-the-publishing.png
tags: ["automation", "building-in-public", "verification"]
readingTime: 4
featured: true
---

Last week five posts went out, Monday to Friday. Ten social posts, two a day, every one published at
three in the morning exactly as scheduled.

The blog post that each of those was the short version of was never published at all.

Nothing failed. No error appeared anywhere. No alert fired, because there was nothing to fire it.
The publishing system reported complete success, and on its own terms it was telling the truth.

I found out on Friday, four days after the first one should have gone up.

## How I found it

Not by noticing. By running a reconciliation I do on Fridays, which is a dull job of checking that
what the records say happened actually happened.

Part of it is five requests to the live website, one per post, checking each URL returns a page.

All five returned 404.

The first thought was that I had the wrong address format, which is the far more common explanation
and would have been a much better outcome. So I checked the previous week's five URLs, built the
same way.

All five returned 200.

That is the moment it stopped being a possible mistake in my checking and became a fact about the
world. The format was right. The posts were not there.

## The gap that made it possible

Two systems, run by two different processes, with a handoff between them.

One writes the posts and schedules the social. The other imports them to the website and publishes.
Both worked perfectly. Neither was responsible for the join.

The social system had no way of knowing whether the blog post existed, and no reason to care. Its
job was to publish social posts, and it did. The website system had nothing to publish, because
nobody had handed it anything, and a system with nothing to do does not raise an alarm about the
absence of work.

Every individual part behaved correctly. The failure lived in the space between them, which is
exactly the space no system owns.

## Why this is not really about publishing

Automating a process and automating the confirmation that the process worked are two separate
projects. Almost everyone does the first, calls it finished, and does not notice that the second was
never started.

The reason is that the first one has an obvious moment of success. The thing runs, output appears,
you can see it. Verification has no such moment. It is work you do to establish that nothing has
quietly gone wrong, and on the overwhelming majority of days it tells you what you already believed.

So it feels like waste, right up until the day it is the only thing standing between you and a
month of silent failure.

The failure mode is specific and worth naming. It is not the automation breaking loudly. It is one
half of a chain working perfectly and reporting success, while the other half does nothing, and no
single system being able to see both ends at once.

## This is the second time

I would rather report this as bad luck. It is not, because it has happened before, in the other
direction.

Between the 3rd and the 27th of August, 74 social posts published normally and every one of them sat
in my records marked as still scheduled, for up to 25 days. The posts were fine. The record of them
was wrong, and stayed wrong, because nothing writes that status back automatically and I had not
been checking.

Same shape. One half of the pipeline working, the other half silently not, nothing connecting the
two. The Friday reconciliation exists because of that one.

Which means last week's failure was found by the process built after the previous failure of the
same kind. That is either encouraging or damning and I genuinely cannot decide which.

## What I would tell you to do

You are being sold automation. Every tool in this category demonstrates well, because a demonstration
is the happy path performed by someone who knows where the edges are.

The question that does not come up in the demonstration: when this runs and quietly does not work,
what tells me, and how long is the gap before it does?

Ask it about anything you have already automated. Invoicing, reporting, onboarding, backups,
whatever runs on its own and produces something you have stopped watching.

If the answer is that somebody would notice, ask two more. How would they notice, specifically? And
when did somebody last actually check?

For most automated processes in most organisations, the honest answers are "they would see it was
missing" and "I do not know". Both of those depend on a person happening to look at the right thing,
which is precisely the arrangement the automation was bought to replace.

## What I have actually done about it

Less than I would like, and I would rather say so than imply otherwise.

The check exists now as a written step in a documented process, run on a Friday, by hand. Five
requests, five status codes, and a rule that only a 200 counts and nothing gets marked as published
on the strength of the file existing on my machine.

That is better than what came before, which was nothing. It is not solved. A manual check depends on
someone remembering to run it, and the whole point of this post is that people forget.

Automating that check is now on the list. Until it is done, the honest position is that I have a
process rather than a solution, and that the gap between those two words is the entire subject.

## The part worth keeping

The posts are up now. Four days late, all at once instead of one a day, which is not how anyone
would have planned it.

The readers who saw the social versions on Monday and went looking for the longer piece found
nothing. I cannot fix that, and there is no version of this where the honest thing to do is quietly
change five dates and pretend the week ran normally.

Build the check. Not the pipeline, the check. The pipeline is the part you will enjoy building and
the check is the part that tells you the truth.
