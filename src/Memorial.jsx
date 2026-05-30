// Memorial page - Premium Cinematic Sacred Experience
const Memorial = ({ navigate }) => {
  const [search, setSearch] = React.useState('');
  const [litCandles, setLitCandles] = React.useState(new Set());
  
  const filtered = MEMORIALS_THIS_MONTH.filter((m) =>
    !search || m.name.includes(search) || m.date.includes(search)
  );
  
  const lightCandle = (index) => {
    setLitCandles(prev => new Set([...prev, index]));
  };

  return (
    <div className="page-fade">
      <MemorialHeroCinematic />

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
                אור הזיכרון לדורות
              </div>
              
              <p style={{ 
                fontSize: 21, 
                lineHeight: 1.85, 
                color: 'var(--green-ink)', 
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                הנצחת זכרם של יקירינו היא אחת מאבני היסוד של חיי הקהילה — בה אנו ממשיכים את שרשרת הדורות, ומאירים את עולמנו באור הנשמות שהלכו לעולמן.
              </p>
              
              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                בית הכנסת הגדול שומר על שמותיהם של בני הקהילה — באזכרות השנתיות, בלוחות הקדושים שבהיכל, ובתפילות "אל מלא רחמים" העולות לאורך כל ימות השנה לזכרם של מי שהלכו לעולמם.
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

      {/* Main Content Section */}
      <section style={{ 
        padding: '100px 0 120px', 
        background: 'var(--cream)',
        position: 'relative'
      }}>
        {/* Subtle paper texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container">
          <div className="memorial-layout" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 480px',
            gap: 56,
            alignItems: 'start'
          }}>
            {/* Memorial List - Left Side */}
            <div>
              <Reveal>
                <div style={{ marginBottom: 40 }}>
                  <div style={{
                    fontSize: 11,
                    letterSpacing: '0.35em',
                    color: 'var(--gold)',
                    marginBottom: 16,
                    fontWeight: 400,
                    textTransform: 'uppercase'
                  }}>
                    זיכרון לדורות
                  </div>
                  <h2 style={{
                    fontFamily: 'Frank Ruhl Libre, serif',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    margin: '0 0 20px',
                    color: 'var(--green-ink)'
                  }}>
                    יומני אזכרה בחודש סיון
                  </h2>
                  <div style={{
                    width: 80,
                    height: 2,
                    background: 'linear-gradient(to right, var(--gold), transparent)',
                    opacity: 0.5
                  }} />
                </div>
              </Reveal>

              {/* Search Input */}
              <Reveal delay={100}>
                <div style={{ position: 'relative', marginBottom: 32 }}>
                  <input
                    type="text"
                    placeholder="חיפוש לפי שם או תאריך..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '16px 50px 16px 20px',
                      border: '1px solid rgba(184, 146, 62, 0.2)',
                      borderRadius: 12,
                      fontSize: 15,
                      fontFamily: 'inherit',
                      direction: 'rtl',
                      background: '#fff',
                      boxShadow: '0 2px 8px rgba(10, 42, 44, 0.04)',
                      transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                    className="memorial-search"
                  />
                  <div style={{
                    position: 'absolute',
                    right: 18,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--muted)',
                    pointerEvents: 'none'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </div>
                </div>
              </Reveal>

              {/* Memorial Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {filtered.map((m, i) => {
                  const isLit = litCandles.has(i);
                  
                  return (
                    <Reveal key={i} delay={i * 60}>
                      <div className="memorial-card" style={{
                        display: 'grid',
                        gridTemplateColumns: '58px 1px 1fr auto',
                        alignItems: 'center',
                        gap: 18,
                        padding: '16px 22px',
                        background: 'linear-gradient(135deg, #fff 0%, var(--cream-warm) 100%)',
                        border: '1px solid rgba(184, 146, 62, 0.2)',
                        borderRadius: 12,
                        transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                        boxShadow: '0 4px 16px rgba(10, 42, 44, 0.06)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Corner decoration */}
                        <div style={{
                          position: 'absolute',
                          top: 0, right: 0,
                          width: 60, height: 60,
                          background: 'linear-gradient(135deg, transparent 50%, rgba(184, 146, 62, 0.05) 50%)',
                        }} />
                        
                        {/* Animated Candle */}
                        <AnimatedCandle isLit={isLit} />

                        {/* Vertical divider */}
                        <div className="memorial-divider" style={{
                          width: 1,
                          height: 46,
                          alignSelf: 'center',
                          background: 'linear-gradient(to bottom, transparent, rgba(184, 146, 62, 0.45) 18%, rgba(184, 146, 62, 0.45) 82%, transparent)'
                        }} />

                        {/* Info */}
                        <div>
                          <div style={{ 
                            fontSize: 18, 
                            fontWeight: 600, 
                            color: 'var(--green-ink)', 
                            marginBottom: 5,
                            lineHeight: 1.3,
                            textWrap: 'pretty'
                          }}>
                            {m.name}
                          </div>
                          <div style={{ 
                            fontSize: 14, 
                            color: 'var(--muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                          }}>
                            <span>{m.date}</span>
                            <span style={{ opacity: 0.5 }}>·</span>
                            <span>{m.year}</span>
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <button 
                          className="candle-btn" 
                          onClick={() => lightCandle(i)}
                          disabled={isLit}
                          style={{
                            color: isLit ? '#999' : 'var(--gold)',
                            fontSize: 14,
                            fontWeight: 500,
                            padding: '10px 20px',
                            background: isLit ? 'rgba(0,0,0,0.05)' : 'rgba(184, 146, 62, 0.08)',
                            border: `1px solid ${isLit ? 'rgba(0,0,0,0.1)' : 'rgba(184, 146, 62, 0.2)'}`,
                            borderRadius: 8,
                            cursor: isLit ? 'default' : 'pointer',
                            transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                            whiteSpace: 'nowrap',
                            opacity: isLit ? 0.6 : 1
                          }}>
                          {isLit ? 'נר דולק' : 'הדלקת נר'}
                        </button>
                      </div>
                    </Reveal>
                  );
                })}
                
                {filtered.length === 0 && (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: 60, 
                    color: 'var(--muted)',
                    fontSize: 15
                  }}>
                    לא נמצאו תוצאות
                  </div>
                )}
              </div>
            </div>

            {/* Memorial Request Form - Right Side */}
            <Reveal delay={200}>
              <div style={{
                background: 'linear-gradient(135deg, #fff 0%, var(--cream-warm) 100%)',
                padding: 44,
                borderRadius: 16,
                border: '1px solid rgba(184, 146, 62, 0.25)',
                position: 'sticky',
                top: 120,
                boxShadow: '0 12px 40px rgba(10, 42, 44, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative corner */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: 100, height: 100,
                  background: 'linear-gradient(135deg, rgba(184, 146, 62, 0.08) 0%, transparent 100%)',
                  borderRadius: '0 0 100% 0'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    color: 'var(--gold)',
                    marginBottom: 12,
                    fontWeight: 400,
                    textTransform: 'uppercase'
                  }}>
                    הקדשה
                  </div>
                  
                  <h3 style={{ 
                    fontFamily: 'Frank Ruhl Libre, serif',
                    fontSize: 28, 
                    fontWeight: 700,
                    margin: '0 0 10px',
                    color: 'var(--green-ink)',
                    letterSpacing: '-0.01em'
                  }}>
                    בקשה להנצחה
                  </h3>
                  
                  <p style={{ 
                    color: 'var(--muted)', 
                    fontSize: 15, 
                    margin: '0 0 32px',
                    lineHeight: 1.7
                  }}>
                    הקדישו לעילוי נשמת יקירכם
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <MemorialField 
                      label="שם הנפטר/ת" 
                      placeholder="לדוגמה: ר׳ אברהם בן יצחק"
                      icon="person"
                    />
                    <MemorialField 
                      label="תאריך פטירה עברי" 
                      placeholder="לדוגמה: י״ב סיון תשע״ט"
                      icon="calendar"
                    />
                    <MemorialSelectField 
                      label="סוג ההנצחה" 
                      options={[
                        'הקדשת שיעור תורה',
                        'הקדשת ספר תורה',
                        'הקדשת כיסא',
                        'הקדשת לוח שנה',
                        'אמירת קדיש',
                        'אזכרה שנתית'
                      ]}
                    />
                    <MemorialField 
                      label="טלפון ליצירת קשר" 
                      placeholder="050-000-0000"
                      icon="phone"
                    />
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: 14, 
                        fontWeight: 600, 
                        color: 'var(--green-ink)', 
                        marginBottom: 10 
                      }}>
                        פרטים נוספים
                      </label>
                      <textarea
                        placeholder="הוסיפו פרטים נוספים כאן..."
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid rgba(184, 146, 62, 0.2)',
                          borderRadius: 10,
                          fontSize: 15,
                          fontFamily: 'inherit',
                          direction: 'rtl',
                          minHeight: 100,
                          resize: 'vertical',
                          background: '#fff',
                          boxShadow: 'inset 0 2px 6px rgba(10, 42, 44, 0.04)',
                          transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                        className="memorial-textarea"
                      />
                    </div>
                    
                    <button className="memorial-submit-btn" style={{
                      marginTop: 8,
                      width: '100%',
                      padding: '16px 32px',
                      background: 'var(--green-ink)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 10,
                      fontSize: 16,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                      boxShadow: '0 4px 16px rgba(10, 42, 44, 0.2)',
                      letterSpacing: '0.02em'
                    }}>
                      שליחת בקשה
                    </button>
                    
                    {/* Privacy note */}
                    <div style={{
                      fontSize: 12,
                      color: 'var(--muted)',
                      textAlign: 'center',
                      marginTop: 8,
                      lineHeight: 1.6
                    }}>
                      🔒 הפרטים שלכם נשמרים באופן מאובטח ופרטי
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spiritual Quote Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-warm) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, var(--gold) 40px, var(--gold) 41px)`
        }} />
        
        <div className="container">
          <Reveal>
            <div style={{
              maxWidth: 800,
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  width: 60,
                  height: 1,
                  background: 'linear-gradient(to left, var(--gold), transparent)'
                }} />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M12 2v20M8 6h8M7 10h10"/>
                </svg>
                <div style={{
                  width: 60,
                  height: 1,
                  background: 'linear-gradient(to right, var(--gold), transparent)'
                }} />
              </div>
              
              <h2 style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 700,
                color: 'var(--green-ink)',
                margin: '0 0 24px',
                lineHeight: 1.4,
                letterSpacing: '-0.01em'
              }}>
                "נר ה׳ נשמת אדם"
              </h2>
              
              <p style={{
                fontSize: 18,
                color: 'var(--muted)',
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: 600,
                margin: '0 auto'
              }}>
                זכרם של צדיקים לברכה — נרם לא יכבה לעולם
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        /* Memorial card hover */
        .memorial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(10, 42, 44, 0.12) !important;
          border-color: var(--gold) !important;
        }

        .candle-btn:not(:disabled):hover {
          background: var(--gold) !important;
          color: #fff !important;
          border-color: var(--gold) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(184, 146, 62, 0.3);
        }

        /* Search input focus */
        .memorial-search:focus {
          outline: none;
          border-color: var(--gold) !important;
          box-shadow: 0 4px 20px rgba(184, 146, 62, 0.15) !important;
        }

        /* Textarea focus */
        .memorial-textarea:focus {
          outline: none;
          border-color: var(--gold) !important;
          box-shadow: inset 0 2px 6px rgba(10, 42, 44, 0.04), 0 0 0 3px rgba(184, 146, 62, 0.1) !important;
        }

        /* Submit button hover */
        .memorial-submit-btn:hover {
          background: var(--green-deep) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(10, 42, 44, 0.25), 0 0 0 4px rgba(184, 146, 62, 0.15) !important;
        }

        /* Responsive */
        @media (max-width: 920px) {
          .memorial-layout { 
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .memorial-layout > div:last-child { 
            position: static !important; 
          }
        }

        /* Mobile: candle + divider + name in one row, button full-width below */
        @media (max-width: 600px) {
          .memorial-card {
            grid-template-columns: 58px 1px 1fr !important;
            gap: 14px !important;
            padding: 16px 18px !important;
          }
          .memorial-card .candle-btn {
            grid-column: 1 / -1 !important;
            width: 100% !important;
            text-align: center;
            padding: 12px 20px !important;
            margin-top: 4px;
            padding-top: 16px !important;
            border-top: 1px solid rgba(184, 146, 62, 0.18) !important;
            border-radius: 0 0 8px 8px !important;
            background: transparent !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: none !important;
          }
        }
      `}</style>
    </div>
  );
};

// Premium Memorial Field Component
const MemorialField = ({ label, placeholder, type = 'text', icon }) => {
  const icons = {
    person: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  };

  return (
    <div>
      <label style={{ 
        display: 'block', 
        fontSize: 14, 
        fontWeight: 600, 
        color: 'var(--green-ink)', 
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        {icon && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
            {icons[icon]}
          </svg>
        )}
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '14px 16px',
          border: '1px solid rgba(184, 146, 62, 0.2)',
          borderRadius: 10,
          fontSize: 15,
          fontFamily: 'inherit',
          direction: 'rtl',
          background: '#fff',
          boxShadow: 'inset 0 2px 6px rgba(10, 42, 44, 0.04)',
          transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        className="memorial-input"
      />
      <style>{`
        .memorial-input:focus {
          outline: none;
          border-color: var(--gold) !important;
          box-shadow: inset 0 2px 6px rgba(10, 42, 44, 0.04), 0 0 0 3px rgba(184, 146, 62, 0.1) !important;
        }
      `}</style>
    </div>
  );
};

// Premium Select Field
const MemorialSelectField = ({ label, options }) => (
  <div>
    <label style={{ 
      display: 'block', 
      fontSize: 14, 
      fontWeight: 600, 
      color: 'var(--green-ink)', 
      marginBottom: 10 
    }}>
      {label}
    </label>
    <select style={{
      width: '100%',
      padding: '14px 16px',
      border: '1px solid rgba(184, 146, 62, 0.2)',
      borderRadius: 10,
      fontSize: 15,
      fontFamily: 'inherit',
      direction: 'rtl',
      background: '#fff',
      boxShadow: 'inset 0 2px 6px rgba(10, 42, 44, 0.04)',
      transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
      cursor: 'pointer'
    }}
    className="memorial-select">
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
    <style>{`
      .memorial-select:focus {
        outline: none;
        border-color: var(--gold) !important;
        box-shadow: inset 0 2px 6px rgba(10, 42, 44, 0.04), 0 0 0 3px rgba(184, 146, 62, 0.1) !important;
      }
    `}</style>
  </div>
);

// Line-art Candle Component (chamberstick style)
const AnimatedCandle = ({ isLit }) => {
  const lineColor = isLit ? 'var(--gold)' : 'rgba(184, 146, 62, 0.7)';
  return (
    <div className="candle-art" style={{
      width: 58,
      height: 58,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Warm glow when lit */}
      {isLit && (
        <div style={{
          position: 'absolute',
          top: 4,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 50,
          height: 50,
          background: 'radial-gradient(circle at 50% 32%, rgba(255, 178, 64, 0.42) 0%, transparent 62%)',
          animation: 'candleGlow 2.6s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 0
        }} />
      )}

      <svg width="58" height="58" viewBox="0 0 64 64" fill="none"
        stroke={lineColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ position: 'relative', zIndex: 1 }}>
        {/* Flame */}
        <path
          d="M32 7 C 36.5 13.5, 37.5 18.5, 32 24 C 26.5 18.5, 27.5 13.5, 32 7 Z"
          fill={isLit ? 'url(#flameFill)' : 'none'}
          stroke={isLit ? '#e0982f' : lineColor}
          style={isLit ? { transformBox: 'fill-box', transformOrigin: 'center bottom', animation: 'candleFlicker 1.7s ease-in-out infinite' } : undefined}
        />
        {/* Wick */}
        <line x1="32" y1="24" x2="32" y2="28" stroke={isLit ? '#7a5a22' : lineColor} />
        {/* Candle body */}
        <path d="M25 28 Q32 25.5 39 28 L39 47 Q32 49 25 47 Z" />
        {/* Wax drip */}
        <path d="M27.5 31 Q25.3 36 27.5 40.5" strokeWidth="1.5" />
        {/* Holder saucer */}
        <path d="M19 50 Q32 56 45 50" />
        <path d="M22 49.5 L42 49.5" />
        {/* Ring handle */}
        <path d="M45 51 Q51 51 51 47 Q51 43.5 47 44" strokeWidth="1.7" />

        <defs>
          <linearGradient id="flameFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="55%" stopColor="#ffb43c" />
            <stop offset="100%" stopColor="#ff7a1a" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        @keyframes candleFlicker {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 1; }
          25% { transform: scaleY(1.06) scaleX(0.95); opacity: 0.92; }
          50% { transform: scaleY(0.95) scaleX(1.04); opacity: 1; }
          75% { transform: scaleY(1.03) scaleX(0.97); opacity: 0.96; }
        }
        @keyframes candleGlow {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.12); }
        }
      `}</style>
    </div>
  );
};

// Cinematic Hero Section
const MemorialHeroCinematic = () => {
  return (
    <section style={{
      minHeight: '70vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: '-5%',
        backgroundImage: 'url(assets/memorial-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.4) contrast(1.1)',
      }} className="memorial-hero-bg ken-burns" />

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
          animation: 'memorialHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
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
            בית הכנסת הגדול חדרה
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
            הנצחות <span style={{ color: 'var(--gold-light)' }}>וזיכרון</span>
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
            בית הכנסת הגדול מקיים לוח יזכור דיגיטלי בו נזכרים יקירינו שהלכו לעולמם. הקדישו שיעור, ספר תורה או חפץ לעילוי נשמה
          </p>
        </div>
      </div>

      <style>{`
        @keyframes memorialHeroFade {
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

window.Memorial = Memorial;
window.MemorialField = MemorialField;
window.MemorialSelectField = MemorialSelectField;
window.MemorialHeroCinematic = MemorialHeroCinematic;
window.AnimatedCandle = AnimatedCandle;
