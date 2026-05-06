---
title: Prompting is not everything — Why the tool matters
description: I tested Claude, Gemini, and Copilot with a "Zero-Shot" CV generator task. The results show that a good prompt needs a strong engine to work.
date: 2026-05-06
tags:
  - AI Research
  - Frontend Development
  - LLM Comparison
  - Automation
---

## The Experiment: Building a CV Website with AI

I did a fun project to check how modern CLIs and Chat agents work with a simple prompt and clean data. The goal was to see if an AI can build a state-of-the-art CV webpage completely alone. No questions allowed—just "Zero-Shot" execution.

All code and the source data are here: [github.com/polent/Research](https://github.com/polent/Research)

## The Setup and the Tools

I used a JSON file for the content and a profile image. The prompt asked for a professional design, light and dark themes, and high standards for accessibility and SEO.

I tested four different setups. It was a bit unfair for Copilot because I used an older version without a subscription. But this shows exactly the point: the more expensive and modern tools work better. Even the best prompt cannot save an outdated model.

## The Results

You can see the difference in the output links:

* **Claude (Opus 4.7):** This was my favorite. The code is very clean and follow all rules. [View Claude Result](https://present.polente.de/research/claude-opus-4-7/)
* **Gemini (CLI):** It made the file very SEO friendly. This was expected and shows good technical logic. [View Gemini Result](https://present.polente.de/research/gemini-cli/)
* **Copilot (GPT-4):** This result was massive broken. It produced a lot of useless code. [View Copilot Result](https://present.polente.de/research/copilot-gpt4/)
* **Something (Sonnet):** This one was massive overengineered and still broken. It even looked for images outside the correct folder. [Something Result](https://present.polente.de/research/ss-claude-sonnet-4/)

## My Conclusion

The tool you use is just as critical as the prompt you write. For complex frontend tasks that need to be "Zero-Shot," you need a tool that understands modern W3C standards and accessibility: **Success with Claude / Gemini**

## The Master Prompt

This is the MD file I used as the input for all agents:

```Markdown
# Autonomous CV Website Generator Prompt

You are an expert Frontend Developer and UI/UX Designer. Your task is to
autonomously generate a state-of-the-art, fully static CV/Resume webpage based
on the provided source data.

## Constraints & Execution Mode

- **Zero-Shot Execution:** You must work completely autonomously. Do NOT ask any
  clarifying questions. Use your best judgment for any ambiguities and output
  the final result.
- **Output Location:** Place all generated files into the
  `dist/<your_agent_name>` directory so that the webpage can be browsed
  statically (e.g., `dist/gpt4/index.html`).

## Input Data

- All raw data is located in the `src/` directory of the project root.
- Use `src/index.json` for the text content of the CV.
- Use the image `src/HolgerHellinger640.png` as the profile picture.

## Core Requirements

### 1. Design & Aesthetics

- **State-of-the-Art:** Create a modern, professional, and visually stunning
  aesthetic. Use excellent typography, whitespace, and subtle
  animations/transitions.
- **Icons & Imagery:** Effectively feature the provided profile image. Create
  and use high-quality, modern SVG icons for contact details, social links,
  sections, and skills.
- **Theming:** Implement **Light and Dark themes**. Respect system preferences
  by default (`prefers-color-scheme`) and include a functional toggle switch
  for manual overrides.

### 2. Print & Export

- **Print Styles:** Write robust @media print CSS rules. When the user
  attempts to print or save the page as a PDF, the CV must format perfectly to
  standard paper sizes (A4/Letter), hiding UI elements like the theme toggle,
  removing dark mode backgrounds, and handling page breaks elegantly.

### 3. Optimization & Readability

- **Accessibility (a11y):** The HTML must be fully accessible. Use semantic
  HTML5, correct heading hierarchy, and proper ARIA labels. Ensure keyboard
  navigability and high contrast.
- **SEO:** Optimize the site for search engines with comprehensive
  <meta> tags (title, description, viewport, OpenGraph).
- **Agent/Machine Readable:** Ensure the site structure is highly logical so AI
  agents can parse it effortlessly. Embed the CV data into the HTML using
  JSON-LD with the schema.org/Person specification.
```
