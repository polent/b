---
title: Replacing MUI - A New Design System Approach
description: Learn how we transitioned from MUI to a custom design system, achieving better performance, streamlined processes, and built-in accessibility compliance.
date: 2025-03-14
tags:
  - Accessibility
  - MUI
  - Design System
  - Component Library
---

## Removing MUI and Our Old Design System

### TL;DR

We moved away from MUI and our old in-house design system. The reasons were performance issues, component duplication and complex theming. We built a React-based component library. It takes design tokens directly from Figma, so updates show up right away. JavaScript bundle sizes dropped by 28%. Apps got faster, and Lighthouse scores went up by 19 points. Figma is now our single source of truth for design. That keeps teams consistent. The EUAA 25 accessibility regulations are coming. Accessibility is already built into the foundation of our design system, so we are ready.

## Streamlining Performance and Consistency

This post is about how we moved away from MUI and our old in-house design system. Over time, MUI no longer met our needs. Our earlier attempt at a custom design system had problems too. We struggled with component ownership and multiple entries for similar components. Design tools and the final application were not connected. In the end, we had a framework design system and another custom system. Neither teams nor designers wanted to use them.

Performance got worse, components were duplicated, and theming with MUI was complex. So we decided to build our own dedicated design system.

Then we started on a fresh, more effective approach. After looking at different options, we chose to build a React-based component library. This matched the infrastructure of our main consumer. From the start, we made the library easier to manage and a better fit for our design tools. (In an upcoming post, I’ll explain why we’re now looking at a web component library built with Lit.)

We used [design tokens directly imported from Figma](/blog/DesignTokensAreFinalNow/). Any update in Figma showed up in the application right away. We also built a simple theming system. Clients could have their own themes within a controlled range. For specific customizations, we pushed for app-level overrides. That kept the library itself lean and efficient.

> “Design systems don’t fail because people ignore the rules; they fail because people lose faith that the rules will work.” ([Itai Vonshak](https://www.linkedin.com/pulse/broken-promises-design-systems-why-following-rules-wont-itai-vonshak-g2huf/))

[Itai Vonshak’s post](https://www.linkedin.com/pulse/broken-promises-design-systems-why-following-rules-wont-itai-vonshak-g2huf/) describes [teams losing trust in a design system](/blog/EmbracingTheFreedomOfCustomExperiencePipelines/) because of unworkable rules. That has not happened to us. Our process is clear and predictable. Our dedicated design system approach still works well. It avoids the problems many teams face with multiple, conflicting frameworks.

## Cleaning House and Gaining Performance

Despite our progress, parts of the old MUI and custom system still polluted our codebase. So we set up a dedicated team. It removed deprecated code, replaced legacy components and synced updates across teams. The results were immediate and clear:

- Improved performance: JavaScript bundle sizes dropped by up to 28%. Apps ran faster, and Lighthouse performance scores went up by 19 points.
- Increased clarity: With one single source of truth in Figma, everyone from designers to developers knew exactly which components to use and how.
- Enhanced client satisfaction: Stakeholders saw their branding implemented correctly, and new tenants found it easier to adopt the system.

{% image "./chart.png", "A line chart with five differently colored lines displays values between 0 and 800 over a period from mid-February to mid-March. The lines remain mostly stable with occasional downward steps.", [], "(min-width: 40em) 960px, 100vw" %}

## Built-In Accessibility and Future Proofing

The EUAA 25 regulations on accessibility are coming. Our components, for example, [inherently meet contrast standards](/blog/ContinuousExperiencePipelinesCase2/) and include proper labeling. That puts us in a good position. Accessibility is no longer an afterthought. It’s built into the foundation of our design system.

## Results on Lighthouse

Over the years, our Google Lighthouse measurements have given us useful insights beyond package sizes. The results are impressive.

### Before Core MUI was out

{% image "./before_MUI_HP.png", "Google Lighthouse report with a performance score of 72. 'Largest Contentful Paint' is 1.7s, 'Total Blocking Time' 470ms. Accessibility: 100.", [], "(min-width: 40em) 960px, 100vw" %}

### After Core MUI was out

{% image "./after_MUI_HP.png", "Google Lighthouse report with a performance score of 91. 'Largest Contentful Paint' is 1.0s, 'Total Blocking Time' 220ms. Accessibility: 100.", [], "(min-width: 40em) 960px, 100vw" %}

These results exclude third-party services like GTM, Analytics, Pendo or cookie banner providers. They are outside our direct control.

## Final Thoughts

This effort made our system easier to maintain and more useful for designers, developers and clients. We have more steps ahead. This phase shows the value of deliberate change.
