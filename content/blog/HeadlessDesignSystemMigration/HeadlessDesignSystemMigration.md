---
title: Design System Migration with MCP and Slingshot
description: How I removed UI from TSX to build a design system layer on top of a core component library, connected with MCP servers, and powered by Sapient Slingshot.
date: 2025-09-11
tags:
  - Design System Manager
  - Frontend
  - Headless
  - Slingshot
---

## Removing UI from TSX for a Design System Migration

Sometimes change comes from removing, not adding. I recently removed UI contents from a TSX implementation. Now our client’s new aggregated design system component works **headless** with existing Providers, Components, and Containers.

### The challenge

The old TSX files mixed logic and UI. Layout, styles, and visual glue were baked into every component. This made it hard to scale or update design. The new design system components needed a clean separation. Only then could they deliver a **consistent experience across apps and markets**.

### Headless as an add-on

The design system is built **on top of the [core component library](/blog/ReplacingMUIANewDesignSystemApproach/)**. It combines existing base components, defines patterns, and makes Cards, Filters, and Buttons look and behave the same everywhere. The UI components are **dumb**: they only render what they get. Data, content, and CTA events are injected from outside. This keeps them reusable, predictable, and easy to test.

### Connected with MCP servers

This setup also uses **MCP servers**:

- Some, like the **[NX repo MCP](/blog/SuperchargeVSCodeWithMCPServersAndAgentMode/)**, come out of the box.
- **Figma MCP** [pulls design rules and tokens directly](/blog/MCPServerInDesignSystemWorkflows/).
- **Atlassian MCP** keeps tickets updated, syncing progress and status in real time.

This automation helps the design system stay aligned with design specs and project workflows without extra manual work.

### What I did

- Used **Agentic Chat** and **VS Code** to strip UI from TSX.
- Built a migration path in a single **prompt file** that guided all changes.
- Integrated MCP servers to connect design, code, and tickets.

### The aha moment

I saw a fully automated migration run from that single prompt file. Design and ticket updates happened in sync. That’s when [agentic workflows stopped being theory](/blog/TheAgenticDesignWorkflowOrchestratingMCPAndAIForScale/) and started to save real time.

### The outcome

- Faster migration, less manual work.
- Consistent design across teams and apps, regardless of dev preferences.
- Clear alignment between design and delivery pipelines.

### Conclusion: Powered by Sapient Slingshot

[**Sapient Slingshot**](https://www.publicissapient.com/sapient-ai/sapient-slingshot) turned a tedious migration into a repeatable system. With one prompt file, we automated a process that normally takes weeks. Design and dev stayed aligned in real time. This is how we scale design systems now. AI-driven engineering means **fewer manual steps, faster delivery, and better quality.**
