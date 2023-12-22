---
title: Should I use Web components?
description: As a Director at Publicis Sapient, I see a trend towards frameworks like React, yet Web Components are often overlooked. They offer a standard, future-proof alternative, reducing reliance on potentially outdated frameworks, and are ideal for various web projects, from static content to complex e-commerce.
canonical: https://polente.de/2019/11/27/should-i-use-a-framework-or-library/
date: 2019-11-27
tags:
  - web components
  - performance
  - stencil
---

At my current employer we do all kind of Web Applications. We call it Experience Technology. These customer user experiences have different needs. Sometimes we do static content deliverables like temporary marketing campaign pages, or knowledge bases that never get touched again. More often we do enterprise shopping experiences, catalogue maintenance, and other e-commerce platforms.

Asking someone of my team how to build their next customer user experience I get named: [React](https://reactjs.org/), [VUE](https://vuejs.org/), [Svelte](https://svelte.dev/) or at last, [Angular](https://angular.io/). Normally no one tells me yet: Let’s do it native, let’s use Web Components.

## Do I know why?

### Maybe

Why the frameworks are so common and preferred is having some reasons:

- They offer a community
- Searching for an issue or supporting library for sure returns an - Stackoverflow entry or an NPM library
- There is great support by someone that has „already done this“
- For Business: It is good to have something to sell that everyone knows

### A quick poll

Doing a quick poll with our experience technologists hardens the opinion.

{% image "./image.png", "Showing React 58%, Angular 3%, VUE 15%, Native Web Components 7%. Other 13%", [], "(min-width: 40em) 960px, 100vw" %}

Showing React 58%, Angular 3%, VUE 15%, Native Web Components 7%. Other 13%

### Observing the obvious

Using frameworks and libraries for everything, causes problems that could be prevented. [Average weight of a page is increasing](https://royal.pingdom.com/webpages-are-getting-larger-every-year-and-heres-why-it-matters/). [Complexity of generated code](https://uglyduck.ca/html-like-1999/) too. Views of common frameworks and libraries are often ridiculous complicated and deep nested and adding libraries and grid systems is done with a click. Importing without seeing the direct deeper effect. On top of that, Designers create [complex animations and placeholders](https://conversionxl.com/blog/why-simple-websites-are-scientifically-better/) and forget that we still have low-end devices to support and not an ideal-world fast internet. Accessibility and search, like find-ability is getting worse. When useless containers are nested and [semantics are getting lost](https://leanweb.dev/ebook/intro/).

On top of all, GDPR compliance is bad to achieve as of often third parties are used in a way that makes it hard to know where your customers details are getting shared.

This directly leads me to the this ask: Do we at all need to use a framework or library? Can’t we use Web components?

Webcomponents.org tells a clear use case, but why does still no one considers it first place to use it as base in their projects?

> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML. Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behaviour. <cite>- [Webcomponents.org](https://www.webcomponents.org/)</cite>

Would there be any advantage when using them instead of a framework? Long-term for sure. Imagine a situation where Facebook stops support for React, or Google for Angular. Sooner or later libraries might get outdated. The community for sure support it for some years, but it can stop. There is no guarantee that it works long. There are also new Libraries popping out every day.

As we started writing decoupled user experiences, using micro-services and micro-frontends, we forgot to enable us to create long lasting frontend code, that is maintainable. Instead of using native functionalities, write proper markup and getting accessible and search engine friendly.

We now create a dependency to a framework that is maybe out-dating soon. Any reason to do so?

### Not really!

Frameworks and libraries should help us organizing and writing our code and deliverables, but not overtaking our thinking and tooling. It is not reasonable that we deliver whole applications to clients browsers, when the contents never or only every view months change. We should instead build more meaningful smaller applications. We even need to render server side, using JavaScript.

## A quick excursion on what Web Components are

Using Web components would allow us to get back to standards, using browser supported simple tooling.

So why should you consider Web components as complement for frameworks and libraries?

- They are already a standard!
- They work cross browser (Can I use it?)
- They are simple and stand-alone
- They are already used
- They are future proof!

## The details

Web components are the wrapper name for a set of techniques that create browser rendered interfaces. They are created through custom elements, shadow DOM, HTML templates and HTML modules. The latter is yet not widely adopted by browsers.
Custom Element

Setup a JavaScript file that contains the code for your custom element.

```js
class MyCustomElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Some Text</p>`;
  }
}
window.customElements.define("my-custom-element", MyCustomElement);
```

You need a DOM node that can initialise it.

```html
<my-custom-element></my-custom-element>
```

### Shadow DOM

With your custom element you can add coloured text in the context of other text paragraphs. You can capsule your styles that only belonging to the needed node.

```html
const shadowRoot = document.getElementById('fetched').attachShadow({ mode:
'open' }); shadowRoot.innerHTML = `<style>
  p {
    border: 1px solid red;
    padding: 5px;
  }
</style>

<p id="paragraph">Paragraph using <slot></slot></p>
`;
```

Create some HTML to connect your code with it.

```html
<span id="fetched">Slot</span>

<p id="paragraph">Normal Text</p>
```

Shadow DOM like shown below will be generated.

```html
<body>
  <span id="fetched">
    <#shadow-root>
      <style>
      p {
        border: 1px solid red;
        padding: 5px;
      }
      </style>
      <p id="paragraph">Paragraph using Slot</p>
    </#shadow-root>
  </span>
  <p id="paragraph">Normal Text</p>
</body>
```

### Use HTML Templates

Stay DRY. Use HTML templates. Look at the the above example. If you want to render more paragraphs, you can repeat your `<p>` or just use a `<template>`. It is obvious what is wet and what is dry.

You can use them together with custom elements and shadow root, or alone.

```html
<template id="template">
  <p></p>
</template>
<section id="paragraphs"></section>
```

How to render a HTML template.

```js
const paragraphs = document.getElementById("template");
const text = [{ node: "Text 1" }, { node: "Text 2" }, { node: "Text 3" }];
text.forEach((text) => {
  const domNode = document.importNode(paragraphs.content, true);
  domNode.querySelector("p").innerHTML = text.node;
  document.getElementById("paragraphs").appendChild(domNode);
});
```

### Did I missed HTML Modules?

Nope. But [they are currently considered](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/HTMLModules/explainer.md). So let’s see.

### What else to consider

Take also into account that all is maintained in a component library. Handled in a DSM provided by [InVision](https://www.invisionapp.com/design-system-manager), [Figma](https://www.figma.com/), or Design Kits like [Sketch](https://www.sketch.com/). We need to ensure to reuse our code and Styles. [Design Tokens](https://css-tricks.com/what-are-design-tokens/) help here. Amazon has [Style Dictionary](https://amzn.github.io/style-dictionary/), but there are others. And ideally, have a direct connect to your repository. (More would be subject of a full own post)

### But my client has IE11 as standard browser!

**Ask them why! Seriously!**

_Update when took over to this blog. At the time I wrote this in 2019 it was not sure that IE will ever die._
If they still insist, and maybe even have a dated soon to be replaced Edge: there are [Polyfills available](https://github.com/webcomponents/webcomponentsjs), they render the components as HTML for you.

## Any other input?

More and more Frameworks and libraries arise that help generating your applications with Web components. They offer build in test ability, design libraries, pattern libraries and more. There are well established ones like [Polymer](https://www.polymer-project.org/), [LIT](https://lit.dev/) or [Stencil](https://stenciljs.com/). You can find more on the [web component page list](https://www.webcomponents.org/libraries). So if you do not want to do it manually. Use provided tools.

## What to do

There is no golden hammer that makes all your problems a nail. But you should consider re-usability, need of the current implementation, and how long it will exists. Then it can help you making a decision.

Static rendering for interims campaign pages, knowledge bases, and so on can improve SEO, size, and customer experience. Full blown SPA with a checkout or profile management, and a healthy mixture for catalogue can do their part on this.

But the base of all should be a Web component. **Just do it**.

## Resources mentioned and used

- [https://royal.pingdom.com/](https://royal.pingdom.com/)webpages-are-getting-larger-every-year-and-heres-why-it-matters/
- [https://www.sitepoint.com/average-page-weight-increased-another-16-2015/](https://www.sitepoint.com/average-page-weight-increased-another-16-2015/)
- [https://conversionxl.com/blog/why-simple-websites-are-scientifically-better/](https://conversionxl.com/blog/why-simple-websites-are-scientifically-better/)
- [https://leanweb.dev/ebook/intro/](ttps://leanweb.dev/ebook/intro/)
- [https://uglyduck.ca/html-like-1999/](https://uglyduck.ca/html-like-1999/)
- [https://twitter.com/intenttoship/status/1085742504958279682](https://twitter.com/intenttoship/status/1085742504958279682)
- [https://github.com/webcomponents/webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)
- [https://spectrum.chat/figma/general/invision-dsm-vs-sketch-library-vs-figma-team-library~0955f124-4be4-44d1-9113-89b11df7a327](https://spectrum.chat/figma/general/invision-dsm-vs-sketch-library-vs-figma-team-library~0955f124-4be4-44d1-9113-89b11df7a327)
- [https://designcode.io/design-system-in-figma](https://designcode.io/design-system-in-figma)
- [https://www.figma.com/](https://www.figma.com/)
- [https://amzn.github.io/style-dictionary/](https://amzn.github.io/style-dictionary/)
- [https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/HTMLModules/explainer.md](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/HTMLModules/explainer.md)
- [https://www.webcomponents.org/libraries](https://www.webcomponents.org/libraries)
- [https://reactjs.org/docs/web-components.html](https://reactjs.org/docs/web-components.html)

## Fun fact

Yes, you can also make Web components complicated.
