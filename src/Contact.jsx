// Contact page — redesigned to match site visual language
const Contact = ({ navigate }) => {
  return (
    <div className="page-fade">
      <ContactHeroCinematic />

      {/* Intro Section — matches other pages */}
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
                דלת פתוחה תמיד
              </div>

              <p style={{
                fontSize: 21,
                lineHeight: 1.85,
                color: 'var(--green-ink)',
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                בית הכנסת הגדול הוא הבית של כל הקהילה — ואנו שמחים לעמוד לרשותכם בכל עניין, בכל זמן ובכל ערוץ שנוח לכם.
              </p>

              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                בקשת עלייה לתורה, תיאום אירוע משפחתי, הנצחה לזכר יקיר, בקשת שיעור פרטי או סתם רצון להתחבר לקהילה — מלאו את הטופס, התקשרו, או בואו לבקר אותנו במשרד.
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

      {/* Form + Details */}
      <section style={{ padding: '0 0 100px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: 40,
            marginBottom: 56,
          }}>
            {/* Form card — glass */}
            <Reveal>
              <div className="contact-form-card" style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(184, 146, 62, 0.18)',
                borderRadius: 6,
                padding: '44px 40px 40px',
                boxShadow: '0 4px 16px rgba(10, 42, 44, 0.06), 0 0 0 1px rgba(184, 146, 62, 0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Gold corner */}
                <div style={{
                  position: 'absolute',
                  top: 16, right: 16,
                  width: 6, height: 6,
                  background: 'var(--gold-light)',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 10px rgba(184, 146, 62, 0.6)',
                }} />

                <div style={{
                  fontSize: 11,
                  letterSpacing: '0.35em',
                  color: 'var(--gold)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}>
                  שליחת הודעה
                </div>
                <h2 style={{
                  fontSize: 30,
                  fontWeight: 500,
                  color: 'var(--green-ink)',
                  margin: '0 0 18px',
                  letterSpacing: '-0.005em',
                }}>
                  השאירו פרטים ונחזור אליכם
                </h2>
                <div style={{
                  width: 48, height: 1,
                  background: 'linear-gradient(to right, var(--gold), rgba(184, 146, 62, 0.2))',
                  marginBottom: 28,
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <Field label="שם מלא" placeholder="ישראל ישראלי" />
                  <Field label="טלפון" placeholder="050-000-0000" />
                  <Field label="דוא״ל" placeholder="name@example.com" type="email" />
                  <SelectField label="נושא הפנייה" options={[
                    'כללי',
                    'עליה לתורה',
                    'אירוע / מסיבה',
                    'הנצחה',
                    'תרומה',
                    'בקשת שיעור',
                  ]} />
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--green-ink)',
                      marginBottom: 6,
                      letterSpacing: '0.02em',
                    }}>תוכן ההודעה</label>
                    <textarea
                      placeholder="כתבו לנו..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--line)',
                        borderRadius: 6,
                        fontSize: 15,
                        fontFamily: 'inherit',
                        direction: 'rtl',
                        minHeight: 120,
                        resize: 'vertical',
                        background: '#fff',
                      }}
                    />
                  </div>
                  <button className="btn btn-primary" style={{ marginTop: 8 }}>שליחת הודעה</button>
                </div>
              </div>
            </Reveal>

            {/* Details — dark luxury card */}
            <Reveal delay={150}>
              <div style={{
                background: 'linear-gradient(135deg, #0f3a3d 0%, #0a2628 100%)',
                color: 'var(--cream)',
                padding: '44px 36px',
                borderRadius: 6,
                border: '1px solid rgba(184, 146, 62, 0.2)',
                boxShadow: '0 24px 60px rgba(10, 42, 44, 0.18), 0 0 32px rgba(184, 146, 62, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Soft gold glow top-right */}
                <div style={{
                  position: 'absolute',
                  top: -60, right: -60,
                  width: 220, height: 220,
                  background: 'radial-gradient(circle, rgba(212, 184, 140, 0.16) 0%, transparent 70%)',
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

                <div style={{
                  fontSize: 11,
                  letterSpacing: '0.35em',
                  color: 'var(--gold-light)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  marginBottom: 14,
                  position: 'relative',
                }}>
                  פרטי התקשרות
                </div>
                <h2 style={{
                  fontSize: 30,
                  fontWeight: 500,
                  color: 'var(--cream)',
                  margin: '0 0 18px',
                  position: 'relative',
                  letterSpacing: '-0.005em',
                }}>
                  בכל ערוץ שנוח לכם
                </h2>
                <div style={{
                  width: 48, height: 1,
                  background: 'linear-gradient(to right, var(--gold-light), rgba(184, 146, 62, 0.2))',
                  marginBottom: 24,
                  position: 'relative',
                }} />

                <div style={{ position: 'relative', flex: 1 }}>
                  <ContactRow icon="map-pin" label="כתובת"             value="הגיבורים 74, חדרה" />
                  <ContactRow icon="phone"   label="טלפון"             value={SITE.phone} />
                  <ContactRow icon="whatsapp" label="וואטסאפ"          value={SITE.whatsapp} />
                  <ContactRow icon="mail"    label="דוא״ל"             value={SITE.email} />
                  <ContactRow icon="clock"   label="שעות פתיחת המשרד"  value={SITE.officeHours} last />
                </div>

                {/* CTA card */}
                <div style={{
                  marginTop: 28,
                  padding: '22px 24px',
                  background: 'rgba(184, 146, 62, 0.12)',
                  border: '1px solid rgba(212, 184, 140, 0.28)',
                  borderRadius: 6,
                  position: 'relative',
                }}>
                  <div style={{
                    fontSize: 10,
                    color: 'var(--gold-light)',
                    fontWeight: 600,
                    letterSpacing: '0.32em',
                    marginBottom: 8,
                    textTransform: 'uppercase',
                  }}>
                    קבוצת הקהילה
                  </div>
                  <div style={{
                    color: 'var(--cream)',
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    fontWeight: 300,
                    marginBottom: 14,
                  }}>
                    הצטרפו לקבוצת הוואטסאפ הקהילתית לעדכונים על תפילות, שיעורים ואירועים.
                  </div>
                  <button className="contact-cta-btn" style={{
                    color: 'var(--gold-light)',
                    fontWeight: 600,
                    fontSize: 13.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: 0,
                    fontFamily: 'inherit',
                    transition: 'gap 280ms var(--ease), color 280ms var(--ease)',
                    letterSpacing: '0.02em',
                  }}>
                    <Icon name="whatsapp" size={18} />
                    <span>הצטרפות לקבוצה</span>
                    <Icon name="arrow-left" size={14} />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map — Google Maps */}
          <Reveal>
            <div style={{
              height: 380,
              background: 'var(--cream-warm)',
              border: '1px solid rgba(184, 146, 62, 0.18)',
              borderRadius: 6,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(10, 42, 44, 0.06)',
            }}>
              <iframe
                title="מפת המיקום — בית הכנסת הגדול חדרה"
                src="https://www.google.com/maps?q=הגיבורים+74,+חדרה&hl=iw&z=16&output=embed"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                  display: 'block',
                  filter: 'saturate(0.92)',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Gold corner */}
              <div style={{
                position: 'absolute',
                top: 16, right: 16,
                width: 6, height: 6,
                background: 'var(--gold-light)',
                transform: 'rotate(45deg)',
                boxShadow: '0 0 10px rgba(184, 146, 62, 0.6)',
                zIndex: 2,
                pointerEvents: 'none',
              }} />

              {/* Open in Google Maps */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=%D7%94%D7%92%D7%99%D7%91%D7%95%D7%A8%D7%99%D7%9D+74,+%D7%97%D7%93%D7%A8%D7%94"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer');
                }}
                className="map-directions-btn"
                style={{
                  position: 'absolute',
                  bottom: 16, left: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #0f3a3d 0%, #0a2628 100%)',
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  padding: '11px 18px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: '1px solid rgba(184, 146, 62, 0.3)',
                  boxShadow: '0 8px 24px rgba(10, 42, 44, 0.28), 0 0 16px rgba(184, 146, 62, 0.16)',
                  zIndex: 2,
                  transition: 'gap 280ms var(--ease), box-shadow 280ms var(--ease)',
                }}
              >
                <Icon name="map-pin" size={16} stroke={1.7} />
                <span>ניווט בגוגל מפות</span>
                <Icon name="arrow-left" size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        .contact-cta-btn:hover {
          gap: 14px !important;
          color: var(--cream) !important;
        }
        .contact-form-card:hover {
          border-color: rgba(212, 184, 140, 0.32) !important;
          box-shadow: 0 4px 16px rgba(10, 42, 44, 0.08), 0 0 24px rgba(184, 146, 62, 0.1) !important;
        }
        .map-directions-btn:hover {
          gap: 12px !important;
          box-shadow: 0 10px 28px rgba(10, 42, 44, 0.36), 0 0 22px rgba(184, 146, 62, 0.28) !important;
        }
      `}</style>
    </div>
  );
};

/* ---------- Hero (Heritage/Parasha-style) ---------- */
const ContactHeroCinematic = () => (
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
        animation: 'contactHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
      }}>
        <div style={{
          fontSize: 11,
          letterSpacing: '0.4em',
          color: 'var(--gold-light)',
          fontWeight: 400,
          textTransform: 'uppercase',
          marginBottom: 28
        }}>
          בית הכנסת הגדול חדרה
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
          צור <span style={{ color: 'var(--gold-light)' }}>קשר</span>
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
          נשמח לעמוד לרשותכם — בטלפון, במייל, בוואטסאפ או בביקור אישי במשרד
        </p>
      </div>
    </div>

    <style>{`
      @keyframes contactHeroFade {
        from { opacity: 0; transform: translateY(-30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

/* ---------- Contact row — refined ---------- */
const ContactRow = ({ icon, label, value, last }) => (
  <div className="contact-detail-row" style={{
    display: 'flex',
    gap: 16,
    padding: '16px 0',
    borderBottom: last ? 'none' : '1px solid rgba(184, 146, 62, 0.15)',
    alignItems: 'center',
    transition: 'transform 280ms var(--ease)',
  }}>
    <div style={{
      width: 42, height: 42,
      borderRadius: 10,
      background: 'rgba(184, 146, 62, 0.15)',
      border: '1px solid rgba(184, 146, 62, 0.28)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--gold-light)',
      flexShrink: 0,
      transition: 'all 280ms var(--ease)',
    }}>
      <Icon name={icon} size={18} stroke={1.6} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{
        fontSize: 10,
        color: 'var(--gold-light)',
        letterSpacing: '0.32em',
        fontWeight: 600,
        textTransform: 'uppercase',
        opacity: 0.85,
      }}>{label}</div>
      <div style={{
        color: 'var(--cream)',
        fontSize: 15,
        fontWeight: 400,
        marginTop: 4,
        letterSpacing: '0.005em',
      }}>{value}</div>
    </div>
    <style>{`
      .contact-detail-row:hover > div:first-child {
        border-color: rgba(212, 184, 140, 0.65) !important;
        background: rgba(184, 146, 62, 0.25) !important;
        box-shadow: 0 0 14px rgba(212, 184, 140, 0.22) !important;
      }
    `}</style>
  </div>
);

window.Contact = Contact;

/* ---------- Form field helpers ---------- */
const Field = ({ label, placeholder, type = 'text' }) => (
  <div>
    <label style={{
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--green-ink)',
      marginBottom: 6,
      letterSpacing: '0.02em',
    }}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '12px 14px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 15,
        fontFamily: 'inherit',
        direction: 'rtl',
        background: '#fff',
        boxSizing: 'border-box',
        transition: 'border-color 220ms var(--ease), box-shadow 220ms var(--ease)',
      }}
      onFocus={(e) => {
        e.target.style.borderColor = 'var(--gold)';
        e.target.style.boxShadow = '0 0 0 3px rgba(184, 146, 62, 0.12)';
        e.target.style.outline = 'none';
      }}
      onBlur={(e) => {
        e.target.style.borderColor = 'var(--line)';
        e.target.style.boxShadow = 'none';
      }}
    />
  </div>
);

const SelectField = ({ label, options }) => (
  <div>
    <label style={{
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--green-ink)',
      marginBottom: 6,
      letterSpacing: '0.02em',
    }}>{label}</label>
    <select
      style={{
        width: '100%',
        padding: '12px 14px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 15,
        fontFamily: 'inherit',
        direction: 'rtl',
        background: '#fff',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
    >
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </div>
);
