// About page — redesigned to match Parasha/Heritage visual language
const About = ({ navigate }) => {
  return (
    <div className="page-fade">
      <AboutHeroCinematic />

      {/* Intro Section — matches other pages' visual language */}
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
                סיפור הקהילה
              </div>

              <p style={{
                fontSize: 21,
                lineHeight: 1.85,
                color: 'var(--green-ink)',
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                בית הכנסת הגדול חדרה הוקם בחזון של אחדות — מקום שבו כל יהודי, מכל עדה ומכל רקע, מוצא בית רוחני חם וקבוע מאז שהונחה אבן הפינה בשנת 1936.
              </p>

              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                לאורך תשעים שנה אנו שומרים על השליחות שעליה הוקם המוסד — לקיים בית של תורה ותפילה, לפתוח שערים לכל מבקש, ולהעביר את המסורת הקדושה מדור לדור באהבה וענווה.
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

      {/* Vision + Rabbi Quote */}
      <section style={{ padding: '0 0 100px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="about-vision-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}>
            <Reveal>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                color: 'var(--gold)',
                fontWeight: 500,
                textTransform: 'uppercase',
                marginBottom: 18,
              }}>
                החזון
              </div>
              <h2 style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: 'clamp(34px, 4.2vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.15,
                color: 'var(--green-ink)',
                margin: '0 0 24px',
                letterSpacing: '-0.005em',
              }}>
                בית לכל בני הקהילה
              </h2>
              <div style={{
                width: 60, height: 1,
                background: 'linear-gradient(to right, var(--gold), rgba(184, 146, 62, 0.2))',
                marginBottom: 28,
              }} />
              <p style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--muted)',
                fontWeight: 300,
                margin: '0 0 20px',
              }}>
                החזון שעמד לנגד עיני המייסדים בשנת תרצ״ו לא היה רק לבנות בית כנסת — אלא לבנות בית. מקום שבו אדם מצא קבלה, חמימות, ושייכות. תפילות הקבועות, השיעורים, האירועים, והמפגשים החברתיים — כולם מסביב לאותו רעיון מרכזי.
              </p>
              <p style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--muted)',
                fontWeight: 300,
                margin: 0,
              }}>
                גם היום, תשעים שנה אחר כך, אותו חזון ממשיך להוביל אותנו. בית הכנסת הגדול הוא לא רק מקום תפילה — הוא הלב הפועם של הקהילה היהודית בחדרה.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div style={{
                position: 'relative',
                padding: '64px 48px',
                background: 'linear-gradient(135deg, #0f3a3d 0%, #0a2628 100%)',
                color: 'var(--cream)',
                borderRadius: 6,
                overflow: 'hidden',
                border: '1px solid rgba(184, 146, 62, 0.2)',
                boxShadow: '0 24px 60px rgba(10, 42, 44, 0.18), 0 0 32px rgba(184, 146, 62, 0.08)',
              }}>
                {/* Subtle gold radial glow */}
                <div style={{
                  position: 'absolute',
                  top: -50, right: -50,
                  width: 200, height: 200,
                  background: 'radial-gradient(circle, rgba(212, 184, 140, 0.15) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }} />

                {/* Gold corner */}
                <div style={{
                  position: 'absolute',
                  top: 20, right: 20,
                  width: 8, height: 8,
                  background: 'var(--gold-light)',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 12px rgba(184, 146, 62, 0.7)',
                }} />

                {/* Large quote mark */}
                <div style={{
                  fontFamily: 'Frank Ruhl Libre, serif',
                  fontSize: 80,
                  lineHeight: 0.7,
                  color: 'var(--gold-light)',
                  opacity: 0.4,
                  marginBottom: 8,
                  position: 'relative',
                }}>
                  ״
                </div>

                <p style={{
                  fontFamily: 'Frank Ruhl Libre, serif',
                  fontSize: 'clamp(20px, 2.2vw, 24px)',
                  lineHeight: 1.65,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  margin: '0 0 32px',
                  position: 'relative',
                  letterSpacing: '0.005em',
                }}>
                  ביתי בית תפילה יקרא לכל העמים — הפסוק הזה מנחה אותנו כבר יותר מתשעים שנה. כל אדם שנכנס לכאן — חש בבית.
                </p>

                {/* Author with divider */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  position: 'relative',
                }}>
                  <div style={{
                    width: 32, height: 1,
                    background: 'var(--gold-light)',
                  }} />
                  <div>
                    <div style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: 'var(--gold-light)',
                      letterSpacing: '0.02em',
                    }}>
                      הרב בן־ציון (בנצי) נורדמן שליט״א
                    </div>
                    <div style={{
                      fontSize: 12,
                      fontWeight: 300,
                      color: 'rgba(245, 238, 221, 0.6)',
                      letterSpacing: '0.18em',
                      marginTop: 4,
                      textTransform: 'uppercase',
                    }}>
                      רב בית הכנסת
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                color: 'var(--gold)',
                fontWeight: 500,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                הנהגת הקהילה
              </div>
              <h2 style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: 'clamp(34px, 4.2vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.15,
                color: 'var(--green-ink)',
                margin: '0 0 18px',
                letterSpacing: '-0.005em',
              }}>
                הרב והגבאים
              </h2>
              <div style={{
                width: 60, height: 1,
                background: 'var(--gold)',
                margin: '0 auto',
                opacity: 0.5,
              }} />
            </div>
          </Reveal>

          <div className="about-leaders-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {LEADERS.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <LeaderCard person={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-vision-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
};

/* ---------- Hero (Heritage/Parasha-style) ---------- */
const AboutHeroCinematic = () => (
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
        animation: 'aboutHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
      }}>
        <div style={{
          fontSize: 11,
          letterSpacing: '0.4em',
          color: 'var(--gold-light)',
          fontWeight: 400,
          textTransform: 'uppercase',
          marginBottom: 28
        }}>
          תשעים שנה של תורה ותפילה
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
          אודות <span style={{ color: 'var(--gold-light)' }}>הקהילה</span>
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
          חזון · שליחות · והאנשים שמובילים את בית הכנסת הגדול בחדרה מאז 1936
        </p>
      </div>
    </div>

    <style>{`
      @keyframes aboutHeroFade {
        from { opacity: 0; transform: translateY(-30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

/* ---------- Leader card (matches site design language) ---------- */
const LeaderCard = ({ person }) => (
  <div className="about-leader-card" style={{
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(184, 146, 62, 0.18)',
    borderRadius: 6,
    padding: '40px 28px 32px',
    textAlign: 'center',
    transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
    boxShadow: '0 4px 16px rgba(10, 42, 44, 0.06), 0 0 0 1px rgba(184, 146, 62, 0.04)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Top gold corner */}
    <div style={{
      position: 'absolute',
      top: 14, right: 14,
      width: 6, height: 6,
      background: 'var(--gold-light)',
      transform: 'rotate(45deg)',
      boxShadow: '0 0 10px rgba(184, 146, 62, 0.6)',
      opacity: 0.8,
    }} />

    {/* Avatar — refined */}
    <div style={{
      width: 96, height: 96,
      margin: '0 auto 22px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0f3a3d 0%, #0a2628 100%)',
      border: '1px solid rgba(184, 146, 62, 0.4)',
      boxShadow: '0 6px 20px rgba(10, 42, 44, 0.18), 0 0 16px rgba(184, 146, 62, 0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: person.photoPosition || 'center 28%',
            borderRadius: '50%',
            transform: `scale(${person.photoScale || 1.78})`,
            transformOrigin: person.photoPosition || 'center 28%',
          }}
        />
      ) : (
        <Icon name="users" size={40} style={{ color: 'var(--gold-light)' }} stroke={1.4} />
      )}
    </div>

    <h3 style={{
      fontFamily: 'Frank Ruhl Libre, serif',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--green-ink)',
      margin: '0 0 8px',
      letterSpacing: '-0.005em',
    }}>
      {person.name}
    </h3>

    <div style={{
      fontSize: 11,
      color: 'var(--gold)',
      fontWeight: 500,
      letterSpacing: '0.28em',
      marginBottom: 18,
      textTransform: 'uppercase',
    }}>
      {person.role}
    </div>

    {/* Thin gold divider */}
    <div style={{
      width: 36, height: 1,
      background: 'linear-gradient(to right, var(--gold), rgba(184, 146, 62, 0.2))',
      margin: '0 auto 18px',
    }} />

    <p style={{
      fontSize: 14,
      lineHeight: 1.75,
      color: 'var(--muted)',
      fontWeight: 300,
      margin: 0,
    }}>
      {person.bio}
    </p>

    <style>{`
      .about-leader-card:hover {
        transform: translateY(-4px);
        border-color: rgba(212, 184, 140, 0.55) !important;
        box-shadow: 0 24px 60px rgba(10, 42, 44, 0.14), 0 0 32px rgba(184, 146, 62, 0.16) !important;
        background: rgba(255, 255, 255, 0.75) !important;
      }
    `}</style>
  </div>
);

/* ---------- Original PageHero kept for Contact/Donate pages ---------- */
const PageHero = ({ title, subtitle }) =>
<section style={{
  background: 'var(--green-darker)',
  color: '#fff',
  padding: '80px 0 64px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
}}>
    <div className="ken-burns" style={{
      position: 'absolute',
      inset: '-5%',
      backgroundImage: 'url(assets/heritage-historic.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.32) saturate(0.7)',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(15, 58, 61, 0.78) 0%, rgba(10, 42, 44, 0.78) 100%)',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 40%, rgba(184, 146, 62, 0.12) 0%, transparent 60%)',
    }} />
    <div style={{ position: 'absolute', top: 16, left: 0, right: 0, opacity: 0.4, zIndex: 1 }}>
      <ArchesPattern count={24} size={16} />
    </div>
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ fontSize: 13, color: 'var(--gold-light)', letterSpacing: '0.28em', fontWeight: 600, marginBottom: 18 }}>
        בית הכנסת הגדול חדרה
      </div>
      <h1 style={{
      fontWeight: 900,
      color: '#fff',
      margin: '0 0 18px',
      fontSize: "76px", lineHeight: "1.15", fontFamily: "Heebo", letterSpacing: "2.4px", borderRadius: "0px"
    }}>
        {title}
      </h1>
      <GoldDivider width={80} style={{ margin: '0 auto 18px' }} />
      {subtitle &&
    <p style={{ fontSize: 18, maxWidth: 640, margin: '0 auto', color: 'rgba(250,246,239,0.88)', lineHeight: 1.7 }}>
          {subtitle}
        </p>
    }
    </div>
  </section>;


window.About = About;
window.PageHero = PageHero;
