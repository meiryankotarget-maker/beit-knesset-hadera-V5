// Gallery page - Premium Historical Archive Design

/* ---------- Collage packer ----------
   Builds full-width "justified" rows from an ordered image list.
   - Each tier has a relative width weight (flex-grow basis).
   - Rows close once they reach a target weight (or item cap).
   - Every row is guaranteed at least one anchor (large/hero): if a row
     has none, its widest tile is promoted to 'large'.
   - Row height varies by the row's top tier → dynamic collage rhythm.
   Deterministic (stable) for a given image list. */
const COLLAGE_WEIGHT = { small: 2, medium: 3, large: 4.5, hero: 6 };
const COLLAGE_HEIGHT = {
  base:  'clamp(200px, 24vw, 320px)',
  large: 'clamp(240px, 29vw, 380px)',
  hero:  'clamp(280px, 35vw, 460px)',
};
const COLLAGE_ROW_TARGET = 9;
const COLLAGE_MAX_ITEMS = 4;

function buildCollageRows(images) {
  const rows = [];
  let cur = [];
  let sum = 0;

  images.forEach((img, idx) => {
    const item = { ...img, idx, weight: COLLAGE_WEIGHT[img.size] || COLLAGE_WEIGHT.medium };
    cur.push(item);
    sum += item.weight;
    if (sum >= COLLAGE_ROW_TARGET || cur.length >= COLLAGE_MAX_ITEMS) {
      rows.push(cur);
      cur = [];
      sum = 0;
    }
  });
  if (cur.length) rows.push(cur);

  return rows.map((items) => {
    // Guarantee an anchor (large/hero) in every row.
    const hasAnchor = items.some((it) => it.size === 'large' || it.size === 'hero');
    if (!hasAnchor) {
      let widest = items[0];
      items.forEach((it) => { if (it.weight > widest.weight) widest = it; });
      widest.size = 'large';
      widest.weight = COLLAGE_WEIGHT.large;
      widest.promoted = true;
    }
    const hasHero = items.some((it) => it.size === 'hero');
    const hasLarge = items.some((it) => it.size === 'large');
    const height = hasHero ? COLLAGE_HEIGHT.hero : hasLarge ? COLLAGE_HEIGHT.large : COLLAGE_HEIGHT.base;
    return { items, height };
  });
}

const Gallery = ({ navigate }) => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activeFilter, setActiveFilter] = React.useState('הכל');

  // Gallery images with different aspect ratios for masonry effect
  const galleryImages = [
    { id: 1,  src: 'assets/heritage-historic.jpg', alt: 'בית הכנסת הגדול חדרה',     category: 'היסטורי',  size: 'hero'   },
    { id: 2,  src: 'assets/heritage-historic.jpg', alt: 'תפילת שבת קהילתית',         category: 'תפילה',    size: 'medium' },
    { id: 3,  src: 'assets/heritage-historic.jpg', alt: 'הכיפה המרכזית',             category: 'אדריכלות', size: 'medium' },
    { id: 4,  src: 'assets/heritage-historic.jpg', alt: 'חלונות הויטראז׳',           category: 'אדריכלות', size: 'small'  },
    { id: 5,  src: 'assets/heritage-historic.jpg', alt: 'ארון הקודש המקורי',         category: 'היסטורי',  size: 'medium' },
    { id: 6,  src: 'assets/heritage-historic.jpg', alt: 'מעמד סיום מסכת',            category: 'אירועים',  size: 'large'  },
    { id: 7,  src: 'assets/heritage-historic.jpg', alt: 'קריאת התורה',              category: 'תפילה',    size: 'medium' },
    { id: 8,  src: 'assets/heritage-historic.jpg', alt: 'אבן הפינה — תרצ״ו',        category: 'היסטורי',  size: 'small'  },
    { id: 9,  src: 'assets/heritage-historic.jpg', alt: 'הכיפה בלילה',              category: 'אדריכלות', size: 'medium' },
    { id: 10, src: 'assets/heritage-historic.jpg', alt: 'מקהלת בית הכנסת',          category: 'אירועים',  size: 'medium' },
    { id: 11, src: 'assets/heritage-historic.jpg', alt: 'ספרי תורה עתיקים',         category: 'היסטורי',  size: 'small'  },
    { id: 12, src: 'assets/heritage-historic.jpg', alt: 'תפילת נעילה ביום הכיפורים', category: 'תפילה',    size: 'medium' },
  ];

  const filteredImages = activeFilter === 'הכל'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const collageRows = React.useMemo(() => buildCollageRows(filteredImages), [activeFilter]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentIndex((i) => (i + 1) % filteredImages.length);
  const prevImage = () => setCurrentIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);

  // Keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') nextImage();   // LTR key, RTL UI -> next
      else if (e.key === 'ArrowRight') prevImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightboxOpen, filteredImages.length]);

  const categories = ['הכל', 'היסטורי', 'אירועים', 'תפילה', 'אדריכלות'];

  return (
    <div className="page-fade">
      <GalleryHero />

      {/* Intro Section — matches Heritage page visual language */}
      <section style={{ 
        padding: '100px 0', 
        background: 'var(--cream)',
        position: 'relative'
      }}>
        {/* Faint background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L50 90 M10 50 L90 50 M30 30 L70 30 M30 70 L70 70 M30 30 L30 70 M70 30 L70 70' stroke='%23b8923e' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }} />

        <div className="container">
          <Reveal>
            <div style={{
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                color: 'var(--gold)',
                marginBottom: 24,
                fontWeight: 400,
                textTransform: 'uppercase'
              }}>
                אלבום הקהילה לדורות
              </div>

              <p style={{ 
                fontSize: 21, 
                lineHeight: 1.85, 
                color: 'var(--green-ink)', 
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                התמונות הן שפה שקטה של זיכרון — דרכן אנו שומרים את הרגעים הקדושים, את הפנים שהאירו את ההיכל, ואת סיפורי הדורות שעיצבו את בית הכנסת הגדול.
              </p>

              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                כל תמונה באוסף שומרת רגע — תפילה, מעמד היסטורי, סיום מסכת או אור שנופל על הקשתות העתיקות. הגלריה הזו היא המורשת החיה של הקהילה, אסופת הזיכרונות של מי שעברו בשערי בית הכנסת מאז 1936 ועד היום.
              </p>

              {/* Decorative gold line */}
              <div style={{
                width: 80,
                height: 1,
                background: 'var(--gold)',
                margin: '48px auto 0',
                opacity: 0.4
              }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '80px 0 120px', background: 'var(--cream)', position: 'relative' }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><path d='M20 18v4M18 20h4' stroke='%23b8923e' stroke-width='0.5' opacity='0.4'/></svg>")`,
          backgroundSize: '40px 40px',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          {/* Filter pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
            marginBottom: 64,
          }}>
            {categories.map((cat) => {
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="gallery-filter-pill"
                  style={{
                    padding: '12px 32px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: active ? 500 : 400,
                    letterSpacing: '0.04em',
                    fontFamily: 'inherit',
                    background: active ? 'var(--green-ink)' : 'transparent',
                    color: active ? 'var(--cream)' : 'var(--green-ink)',
                    border: active ? '1px solid var(--green-ink)' : '1px solid var(--line)',
                    transition: 'all 320ms var(--ease)',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Dynamic Collage — full-width justified rows, anchor per row */}
          <div className="collage">
            {collageRows.map((row, ri) => (
              <div className="collage-row" key={ri} style={{ height: row.height }}>
                {row.items.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => openLightbox(img.idx)}
                    className="gallery-card collage-card"
                    style={{
                      flexGrow: img.weight,
                      flexShrink: 1,
                      flexBasis: 0,
                      minWidth: 0,
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 4,
                      boxShadow: '0 8px 28px rgba(10, 42, 44, 0.14)',
                      padding: 0,
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                        filter: 'saturate(0.92)',
                      }}
                    />
                    <div className="gallery-overlay" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(10, 42, 44, 0.85) 100%)',
                      opacity: 0,
                      transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 24,
                    }}>
                      <div style={{ textAlign: 'right', width: '100%' }}>
                        <div style={{
                          fontSize: 11,
                          letterSpacing: '0.32em',
                          color: 'var(--gold-light)',
                          fontWeight: 500,
                          marginBottom: 8,
                          textTransform: 'uppercase',
                        }}>
                          {img.category}
                        </div>
                        <div style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: 19,
                          fontWeight: 600,
                          color: '#fbf6e8',
                          lineHeight: 1.3,
                          transform: 'translateY(10px)',
                          transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                        }} className="gallery-title">
                          {img.alt}
                        </div>
                      </div>
                    </div>

                    {/* Expand icon */}
                    <div className="expand-icon" style={{
                      position: 'absolute',
                      top: 16, left: 16,
                      width: 40, height: 40,
                      borderRadius: '50%',
                      background: 'rgba(10, 42, 44, 0.7)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(212, 184, 140, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-light)',
                      opacity: 0,
                      transform: 'scale(0.8)',
                      transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
              לא נמצאו פריטים בקטגוריה זו.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(7, 19, 21, 0.96)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'lbFade 320ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            style={{
              position: 'absolute', top: 24, left: 24,
              width: 48, height: 48, borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(212, 184, 140, 0.3)',
              color: '#fbf6e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 250ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d4b88c'; e.currentTarget.style.background = 'rgba(212, 184, 140, 0.18)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 184, 140, 0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div style={{
            position: 'absolute', top: 36, right: 36,
            color: 'rgba(245, 238, 221, 0.5)',
            fontSize: 13, letterSpacing: '0.12em',
          }}>
            {String(currentIndex + 1).padStart(2, '0')} / {String(filteredImages.length).padStart(2, '0')}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="lb-nav"
            style={{ right: 24 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="lb-nav"
            style={{ left: 24 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 'min(92vw, 1200px)',
              maxHeight: '82vh',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              animation: 'lbZoom 480ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              style={{
                maxWidth: '100%',
                maxHeight: '72vh',
                objectFit: 'contain',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                border: '1px solid rgba(212, 184, 140, 0.2)',
              }}
            />
            <div style={{ textAlign: 'center', marginTop: 22, maxWidth: 640 }}>
              <div style={{
                fontSize: 11, letterSpacing: '0.32em',
                color: '#d4b88c', fontWeight: 500, marginBottom: 8,
              }}>
                {filteredImages[currentIndex].category}
              </div>
              <div style={{
                fontFamily: "'Frank Ruhl Libre', serif",
                fontSize: 22, fontWeight: 500,
                color: '#fbf6e8',
                lineHeight: 1.3,
              }}>
                {filteredImages[currentIndex].alt}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Filter pills hover */
        .gallery-filter-pill:hover {
          border-color: var(--gold) !important;
          color: var(--green-ink) !important;
        }
        .gallery-filter-pill[style*="green-ink"]:hover {
          background: var(--green-ink) !important;
          color: var(--cream) !important;
        }

        /* Gallery cards */
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(10, 42, 44, 0.24) !important;
        }
        .gallery-card:hover img {
          transform: scale(1.08);
          filter: saturate(1.05) brightness(0.95) !important;
        }
        .gallery-card:hover .gallery-overlay { opacity: 1; }
        .gallery-card:hover .gallery-title { transform: translateY(0) !important; }
        .gallery-card:hover .expand-icon { opacity: 1 !important; transform: scale(1) !important; }

        /* Lightbox */
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lbZoom { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        .lb-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 54px; height: 54px; border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(212, 184, 140, 0.25);
          color: #fbf6e8;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 280ms cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
        }
        .lb-nav:hover {
          background: rgba(212, 184, 140, 0.18);
          border-color: #d4b88c;
          transform: translateY(-50%) scale(1.06);
        }

        /* Dynamic collage layout */
        .collage {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .collage-row {
          display: flex;
          gap: 20px;
          align-items: stretch;
        }
        .collage-card { height: 100%; }

        /* Responsive */
        @media (max-width: 900px) {
          .collage-row { gap: 16px; }
          .collage { gap: 16px; }
        }
        @media (max-width: 640px) {
          .collage-row {
            flex-direction: column;
            height: auto !important;
            gap: 16px;
          }
          .collage-card {
            height: clamp(220px, 62vw, 340px);
            flex-basis: auto !important;
          }
          .lb-nav { width: 44px; height: 44px; }
        }
      `}</style>
    </div>
  );
};

/* ---------- Cinematic Hero Section (Heritage-style) ---------- */
const GalleryHero = () => {
  return (
    <section style={{
      minHeight: '70vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background image with Ken Burns zoom */}
      <div style={{
        position: 'absolute',
        inset: '-5%',
        backgroundImage: 'url(assets/heritage-historic.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.4) contrast(1.1)',
      }} className="gallery-hero-bg ken-burns" />

      {/* Cinematic overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(15, 58, 61, 0.85) 0%, rgba(10, 42, 44, 0.75) 100%)',
      }} />

      {/* Radial light effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(184, 146, 62, 0.12) 0%, transparent 60%)',
      }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: 900,
        padding: '0 32px'
      }}>
        <div style={{
          opacity: 0,
          animation: 'galleryHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
        }}>
          {/* Subtitle */}
          <div style={{
            fontSize: 11,
            letterSpacing: '0.4em',
            color: 'var(--gold-light)',
            fontWeight: 400,
            textTransform: 'uppercase',
            marginBottom: 28
          }}>
            ארכיון חזותי של הקהילה
          </div>

          {/* Main title */}
          <h1 style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(56px, 10vw, 96px)',
            fontWeight: 200,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '0 0 32px',
            color: 'var(--cream)',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            גלריה <span style={{ color: 'var(--gold-light)' }}>וזיכרון</span>
          </h1>

          {/* Diamond divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            margin: '0 auto 32px',
            maxWidth: 280
          }}>
            <div style={{
              flex: 1,
              height: 1,
              background: 'linear-gradient(to right, transparent, var(--gold-light))',
            }} />
            <div style={{
              width: 8,
              height: 8,
              background: 'var(--gold-light)',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 20px rgba(184, 146, 62, 0.6)'
            }} />
            <div style={{
              flex: 1,
              height: 1,
              background: 'linear-gradient(to left, transparent, var(--gold-light))',
            }} />
          </div>

          {/* Supporting paragraph */}
          <p style={{
            fontSize: 'clamp(17px, 2vw, 22px)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(250, 246, 239, 0.85)',
            maxWidth: 680,
            margin: '0 auto',
            letterSpacing: '0.01em'
          }}>
            מסע חזותי בחיי הקהילה והבניין ההיסטורי — תמונות, רגעי תפילה וזיכרונות מאז 1936 ועד ימינו
          </p>
        </div>
      </div>

      <style>{`
        @keyframes galleryHeroFade {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

window.Gallery = Gallery;
