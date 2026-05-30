// ============================================================
// CLIENT ROUTER + LIVE SEO META  (History API)
// Exposes window.AppRouter { parsePath, buildPath, applyMeta }
// Meta logic is delegated to window.SEOGenerate so the live
// <head> matches the statically pre-rendered pages exactly.
// ============================================================

const PARASHA_BASE = '/פרשת-השבוע';

const PAGE_TO_PATH = {
  home: '/',
  about: '/about',
  times: '/prayer-times',
  gallery: '/gallery',
  parasha: PARASHA_BASE,
  heritage: '/heritage',
  memorial: '/memorial',
  contact: '/contact',
  donate: '/donate',
};

const PATH_TO_PAGE = {
  '/about': 'about',
  '/prayer-times': 'times',
  '/gallery': 'gallery',
  '/heritage': 'heritage',
  '/memorial': 'memorial',
  '/contact': 'contact',
  '/donate': 'donate',
};

function buildPath(page, param) {
  if (page === 'parasha') return param ? PARASHA_BASE + '/' + param : PARASHA_BASE;
  return PAGE_TO_PATH[page] || '/';
}

function parsePath(pathname) {
  let clean = pathname || '/';
  try { clean = decodeURIComponent(clean); } catch (e) {}
  clean = clean.replace(/\/index\.html$/i, '');
  clean = clean.replace(/\/+$/, '');
  if (clean === '' || clean === '/index.html') return { page: 'home' };

  if (clean === PARASHA_BASE) return { page: 'parasha' };
  if (clean.indexOf(PARASHA_BASE + '/') === 0) {
    const rest = clean.slice(PARASHA_BASE.length + 1);
    const segs = rest.split('/');
    return { page: 'parasha', param: segs[0], year: segs[1] || null };
  }

  if (PATH_TO_PAGE[clean]) return { page: PATH_TO_PAGE[clean] };
  return { page: 'home', notFound: true };
}

// ---- live <head> upsert helpers ----
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content == null ? '' : content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function applyMeta(route) {
  const G = window.SEOGenerate;
  const site = window.SITE_SEO;
  if (!G || !site) return;
  const ctx = {
    site,
    pages: window.PAGES_META || [],
    parshiot: window.PARSHIOT_DATA || [],
    siteUrl: site.url || window.location.origin,
  };
  const meta = G.routeMeta(route, ctx);
  const url = G.abs(meta.path, ctx.siteUrl);
  const img = G.abs(meta.image, ctx.siteUrl);

  document.title = meta.title;
  upsertMeta('name', 'description', meta.description);
  upsertLink('canonical', url);

  upsertMeta('property', 'og:type', meta.type || 'website');
  upsertMeta('property', 'og:site_name', site.name);
  upsertMeta('property', 'og:locale', site.locale || 'he_IL');
  upsertMeta('property', 'og:title', meta.title);
  upsertMeta('property', 'og:description', meta.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', img);
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', meta.title);
  upsertMeta('name', 'twitter:description', meta.description);
  upsertMeta('name', 'twitter:image', img);

  // JSON-LD (managed tag)
  let ld = document.head.querySelector('script[type="application/ld+json"][data-managed="1"]');
  if (!ld) {
    ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.setAttribute('data-managed', '1');
    document.head.appendChild(ld);
  }
  ld.textContent = G.jsonLdFor(meta, ctx);
}

window.AppRouter = { parsePath, buildPath, applyMeta, PARASHA_BASE };
