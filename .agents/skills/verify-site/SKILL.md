---
name: verify-site
description: >-
  Verifies the blog build and site integrity by running tests, checking internal links,
  validating canonical URLs, and checking Mermaid rendering and Pagefind search indexing.
  Use when validating changes, diagnosing broken links/assets, or before committing code.
---

# Site Verification Runbook

This skill guides running tests and diagnosing issues for **b.polente.de**.

## 1. Run Verification Test Suite

Run the full automated test suite:

```bash
npm test
```

This runs:
1. `npm run clean`: Removes previous `_site/` build output.
2. `npx @11ty/eleventy`: Compiles markdown, nunjucks templates, generates responsive images, and renders Mermaid diagrams.
3. `npx pagefind --site _site`: Indexes the site for client-side search.
4. `node scripts/check-site.js`: Traverses every generated HTML page to ensure:
   - All internal links (`href`) and assets (`src`) resolve to valid output files.
   - Every page has a `rel="canonical"` tag.

## 2. Troubleshooting Common Issues

### Issue A: "browserType.launch: Executable doesn't exist"
- **Cause**: Playwright Chromium is not installed or cache was cleared.
- **Fix**: Run `npx playwright install chromium` or `npx playwright install --with-deps chromium`.

### Issue B: "ENOENT: no such file or directory, stat ... image"
- **Cause**: A markdown post contains `{% image "./foo.jpg", ... %}` but `foo.jpg` does not exist in the post's folder.
- **Fix**: Either:
  1. Add the missing image file to the post directory.
  2. Mark the post with `draft: true` in the front matter so production builds skip it until ready.

### Issue C: "Missing internal references (N)"
- **Cause**: `scripts/check-site.js` discovered an internal link pointing to a non-existent page or asset.
- **Fix**: Inspect the paths listed in the error output and correct the target `href` or `src`. Note that trailing slashes determine folder vs file lookup.

### Issue D: "DuplicatePermalinkOutputError"
- **Cause**: Two posts or templates generate the same output URL.
- **Fix**: Tags are already merged by slug in `eleventy.config.js`, but verify post permalinks and filenames if custom permalinks were added.

### Issue E: Pagefind Search not finding content
- **Cause**: Plain `npx @11ty/eleventy` was run instead of `npm run build`.
- **Fix**: Run `npm run build` so Pagefind indexes `_site/`.
