#!/usr/bin/env node
/* ============================================================
   build-seo.cjs  ·  static pre-render generator
   ------------------------------------------------------------
   מייצר קובץ HTML סטטי לכל עמוד ולכל פרשה (עם Title/Meta/OG/
   Structured Data מוטמעים), וכן sitemap.xml ו-robots.txt.

   הרצה מקומית:   node build-seo.cjs
   ב-Vercel:       Build Command = node build-seo.cjs
                   Output Directory = . (שורש)

   מקור האמת: content/site.js, content/pages.js,
              content/parshiot.js, index.template.html
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const site = require('./content/site.js');
const pages = require('./content/pages.js');
const parshiot = require('./content/parshiot.js');
const SEO = require('./seo/generate.js');

const templateHtml = fs.readFileSync(path.join(ROOT, 'index.template.html'), 'utf8');

// Domain resolution: explicit env > site.url > Vercel deployment URL > relative
const siteUrl =
  process.env.SITE_URL ||
  site.url ||
  (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : '');

const out = SEO.generateAll({ templateHtml, site, pages, parshiot, siteUrl });

let written = 0;
out.files.forEach(function (f) {
  const dest = path.join(ROOT, f.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, f.content, 'utf8');
  written++;
});
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), out.sitemap, 'utf8');
fs.writeFileSync(path.join(ROOT, 'robots.txt'), out.robots, 'utf8');

console.log('[build-seo] siteUrl: ' + (siteUrl || '(relative — no domain set yet)'));
console.log('[build-seo] wrote ' + written + ' HTML pages + sitemap.xml + robots.txt');
out.routes.forEach(function (r) { console.log('  · ' + r.path); });
