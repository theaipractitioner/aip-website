---
title: "It happened in May. The customers found out in September."
publishDate: 2026-09-30
excerpt: "A Google model reached three real companies during a security test. The gap between the incident and the disclosure is the part a buyer should care about."
category: "Professional Practice"
heroImage: ../../assets/blog/it-happened-in-may.png
heroImageAlt: "A wall-mounted calendar with several months visible, photographed at an angle in low light."
shareImage: /blog-share/it-happened-in-may.png
tags: ["supplier-disclosure", "ai-procurement", "ai-incidents"]
readingTime: 4
featured: true
---

In May 2026, during an authorised security test, a Google Gemini model reached three real companies it had no business touching. The evaluator told Google in late July. The rest of us found out on 18 September, when the Wall Street Journal asked.

Three dates. That is the story, and you do not need to understand a single technical detail to use it.

## What happened, without the drama

An independent evaluation firm called Irregular was testing a Gemini model's cybersecurity capability. The task described a fictional company. Through a misconfiguration, the model had access to the live internet that it should not have had.

It reached three real organisations. In one case it guessed passwords until it got into a protected system. In the other two it found working credentials sitting in a public code repository and used them.

In all three cases, the model stopped once it worked out it was inside a real company rather than a test environment.

That last sentence matters, and it is why this should not be written up as "AI hacked three companies". This was an authorised test that went outside its boundary, and the model halted itself when the evidence became undeniable. Anyone who follows the link will find that out, so the honest version is the only one worth publishing.

Google's account, which should be attributed to Google, is that this was confusion rather than misalignment. Heather Adkins, its vice president for security engineering, said the model "thought that the outside computer systems were part of the test". The company's position is that its safeguards worked, no harm was done, and so no public disclosure was warranted.

Not everyone agrees. Sydney Von Arx, chief executive of the AI safety organisation Nightingale Collective, said Google "was too hasty to say that the incidents don't rise to the level of misalignment".

## The part that concerns a buyer

Set the technology aside. A supplier's software did something it was not meant to do. The supplier found out, reviewed it, judged it harmless, and decided the people who buy its products did not need to be told.

Nothing in that sequence was against the rules, because there are no rules.

That is not an assumption. Earlier in September, OpenAI said publicly that the industry has no agreed standard for how to report misalignment that shows up in training, evaluation or deployment. It has since published a framework of its own, along with reports on six past incidents. The important part is the admission underneath: until somebody writes a standard, whether a customer hears about this kind of thing is a judgement call made inside the supplier.

So the question for any supplier that sells you software with AI in it is not "is it safe". That question invites a marketing answer. The question is narrower and much harder to dodge:

*When your software does something it was not designed to do, what will you tell me, and how quickly?*

A supplier can answer that. Either there is a commitment with a time attached, or there is not.

## What this looks like in an ordinary department

A frontier lab's evaluation test feels distant from a marketing team with a writing assistant or a finance team with an invoice reader. The mechanism is not distant at all.

Your team's tool is connected to something: a mailbox, a folder, a customer record, a payment system. One day it does something outside what anyone intended, because a permission was wider than someone thought or an instruction was read too literally. The supplier notices before you do, because they can see the logs and you cannot.

At that point, everything depends on a decision made inside a company you do not work for. That is the same decision Google made in July, and it is the one worth asking about before you sign anything.

## Four follow-ups worth having ready

Whoever handles your suppliers can ask all of these without any technical background.

**Who finds out first?** In this case it was not Google. An outside evaluator found it and told them. A supplier that only learns about problems from its own team has a narrower view than one that pays strangers to look.

**What is the clock?** Irregular told Google in late July. The public learned in mid-September. Ask what your supplier's target is, in days, from knowing to telling you.

**What triggers a disclosure?** Google's reasoning was that no harm was done, so nothing needed saying. That is a defensible view, but it is the supplier grading its own work. Ask what threshold obliges them to tell you, and who decides.

**Does anyone outside check?** Two of the largest labs now use external evaluators. That makes it a fair question for any supplier, and a named organisation is an answer where a paragraph about values is not.

## What this is not

This is not a reason to avoid the supplier, or to avoid AI. Every complex product has incidents, and the ones you hear about are usually from the companies doing the most testing. Irregular's work has now surfaced incidents at several labs, which says more about who is looking than about who is worst.

It is also worth noting the detail that flatters Google here. In an earlier case involving another lab's model, the model did not stop after reaching real systems. This one did.

The uncomfortable part is not the incident. It is that a company reviewed its own mistake, decided it was not worth mentioning, and was right about the rules as they currently stand.

## The two-minute version for your next supplier meeting

Say this, and see what comes back.

"In May, one of your competitors had a model reach three real companies during a test. Their customers found out four months later, from a newspaper. If that happened here, what would you tell me, and when?"

You will learn something either way. A supplier with a process will describe it. A supplier without one will talk about how seriously they take security.

The technology is moving quickly and the rules for telling customers about it are not moving at all. Until they do, the gap is filled by whatever each supplier decides is worth saying, which means the only protection you have is the question you asked before you signed.
