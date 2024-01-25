---
title: Crafting an AI-Driven Culinary Adventure
description: Explore Recipe.polente.de, where AI meets culinary art! Discover unique, AI-generated recipes and imagery, automated via GitHub, refreshed daily with innovative tech-driven cooking inspiration.
date: 2024-01-25
tags:
  - recipes
  - blog
  - ai
  - copywriter
---

## Behind the Scenes of Recipe.polente.de

Welcome to a peek behind the curtain of [recipe.polente.de/](https://recipe.polente.de/), where the fusion of culinary arts and artificial intelligence creates a unique digital experience. As a Director of Experience Engineering with over two decades in the field, I've always been fascinated by the potential of technology to enhance our daily lives. [recipe.polente.de/](https://recipe.polente.de/) is a testament to this vision, combining my passion for cooking with the cutting-edge capabilities of AI.

## The Genesis of Recipe.polente.de

The idea for [recipe.polente.de/](https://recipe.polente.de/) sprang from a simple yet profound realization: cooking is an art that brings people together, and technology can amplify this experience. In a world where digital interactions are increasingly commonplace, I envisioned a platform that not only shared recipes but also adapted and evolved, much like the culinary tastes and trends it catered to.

{% image "./recipe1.png", "A screenshot of the following recipe cut to the upper part. recipe.polente.de/recipes/vegan-linguine-with-mushrooms-and-herbs-8259/", [], "(min-width: 40em) 960px, 100vw" %}

## Marrying Technology with Taste

At its core, [recipe.polente.de/](https://recipe.polente.de/) is powered by AI, but it's seasoned with the human touch. The journey began with identifying the right technologies that could understand and anticipate the needs and preferences of home chefs and food enthusiasts. From selecting an AI framework to designing an intuitive user interface, every step was meticulously planned and executed.

### How it works

My setup involves a PHP backend, which I've chosen for its ease of automation with Cronjobs on my webspace. However, for the sake of clearer understanding in this context, I've converted the examples to JavaScript.

In this setup, I utilize `gpt-3.5-turbo` to fetch data, functioning as described below.

#### Fetching Recipes

```js
async function fetchOpenAIResponse(messages) {
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_OPEN_AI_KEY",
      },
      body: JSON.stringify({
        messages: messages,
        max_tokens: 500,
        model: "gpt-3.5-turbo"
        temperature: 0.7
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].text.trim();
}
```

The `messages` within the system are structured in a specific format, enabling the incorporation of essential system information seamlessly.

#### Prompting

```js
const messages = [
    [
        'role': 'system',
        'content': 'Set the stage as a Food Blogger'
    ],
    [
        'role': 'user',
        'content': 'Requesting the Recipe'
    ]
]
```

With this approach, I specifically request `GPT` to generate responses in JSON format. Initially, my plan was to have GPT create the entire Markdown content for the [JamStack](https://jamstack.org/) blog, which is built using [11ty](https://www.11ty.dev/). However, I encountered issues with reliability and testing challenges. To address this, I shifted to using JSON format, which proved to be simpler to test. If there's an issue, I can easily discard the output and start again. Presently, this restart is needed in about 1 out of 10 cases. The JSON format is structured as follows.

#### Best Format

```js
{
  "chef": "",
  "intro": "",
  "outro": "",
  "slug": "",
  "title": "",
  "ingredients": "as markdown",
  "instructions": "as markdown",
  "tags": [],
  "description": ""
}
```

After crafting the JSON structure, the next step in my process involves interacting with GPT once more. This time, the goal is to generate a creative prompt for an image. This prompt is designed to align perfectly with the recipe's ingredients and description. It's a fascinating blend of AI's understanding of food and its capability to visualize it.
Creating a Visual Feast with Dall-E

Once GPT provides the image prompt, I then employ a method similar to the one below to request an image from Dall-E. This approach allows for the creation of unique, AI-generated images that visually represent the essence of each recipe. It's not just about listing ingredients and methods; it's about bringing each dish to life visually, making the cooking experience more engaging and inspiring.

#### Fetching Images

```js
async function fetchDALLEImage(prompt) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_OPEN_AI_KEY",
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 60,
      model: "dall-e-3",
      n: 1,
      size: "1792x1024",
      quality: "standard",
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
```

Before finalizing the content, I perform a series of tests on both the URL and the revised prompt. This step is crucial to ensure their validity. It's all about maintaining the quality and reliability of the information being processed.
Seamless Integration and Storage

Once I've confirmed that the data is accurate and usable, I proceed to save it on my webserver. This is a vital step in preserving the integrity and accessibility of the content.
Crafting and Archiving Markdown Files

With all the essential data and paths in place, I then generate a Markdown file. This file, bearing the same name as its corresponding image, is meticulously stored on the server. This methodical approach not only aids in organization but also ensures a smooth retrieval process for displaying the content on the website.

#### The Markdown

```bash
---
title: ""
description: ""
tags: []
figureRecipe:
  caption: ""
  imageSrc: ""
  imageTitle: ""
  imageAlt: ""
  loading: "eager"
---

## Introduction

Intro

## Ingredients

Ingredients Markdown

## Instructions

Instructions Markdown

Outro

Name
```

### Bringing It All Together: The Final Step in the Journey

The creation and refinement of these recipes and their accompanying AI-generated imagery is just the beginning. To bring this project to life, I rely on a well-structured GIT repository. Each piece of content, once perfected, is committed and pushed to GitHub. You can explore the repository at [github.com/polent/recipe](https://github.com/polent/recipe).
Automated Deployment for Continuous Fresh Content

The magic happens when I push these updates. Each push activates a build script through a GitHub action, which then deploys the new content to the server. This process isn't just manual; it's augmented with automation. A Cronjob is set up to trigger these updates randomly, ensuring that the blog is constantly refreshed with new recipes. At present, this means about 4-5 new culinary creations are shared each day.
A Recipe for Innovation

This project is more than just a collection of recipes. It's a testament to the harmonious blend of culinary passion and technological innovation. Through this journey, I aim to not just share dishes but to inspire creativity and showcase the endless possibilities of AI in enhancing our daily experiences.

Stay tuned for more flavors, more innovation, and more culinary adventures at [recipe.polente.de/](https://recipe.polente.de/)!

#### One recipe in Action

{% image "./recipe2.png", "A screenshot of the following recipe. recipe.polente.de/recipes/vegan-linguine-with-mushrooms-and-herbs-8259/", [], "(min-width: 40em) 960px, 100vw" %}

## Crafting a User-Centric Culinary Platform

Staying true to my roots in user-centric web design, the development of [recipe.polente.de/](https://recipe.polente.de/) was guided by principles of accessibility and usability. The aim was to create a platform that was not only smart but also easy and enjoyable to use, regardless of one's culinary skill level.
