---
title: Using MCP Servers for Design System Management
description: How Model Context Protocol servers connect tools like Figma, Atlassian, and Storybook for seamless design-to-code workflows in VS Code or any modern IDE.
date: 2025-11-11
tags:
  - Design Systems
  - MCP
  - ai
  - Copilot
  - Developer Experience
---

## From Design to Code with MCP Servers

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) defines a standard way for local or remote tools to talk to models and IDEs. It lets you access external services or APIs directly inside your editor, without complex system setup or locked-in toolchains. MCP servers connect tools like Atlassian, Figma, or Storybook to your AI model and make workflows faster, consistent, and traceable.

Below is an example `mcp.json` configuration that we use across our Design System setup:

```json
{
  "servers": {
    "atlassian": {
      "url": "https://mcp.atlassian.com/v1/sse",
      "type": "http"
    },
    "figma": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    },
    "storybook-mcp": {
      "url": "http://localhost:6006/mcp",
      "type": "http",
      "headers": {
        "X-MCP-Toolsets": "dev,docs"
      }
    }
  }
}
```

## Workflow Overview

Our workflow starts in **Figma**. Designers use Figma and Figma Make to create responsive UX and UI layouts for clients. Semantic structure and design flexibility are key. Once approved, design tokens are exported into a shared repository. We use **Style Dictionary** to generate tokens for web, Flutter, and other platform targets.

{% image "./workflow.jpg", "Flowchart showing a design-to-code system. On the left, red circles show design steps from brand style guide to UI components. In the center, black and blue circles show tools like Figma, Style Dictionary, Git, and Storybook. On the right, web components are built, published via JFrog/NPM, and shared with contributors.", [], "(min-width: 40em) 960px, 100vw" %}

Next, the **Figma MCP server** connects the IDE directly to these designs. Engineers can use commands like `#get_design_context`, `#get_metadata`, or `#get_screenshot` to pull Figma information into the editor.
More details: [Figma MCP Guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)

Before development starts, the **Atlassian MCP server** helps fetch and manage Jira tickets. Typical actions include:

* `#getJiraIssue`
* `#editJiraIssue`
* `#addCommentToJiraIssue`

This ensures the agent knows the ticket context before coding begins.
Documentation: [Atlassian Rovo Setup](https://support.atlassian.com/rovo/docs/setting-up-ides/)

For component development, we use the **Storybook MCP**. Still in alpha, it already provides two useful modes:

* `dev`: retrieves component documentation or usage.
* `docs`: gives UI building instructions.

More info: [Storybook MCP Addon](https://storybook.js.org/addons/@storybook/addon-mcp)

## Using Prompt Files

Prompt files let you define complex, repeatable workflows.
Example — an icon update process:

```markdown
---
agent: 'agent'
model: Claude Sonnet 4
tools: [
  'edit/createFile', 'edit/editFiles', 'search', 'runCommands',
  'atlassian/getJiraIssue', 'figma/get_design_context',
  'storybook-mcp/get-component-documentation'
]
description: 'Design System - Icon Management Prompt'
---
# Icon Workflow

1. Fetch Jira ticket
2. Pull Figma assets
3. Build and test
4. Create changeset
5. Update Jira status
```

Prompt files can be stored in your repo to maintain team consistency.
Learn more: [VS Code Custom Prompts](https://code.visualstudio.com/docs/copilot/customization/prompt-files)

## Instruction Files

To make the agent aware of your coding conventions, you can use instruction files.
Example for test files:

```markdown
---
applyTo: '**/*.spec.*'
---
Follow Jest best practices.
```

These can define lint rules, review tone, or commit patterns.
Reference: [Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)

## How It All Comes Together

With MCP servers and prompt files, engineers can:

1. Read Jira tickets directly in the IDE
2. Fetch related Figma design data
3. Get component documentation from Storybook
4. Apply code standards automatically
5. Build, commit, and update tickets: all in one flow

No tool-hopping. No lost context. Agents act with awareness of design, documentation, and project state.

{% image "./workflow_mcp.jpg", "Diagram showing a workflow from design to code. On the left, Figma and Design System Manager connect with Jira/Atlassian. In the center, Git and CSS form a tech repository (Monorepo). On the right, Storybook links to Web and React components, which merge into aggregated components.", [], "(min-width: 40em) 960px, 100vw" %}

This setup runs in **VS Code**, but also works with **Cursor**, **Cline**, or any IDE that supports MCP.

## Why It Matters

For Design System teams, context switching is the biggest productivity loss. With MCP-based workflows, you stay inside one environment. The model fetches context from Jira, design, and documentation servers automatically.

The result: fewer errors, faster delivery, and better alignment between designers and engineers.

## Next Steps

Start small. Connect one MCP server (e.g., Figma). Try simple prompts to pull metadata or screenshots. Once stable, add Jira and Storybook.

Over time, you’ll see your design system evolve from a manual process to a connected, intelligent workflow: a true **continuous experience pipeline**.
