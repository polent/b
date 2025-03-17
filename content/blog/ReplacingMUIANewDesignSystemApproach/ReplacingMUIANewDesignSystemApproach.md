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

We transitioned from MUI and our old in-house design system due to performance issues, component duplication, and complex theming. We developed a React-based component library, integrating design tokens directly from Figma for real-time updates. This led to a 28% reduction in JavaScript bundle sizes, improved application performance, and more than 19 point enhanced Lighthouse scores. Centralizing our design process in Figma established a single source of truth, ensuring consistency across teams. With upcoming EUAA 25 accessibility regulations, our proactive approach positions us ahead of the curve by embedding accessibility into our design system's foundation.  

## Streamlining Performance and Consistency

This blog post is about how we transitioned away from MUI and our old in-house design system. Over time, MUI no longer met our needs, and the earlier attempt at a custom design system faced issues. We struggled with component ownership, multiple entries for similar components, and a lack of integration between design tools and the final application. As a result, we ended up with a framework design system and another custom system that neither teams nor designers wanted to use.

Due to performance degradation, component duplication, and complex theming with MUI, we decided to develop our own dedicated design system. ​ 

We then began working on a fresh, more effective approach. After considering different options, we decided to build a React-based component library. This choice aligned with our main consumer’s infrastructure. From the start, we focused on making the library easier to manage and more compatible with our design tools. (In an upcoming post, I’ll dive into why we’re now exploring a web component library built with Lit.) 

We used design tokens directly imported from Figma. Any updates in Figma were reflected immediately in the application. We also implemented a simple theming system that allowed clients to have their own themes within a controlled range. For specific customizations, we encouraged app-level overrides to keep the library itself lean and efficient. 

> “Design systems don’t fail because people ignore the rules; they fail because people lose faith that the rules will work.” – [Itai Vonshak](https://www.linkedin.com/pulse/broken-promises-design-systems-why-following-rules-wont-itai-vonshak-g2huf/)

The issues described in Itai Vonshak’s post, such as teams losing trust in a design system due to unworkable rules, have not arisen in our case, thanks to the clarity and predictability built into our process. Our dedicated design system approach continues to work well, avoiding the challenges many teams face when navigating multiple, conflicting frameworks.

## Cleaning House and Gaining Performance

Despite our progress, parts of the old MUI and custom system still polluted our codebase. So, we formed a dedicated team to remove deprecated code, replace legacy components, and sync updates across teams. The results were immediate and clear:

- Improved performance: By reducing JavaScript bundle sizes by up to 28%, apps ran faster and Lighthouse scores improved for performance with over 19 points.
- Increased clarity: With one single source of truth in Figma, everyone, from designers to developers, knew exactly which components to use and how.
- Enhanced client satisfaction: Stakeholders saw their branding implemented correctly, and new tenants found it easier to adopt the system.

{% image "./chart.png", "A line chart with five differently colored lines displays values between 0 and 800 over a period from mid-February to mid-March. The lines remain mostly stable with occasional downward steps.", [], "(min-width: 40em) 960px, 100vw" %}

## Built-In Accessibility and Future Proofing

With the upcoming EUAA 25 regulations on accessibility, having components that for example inherently meet contrast standards and include proper labeling will put us ahead of the curve. Accessibility is no longer an afterthought; it’s built into the foundation of our design system.

## Results on Lighthouse

Over the years, our Google Lighthouse measurements have provided valuable insights beyond just package sizes, and the results have been truly impressive.

### Before Core MUI was out

{% image "./before_MUI_HP.png", "Google Lighthouse report with a performance score of 72. 'Largest Contentful Paint' is 1.7s, 'Total Blocking Time' 470ms. Accessibility: 100.", [], "(min-width: 40em) 960px, 100vw" %}

### After Core MUI was out

{% image "./after_MUI_HP.png", "Google Lighthouse report with a performance score of 91. 'Largest Contentful Paint' is 1.0s, 'Total Blocking Time' 220ms. Accessibility: 100.", [], "(min-width: 40em) 960px, 100vw" %}

Needless to say, these results exclude third-party services like GTM, Analytics, Pendo, or cookie banner providers, as they are beyond our direct control.

## Final Thoughts

This effort has made our system easier to maintain and more useful for designers, developers, and clients. While we have more steps ahead, this phase of the journey highlights the value of thoughtful, deliberate change. If you have questions or want to learn more, please reach out.
