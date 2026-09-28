---
title: "Crafting an AI-Driven Culinary Adventure"
description: "How AI Chefs at Polente creates recipes and images with GPT and DALL·E, builds them with 11ty and publishes new ones every day via GitHub Actions."
date: 2024-01-25
tags:
  - AI
  - Automation
  - 11ty
  - Recipes
---

## Behind The Scenes Of AI Chefs at Polente

This is a look behind the scenes of [AI Chefs at Polente](https://recipe.polente.de/). The site brings cooking and artificial intelligence together. I am a director of experience engineering with almost three decades in the field. I've always been fascinated by how technology can improve our daily lives. [AI Chefs at Polente](https://recipe.polente.de/) builds on this idea. It combines my passion for cooking with the current capabilities of AI.

## The Genesis Of AI Chefs at Polente

The idea for [AI Chefs at Polente](https://recipe.polente.de/) came from a simple idea: cooking is an art that brings people together, and technology can make this experience bigger. Digital interactions are more and more common. So I wanted a platform that not only shares recipes but also adapts and evolves, like the tastes and trends it serves. I also wanted to show that content creation is possible with AI only, without humans writing the content.

{% image "./recipe1.png", "a screenshot of the following recipe cut to the upper part. Recipe.polente.de/recipes/vegan-linguine-with-mushrooms-and-herbs-8259/", [], "(min-width: 40em) 960px, 100vw" %}

## Marrying Technology With Taste

At its core, [AI Chefs at Polente](https://recipe.polente.de/) is powered by AI. The human touch is in how it is built. The work began with finding the right technologies. They had to understand and anticipate the needs and preferences of home chefs and food enthusiasts. Every step was planned and executed with care, from selecting an AI framework to designing an intuitive user interface.

### How It Works

My setup uses a PHP backend. I chose it because it is easy to automate with cronjobs on my webspace. To make things easier to follow, I've converted the examples here to JavaScript.

In this setup, I use `gpt-3.5-turbo` to fetch data. It works as described below.

#### Fetching Recipes

```js
Async function fetchopenairesponse(messages) {
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "post",
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer your_open_ai_key",
      },
      body: JSON.stringify({
        messages: messages,
        max_tokens: 500,
        model: "gpt-3.5-turbo"
        temperature: 0.7
      }),
    }
  );

  const data = await JSON.parse(response);

  if (data.error) {
    throw new Error(`http error! status: ${data.message}`);
  }

  return data.choices[0].message.content;
}
```

The `messages` follow a specific format. This lets me pass in the essential system information.

#### Prompting

```js
Const messages = [
    [
        'role': 'system',
        'content': 'set the stage as a food blogger'
    ],
    [
        'role': 'user',
        'content': 'requesting the recipe'
    ]
]
```

With this approach, I ask `GPT` to answer in `JSON` format. My first plan was to have `GPT` create the entire markdown content for the [jamstack](https://jamstack.org/) blog, [which is built using](/blog/StaticSiteGenerationWorksEnterpriseToo/) [11ty](https://www.11ty.dev/). But I ran into problems with reliability and testing. So I switched to `JSON`, which is simpler to test. If there's an issue, I discard the output and start again. At the moment, this restart is needed in about 1 out of 10 cases. The `JSON` format looks like this.

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

Once the `JSON` is ready, I call `GPT` once more. This time it generates a creative prompt for an image. The prompt matches the recipe's ingredients and description. It combines AI's understanding of food with its ability to visualize it.

### Creating a visual feast with DALL·E 3

Once `GPT` provides the image prompt, I use a method like the one below to request an image from DALL·E 3. This creates unique, [AI-generated images](/blog/AIGeneratedImages/) that show the essence of each recipe. It's not only about listing ingredients and methods. It's about bringing each dish to life visually. That makes cooking more engaging and inspiring.

#### Fetching Images

```js
Async function fetchdalleimage(prompt) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "post",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer your_open_ai_key",
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

  const data = await JSON.parse(response);

  if (data.error) {
    throw new Error(`http error! status: ${data.message}`);
  }

  return data.data[0];
}
```

Before I finalize the content, I run a series of tests on the URL and the revised prompt. This step makes sure both are valid. It keeps the processed information reliable and of good quality.

#### Integration and storage

Once I've confirmed that the data is accurate and usable, I save it on my webserver. This keeps the content intact and accessible.

#### Crafting and archiving markdown files

With all the essential data and paths in place, I generate a markdown file. It has the same name as its image and is stored on the server. This keeps things organized. It also makes it easy to retrieve the content for display on the website.

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

Ingredients markdown

## Instructions

Instructions markdown

Outro

Name
```

### Bringing It All Together

#### The Final Step In The Journey

Creating and refining the recipes and their AI-generated images is just the beginning. To bring this project to life, I use a well-structured git repository. Each piece of content, once final, is committed and pushed to GitHub. You can explore the repository at [github.com/polent/recipe](https://github.com/polent/recipe).

#### Automated deployment for continuous fresh content

Each push starts a build script through a GitHub Action. The action deploys the new content to the server. Not every push is manual. A cronjob triggers these updates at random times, so the blog keeps getting new recipes. At present, this means about 4 to 5 new recipes are shared each day.

### A recipe for innovation

This project is more than a collection of recipes. It brings together my passion for cooking and for technology. With it, I want to share dishes, inspire creativity and show how AI can improve our daily experiences.

New recipes keep coming at [AI Chefs at Polente](https://recipe.polente.de/).

#### One Recipe In Action

{% image "./recipe2.png", "a screenshot of the following recipe. Recipe.polente.de/recipes/vegan-linguine-with-mushrooms-and-herbs-8259/", [], "(min-width: 40em) 960px, 100vw" %}

## Crafting A User-centric Culinary Platform

I stay true to my roots in user-centric web design. So the development of [recipe.polente.de](https://recipe.polente.de/) followed principles of accessibility and usability. The aim was a platform that is smart, but also easy and enjoyable to use, whatever your cooking skill level.

This project showed me a big shift in creative work. AI keeps getting better, especially at content creation. I've seen that some roles that were essential for content creation are changing. In the near future, some of these jobs might be less needed, as AI keeps automating and improving creative processes. This case study of AI Chefs at Polente shows that AI can change how we approach and manage creative tasks. It points to a future where technology and human creativity work together more closely than ever.
