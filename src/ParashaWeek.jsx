// ParashaWeek page — weekly Torah portion sermons by the Rabbi
const ParashaWeek = ({ navigate, param }) => {
  // editions[]-aware: render the newest edition by default (archive-ready)
  const withLatest = (p) => {
    const e = (p.editions && p.editions.length) ? p.editions[p.editions.length - 1] : {};
    return Object.assign({}, p, {
      id: p.slug,
      date: e.date,
      dateGregorian: e.dateGregorian,
      content: e.content || [],
      year: e.year,
    });
  };

  const PARASHIOT = (window.PARSHIOT_DATA || []).map(withLatest);

  const selectedParasha = param ? PARASHIOT.find(p => p.slug === param || p.name === param) : null;

  // Scroll to top on view change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [param]);

  if (selectedParasha) {
    return <ParashaDetail parasha={selectedParasha} onBack={() => navigate('parasha')} />;
  }

  return (
    <div className="page-fade">
      <ParashaHeroCinematic />

      {/* Intro Section — matches Heritage page visual language */}
      <section style={{
        padding: '100px 0',
        background: 'var(--cream)',
        position: 'relative'
      }}>
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
                מסורת הדרשה השבועית
              </div>

              <p style={{
                fontSize: 21,
                lineHeight: 1.85,
                color: 'var(--green-ink)',
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                מדי שבוע, בליל שבת לפני קבלת שבת, נושא רב בית הכנסת דרשה קצרה על פרשת השבוע — נקודה אחת קטנה שתלווה אותנו אל תוך השבת ואל תוך השבוע הבא.
              </p>

              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                בעמוד זה אנו מאספים את דברי הרב לפרשיות השבוע, כדי שמי שלא יכול היה להגיע — יוכל לקרוא ולהתחבר. הדברים נכתבים מתוך אהבה לקהילה ולתורה, וברוח המסורת שמלווה את בית הכנסת הגדול מאז שנת תרצ״ו.
              </p>

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

      {/* Cards Grid */}
      <section style={{
        padding: '0 0 120px',
        background: 'var(--cream)',
        position: 'relative',
      }}>
        <div className="container">
          <div className="parasha-cards-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}>
            {PARASHIOT.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ParashaCard parasha={p} onClick={() => navigate('parasha', p.slug)} />
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .parasha-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .parasha-cards-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>
      </section>
    </div>
  );
};

/* ---------- Hero (Heritage-style) ---------- */
const ParashaHeroCinematic = () => (
  <section style={{
    minHeight: '70vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div className="ken-burns" style={{
      position: 'absolute',
      inset: '-5%',
      backgroundImage: 'url(assets/heritage-historic.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.4) contrast(1.1)',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(15, 58, 61, 0.85) 0%, rgba(10, 42, 44, 0.75) 100%)',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 40%, rgba(184, 146, 62, 0.12) 0%, transparent 60%)',
    }} />

    <div className="container" style={{
      position: 'relative', zIndex: 2,
      textAlign: 'center', maxWidth: 900, padding: '0 32px'
    }}>
      <div style={{
        opacity: 0,
        animation: 'parashaHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
      }}>
        <div style={{
          fontSize: 11,
          letterSpacing: '0.4em',
          color: 'var(--gold-light)',
          fontWeight: 400,
          textTransform: 'uppercase',
          marginBottom: 28
        }}>
          דבר הרב לפרשת השבוע
        </div>

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
          פרשת <span style={{ color: 'var(--gold-light)' }}>השבוע</span>
        </h1>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 16, margin: '0 auto 32px', maxWidth: 280
        }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-light))' }} />
          <div style={{
            width: 8, height: 8, background: 'var(--gold-light)',
            transform: 'rotate(45deg)', boxShadow: '0 0 20px rgba(184, 146, 62, 0.6)'
          }} />
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-light))' }} />
        </div>

        <p style={{
          fontSize: 'clamp(17px, 2vw, 22px)',
          fontWeight: 300, lineHeight: 1.7,
          color: 'rgba(250, 246, 239, 0.85)',
          maxWidth: 680, margin: '0 auto', letterSpacing: '0.01em'
        }}>
          דברי תורה לפרשת השבוע מאת רב בית הכנסת · אסופה שבועית של מחשבה ומורשת
        </p>
      </div>
    </div>

    <style>{`
      @keyframes parashaHeroFade {
        from { opacity: 0; transform: translateY(-30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

/* ---------- Parasha Card ---------- */
const ParashaCard = ({ parasha, onClick }) => (
  <button
    onClick={onClick}
    className="parasha-card"
    style={{
      width: '100%',
      textAlign: 'right',
      padding: 0,
      background: 'rgba(255, 255, 255, 0.55)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(184, 146, 62, 0.18)',
      borderRadius: 6,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
      boxShadow: '0 4px 16px rgba(10, 42, 44, 0.06), 0 0 0 1px rgba(184, 146, 62, 0.04)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Image area with overlay */}
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '16/10',
      overflow: 'hidden',
      background: parasha.gradient,
    }}>
      <img
        src={parasha.image}
        alt={parasha.title}
        className="parasha-card-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
          filter: 'saturate(0.85) brightness(0.7)',
          mixBlendMode: 'luminosity',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 22%, rgba(10, 42, 44, 0.82) 100%)',
      }} />
      {/* Parasha name + verse on image (hero banner) */}
      <div style={{
        position: 'absolute',
        right: 24, left: 24, bottom: 22,
      }}>
        <h3 style={{
          fontFamily: 'Heebo, sans-serif',
          fontSize: 'clamp(24px, 2.6vw, 30px)',
          fontWeight: 300,
          color: 'var(--cream)',
          margin: '0 0 8px',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
          textShadow: '0 2px 12px rgba(0, 0, 0, 0.55)',
        }}>
          {parasha.title}
        </h3>
        <div style={{
          fontFamily: 'Frank Ruhl Libre, serif',
          fontSize: 14,
          fontWeight: 500,
          fontStyle: 'italic',
          color: 'rgba(250, 246, 239, 0.9)',
          lineHeight: 1.5,
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
        }}>
          {parasha.subtitle}
        </div>
      </div>
      {/* Tiny gold corner */}
      <div style={{
        position: 'absolute',
        top: 16, right: 16,
        width: 6, height: 6,
        background: 'var(--gold-light)',
        transform: 'rotate(45deg)',
        boxShadow: '0 0 12px rgba(184, 146, 62, 0.7)',
      }} />
    </div>

    {/* Content */}
    <div style={{
      padding: '28px 28px 24px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    }}>
      {/* Date eyebrow */}
      <div style={{
        fontSize: 10,
        letterSpacing: '0.32em',
        color: 'var(--gold)',
        fontWeight: 500,
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>
        {parasha.date}  ·  {parasha.dateGregorian}
      </div>

      {/* Thin gold divider */}
      <div style={{
        width: 40, height: 1,
        background: 'linear-gradient(to right, var(--gold), rgba(184, 146, 62, 0.2))',
        marginBottom: 16,
      }} />

      {/* Excerpt */}
      <p style={{
        fontSize: 14.5,
        lineHeight: 1.75,
        color: 'var(--muted)',
        fontWeight: 300,
        margin: '0 0 24px',
        flex: 1,
      }}>
        {parasha.excerpt}
      </p>

      {/* Read more CTA */}
      <div className="parasha-card-cta" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--green-ink)',
        fontSize: 13.5,
        fontWeight: 500,
        letterSpacing: '0.04em',
        transition: 'all 300ms var(--ease)',
        alignSelf: 'flex-start',
      }}>
        <span>קרא עוד</span>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M14 6 L2 6 M7 1 L2 6 L7 11"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>

    <style>{`
      .parasha-card:hover {
        transform: translateY(-6px);
        border-color: rgba(212, 184, 140, 0.55) !important;
        box-shadow: 0 24px 60px rgba(10, 42, 44, 0.16), 0 0 32px rgba(184, 146, 62, 0.18), 0 0 0 1px rgba(184, 146, 62, 0.08) !important;
        background: rgba(255, 255, 255, 0.75) !important;
      }
      .parasha-card:hover .parasha-card-img {
        transform: scale(1.08);
      }
      .parasha-card:hover .parasha-card-cta {
        color: var(--gold) !important;
        gap: 14px !important;
      }
    `}</style>
  </button>
);

/* ---------- Detail page ---------- */
const ParashaDetail = ({ parasha, onBack }) => (
  <div className="page-fade">
    {/* Hero — slimmer detail variant */}
    <section style={{
      minHeight: '64vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="ken-burns" style={{
        position: 'absolute',
        inset: '-5%',
        backgroundImage: `url(${parasha.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.35) contrast(1.1)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(15, 58, 61, 0.88) 0%, rgba(10, 42, 44, 0.78) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(184, 146, 62, 0.12) 0%, transparent 60%)',
      }} />

      <div className="container" style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', maxWidth: 880, padding: '80px 32px 60px'
      }}>
        <div style={{
          opacity: 0,
          animation: 'parashaHeroFade 1100ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards'
        }}>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.4em',
            color: 'var(--gold-light)',
            fontWeight: 400,
            textTransform: 'uppercase',
            marginBottom: 20
          }}>
            דבר הרב  ·  {parasha.date}
          </div>

          <h1 style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(52px, 9vw, 92px)',
            fontWeight: 200,
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            margin: '0 0 28px',
            color: 'var(--cream)',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            פרשת <span style={{ color: 'var(--gold-light)' }}>{parasha.title.replace(/^פרשת\s*/, '')}</span>
          </h1>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 16, margin: '0 auto 24px', maxWidth: 240
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-light))' }} />
            <div style={{
              width: 8, height: 8, background: 'var(--gold-light)',
              transform: 'rotate(45deg)', boxShadow: '0 0 20px rgba(184, 146, 62, 0.6)'
            }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-light))' }} />
          </div>

          <p style={{
            fontFamily: 'Frank Ruhl Libre, serif',
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontWeight: 400, fontStyle: 'italic',
            lineHeight: 1.6,
            color: 'rgba(250, 246, 239, 0.92)',
            maxWidth: 640, margin: '0 auto'
          }}>
            {parasha.subtitle}
          </p>
        </div>
      </div>
    </section>

    {/* Article body */}
    <section style={{ padding: '90px 0 120px', background: 'var(--cream)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L50 90 M10 50 L90 50 M30 30 L70 30 M30 70 L70 70 M30 30 L30 70 M70 30 L70 70' stroke='%23b8923e' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', maxWidth: 760 }}>
        {/* Back button */}
        <Reveal>
          <button
            onClick={onBack}
            className="parasha-back-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 20px',
              borderRadius: 999,
              border: '1px solid rgba(184, 146, 62, 0.3)',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(6px)',
              color: 'var(--green-ink)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              marginBottom: 56,
              transition: 'all 300ms var(--ease)',
              fontFamily: 'inherit',
            }}
          >
            <svg width="14" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M2 6 L14 6 M9 1 L14 6 L9 11"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>חזרה לכל הפרשות</span>
          </button>
        </Reveal>

        {/* Meta line */}
        <Reveal delay={100}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 32,
            fontSize: 12,
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            fontWeight: 500,
            textTransform: 'uppercase',
          }}>
            <span>{parasha.dateGregorian}</span>
            <span style={{ width: 4, height: 4, background: 'var(--gold)', borderRadius: '50%', opacity: 0.5 }} />
            <span>זמן קריאה כ-5 דקות</span>
          </div>
        </Reveal>

        {/* Body paragraphs */}
        <article>
          {parasha.content.map((para, i) => (
            <Reveal key={i} delay={150 + i * 80}>
              <p style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: i === 0 ? 21 : 19,
                fontWeight: i === 0 ? 500 : 400,
                lineHeight: 1.95,
                color: 'var(--green-ink)',
                margin: i === 0 ? '0 0 36px' : '0 0 28px',
                letterSpacing: '0.005em',
              }}>
                {i === 0 && (
                  <span style={{
                    float: 'right',
                    fontSize: 64,
                    lineHeight: 0.9,
                    color: 'var(--gold)',
                    fontWeight: 600,
                    marginLeft: 8,
                    marginTop: 8,
                    marginBottom: -6,
                    fontFamily: 'Frank Ruhl Libre, serif',
                  }}>
                    {para.charAt(0)}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </p>
            </Reveal>
          ))}
        </article>

        {/* Closing ornament */}
        <Reveal delay={400}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 16, margin: '64px auto 0', maxWidth: 240
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--gold))', opacity: 0.5 }} />
            <div style={{
              width: 8, height: 8, background: 'var(--gold)',
              transform: 'rotate(45deg)', opacity: 0.6
            }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--gold))', opacity: 0.5 }} />
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: 32,
            fontSize: 13,
            letterSpacing: '0.2em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}>
            שבת שלום ומבורך
          </div>
        </Reveal>
      </div>

      <style>{`
        .parasha-back-btn:hover {
          border-color: var(--gold) !important;
          background: rgba(255, 255, 255, 0.7) !important;
          color: var(--gold) !important;
          box-shadow: 0 4px 14px rgba(184, 146, 62, 0.18);
        }
      `}</style>
    </section>
  </div>
);

window.ParashaWeek = ParashaWeek;
