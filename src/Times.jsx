// Prayer times page — museum-grade redesign
const Times = ({ navigate }) => {
  const [shabbatData, setShabbatData] = React.useState(null);
  const [hebDate, setHebDate] = React.useState({ parsha: '', date: '' });

  React.useEffect(() => {
    // Fetch Shabbat times and Hebrew date from HebcalAPI
    HebcalAPI.getShabbatTimes().then(function(data) {
      setShabbatData(data);
      
      // Extract parsha and date
      const parshaName = data.parsha ? data.parsha.replace(/^פרשת\s*/, '') : 'במדבר';
      const hebrewDate = data.hebrewDate || 'ב׳ סיון תשפ״ו';
      
      setHebDate({ parsha: parshaName, date: hebrewDate });
    });
  }, []);

  return (
    <div className="page-fade">
      <TimesHeroCinematic />

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
                סדר היום של בית הכנסת
              </div>

              <p style={{
                fontSize: 21,
                lineHeight: 1.85,
                color: 'var(--green-ink)',
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                שלוש תפילות ביום, שלוש פעמים בהן עוצרת הקהילה את שגרת היום — שחרית עם הזריחה, מנחה לעת בין הערביים, וערבית עם רדת החשכה.
              </p>

              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                סדר התפילות בבית הכנסת הגדול שומר על המסורת מאז 1936 — בכל ימות השבוע, בשבתות ובמועדים. זמני הדלקת נרות, יציאת השבת והזמנים ההלכתיים מתעדכנים אוטומטית מדי שבוע לפי לוח חדרה.
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

      {/* Times Table section */}
      <section style={{ padding: '80px 0 100px', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <TimesParshaHeader parsha={hebDate.parsha} date={hebDate.date} shabbatData={shabbatData} />
          <Reveal delay={150}>
            <TimesTable shabbatData={shabbatData} />
          </Reveal>
          <Reveal delay={300}>
            <ZmanimSubsection />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

/* ---------- Cinematic Hero Section (Heritage-style) ---------- */
const TimesHeroCinematic = () => {
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
      }} className="times-hero-bg ken-burns" />

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
          animation: 'timesHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
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
            סדר תפילות הקהילה
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
            זמני <span style={{ color: 'var(--gold-light)' }}>התפילות</span>
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
            שחרית, מנחה וערבית · זמני שבת ומועדים · עדכון שבועי לפי לוח חדרה
          </p>
        </div>
      </div>

      <style>{`
        @keyframes timesHeroFade {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

const TimesParshaHeader = ({ parsha, date, shabbatData }) => (
  <div style={{
    textAlign: 'center',
    marginBottom: 56,
    position: 'relative',
    paddingTop: 16,
  }}>
    {/* Decorative ornament — left & right (subtle, low opacity) */}
    <Ornament side="right" />
    <Ornament side="left" />

    <Reveal delay={120}>
      <div style={{
        fontFamily: 'Heebo, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(18px, 2vw, 22px)',
        color: '#3a3530',
        lineHeight: 1.7,
      }}>
        {shabbatData && shabbatData.isHoliday ? (
          <div>חג: <span style={{ fontWeight: 500 }}>{shabbatData.holiday}</span></div>
        ) : (
          <div>פרשת השבוע: <span style={{ fontWeight: 500 }}>{parsha || '…'}</span></div>
        )}
        <div style={{ marginTop: 4 }}>תאריך עברי: <span style={{ fontWeight: 500 }}>{date || '…'}</span></div>
      </div>
    </Reveal>
  </div>
);

// Decorative arabesque/mizrahi-style ornament (SVG, subtle)
const Ornament = ({ side }) => {
  const isLeft = side === 'left';
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      [isLeft ? 'left' : 'right']: 0,
      width: 'clamp(80px, 14vw, 160px)',
      height: '100%',
      opacity: 0.22,
      pointerEvents: 'none',
      transform: isLeft ? 'scaleX(-1)' : 'none',
    }} className="times-ornament">
      <svg viewBox="0 0 160 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none">
        <g stroke="#b8935a" strokeWidth="1" fill="none">
          {/* Stylized arabesque vine */}
          <path d="M30 10 C 30 40, 60 50, 60 80 C 60 110, 30 120, 30 150 C 30 175, 50 185, 70 190" />
          <path d="M40 30 C 60 35, 75 50, 70 70 C 65 88, 45 90, 35 105" />
          <path d="M40 130 C 60 135, 75 150, 70 170" />
          {/* Petals */}
          <ellipse cx="60" cy="65" rx="10" ry="5" transform="rotate(35 60 65)" />
          <ellipse cx="55" cy="100" rx="9" ry="4.5" transform="rotate(-30 55 100)" />
          <ellipse cx="65" cy="160" rx="10" ry="5" transform="rotate(40 65 160)" />
          {/* Star of David (small, very subtle) */}
          <path d="M90 95 l 8 14 l 16 0 l -8 14 l 8 14 l -16 0 l -8 14 l -8 -14 l -16 0 l 8 -14 l -8 -14 l 16 0 z"
                transform="translate(0 -5) scale(0.6) translate(20 50)"
                strokeWidth="0.8" />
          {/* Dots */}
          <circle cx="80" cy="40" r="2" fill="#b8935a" />
          <circle cx="50" cy="120" r="1.5" fill="#b8935a" />
          <circle cx="90" cy="175" r="2" fill="#b8935a" />
        </g>
      </svg>
      <style>{`
        @media (max-width: 700px) { .times-ornament { display: none; } }
      `}</style>
    </div>
  );
};

const TimesTable = ({ shabbatData }) => {
  // Get dynamic Shabbat times from API
  const candleLighting = shabbatData ? shabbatData.candleLighting : '19:03';
  const havdalah = shabbatData ? shabbatData.havdalah : '20:02';
  
  const TIMES_ROWS = [
    { prayer: 'שחרית',       weekday: '06:00 · 07:30', shabbat: '07:00 · 08:45' },
    { prayer: 'מנחה',        weekday: '19:15', shabbat: '18:15' },
    { prayer: 'ערבית',       weekday: '19:45 · 21:00', shabbat: '20:02' },
    { prayer: 'כניסת השבת',  weekday: '-', shabbat: candleLighting },
    { prayer: 'יציאת השבת',  weekday: '-', shabbat: havdalah },
  ];

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e5e5',
      overflow: 'hidden',
    }}>
      {/* Header row */}
      <div className="times-row times-head" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        background: '#f5f5f5',
        borderBottom: '1px solid #e5e5e5',
      }}>
        <HeadCell label>תפילה</HeadCell>
        <HeadCell>חול</HeadCell>
        <HeadCell>שבת</HeadCell>
      </div>

      {/* Body rows */}
      {TIMES_ROWS.map((r, i) => (
        <Reveal key={i} delay={i * 90} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderBottom: i < TIMES_ROWS.length - 1 ? '1px solid #e5e5e5' : 'none',
        }}>
          <BodyCell label>{r.prayer}</BodyCell>
          <BodyCell>{r.weekday}</BodyCell>
          <BodyCell>{r.shabbat}</BodyCell>
        </Reveal>
      ))}
    </div>
  );
};

const HeadCell = ({ children, label = false }) => (
  <div style={{
    padding: '20px 24px',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 'clamp(18px, 1.6vw, 22px)',
    fontWeight: 500,
    color: '#1c1410',
    textAlign: label ? 'right' : 'center',
    letterSpacing: '0.01em',
  }}>
    {children}
  </div>
);

const BodyCell = ({ children, label = false }) => (
  <div style={{
    padding: '20px 24px',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 'clamp(16px, 1.4vw, 20px)',
    fontWeight: label ? 500 : 400,
    color: '#1c1410',
    textAlign: label ? 'right' : 'center',
    letterSpacing: '0.02em',
  }}>
    {children}
  </div>
);

// Optional zmanim section below table — kept very quiet
const ZmanimSubsection = () => (
  <div style={{ marginTop: 80 }}>
    <div className="eyebrow" style={{ marginBottom: 22, textAlign: 'center' }}>זמני היום ההלכתיים</div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 1,
      background: '#e5e5e5',
      border: '1px solid #e5e5e5',
    }}>
      {ZMANIM.map((z, i) => (
        <div key={i} style={{
          background: '#fff',
          padding: '22px 20px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', letterSpacing: '0.04em', marginBottom: 6 }}>{z.label}</div>
          <div style={{ fontSize: 22, fontWeight: 400, color: '#1c1410', letterSpacing: '0.04em' }}>{z.time}</div>
        </div>
      ))}
    </div>
  </div>
);

window.Times = Times;
