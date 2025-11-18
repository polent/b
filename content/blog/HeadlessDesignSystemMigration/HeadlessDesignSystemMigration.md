---
title: Design System Migration with MCP and Slingshot
description: How I removed UI from TSX to build a design system layer on top of a core component library, connected with MCP servers, and powered by Sapient Slingshot.
date: 2025-09-11
tags:
  - Design System Manager
  - frontend
  - headless
  - slingshot
---

## Removing UI from TSX for a Design System Migration

Sometimes change comes not from adding, but from removing. I recently removed UI contents from a TSX implementation so our client’s new aggregated design system component could work **headless** with existing Providers, Components, and Containers.

### The challenge

The old TSX files mixed logic and UI. Layout, styles, and visual glue were baked into every component. This made it hard to scale or update design. The new design system components needed a clean separation so it could deliver a **consistent experience across apps and markets**.

### Headless as an add-on

The design system is built **on top of the core component library**. It orchestrates existing base components, defines patterns, and ensures Cards, Filters, and Buttons look and behave the same everywhere.
The UI components are **dumb**: they only render what they get. Data, content, and CTA events are injected from outside. This keeps them reusable, predictable, and easy to test.

### Connected with MCP servers

This setup also uses **MCP servers**:

- Some, like the **NX repo MCP**, come out of the box.
- **Figma MCP** pulls design rules and tokens directly.
- **Atlassian MCP** keeps tickets updated, syncing progress and status in real time.
This automation helps the design system stay aligned with design specs and project workflows without extra manual work.

### What I did

- Used **Agentic Chat** and **VS Code** to strip UI from TSX.
- Built a migration path in a single **prompt file** that guided all changes.
- Integrated MCP servers to connect design, code, and tickets seamlessly.

### The aha moment

Seeing a fully automated migration from that single prompt file, with design and ticket updates happening in sync. That’s when agentic workflows stopped being theory and started driving real efficiency.

### The outcome

- Faster migration, less manual work.
- Consistent design across teams and apps, regardless of dev preferences.
- Clear alignment between design and delivery pipelines.

### Conclusion: Powered by Sapient Slingshot

[**Sapient Slingshot**](https://www.publicissapient.com/sapient-ai/sapient-slingshot) turned this from a tedious migration into a repeatable system.
With one prompt file, we automated a process that would normally take weeks, aligned design and dev in real time, and set a new standard for scaling design systems.
This shows the power of AI-driven engineering: **fewer manual steps, faster delivery, and better quality — without compromise.**
