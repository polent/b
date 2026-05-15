---
title: Engineering Excellence or Brain Rot? The AI Development Paradox
description: Why AI in software development needs more than just a prompt. Lessons from legacy code, greenfield success, and the investment required for a clean baseline.
date: 2026-05-15
tags:
  - AI
  - Engineering-Leadership
  - Software-Quality
  - Web-Standards
  - Productivity
---

## The Illusion of Easy Code

{% image "./ai-dev-brain-rott.png", "A split illustration comparing 'Unmanaged AI' vs 'Managed AI.' Left: A tired developer in a messy office with 'Rat's Nest' code and 'Brain Rot.' Right: A smiling developer at a clean standing desk using structured 'Quality Pipelines,' 'AI Agents,' and 'Sprints' for 'Engineering Excellence.'", [], "(min-width: 40em) 960px, 100vw" %}

A recent headline from **404 Media** caught my eye: *"Software Developers Say AI Is Rotting Their Brains."* It’s a provocative title, but for many of us in the trenches, it hits home. Developers report a sense of "de-skilling", a feeling that by outsourcing the "thinking" to an LLM, we are losing our ability to reason about complex systems. One developer compared it to the way we stopped remembering phone numbers once we got cellphones; now, we are mentally outsourcing our critical thinking.

I remember the early arguments for AI: *"Don’t worry. The goal is to free you from repetitive tasks so you can focus on high-value work."*

The reality is that AI rarely meets high standards. It is easy to like the idea of delegating boring work, but it brings a vital question: What exactly are these "high-value" tasks? If the parts we loved about our jobs, the problem-solving and the deep focus, are being automated, what is left? Only a capitalist value creation that might not lead to better user experiences at all.

## The Disillusionment of the Legacy Trap

I experienced this paradox firsthand on a large legacy codebase. At the start, I was enthusiastic. We were able to churn out code at a pace that felt like magic. But the quality was far from ideal.

We quickly fell into the "shit in, shit out" trap. Without a common baseline or strict quality control, the AI simply followed the existing mess of the legacy system. The result was a "rat’s nest" of tech debt that became increasingly hard to untangle. I left that account feeling disillusioned. I realized then that if you don't invest heavily in the foundations, AI doesn't help you; it just helps you fail faster.

## The Greenfield Turning Point

However, my perspective shifted recently while working on a near-greenfield project. I had the opportunity to cut out everything unnecessary from the initial POC, starting with a clean slate.

This time, I set up my agents to follow strict coding guidelines from day one. I ran specialized quality agents that checked for architectural rules, OWASP security standards, and style guides. The difference was night and day.

**We delivered in 8 weeks what would have taken us years to build just two years ago.**

The key wasn't just "using AI"; it was *managing* it. We treated the agents as part of a sophisticated workflow, ensuring they didn't turn our pull requests into a mess.

## Investing in the "Baseline"

To avoid the "brain rot" and achieve actual engineering excellence, there is a huge investment required. It isn't just about writing a prompt; it's about aligning your entire ecosystem:

* **Design Alignment:** Designs in **Figma** (or your design system of choice) must align properly with the codebase.
* **Common Naming:** Naming conventions need to match perfectly across design tokens and code.
* **Documented Intent:** Everything needs to be documented and improved by annotations and "prompt helpers" that provide the AI with the necessary context.
* **Workflow Cleanup:** You cannot automate a mess. You must rework code to align to a common baseline first.

## A New Way of Working: The AI Pipeline

We are entering a completely different era of software engineering. Today, no one questions a CI/CD pipeline; it’s a baseline necessity for handling repeating tasks. Software development, especially in e-commerce, involves a massive amount of repetition. Creating your fifth or sixth platform is often just orchestrating the middle layer and painting a new frontend on top of established baseline functionality.

AI is the next evolution of that automation. But it requires a new set of rules to prevent quality decay:

1. **Keep PRs small:** Small changes are easier for humans to audit.
2. **Sprints & Small Increments:** Build in manageable cycles.
3. **Human-in-the-loop:** Always let humans review the output.
4. **No Cryptic Names:** If a human can't read it, the next agent won't understand it either.
5. **Quality Agents:** Run automated checks for security, performance, and style.
6. **Trust, but Verify:** Maintain your standard pipeline (Sonarqube, Snyk, E2E tests).

**Use AI, but never trust it blindly.** By focusing on the workflow and the baseline, we can ensure that AI is a tool for excellence, not a catalyst for atrophy.

---

## References

* **404 Media:** [Software Developers Say AI Is Rotting Their Brains](https://www.404media.co/software-developers-say-ai-is-rotting-their-brains/)
