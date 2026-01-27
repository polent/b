---
title: Case Study - Enhancing Digital Solutions for a Leading Logistics and Transportation Provider
description: Publicis Sapient tackled a major logistics project by integrating Web Components with Stencil and Figma. This strategy streamlined development, unified the codebase, and enhanced design consistency across platforms, significantly boosting efficiency and maintenance in a complex, multi-technology landscape.
date: 2023-12-13
tags:
  - web components
  - stencil
  - Figma
---

## TL;DR

In a project for a major logistics and transportation provider, Publicis Sapient overcame complex, multi-framework challenges by adopting Web Components with Stencil and transitioning to Figma. This approach streamlined the development process through the Continuous Experience Pipeline, enabling a unified codebase, efficient design processes, and consistent application across various platforms. The integration of Stencil and Figma led to significant improvements in efficiency, design consistency, and overall maintenance of digital solutions in a complex, multi-technology environment.

### Project Overview

At Publicis Sapient, we embarked on a project for a major logistics and transportation provider, characterized by a diverse ecosystem and a reliance on various technical solutions. Initially tailored for internal React needs, the project quickly expanded to accommodate other teams using Angular, prompting a shift to a multi-framework setup.

### Challenge

The client’s environment was complex, with many service providers using different technical solutions. Maintaining multiple frameworks was impractical, leading us to seek a more unified approach.

### Solution

We chose to employ Web Components provided by Stencil, which allowed for wrapping components for different frameworks. This shift enabled us to maintain a single source and library for multiple uses and applications. Additionally, we transitioned from Sketch and InVision to [Figma](https://www.figma.com/). This move proved beneficial, as Figma’s developer mode and [design tokens](https://www.w3.org/community/design-tokens/) in variables greatly facilitated maintaining a Continuous Experience Pipeline.

The transition from traditional frameworks to [Web Components](https://www.webcomponents.org/introduction) marks a significant shift in web development practices. Traditionally, developers have relied on popular frameworks like React, Angular, or Vue.js to build web applications. These frameworks provide a structured way of developing applications, offering robust features, community support, and standardized practices. However, they often lead to dependency on specific ecosystem tools and can result in heavier, more complex codebases.

Web Components, on the other hand, represent a move towards a more modular and standardized approach in web development. They are a set of technologies that allow developers to create reusable custom elements with encapsulated functionality, which can be used across different web applications regardless of the underlying technology stack. This means developers can build a component once and use it anywhere, without worrying about compatibility issues.

Some years back I already asked [Sould I use Web Components?](https://medium.com/engineered-publicis-sapient/should-i-use-a-framework-or-library-ea9fa7ff6d5b)

#### How does a Webcomponent looks like?

```html
<!-- Define the Web Component -->
<script>
  class CustomHeadline extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      });
    }
    connectedCallback() {
      const headlineText = this.getAttribute("text") || "Default Headline";
      this.shadowRoot.innerHTML = `
<style>
h1 {
font-family: Arial, sans-serif;
color: #333;
}
</style>
<h1>${headlineText}</h1>
`;
    }
  }
  window.customElements.define("custom-headline", CustomHeadline);
</script>
<!-- Usage of the Web Component in HTML -->
<custom-headline text="My Custom Headline"></custom-headline>
```

#### This is significant for several reasons

The move towards Web Components is driven by a desire for more standardized, efficient, and interoperable web development practices, allowing for greater flexibility and future-proofing in building web applications.

Web development practices focusing on standardization and interoperability ensure compatibility across modern browsers, alleviating cross-browser issues. This approach promotes the creation of reusable components, which enhances maintainability and minimizes code duplication. By leveraging native browser capabilities, it leads to lighter and more efficient applications, reducing dependency on external libraries. Moreover, this framework-agnostic methodology allows for flexibility across various project needs and offers protection against the shifting trends in JavaScript frameworks.

#### No Framework but Stencil?

[Stencil](https://stenciljs.com/), as a Web Components compiler, can play a pivotal role in the modern web development landscape, particularly in its ability to act as a wrapper for Web Components. Its primary function is to generate standard Web Components from a set of high-level, easy-to-write templates and scripts. Here are some key benefits of using Stencil in delivering solutions for multiple frameworks while remaining framework-agnostic.

#### How does a Stencil Web Component look like?

```html
<!-- Define the Stencil Component -->
<script>
  import { Component, Prop, h } from "@stencil/core";
  @Component({
    tag: "my-headline",
    shadow: true,
  })
  export class MyHeadline {
    // Define a property to hold the headline text
    @Prop() text: string;
    render() {
      return <h1> {this.text} </h1>;
    }
  }
</script>
<!-- Usage of the Stencil Component in HTML -->
<my-headline text="My Custom Headline"></my-headline>
```

Stencil’s creation of standard Web Components offers broad framework compatibility with platforms like React, Angular, and Vue, enabling seamless integration into various projects regardless of the underlying framework. It optimizes performance through features like lazy loading and efficient rendering, resulting in lightweight, speedy components essential for high-performance web applications. Stencil enhances developer productivity with a simplified approach to component creation, allowing for reuse across multiple projects and reducing development time.

Equipped with tools like TypeScript support and JSX templating, it streamlines the development experience. By generating standard Web Components, Stencil future-proofs projects against the fluctuations of the JavaScript framework ecosystem, ensuring long-term relevance and usability. Additionally, it guarantees cross-platform consistency in component behavior and appearance, crucial for a uniform user experience across diverse digital environments.

### How is the Continuous Experience Pipeline used?

In our context, a Continuous Experience Pipeline means that any design change in a component or token is directly updated in the codebase. This setup simplifies theming, as the tokens are utilized as specified, streamlining the process. The single packages for multiple frameworks are build and deployed into NPM Packages and can be utilized directly.

### Benefits and results

#### Unified Codebase

Issues are now adjusted in a single codebase, simplifying support and ensuring consistency across client-facing design and web applications.

#### One Support Channel

This approach offers a singular support channel for all frameworks, enhancing efficiency.

#### Consistent Application and Design

As vendors start using the component library, the client’s web applications become more consistent and integrated.

#### Documentation and Maintenance made easy

We use Docusaurus and NPM for documentation and version maintenance, which our client and their IT vendors find valuable. Internal teams now support our efforts, and we’ve introduced gatekeepers to ensure changes don’t disrupt the teams using the system.

#### Efficient Design Process

Design efforts, in some cases, have been halved, as there’s no longer a need to ‘reinvent the wheel’.

#### Tech Implementation and Ramp-up

While there was a learning curve for external teams unfamiliar with the libraries, the project setup provided foundational guidelines (like styles, fonts, reset options) that made project kickoffs up to 30% quicker.

#### Overall Impact

Digital solutions using the Continuous Experience Pipeline are now faster to set up, adhere to better design principles, and are easier to maintain.

### Conclusion

Stencil’s capabilities in creating standard Web Components greatly benefit our Continuous Experience Pipeline, offering framework compatibility, performance optimization, and enhanced productivity. Its tools and features ensure streamlined development and cross-platform consistency, aligning perfectly with our pipeline’s objectives for efficient, sustainable web solutions.

The above highlights how Stencil’s framework-agnostic approach and the shift to Figma have significantly streamlined digital solutions, leading to improved efficiency and consistency in the client’s diverse technical environment utilizing the Continuous Experience Pipeline.
