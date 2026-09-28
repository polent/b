---
title: Supercharge GitHub Copilot's Agent Mode
description: "Extend GitHub Copilot in VS Code with MCP servers. Connect Jira or NX, and write custom instructions and prompt files for agent mode."
date: 2025-05-21
tags:
  - MCP
  - Copilot
  - VS Code
  - AI Agents
---

## Visual Studio Code docs on MCP servers and Agents

The Visual Studio Code docs on **MCP servers** show how to extend GitHub Copilot's agent mode. You plug in external tools with the **Model Context Protocol (MCP)**.

---

## What is MCP?

MCP is an open standard. It lets AI talk to tools and services through one shared interface. Hook MCP-compatible servers up to VS Code, and Copilot does more than suggest code. It can:

- Run file operations
- Access databases
- Make API calls

All directly inside your editor.

---

## The Guide Covers

- Setting up MCP servers
- Configuring them in VS Code
- Managing the whole integration

It also explains what types of servers are supported and how to use MCP tools in **agent mode**.

The goal:
> Smoother workflows, smarter tooling, and more time for building cool stuff.

**Read the docs:** [VS Code MCP Guide](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

---

## Sample MCP Servers I Use

These are the MCP servers I have configured right now:

- **[Atlassian integration](/blog/MCPServerInDesignSystemWorkflows/)** (Jira & Confluence): [`sooperset/mcp-atlassian`](https://github.com/sooperset/mcp-atlassian)
- **NX integration** for monorepos: [`nx-mcp`](https://github.com/nrwl/nx-console)

More MCP servers are available here: [List of MCP Servers](https://github.com/modelcontextprotocol/servers)

---

## Secure Setup Tips

When you set up your `mcp.json`, you might worry about exposing settings.
To hide your MCP server variables, follow this flow:

```JSON
{
  "inputs": [{
    "id": "atl_token",
    "type": "promptString",
    "password": true,
    "description": "Enter your Atlassian Jira and Confluence token"
  },{
    "id": "BS_user",
    "type": "promptString",
    "password": false,
    "description": "Enter your BS User"
  },{
    "id": "BS_token",
    "type": "promptString",
    "password": true,
    "description": "Enter your BS token"
  }]
}
```

> VS Code asks for the secrets at server start and remembers them.
> Use placeholder variables in your config, for example `${input:atl_token}`.

```JSON
"CONFLUENCE_API_TOKEN": "${input:atl_token}",
```

---

## Project-Specific Instructions for Copilot

GitHub Copilot now supports a [`.github/copilot-instructions.md` file](/blog/HeadlessDesignSystemMigration/) in your repo. It tailors responses to your tools, workflows and coding style.

### How to Set It Up

1. Create `.github/copilot-instructions.md` in your repository root
2. Write clear, natural-language instructions in Markdown

> Copilot now includes these instructions in its responses automatically.

### How to Check It’s Working

Look for `.github/copilot-instructions.md` in the **References** section of Copilot Chat responses.

[GitHub Docs: Copilot Instructions](https://docs.github.com/en/copilot)

---

## Custom Prompts (Optional)

You can also create prompt files like `.github/prompts/example.prompt.md`. These files guide Copilot to follow your coding style, frameworks and project needs. That makes its suggestions better. For more details, [visit the official documentation](https://code.visualstudio.com/docs/copilot/customization/prompt-files).

## Additional Specialized Instructions

Two more instruction files are available. You configure them in your `settings.json` with the settings below. The names explain what they are for.

```JSON
"github.copilot.chat.codeGeneration.instructions": [
  {
    "file": ".github/code-style.md"
  }
],
"github.copilot.chat.testGeneration.instructions": [
  {
    "file": ".github/test-style.md"
  }
]
```
