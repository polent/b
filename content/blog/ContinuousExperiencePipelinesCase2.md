---
title: Case Study - B2B Electrical Distribution Company
description: Publicis Sapient enhanced a B2B Electrical Distribution Company's React-based Monorepo system using a Figma-driven design system. This improved accessibility by 20-30%, introduced a native CSS library for React, and ensured cross-platform consistency, streamlining component usage and setting new accessibility standards in e-commerce.
date: 2023-12-13
tags:
  - react
  - figma
---

## TL;DR

In a project with a B2B Electrical Distribution Company, Publicis Sapient tackled a complex, React-based Monorepo system by implementing a Figma-driven design system with design tokens and Styled Dictionary. This strategic shift improved accessibility by 20–30%, introduced a native CSS library for React, and ensured cross-platform consistency, significantly streamlining component usage. Robust support channels and an Open API for components further enhanced control. The project not only elevated the e-commerce platform’s performance and consistency but also set a new standard for accessibility, illustrating the transformative impact of a well-integrated design system in the Continuous Experience Pipeline.

### Background

This case study is about a client with a complex system, evolved over some years within a Monorepo environment, using Material UI (MUI) and internally developed design components. The existing setup led to cross-dependency issues and unnecessary complexities due to individual teams modifying components for their specific needs. So we did not had the need to be framework agnostic, and could rely on the existing technology, what was React.

### Challenges Faced

- Complex and intertwined codebase due to diverse custom modifications.
- Performance issues stemming from the practice of handling CSS via JavaScript in the React and Next.js setup.
- Accessibility concerns and inconsistent design implementation.

### Strategic Approach

Our strategy focused on introducing a Figma-driven design system, employing design tokens and Styled Dictionary, and integrating these with the Figma Token Studio plugin. This approach was aimed at revamping the core e-commerce application to enhance reliability, accessibility, performance, and maintainability.

### Benefits and results

#### Improved Accessibility

By shifting to the new design system components, which were built with accessibility in mind from the outset, we reduced accessibility bugs by 20–30%.

#### Native CSS Library

We developed a native CSS library for the React components, offering flexibility for future modifications and ensuring consistency across various platforms.

#### Cross-Platform Consistency

Utilizing Styled Dictionary, we extended design decisions to Flutter for mobile app development, ensuring a consistent omnichannel experience.

#### Streamlined Component Usage

The new system significantly reduced the need for teams to create new components, as they perfectly aligned with the client’s style guide.

#### Enhanced Control and Support

We established robust gatekeeping and support channels to manage the demand for additional functionalities. All components were designed with an Open API for easy extension.

Awareness and Future Goals: The project not only improved performance and consistency but also raised awareness about non-functional requirements like accessibility. The client is now aiming for state-of-the-art accessibility in future releases.

#### Improvements

The system is ever-evolving, and we currently plan to move away from Figma Token Studio to directly consume the newly introduced Figma variables. Also, ongoing design decisions and component improvements need to be factored in. The pipeline is never stopping, and the components need ongoing enhancements; feedback needs to be built in, therefore keeping the acceptance high.

### Conclusion

The introduction of a native CSS and React-based system, complemented by a meticulously crafted design system in Figma, profoundly transformed the client’s e-commerce platform utilizing the Continuous Experience Pipeline. This approach not only addressed specific technical challenges but also aligned perfectly with the company’s broader objectives for performance, consistency, and accessibility, paving the way for a more seamless and inclusive user experience.
