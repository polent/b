---
title: Supercharge GitHub Copilot's Agent Mode
description: Learn how to extend GitHub Copilot in VS Code using MCP servers. This guide shows how to connect tools like Jira or NX, write custom instructions, and create smarter developer workflows with agent mode.
date: 2025-05-21
tags:
  - MCP
  - Agent
  - VSCode
  - Secret
  - Token
---

## Visual Studio Code docs on MCP servers and Agents

The Visual Studio Code docs on **MCP servers** show how to supercharge GitHub Copilot's agent mode by plugging in external tools using the **Model Context Protocol (MCP)**.

---

## What is MCP?

MCP is an open standard that lets AI communicate with tools and services via a unified interface. With MCP-compatible servers hooked up to VS Code, Copilot can do more than just suggest code – it can:

- Run file operations
- Access databases
- Make API calls

All directly inside your editor.

---

## The Guide Covers:

- Setting up MCP servers
- Configuring them in VS Code
- Managing the whole integration

It also explains what types of servers are supported and how to use MCP tools in **agent mode**.

The goal?
> Smoother workflows, smarter tooling, and more time for building cool stuff.

👉 **Dive into the docs:** [VS Code MCP Guide](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) 📚

---

## Sample MCP Servers I Use

Here are a few MCP servers I currently have configured:

- **Atlassian integration** (Jira & Confluence): [`sooperset/mcp-atlassian`](https://github.com/sooperset/mcp-atlassian)
- **NX integration** for monorepos: [`nx-mcp`](https://github.com/modelcontextprotocol/servers)

More MCP servers are available here: 👉 [List of MCP Servers](https://github.com/modelcontextprotocol/servers)

---

## Secure Setup Tips

When setting up your `mcp.json`, you might worry about exposing settings.
To hide your MCP server variables securely, follow this flow:

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
  }],
}
```

> This will ask for secrets at server start and remember them.
> Use placeholder variables in your config (e.g., `${input:atl_token}`).

```JSON
"CONFLUENCE_API_TOKEN": "${input:atl_token}",
```

---

## Project-Specific Instructions for Copilot

GitHub Copilot now supports a `.github/copilot-instructions.md` file in your repo to tailor responses to your tools, workflows, and coding style.

### How to Set It Up

1. Create `.github/copilot-instructions.md` in your repository root
2. Write clear, natural-language instructions in Markdown

> Copilot will now include these automatically in its responses.

### How to Check It’s Working

Look for `.github/copilot-instructions.md` in the **References** section of Copilot Chat responses.

👉 [GitHub Docs – Copilot Instructions](https://docs.github.com/en/copilot)

---

## Custom Prompts (Optional)

You can also create prompt files like `.github/prompts/promts_Example.md`. These files guide Copilot to align with your coding style, frameworks, and project needs, enhancing its suggestions. For more details, [visit the official documentation](https://code.visualstudio.com/docs/copilot/copilot-customization).

## Additional specialized Instructions

Additionally two files are available that you can configure in your Settings.json with the following settings. The names alone explain what they are for.

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
