const fs = require("fs");
const path = require("path");

const site = path.resolve(__dirname, "..", "_site");
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.endsWith(".html")) htmlFiles.push(fullPath);
  }
}

if (!fs.existsSync(site)) {
  console.error("_site does not exist; run the build first.");
  process.exit(1);
}

walk(site);
const missing = [];
const withoutCanonical = [];
const referencePattern = /\b(?:href|src)=["']([^"']+)["']/gi;

function outputPath(url) {
  const pathname = new URL(url, "https://site.invalid").pathname;
  const relative = pathname.replace(/^\//, "");
  const direct = path.join(site, relative);
  if (pathname.endsWith("/")) return path.join(site, relative, "index.html");
  if (path.extname(relative)) return direct;
  return path.join(direct, "index.html");
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes('rel="canonical"')) withoutCanonical.push(file);

  for (const match of html.matchAll(referencePattern)) {
    const reference = match[1];
    if (/^(?:#|https?:|mailto:|tel:|data:|javascript:)/i.test(reference)) continue;
    const url = new URL(reference, "https://site.invalid");
    if (url.origin !== "https://site.invalid") continue;
    const target = outputPath(url.href);
    if (!fs.existsSync(target)) missing.push(`${file}: ${reference}`);
  }
}

if (missing.length || withoutCanonical.length) {
  if (missing.length) {
    console.error(`Missing internal references (${missing.length}):`);
    missing.forEach((item) => console.error(`- ${item}`));
  }
  if (withoutCanonical.length) {
    console.error(`Pages without canonical URLs (${withoutCanonical.length}):`);
    withoutCanonical.forEach((item) => console.error(`- ${item}`));
  }
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages and all internal references.`);
