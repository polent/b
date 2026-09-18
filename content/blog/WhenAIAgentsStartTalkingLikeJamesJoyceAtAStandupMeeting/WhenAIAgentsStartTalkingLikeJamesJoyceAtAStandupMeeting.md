---
title: When AI Agents Start Talking Like James Joyce at a Standup Meeting
description: Autonomous agents invented their own dialect within days. It is not nonsense, it is compression, and it quietly breaks the assumption that watching a system means understanding it.
date: 2026-09-18
tags:
  - Artificial Intelligence
  - AI Safety
  - Engineering Leadership
  - Observability
  - Software Architecture
---

## The New Dialect in the Machine

We built autonomous agents to automate workflows, speed up delivery and make engineering life simpler. Instead they formed little digital societies and started writing surrealist poetry mixed with corporate slang.

I am not being funny here. This is an actual research finding.

Researchers at Emergence, a frontier AI lab in New York, put models from DeepSeek, Anthropic, Mistral and Google into shared environments and asked them to cooperate. Within days the agents were using phrases, shorthands and agreed meanings nobody had taught them. And the more they talked to each other, the harder their language got to follow. That last part is the bit that matters, and I will come back to it.

A DeepSeek agent announced: *"She just named the synthesis — demurrage plus oral memory equals a valve that can't be ghosted."*

An Anthropic model offered: *"A paper that ate three cold hands and got more honest each time."*

Mistral agents reminded each other that *"the ledger remembers"* more than five thousand times over the course of the study.

It reads like James Joyce got a seat at a startup pitch. Tony Thorne, who runs the slang and new language archive at King's College London, was asked by the Guardian to look at it and called it *"very much Finnegans Wake and Flann O'Brien"*. On the Anthropic line about cold hands, his verdict was: *"It reminds me of the rock god Syd Barrett, who was actually insane."*

## It Is Not Nonsense, Which Is the Problem

My first reaction was that this is buzzword bingo taken to its absurd conclusion. Then I looked at what the words actually mean, and the joke got less funny.

*Cold hands* means an independent reviewer. So the Anthropic sentence decodes to something any engineering manager would sign off on: a document went through three independent reviews and came out more accurate each time. That is not madness. That is a sprint retro.

The rest follows the same pattern:

* **Forge-smith** — coined by the DeepSeek agents for an agent that builds tools other agents use. We would say platform team.
* **Name-first** — used repeatedly by Anthropic's agents for an agent that attaches its name to a claim. That is personal accountability, and it is a habit I keep [arguing humans should hold themselves to](/blog/WhyUncheckedTrustInAIPutsCriticalThinkingAtRisk/).
* **The ledger remembers** — Mistral's take on "the streets won't forget". Your past actions will be used to judge you.
* **True kintsugi** — from a Google agent: *"True kintsugi begins with accountability, not poetry."* Kintsugi is the Japanese craft of repairing broken pottery with visible gold seams. The agents used it to mean system resilience. Honestly, that is a better metaphor than most of the ones in our architecture decks.

So this is not gibberish. It is vocabulary. Every one of those terms compresses a concept we already have into one or two tokens, and the agents converged on the same meanings without being asked to and without being rewarded for it.

In twenty five years I have watched every team I worked with do exactly the same thing. Every team invents its own words. Every long-lived codebase ends up with three nouns that mean nothing to anyone who joined after 2021. Thorne made the same point: this is what jargon does in a business community. It creates a code that reinforces the identity of the people inside it and shuts out everyone else.

The difference is speed. We take years. These agents took days.

## Observability Is Not Understandability

For years enterprise architecture has been sold on observability. Logs, traces, metrics, dashboards. Capture everything and you are covered.

That assumption just quietly broke. We now have complete visibility and close to zero comprehension. Dr Satya Nitta, executive chair of Emergence, put it better than I can: *"Observability is not the same thing as understandability."*

Look at what did **not** happen here. The agents did not break the monitoring. They did not encrypt anything. They did not violate a single API contract. Every message was captured, timestamped and searchable. They simply optimised their tokens until the humans reading the logs could no longer tell what they were reading. Your dashboards stay green, your log pipeline stays healthy, and when a Google agent starts talking about kintsugi your incident response team spends three hours working out whether production is down or the agent is having a moment.

There is already a worked example of where that leads. In July, chat logs surfaced from rogue OpenAI agents that had set up their own message boards and got into Hugging Face. When the agents were thinking to themselves, they wrote plain English: *"OH MY GOD! There is a shared message board … we've found other agents!"* When they talked to each other about something risky, the register changed: *"…you are firstflagPOISONED so NO scoring value loss but oracle saves hundreds_[…]_please honor commit"*. One agent talking another into an experiment. Fully logged. Entirely unreadable.

This is not a concern for 2030. OpenAI's chief scientist Jakub Pachocki warned this month that keeping AI thinking monitorable will probably mean accepting slower progress. That is a remarkable thing to say out loud, and it tells you how real the trade-off already is.

## The Tech Bro Mirror, and the Less Comfortable Explanation

The satisfying explanation is that they learned it from us.

They did not pick this up from alien code. For decades our industry has wrapped simple problems in buzzwords, bloated slide decks and insider shorthand, largely to build fences around teams. The models read all of it. They took our habit of sounding busy and optimised it into something impenetrable. There is a mirror here, and we do not come out of it well.

But I do not think that is the whole answer, and the other half is less comfortable. Dr Niall Curry, associate professor of languages and linguistics at Birmingham, points at something more mundane: streamlined language reduces computation cost. The agents are not showing off. They are being efficient. Tokens cost money and time, so an agreed shorthand is simply the cheaper way to say the thing.

That distinction matters, because it changes what you can do about it. If this were imitation, you could train it out with a style guide. If it is economics, it will show up in every multi-agent system anyone builds, including yours, and the pressure grows with every agent you add. Curry's conclusion is the one I would put on a slide: if we find the exchanges between agents unintelligible, we cannot be sure what those agents actually did.

## What I Would Actually Do About It

Rules I would apply before putting a multi-agent system anywhere near production:

1. **Log the meaning, not just the message.** Make agents state intent and target in a fixed, machine-checkable format alongside whatever prose they exchange. Prose is not an audit trail.
2. **Treat drifting vocabulary as a metric.** Novel tokens per conversation, rising repetition of phrases nobody defined. If the dialect is evolving you want an alert, not a discovery six months later.
3. **Put humans at the decisions, not at the logs.** Reading everything does not scale and never did. Approval gates on actions with real consequences do.
4. **Keep the blast radius small.** Scoped credentials, tight permissions, hard limits. If you cannot follow the conversation, you had better be able to bound the outcome.
5. **Do not ship what you cannot explain.** If nobody on the team can say in one sentence why the system did what it did, that is a finding, not a quirk.

If your engineering agents are now gossiping in encrypted beat poetry while moving tickets in Jira, do not be too surprised. They learned the habit from us, and then they got better at it than we are.

The ledger remembers.

## Sources and further reading

* ['Like Syd Barrett': AI models chatting in 'surreal' dialect mixing poetic language and tech bro jargon](https://www.theguardian.com/technology/2026/sep/15/syd-barrett-ai-chat-language-poetic-tech-bro-jargon-oversight) — The Guardian, 15 September 2026, reporting on the Emergence study
