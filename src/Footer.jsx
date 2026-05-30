// Footer — Cinematic museum/heritage style
const Footer = ({ navigate, currentPage }) => {
  const go = (id) => {
    navigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickNav = [
    { id: 'home',     label: 'דף הבית',           icon: 'home' },
    { id: 'about',    label: 'אודות',             icon: 'info' },
    { id: 'times',    label: 'זמני תפילה',         icon: 'clock' },
    { id: 'gallery',  label: 'גלריה וזיכרון',     icon: 'image' },
    { id: 'parasha',  label: 'פרשת השבוע',        icon: 'book' },
  ];
  const moreNav = [
    { id: 'heritage', label: 'מורשת ואדריכלות',   icon: 'columns' },
    { id: 'memorial', label: 'הנצחות וזיכרון',    icon: 'candle' },
    { id: 'contact',  label: 'צור קשר',          icon: 'phone' },
    { id: 'donate',   label: 'תרומות',           icon: 'heart' },
  ];
  const contactItems = [
    { icon: 'map-pin', text: 'הגיבורים 74, חדרה' },
    { icon: 'phone', text: SITE.phone },
    { icon: 'mail',  text: SITE.email },
    { icon: 'clock', text: SITE.officeHours },
  ];

  return (
    <footer style={{
      position: 'relative',
      marginTop: 120,
      background: '#0b2a2d',
      color: 'rgba(245, 238, 221, 0.78)',
      fontFamily: "'Heebo', 'Assistant', sans-serif",
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      {/* Atmospheric layered background */}
      <FooterAtmosphere />

      {/* Top transition — thin gold line + center ornament */}
      <FooterTopOrnament />

      <div className="footer-inner" style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1320,
        margin: '0 auto',
        padding: '64px 48px 19px',
      }}>
        {/* Quote removed */}
        {/* Main grid */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr 1fr 1.15fr',
          gap: 56,
          alignItems: 'start',
        }}>
          {/* Brand column (rightmost in RTL) */}
          <FooterBrand />

          {/* Quick nav */}
          <FooterNavColumn title="ניווט מהיר" items={quickNav} onGo={go} activeId={currentPage} />

          {/* More nav */}
          <FooterNavColumn title="עוד" items={moreNav} onGo={go} activeId={currentPage} />

          {/* Contact */}
          <FooterContact items={contactItems} />
        </div>
      </div>

      {/* Bottom bar */}
      <FooterBottomBar />

      <style>{`
        @keyframes footerFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .footer-inner > * {
          animation: footerFadeUp 1100ms var(--ease) both;
        }
        .footer-inner > *:nth-child(2) { animation-delay: 120ms; }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-inner { padding: 48px 24px 24px !important; }
          .footer-quote { margin-bottom: 48px !important; }
        }
      `}</style>
    </footer>
  );
};

/* ------------- Sub-components ------------- */

const FooterAtmosphere = () => (
  <React.Fragment>
    {/* Flat uniform base — no glow, no vignette */}
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0,
      background: '#0b2a2d',
    }} />

    {/* Subtle synagogue window silhouette — right (RTL leading edge) */}
    <svg viewBox="0 0 220 480" preserveAspectRatio="xMaxYMid slice" style={{
      position: 'absolute', top: 60, right: 0, height: '85%', width: 'min(280px, 22vw)',
      opacity: 0.11, zIndex: 0, pointerEvents: 'none',
    }}>
      <defs>
        <linearGradient id="winGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d4b88c" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#d4b88c" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <g stroke="url(#winGrad)" strokeWidth="1.2" fill="none">
        {/* Three gothic arches */}
        {[0, 70, 140].map((x, i) => (
          <g key={i} transform={`translate(${x}, 40)`}>
            <path d="M5 200 L5 80 Q35 0, 65 80 L65 200 Z"/>
            <line x1="35" y1="20" x2="35" y2="200" />
            <line x1="5"  y1="120" x2="65" y2="120" />
            <line x1="5"  y1="160" x2="65" y2="160" />
          </g>
        ))}
        {/* Sill */}
        <line x1="-10" y1="250" x2="240" y2="250" strokeWidth="0.8"/>
      </g>
    </svg>

    {/* Foliage line art — left (RTL trailing edge) */}
    <svg viewBox="0 0 200 400" preserveAspectRatio="xMinYMid slice" style={{
      position: 'absolute', top: 40, left: 0, height: '85%', width: 'min(260px, 20vw)',
      opacity: 0.13, zIndex: 0, pointerEvents: 'none',
    }}>
      <g stroke="#d4b88c" strokeWidth="0.9" fill="none" strokeLinecap="round">
        <path d="M-10 200 Q 40 180, 70 130 Q 95 90, 90 40" />
        <path d="M30 195 Q 50 175, 55 150" />
        <path d="M55 165 Q 75 155, 85 135" />
        <path d="M75 130 Q 95 120, 100 95" />
        {/* Leaves */}
        {[
          [40, 178, 8], [55, 152, 7], [75, 132, 9], [95, 95, 8],
          [85, 60, 9], [70, 110, 6], [30, 220, 8], [50, 250, 9],
          [60, 285, 7], [40, 310, 8], [70, 330, 9], [90, 360, 7],
        ].map(([cx, cy, r], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={r * 1.4} ry={r * 0.7}
            transform={`rotate(${(i * 37) % 90 - 45} ${cx} ${cy})`} />
        ))}
        <path d="M-10 270 Q 30 260, 50 230 Q 75 200, 80 165" />
        <path d="M-10 340 Q 40 320, 65 290" />
      </g>
    </svg>

    {/* Grain */}
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
      opacity: 0.035, mixBlendMode: 'overlay',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.78  0 0 0 0 0.55  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
    }} />
  </React.Fragment>
);

const FooterTopOrnament = () => (
  <div style={{
    position: 'relative',
    zIndex: 2,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Thin gold line */}
    <div style={{
      position: 'absolute',
      top: '50%', left: 0, right: 0,
      height: 1,
      background: 'linear-gradient(to right, transparent 0%, rgba(184, 146, 62, 0.5) 25%, rgba(212, 184, 140, 0.85) 50%, rgba(184, 146, 62, 0.5) 75%, transparent 100%)',
      boxShadow: '0 0 14px rgba(212, 184, 140, 0.35)',
    }} />
    {/* Center ornament removed */}
  </div>
);

const FooterBrand = () => (
  <div style={{ position: 'relative' }}>
    {/* Logo with glow */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 22,
    }}>
      <div style={{
        position: 'relative',
        width: 78, height: 78,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          position: 'absolute', inset: -8,
          background: 'radial-gradient(circle, rgba(212, 184, 140, 0.35) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }} />
        <img src="assets/logo.png" alt="לוגו בית הכנסת הגדול"
          style={{
            position: 'relative',
            width: 78, height: 78, objectFit: 'contain',
            filter: 'brightness(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
          }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'Frank Ruhl Libre', serif",
          fontSize: 'clamp(24px, 2.2vw, 30px)',
          fontWeight: 700,
          color: '#fbf6e8',
          letterSpacing: '-0.005em',
          lineHeight: 1.15,
          textShadow: '0 1px 12px rgba(0,0,0,0.4)',
        }}>
          בית הכנסת הגדול
        </div>
        <div style={{
          color: '#d4b88c',
          fontSize: 12,
          fontWeight: 400,
          letterSpacing: '0.32em',
          marginTop: 8,
        }}>
          חדרה  ·  תרצ״ו
        </div>
      </div>
    </div>

    {/* Short gold divider */}
    <div style={{
      width: 64, height: 1,
      background: 'linear-gradient(to right, rgba(212, 184, 140, 0.9), rgba(184, 146, 62, 0.2))',
      margin: '20px 0 22px',
    }} />

    <p style={{
      fontFamily: "'Heebo', sans-serif",
      fontSize: 14.5,
      fontWeight: 300,
      lineHeight: 1.85,
      color: 'rgba(245, 238, 221, 0.72)',
      margin: 0,
      maxWidth: 340,
    }}>
      מוסד היסטורי שאבן הפינה שלו הונחה בשנת 1936, ומאז משמש כמגדל אור של תורה ותפילה בלב חדרה. קהילה חמה, שיעורי תורה ותפילות בכל ימות השנה.
    </p>

    <div style={{
      marginTop: 22,
      fontFamily: "'Heebo', sans-serif",
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: '0.34em',
      color: 'rgba(212, 184, 140, 0.7)',
    }}>
      נוסד  ·  EST  ·  1936
    </div>
  </div>
);

const SectionHeading = ({ children }) => (
  <div style={{ marginBottom: 26 }}>
    <h4 style={{
      fontFamily: "'Frank Ruhl Libre', serif",
      fontSize: 20,
      fontWeight: 600,
      color: '#fbf6e8',
      margin: 0,
      letterSpacing: '0.01em',
    }}>
      {children}
    </h4>
    <div style={{
      width: 44, height: 1,
      background: 'linear-gradient(to right, #d4b88c, rgba(184, 146, 62, 0.2))',
      marginTop: 10,
      boxShadow: '0 0 6px rgba(212, 184, 140, 0.4)',
    }} />
  </div>
);

const FooterIconBox = ({ name, size = 17 }) => (
  <div style={{
    width: 38, height: 38,
    borderRadius: 10,
    background: 'linear-gradient(135deg, rgba(15, 58, 61, 0.95) 0%, rgba(8, 32, 34, 0.95) 100%)',
    border: '1px solid rgba(184, 146, 62, 0.28)',
    boxShadow: 'inset 0 1px 0 rgba(212, 184, 140, 0.08), 0 2px 6px rgba(0,0,0,0.25)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#d4b88c',
    flexShrink: 0,
    transition: 'border-color 320ms var(--ease), box-shadow 320ms var(--ease), color 320ms var(--ease), background 320ms var(--ease)',
  }}>
    <Icon name={name} size={size} stroke={1.5} />
  </div>
);

const FooterNavColumn = ({ title, items, onGo, activeId }) => (
  <div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
      {items.map((it, idx) => {
        const active = activeId === it.id;
        return (
        <li key={it.id} style={{
          borderTop: idx === 0 ? '1px solid rgba(184, 146, 62, 0.08)' : 'none',
          borderBottom: '1px solid rgba(184, 146, 62, 0.08)',
        }}>
          <button
            onClick={() => onGo(it.id)}
            className={active ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
            aria-current={active ? 'page' : undefined}
            style={{
              width: '100%',
              padding: '12px 0',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              color: active ? '#d4b88c' : 'rgba(245, 238, 221, 0.82)',
              fontSize: 15,
              fontWeight: active ? 400 : 300,
              fontFamily: 'inherit',
              transition: 'color 300ms var(--ease), padding-right 300ms var(--ease)',
              textAlign: 'right',
            }}
          >
            <FooterIconBox name={it.icon} />
            <span style={{ flex: 1, textAlign: 'right' }}>{it.label}</span>
          </button>
        </li>
      ); })}
    </ul>
    <style>{`
      .footer-nav-link--active > div:first-child {
        border-color: rgba(212, 184, 140, 0.7) !important;
        color: #f5eedd !important;
      }
      .footer-nav-link:hover {
        color: #fbf6e8 !important;
        padding-right: 6px !important;
      }
      .footer-nav-link:hover > div:first-child {
        border-color: rgba(212, 184, 140, 0.7) !important;
        box-shadow: inset 0 1px 0 rgba(212, 184, 140, 0.15), 0 0 14px rgba(212, 184, 140, 0.25), 0 2px 6px rgba(0,0,0,0.3) !important;
        color: #f5eedd !important;
      }
    `}</style>
  </div>
);

const FooterContact = ({ items }) => (
  <div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
      {items.map((it, idx) => (
        <li key={idx} style={{
          borderTop: idx === 0 ? '1px solid rgba(184, 146, 62, 0.08)' : 'none',
          borderBottom: '1px solid rgba(184, 146, 62, 0.08)',
        }}>
          <div
            className="footer-contact-item"
            style={{
              width: '100%',
              padding: '12px 0',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              color: 'rgba(245, 238, 221, 0.82)',
              fontSize: 15,
              fontWeight: 300,
              fontFamily: 'inherit',
              transition: 'color 300ms var(--ease), padding-right 300ms var(--ease)',
              textAlign: 'right',
            }}
          >
            <FooterIconBox name={it.icon} />
            <span style={{ flex: 1, textAlign: 'right' }}>{it.text}</span>
          </div>
        </li>
      ))}
    </ul>
    <style>{`
      .footer-contact-item:hover {
        color: #fbf6e8 !important;
        padding-right: 6px !important;
      }
      .footer-contact-item:hover > div:first-child {
        border-color: rgba(212, 184, 140, 0.7) !important;
        box-shadow: inset 0 1px 0 rgba(212, 184, 140, 0.15), 0 0 14px rgba(212, 184, 140, 0.25), 0 2px 6px rgba(0,0,0,0.3) !important;
        color: #f5eedd !important;
      }
    `}</style>
  </div>
);

const FooterBottomBar = () => (
  <div style={{
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid rgba(184, 146, 62, 0.16)',
    background: 'transparent',
  }}>
    <div className="footer-bottom-inner" style={{
      maxWidth: 1320,
      margin: '0 auto',
      padding: '16px 48px 17px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 24,
    }}>
      {/* Right: copyright */}
      <div style={{
        fontSize: 12.5,
        fontWeight: 300,
        color: 'rgba(245, 238, 221, 0.55)',
        letterSpacing: '0.02em',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'flex-start',
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d4b88c" strokeWidth="1.6">
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
        <span>© בית הכנסת הגדול חדרה תרצ״ו  ·  כל הזכויות שמורות  |  האתר פותח ועוצב על ידי מאיר ינקו</span>
      </div>

      {/* Center: tiny ornament */}
      <div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 3 L13.2 10.8 L21 12 L13.2 13.2 L12 21 L10.8 13.2 L3 12 L10.8 10.8 Z"
            fill="#b8923e" stroke="#d4b88c" strokeWidth="0.4" strokeLinejoin="round" opacity="0.85"/>
        </svg>
      </div>

      {/* Left: legal links */}
      <div className="footer-legal" style={{
        display: 'flex',
        gap: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 12.5,
        color: 'rgba(245, 238, 221, 0.55)',
        fontWeight: 300,
      }}>
        {['תקנון', 'פרטיות', 'נגישות'].map((label, i, arr) => (
          <React.Fragment key={label}>
            <a href="#" className="footer-legal-link" style={{
              padding: '4px 16px',
              transition: 'color 250ms var(--ease)',
              color: 'inherit',
            }}>{label}</a>
            {i < arr.length - 1 && (
              <span style={{ color: 'rgba(184, 146, 62, 0.35)' }}>|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
    <style>{`
      .footer-legal-link:hover { color: #d4b88c !important; }
      @media (max-width: 720px) {
        .footer-bottom-inner {
          grid-template-columns: 1fr !important;
          text-align: center !important;
          gap: 14px !important;
          padding: 20px 24px !important;
        }
        .footer-bottom-inner > div:nth-child(1),
        .footer-bottom-inner > div:nth-child(3) {
          justify-content: center !important;
        }
      }
    `}</style>
  </div>
);

const OrnamentLine = ({ width = 240, style = {} }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width,
    ...style,
  }}>
    <div style={{
      flex: 1, height: 1,
      background: 'linear-gradient(to right, transparent, rgba(212, 184, 140, 0.6))',
    }} />
    <svg width="9" height="9" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
      <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#d4b88c"/>
    </svg>
    <div style={{
      flex: 1, height: 1,
      background: 'linear-gradient(to left, transparent, rgba(212, 184, 140, 0.6))',
    }} />
  </div>
);

window.Footer = Footer;
