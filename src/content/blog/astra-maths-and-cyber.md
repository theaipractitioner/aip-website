---
title: "It solved ten problems maths had not moved in a decade. Its maker cannot clear it on cyber."
publishDate: 2026-08-19
excerpt: "The same model, in the same fortnight, produced the most impressive and the most concerning results the field has seen. That is not a contradiction."
category: "Professional Practice"
heroImage: ../../assets/blog/astra-maths-and-cyber.png
heroImageAlt: "Racks of servers packed with dense blue network cabling, green status lights showing along each unit."
shareImage: /blog-share/astra-maths-and-cyber.png
tags: ["frontier-models", "safety", "research"]
readingTime: 4
featured: false
---

On 1 August, OpenAI published solutions to ten open problems in mathematics and theoretical
computer science. Every one had seen no progress on its main result for at least a decade. The
proofs were formalised in Lean 4 and published. Each cost under $2,000 in tokens.

On 7 August, OpenAI said its own evaluations of the same model meant it could not rule out
critical cyber capabilities under its Preparedness Framework.

Same model. Same fortnight. Both statements from the same company.

We covered the first half on 10 August, and the pairing is the reason to come back to it. Neither
half carries the story alone.

## The first half

The model is Astra, described by OpenAI as one of its upcoming models. An internal version was set
on ten problems chosen because the field had stalled on them. It produced solutions, the papers
were published, and the results were formalised in Lean 4 in the openai/ten-proofs repository so
that anyone can check them mechanically rather than taking the claim on trust.

That last part matters more than the headline. A formal proof either checks or it does not. This
is one of the few areas where a model's output can be verified completely, by machine, with no
expert judgement required at the point of checking.

## The second half

Six days later, OpenAI published this:

> "our preliminary evaluations indicate strong enough performance that we cannot rule out Critical
> capability level at this time."

Their framework defines the Critical cybersecurity threshold concretely. A model reaches it if it
can identify and develop functional zero-day exploits of all severity levels in many hardened
real-world critical systems without human intervention, or devise and execute end-to-end novel
strategies for cyberattacks against hardened targets given only a high level goal.

For context, previous models including GPT-5.6-Sol were assessed at High rather than Critical. This
is a threshold nobody had reached before.

What OpenAI did next is the part that gets least attention and deserves the most. They scaled up
testing of their safeguards, moved the model into isolated testing environments with restricted
network and tool access, strengthened protection of the model weights, paused internal work on
Astra that did not meet the new controls, put monitoring on the model's chain of thought that can
interrupt high-risk activity, and said they would work with government agencies and safety
organisations on testing.

They also published all of this while the model was still unreleased. That is the behaviour you
would want, and it is worth saying so.

## Why both things are true at once

It is tempting to read these as contradictory, as though one must be hype and the other must be
the real story. They are neither. They are the same capability described twice.

Finding a novel mathematical proof and finding a novel software exploit are closely related
activities. Both involve searching an enormous formal space for a construction that satisfies a
set of constraints, where the construction is hard to find and easy to check once found. A system
that gets substantially better at one has a decent chance of getting better at the other, because
underneath they are the same shape of problem.

That is why these two announcements arrived six days apart rather than years apart. It was not
coincidence and it was not a public relations accident.

## A note on our own timing

We published the maths piece on 10 August, three days after the cyber warning was already public.
The celebratory post went out when the more sober half of the story was already on the record.

That is worth naming rather than quietly correcting, because it is the ordinary way this goes. Good
news travels through the feeds you read. The document that complicates it is published on a
Thursday, gets a fraction of the attention, and is entirely findable by anyone who goes looking.
Nobody hid anything. The distribution is just uneven.

## What this means if you run a team

Very little this week, and I would be suspicious of anyone telling you otherwise. Astra is not
released. There is nothing to procure, configure or ban.

What it should do is settle a question that gets asked in a lot of management meetings, which is
whether AI is basically good or basically dangerous. The honest answer is that the question does
not have the shape people want it to have. The same capability that clears a decade-old problem in
number theory is the capability that makes a security team nervous, and no amount of governance
policy separates them, because they are not separable.

The more useful questions are narrower. Which parts of our work depend on something being hard to
do? What would we notice if the cost of doing it fell by two orders of magnitude? Who here would
find out first, and how?

Those are answerable, and they age better than a position on whether AI is good.

## What to watch

The story has moved since 7 August. OpenAI published further pieces on third-party cyber
evaluations on 4 August, and two more on 10 August covering cyber defence and access controls for
frontier cyber models. This is an active situation rather than a settled one.

The thing worth tracking is not the capability claim, which will keep escalating. It is whether the
disclosure behaviour holds: whether labs keep publishing the uncomfortable evaluation before the
release rather than after it. That is the part that is genuinely a choice.

---

*Sources: [Ten advances in mathematics and theoretical computer science](https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/),
Simon Willison, 1 August 2026. [Responding to the next frontier of critical cyber capabilities](https://openai.com/index/responding-next-frontier-critical-cyber-capabilities),
OpenAI, 7 August 2026.*
