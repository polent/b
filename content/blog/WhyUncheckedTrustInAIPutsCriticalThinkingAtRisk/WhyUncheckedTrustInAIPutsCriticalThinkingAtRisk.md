---
title: Why Unchecked Trust in AI Puts Critical Thinking at Risk
description: Careless prompts cost you data. Unchecked output costs you judgement. And the research now shows the third price we pay, that our memory and our ability to think unaided quietly erode.
date: 2026-09-17
tags:
  - Artificial Intelligence
  - Digital Transformation
  - Critical Thinking
  - Privacy
  - Data Protection
  - Engineering-Leadership
  - Leadership
---

## Two Mistakes in One Afternoon

A few weeks ago I watched someone paste a client's full contract into a chat window to "get the risks out of it". Nobody in the room blinked. Later that same day, a status report came back to me that had clearly been summarised by a machine at least twice. It read beautifully. It was also wrong in the one detail that mattered.

Both things happened in the same office, with the same tools, in the same afternoon. For a while I filed them as two separate problems. They are not. They are the same reflex, pointing in two different directions, and there is a third cost underneath both of them that we are only now starting to measure.

We lose data. Then we lose judgement. Then we lose the ability to do the thinking ourselves. Each one is harder to get back than the last.

## The Illusion of the Digital Confessional

Many users treat chat windows like private diaries. They submit sensitive personal matters, internal business details, and unvetted information directly into prompt fields.

I am not talking about hypotheticals. I mean the customer contract pasted in "to summarise the risks". The production log with real email addresses still in it. The performance review someone wanted help phrasing. The architecture diagram covered by an NDA. The config file with a live key three lines down that nobody scrolled to.

Major AI platforms continue to rely on human review loops to evaluate and train models. On consumer tiers, conversations are frequently used for training by default. Reviewers sample chats for quality and abuse. Retention windows outlive the conversation. Memory features deliberately carry context from one session into the next. And most of this happens through tools nobody in the company ever approved, the browser extension, the phone app used after the web version was blocked, the personal account opened because the corporate one felt slow.

Submitting sensitive details into a standard chat interface carries the same privacy exposure as discussing personal records aloud with a stranger on a crowded morning train. If you would not share the information across a public carriage, it does not belong in a prompt box.

There is a legal edge to this that gets overlooked. Trade secret protection in Germany requires that you take appropriate confidentiality measures to keep the secret a secret. Paste it into an unapproved public chatbot and you have handed opposing counsel a decent argument that it never qualified as one. Under GDPR, personal data sent to a tool with no processing agreement in place is your organisation's violation, not the vendor's. You do not only risk the leak. You risk the legal status of the thing you leaked.

And the exposure runs one way only. You can delete a file. You cannot un-train a model, un-see a human review, or un-index a conversation link that a search engine already crawled. Deleting the chat deletes your view of it. It does not delete the copy.

So here is the part that matters. No privacy setting fixes this, because the decision is not made once in a settings menu. It gets made fresh in the half second before you press Enter, and it gets made by you. My test is crude and it works: **would I be comfortable if this exact prompt showed up as a screenshot in a company-wide channel?** If the answer needs thinking about, the answer is no.

## The Same Reflex at Both Ends

Notice what actually caused that failure. It was not ignorance about data protection. It was that a window answering in fluent first person feels like a colleague rather than a service running on somebody else's hardware. We hand it things we would never hand a stranger, because it does not feel like a stranger.

The same misreading runs in the other direction. If it feels like a competent colleague, then its answer feels like a colleague's answer: already checked, already reasoned through, ready to forward. It is not. It is a plausible sequence of tokens, delivered with identical confidence whether it is exactly right or badly wrong. The model has no tell.

The first mistake costs you data, and data is at least lost in a way you can describe to a lawyer. The second one costs you something harder to put a number on, and considerably harder to get back.

## The Broken Summary Chain

AI accelerates repetitive engineering tasks, fast code drafting, and targeted document searches. The risk begins when teams remove human judgment from the workflow.

A troubling pattern is spreading across workplace environments:

* Team member A generates an unverified project summary with AI.
* Team member B takes that summary, uses an AI tool to condense it further, and passes it upward.
* The client receives a polished slide deck built entirely on unchecked assumptions.

Every summarisation step is lossy. What makes it dangerous is that it is not lossy at random. Caveats, hedges, conditions and dependencies are the first things to go, because they sit furthest from the central point of the text. Confidence survives compression. Doubt does not.

I have watched a line go in as "integration is blocked pending a decision from legal, best case two weeks" and come out, two machine passes later, as "integration on track". Nobody lied. Nobody even made a mistake they could point at. The qualifier simply did not make the cut, twice in a row, and what reached the client was not merely inaccurate. It was *more certain* than anything anyone in the chain actually believed.

Underneath sits an old management failure with new tooling. Everyone in the chain assumed somebody earlier had checked. Nobody had. [Automation bias](/blog/TheHiddenCostOfVibeCodingAndAIAgents/) does the rest: a confident answer from a machine gets less scrutiny than a hesitant one from a person, which is precisely backwards. AI did not invent diffusion of responsibility. It just runs it at machine speed, with better typography.

When no one validates the output, errors multiply quietly. AI tools do not function like deterministic calculators that guarantee truth; they generate plausible token sequences. Relying on them without rigorous manual review leads directly to flawed business decisions.

Three habits stop the chain. Never summarise a summary, go back to the primary artefact instead. Keep provenance attached, so the next person can find the source without archaeology. And treat a signature as a signature: whoever's name is on the slide owns every number on it.

## Your Brain on Autopilot

Here is where it stops being a process problem and becomes a personal one.

In 2025 the MIT Media Lab put 54 people in EEG caps and had them write essays over four months. One group used an LLM, one used a search engine, one used nothing but their own head. The LLM group showed the weakest neural connectivity in exactly the networks tied to memory and attention. They also produced the most generic prose. But the finding that should stop you is this: **they struggled to quote back sentences from the essay they had finished minutes earlier.** They had submitted the work. They had not retained it. The authors call the effect *cognitive debt*, and if you have ever argued about technical debt in a sprint planning, you already know how that story ends.

The same study contains the fix, though. Participants who wrote unaided *first* and brought the model in afterwards showed stronger recall and wider brain activity than those who started with the model and later had to work alone. The tool is not the problem. The tool going first is the problem.

Microsoft Research and Carnegie Mellon surveyed 319 knowledge workers about 936 real tasks and found the trade-off stated plainly: the more confidence someone placed in the AI, the less critical thinking they reported doing. Trust and scrutiny move in opposite directions. The better the tool feels, the less of yourself you bring to it.

None of this is entirely new. Back in 2011, Sparrow, Liu and Wegner showed what they called the Google effect. When people expect to have access to information later, they remember *where to find it* instead of the thing itself. We have been outsourcing memory to machines for fifteen years and mostly getting away with it. What changed is the depth of the outsourcing. With a search engine you still opened the sources, compared them, and decided which one to believe. With a chatbot the sources never appear at all. You end up remembering neither the fact nor where it came from.

If that sounds abstract, consider the version you can already feel. A 2020 study in *Scientific Reports* found that heavier lifetime GPS use predicts worse spatial memory, dose-dependently, and the researchers specifically ruled out the obvious objection: it was not that people with a poor sense of direction used GPS more. Using it made them worse. Most of us can no longer navigate a city we have lived in for a decade. That is not a metaphor for what happens to reasoning under heavy AI use. It is a preview.

The mechanism is not mysterious. The struggle *is* the encoding. Wrestling with a hard problem is not an unfortunate delay before the answer arrives, it is the process that builds the structure you will need next time. Skip the difficulty and you do not get the result faster. You get the result without the learning, which means you will need the tool again tomorrow, and a little more of it. That is a loop, and it tightens.

The web is filling up with interchangeable, smoothed-out articles following the exact same rhythm: safe intros, predictable lists, and shallow conclusions. It is the same effect at civilisational scale, and I have [written before](/blog/OptimizedIntoIrrelevanceWhenAIDoesTheThinkingForUs/) about where that road leads. Meaningful progress requires friction. When leadership defaults to automated consensus instead of critical reasoning, decisions reflect convenience rather than deep competence.

## Tools Assist, Humans Decide

AI belongs in engineering pipelines and everyday operations as a support tool, not as an outsourced brain. Automation should remove repetitive overhead while leaving full ownership of the final verdict with human experts. I am not arguing for less AI. I use it every day, and I have [made the case](/blog/IsAIRottingOurProgrammingBrainsorFreeingUs/) that managed properly it raises the floor for everyone. I am arguing for keeping ownership of both ends of it.

The rules I hold myself to:

1. **Classify before you paste.** Public, internal, never. Decided before the prompt, not after.
2. **Brain first, model second.** Form your own answer, then ask, then compare. This is the single highest-value habit on the list, and it is the one the EEG data actually supports.
3. **Never summarise a summary.** Go back to the source, or do not send it.
4. **The name on it owns it.** If you forward it, you have read all of it.
5. **Use it as an adversary, not an oracle.** "Attack this reasoning" beats "what should I do" every time.
6. **Keep one hard thing a week tool-free.** Deliberately, and even when it is slower. It is training. You will notice the difference inside a month.

Letting go of systematic review produces clean surfaces with very little substance underneath. The discipline at both ends turns out to be the same discipline: stay the one who decides what goes in, and stay the one who decides what comes out.

## Sources and further reading

* [Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task](https://www.media.mit.edu/publications/your-brain-on-chatgpt/) — MIT Media Lab
* [The Impact of Generative AI on Critical Thinking](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) — Microsoft Research and Carnegie Mellon, CHI 2025
* [Google Effects on Memory: Cognitive Consequences of Having Information at Our Fingertips](https://www.science.org/doi/10.1126/science.1207745) — Sparrow, Liu and Wegner, Science 2011
* [Habitual use of GPS negatively impacts spatial memory during self-guided navigation](https://www.nature.com/articles/s41598-020-62877-0) — Scientific Reports 2020
