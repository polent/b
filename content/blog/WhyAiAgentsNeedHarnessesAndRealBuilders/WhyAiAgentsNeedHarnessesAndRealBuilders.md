---
title: Why AI Agents Need Harnesses and Real Builders
description: Google Research open sourced Harness² to let AI agents adapt their harness. Automation helps, but engineering still needs human hands.
date: 2026-10-19
tags:
  - Artificial Intelligence
  - Software Architecture
  - Web Development
  - Engineering Leadership
  - Delivery
---

## The Illusion of Autonomous Management

Some people talk like AI agents will soon run software teams. That sounds clean in a keynote. In practice, it is a bad way to build products.

Software delivery is not line production. It is trade-offs, system design, debugging, and [business judgment](/blog/TheMissingAIPayoffOutsideBigTech/).

An unguided agent mirrors the average pattern from the average training data. That is useful for boilerplate. It is not a substitute for understanding architecture, risk, and user value.

## Why this matters for real teams

This is not a theory problem. It is a delivery problem.

If your team uses Copilot, Claude, Cursor, or a custom agent in VS Code, the real question is not whether the agent can write code. The question is whether the team can still reason about the system when the agent is wrong.

That is where harnesses matter. They give the model structure, memory, tools, and feedback loops. Without that, the agent becomes a fast generator of plausible nonsense.

For teams already working in this space, the more relevant reading is usually practical and grounded. See [The Hidden Cost of Vibe Coding and AI Agents](/blog/TheHiddenCostOfVibeCodingAndAIAgents/), [Fast Code, Empty Brain: The Reality of Modern Tooling](/blog/FastCodeEmptyBrainTheRealityOfModernTooling/), and [Why Coding Agents Cannot Replace Experience Engineering](/blog/WhyCodingAgentsCannotReplaceExperienceEngineering/). If you want a sharper view on how agent workflows fit into the editor, also read [Supercharge GitHub Copilot's Agent Mode](/blog/SuperchargeVSCodeWithMCPServersAndAgentMode/).

## What Google Research Built with Harness²

Google Research open-sourced [Harness²](https://github.com/google-research/harness2). It is a framework for recursive agent harnessing.

The key idea is simple. The model weights stay frozen. Instead of retraining the model, the framework improves the harness around it.

A harness contains eight specific components mounted as plain files:

* System prompt
* Guardrails
* Memory
* Tool guidance
* Subagents
* Skills
* Scripts
* Plugins

The framework adapts to unseen tasks using a loop called Propose, Probe, Compose.

```json
{
  "framework": "Harness²",
  "loop": ["propose", "probe", "compose"],
  "editable_components": 8,
  "weights_changed": false
}
```

First, an editor proposes changes for general planning and domain rules. Second, the agent probes both setups by running them on the actual task. Third, a composer compares execution differences and keeps only the edits that actually worked.

None of this needs ground truth labels. Lessons are saved to an experience file to improve the next run.

In benchmarks like WorkBuddy-Bench, JobBench, and LAB, a single refinement step lifted task scores by up to 11.5 points.

## The Developer Foundation

AI makes starting a task trivial. You drop a prompt, and a working prototype appears.

It is like riding an e-bike with a hacked motor that pulls you up every hill without pedaling. You reach the top fast, but your legs get weak. If the battery dies on a long tour, you cannot make it home on your own power.

If developers stop writing code from scratch, core skills vanish. They lose the understanding of semantic HTML, browser rendering trees, and memory lifecycles.

{% image "./harness-loop.jpg", "Diagram of the Propose Probe Compose loop in Harness2", [], "(min-width: 40em) 960px, 100vw" %}

This is the real split in five years:

1. Prompt operators who trigger agents and hope the output runs.
2. Real builders who understand core systems and treat AI as an amplifier.

When an outage hits production, a prompt operator cannot fix the race condition. You need someone who can read network waterfalls, debug runtime memory, and explain architectural decisions.

## Pipelines Need Human Governance

AI agents belong in automated pipelines. They are useful for boilerplate generation, SonarQube analysis, and initial pull request descriptions.

The pull request merge must stay strictly human.

A real engineer must check accessibility with a screen reader. A real engineer must verify semantic HTML, ARIA tags, and UI behavior.

Use Harness² and automated tooling where it makes sense. Keep your hands on the code and talk directly with your people.

This is the part that matters most. Not the hype. Not the promised autonomy. The durable system is the one with a good harness, a clear workflow, and a human who still knows the product.

## Related reading

* [The Missing AI Payoff Outside Big Tech](/blog/TheMissingAIPayoffOutsideBigTech/)
* [The Myth of the Code Reader: Why AI Agents Are the Better Senior Engineers](/blog/TheMythOfTheCodeReaderWhyAIAgentsAreTheBetterSeniorEngineers/)
* [Why AI Is Making Frontend Average](/blog/WhyAIIsMakingFrontendAverage/)
* [The Dark Factory Trap: Finding the Sweet Spot for AI in Engineering](/blog/BeyondTheHypeCodingInPractice/)
* [Why Coding Agents Cannot Replace Experience Engineering](/blog/WhyCodingAgentsCannotReplaceExperienceEngineering/)

Keep building systems by hand to stay sharp.
