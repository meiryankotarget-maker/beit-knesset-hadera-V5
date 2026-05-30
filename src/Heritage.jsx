// Heritage & Architecture page - Premium Cinematic Design
const Heritage = ({ navigate }) => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  const architecturalGallery = [
    { src: 'assets/heritage-historic.jpg', title: 'בית הכנסת הגדול - 1936', size: 'large' },
    { src: 'assets/heritage-historic.jpg', title: 'ארון הקודש המקורי', size: 'medium' },
    { src: 'assets/heritage-historic.jpg', title: 'הכיפה המרכזית', size: 'tall' },
    { src: 'assets/heritage-historic.jpg', title: 'חלונות הויטראז׳', size: 'medium' },
    { src: 'assets/heritage-historic.jpg', title: 'היכל התפילה', size: 'large' },
    { src: 'assets/heritage-historic.jpg', title: 'פרטים אדריכליים', size: 'medium' },
    { src: 'assets/heritage-historic.jpg', title: 'מבט חיצוני', size: 'tall' },
    { src: 'assets/heritage-historic.jpg', title: 'שיפוץ 2008', size: 'medium' },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="page-fade">
      <HeritageHeroCinematic />
      
      {/* Intro Section */}
      <section style={{ 
        padding: '100px 0', 
        background: 'var(--cream)',
        position: 'relative'
      }}>
        {/* Faint architectural sketch background */}
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
                סיפור של אבן ותפילה
              </div>
              
              <p style={{ 
                fontSize: 21, 
                lineHeight: 1.85, 
                color: 'var(--green-ink)', 
                fontFamily: 'Frank Ruhl Libre, serif',
                fontWeight: 500,
                marginBottom: 28
              }}>
                בית הכנסת הגדול בחדרה הוא לא רק מקום תפילה — הוא עד חי לתולדות העיר ולמאבק היהודי להקמת בית רוחני בארץ ישראל.
              </p>
              
              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300
              }}>
                קירותיו העבים, קשתותיו המרהיבות וחלונות הויטראז׳ שלו מספרים את סיפור הדורות — מאבן פינה ראשונה שהונחה ב-1936 ועד מגדל האור שאנו מכירים היום.
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

      {/* Timeline Section */}
      <section style={{
        padding: '120px 0',
        background: 'linear-gradient(180deg, var(--cream-warm) 0%, var(--cream) 100%)',
        position: 'relative'
      }}>
        {/* Faint blueprint background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, var(--green-ink) 20px, var(--green-ink) 21px),
                           repeating-linear-gradient(90deg, transparent, transparent 20px, var(--green-ink) 20px, var(--green-ink) 21px)`
        }} />
        
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                color: 'var(--gold)',
                marginBottom: 20,
                fontWeight: 400,
                textTransform: 'uppercase'
              }}>
                מסע בזמן
              </div>
              <h2 style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: 'clamp(42px, 6vw, 68px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
                color: 'var(--green-ink)'
              }}>
                מאבני הדרך
              </h2>
              {/* Decorative divider */}
              <div style={{
                width: 100,
                height: 2,
                background: 'linear-gradient(to right, transparent, var(--gold) 30%, var(--gold) 70%, transparent)',
                margin: '0 auto',
                opacity: 0.6
              }} />
            </div>
          </Reveal>
          
          <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
            {/* Animated gold timeline line */}
            <div style={{
              position: 'absolute',
              top: 0, bottom: 0,
              right: '50%',
              width: 3,
              background: 'linear-gradient(to bottom, transparent 0%, var(--gold) 10%, var(--gold) 90%, transparent 100%)',
              opacity: 0,
              animation: 'drawTimelineLine 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards',
              boxShadow: '0 0 20px rgba(184, 146, 62, 0.3)'
            }} className="timeline-line" />
            
            {TIMELINE.map((t, i) => {
              const right = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 150}>
                  <div className="timeline-item-premium" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    marginBottom: 80,
                    direction: right ? 'rtl' : 'ltr',
                    opacity: 0,
                    animation: `slideIn${right ? 'Right' : 'Left'} 800ms cubic-bezier(0.22, 1, 0.36, 1) ${0.9 + i * 0.15}s forwards`
                  }}>
                    <div style={{
                      padding: right ? '0 60px 0 30px' : '0 30px 0 60px',
                      direction: 'rtl',
                      textAlign: right ? 'left' : 'right',
                    }}>
                      <div className="timeline-card-premium" style={{ 
                        background: '#fff',
                        padding: 36,
                        position: 'relative',
                        borderRadius: 12,
                        boxShadow: '0 8px 32px rgba(10, 42, 44, 0.1)',
                        border: '1px solid rgba(184, 146, 62, 0.2)',
                        transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                        overflow: 'hidden'
                      }}>
                        {/* Subtle corner decoration */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: 80,
                          height: 80,
                          background: 'linear-gradient(135deg, transparent 50%, rgba(184, 146, 62, 0.05) 50%)',
                          pointerEvents: 'none'
                        }} />
                        
                        {/* Year with glow */}
                        <div className="timeline-year-premium" style={{
                          fontFamily: 'Frank Ruhl Libre, serif',
                          fontSize: 52,
                          fontWeight: 900,
                          color: 'var(--gold)',
                          lineHeight: 1,
                          marginBottom: 18,
                          position: 'relative',
                          display: 'inline-block',
                          textShadow: '0 2px 20px rgba(184, 146, 62, 0.3)'
                        }}>
                          {t.year}
                        </div>
                        
                        <h3 style={{ 
                          fontSize: 22, 
                          margin: '0 0 14px',
                          fontWeight: 600,
                          color: 'var(--green-ink)',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.3
                        }}>{t.title}</h3>
                        
                        <p style={{ 
                          margin: 0, 
                          color: 'var(--muted)', 
                          fontSize: 16, 
                          lineHeight: 1.8,
                          fontWeight: 300
                        }}>{t.text}</p>
                        
                        {/* Small decorative line */}
                        <div style={{
                          width: 40,
                          height: 2,
                          background: 'var(--gold)',
                          marginTop: 20,
                          opacity: 0.3
                        }} />
                      </div>
                    </div>
                    
                    <div style={{ position: 'relative' }}>
                      {/* Timeline node with glow */}
                      <div className="timeline-dot-premium" style={{
                        position: 'absolute',
                        right: right ? 'auto' : 'calc(100% + 0px)',
                        left: right ? 'calc(100% + 0px)' : 'auto',
                        top: 40,
                        width: 16, 
                        height: 16,
                        background: 'var(--gold)',
                        borderRadius: '50%',
                        border: '4px solid var(--cream)',
                        transform: right ? 'translateX(50%) scale(0)' : 'translateX(-50%) scale(0)',
                        boxShadow: '0 0 0 0 rgba(184, 146, 62, 0.4), 0 0 20px rgba(184, 146, 62, 0.5)',
                        animation: `dotPopGlow 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${1.1 + i * 0.15}s forwards`,
                        zIndex: 2
                      }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Features Section */}
      <section style={{ 
        padding: '120px 0', 
        background: 'var(--cream)',
        position: 'relative'
      }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                color: 'var(--gold)',
                marginBottom: 20,
                fontWeight: 400,
                textTransform: 'uppercase'
              }}>
                אדריכלות ייחודית
              </div>
              <h2 style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: 'clamp(42px, 6vw, 68px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
                color: 'var(--green-ink)'
              }}>
                פרטים שמספרים סיפור
              </h2>
              <div style={{
                width: 100,
                height: 2,
                background: 'linear-gradient(to right, transparent, var(--gold) 30%, var(--gold) 70%, transparent)',
                margin: '0 auto',
                opacity: 0.6
              }} />
            </div>
          </Reveal>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 36,
              maxWidth: 1100,
              margin: '0 auto'
            }}>
              {[
                { title: 'הכיפה המרכזית', text: 'כיפה מרשימה בגובה 18 מטרים, ביסוסה על ארבע קשתות מרכזיות — סמל לארבע פינות הארץ.' },
                { title: 'חלונות הויטראז׳', text: 'שנים־עשר חלונות צבעוניים המייצגים את י״ב שבטי ישראל, בהתאם לשם המייסד של בית הכנסת.' },
                { title: 'ארון הקודש המקורי', text: 'ארון עץ ארז מגולף מ־1935, שוחזר בקפידה ב־2008 תוך שמירה על הפרטים המקוריים.' },
                { title: 'הקשתות והעמודים', text: 'שבע קשתות חצי־עיגול — זכר לשבעת ימי הבריאה. הדוגמה חוזרת בלוגו הרשמי.' },
              ].map((f, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="architecture-card-premium" style={{ 
                    background: 'linear-gradient(135deg, #fff 0%, var(--cream-warm) 100%)',
                    padding: 40,
                    borderRadius: 12,
                    boxShadow: '0 8px 32px rgba(10, 42, 44, 0.08)',
                    border: '1px solid rgba(184, 146, 62, 0.25)',
                    transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    opacity: 0,
                    animation: `slideUp 700ms cubic-bezier(0.22, 1, 0.36, 1) ${0.4 + i * 0.12}s forwards`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Corner gold accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 60,
                      height: 60,
                      background: 'linear-gradient(135deg, transparent 50%, rgba(184, 146, 62, 0.08) 50%)',
                    }} />
                    
                    <div className="arch-icon-premium" style={{ 
                      marginBottom: 24,
                      transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
                    }}>
                      <svg viewBox="0 0 40 40" width="56" style={{ display: 'block' }}>
                        <path d="M4 38 L4 20 Q20 0 36 20 L36 38" stroke="var(--gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <path d="M10 38 L10 24 Q20 10 30 24 L30 38" stroke="var(--green-deep)" strokeWidth="2" fill="none" />
                        <circle cx="20" cy="12" r="2" fill="var(--gold)" />
                      </svg>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: 22, 
                      margin: '0 0 14px',
                      fontWeight: 600,
                      color: 'var(--green-ink)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3
                    }}>{f.title}</h3>
                    
                    <p style={{ 
                      margin: 0, 
                      color: 'var(--muted)', 
                      fontSize: 16, 
                      lineHeight: 1.8,
                      fontWeight: 300
                    }}>{f.text}</p>
                    
                    {/* Decorative line */}
                    <div style={{
                      width: 40,
                      height: 2,
                      background: 'var(--gold)',
                      marginTop: 24,
                      opacity: 0.3
                    }} />
                  </div>
                </Reveal>
              ))}
            </div>
        </div>
      </section>

      {/* Architectural Gallery */}
      <section style={{
        padding: '120px 0 140px',
        background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-warm) 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                color: 'var(--gold)',
                marginBottom: 20,
                fontWeight: 400,
                textTransform: 'uppercase'
              }}>
                ארכיון חזותי
              </div>
              <h2 style={{
                fontFamily: 'Frank Ruhl Libre, serif',
                fontSize: 'clamp(42px, 6vw, 68px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
                color: 'var(--green-ink)'
              }}>
                מבטים לאורך הדורות
              </h2>
              <div style={{
                width: 100,
                height: 2,
                background: 'linear-gradient(to right, transparent, var(--gold) 30%, var(--gold) 70%, transparent)',
                margin: '0 auto',
                opacity: 0.6
              }} />
            </div>
          </Reveal>
          
          {/* Masonry Gallery */}
          <div className="heritage-masonry" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
            gridAutoRows: '20px',
          }}>
            {architecturalGallery.map((img, i) => {
              const spanSize = img.size === 'large' ? 18 : img.size === 'tall' ? 24 : 15;
              
              return (
                <div
                  key={i}
                  style={{
                    gridRowEnd: `span ${spanSize}`,
                    opacity: 0,
                    animation: `fadeInScale 600ms cubic-bezier(0.22, 1, 0.36, 1) ${0.3 + i * 0.08}s forwards`
                  }}
                >
                  <button
                    onClick={() => openLightbox(i)}
                    className="heritage-gallery-card"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 12,
                      overflow: 'hidden',
                      boxShadow: '0 8px 28px rgba(10, 42, 44, 0.12)',
                      border: '1px solid rgba(184, 146, 62, 0.2)',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                      background: '#0a2a2c',
                      padding: 0,
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                        filter: 'sepia(0.15) contrast(1.08) brightness(0.96)',
                      }}
                    />
                    <div className="heritage-overlay" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(10,42,44,0) 0%, rgba(10,42,44,0.9) 100%)',
                      opacity: 0,
                      transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 28,
                      color: '#fff',
                    }}>
                      <div style={{ 
                        fontSize: 18, 
                        fontWeight: 400,
                        lineHeight: 1.4,
                        transform: 'translateY(12px)',
                        transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
                      }} className="heritage-title">
                        {img.title}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="heritage-lightbox"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 26, 28, 0.97)',
            backdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'lightboxFadeIn 400ms cubic-bezier(0.22, 1, 0.36, 1)',
          }} 
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: 32, left: 32,
              width: 52, height: 52,
              borderRadius: '50%',
              background: 'rgba(250, 246, 239, 0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(250, 246, 239, 0.15)',
              color: 'var(--cream)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            className="lightbox-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div 
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              animation: 'lightboxImageScale 400ms cubic-bezier(0.22, 1, 0.36, 1)',
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={architecturalGallery[currentImage].src}
              alt={architecturalGallery[currentImage].title}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 8,
                boxShadow: '0 24px 72px rgba(0, 0, 0, 0.6)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: -60,
              left: 0, right: 0,
              textAlign: 'center',
              color: 'var(--cream)',
              fontSize: 16,
              fontWeight: 300,
            }}>
              {architecturalGallery[currentImage].title}
            </div>
          </div>
        </div>
      )}
      <style>{`
        /* Timeline animations */
        @keyframes drawTimelineLine {
          from { 
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
          }
          to { 
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(-60px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(60px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes dotPopGlow {
          0% {
            transform: translateX(50%) scale(0);
            box-shadow: 0 0 0 0 rgba(184, 146, 62, 0.4), 0 0 0 rgba(184, 146, 62, 0.5);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(184, 146, 62, 0.2), 0 0 25px rgba(184, 146, 62, 0.6);
          }
          100% {
            transform: translateX(50%) scale(1);
            box-shadow: 0 0 0 4px rgba(184, 146, 62, 0.3), 0 0 20px rgba(184, 146, 62, 0.5);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes lightboxImageScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Premium Timeline card hover */
        .timeline-card-premium:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(10, 42, 44, 0.18) !important;
          border-color: var(--gold) !important;
        }

        .timeline-card-premium:hover .timeline-year-premium {
          text-shadow: 0 2px 30px rgba(184, 146, 62, 0.5) !important;
        }

        /* Premium Architecture card hover */
        .architecture-card-premium:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 56px rgba(10, 42, 44, 0.2) !important;
          border-color: var(--gold) !important;
        }

        .architecture-card-premium:hover .arch-icon-premium {
          transform: rotate(5deg) scale(1.08);
        }

        /* Heritage gallery hover */
        .heritage-gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(10, 42, 44, 0.24) !important;
          border-color: var(--gold) !important;
        }

        .heritage-gallery-card:hover img {
          transform: scale(1.1);
        }

        .heritage-gallery-card:hover .heritage-overlay {
          opacity: 1;
        }

        .heritage-gallery-card:hover .heritage-title {
          transform: translateY(0) !important;
        }

        /* Lightbox buttons */
        .lightbox-btn:hover {
          background: rgba(250, 246, 239, 0.16) !important;
          transform: scale(1.08);
          border-color: rgba(250, 246, 239, 0.3) !important;
        }

        /* Responsive */
        @media (max-width: 820px) {
          .timeline-item-premium { 
            grid-template-columns: 1fr !important; 
            direction: rtl !important; 
          }
          .timeline-item-premium > div:first-child { 
            padding: 0 24px 0 24px !important; 
            text-align: right !important; 
          }
          .timeline-item-premium > div:last-child { 
            display: none; 
          }
          .timeline-line { 
            right: 16px !important; 
          }
          .heritage-masonry { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Cinematic Hero Section
const HeritageHeroCinematic = () => {
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
        backgroundImage: 'url(assets/heritage-historic.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.4) contrast(1.1)',
      }} className="heritage-hero-bg ken-burns" />

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
          animation: 'heritageHeroFade 1200ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards'
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
            תשעים ושלוש שנים של תפילה ומסורת
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
            מורשת <span style={{ color: 'var(--gold-light)' }}>ואדריכלות</span>
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
            סיפור של חזון, אמונה ויצירה אדריכלית — מאבן הפינה הראשונה ב-1936 ועד מגדל האור המפואר שאנו מכירים כיום
          </p>
        </div>
      </div>

      <style>{`
        @keyframes heritageHeroFade {
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

window.Heritage = Heritage;
