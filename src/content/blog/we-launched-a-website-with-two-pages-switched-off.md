---
title: "We launched a website with two pages switched off"
publishDate: 2026-09-01
excerpt: "The AI Practitioner site soft launched on 14 August with the blog and the booking page deliberately hidden. Here is why, and what the fortnight since was actually spent on."
category: "Case Study"
heroImage: ../../assets/blog/we-launched-a-website-with-two-pages-switched-off.png
heroImageAlt: "A closed, peeling painted door at the end of a narrow wooden passageway, lit by a single dim overhead lamp."
shareImage: /blog-share/we-launched-a-website-with-two-pages-switched-off.png
tags: ["building-in-public", "launch", "website"]
readingTime: 4
featured: true
---

The AI Practitioner went live on 14 August with two of its pages hidden from every search engine on
the internet.

Both pages existed. Both were built, styled and linked into the navigation structure. We told the
crawlers not to look at either of them.

As of this morning, they are on. The site is complete and the business is open. This is the part of
that story worth telling, because the decision behind it is one most people face and almost nobody
writes down.

## What was hidden, and how

Two lines in the site's `robots.txt` file, sitting underneath a comment I wrote at the time:

> Hidden until the 1 September full launch: /blog has no real posts and /book has no booking
> integration. Remove these two lines when both ship.

There is a matching filter in the site's build configuration that keeps both paths out of the
sitemap, so nothing points at them from anywhere a search engine can reach.

Belt and braces, on purpose. A stray link into a half-built page is the kind of thing you discover
six weeks later in an analytics report.

## Why an empty blog is worse than no blog

The reasoning is simple enough to state in a sentence: a half-built thing does more damage visible
than invisible.

Picture the visitor. They have read the services page, they are mildly interested, and they click
through to the blog because they want to know whether the person behind this actually knows
anything. They find three placeholder posts and a "coming soon".

They have now learned something specific about how this business operates, and it is not the thing I
wanted them to learn. The same goes double for a booking page that does not book. Asking someone to
take an action and then not honouring it is worse than never asking, because you have spent their
attention and given nothing back.

An absent page costs you an opportunity. A broken page costs you the benefit of the doubt. Those are
not the same price.

## The part that is not a strategy

Here is the bit that would be easy to leave out.

Mid-August was the original target for the whole site. Everything. The blog and the booking page
slipped, and when the date got close the choice was between launching without them or holding the
entire site back another fortnight.

Neither of those is a triumph. I did not plan a staged launch in July and execute it beautifully in
August. I ran out of time on two pages and had to decide which half to ship.

I am labouring this because the version of the story where it was all deliberate from the start is
the version that usually gets told, and it is not much use to anyone. Choosing which half to ship is
the decision most people actually face on a project with a date attached. It comes up late, under
pressure, and there is rarely a good option, only a less bad one.

The useful question in that moment is not "what did I promise". It is "which of these does more harm
in public than it does missing".

## What the fortnight bought

Three things, and they are the reason the delay was worth taking rather than fudging.

**Two blog posts written properly, rather than five written quickly.** The blog is the canonical
version of everything that goes out on social, which means it carries the evidence, the caveat and
the worked example that a short post has to cut. Writing that in a hurry produces something worse
than silence.

**Booking wired to a real calendar with a real price against it.** The 1:1 session is $175 and it
now puts a real slot in a real diary. Payment is arranged separately rather than taken at the point
of booking. That sentence took longer to make true than it takes to read.

**Analytics running from the first day of real traffic.** Cloudflare Web Analytics went on at soft
launch, before there was anything much to measure, which means the first month of the full site is
measurable rather than guessed at. Turning measurement on after you want an answer is how you end up
with an opinion instead.

## One thing we did not hide

The same `robots.txt` file that hides two pages goes out of its way to invite a specific set of
visitors: the crawlers behind ChatGPT, Claude, Perplexity, Google's AI results, Apple and Bing. Each
one is named individually and allowed explicitly.

That is deliberate too, and it is the opposite instinct to the one above. People increasingly find a
business by asking an assistant rather than searching, and being readable by those assistants is a
choice you make in a config file months before it pays off. Naming them one at a time rather than
relying on a blanket rule is defensive: a wildcard is easy to undo by accident, and a named list is
hard to break without noticing.

Hide what is not ready. Invite what is. The two decisions look opposite and come from the same
place.

## What is live today

Home, About, Services, FAQ and Contact have been up since 14 August. As of this morning the blog is
open and the booking page takes bookings.

The business behind it is Groundframe Ltd, trading as The AI Practitioner, and today is its first
day of clean trading. That is the other thing that happened on 1 September, and it is why this date
rather than any other.

If you have a project with a date on it and two components that will not make it, the question is
not how to get everything done. It is which of the unfinished parts is worse in public than absent.
Ship the rest. Say which bits are missing. Nobody has ever thought less of a business for that, and
plenty have thought less of one for a page that promised something it could not do.

---

*The site is at [theaipractitioner.ai](https://theaipractitioner.ai). The 1:1 session, From Curious
to Capable, is now bookable at $175.*
