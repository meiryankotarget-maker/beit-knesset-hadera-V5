// Top navigation header — minimal museum-style with U-shaped logo capsule
const Header = ({ currentPage, navigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    navigate(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ?
        'rgba(10, 42, 44, 0.96)' :
        'rgba(10, 42, 44, 0.82)',
        backdropFilter: 'saturate(160%) blur(16px)',
        WebkitBackdropFilter: 'saturate(160%) blur(16px)',
        borderBottom: '1px solid rgba(184, 146, 62, 0.18)',
        transition: 'all 400ms var(--ease)',
        color: '#fff', margin: "-101px 0px 0px"
      }}>
        <div className="container header-inner" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 32px',
          gap: 16,
          position: 'relative',
          minHeight: 76
        }}>
          {/* Right: donate / burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              className="btn desktop-donate"
              onClick={() => go('donate')}
              style={{
                padding: '11px 22px',
                fontSize: 12,
                letterSpacing: '0.18em',

                color: '#fff', border: "1px solid rgba(212, 184, 140, 0.5)", gap: "8px", background: "transparent", borderColor: "rgba(212, 184, 140, 0.5)", borderWidth: "2px 1px 1px", borderStyle: "solid"

              }}
              onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--gold)';e.currentTarget.style.borderColor = 'var(--gold)';}}
              onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.borderColor = 'rgba(212, 184, 140, 0.5)';}}>
              
              תרומה
            </button>
            <button
              className="mobile-burger"
              onClick={() => setMenuOpen(true)}
              aria-label="פתח תפריט"
              style={{
                padding: 8,
                color: '#fff'
              }}>
              
              <Icon name="menu" size={24} />
            </button>
          </div>

          {/* Center nav */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 160
          }}>
            {NAV.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  style={{
                    padding: '10px 0',
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    color: active ? 'var(--gold-light)' : 'rgba(255,255,255,0.85)',
                    position: 'relative',
                    transition: 'color 280ms var(--ease)'
                  }}
                  onMouseEnter={(e) => {if (!active) e.currentTarget.style.color = 'var(--gold-light)';}}
                  onMouseLeave={(e) => {if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.85)';}}>
                  
                  {item.label}
                  {active &&
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0, left: 0,
                    height: 1,
                    background: 'var(--gold-light)'
                  }} />
                  }
                </button>);

            })}
          </nav>

          {/* U-shaped capsule */}
          <button
            onClick={() => go('home')}
            aria-label="דף הבית"
            className="logo-capsule"
            style={{
              position: 'absolute',
              top: 0,
              left: 24,
              width: 132,
              height: 168,
              background: 'var(--cream)',
              borderBottomLeftRadius: 66,
              borderBottomRightRadius: 66,
              boxShadow: '0 14px 40px rgba(10, 42, 44, 0.32)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '14px 6px 20px',
              zIndex: 110,
              border: '1px solid rgba(184, 146, 62, 0.25)',
              borderTop: 'none',
              cursor: 'pointer',
              transition: 'transform 400ms var(--ease)'
            }}>
            
            <img
              src="assets/logo-clear.png"
              alt="לוגו בית הכנסת הגדול חדרה"
              style={{ width: 120, height: 120, objectFit: 'contain' }} />
            
            <div style={{
              marginTop: 4,
              fontSize: 9.5,
              fontWeight: 400,
              letterSpacing: '0.32em',
              color: 'var(--gold)'
            }}>
              תרצ״ו
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen &&
      <div style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'var(--cream)',
        animation: 'pageFadeIn 360ms var(--ease)'
      }}>
          <div style={{
          padding: '20px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--line-soft)'
        }}>
            <img src="assets/logo.png" alt="לוגו" style={{ width: 48, height: 48 }} />
            <button onClick={() => setMenuOpen(false)} aria-label="סגור" style={{ padding: 8, color: 'var(--green-ink)' }}>
              <Icon name="close" size={26} />
            </button>
          </div>
          <nav style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NAV.map((item) =>
          <button
            key={item.id}
            onClick={() => go(item.id)}
            style={{
              textAlign: 'right',
              padding: '18px 4px',
              fontSize: 22,
              fontWeight: 300,
              letterSpacing: '-0.01em',
              color: currentPage === item.id ? 'var(--gold)' : 'var(--green-ink)',
              borderBottom: '1px solid var(--line-soft)'
            }}>
            
                {item.label}
              </button>
          )}
            <button
            className="btn btn-primary"
            style={{ marginTop: 32, padding: '18px' }}
            onClick={() => go('donate')}>
            
              תרומה
            </button>
          </nav>
        </div>
      }

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: inline-flex !important; }
          .logo-capsule { width: 100px !important; height: 132px !important; padding: 10px 5px 14px !important; left: 16px !important; }
          .logo-capsule img { width: 90px !important; height: 90px !important; }
        }
        @media (min-width: 1101px) {
          .mobile-burger { display: none !important; }
        }
        @media (max-width: 520px) {
          .desktop-donate { font-size: 11px !important; padding: 9px 14px !important; }
          .logo-capsule { width: 84px !important; height: 112px !important; }
          .logo-capsule img { width: 74px !important; height: 74px !important; }
          .logo-capsule div { font-size: 8px !important; }
        }
      `}</style>
    </>);

};

window.Header = Header;