---
title: "I break the first rule of writing with AI every week"
publishDate: 2026-09-25
excerpt: "Two writers say the right way to write with AI is as a copy editor, never a ghostwriter. We use it both ways. Here is what that costs, and the check that catches most of it."
category: "Tools & Techniques"
heroImage: ../../assets/blog/copyeditor-not-ghostwriter.png
heroImageAlt: "A printed page marked up in red pen, with corrections and query marks through the text and a hand holding a red pencil over it."
shareImage: /blog-share/copyeditor-not-ghostwriter.png
tags: ["writing", "building-in-public", "quality-control"]
readingTime: 4
featured: false
---

Thomas and Erin Ptacek published a short guide on 17 September called "How To Write With An LLM". It has two rules, and I break the first one every week.

Their first rule is to reject every word or phrase the model suggests. Not most of them. All of them. Their reasoning is that readers detect machine phrasing at the level of word choice, long before they could tell you what feels wrong.

Their second rule is to ignore the model's praise. Hand any draft to a language model and it will tell you it is excellent, which is exactly what stops you rethinking it.

Where they think the model does help is as a copy editor. It is good at spotting passive voice, verbs turned into nouns, filler words and repetition. Their summary is to use these tools "like a copyeditor rather than a ghostwriter."

It is good advice, and I want to be straight about how far we follow it.

## How we actually write

The posts on this page start as drafts that a model helps produce. I choose the story, read the sources, decide the angle and what must not be claimed. A model drafts against that brief. Then the draft is checked, cut and rewritten.

That puts us on the wrong side of their first rule. The words start as the model's words.

Why not follow it? Time, mostly. Five posts a week, each written three ways for three channels, is fifteen pieces of writing. Written from a blank page by one person, that would be most of the week, and the research would be the part that got squeezed. We decided the research mattered more than the first draft, and put the human time there.

That is a trade-off, not a principle. The rest of this post is about what the trade-off costs, and what we do to keep the cost down.

## What that cost us

We found out the hard way that they are right about word choice.

In early August, one week's drafted copy carried 99 em dashes. Nobody put them there on purpose. The model likes them, the drafts looked fine, and nobody had counted. Once you notice that punctuation mark, you see it everywhere in machine-written text, and so do your readers.

It was not only punctuation. There is a family of words that models reach for and people rarely say out loud. The grand verb that just means "use". The adjective that just means "it works". The one that promises everything is about to change. Each one is harmless alone. Together they give a piece away.

## The check that catches most of it

So we built a check, and it runs on every piece before it goes anywhere.

It is not sophisticated. It is a search across every draft for a fixed list of banned words, and a second search for em dashes, exclamation marks and trailing ellipses. If either search finds anything, the piece is not finished. It runs on the blog post, both social versions and the headline on the image card, because one slip in any of them is visible.

Alongside it sits a short style guide. Lead with the outcome. Use the active voice. Keep sentences to fifteen or twenty words on average, and paragraphs to four sentences at most. Never open with a rhetorical question.

That is their copy-editor idea turned round. Instead of the model checking my prose, a fixed list checks the model's.

The list is the useful part, and it is specific to us. Some words are on it because they are the ones models overuse. Others are there because they are wrong for this audience. They are how software companies describe people, not how a department head talks about their own team. A list like that says as much about who you are writing for as about the machine.

## What the check cannot do

It catches the tells. It does not catch the thinking.

A banned-word list will stop the grand verb. It will not stop a paragraph that says nothing, a claim that is stronger than its source, or a sentence that is technically true and still misleading. Those need a person reading carefully. The model is no help there, because its instinct is to tell you the draft is good.

This is where their second rule earns its place. The most dangerous moment in any AI-assisted draft is when it reads smoothly. Smooth is not the same as right, and a model will not be the one to say so.

So the expensive part of our process is not the word search. It is the source checking. Every figure is traced, every quotation is checked against the original, and every claim is tested against what the source actually said.

That paid for itself this week. Wednesday's post quotes an MIT Sloan Management Review article, and our notes had two of its quotations attributed to the three authors. Checking the article showed they belonged to someone the authors had interviewed. The draft read perfectly well either way. It would simply have been wrong.

## If you are starting to write with AI

Start with their rules rather than ours. They are cleaner.

Use the model to find problems in your writing, not to produce it. Ask it where you have used the passive voice, which words you repeat, which paragraphs run too long. Take its advice on mechanics and ignore its compliments.

If you do let it draft, as we do, build the check before you publish anything. Make a list of the words that give machine writing away in your field, and search for them every time. It is ten minutes of setup, and it will catch things you have stopped seeing.

Whichever way you work, keep the judgement for yourself. Which claim, which source, which caveat, what to leave out. That part was never the model's to do.
