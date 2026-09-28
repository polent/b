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

## A Brave Decision in 2022

In 2022 we decided to roll out design tokens across our project. It felt a little visionary and a little brave. At the time, nobody knew where this path would lead. Nobody knew if design tokens would ever become widespread. Today a project without design tokens would feel odd and uncommon.

This shift let us make one firm decision. Design and tech components are no longer separate. Design tokens bridge that gap. Since 2023 AI-powered tools have arrived, and that bridge has become even more important. We can now [connect Figma and Storybook and Atlassian Confluence and VS Code at once](/blog/MCPServerInDesignSystemWorkflows/). Even tools like BrowserStack allow automated testing and design-token integration. That is a topic for another post.

## What's New and Where Do Design Tokens Help Us?

- **Theming & multi-brand support**: Manage light and dark modes, accessibility variants, and [multiple brand themes](/blog/ReplacingMUIANewDesignSystemApproach/) without file duplication.
- **Modern color specification**: Full support for Display P3, OKLCH, and all CSS Color Module 4 spaces, aligning with how design tools actually work.
- **Rich token relationships**: Inheritance, aliases, component-level references support large, complex design systems.
- **Cross-platform consistency**: One token file can generate platform-specific code for iOS, Android, web, and Flutter, keeping everything in sync.

Many tools already support this workflow. Reference implementations like [Style Dictionary, Tokens Studio and Terrazzo](/blog/ExperiencePipelinesExplained/) back the stability of the specification. More than ten design tools and open-source projects already support the standard or are implementing it. These include Penpot, Figma, Sketch, Framer, Knapsack, Supernova and zeroheight.
Even more important: the specification is open. The Design Tokens Community Group developed it. It reflects real-world design-system use cases from teams at companies of all sizes. It is an open standard. No single vendor controls the format. Teams can choose their tools freely without compatibility concerns.

## Design Tokens in Detail

### What are design tokens?

- **Abstract values**: They replace static values like `#FFFFFF` (white) with descriptive names like `color.white`.
- **Atomic building blocks**: They represent the most fundamental visual attributes: colors, fonts, shadows, border-radii, spacing and animations.
- **Centrally maintained**: All visual properties are defined and maintained in a single, central place.
- **Platform-agnostic**: They ensure consistency across different applications and platforms.
- **Data format**: Often stored in structured formats like JSON, and can be integrated as variables across programming languages and platforms.

### Why do they matter?

- **Improved collaboration**: They create a shared language between designers and developers, leading to more efficient teamwork.
- **Increased consistency**: They ensure that the design "looks and feels" the same across all digital products.
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

When we started, adopting design tokens felt like a step into the unknown. Today it is clear they are a foundation. Design and engineering speak the same language. Systems stay scalable and consistent. And we are ready for tooling that spans design apps, component libraries, AI workflows and more. Design tokens belong in every project now. A project without them would not feel right.

## References

- [Design Tokens Specification Reaches First Stable Version](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
