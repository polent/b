---
title: "Dark Factories and Developer Pipelines: Finding the Sweet Spot for AI"
description: Why autonomous dark factories in software risk model collapse, and how human in the loop pipelines keep digital products accessible and reliable.
date: 2026-08-14
tags:
  - engineering
  - AI
  - Architecture
  - Accessibility
  - Web-Standards
---

## Beyond the Hype: Coding in Practice

I am not a fan of pure AI hype, but I appreciate strong tooling when building software. In the nineties, I started coding in simple text editors. Over time, we moved through Notepad++, Sublime, and Atom. Tools like FrontPage or Dreamweaver promised a lot back then, but they never gave full control over clean markup.

When smart linters and auto suggestions arrived, adopting them was a natural step. In my current editor, dozens of plugins manage formatting, validation, and cloud repository links. Nobody questions using Prettier or CSS post processors today. They are standard engineering tools.

AI brings a different footprint. Using large language models to turn string characters into uppercase is an unnecessary waste of compute power. Regular expressions and native functions do that much better. Yet between pointless use cases and the hype bubble, there is a real sweet spot where automated pipelines create measurable value.

## How a Modern Agent Pipeline Works in Practice

The idea of a dark factory comes from manufacturing, where robots build goods with the lights turned off. In software, some teams try to feed a prompt into an agent and expect a finished product with zero human intervention.

That hands off model works for trivial scripts, but complex web platforms need careful guidance. In our daily delivery, we use agents to support our engineers rather than replace them.

Here is an example setup of how we structure our pipeline:

* **Context Ingestion:** The Model Context Protocol (MCP) reads the Jira ticket, acceptance criteria, and technical constraints.
* **Design Validation:** MCP pulls component properties, design tokens, and spacing rules directly from Figma.
* **Code Generation:** Agents draft modular components according to our documented Architecture Decision Records (ADRs) and W3C accessibility baselines.
* **Automated Audits:** Automated agents run checks against OWASP security patterns, TypeScript types, and axe-core accessibility rules before any human review.
* **Documentation Sync:** Architecture decisions and pull request summaries sync to Confluence for transparency.
* **Human in the Loop (HIL):** A lead developer reviews the pull request, validates the edge cases, and merges the code.

The benefit is clear: automated agents do not get tired, and they do not skip accessibility checks or unit tests when sprint deadlines get tight.

## The Dark Factory Fallacy and Model Collapse

When teams try to automate everything without human direction, quality quickly degrades. Large language models operate on statistical averages. When an agent creates an interface or an entire digital shop alone, it relies on patterns seen thousands of times across the web.

This leads directly to two problems:

1. **Model Collapse:** When AI systems generate most of the code and content, future models train on that synthetic data. The output converges toward a flat average, losing creative edge and technical variation.
2. **Generic User Experiences:** Digital products end up looking like generic clones. Accessible, inclusive design requires intentional choices for real human needs, not an algorithm calculating the most probable next token.

## Real Context Still Requires Real People

Consulting and software architecture are grounded in human conversation. We listen to clients, learn their technical debt, and discover what their end users actually struggle with.

Here is a real world example of where automated assumptions fail:

In a recent project, our client had a file storage system that supported user comments on uploaded files. We needed to integrate digital assets from an enterprise CMS into that exact interface. The AI suggested enabling comments on those CMS assets right away.

What the AI could not see was that the CMS API did not support a commenting endpoint unless the asset was duplicated into the file system first. An autonomous dark factory would have built an interface based on false assumptions, leading to broken flows and costly refactoring.

## Conclusion

AI tools make our pipelines faster, our security checks stricter, and our documentation more consistent. They help our engineering teams deliver up to 50 percent more value with high quality standards.

However, real system architecture, user empathy, and strategic decisions cannot be outsourced to a dark factory. Real human expertise remains the foundation of reliable software.
