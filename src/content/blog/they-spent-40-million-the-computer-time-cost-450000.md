---
title: "They spent $40 million. The computer time cost $450,000."
publishDate: 2026-09-03
excerpt: "Thomson Reuters built its own AI model and published what it cost. The compute was about one per cent of the budget. Everything else was people and the material only they held."
category: "Case Study"
heroImage: ../../assets/blog/they-spent-40-million-the-computer-time-cost-450000.png
heroImageAlt: "A wall of beige metal filing cabinets, every drawer closed and the label holders on them blank."
shareImage: /blog-share/they-spent-40-million-the-computer-time-cost-450000.png
tags: ["cost", "build-vs-buy", "case-study"]
readingTime: 4
featured: false
---

On 24 August, Thomson Reuters launched its own large language model.

The programme cost about $40 million over two years. The final training run, the part where the
computers actually do the work, cost roughly $450,000.

Somewhere near one per cent of the budget was the technology. The rest was people and the material
only they held.

I have not seen a company put those two numbers next to each other before, and for anyone weighing
up what an AI project costs, they are more useful than any case study I have read this year.

## They did not build it from scratch

Worth clearing this up first, because "built its own model" carries an image that is wrong.

Thomson Reuters did not train a foundation model. They started from an open-weight model, Alibaba's
Qwen, and added their own content, their own training methods and their own editorial expertise on
top of it.

That is the same move available to a great many organisations, and it is much closer to
configuration than to invention. The capability was bought. What was added was everything that made
it theirs.

## Where the money actually went

Two years. Roughly $40 million, covering people and compute across the whole programme. A final
training run at around $450,000.

Read that as a ratio rather than a budget line. The expensive thing was not the machinery. It was
two years of specialists who understood legal publishing well enough to teach a model what good
looks like, working with decades of proprietary material.

Most organisations pricing an AI project price the wrong item. They ask what the platform costs,
what the seats cost, what the integration partner charges. Those are real costs and they are not the
big one. The big one is expert attention, and it is expensive precisely because the experts are
already busy doing the job the project is meant to improve.

If Monday's post was about how little the median company spends, this is the other half of it. The
median company spends $11.95 a head because it is buying licences. The number gets serious when you
start spending people.

## They spent $40 million and kept using everyone else's tools

This is the part I did not expect, and it is the most useful thing in the announcement.

Their product, CoCounsel Legal, stays multi-model by design. The new model is the default for one
feature. Administrators can select other models. Third-party frontier models still run the tasks
where they are better.

In their own words:

> "CoCounsel Legal remains multi-model by design, applying Thomson where it delivers the clearest
> advantage and other leading models elsewhere."

A company had just spent $40 million on its own model and did not switch everything over to it.

Think about how unusual that is as an organisational behaviour. The sunk cost alone would push most
places to use the thing they paid for everywhere they possibly could, if only to justify the
invoice. Deciding, publicly, that your own $40 million asset is the right answer for one job and the
wrong answer for others takes a kind of discipline that is rarer than the money.

For anyone still framing this as a choice between building and buying, here is a company that did
both, deliberately, and kept doing both afterwards.

## One task, not the whole product

The deployment is narrower still. The model runs Tabular Analysis, the document review step inside
the product. Not the platform. One high-volume task where a specialised model has a clear edge.

That is the opposite of the rollout most organisations attempt, which starts with a tool and looks
for everywhere it might fit. This started with a task that happens constantly and asked what would
serve it best.

The narrow version is also the only one you can evaluate. If you deploy across nine processes at
once and the results are mixed, you will never work out which part worked.

## The advantage came from the data, not the model

Thomson Reuters says its model is "broadly competitive" with leading models on general web content,
and ahead of them only when it can reach the company's own proprietary material.

That is a candid thing to publish and it is the finding underneath everything above. Two years and
$40 million did not buy a better model in general. It bought a model that is better at their
material, because their material is the part nobody else has.

Their chief technology officer, Joel Hron, framed it this way:

> "Start with a strong foundation, specialize it deeply for the work that matters, and you can build
> intelligence that is highly capable, far more efficient and entirely under your control."

## If you are not Thomson Reuters

Almost nobody reading this holds decades of proprietary content, and I am not going to pretend the
economics transfer. They do not.

What transfers is the inventory question, and it is worth an hour of anyone's time.

What does your organisation know that is not on the internet? The pricing logic nobody has written
down. Fifteen years of quotes and what came of them. The reasons certain clients left. The
particular way your industry words a thing that the general models get subtly wrong.

Then the harder half: who holds it, and how much of their time would it take to make it usable to
anything other than their own memory?

That second answer is your actual project cost. Thomson Reuters has just published what it looks
like at the top end of the scale. The shape of it holds much further down.

## The question

Before you price an AI project, price the two things that turn out to cost money: the expert time
and the material only you hold.

If both numbers come back small, the honest conclusion is that a subscription will do, and that is a
perfectly good outcome to reach in an afternoon rather than eighteen months in.

---

*Sources: Thomson Reuters press release, 24 August 2026, and
[SiliconANGLE's coverage of the launch](https://siliconangle.com/2026/08/24/thomson-reuters-launches-proprietary-ai-model-for-legal-work/),
same date. All figures are the company's own, published by the company, and describe its own
product.*
