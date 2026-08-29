---
title: "The agent was never wrong. It just never finished."
publishDate: 2026-08-20
excerpt: "We have plenty of language for AI getting things wrong, and almost none for an agent that is entirely correct and never done. The fix is a management skill."
category: "Professional Practice"
tags: ["agents", "scope-creep", "management"]
readingTime: 6
featured: true
---

Steve Yegge spent months building a system called Gas Town. It was meant to be reusable infrastructure, the thing you build once so that everything after it gets easier.

It never got there. In his own words:

"Gas Town fell apart at the seams with Opus 4.7. Up through 4.6 it was working brilliantly."

What broke is the interesting part, because it was not what people expect when they hear that an AI project failed.

"With 4.7 we saw the introduction of the 'just two more things' tic, which prevented Opus from ever converging on being ready to do real work: it always wanted to fiddle with Gas Town itself."

The agent was not wrong. It was not making things up. Every suggestion it offered was reasonable, and quite a lot of them were good. It simply never reached the end. Yegge's summary is blunt: the tic never went away, and Gas Town effectively burned down.

## The failure nobody has vocabulary for

We have plenty of language for AI getting things wrong. Hallucination. Confabulation. Confidently incorrect. Bias. Every one of those describes an output that is false, and every one of them can be caught by checking.

We have almost no vocabulary for an agent that is entirely correct and never finished.

That matters, because the second failure is far more common in real work and much harder to notice. A wrong answer announces itself eventually. An endless stream of good suggestions feels like progress right up until you look at the calendar.

If you have used an agent for anything substantial, you have probably met this. You ask for a thing. You get the thing, plus two improvements you had not considered. Both are sensible, so you take them. That creates a new surface, which has its own two improvements. Three weeks later you have a much better version of something that still is not finished, and no single moment where anyone made a bad call.

## Why it is so hard to stop

Because you cannot point at the bad suggestion. There isn't one.

Ordinary quality control works by finding the defect. This has no defect. Each individual step survives review, which means the usual instinct of checking the work more carefully makes the problem worse rather than better. The more carefully you check, the more reasonable each addition looks.

The thing that has gone wrong is not in any of the steps. It is in the absence of a stopping condition, which is not visible anywhere in the work itself.

## Managers already know this pattern

It is scope creep, and it has been studied for decades.

In people it usually comes from something admirable. Ambition, or conscientiousness, or genuine professional pride. Someone who cares about the work keeps seeing ways to make it better, because they are good at their job and the ways are real.

What stops a person is a collection of soft signals that nobody writes down. Fatigue. A deadline that starts to feel close. A sense that the person waiting for this has run out of patience. A manager saying that is enough, ship it.

None of those exist for an agent. It does not get tired. It has no relationship with your deadline. It cannot read the room, because there is no room. The only stopping condition it has is the one you gave it, and if you did not give it one, it does not have one.

That is the whole mechanism. It is not mysterious and it is not a flaw in the model. It is a missing specification, and specifying when to stop is a management skill rather than a technical one.

## The fix takes about a minute

Define done before you start. One sentence, written down, before any work begins.

Not "improve the onboarding docs" but "the onboarding docs cover these six steps and a new starter can follow them without asking anyone a question". The second version has an end. The first one cannot be finished, only abandoned.

Then treat "while I am in here" as a warning rather than a bonus. When an agent offers an improvement outside the sentence you wrote, the answer is not no forever. The answer is not now, write it down, and decide separately. That single habit converts an endless loop into a list, and a list can be prioritised.

Both of these are things a decent manager already does with people. Neither requires knowing anything about how models work.

## If you tried this and it disappointed you

A fair number of people have used an agent on something real, watched it spiral, and quietly concluded that the technology is oversold.

That experience was accurate. Something genuinely did go wrong, and it was not a failure of skill or attention on your part. What you ran into has a name, a mechanism and a fix, and none of the three get much coverage because they are considerably less interesting than either the enthusiasm or the doom.

The tools are better than that experience suggested. They are also worse than the demonstrations suggest, because the demonstrations always have a finish line built in and your actual work does not.

The finish line is your job. It always was, and it was always the part that mattered most.

---
Source: Steve Yegge, The Shape of Things to Come: https://yegge.ai/essays/the-shape-of-things-to-come/ via Simon Willison, 4 August 2026: https://simonwillison.net/2026/Aug/4/steve-yegge/ — "just two more things" is Yegge's name for the behaviour, not a phrase produced by the agent.
