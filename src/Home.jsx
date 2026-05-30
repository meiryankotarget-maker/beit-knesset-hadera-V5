// Home page — museum-grade
const Home = ({ navigate }) => {
  return (
    <div className="page-fade">
      <Hero navigate={navigate} />
      <Intro />
      <TodayTimes navigate={navigate} />
      <AboutTeaser navigate={navigate} />
      <ParashaTeaser navigate={navigate} />
      <GalleryTeaser navigate={navigate} />
      <MemorialTeaser navigate={navigate} />
      <DonationBanner navigate={navigate} />
    </div>);

};

const Hero = ({ navigate }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'min(92vh, 880px)',
      overflow: 'hidden',
      color: '#fff',
      marginTop: -76,
      paddingTop: 76
    }}>
      <video
        autoPlay loop muted playsInline preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}>
        
        <source src="assets/hero.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,42,44,0.45) 0%, rgba(10,42,44,0.55) 50%, rgba(10,42,44,0.85) 100%)'
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        minHeight: 'min(92vh, 880px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '120px 32px 80px'
      }}>
        <div className="reveal in" style={{
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: '0.42em',
          color: 'var(--gold-light)',
          marginBottom: 32,
          opacity: 0,
          animation: 'fadeUp 1100ms var(--ease) 200ms forwards'
        }}>
          יחד שבטי ישראל  ·  חדרה  ·  מאז 1936
        </div>

        <h1 style={{
          fontFamily: 'Heebo, sans-serif',
          fontSize: 'clamp(48px, 8vw, 112px)',
          fontWeight: 200,
          lineHeight: 1.1,
          letterSpacing: '-0.035em',
          margin: '0 0 56px',
          color: 'var(--cream)',
          maxWidth: 1100,
          opacity: 0,
          animation: 'fadeUp 1200ms var(--ease) 380ms forwards'
        }}>
          בית הכנסת הגדול{' '}
          <span style={{ fontWeight: 300, color: 'var(--gold-light)', fontStyle: 'italic' }}>חדרה</span>
        </h1>

        <p style={{
          fontSize: 'clamp(17px, 1.6vw, 22px)',
          fontWeight: 300,
          letterSpacing: '0.01em',
          maxWidth: 540,
          margin: '0 0 56px',
          lineHeight: 1.6,
          color: 'rgba(250, 246, 239, 0.82)',
          opacity: 0,
          animation: 'fadeUp 1200ms var(--ease) 580ms forwards'
        }}>
          מגדל אור של תורה ותפילה בלב העיר —
          תשעים ושלוש שנים של קהילה, מסורת ואחדות.
        </p>

        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeUp 1200ms var(--ease) 760ms forwards'
        }}>
          <button className="btn btn-primary" onClick={() => navigate('times')} style={{
            background: 'var(--gold)',
            color: 'var(--green-ink)'
          }}>
            זמני התפילות לשבוע
          </button>
          <button className="btn btn-outline" onClick={() => navigate('heritage')}>
            המורשת שלנו
          </button>
        </div>

        {/* Bottom edge index */}
        <div style={{
          position: 'absolute',
          bottom: 28, right: 32,
          fontSize: 11,
          letterSpacing: '0.32em',
          color: 'rgba(250,246,239,0.5)',
          fontWeight: 400,
          display: 'flex',
          gap: 24,
          opacity: 0,
          animation: 'fadeUp 1200ms var(--ease) 940ms forwards'
        }} className="hero-meta">
          <span>EST · תרצ״ו</span>
          <span>·</span>
          <span>HADERA · IL</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) { .hero-meta { display: none !important; } }
      `}</style>
    </section>);

};

// Rabbi's words — relocated here, replacing the former intro paragraph
const Intro = () =>
<section style={{ padding: 'clamp(64px, 8vw, 100px) 0', background: 'var(--cream)' }}>
    <div className="container" style={{ maxWidth: 980 }}>
      <Reveal>
        <div className="eyebrow" style={{ marginBottom: 28 }}>פתח דבר</div>
      </Reveal>
      <WordReveal
      as="h2"
      text="בית של תפילה. בית של תורה. בית של אחדות לכל יהודי."
      step={90}
      style={{
        fontSize: 'clamp(28px, 3.6vw, 46px)',
        fontWeight: 300,
        letterSpacing: '-0.02em',
        lineHeight: 1.25,
        color: 'var(--green-ink)',
        margin: '0 0 clamp(40px, 5vw, 60px)'
      }} />

      <Reveal>
        <div className="intro-quote-band" style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 'clamp(28px, 4vw, 56px)',
        alignItems: 'start'
      }}>
          <div style={{
          fontSize: 11, letterSpacing: '0.4em',
          color: 'var(--gold)', fontWeight: 500,
          textTransform: 'uppercase',
          paddingTop: 14,
          whiteSpace: 'nowrap'
        }}>
            דברי הרב
          </div>

          <div>
            <blockquote style={{
            margin: 0, padding: 0,
            fontFamily: 'Frank Ruhl Libre, serif',
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            fontWeight: 500,
            fontStyle: 'italic',
            color: 'var(--green-ink)',
            lineHeight: 1.45,
            letterSpacing: '-0.005em',
            position: 'relative',
            maxWidth: 820
          }}>
              <span aria-hidden="true" style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: '2em',
              fontWeight: 400,
              color: 'var(--gold)',
              lineHeight: 0,
              position: 'absolute',
              top: '0.55em',
              right: '-0.5em',
              opacity: 0.45
            }}>״</span>
              ביתי בית תפילה יקרא לכל העמים — הפסוק הזה מנחה אותנו כבר יותר מתשעים שנה.
              כל אדם שנכנס לכאן — חש בבית.
            </blockquote>

            <div style={{
            marginTop: 'clamp(20px, 2.2vw, 28px)',
            display: 'flex', alignItems: 'center', gap: 16
          }}>
              <div style={{ width: 36, height: 1, background: 'var(--gold)' }} />
              <div>
                <div style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--green-ink)',
                letterSpacing: '0.005em'
              }}>
                  הרב בן־ציון (בנצי) נורדמן שליט״א
                </div>
                <div style={{
                fontSize: 10.5,
                fontWeight: 400,
                color: 'var(--muted-2)',
                letterSpacing: '0.28em',
                marginTop: 4,
                textTransform: 'uppercase'
              }}>
                  רב בית הכנסת
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>

    <style>{`
      @media (max-width: 960px) {
        .intro-quote-band { grid-template-columns: 1fr !important; gap: 18px !important; }
      }
    `}</style>
  </section>;


const TodayTimes = ({ navigate }) => {
  const today = PRAYER_WEEK[1];

  // Live Hebrew date — updates automatically each day, Jerusalem time, fully client-side.
  // This runtime's ICU ignores the Hebrew numbering system, so we convert day/year to
  // gematria manually and take only the (correct) weekday + month names from Intl.
  const hebToday = React.useMemo(() => {
    const fallback = `יום ${today.day}, ${today.date}`;
    try {
      const toGematria = (num) => {
        const ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
        const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
        const hundreds = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
        let n = num % 1000;
        let s = hundreds[Math.floor(n / 100)];
        n %= 100;
        if (n === 15) s += 'טו';
        else if (n === 16) s += 'טז';
        else { s += tens[Math.floor(n / 10)]; s += ones[n % 10]; }
        // add gershayim
        if (s.length === 1) return s + '׳';
        return s.slice(0, -1) + '״' + s.slice(-1);
      };

      const parts = new Intl.DateTimeFormat('he-u-ca-hebrew', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jerusalem'
      }).formatToParts(new Date());

      const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
      const weekday = get('weekday');
      let month = get('month').replace(/^ב/, '');
      // normalize plene (double-vav) spellings to match the rest of the site
      month = month.replace('סיוון', 'סיון').replace('מרחשוון', 'מרחשון').replace('חשוון', 'חשוון');
      const day = toGematria(parseInt(get('day'), 10));
      const year = toGematria(parseInt(get('year'), 10)); // 5786 → 786 → תשפ״ו

      if (!weekday || !month || !get('day')) return fallback;
      return `${weekday}, ${day} ב${month} ${year}`;
    } catch (e) {
      return fallback;
    }
  }, []);

  return (
    <section style={{
      background: 'var(--green-ink)',
      color: 'var(--cream)',
      padding: '64px 0',
      borderTop: '1px solid rgba(184,146,62,0.2)',
      borderBottom: '1px solid rgba(184,146,62,0.2)'
    }}>
      <div className="container">
        <Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gap: 48,
            alignItems: 'center'
          }} className="today-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold-light)', marginBottom: 10 }}>זמני תפילה ביום חול</div>
              <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>
                {hebToday}
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: 'rgba(184,146,62,0.18)',
              padding: 1
            }}>
              <TimeCell label="שחרית" times={today.shacharit} />
              <TimeCell label="מנחה" times={today.mincha} />
              <TimeCell label="ערבית" times={today.arvit} />
            </div>
            <button onClick={() => navigate('times')} className="link-underline" style={{ color: 'var(--gold-light)' }}>
              לוח מלא ←
            </button>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .today-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>);

};

const TimeCell = ({ label, times }) =>
<div style={{ background: 'var(--green-ink)', padding: '20px 24px', textAlign: 'center' }}>
    <div style={{ fontSize: 11, letterSpacing: '0.28em', color: 'var(--gold-light)', marginBottom: 8 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: '0.02em', color: 'var(--cream)' }}>
      {times.join(' · ')}
    </div>
  </div>;


const ParashaCard = () =>
<section style={{ padding: '120px 0 60px' }}>
    <div className="container">
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>שבת קרובה</div>
          <h2 style={{
          fontSize: 'clamp(48px, 7vw, 88px)',
          fontWeight: 200,
          letterSpacing: '-0.03em',
          margin: 0,
          color: 'var(--green-ink)'
        }}>
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>פרשת</span> במדבר
          </h2>
        </div>
      </Reveal>

      <div className="parasha-grid" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      maxWidth: 1100,
      margin: '0 auto'
    }}>
        <Reveal>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)' }}>
              <RowLine label="הדלקת נרות" value="19:03" />
              <RowLine label="קבלת שבת" value="18:45" />
              <RowLine label="שחרית של שבת" value="07:00 · 08:45" />
              <RowLine label="מנחה גדולה" value="13:20" />
              <RowLine label="שיעור בין מנחה לערבית" value="18:15" />
              <RowLine label="מנחה וסעודה שלישית" value="18:15" />
              <RowLine label="ערבית וצאת השבת" value="20:02" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div style={{
          padding: '48px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)'
        }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>השבת בקהילה</div>
            <p style={{
            fontSize: 19,
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'var(--green-ink)',
            margin: '0 0 24px',
            fontStyle: 'italic'
          }}>
              סעודה שלישית חגיגית לרגל סיום מסכת בבא מציעא, בהשתתפות הרב והקהל.
            </p>
            <p style={{ fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.75 }}>
              שבת מברכים חודש סיון. דרשת הרב לאחר מוסף בנושא "אחדות במחנה ישראל".
            </p>
          </div>
        </Reveal>
      </div>
    </div>
    <style>{`
      @media (max-width: 820px) {
        .parasha-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }
    `}</style>
  </section>;


const RowLine = ({ label, value }) =>
<div style={{
  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
  padding: '20px 0',
  borderBottom: '1px solid var(--line)'
}}>
    <span style={{ color: 'var(--muted)', fontSize: 14, letterSpacing: '0.04em' }}>{label}</span>
    <span style={{ fontSize: 20, fontWeight: 300, color: 'var(--green-ink)', letterSpacing: '0.02em' }}>{value}</span>
  </div>;


const EventsList = ({ navigate }) =>
<section style={{ padding: '120px 0', background: 'var(--cream-warm)' }}>
    <div className="container">
      <Reveal>
        <SectionHead
        eyebrow="אירועים"
        title="ביומן הקהילה"
        subtitle="חגים, הילולות, מופעי חזנות ושבתות מיוחדות."
        align="right" />
      
      </Reveal>

      <div style={{ borderTop: '1px solid var(--line)' }}>
        {EVENTS.map((e, i) =>
      <Reveal key={i} delay={i * 120}>
            <div style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr auto',
          gap: 32,
          padding: '36px 0',
          borderBottom: '1px solid var(--line)',
          alignItems: 'baseline',
          transition: 'padding 400ms var(--ease)'
        }}
        className="event-row">
          
              <div style={{
            fontSize: 13,
            letterSpacing: '0.18em',
            color: 'var(--gold)',
            fontWeight: 400
          }}>
                {e.date}
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.24em', color: 'var(--muted-2)', marginBottom: 8 }}>
                  {e.tag}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 300, letterSpacing: '-0.015em', margin: '0 0 10px' }}>
                  {e.title}
                </h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', margin: 0, maxWidth: 540 }}>
                  {e.desc}
                </p>
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', letterSpacing: '0.08em' }}>פרטים ←</div>
            </div>
          </Reveal>
      )}
      </div>
    </div>
    <style>{`
      .event-row:hover { padding-right: 8px !important; }
      @media (max-width: 720px) {
        .event-row { grid-template-columns: 1fr !important; gap: 8px !important; }
      }
    `}</style>
  </section>;


// About/Heritage section — redesigned per reference
const StickyHeritage = ({ navigate }) => {
  return (
    <section style={{ background: 'var(--cream-warm)', padding: '120px 0' }}>
      <div className="container">
        <div className="heritage-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center'
        }}>
          {/* Left: Image */}
          <Reveal blur>
            <div style={{
              width: '100%',
              height: 'min(70vh, 600px)',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(10, 42, 44, 0.15)'
            }}>
              <img
                src="assets/heritage-historic.jpg"
                alt="בית הכנסת הגדול חדרה"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'sepia(0.12) contrast(1.05)'
                }} />
              
            </div>
          </Reveal>

          {/* Right: Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'min(70vh, 600px)'
          }}>
            <Reveal>
              {/* Ornamental title */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
                  <GoldOrnament />
                  <h2 style={{
                    fontFamily: 'Heebo, sans-serif',
                    fontSize: 'clamp(28px, 3.2vw, 40px)',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    color: 'var(--green-ink)',
                    margin: 0
                  }}>
                    אודות בית הכנסת
                  </h2>
                  <GoldOrnament flip />
                </div>
                <GoldDivider width={70} style={{ margin: '0 auto', opacity: 0.5 }} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p style={{
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'var(--ink)',
                textAlign: 'center',
                margin: '0 0 32px',
                maxWidth: 480,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                בית הכנסת הגדול של חדרה הוא מרכז רוחני, קהילתי וחברתי,
                המשמש בית תפילה לכלל תושבי העיר והסביבה.
                <br /><br />
                אנו שואפים לחזק את הקשר בין אדם למקום, בין אדם לחברו
                ולתרום לבנייה קהילה חמה, תומכת ומאוחדת.
              </p>
            </Reveal>

            {/* Icon row */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 32,
              marginBottom: 32
            }} className="heritage-icons">
              <Reveal delay={200}><IconFeature icon="users" label="קהילת חמה" sublabel="בכולם משפחה" /></Reveal>
              <Reveal delay={300}><IconFeature icon="heart" label="פעילות מגוונת" sublabel="לכל הגילאים" /></Reveal>
              <Reveal delay={400}><IconFeature icon="image" label="גלריה ומורשת" sublabel="תמונות וזיכרונות" /></Reveal>
              <Reveal delay={500}><IconFeature icon="building" label="מרכז רוחני" sublabel="בלב העיר" /></Reveal>
            </div>

            <Reveal delay={400}>
              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('heritage')}
                  style={{
                    background: 'var(--green-ink)',
                    color: 'var(--cream)',
                    padding: '13px 32px',
                    fontSize: 14,
                    letterSpacing: '0.08em'
                  }}>
                  
                  קראו עוד אודותינו
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .heritage-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .heritage-icons { flex-wrap: wrap !important; gap: 20px !important; }
        }
      `}</style>
    </section>);

};

const GoldOrnament = ({ flip = false }) =>
<svg width="40" height="12" viewBox="0 0 40 12" fill="none" style={{ transform: flip ? 'scaleX(-1)' : 'none', opacity: 0.6 }}>
    <path d="M0 6 L 12 6 M 15 6 L 25 6" stroke="#b8935a" strokeWidth="1.2" />
    <circle cx="32" cy="6" r="2.5" fill="#b8935a" />
    <circle cx="37" cy="6" r="1.5" fill="#b8935a" />
  </svg>;


const IconFeature = ({ icon, label, sublabel }) => {
  const iconMap = {
    users: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7v-2c0-1.105.672-2.052 1.63-2.464M17 20v-2c0-.656-.126-1.283-.356-1.857m0 0a3 3 0 019 0M7 11v-1a3 3 0 013-3h0a3 3 0 013 3v1m-6 0h6" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    book: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    building: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: 52,
        height: 52,
        margin: '0 auto 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'rgba(184, 146, 62, 0.08)',
        border: '1px solid rgba(184, 146, 62, 0.2)'
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
          {iconMap[icon]}
        </svg>
      </div>
      <div style={{
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--green-ink)',
        marginBottom: 3,
        letterSpacing: '0.01em'
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 12,
        fontWeight: 300,
        color: 'var(--muted)',
        letterSpacing: '0.02em'
      }}>
        {sublabel}
      </div>
    </div>);

};

const DonationBanner = ({ navigate }) =>
<section className="donation-teaser" style={{
  padding: 'clamp(72px, 9vw, 110px) 0',
  background: 'var(--cream)',
  position: 'relative',
  overflow: 'hidden',
  color: 'var(--cream)'
}}>

    <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>
      <Reveal blur>
      <div className="donation-banner" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #0a2628 0%, #082022 100%)',
      borderRadius: 4,
      border: '1px solid rgba(184, 146, 62, 0.28)',
      padding: 'clamp(40px, 5.5vw, 80px) clamp(28px, 4.5vw, 72px)',
      boxShadow: '0 32px 80px rgba(10, 42, 44, 0.18)'
    }}>

    {/* Soft ambient gold glow, top — same vocabulary as gallery */}
    <div aria-hidden="true" style={{
    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
    width: '70%', height: 240,
    background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(184, 146, 62, 0.10) 0%, transparent 70%)',
    pointerEvents: 'none'
  }} />

    {/* Vertical running label — left edge */}
    <div aria-hidden="true" className="donation-vert-label" style={{
    position: 'absolute',
    left: 20, top: '50%',
    transform: 'translateY(-50%) rotate(180deg)',
    writingMode: 'vertical-rl',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 10,
    letterSpacing: '0.48em',
    color: 'var(--gold-light)',
    fontWeight: 500,
    textTransform: 'uppercase',
    opacity: 0.5
  }}>
      № 06  ·  PARTNERSHIP  ·  שותפות
    </div>

      {/* ── Header meta row ── */}
      <Reveal>
        <div className="donation-meta-row" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'clamp(40px, 5vw, 64px)',
        paddingBottom: 18,
        borderBottom: '1px solid rgba(184,146,62,0.22)'
      }}>
          <div style={{
          fontSize: 11, letterSpacing: '0.42em',
          color: 'var(--gold-light)', fontWeight: 500, textTransform: 'uppercase'
        }}>
            שותפות בקיום בית הכנסת
          </div>
          <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          fontSize: 11, letterSpacing: '0.28em',
          color: 'rgba(245, 238, 221, 0.5)', fontWeight: 400, textTransform: 'uppercase'
        }}>
            <span>תרומה · הקדשה · קרן זיכרון</span>
            <span style={{ color: 'var(--gold-light)' }}>·</span>
            <span style={{ color: 'var(--cream)' }}>קבלה לצרכי מס · סעיף 46</span>
          </div>
        </div>
      </Reveal>

      {/* ── Main asymmetric grid: 7fr title / 5fr tier list ── */}
      <div className="donation-stage" style={{
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'start'
    }}>

        {/* RIGHT (primary, 7fr) — title + body + actions */}
        <div style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
            fontSize: 11, letterSpacing: '0.32em',
            color: 'var(--gold-light)', fontWeight: 500,
            textTransform: 'uppercase', marginBottom: 18
          }}>
              תרומה  ·  שותפות
            </div>
          </Reveal>

          {/* Display: multi-layer title — same vocabulary as other sections */}
          <Reveal delay={100}>
            <h2 className="donation-display" style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(44px, 6.2vw, 88px)',
            fontWeight: 200,
            color: 'var(--cream)',
            margin: 0,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            textWrap: 'balance'
          }}>
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: '0.28em',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--gold-light)',
              letterSpacing: '0.04em',
              display: 'block',
              marginBottom: '0.5em',
              opacity: 0.9
            }}>
                בית הכנסת מתקיים
              </span>
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontWeight: 500,
              fontStyle: 'italic',
              color: 'var(--gold-light)'
            }}>בזכות הקהילה</span>
            </h2>
          </Reveal>

          {/* Diamond underline — shared signature */}
          <Reveal delay={180}>
            <div style={{
            marginTop: 22,
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 220
          }}>
              <div style={{ flex: 1, height: 1, background: 'var(--gold-light)' }} />
              <div style={{
              width: 6, height: 6, background: 'var(--gold-light)',
              transform: 'rotate(45deg)'
            }} />
              <div style={{ width: 24, height: 1, background: 'rgba(212,184,140,0.35)' }} />
            </div>
          </Reveal>

          {/* Body */}
          <Reveal delay={260}>
            <div style={{ marginTop: 'clamp(32px, 4vw, 48px)', maxWidth: 600 }}>
              <div style={{
              fontSize: 11, letterSpacing: '0.32em',
              color: 'var(--gold-light)', fontWeight: 500,
              textTransform: 'uppercase', marginBottom: 14
            }}>
                מה התרומה מאפשרת  ·  בקצרה
              </div>

              <p style={{
              fontSize: 'clamp(17px, 1.4vw, 19.5px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(250, 246, 239, 0.92)',
              margin: '0 0 16px',
              letterSpacing: '-0.005em'
            }}>
                כל תרומה — קטנה כגדולה — מחזיקה את בית התורה והתפילה הזה.
              </p>

              <p style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(245, 238, 221, 0.62)',
              margin: 0
            }}>
                התרומות מאפשרות לקיים תפילות ושיעורי תורה, להחזיק את הבניין ההיסטורי,
                ולחלק חבילות חג למשפחות נזקקות בקהילה.
              </p>
            </div>
          </Reveal>

          {/* Actions — primary gold CTA + ghost */}
          <Reveal delay={420}>
            <div style={{
            display: 'flex', alignItems: 'center',
            gap: 28, flexWrap: 'wrap',
            marginTop: 'clamp(36px, 4.5vw, 56px)',
            paddingTop: 'clamp(28px, 3.5vw, 40px)',
            borderTop: '1px solid rgba(212,184,140,0.28)',
            maxWidth: 600
          }}>
              <button onClick={() => navigate('donate')} className="donation-primary-cta">
                <span>תרומה לבית הכנסת</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                </svg>
              </button>

              <button onClick={() => navigate('donate')} className="donation-ghost">
                הקדשה לזכר נשמה
                <span aria-hidden="true" style={{ opacity: 0.6 }}>←</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* LEFT (aux, 5fr) — tier list as editorial price list */}
        <div style={{ position: 'relative' }}>
          <Reveal blur delay={140}>
            <div className="donation-tiers" style={{
            position: 'relative'
          }}>
              {/* Offset gold-line frame — shared signature */}
              <div aria-hidden="true" style={{
              position: 'absolute',
              inset: '-14px 18px 18px -14px',
              border: '1px solid rgba(184,146,62,0.45)',
              pointerEvents: 'none'
            }} />

              <div style={{
              position: 'relative',
              padding: 'clamp(24px, 3vw, 36px) clamp(24px, 3vw, 32px)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(212, 184, 140, 0.22)'
            }}>
                <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'baseline', gap: 16,
                marginBottom: 22,
                paddingBottom: 14,
                borderBottom: '1px solid rgba(212, 184, 140, 0.22)'
              }}>
                  <div style={{
                  fontSize: 11, letterSpacing: '0.32em',
                  color: 'var(--gold-light)', fontWeight: 500,
                  textTransform: 'uppercase'
                }}>
                    סכומי תרומה
                  </div>
                  <div style={{
                  fontSize: 10.5, letterSpacing: '0.28em',
                  color: 'rgba(245, 238, 221, 0.45)',
                  textTransform: 'uppercase'
                }}>
                    ₪ ILS
                  </div>
                </div>

                {DONATION_TIERS.slice(0, 4).map((tier, i) =>
              <button
                key={i}
                onClick={() => navigate('donate')}
                className="donation-tier-row">

                    <div className="donation-tier-amount">
                      <span style={{
                    fontFamily: 'Heebo, sans-serif',
                    fontSize: 13,
                    fontWeight: 400,
                    color: 'rgba(212, 184, 140, 0.7)',
                    marginLeft: 4
                  }}>₪</span>
                      {tier.amount}
                    </div>
                    <div className="donation-tier-text">
                      <div className="donation-tier-label">{tier.label}</div>
                      <div className="donation-tier-desc">{tier.desc}</div>
                    </div>
                    <div className="donation-tier-arrow" aria-hidden="true">←</div>
                  </button>
              )}
              </div>

              {/* Caption — museum-plaque style */}
              <div style={{
              marginTop: 14,
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', gap: 16,
              fontSize: 10.5, letterSpacing: '0.3em',
              color: 'rgba(245, 238, 221, 0.5)', textTransform: 'uppercase'
            }}>
                <span>אפשר לבחור סכום חופשי</span>
                <span style={{ color: 'var(--gold-light)' }}>בעמוד התרומה</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      </div>
      </Reveal>
    </div>

    <style>{`
      .donation-primary-cta {
        display: inline-flex; align-items: center; gap: 14px;
        padding: 14px 28px;
        background: var(--gold);
        color: var(--green-ink);
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.16em;
        cursor: pointer;
        transition: background 320ms var(--ease), gap 320ms var(--ease), transform 320ms var(--ease), box-shadow 320ms var(--ease);
        box-shadow: 0 6px 24px rgba(184, 146, 62, 0.28);
      }
      .donation-primary-cta:hover {
        background: var(--gold-light);
        gap: 22px;
        transform: translateY(-1px);
        box-shadow: 0 10px 32px rgba(184, 146, 62, 0.36);
      }
      .donation-ghost {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 0;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.18em;
        color: rgba(245, 238, 221, 0.6);
        cursor: pointer;
        transition: color 280ms var(--ease), gap 280ms var(--ease);
      }
      .donation-ghost:hover { color: var(--gold-light); gap: 16px; }

      .donation-tier-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 18px;
        align-items: center;
        padding: 18px 4px;
        border: none;
        background: transparent;
        border-bottom: 1px solid rgba(212, 184, 140, 0.16);
        width: 100%;
        text-align: right;
        cursor: pointer;
        font-family: inherit;
        transition: padding 320ms var(--ease), background 320ms var(--ease);
      }
      .donation-tier-row:last-child { border-bottom: none; }
      .donation-tier-row:hover {
        padding-right: 12px;
        background: rgba(212, 184, 140, 0.04);
      }
      .donation-tier-row:hover .donation-tier-arrow {
        color: var(--gold-light);
        transform: translateX(-4px);
      }
      .donation-tier-amount {
        font-family: 'Frank Ruhl Libre', serif;
        font-size: 30px;
        font-weight: 500;
        color: var(--cream);
        letter-spacing: -0.015em;
        line-height: 1;
        min-width: 72px;
      }
      .donation-tier-text { min-width: 0; }
      .donation-tier-label {
        font-size: 13.5px;
        font-weight: 500;
        color: var(--cream);
        letter-spacing: 0.005em;
        margin-bottom: 3px;
      }
      .donation-tier-desc {
        font-size: 12px;
        font-weight: 300;
        color: rgba(245, 238, 221, 0.55);
        line-height: 1.45;
      }
      .donation-tier-arrow {
        font-size: 14px;
        color: rgba(212, 184, 140, 0.45);
        transition: color 280ms var(--ease), transform 280ms var(--ease);
      }

      @media (max-width: 960px) {
        .donation-vert-label { display: none; }
        .donation-stage { grid-template-columns: 1fr !important; gap: 36px !important; }
      }
      @media (max-width: 640px) {
        .donation-banner { padding: 32px 22px !important; }
        .donation-meta-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        .donation-tier-amount { font-size: 26px !important; min-width: 60px !important; }
      }
    `}</style>
  </section>;


/* ───────── About teaser ───────── */
/* ───────── About teaser — editorial, asymmetrical, museum-grade ───────── */
const AboutTeaser = ({ navigate }) =>
<section className="about-teaser" style={{
  padding: 'clamp(72px, 9vw, 110px) 0',
  background: 'var(--cream-warm)',
  position: 'relative',
  overflow: 'hidden'
}}>
    {/* Vertical running label — far right edge this time, for compositional variety */}
    <div aria-hidden="true" className="about-vert-label" style={{
    position: 'absolute',
    right: 24, top: '50%',
    transform: 'translateY(-50%) rotate(0deg)',
    writingMode: 'vertical-rl',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 10,
    letterSpacing: '0.48em',
    color: 'var(--gold)',
    fontWeight: 500,
    textTransform: 'uppercase',
    opacity: 0.55
  }}>
      № 02  ·  COMMUNITY STORY  ·  EST 1936
    </div>

    <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>

      {/* ── Header row — mirrors parasha rhythm ── */}
      <Reveal>
        <div className="about-meta-row" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'clamp(40px, 5vw, 64px)',
        paddingBottom: 18,
        borderBottom: '1px solid rgba(184,146,62,0.18)'
      }}>
          <div style={{
          fontSize: 11, letterSpacing: '0.42em',
          color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase'
        }}>
            סיפור הקהילה
          </div>
          <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          fontSize: 11, letterSpacing: '0.28em',
          color: 'var(--muted-2)', fontWeight: 400, textTransform: 'uppercase'
        }}>
            <span>תקופה ראשונה</span>
            <span style={{ color: 'var(--gold)' }}>·</span>
            <span style={{ color: 'var(--green-ink)' }}>תרצ״ו — היום</span>
          </div>
        </div>
      </Reveal>

      {/* ── Main asymmetric grid: 7fr text / 5fr image — same vocabulary as parasha ── */}
      <div className="about-stage" style={{
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'start'
    }}>

        {/* RIGHT (text) */}
        <div style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
            fontSize: 11, letterSpacing: '0.32em',
            color: 'var(--gold)', fontWeight: 500,
            textTransform: 'uppercase', marginBottom: 18
          }}>
              מורשת  ·  קהילה  ·  תפילה
            </div>
          </Reveal>

          {/* Year as typographic anchor — sibling-of-name composition to parasha */}
          <Reveal delay={100}>
            <div style={{ position: 'relative' }}>
              <span style={{
              display: 'block',
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: 'clamp(14px, 1vw, 16px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--gold)',
              letterSpacing: '0.04em',
              marginBottom: 6,
              opacity: 0.9
            }}>
                הנחת אבן הפינה  ·  תרצ״ו
              </span>
              <h2 className="about-year" style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: 'clamp(64px, 9vw, 132px)',
              fontWeight: 500,
              color: 'var(--green-ink)',
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              fontFeatureSettings: '"lnum"'
            }}>
                1936
              </h2>
            </div>
          </Reveal>

          {/* Same slim diamond underline — visual signature shared with parasha */}
          <Reveal delay={180}>
            <div style={{
            marginTop: 22,
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 220
          }}>
              <div style={{ flex: 1, height: 1, background: 'var(--gold)' }} />
              <div style={{
              width: 6, height: 6, background: 'var(--gold)',
              transform: 'rotate(45deg)'
            }} />
              <div style={{ width: 24, height: 1, background: 'rgba(184,146,62,0.35)' }} />
            </div>
          </Reveal>

          {/* Sub-eyebrow + body — mirrors parasha "דבר הרב · בקצרה" rhythm */}
          <Reveal delay={260}>
            <div style={{ marginTop: 'clamp(32px, 4vw, 48px)', maxWidth: 600 }}>
              <div style={{
              fontSize: 11, letterSpacing: '0.32em',
              color: 'var(--gold)', fontWeight: 500,
              textTransform: 'uppercase', marginBottom: 14
            }}>
                תשעים שנה  ·  בקצרה
              </div>

              <p className="about-lede" style={{
              fontSize: 'clamp(17px, 1.4vw, 19.5px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--green-ink)',
              margin: '0 0 16px',
              letterSpacing: '-0.005em'
            }}>
                מאז שהונחה אבן הפינה ב־1936, בית הכנסת הגדול בחדרה משמש מגדל אור של תורה ותפילה בלב העיר.
              </p>

              <p style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--muted)',
              margin: 0
            }}>
                קהילה חמה ופתוחה — בית שכל יהודי מוצא בו מקום. אנו ממשיכים את חזון המייסדים:
                להחזיק בית של תורה, לפתוח שערים לכל מבקש, ולהעביר את המסורת מדור לדור.
              </p>
            </div>
          </Reveal>

          {/* Actions — identical vocabulary to parasha */}
          <Reveal delay={340}>
            <div style={{
            display: 'flex', alignItems: 'center',
            gap: 28, flexWrap: 'wrap',
            marginTop: 'clamp(32px, 4vw, 48px)',
            paddingTop: 'clamp(28px, 3.5vw, 40px)',
            borderTop: '1px solid rgba(184,146,62,0.25)',
            maxWidth: 600
          }}>
              <button onClick={() => navigate('about')} className="about-cta">
                <span>אודות הקהילה</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </button>

              <button onClick={() => navigate('heritage')} className="about-ghost">
                מורשת ואדריכלות
                <span aria-hidden="true" style={{ opacity: 0.6 }}>←</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* LEFT — image, square aspect for compositional variety vs parasha's portrait */}
        <div style={{ position: 'relative' }}>
          <Reveal blur delay={140}>
            <figure className="about-figure" style={{
            margin: 0,
            position: 'relative'
          }}>
              {/* Offset gold-line frame — same vocabulary as parasha */}
              <div aria-hidden="true" style={{
              position: 'absolute',
              inset: '-14px 18px 18px -14px',
              border: '1px solid rgba(184,146,62,0.45)',
              pointerEvents: 'none'
            }} />

              <div className="about-img-wrap" style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              background: 'var(--green-ink)'
            }}>
                <img
                src="assets/heritage-historic.jpg"
                alt="בית הכנסת הגדול חדרה — תצלום היסטורי"
                className="about-img"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'sepia(0.18) saturate(0.85) contrast(1.04)',
                  transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                }} />
              </div>

              <figcaption style={{
              marginTop: 14,
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', gap: 16,
              fontSize: 10.5, letterSpacing: '0.3em',
              color: 'var(--muted-2)', textTransform: 'uppercase'
            }}>
                <span>בית הכנסת הגדול</span>
                <span style={{ color: 'var(--gold)' }}>תרצ״ו · ארכיון</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      {/* Rabbi pull-quote band relocated to the Intro section near the top */}
    </div>

    <style>{`
      .about-figure:hover .about-img {
        transform: scale(1.04);
        filter: sepia(0.1) saturate(0.95) contrast(1.06) !important;
      }
      .about-cta {
        display: inline-flex; align-items: center; gap: 14px;
        padding: 0 0 10px;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.16em;
        color: var(--green-ink);
        border-bottom: 1px solid var(--green-ink);
        cursor: pointer;
        transition: color 320ms var(--ease), border-color 320ms var(--ease), gap 320ms var(--ease);
      }
      .about-cta:hover {
        color: var(--gold);
        border-color: var(--gold);
        gap: 22px;
      }
      .about-ghost {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 0;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.18em;
        color: var(--muted);
        cursor: pointer;
        transition: color 280ms var(--ease), gap 280ms var(--ease);
      }
      .about-ghost:hover { color: var(--gold); gap: 16px; }

      @media (max-width: 960px) {
        .about-vert-label { display: none; }
        .about-stage { grid-template-columns: 1fr !important; gap: 32px !important; }
        .about-stage > div:last-child { order: -1; max-width: 420px; }
        .about-quote-band { grid-template-columns: 1fr !important; gap: 20px !important; }
      }
      @media (max-width: 640px) {
        .about-meta-row { flex-direction: column; align-items: flex-start; gap: 10px; }
      }
    `}</style>
  </section>;


/* ───────── Parasha teaser — editorial, asymmetrical, museum-grade ───────── */
const ParashaTeaser = ({ navigate }) => {
  const [live, setLive] = React.useState(null);
  React.useEffect(() => {
    let alive = true;
    if (window.HebcalAPI && HebcalAPI.getShabbatTimes) {
      HebcalAPI.getShabbatTimes()
        .then(function (d) { if (alive) setLive(d); })
        .catch(function () {});
    }
    return function () { alive = false; };
  }, []);

  // Current week — Behaalotcha. The dvar text is written manually each week;
  // the parsha name + Torah/Haftarah readings auto-update from Hebcal when available.
  const parsha = (live && live.parsha) ? live.parsha.replace(/^פרשת\s*/, '') : 'בהעלותך';
  const torahReading = (live && live.torahReading) || 'במדבר ח · א — יב · טז';
  const haftarah = (live && live.haftarah) || 'זכריה ב · יד — ד · ז';

  return (
<section className="parasha-teaser" style={{
  padding: 'clamp(72px, 9vw, 110px) 0',
  background: 'var(--cream)',
  position: 'relative',
  overflow: 'hidden'
}}>
    {/* Vertical running label — far left edge, museum signage feel */}
    <div aria-hidden="true" className="parasha-vert-label" style={{
    position: 'absolute',
    left: 24, top: '50%',
    transform: 'translateY(-50%) rotate(180deg)',
    writingMode: 'vertical-rl',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 10,
    letterSpacing: '0.48em',
    color: 'var(--gold)',
    fontWeight: 500,
    textTransform: 'uppercase',
    opacity: 0.55
  }}>
      № 36  ·  PARASHAT HASHAVUA  ·  תשפ״ו
    </div>

    <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>

      {/* ── Header row: eyebrow + week badge ── */}
      <Reveal>
        <div className="parasha-meta-row" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'clamp(40px, 5vw, 64px)',
        paddingBottom: 18,
        borderBottom: '1px solid rgba(184,146,62,0.18)'
      }}>
          <div style={{
          fontSize: 11, letterSpacing: '0.42em',
          color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase'
        }}>
            דבר תורה לשבת
          </div>
          <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          fontSize: 11, letterSpacing: '0.28em',
          color: 'var(--muted-2)', fontWeight: 400, textTransform: 'uppercase'
        }}>
            <span>שבת {parsha} · תשפ״ו</span>
            <span style={{ color: 'var(--gold)' }}>·</span>
            <span style={{ color: 'var(--green-ink)' }}>36 / 54</span>
          </div>
        </div>
      </Reveal>

      {/* ── Main asymmetrical grid: 7 / 5 columns ── */}
      <div className="parasha-stage" style={{
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'start'
    }}>

        {/* RIGHT (visual primary in RTL) — title + body + meta */}
        <div style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
            fontSize: 11, letterSpacing: '0.32em',
            color: 'var(--gold)', fontWeight: 500,
            textTransform: 'uppercase', marginBottom: 18
          }}>
              פרשת השבוע  ·  קריאה
            </div>
          </Reveal>

          {/* Display title — sized to comfortably fit long names like "אחרי מות-קדושים" */}
          <Reveal delay={100}>
            <h2 className="parasha-display" style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(44px, 6.2vw, 88px)',
            fontWeight: 200,
            color: 'var(--green-ink)',
            margin: 0,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            textWrap: 'balance'
          }}>
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: '0.32em',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--gold)',
              letterSpacing: '0.04em',
              display: 'block',
              marginBottom: '0.5em',
              opacity: 0.85
            }}>
                פרשת
              </span>
              {parsha}
            </h2>
          </Reveal>

          {/* Slim asymmetric underline */}
          <Reveal delay={180}>
            <div style={{
            marginTop: 22,
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 220
          }}>
              <div style={{ flex: 1, height: 1, background: 'var(--gold)' }} />
              <div style={{
              width: 6, height: 6, background: 'var(--gold)',
              transform: 'rotate(45deg)'
            }} />
              <div style={{ width: 24, height: 1, background: 'rgba(184,146,62,0.35)' }} />
            </div>
          </Reveal>

          {/* ── דבר הרב · בקצרה — replaces the verse ── */}
          <Reveal delay={260}>
            <div style={{ marginTop: 'clamp(32px, 4vw, 48px)', maxWidth: 600 }}>
              <div style={{
              fontSize: 11, letterSpacing: '0.32em',
              color: 'var(--gold)', fontWeight: 500,
              textTransform: 'uppercase', marginBottom: 14
            }}>
                דבר הרב  ·  בקצרה
              </div>

              <p className="parasha-lede" style={{
              fontSize: 'clamp(17px, 1.4vw, 19.5px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--green-ink)',
              margin: '0 0 16px',
              letterSpacing: '-0.005em'
            }}>
                הציווי "בהעלותך את הנרות" מלמד שעל הכהן להחזיק את האש אל הפתילה עד שתהא שלהבת עולה מאליה — וזהו סוד החינוך וההארה.
              </p>

              <p style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--muted)',
              margin: 0
            }}>
                דרשה שבועית של הרב בן־ציון (בנצי) נורדמן שליט״א — על אמנות ההדלקה, על הסבלנות שבליווי הזולת,
                ועל פסח שני שמלמדנו שתמיד נותר פתח לחזור.
              </p>
            </div>
          </Reveal>

          {/* ── Meta list: קריאת התורה / הפטרה / דרשת הרב ── */}
          <Reveal delay={340}>
            <div style={{
            marginTop: 'clamp(28px, 3.5vw, 40px)',
            maxWidth: 600,
            borderTop: '1px solid rgba(184,146,62,0.25)'
          }}>
              <ParashaMeta label="קריאת התורה" value={torahReading} />
              <ParashaMeta label="הפטרה" value={haftarah} />
              <ParashaMeta label="דרשת הרב" value="לאחר תפילת מוסף" last />
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal delay={420}>
            <div style={{
            display: 'flex', alignItems: 'center',
            gap: 28, flexWrap: 'wrap',
            marginTop: 'clamp(28px, 3.5vw, 40px)'
          }}>
              <button onClick={() => navigate('parasha', 'behaalotcha')} className="parasha-cta">
                <span>קראו את הדרשה</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </button>

              <button onClick={() => navigate('parasha')} className="parasha-ghost">
                כל הפרשיות
                <span aria-hidden="true" style={{ opacity: 0.6 }}>←</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* LEFT — image column, tall portrait */}
        <div style={{ position: 'relative' }}>
          <Reveal blur delay={140}>
            <figure className="parasha-figure" style={{
            margin: 0,
            position: 'relative'
          }}>
              {/* Floating gold-line frame, offset behind image */}
              <div aria-hidden="true" style={{
              position: 'absolute',
              inset: '-14px -14px 18px 18px',
              border: '1px solid rgba(184,146,62,0.45)',
              pointerEvents: 'none'
            }} />

              <div className="parasha-img-wrap" style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              background: 'var(--green-ink)'
            }}>
                <img
                src="assets/heritage-historic.jpg"
                alt="בית הכנסת הגדול חדרה — תצלום היסטורי"
                className="parasha-img"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'sepia(0.18) saturate(0.85) contrast(1.04)',
                  transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                }} />
              </div>

              {/* Museum-plaque caption */}
              <figcaption style={{
              marginTop: 14,
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', gap: 16,
              fontSize: 10.5, letterSpacing: '0.3em',
              color: 'var(--muted-2)', textTransform: 'uppercase'
            }}>
                <span>תצלום הקהילה</span>
                <span style={{ color: 'var(--gold)' }}>תרצ״ו · ארכיון</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </div>

    <style>{`
      .parasha-figure:hover .parasha-img {
        transform: scale(1.04);
        filter: sepia(0.1) saturate(0.95) contrast(1.06) !important;
      }
      .parasha-cta {
        display: inline-flex; align-items: center; gap: 14px;
        padding: 0 0 10px;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.16em;
        color: var(--green-ink);
        border-bottom: 1px solid var(--green-ink);
        cursor: pointer;
        transition: color 320ms var(--ease), border-color 320ms var(--ease), gap 320ms var(--ease);
      }
      .parasha-cta:hover {
        color: var(--gold);
        border-color: var(--gold);
        gap: 22px;
      }
      .parasha-ghost {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 0;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.18em;
        color: var(--muted);
        cursor: pointer;
        transition: color 280ms var(--ease), gap 280ms var(--ease);
      }
      .parasha-ghost:hover { color: var(--gold); gap: 16px; }

      @media (max-width: 960px) {
        .parasha-vert-label { display: none; }
        .parasha-stage { grid-template-columns: 1fr !important; gap: 32px !important; }
        .parasha-stage > div:last-child { order: -1; max-width: 420px; }
      }
      @media (max-width: 640px) {
        .parasha-meta-row { flex-direction: column; align-items: flex-start; gap: 10px; }
      }
    `}</style>
  </section>
  );
};


const ParashaMeta = ({ label, value, last = false }) =>
<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: 20,
  alignItems: 'baseline',
  padding: '14px 0',
  borderBottom: last ? 'none' : '1px solid rgba(184,146,62,0.18)'
}}>
    <span style={{
    fontSize: 10.5, letterSpacing: '0.3em',
    color: 'var(--muted-2)', fontWeight: 400,
    textTransform: 'uppercase'
  }}>
      {label}
    </span>
    <span style={{
    fontFamily: 'Frank Ruhl Libre, serif',
    fontSize: 15, fontWeight: 500,
    color: 'var(--green-ink)',
    letterSpacing: '0.005em',
    textAlign: 'left'
  }}>
      {value}
    </span>
  </div>;



/* ───────── Gallery teaser — editorial, asymmetrical, dark cinematic ───────── */
const GalleryTeaser = ({ navigate }) =>
<section className="gallery-teaser" style={{
  padding: 'clamp(72px, 9vw, 110px) 0',
  background: 'linear-gradient(180deg, #0a2628 0%, #082022 100%)',
  position: 'relative',
  overflow: 'hidden',
  color: 'var(--cream)'
}}>
    {/* Ambient gold glow, top */}
    <div aria-hidden="true" style={{
    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
    width: '70%', height: 240,
    background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(184, 146, 62, 0.10) 0%, transparent 70%)',
    pointerEvents: 'none'
  }} />

    {/* Vertical running label — left edge (alternates with about-section's right edge) */}
    <div aria-hidden="true" className="gallery-vert-label" style={{
    position: 'absolute',
    left: 24, top: '50%',
    transform: 'translateY(-50%) rotate(180deg)',
    writingMode: 'vertical-rl',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 10,
    letterSpacing: '0.48em',
    color: 'var(--gold-light)',
    fontWeight: 500,
    textTransform: 'uppercase',
    opacity: 0.5
  }}>
      № 04  ·  VISUAL ARCHIVE  ·  1936—היום
    </div>

    <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>

      {/* ── Header meta row — same vocabulary, dark variant ── */}
      <Reveal>
        <div className="gallery-meta-row" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'clamp(40px, 5vw, 64px)',
        paddingBottom: 18,
        borderBottom: '1px solid rgba(184,146,62,0.22)'
      }}>
          <div style={{
          fontSize: 11, letterSpacing: '0.42em',
          color: 'var(--gold-light)', fontWeight: 500, textTransform: 'uppercase'
        }}>
            ארכיון חזותי של הקהילה
          </div>
          <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          fontSize: 11, letterSpacing: '0.28em',
          color: 'rgba(245, 238, 221, 0.5)', fontWeight: 400, textTransform: 'uppercase'
        }}>
            <span>גלריה · אדריכלות · מורשת</span>
            <span style={{ color: 'var(--gold-light)' }}>·</span>
            <span style={{ color: 'var(--cream)' }}>240+ פריטים</span>
          </div>
        </div>
      </Reveal>

      {/* ── Main asymmetric grid — image LEADS this time (5fr text / 7fr image) ── */}
      <div className="gallery-stage" style={{
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'start'
    }}>

        {/* RIGHT (text) — narrower, since image is the hero of THIS section */}
        <div style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
            fontSize: 11, letterSpacing: '0.32em',
            color: 'var(--gold-light)', fontWeight: 500,
            textTransform: 'uppercase', marginBottom: 18
          }}>
              גלריה  ·  ארכיון
            </div>
          </Reveal>

          {/* Display title — Frank Ruhl italic (distinct from parasha's Heebo light & about's serif numeric) */}
          <Reveal delay={100}>
            <h2 className="gallery-display" style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(44px, 6.2vw, 88px)',
            fontWeight: 200,
            color: 'var(--cream)',
            margin: 0,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            textWrap: 'balance'
          }}>
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: '0.28em',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--gold-light)',
              letterSpacing: '0.04em',
              display: 'block',
              marginBottom: '0.5em',
              opacity: 0.9
            }}>
                ארכיון
              </span>
              רגעים{' '}
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--gold-light)'
            }}>שנשארים</span>
            </h2>
          </Reveal>

          {/* Same slim diamond underline — shared visual signature */}
          <Reveal delay={180}>
            <div style={{
            marginTop: 22,
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 220
          }}>
              <div style={{ flex: 1, height: 1, background: 'var(--gold-light)' }} />
              <div style={{
              width: 6, height: 6, background: 'var(--gold-light)',
              transform: 'rotate(45deg)'
            }} />
              <div style={{ width: 24, height: 1, background: 'rgba(212,184,140,0.35)' }} />
            </div>
          </Reveal>

          {/* Sub-eyebrow + body */}
          <Reveal delay={260}>
            <div style={{ marginTop: 'clamp(32px, 4vw, 48px)', maxWidth: 460 }}>
              <div style={{
              fontSize: 11, letterSpacing: '0.32em',
              color: 'var(--gold-light)', fontWeight: 500,
              textTransform: 'uppercase', marginBottom: 14
            }}>
                על האוסף  ·  בקצרה
              </div>

              <p style={{
              fontSize: 'clamp(17px, 1.4vw, 19.5px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(250, 246, 239, 0.92)',
              margin: '0 0 16px',
              letterSpacing: '-0.005em'
            }}>
                תצלומים, ויטראז׳ים ופרטי אדריכלות מבית הכנסת לאורך תשעים שנותיו —
                ארכיון חי של זיכרון הקהילה.
              </p>

              <p style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(245, 238, 221, 0.62)',
              margin: 0
            }}>
                מהנחת אבן הפינה ב־1936 ועד ימינו — דורות, חזנים, ספרי תורה, חגים ושמחות,
                שמורים ומועלים לכלל הציבור.
              </p>
            </div>
          </Reveal>

          {/* Catalog meta list */}
          <Reveal delay={340}>
            <div style={{
            marginTop: 'clamp(28px, 3.5vw, 40px)',
            maxWidth: 460,
            borderTop: '1px solid rgba(212,184,140,0.28)'
          }}>
              <GalleryMeta label="תקופה" value="1936 — היום" />
              <GalleryMeta label="קטגוריות" value="אדריכלות · קהילה · מורשת" />
              <GalleryMeta label="עדכון אחרון" value="מרחשון תשפ״ו" last />
            </div>
          </Reveal>

          {/* CTAs — dark variant of same typographic actions */}
          <Reveal delay={420}>
            <div style={{
            display: 'flex', alignItems: 'center',
            gap: 28, flexWrap: 'wrap',
            marginTop: 'clamp(32px, 4vw, 48px)',
            paddingTop: 'clamp(28px, 3.5vw, 40px)',
            borderTop: '1px solid rgba(212,184,140,0.28)',
            maxWidth: 460
          }}>
              <button onClick={() => navigate('gallery')} className="gallery-cta">
                <span>לגלריה המלאה</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </button>

              <button onClick={() => navigate('heritage')} className="gallery-ghost">
                מורשת ואדריכלות
                <span aria-hidden="true" style={{ opacity: 0.6 }}>←</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* LEFT — hero image mosaic: one large + two stacked thumbnails + bottom row of two */}
        <div style={{ position: 'relative' }}>
          <Reveal blur delay={140}>
            <div className="gallery-mosaic-wrap" style={{ position: 'relative' }}>
              {/* Offset gold-line frame — shared signature */}
              <div aria-hidden="true" style={{
              position: 'absolute',
              inset: '-14px -14px 18px 18px',
              border: '1px solid rgba(184,146,62,0.45)',
              pointerEvents: 'none'
            }} />

              <div className="gallery-mosaic" style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 14
            }}>

                {/* Main hero image — wide */}
                <button onClick={() => navigate('gallery')} className="gallery-tile gallery-tile-hero" style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                border: '1px solid rgba(184,146,62,0.18)',
                padding: 0,
                background: '#0a2a2c',
                cursor: 'pointer'
              }}>
                  <img src="assets/heritage-historic.jpg" alt="בית הכנסת הגדול — תצלום היסטורי" className="gallery-img" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'sepia(0.15) saturate(0.85) brightness(0.78) contrast(1.04)',
                  transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                }} />
                  <div className="gallery-tile-overlay">
                    <div style={{
                    fontSize: 10, letterSpacing: '0.34em',
                    color: 'var(--gold-light)', fontWeight: 500,
                    marginBottom: 6, textTransform: 'uppercase'
                  }}>
                      הנחת אבן הפינה
                    </div>
                    <div style={{
                    fontFamily: 'Frank Ruhl Libre, serif',
                    fontSize: 22, fontWeight: 500, color: 'var(--cream)',
                    lineHeight: 1.2, letterSpacing: '-0.005em'
                  }}>
                      תרצ״ו · 1936
                    </div>
                  </div>
                </button>

                {/* Two stacked thumbnails (right column) */}
                <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 14 }}>
                  <button onClick={() => navigate('gallery')} className="gallery-tile" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(184,146,62,0.18)',
                  padding: 0,
                  background: '#0a2a2c',
                  cursor: 'pointer'
                }}>
                    <img src="assets/gallery-skeleton-1950.jpg" alt="שלד הבניין 1950" className="gallery-img" style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'sepia(0.2) saturate(0.7) brightness(0.62) contrast(1.04)',
                    transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                  }} />
                    <div className="gallery-tile-overlay">
                      <div style={{
                      fontSize: 9, letterSpacing: '0.34em',
                      color: 'var(--gold-light)', fontWeight: 500,
                      marginBottom: 4, textTransform: 'uppercase'
                    }}>אדריכלות</div>
                      <div style={{
                      fontFamily: 'Frank Ruhl Libre, serif',
                      fontSize: 15, fontWeight: 500, color: 'var(--cream)',
                      lineHeight: 1.2
                    }}>שלד הבניין 1950</div>
                    </div>
                  </button>

                  <button onClick={() => navigate('gallery')} className="gallery-tile" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(184,146,62,0.18)',
                  padding: 0,
                  background: '#0a2a2c',
                  cursor: 'pointer'
                }}>
                    <img src="assets/gallery-watchtower.jpg" alt="עמדת תצפית ביטחונית" className="gallery-img" style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'sepia(0.2) saturate(0.7) brightness(0.62) contrast(1.04)',
                    transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                  }} />
                    <div className="gallery-tile-overlay">
                      <div style={{
                      fontSize: 9, letterSpacing: '0.34em',
                      color: 'var(--gold-light)', fontWeight: 500,
                      marginBottom: 4, textTransform: 'uppercase'
                    }}>מורשת</div>
                      <div style={{
                      fontFamily: 'Frank Ruhl Libre, serif',
                      fontSize: 15, fontWeight: 500, color: 'var(--cream)',
                      lineHeight: 1.2
                    }}>עמדת תצפית ביטחונית</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom row — two landscape tiles spanning full width */}
              <div className="gallery-mosaic-bottom" style={{
              marginTop: 14,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14
            }}>
                <button onClick={() => navigate('gallery')} className="gallery-tile" style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                border: '1px solid rgba(184,146,62,0.18)',
                padding: 0,
                background: '#0a2a2c',
                cursor: 'pointer'
              }}>
                  <img src="assets/gallery-stained-glass-hall.jpg" alt="אולם התפילה — זכוכית צבעונית" className="gallery-img" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'sepia(0.18) saturate(0.78) brightness(0.7) contrast(1.04)',
                  transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                }} />
                  <div className="gallery-tile-overlay">
                    <div style={{
                    fontSize: 9, letterSpacing: '0.34em',
                    color: 'var(--gold-light)', fontWeight: 500,
                    marginBottom: 4, textTransform: 'uppercase'
                  }}>אור וזכוכית</div>
                    <div style={{
                    fontFamily: 'Frank Ruhl Libre, serif',
                    fontSize: 16, fontWeight: 500, color: 'var(--cream)',
                    lineHeight: 1.2
                  }}>אולם התפילה</div>
                  </div>
                </button>

                <button onClick={() => navigate('gallery')} className="gallery-tile" style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                border: '1px solid rgba(184,146,62,0.18)',
                padding: 0,
                background: '#0a2a2c',
                cursor: 'pointer'
              }}>
                  <img src="assets/gallery-aron-kodesh-1954.jpeg" alt="ארון הקודש 1954" className="gallery-img" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'sepia(0.18) saturate(0.78) brightness(0.7) contrast(1.04)',
                  transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 800ms var(--ease)'
                }} />
                  <div className="gallery-tile-overlay">
                    <div style={{
                    fontSize: 9, letterSpacing: '0.34em',
                    color: 'var(--gold-light)', fontWeight: 500,
                    marginBottom: 4, textTransform: 'uppercase'
                  }}>חיי הקהילה</div>
                    <div style={{
                    fontFamily: 'Frank Ruhl Libre, serif',
                    fontSize: 16, fontWeight: 500, color: 'var(--cream)',
                    lineHeight: 1.2
                  }}>1954 ארון הקודש</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Museum-plaque caption — shared signature */}
            <div style={{
            marginTop: 14,
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', gap: 16,
            fontSize: 10.5, letterSpacing: '0.3em',
            color: 'rgba(245, 238, 221, 0.5)', textTransform: 'uppercase'
          }}>
              <span>5 פריטים נבחרים</span>
              <span style={{ color: 'var(--gold-light)' }}>מתוך הארכיון · 240+</span>
            </div>
          </Reveal>
        </div>
      </div>
    </div>

    <style>{`
      .gallery-tile { transition: transform 600ms var(--ease), border-color 400ms var(--ease); }
      .gallery-tile:hover { border-color: var(--gold) !important; }
      .gallery-tile:hover .gallery-img {
        transform: scale(1.06);
        filter: sepia(0.1) saturate(0.95) brightness(0.85) contrast(1.06) !important;
      }
      .gallery-tile-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(180deg, transparent 50%, rgba(10, 38, 40, 0.92) 100%);
        display: flex; flex-direction: column; justify-content: flex-end;
        padding: 18px 20px;
        text-align: right;
        pointer-events: none;
      }
      .gallery-cta {
        display: inline-flex; align-items: center; gap: 14px;
        padding: 0 0 10px;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.16em;
        color: var(--cream);
        border-bottom: 1px solid var(--cream);
        cursor: pointer;
        transition: color 320ms var(--ease), border-color 320ms var(--ease), gap 320ms var(--ease);
      }
      .gallery-cta:hover {
        color: var(--gold-light);
        border-color: var(--gold-light);
        gap: 22px;
      }
      .gallery-ghost {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 0;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.18em;
        color: rgba(245, 238, 221, 0.6);
        cursor: pointer;
        transition: color 280ms var(--ease), gap 280ms var(--ease);
      }
      .gallery-ghost:hover { color: var(--gold-light); gap: 16px; }

      @media (max-width: 960px) {
        .gallery-vert-label { display: none; }
        .gallery-stage { grid-template-columns: 1fr !important; gap: 36px !important; }
        .gallery-stage > div:last-child { order: -1; }
      }
      @media (max-width: 640px) {
        .gallery-meta-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        .gallery-mosaic { grid-template-columns: 1fr !important; }
        .gallery-mosaic > div:last-child { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
        .gallery-mosaic-bottom { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>;


const GalleryMeta = ({ label, value, last = false }) =>
<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: 20,
  alignItems: 'baseline',
  padding: '14px 0',
  borderBottom: last ? 'none' : '1px solid rgba(212,184,140,0.18)'
}}>
    <span style={{
    fontSize: 10.5, letterSpacing: '0.3em',
    color: 'rgba(245, 238, 221, 0.55)', fontWeight: 400,
    textTransform: 'uppercase'
  }}>
      {label}
    </span>
    <span style={{
    fontFamily: 'Frank Ruhl Libre, serif',
    fontSize: 15, fontWeight: 500,
    color: 'var(--cream)',
    letterSpacing: '0.005em',
    textAlign: 'left'
  }}>
      {value}
    </span>
  </div>;


/* ───────── Memorial teaser (somber, dignified) ───────── */
/* ───────── Memorial teaser — editorial, asymmetrical, somber dignified ───────── */
const MemorialTeaser = ({ navigate }) =>
<section className="memorial-teaser" style={{
  padding: 'clamp(72px, 9vw, 110px) 0',
  background: 'var(--cream-warm)',
  position: 'relative',
  overflow: 'hidden',
  color: 'var(--green-ink)'
}}>
    {/* Ambient candle glow */}
    <div aria-hidden="true" style={{
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    width: '60%', height: '70%',
    background: 'radial-gradient(ellipse 80% 60% at center, rgba(184, 146, 62, 0.06) 0%, transparent 70%)',
    pointerEvents: 'none'
  }} />

    {/* Vertical running label — right edge (alternates with gallery's left) */}
    <div aria-hidden="true" className="memorial-vert-label" style={{
    position: 'absolute',
    right: 24, top: '50%',
    transform: 'translateY(-50%) rotate(0deg)',
    writingMode: 'vertical-rl',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 10,
    letterSpacing: '0.48em',
    color: 'var(--gold)',
    fontWeight: 500,
    textTransform: 'uppercase',
    opacity: 0.55
  }}>
      № 05  ·  MEMORIAL  ·  יזכור
    </div>

    <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>

      {/* ── Header meta row ── */}
      <Reveal>
        <div className="memorial-meta-row" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'clamp(40px, 5vw, 64px)',
        paddingBottom: 18,
        borderBottom: '1px solid rgba(184,146,62,0.18)'
      }}>
          <div style={{
          fontSize: 11, letterSpacing: '0.42em',
          color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase'
        }}>
            אור הזיכרון לדורות
          </div>
          <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          fontSize: 11, letterSpacing: '0.28em',
          color: 'var(--muted-2)', fontWeight: 400, textTransform: 'uppercase'
        }}>
            <span>אזכרה · יזכור · עילוי נשמה</span>
            <span style={{ color: 'var(--gold)' }}>·</span>
            <span style={{ color: 'var(--green-ink)' }}>סיון תשפ״ו · 6 יום הזיכרון</span>
          </div>
        </div>
      </Reveal>

      {/* ── Main asymmetric grid: 7fr title / 5fr aside ── */}
      <div className="memorial-stage" style={{
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'start'
    }}>

        {/* RIGHT (primary, 7fr) — title + intro */}
        <div style={{ position: 'relative' }}>
          <Reveal>
            <div style={{
            fontSize: 11, letterSpacing: '0.32em',
            color: 'var(--gold)', fontWeight: 500,
            textTransform: 'uppercase', marginBottom: 18
          }}>
              הנצחה  ·  יזכור
            </div>
          </Reveal>

          {/* Display: "ולא ישכחו לעולם" — Frank Ruhl italic, somber */}
          <Reveal delay={100}>
            <h2 className="memorial-display" style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(44px, 6.2vw, 88px)',
            fontWeight: 200,
            color: 'var(--green-ink)',
            margin: 0,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            textWrap: 'balance'
          }}>
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: '0.28em',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--gold)',
              letterSpacing: '0.04em',
              display: 'block',
              marginBottom: '0.5em',
              opacity: 0.9
            }}>
                יזכור
              </span>
              <span style={{
              fontFamily: 'Frank Ruhl Libre, serif',
              fontWeight: 500,
              fontStyle: 'italic'
            }}>ולא ישכחו לעולם</span>
            </h2>
          </Reveal>

          {/* Same diamond underline — shared signature */}
          <Reveal delay={180}>
            <div style={{
            marginTop: 22,
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 220
          }}>
              <div style={{ flex: 1, height: 1, background: 'var(--gold)' }} />
              <div style={{
              width: 6, height: 6, background: 'var(--gold)',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 8px rgba(184, 146, 62, 0.45)'
            }} />
              <div style={{ width: 24, height: 1, background: 'rgba(184,146,62,0.35)' }} />
            </div>
          </Reveal>

          {/* Body */}
          <Reveal delay={260}>
            <div style={{ marginTop: 'clamp(32px, 4vw, 48px)', maxWidth: 620 }}>
              <div style={{
              fontSize: 11, letterSpacing: '0.32em',
              color: 'var(--gold)', fontWeight: 500,
              textTransform: 'uppercase', marginBottom: 14
            }}>
                בית הכנסת מזכיר  ·  בקצרה
              </div>

              <p style={{
              fontSize: 'clamp(17px, 1.4vw, 19.5px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--green-ink)',
              margin: '0 0 16px',
              letterSpacing: '-0.005em'
            }}>
                יזכור עם ישראל את נשמות יקיריו — אזכרות שנתיות, תפילות לעילוי נשמה,
                ונרות זיכרון דולקים במשך כל ימי האזכרה.
              </p>

              <p style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--muted)',
              margin: 0
            }}>
                בית הכנסת מקיים אזכרות יחיד, לוח זיכרון קבוע ומניינים לעילוי נשמת יקיריכם.
              </p>
            </div>
          </Reveal>
        </div>

        {/* LEFT (aux, 5fr) — quiet candle aside with verse */}
        <div style={{ position: 'relative' }}>
          <Reveal blur delay={140}>
            <aside className="memorial-aside" style={{
            position: 'relative',
            padding: 'clamp(28px, 3.5vw, 40px)',
            border: '1px solid rgba(184, 146, 62, 0.28)',
            background: 'rgba(255, 255, 255, 0.45)'
          }}>
              {/* Offset gold-line frame — shared signature, flipped */}
              <div aria-hidden="true" style={{
              position: 'absolute',
              inset: '-14px 18px 18px -14px',
              border: '1px solid rgba(184,146,62,0.45)',
              pointerEvents: 'none'
            }} />

              {/* Candle dot — solitary, glowing */}
              <div aria-hidden="true" style={{
              width: 6, height: 6,
              background: 'var(--gold)',
              borderRadius: '50%',
              marginBottom: 20,
              boxShadow: '0 0 16px rgba(184, 146, 62, 0.6), 0 0 6px rgba(212, 184, 140, 0.5)'
            }} />

              <div style={{
              fontSize: 11, letterSpacing: '0.32em',
              color: 'var(--gold)', fontWeight: 500,
              textTransform: 'uppercase', marginBottom: 14
            }}>
                מתוך תפילת אל מלא רחמים
              </div>

              <blockquote style={{
              margin: 0, padding: 0,
              fontFamily: 'Frank Ruhl Libre, serif',
              fontSize: 'clamp(18px, 1.6vw, 22px)',
              fontWeight: 500,
              fontStyle: 'italic',
              color: 'var(--green-ink)',
              lineHeight: 1.55,
              letterSpacing: '-0.005em'
            }}>
                אֵל מָלֵא רַחֲמִים, שׁוֹכֵן בַּמְּרוֹמִים, הַמְצֵא מְנוּחָה נְכוֹנָה תַּחַת כַּנְפֵי הַשְּׁכִינָה, בְּמַעֲלוֹת קְדוֹשִׁים וּטְהוֹרִים כְּזֹהַר הָרָקִיעַ מַזְהִירִים.
              </blockquote>

              <div style={{
              marginTop: 24,
              paddingTop: 18,
              borderTop: '1px solid rgba(184, 146, 62, 0.22)',
              fontSize: 10.5,
              letterSpacing: '0.3em',
              color: 'var(--muted-2)',
              textTransform: 'uppercase'
            }}>
                סידור אשכנז · אל מלא רחמים
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      {/* ── Actions — same typographic vocabulary ── */}
      <Reveal delay={400}>
        <div style={{
        display: 'flex', alignItems: 'center',
        gap: 28, flexWrap: 'wrap',
        marginTop: 'clamp(56px, 7vw, 88px)',
        paddingTop: 'clamp(28px, 3.5vw, 40px)',
        borderTop: '1px solid rgba(184,146,62,0.28)'
      }}>
          <button onClick={() => navigate('memorial')} className="memorial-cta">
            <span>לכל ההנצחות</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M13 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
            </svg>
          </button>

          <button onClick={() => navigate('memorial')} className="memorial-ghost">
            הוסיפו הנצחה
            <span aria-hidden="true" style={{ opacity: 0.6 }}>←</span>
          </button>
        </div>
      </Reveal>
    </div>

    <style>{`
      .memorial-name-row {
        transition: padding 320ms var(--ease);
      }
      .memorial-name-row:hover {
        padding-right: 6px;
      }
      .memorial-cta {
        display: inline-flex; align-items: center; gap: 14px;
        padding: 0 0 10px;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.16em;
        color: var(--green-ink);
        border-bottom: 1px solid var(--green-ink);
        cursor: pointer;
        transition: color 320ms var(--ease), border-color 320ms var(--ease), gap 320ms var(--ease);
      }
      .memorial-cta:hover {
        color: var(--gold);
        border-color: var(--gold);
        gap: 22px;
      }
      .memorial-ghost {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 0;
        background: transparent; border: none;
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.18em;
        color: var(--muted);
        cursor: pointer;
        transition: color 280ms var(--ease), gap 280ms var(--ease);
      }
      .memorial-ghost:hover { color: var(--gold); gap: 16px; }

      @media (max-width: 960px) {
        .memorial-vert-label { display: none; }
        .memorial-stage { grid-template-columns: 1fr !important; gap: 36px !important; }
      }
      @media (max-width: 640px) {
        .memorial-meta-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        .memorial-names-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>;

window.Home = Home;