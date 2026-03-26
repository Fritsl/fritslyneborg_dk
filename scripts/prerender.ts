/**
 * Build-time prerender script.
 * Generates semantic HTML from profile data and injects it into the built
 * index.html so search-engine crawlers can read the page without JavaScript.
 *
 * The React app hydrates on top of the visible page; the noscript block
 * provides a fully readable fallback for crawlers that don't run JS.
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { personData } from "../client/src/data/profile";

const distDir = join(import.meta.dirname, "..", "dist", "public");
const indexPath = join(distDir, "index.html");

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildStaticHtml(): string {
  const p = personData;
  const lines: string[] = [];

  lines.push(`<div itemscope itemtype="https://schema.org/Person">`);
  lines.push(`<h1 itemprop="name">${escapeHtml(p.name)}</h1>`);
  lines.push(`<p itemprop="description">${escapeHtml(p.name)} ${escapeHtml(p.introduction)}</p>`);

  lines.push(`<dl>`);
  lines.push(`<dt>Nationality</dt><dd itemprop="nationality">${escapeHtml(p.details.nationality)}</dd>`);
  if (p.details.birthYear) {
    lines.push(`<dt>Born</dt><dd>${escapeHtml(p.details.birthYear)}</dd>`);
  }
  lines.push(`<dt>Fields</dt><dd itemprop="knowsAbout">${escapeHtml(p.details.fields)}</dd>`);
  lines.push(`<dt>Known for</dt><dd>${escapeHtml(p.details.knownFor)}</dd>`);
  lines.push(`</dl>`);

  // Table of contents
  lines.push(`<nav aria-label="Contents"><h2>Contents</h2><ol>`);
  for (const section of p.sections) {
    lines.push(`<li><a href="#${section.id}">${escapeHtml(section.title)}</a></li>`);
  }
  lines.push(`</ol></nav>`);

  // Sections
  for (const section of p.sections) {
    lines.push(`<section id="${section.id}">`);
    lines.push(`<h2>${escapeHtml(section.title)}</h2>`);
    for (const a of section.achievements) {
      lines.push(`<h3>${escapeHtml(a.title)}</h3>`);
      lines.push(`<p>${escapeHtml(a.description)}</p>`);
    }
    lines.push(`</section>`);
  }

  // References
  lines.push(`<section id="references"><h2>References</h2><ol>`);
  for (const ref of p.references) {
    const parts: string[] = [];
    if (ref.author) parts.push(escapeHtml(ref.author));
    if (ref.url) {
      parts.push(`<a href="${escapeHtml(ref.url)}">${escapeHtml(ref.title)}</a>`);
    } else {
      parts.push(`"${escapeHtml(ref.title)}"`);
    }
    if (ref.source) parts.push(`<em>${escapeHtml(ref.source)}</em>`);
    parts.push(`(${escapeHtml(ref.year)})`);
    lines.push(`<li>${parts.join(". ")}.</li>`);
  }
  lines.push(`</ol></section>`);

  lines.push(`</div>`);
  return lines.join("\n");
}

let indexHtml = readFileSync(indexPath, "utf-8");
const staticContent = buildStaticHtml();

// Insert a noscript fallback with the full page content for crawlers
indexHtml = indexHtml.replace(
  '<div id="root"></div>',
  `<div id="root"></div>\n<noscript>${staticContent}</noscript>`
);

writeFileSync(indexPath, indexHtml);
console.log("✓ Prerendered index.html with static <noscript> content for crawlers");
