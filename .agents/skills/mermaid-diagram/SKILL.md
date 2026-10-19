---
name: mermaid-diagram
description: >-
  Provides guidelines and best practices for authoring build-time Mermaid diagrams
  in b.polente.de posts. Use when creating, debugging, or styling Mermaid diagrams
  or flowcharts.
---

# Mermaid Diagrams in b.polente.de

This repository renders Mermaid diagrams to SVG at build time using Playwright and `markdown-it-mermaid-server`.

## 1. Syntax & Fencing

Always wrap diagrams in a fenced code block with language `mermaid`:

````markdown
```mermaid
graph TD
    A["Start"] --> B{"Check Conditions"}
    B -->|"Pass"| C["Proceed"]
    B -->|"Fail"| D["Retry"]
```
````

## 2. Diagram Labeling Best Practices

To avoid build-time parser crashes in `mermaid-cli-batch`:
- **Quote all node labels containing special characters**:
  Always use quotes if the label includes parentheses, brackets, colons, or punctuation.
  - Good: `id["Step 1: Setup (Figma)"]`
  - Bad: `id[Step 1: Setup (Figma)]`
- **Line breaks**: Use `<br/>` inside double quotes:
  - Good: `A["Step 1: Ingestion<br/>(Batch Pipeline)"]`
- **Avoid complex HTML tags**: Do not use `<span>`, `<div>`, or complex inline styles inside node labels.

## 3. Theme & Styling Conventions

This blog commonly uses a "Cold Blue Technical Theme" across technical posts. Here is the standard reference palette:

```mermaid
graph TD
    %% Cold Blue Technical Palette
    classDef banana fill:#D1E8FF,stroke:#0052CC,stroke-width:1px,color:#003366,rx:10,ry:10;
    classDef peel fill:#F0F7FF,stroke:#8EB6E6,stroke-width:1px,color:#003366,rx:10,ry:10;
    classDef stem fill:#0052CC,stroke:#003366,stroke-width:1px,color:#FFFFFF,rx:5,ry:5;

    S1("Component A"):::banana
    S2("Integration Layer"):::peel
    S3("Orchestration"):::stem

    S1 --> S2
    S2 --> S3

    linkStyle default stroke:#7B92B2,stroke-width:1px;
```

## 4. Verification

Whenever you add or modify a diagram:
1. Run `npm run build` to verify that `markdown-it-mermaid-server` renders the diagram cleanly without errors.
2. Temporary files are stored in `mermaidTmp/` during the build and cleaned up automatically.
