---
title: Why AI Agents Need Harnesses and Real Builders
description: Google Research open sourced Harness squared to let AI agents adapt their harness. Automation helps, but engineering still needs human hands.
date: 2026-10-19
tags:
  - Artificial Intelligence
  - Software Architecture
  - Web Development
  - Engineering Leadership
  - Delivery
---

## The Illusion of Autonomous Management

Some people say AI agents will soon manage software teams. They dream of dark factories and autonomous chiefs of staff. This perspective treats software engineering as mere line production.

Software delivery is not just generating syntax. It is about understanding trade-offs, architecture, and real business value.

An unguided agent reproduces average patterns from average training data. When machines only talk to machines, systems degrade into noise.

## What Google Research Built with Harness²

Google Research open sourced Harness² on GitHub. It is an open source framework for recursive agent harnessing.

The underlying model weights stay completely frozen. Instead of retraining the model, the framework optimizes the harness around it.

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

In five years, teams will split into two profiles:

1. Prompt operators who trigger agents and hope the output runs.
2. Real builders who understand core systems and treat AI as an amplifier.

When an outage hits production, a prompt operator cannot fix the race condition. You need someone who can read network waterfalls, debug runtime memory, and explain architectural decisions.

## Pipelines Need Human Governance

AI agents belong in automated pipelines. They are useful for boilerplate generation, SonarQube analysis, and initial pull request descriptions.

The pull request merge must stay strictly human.

A real engineer must check accessibility with a screen reader. A real engineer must verify semantic HTML, ARIA tags, and UI behavior.

Use Harness² and automated tooling where it makes sense. Keep your hands on the code and talk directly with your people.

Keep building systems by hand to stay sharp.
