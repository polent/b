---
title: "Optimizing Your Design System Manager (DSM) Experience: Practical Tools and Strategies"
description: Discover essential tools and strategies to enhance your Design System Manager (DSM) experience. Learn how to use Figma, Style Dictionary, and other resources effectively to maintain consistency, improve collaboration, and streamline your design process. This guide covers everything from managing design tokens to integrating web components, providing you with actionable tips to optimize your DSM workflow.
date: 2024-04-19
tags:
  - dsm experience
  - Design System Manager manager
  - figma
  - web components
  - Design Tokens
---

{% image "./pipe.png", "Teams working together in an Office envirnment", [], "(min-width: 40em) 960px, 100vw" %}

## Mastering Your DSM Experience Pipeline

Implementing a robust Design System Manager (DSM) can streamline your design process, enhance collaboration, and ensure consistency across your products. Here we dive deep into various tools and strategies that can optimize your DSM experience, while not forgetting the often overlooked aspects.

### Selecting the Right Tools

#### The Central Role of Figma

Figma is not just another tool; it is a pivotal part of our DSM strategy due to its flexibility and comprehensive features.

- **Personas and UX Design**: We utilize Figma to maintain our personas and user experience designs. It helps keep user profiles updated and accessible to all team members.
- **Token Management**: Figma aids in creating and managing design tokens. With Style Dictionary by Amazon, these tokens can be transformed into reusable code across platforms, ensuring a uniform style throughout your digital presence.

```plaintext
Design Tokens Example in Figma:
- `--color-background: #ffffff;`
- `--font-base: 'Roboto', sans-serif;`
```

#### Extending Figma with Style Dictionary

- **Token Extraction**: Use Style Dictionary to extract tokens from Figma and generate styling for multiple platforms. This setup supports CSS, SCSS, Dart for Flutter, and even React’s styled components.

```bash
# Example command to convert tokens to CSS
style-dictionary build --platform web/css
```

### Design Practices and Philosophy

#### Simplicity in Design Tokens

- **Avoid Overengineering**: Keep your design tokens simple. We avoid component-specific tokens and use more ones like alignments or margins, focusing on core design elements.

#### Accessibility and Reusability

- **Start with Accessibility**: Incorporate accessibility features right from the design stage by using annotations in Figma to guide developers.
- **Think Ahead**: Plan how you will use these tokens. By keeping a versioned repository of your design tokens (using Git, for instance), you can ensure that they are easily accessible and maintainable.

### Integration Across Platforms

#### Utilizing Web Standards

- **Web Components**: We for example used Stencil to create Web Components that are compatible with multiple frameworks. This approach provides flexibility and reduces dependency on any single technology.

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

- **Unified Documentation**: Tools like Storybook are invaluable for documenting UI components and ensuring that they meet quality standards.
- **Engage and Iterate**: Maintain open channels for team feedback and hold regular sessions to discuss improvements. This helps in refining your DSM and addressing any issues proactively.

#### Strategic Thinking

- **Feedback Utilization**: Listen to your users—both internal and external—but choose carefully which feedback to implement. This selective approach helps maintain simplicity and reusability in your design system.
- **Vision for Your DSM**: Always have a clear vision and mission statement for your DSM that aligns with your company’s identity and goals. This not only makes it easier for new team members to understand the purpose of your design system but also keeps existing members aligned and motivated.

### Conclusion

By embracing these practices and tools, you can create a more robust, flexible, and cohesive DSM. Remember, a successful design system is about more than just tools; it’s about creating a culture of continuous improvement and collaboration.
