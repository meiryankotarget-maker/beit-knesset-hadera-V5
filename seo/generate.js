/* ============================================================
   SEO GENERATOR  ·  shared by runtime + build (single source)
   ------------------------------------------------------------
   - routeMeta(route, ctx)      -> resolved meta for a route
   - renderHead(meta, ctx)      -> <head> SEO tags (string)
   - renderNoscript(meta, ctx)  -> no-JS / crawler fallback (string)
   - generateAll({...})         -> static files + sitemap + robots
   Browser: window.SEOGenerate   |   Node: module.exports
   ============================================================ */
(function (root, factory) {
  var v = factory();
  if (typeof module === 'object' && module.exports) module.exports = v;
  else root.SEOGenerate = v;
})(typeof self !== 'undefined' ? self : this, function () {

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* percent-encode each path segment (keeps Hebrew valid in URLs/XML) */
  function encPath(path) {
    return String(path || '/')
      .split('/')
      .map(function (seg) { return seg ? encodeURIComponent(seg) : seg; })
      .join('/');
  }

  function normImg(img, site) {
    if (!img) return site.defaultImage || '';
    if (/^https?:\/\//.test(img)) return img;
    return img.charAt(0) === '/' ? img : '/' + img;
  }

  function abs(path, siteUrl) {
    var p = encPath(path);
    if (!siteUrl) return p;                  // relative fallback (no domain yet)
    return siteUrl.replace(/\/+$/, '') + p;
  }

  function findParasha(parshiot, slug) {
    if (!slug) return null;
    var dec = slug;
    try { dec = decodeURIComponent(slug); } catch (e) {}
    for (var i = 0; i < parshiot.length; i++) {
      var p = parshiot[i];
      if (p.slug === dec || p.name === dec || p.slug === slug) return p;
    }
    return null;
  }

  function latestEdition(p) {
    return (p.editions && p.editions.length) ? p.editions[p.editions.length - 1] : {};
  }

  /* ---------- resolve meta for a route ---------- */
  function routeMeta(route, ctx) {
    var site = ctx.site, pages = ctx.pages, parshiot = ctx.parshiot;

    if (route.page === 'parasha' && route.param) {
      var p = findParasha(parshiot, route.param);
      if (p) {
        var ed = latestEdition(p);
        return {
          page: 'parasha',
          slug: p.slug,
          title: p.title + ' · דבר הרב · ' + site.name,
          description: (p.metaDescription || p.excerpt || '').slice(0, 300),
          path: '/פרשת-השבוע/' + p.slug,
          image: normImg(p.image, site),
          type: 'article',
          datePublished: ed.dateGregorian || '',
          parasha: p,
        };
      }
    }

    var pg = null;
    for (var i = 0; i < pages.length; i++) { if (pages[i].id === route.page) { pg = pages[i]; break; } }
    if (!pg) pg = pages[0];
    return {
      page: pg.id,
      title: pg.title || site.defaultTitle,
      description: pg.description || site.defaultDescription,
      path: pg.path || '/',
      image: normImg(pg.image, site),
      type: pg.id === 'home' ? 'website' : 'website',
    };
  }

  /* ---------- JSON-LD ---------- */
  function orgLd(site, siteUrl) {
    var o = site.org || {};
    return {
      '@type': o.type || 'Organization',
      name: site.name,
      url: siteUrl || undefined,
      telephone: o.telephone,
      email: o.email,
      foundingDate: o.foundingDate,
      address: {
        '@type': 'PostalAddress',
        streetAddress: o.streetAddress,
        addressLocality: o.addressLocality,
        addressCountry: o.addressCountry,
      },
    };
  }

  function jsonLdFor(meta, ctx) {
    var site = ctx.site, siteUrl = ctx.siteUrl;
    var graph = [];

    if (meta.page === 'parasha' && meta.parasha) {
      graph.push({
        '@type': 'Article',
        headline: meta.parasha.title,
        description: meta.description,
        inLanguage: site.lang || 'he',
        image: abs(meta.image, siteUrl),
        mainEntityOfPage: abs(meta.path, siteUrl),
        author: { '@type': 'Organization', name: site.name },
        publisher: orgLd(site, siteUrl),
        isPartOf: { '@type': 'WebSite', name: site.name, url: siteUrl || undefined },
      });
    } else {
      graph.push({
        '@type': 'WebPage',
        name: meta.title,
        description: meta.description,
        inLanguage: site.lang || 'he',
        url: abs(meta.path, siteUrl),
        isPartOf: { '@type': 'WebSite', name: site.name, url: siteUrl || undefined },
      });
      if (meta.page === 'home') {
        graph.push({ '@type': 'WebSite', name: site.name, url: siteUrl || undefined, inLanguage: site.lang || 'he' });
      }
      if (meta.page === 'home' || meta.page === 'about' || meta.page === 'contact') {
        graph.push(orgLd(site, siteUrl));
      }
    }

    var ld = { '@context': 'https://schema.org', '@graph': graph };
    return JSON.stringify(ld, function (k, val) { return val === undefined ? undefined : val; }, 0);
  }

  /* ---------- <head> tags ---------- */
  function renderHead(meta, ctx) {
    var site = ctx.site, siteUrl = ctx.siteUrl;
    var url = abs(meta.path, siteUrl);
    var img = abs(meta.image, siteUrl);
    var L = [];
    L.push('<title>' + esc(meta.title) + '</title>');
    L.push('<meta name="description" content="' + esc(meta.description) + '" />');
    L.push('<link rel="canonical" href="' + esc(url) + '" />');
    L.push('<meta property="og:type" content="' + esc(meta.type || 'website') + '" />');
    L.push('<meta property="og:site_name" content="' + esc(site.name) + '" />');
    L.push('<meta property="og:locale" content="' + esc(site.locale || 'he_IL') + '" />');
    L.push('<meta property="og:title" content="' + esc(meta.title) + '" />');
    L.push('<meta property="og:description" content="' + esc(meta.description) + '" />');
    L.push('<meta property="og:url" content="' + esc(url) + '" />');
    L.push('<meta property="og:image" content="' + esc(img) + '" />');
    L.push('<meta name="twitter:card" content="summary_large_image" />');
    L.push('<meta name="twitter:title" content="' + esc(meta.title) + '" />');
    L.push('<meta name="twitter:description" content="' + esc(meta.description) + '" />');
    L.push('<meta name="twitter:image" content="' + esc(img) + '" />');
    L.push('<script type="application/ld+json">' + jsonLdFor(meta, ctx) + '<\/script>');
    return L.join('\n  ');
  }

  /* ---------- no-JS / crawler fallback body ---------- */
  function renderNoscript(meta, ctx) {
    var pages = ctx.pages;
    var links = pages.map(function (p) {
      return '<a href="' + esc(encPath(p.path)) + '" style="color:#0a2a2c">' + esc(p.title.split('·')[0].trim()) + '</a>';
    }).join(' · ');
    return [
      '<noscript>',
      '  <div style="max-width:760px;margin:0 auto;padding:48px 24px;font-family:Heebo,Arial,sans-serif;direction:rtl;text-align:right;color:#1c1410">',
      '    <h1 style="color:#0a2a2c">' + esc(meta.title) + '</h1>',
      '    <p>' + esc(meta.description) + '</p>',
      '    <nav aria-label="ניווט ראשי" style="margin-top:24px;line-height:2.2">' + links + '</nav>',
      '  </div>',
      '</noscript>',
    ].join('\n');
  }

  /* ---------- file path for a route path ---------- */
  function pathToFile(routePath) {
    var clean = String(routePath || '/').replace(/^\/+/, '').replace(/\/+$/, '');
    return clean === '' ? 'index.html' : clean + '/index.html';
  }

  /* ---------- full static build ---------- */
  function generateAll(opts) {
    var templateHtml = opts.templateHtml;
    var site = opts.site, pages = opts.pages, parshiot = opts.parshiot;
    var siteUrl = (opts.siteUrl || site.url || '').replace(/\/+$/, '');
    var ctx = { site: site, pages: pages, parshiot: parshiot, siteUrl: siteUrl };

    var routes = [];
    pages.forEach(function (pg) {
      routes.push({ route: { page: pg.id }, path: pg.path, changefreq: pg.changefreq, priority: pg.priority });
    });
    parshiot.forEach(function (p) {
      routes.push({
        route: { page: 'parasha', param: p.slug },
        path: '/פרשת-השבוע/' + p.slug,
        changefreq: 'weekly', priority: '0.7',
      });
    });

    var files = routes.map(function (r) {
      var meta = routeMeta(r.route, ctx);
      var filePath = pathToFile(r.path);
      // depth = how many folders deep this page sits; deep pages need an
      // absolute base so /src and /assets resolve. Home (depth 0) stays
      // relative so it works at any hosting depth (incl. sub-path previews).
      var depth = (filePath.match(/\//g) || []).length;
      var baseTag = depth === 0 ? '' : '<base href="/" />';
      var html = templateHtml
        .replace('<!--SEO_BASE-->', baseTag)
        .replace('<!--SEO_HEAD-->', renderHead(meta, ctx))
        .replace('<!--SEO_NOSCRIPT-->', renderNoscript(meta, ctx));
      return { path: filePath, content: html };
    });

    /* sitemap.xml */
    var urls = routes.map(function (r) {
      return '  <url>\n' +
        '    <loc>' + esc(abs(r.path, siteUrl)) + '</loc>\n' +
        (r.changefreq ? '    <changefreq>' + r.changefreq + '</changefreq>\n' : '') +
        (r.priority ? '    <priority>' + r.priority + '</priority>\n' : '') +
        '  </url>';
    }).join('\n');
    var sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n';

    /* robots.txt */
    var robots = 'User-agent: *\nAllow: /\n\n' +
      (siteUrl ? 'Sitemap: ' + siteUrl + '/sitemap.xml\n'
               : '# הוסף דומיין ב-content/site.js כדי לקבל כתובת Sitemap מלאה\nSitemap: /sitemap.xml\n');

    return { files: files, sitemap: sitemap, robots: robots, routes: routes };
  }

  return {
    esc: esc, encPath: encPath, abs: abs, normImg: normImg,
    routeMeta: routeMeta, renderHead: renderHead, renderNoscript: renderNoscript,
    jsonLdFor: jsonLdFor, pathToFile: pathToFile, generateAll: generateAll,
  };
});
