---
title: "Crafting an AI-driven culinary adventure"
description: "Explore AI Chefs at Polente, where AI meets culinary art! discover unique, AI-generated recipes and imagery, automated via github, refreshed daily with innovative tech-driven cooking inspiration"
date: 2024-01-25
tags:
  - recipes
  - blog
  - AI
  - copywriter
  - chef
---

## Behind The Scenes Of AI Chefs at Polente

Welcome to a peek behind the curtain of [AI Chefs at Polente](https://recipe.polente.de/), where the fusion of culinary arts and artificial intelligence creates a unique digital experience. As a director of experience engineering with over two decades in the field, I've always been fascinated by the potential of technology to enhance our daily lives. [AI Chefs at Polente](https://recipe.polente.de/) is a testament to this vision, combining my passion for cooking with the cutting-edge capabilities of ai.

## The Genesis Of AI Chefs at Polente

The idea for [AI Chefs at Polente](https://recipe.polente.de/) sprang from a simple yet profound realization: cooking is an art that brings people together, and technology can amplify this experience. In a world where digital interactions are increasingly commonplace, I envisioned a platform that not only shared recipes but also adapted and evolved, much like the culinary tastes and trends it catered to. But also showcasing that content creation is possible with only AI and without humans helping out.

{% image "./recipe1.png", "a screenshot of the following recipe cut to the upper part. Recipe.polente.de/recipes/vegan-linguine-with-mushrooms-and-herbs-8259/", [], "(min-width: 40em) 960px, 100vw" %}

## Marrying Technology With Taste

At its core, [AI Chefs at Polente](https://recipe.polente.de/) is powered by AI, but it's seasoned with the human touch. The journey began with identifying the right technologies that could understand and anticipate the needs and preferences of home chefs and food enthusiasts. From selecting an AI framework to designing an intuitive user interface, every step was meticulously planned and executed.

### How It Works

My setup involves a php backend, which I've chosen for its ease of automation with cronjobs on my webspace. However, for the sake of clearer understanding in this context, I've converted the examples to JavaScript.

In this setup, I utilize `gpt-3.5-turbo` to fetch data, functioning as described below.

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

The `messages` within the system are structured in a specific format, enabling the incorporation of essential system information seamlessly.

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

With this approach, I specifically request `GPT` to generate responses in `JSON` format. Initially, my plan was to have `GPT` create the entire markdown content for the [jamstack](https://jamstack.org/) blog, which is built using [11ty](https://www.11ty.dev/). However, I encountered issues with reliability and testing challenges. To address this, I shifted to using `JSON` format, which proved to be simpler to test. If there's an issue, I can easily discard the output and start again. Presently, this restart is needed in about 1 out of 10 cases. The `JSON` format is structured as follows.

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

After crafting the `JSON` structure, the next step in my process involves interacting with `GPT` once more. This time, the goal is to generate a creative prompt for an image. This prompt is designed to align perfectly with the recipe's ingredients and description. It's a fascinating blend of AI's understanding of food and its capability to visualize it.

### Creating a visual feast with DALL·E 3

Once `GPT` provides the image prompt, I then employ a method similar to the one below to request an image from DALL·E 3. This approach allows for the creation of unique, ai-generated images that visually represent the essence of each recipe. It's not just about listing ingredients and methods; it's about bringing each dish to life visually, making the cooking experience more engaging and inspiring.

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

Before finalizing the content, I perform a series of tests on both the url and the revised prompt. This step is crucial to ensure their validity. It's all about maintaining the quality and reliability of the information being processed.

#### Seamless integration and storage

Once I've confirmed that the data is accurate and usable, I proceed to save it on my webserver. This is a vital step in preserving the integrity and accessibility of the content.

#### Crafting and archiving markdown files

With all the essential data and paths in place, I then generate a markdown file. This file, bearing the same name as its corresponding image, is meticulously stored on the server. This methodical approach not only aids in organization but also ensures a smooth retrieval process for displaying the content on the website.

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

The creation and refinement of these recipes and their accompanying ai-generated imagery is just the beginning. To bring this project to life, I rely on a well-structured git repository. Each piece of content, once perfected, is committed and pushed to github. You can explore the repository at [github.com/polent/recipe](https://github.com/polent/recipe).

#### Automated deployment for continuous fresh content

The magic happens when I push these updates. Each push activates a build script through a github action, which then deploys the new content to the server. This process isn't just manual; it's augmented with automation. A cronjob is set up to trigger these updates randomly, ensuring that the blog is constantly refreshed with new recipes. At present, this means about 4-5 new culinary creations are shared each day.

### A recipe for innovation

This project is more than just a collection of recipes. It's a testament to the harmonious blend of culinary passion and technological innovation. Through this journey, I aim to not just share dishes but to inspire creativity and showcase the endless possibilities of AI in enhancing our daily experiences.

Stay tuned for more flavors, more innovation, and more culinary adventures at [AI Chefs at Polente](https://recipe.polente.de/)!

#### One Recipe In Action

{% image "./recipe2.png", "a screenshot of the following recipe. AI Chefs at Polenterecipes/vegan-linguine-with-mushrooms-and-herbs-8259/", [], "(min-width: 40em) 960px, 100vw" %}

## Crafting A User-centric Culinary Platform

Staying true to my roots in user-centric web design, the development of [recipe.polente.de](https://recipe.polente.de/) was guided by principles of accessibility and usability. The aim was to create a platform that was not only smart but also easy and enjoyable to use, regardless of one's culinary skill level.

This journey has revealed a significant shift in the landscape of creative work. With AI's growing capabilities, particularly in content creation, I've observed that certain roles traditionally essential in content generation are evolving. In the near future, some of these jobs might become less needed, as AI continues to automate and enhance creative processes. This case study of AI Chefs at Polente underscores the potential for AI to transform how we approach and manage creative tasks, pointing towards a future where technology and human creativity collaborate more closely than ever.
