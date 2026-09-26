---
title: "We wrote Monday's post on Sunday. Nobody had the job of publishing it."
publishDate: 2026-10-02
excerpt: "Five posts were finished and ready. Monday's went live nearly three hours late, because moving them between two systems was nobody's job."
category: "Case Study"
heroImage: ../../assets/blog/nobody-had-the-job.png
heroImageAlt: "A cardboard box sealed with tape, sitting alone on a doorstep in morning light."
shareImage: /blog-share/nobody-had-the-job.png
tags: ["handovers", "automation", "building-in-public"]
readingTime: 4
featured: false
---

On Sunday 20 September, five blog posts were finished. Checked, formatted, images made, everything.

Monday's should have gone live at 10am. At 12:43 that afternoon it was still not there, and neither were the other four. It appeared five minutes later, nearly three hours late, and only because somebody went looking.

Nothing had broken. No error was raised anywhere, because from every system's point of view, nothing had happened at all.

## Two jobs, one gap

Here is the arrangement. Writing the posts is one piece of work. Publishing them is another, and it lives somewhere else: a different repository, with its own automatic build that runs every morning and publishes whatever is sitting there ready to go.

That build ran on time, as it does every day. It published everything that was in the repository. The five new posts were not in the repository, because moving them from where they are written to where they are published was a manual step.

Every previous week, somebody had done it by hand. One week it happened four days late. Another week it happened on the Friday before. This week, nobody's name was against it, so it did not happen.

The job existed. The handover existed. The owner did not.

## Why nothing raised the alarm

This is the part worth borrowing, because the shape is everywhere.

When an automated step fails loudly, you find out. When a step nobody owns simply does not occur, there is no failure to detect. The build succeeded. The repository was healthy. The website was up. Every indicator that anyone might check was green, and the only symptom was an absence: a page that was not there, for readers who would never tell us.

Silent absence is the hardest kind of failure to catch, and it is the natural failure mode of any task that sits between two teams.

## The check that existed and did not help

We were not completely unprepared. There is a reconciliation step written into our process for exactly this: confirm that each post's address actually loads before recording it as published. No assuming. An actual check against the live site.

It runs on Fridays.

So on the week a Monday post failed to appear, the check designed to catch it was four days away. It would have found the problem eventually, and by then the week would have been over.

The check was right. Its frequency was wrong, and the frequency was chosen when publishing was a weekly event rather than a daily one. We had carried forward a control that fitted the old shape of the work.

That is a more common mistake than missing a control entirely. Nobody reviews the timing of a check that is working.

## What we changed

Two things, and I want to be accurate about their status.

The immediate fix was simple. The website side imported all five posts within about twenty minutes of being told, and Monday's went live the same morning. That is a person solving a problem, not a system improving.

The real change is a scheduled job that now moves the week's posts across automatically, running Saturday, Sunday and Monday mornings so that a single failure has two more chances before the deadline.

It has not run yet. At the time of writing it is due to fire for the first time tomorrow. I am not going to tell you it works, because I do not know that. I will tell you it exists, and that Monday morning is when we find out.

## The same gap in an ordinary department

Ours was a publishing pipeline, which is not most people's problem. The shape is.

Finance closes the month and hands a report to operations, who act on it. Marketing hands a signed-off campaign to whoever schedules it. HR completes a hire and someone else sets up the accounts on the first day. In each case there is a step at the boundary, and in each case that step is often described as automatic when what people mean is that it has always been done.

Ask who actually performs the handover and you get one of two answers. A name and a time, which is a process. Or a shrug and "it just happens", which is a person nobody has thanked, and a gap waiting for the week they are on leave.

## What this is worth to somebody else

If your team has automated anything, the useful question is not whether it works. It is what happens on the day it does not.

Three questions, and they take a conversation rather than a project.

**Whose calendar is it on?** A task that belongs to "the team" belongs to nobody. Ours had been done reliably for weeks by whoever happened to think of it, which looked like a process and was actually a run of luck.

**What does failure look like from the outside?** Not from the dashboard. From where your customer, colleague or reader is standing. Ours looked like a page that was not there, which nobody would report.

**How long before anybody knows?** If the honest answer is "when someone next happens to check", write down how long that gap is. Then decide whether you can afford it. Our answer was four days, for something that matters daily.

## The part I would rather not write

Two of the last four Friday posts here have been about something of ours that did not work. The last one was about automating a publishing step and forgetting to automate the checking.

This is not the same lesson, though it is close enough to be uncomfortable. That was a missing check inside one system. This is a job falling into the gap between two teams, plus a check that existed and ran on the wrong day.

I keep writing these because they are the honest record of a small operation building things in public, and because the failures are more instructive than the successes. The alternative is to only publish the weeks that went well, which would make this a brochure.

Automating a step does not remove the work. It moves it. What is left is the job of noticing, and that job is easy to leave unassigned, because until the day it matters, nobody notices that nobody is noticing.
