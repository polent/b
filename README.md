# b.polente.de

The source of [b.polente.de](https://b.polente.de/) — "Cases by Holger Hellinger", a blog
built with the [Eleventy](https://www.11ty.dev/) site generator
(currently [v3](https://www.11ty.dev/blog/eleventy-v3/)).

Originally derived from [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog),
but it has grown its own image pipeline, tag handling, search, and diagram rendering.

## Requirements

- Node.js 22 or newer (see [.nvmrc](.nvmrc) — `nvm use` picks it up)
- Chromium for Playwright, used to render Mermaid diagrams at build time:
  `npx playwright install --with-deps chromium`

## Getting Started

```
git clone https://github.com/polent/b.git
cd b
npm install
```

`npm install` runs `patch-package` afterwards, which applies
[patches/](patches/) to `markdown-it-mermaid-server`.

Run a local development server on <http://localhost:8080/>:

```
npm start
```

Build the production site into `_site/` (clean, Eleventy build, then the
[Pagefind](https://pagefind.app/) search index):

```
npm run build
```

Building with plain `npx @11ty/eleventy` works, but skips the Pagefind step, so
[/search/](content/search.njk) will not find anything.

Other scripts:

| Script | What it does |
| --- | --- |
| `npm run clean` | Remove `_site/` |
| `npm run debug` | Build with `DEBUG=Eleventy*` |
| `npm run debugstart` | Dev server with `DEBUG=Eleventy*` |
| `npm run benchmark` | Build with Eleventy's benchmark output |
| `npm run build-ghpages` | Build with a `/eleventy-base-blog/` path prefix |

## Layout of the repository

| Path | Contents |
| --- | --- |
| [content/](content/) | Eleventy input directory — pages, `blog/`, feeds, sitemap |
| [_includes/](_includes/) | Nunjucks layouts and partials |
| [_data/metadata.js](_data/metadata.js) | Site title, URL, description, author |
| [public/](public/) | Copied to the site root as-is (CSS, favicons, `robots.txt`) |
| [eleventy.config.js](eleventy.config.js) | Plugins, filters, collections, Markdown setup |
| [eleventy.config.images.js](eleventy.config.images.js) | The `{% image %}` shortcode |
| [eleventy.config.drafts.js](eleventy.config.drafts.js) | Draft handling |
| `_site/` | Build output (git-ignored) |

## Writing a post

Each post is its own folder under [content/blog/](content/blog/), holding the
Markdown file plus the images it uses, so the `{% image %}` shortcode can
reference them relatively:

```
content/blog/MyNewPost/
  MyNewPost.md
  screenshot.png
```

Front matter needs `title`, `description`, `date`, and `tags`;
[content/blog/blog.11tydata.js](content/blog/blog.11tydata.js) supplies the
layout and the `posts` tag.

```
---
title: My New Post
description: One sentence for listings, the feed, and search results.
date: 2026-01-31
tags:
  - Engineering
  - AI
---
```

Notes on authoring:

- **Drafts.** `draft: true` keeps a post out of production builds; it is still
  rendered by `npm start` and `--watch`.
- **Tags** are grouped by slug, so `Engineering` and `engineering` share one tag
  page; the most-used spelling becomes the canonical one.
- **Mermaid** fenced code blocks are rendered to SVG at build time (hence
  Playwright), with intermediate files landing in the git-ignored `mermaidTmp/`.
- **Footnotes** (`[^1]`) and heading anchors are enabled, and post layouts build
  an "On this page" list from the `h2` headings.
- **Media** — `.mp3`, `.mp4`, and `.wav` files under `content/` are copied to
  `/media`.

## Deployment

[.github/workflows/main.yml](.github/workflows/main.yml) runs on every push to
`main`: it installs dependencies and Chromium, runs `npm run build`, and uploads
`_site/` to the web host over SFTP using the `FTP_*` repository secrets.

## License

[MIT](LICENSE)
