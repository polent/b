---
title: Design Tokens – from bold vision to standard practice
description: Discover how design tokens transformed our workflow, bridged design and engineering, and why every modern project should adopt them now.
date: 2025-11-18
tags:
  - Design Tokens
  - theming
  - multi-brand support
  - Design System
  - Cross-platform Consistency
  - typography
  - spacing
  - color specification
  - open standard
  - collaboration
---

## A Brave Decision Three Years Ago

When we decided three years ago to roll out design tokens across our project, it felt a little visionary—and a little brave. At the time, nobody really knew where this path would lead, or whether design tokens would ever become widespread. Today? A project without design tokens would feel odd and uncommon.

This shift enabled us to make one binding decision: design and tech components are no longer separate—design tokens bridge that gap. And in the last two years, with AI-powered tools emerging, that bridge has only grown more critical. We can now connect Figma and Storybook and Atlassian Confluence and VS Code at once—and even tools like BrowserStack allow automated testing and design-token integration. But that, as they say, is a story for another day.

## What’s New – And Where Do Design Tokens Help Us?

- **Theming & multi-brand support** – Manage light and dark modes, accessibility variants, and multiple brand themes — without file duplication.
- **Modern color specification** – Full support for Display P3, OKLCH, and all CSS Color Module 4 spaces, aligning with how design tools actually work.
- **Rich token relationships** – Inheritance, aliases, component-level references allow sophisticated design systems to flourish.
- **Cross-platform consistency** – One token file can generate platform-specific code for iOS, Android, web, and Flutter—keeping everything in sync.

There are already many tools that support this workflow: the specification’s stability is backed by reference implementations like Style Dictionary, Tokens Studio and Terrazzo. More than ten design tools and open-source projects – including Penpot, Figma, Sketch, Framer, Knapsack, Supernova and zeroheight – already support or are implementing the standard.
Even more importantly: the tooling is open. Developed by the Design Tokens Community Group, the specification reflects real-world design-system use cases from teams at companies of all sizes. Being an open standard means no single vendor controls the format—teams have freedom of tool choice without compatibility concerns.

## Design Tokens in Detail

### What are design tokens?

- **Abstract values**: They replace static values like `$0xFFFFFF` (white) with descriptive names like `color.white`.
- **Atomic building blocks**: They represent the most fundamental visual attributes—colors, fonts, shadows, border-radii, spacing and animations.
- **Centrally maintained**: All visual properties are defined and maintained in a single, central place.
- **Platform-agnostic**: They ensure consistency across different applications and platforms.
- **Data format**: Often stored in structured formats like JSON, and can be integrated as variables across programming languages and platforms.

### Why do they matter?

- **Improved collaboration**: They create a shared language between designers and developers, leading to more efficient teamwork.
- **Increased consistency**: They ensure that the design “looks and feels” the same across the entire digital landscape.
- **Easier maintenance**: Changes to design guidelines can be made in one place and propagated instantly across all elements.
- **Scalability**: They make it far easier to scale a design system as projects and product portfolios grow.

### Example tokens

Here are five concrete examples:

- **Colors**: `color.primary.500`, `color.background.secondary`
- **Typography**: `font.size.large`, `font.weight.bold`
- **Spacing**: `spacing.medium`, `spacing.small`
- **Border radii**: `radius.small`, `radius.medium`
- **Shadows**: `shadow.small`, `shadow.medium`

## Final Thoughts

When we embarked on this journey, adopting design tokens felt like a leap into the unknown. Today, it's clear they are foundational. They empower design and engineering to speak the same language, enable scalable and consistent systems, and prepare us for a future where tooling spans design apps, component libraries, AI workflows and beyond. If you haven't yet embraced design tokens, now is the time. A project without them simply… wouldn't feel right.

## References

- [Design Tokens Specification Reaches First Stable Version](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
