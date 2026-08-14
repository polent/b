const fs = require("fs");
const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItMermaid = require("markdown-it-mermaid-server");

// eleventy-plugin-rss v3 is ESM; require() returns a namespace object, so unwrap .default.
const pluginRss = require("@11ty/eleventy-plugin-rss").default || require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
// Eleventy 3 bundles the HTML base + bundle plugins in core (no separate deps).
const { EleventyHtmlBasePlugin, BundlePlugin } = require("@11ty/eleventy");

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
    "./node_modules/prismjs/themes/prism-coy.css": "/css/prism-coy.css",
  });
  // Copy .mp3 files to /media
  eleventyConfig.addPassthroughCopy({ "content/**/*.mp3": "media" });

  // Copy .mp4 files to /media
  eleventyConfig.addPassthroughCopy({ "content/**/*.mp4": "media" });

  // Copy .wav files to /media
  eleventyConfig.addPassthroughCopy({ "content/**/*.wav": "media" });

  // Optionally, add watch targets if needed
  eleventyConfig.addWatchTarget("content/**/*.mp3");
  eleventyConfig.addWatchTarget("content/**/*.mp4");
  eleventyConfig.addWatchTarget("content/**/*.wav");

  // Run Eleventy when these files change:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

  // Watch content images for the image pipeline.
  eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  // App plugins
  eleventyConfig.addPlugin(pluginDrafts);
  eleventyConfig.addPlugin(pluginImages);

  // Official plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // Provides {% css %}/{% js %}/{% getBundle %} shortcodes (css, js, html bundles).
  eleventyConfig.addPlugin(BundlePlugin);

  // Build-time globals
  eleventyConfig.addGlobalData("buildYear", () => new Date().getFullYear());

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "dd LLLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  });

  // Tag pages are keyed by SLUG, not by the raw tag string.
  //
  // Eleventy creates one collection per distinct tag string, so two spellings
  // of the same topic ("Engineering" / "engineering", "Web Standards" /
  // "Web-Standards") produced two templates both claiming /tags/<slug>/ and
  // the build died with DuplicatePermalinkOutputError — naming neither tag.
  // Merging by slug here makes that collision impossible by construction and
  // lets posts capitalise tags however reads best.
  //
  // Each entry: { slug, name, posts, count, weight, spellings }
  //   name     — canonical spelling (the most used one)
  //   weight   — 0..1 across the set, used to scale the tag cloud
  //   spellings— every variant seen, for the /tags/ page to disclose
  const canonicalTagBySlug = new Map();
  const TAG_SKIP = new Set(["all", "nav", "post", "posts", "tagList"]);
  const byName = (a, b) => a.localeCompare(b);

  // Canonical spelling = the most used one. A tie (the common case when a new
  // post introduces a second casing) falls to the capitalised form, since that
  // is what reads correctly as a heading and a pill; only then to alphabetical,
  // so the pick stays stable from build to build rather than insertion-ordered.
  const startsUpper = (s) => (/^\p{Lu}/u.test(s) ? 1 : 0);
  const pickCanonical = (spellings) =>
    [...spellings.entries()].sort(
      (a, b) =>
        b[1] - a[1] ||
        startsUpper(b[0]) - startsUpper(a[0]) ||
        byName(a[0], b[0])
    )[0][0];

  const groupTagsBySlug = (posts, slugify) => {
    const bySlug = new Map();
    for (const item of posts) {
      const { tags } = item.data || {};
      for (const tag of tags || []) {
        if (TAG_SKIP.has(tag)) continue;
        const slug = slugify(tag);
        if (!bySlug.has(slug)) {
          bySlug.set(slug, { slug, spellings: new Map(), posts: [] });
        }
        const entry = bySlug.get(slug);
        entry.spellings.set(tag, (entry.spellings.get(tag) || 0) + 1);
        // A post tagged with two spellings of one topic must still appear once.
        if (!entry.posts.includes(item)) entry.posts.push(item);
      }
    }
    return bySlug;
  };

  eleventyConfig.addCollection("tagPages", (api) => {
    const slugify = eleventyConfig.getFilter("slugify");
    const bySlug = groupTagsBySlug(api.getFilteredByTag("posts"), slugify);

    const entries = [...bySlug.values()].map((e) => {
      const name = pickCanonical(e.spellings);
      return {
        slug: e.slug,
        name,
        posts: e.posts.sort((a, b) => a.date - b.date),
        count: e.posts.length,
        // Every spelling seen, and the non-canonical ones on their own so a
        // template can list them without having to skip an entry mid-loop.
        spellings: [...e.spellings.keys()].sort(byName),
        variants: [...e.spellings.keys()].filter((s) => s !== name).sort(byName),
      };
    });

    if (entries.length) {
      const counts = entries.map((e) => e.count);
      const min = Math.min(...counts);
      const range = Math.max(1, Math.max(...counts) - min);
      for (const e of entries) e.weight = (e.count - min) / range;
    }

    canonicalTagBySlug.clear();
    for (const e of entries) canonicalTagBySlug.set(e.slug, e.name);

    return entries.sort((a, b) => byName(a.name, b.name));
  });

  // Render a tag using the canonical spelling for its slug, so one topic reads
  // the same way on every post. Falls back to the raw tag when the map has not
  // been built yet (a tag used only by a draft, or a non-post template).
  eleventyConfig.addFilter("canonicalTag", (tag) => {
    const slugify = eleventyConfig.getFilter("slugify");
    return canonicalTagBySlug.get(slugify(tag)) || tag;
  });

  // Extract h2 headings (with their anchor IDs) from rendered HTML for a
  // simple "On this page" TOC. Relies on markdown-it-anchor adding id="…".
  // Decode HTML entities so Nunjucks doesn't double-encode them on output.
  const decodeHtmlEntities = (s) =>
    s
      .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
      .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&");
  eleventyConfig.addFilter("tocFromContent", (html) => {
    if (!html) return [];
    const out = [];
    const re = /<h2\b[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
      const id = m[1];
      const text = decodeHtmlEntities(
        m[2]
          .replace(/<a\b[^>]*class="header-anchor"[^>]*>[\s\S]*?<\/a>/gi, "")
          .replace(/<[^>]+>/g, "")
          .replace(/\s+/g, " ")
          .trim()
      );
      if (text) out.push({ id, text });
    }
    return out;
  });

  // Estimate reading time in whole minutes (assumes ~220 wpm).
  // Accepts either a collection item or a raw HTML string, so layouts can
  // pass `content` directly without looking themselves up in a collection.
  eleventyConfig.addFilter("readingTime", (post) => {
    // Normalise both accepted shapes to one object so the rest reads the same
    // either way. Written without `?.` / `??`: the editor's JS parser in this
    // project still rejects them (see jsconfig.json).
    const source = typeof post === "string" ? { templateContent: post } : post || {};
    let raw = source.templateContent || "";

    // Rendered content is not available for every collection item, so fall
    // back to the source file. Only this read can realistically throw, and a
    // post whose word count silently became "1 min" is worth hearing about,
    // so narrow the catch to it and say what happened.
    if (!raw && source.inputPath) {
      try {
        raw = fs
          .readFileSync(source.inputPath, "utf8")
          .replace(/^---[\s\S]*?---\n/, "");
      } catch (error) {
        console.warn(
          `[readingTime] could not read ${source.inputPath}, estimating from an empty body: ${error.message}`
        );
      }
    }

    const text = raw.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
  });

  // Customize Markdown library settings:
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "header-anchor",
        symbol: "#",
        ariaHidden: false,
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    });
    mdLib.use(markdownItMermaid.default || markdownItMermaid);

    // `[^1]` references and `[^1]:` definitions. markdown-it has no footnote
    // support of its own, so without this the syntax renders as literal text.
    mdLib.use(markdownItFootnote);

    // The plugin emits a bare <section class="footnotes">. Give it a heading
    // and a landmark so the block is announced and reachable, rather than
    // being an unlabelled list of links at the end of the document.
    mdLib.renderer.rules.footnote_block_open = () =>
      '<section class="footnotes" aria-labelledby="footnotes-heading">\n' +
      '<h2 id="footnotes-heading" class="footnotes-heading">References</h2>\n' +
      '<ol class="footnotes-list">\n';
    mdLib.renderer.rules.footnote_block_close = () => "</ol>\n</section>\n";

    // The default back-link is a bare "↩︎" with no accessible name, so it is
    // announced as punctuation or skipped. Name it after the footnote it
    // returns to, and hide the glyph itself from the accessibility tree.
    mdLib.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
      let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
      if (tokens[idx].meta.subId > 0) id += ":" + tokens[idx].meta.subId;
      return (
        ` <a href="#fnref${id}" class="footnote-backref"` +
        ` aria-label="Back to reference ${tokens[idx].meta.id + 1}">` +
        '<span aria-hidden="true">↩︎</span></a>'
      );
    };
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // These are all optional:
    dir: {
      input: "content", // default: "."
      includes: "../_includes", // default: "_includes"
      data: "../_data", // default: "_data"
      output: "_site",
    },

    // -----------------------------------------------------------------
    // Optional items:
    // -----------------------------------------------------------------

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

    // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
    // it will transform any absolute URLs in your HTML to include this
    // folder name and does **not** affect where things go in the output folder.
    pathPrefix: "/",
  };
};
