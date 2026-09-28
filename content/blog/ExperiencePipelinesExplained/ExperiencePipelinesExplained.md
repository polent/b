---
title: "Optimizing Your Design System Manager (DSM) Experience: Practical Tools and Strategies"
description: "Practical tools for a design system manager: Figma as source of truth, tokens with Style Dictionary, web components, Storybook and feedback loops."
date: 2024-04-19
tags:
  - Design System
  - Design Tokens
  - Figma
  - Web Components
  - Experience Pipeline
---

{% image "./pipe.png", "Teams working together in an office environment", [], "(min-width: 40em) 960px, 100vw" %}

## Mastering Your DSM Experience Pipeline

A robust Design System Manager (DSM) makes your design process simpler. It helps teams work together and keeps your products consistent. This post covers tools and strategies to improve your DSM experience. It also covers the aspects people often overlook.

### Selecting the Right Tools

#### The Central Role of Figma

Figma is a central part of our DSM strategy. It is flexible and has a broad feature set.

- **Personas and UX Design**: We use Figma to maintain our personas and user experience designs. It keeps user profiles updated and accessible to all team members.
- **Token Management**: Figma helps us create and manage design tokens. [With Style Dictionary](/blog/DesignTokensAreFinalNow/), originally built at Amazon, these tokens turn into reusable code across platforms. This keeps one style across your digital presence.

```plaintext
Design Tokens Example in Figma:
- `--color-background: #ffffff;`
- `--font-base: 'Roboto', sans-serif;`
```

#### Extending Figma with Style Dictionary

- **Token Extraction**: Export the tokens from Figma as JSON first, for example with Tokens Studio or the Figma Variables API. Style Dictionary then generates styling for multiple platforms. This setup supports CSS, SCSS, Dart for Flutter and even React’s styled components.

```bash
# Example command to convert tokens to CSS
style-dictionary build --platform css
```

### Design Practices and Philosophy

#### Simplicity in Design Tokens

- **Avoid Overengineering**: Keep your design tokens simple. We avoid component-specific tokens. We use general ones like alignments or margins and focus on core design elements.

#### Accessibility and Reusability

- **Start with Accessibility**: Build accessibility in from the design stage. Use [annotations in Figma](/blog/FigmaDevModeFigJam/) to guide developers.
- **Think Ahead**: Plan how you will use these tokens. Keep a versioned repository of your design tokens, for example in Git. This keeps them easy to access and maintain.

### Integration Across Platforms

#### Utilizing Web Standards

- **Web Components**: For example, we [used Stencil to create Web Components](/blog/ContinuousExperiencePipelinesCase1/) that work with multiple frameworks. This gives flexibility and reduces dependency on any single technology.

```javascript
// Example of a simple web component
customElements.define(
  "my-component",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<p>Hello World!</p>`;
    }
  }
);
```

#### Documentation and Continuous Feedback

- **Unified Documentation**: [Tools like Storybook](/blog/MCPServerInDesignSystemWorkflows/) are a big help for documenting UI components. They help check that components meet quality standards.
- **Engage and Iterate**: Keep open channels for team feedback. Hold regular sessions to discuss improvements. This helps you refine your DSM and fix issues early.

#### Strategic Thinking

- **Feedback Utilization**: Listen to your users, internal and external. But choose carefully which feedback to implement. This keeps your design system simple and reusable.
- **Vision for Your DSM**: Always have a clear vision and mission statement for your DSM. It should match your company’s identity and goals. New team members then understand the purpose of your design system faster. Existing members stay aligned and motivated.

### Conclusion

These practices and tools make your DSM more robust, flexible and cohesive. A successful design system needs more than tools. It needs a culture of continuous improvement and collaboration.
