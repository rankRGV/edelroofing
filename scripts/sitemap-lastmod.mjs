#!/usr/bin/env node
/**
 * Writes dist/sitemap.xml with an accurate <lastmod>. Runs after `astro build`.
 * Same rules as the Cool Aid and RankRGV sites:
 *
 * Why: Google reads <lastmod> only when it is consistently accurate, and it
 * treats "freshness" dates on unchanged content as a warning sign. So a page
 * only gets a new date when the visible text inside its <main> changes.
 *
 * How:
 *   - Blog posts (root paths, from src/content/blog) use their updatedDate,
 *     else pubDate. /blog uses the newest post date.
 *   - Every other page: hash the visible text of <main>. Compare to the
 *     committed manifest `sitemap-lastmod.json`. Changed text = today's date.
 *     Pages never seen changing have no <lastmod> (better than a false one).
 *   - Only LOCAL builds write the manifest and assign new dates. Vercel builds
 *     (VERCEL=1) reuse the committed dates and never invent one.
 *
 * Rule: commit `sitemap-lastmod.json` together with the page change.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LEGACY } from '../src/data/launch.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const MANIFEST = join(ROOT, 'sitemap-lastmod.json');
const BLOG = join(ROOT, 'src', 'content', 'blog');
const SITE = 'https://www.edelroofing.com';
const IS_CI = Boolean(process.env.VERCEL || process.env.CI);
const TODAY = new Date().toISOString().slice(0, 10);

// Pages that stay out of the sitemap: noindex pages (404, ads landing and
// its thank-you, energy relief until Edel confirms the offer) and the
// generic form thank-you page.
const EXCLUDE = new Set(['/404', '/mcallen-free-quote', '/mcallen-free-quote-thank-you', '/thank-you', '/energy-relief-program']);
const SKIP_DIRS = new Set(['_astro', ...LEGACY]);

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (dir === DIST && SKIP_DIRS.has(e.name)) continue;
      out.push(...(await htmlFiles(join(dir, e.name))));
    } else if (e.name.endsWith('.html')) out.push(join(dir, e.name));
  }
  return out;
}

const pathFor = (file) => {
  const p = '/' + relative(DIST, file).split(sep).join('/').replace(/\.html$/, '');
  return p === '/index' ? '/' : p.replace(/\/index$/, '');
};

const mainText = (html) => {
  const m = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  return (m ? m[1] : html)
    .replace(/<(script|style|noscript|svg)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

async function postDates() {
  const dates = {};
  for (const f of await readdir(BLOG)) {
    if (!f.endsWith('.md')) continue;
    const fm = (await readFile(join(BLOG, f), 'utf8')).split('---')[1] ?? '';
    const d = (fm.match(/^updatedDate:\s*["']?([\d-]{10})/m) || fm.match(/^pubDate:\s*["']?([\d-]{10})/m))?.[1];
    if (d) dates['/' + f.replace(/\.md$/, '')] = d;
  }
  return dates;
}

async function main() {
  if (!existsSync(DIST)) throw new Error('No dist/. Run astro build first.');
  const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, 'utf8')) : {};
  const posts = await postDates();
  const blogNewest = Object.values(posts).sort().at(-1) ?? null;
  const next = {};
  const dates = {};
  let changed = 0;

  for (const file of await htmlFiles(DIST)) {
    const path = pathFor(file);
    if (EXCLUDE.has(path)) continue;
    const html = await readFile(file, 'utf8');
    const hash = createHash('sha1').update(mainText(html)).digest('hex').slice(0, 16);
    const prev = manifest[path];

    if (posts[path] || path === '/blog') {
      const d = posts[path] ?? blogNewest;
      dates[path] = d;
      next[path] = { hash, lastmod: d };
      continue;
    }
    let lastmod = prev?.lastmod ?? null;
    if (prev && prev.hash !== hash && !IS_CI) {
      lastmod = TODAY;
      changed++;
    }
    // New page on a local build: its first publish date is today.
    if (!prev && !IS_CI && Object.keys(manifest).length) lastmod = TODAY;
    next[path] = { hash: IS_CI && prev ? prev.hash : hash, lastmod };
    dates[path] = lastmod;
  }

  const paths = Object.keys(dates).sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => `  <url><loc>${SITE}${p}</loc>${dates[p] ? `<lastmod>${dates[p]}</lastmod>` : ''}</url>`).join('\n') +
    '\n</urlset>\n';
  await writeFile(join(DIST, 'sitemap.xml'), xml);

  if (!IS_CI) {
    const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
    await writeFile(MANIFEST, JSON.stringify(sorted, null, 1) + '\n');
  }
  const withDate = paths.filter((p) => dates[p]).length;
  console.log(`sitemap-lastmod: ${paths.length} URLs, ${withDate} with lastmod, ${changed} changed${IS_CI ? ' (CI: no new dates)' : ''}.`);
}

main().catch((err) => {
  console.error('sitemap-lastmod:', err.message);
  process.exit(1);
});
