// Donate page — editorial, museum-grade (matches home-page design language)
const Donate = ({ navigate }) => {
  const [tier, setTier] = React.useState(180);
  const [custom, setCustom] = React.useState('');
  const [freq, setFreq] = React.useState('once');
  const [purpose, setPurpose] = React.useState('general');

  const amount = custom ? parseInt(custom) || 0 : tier;
  const purposeLabel = (DONATION_PURPOSES.find((p) => p.id === purpose) || {}).label || '';

  return (
    <div className="page-fade">
      <DonateHero />

      <section className="donate-page" style={{
        padding: 'clamp(64px, 8vw, 100px) 0 clamp(80px, 10vw, 120px)',
        background: 'var(--cream)',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>
          <div className="donate-grid" style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: 'clamp(40px, 5vw, 80px)',
            alignItems: 'start'
          }}>

            {/* RIGHT (7fr) — the form, editorial steps */}
            <div>
              {/* Step 01 — frequency */}
              <Reveal>
                <DonateStep num="01" label="תדירות התרומה" />
                <div className="donate-freq" style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 'clamp(40px, 5vw, 56px)'
                }}>
                  {[{ id: 'once', label: 'תרומה חד־פעמית', sub: 'תשלום בודד' },
                    { id: 'monthly', label: 'הוראת קבע חודשית', sub: 'תמיכה מתמשכת' }].map((f) =>
                    <button key={f.id} onClick={() => setFreq(f.id)}
                      className={'donate-select' + (freq === f.id ? ' is-active' : '')}>
                      <span className="donate-select-title">{f.label}</span>
                      <span className="donate-select-sub">{f.sub}</span>
                    </button>
                  )}
                </div>
              </Reveal>

              {/* Step 02 — amount */}
              <Reveal delay={100}>
                <DonateStep num="02" label="בחירת סכום" />
                <div className="donate-tiers" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 16
                }}>
                  {DONATION_TIERS.map((t) =>
                    <button key={t.amount} onClick={() => { setTier(t.amount); setCustom(''); }}
                      className={'donate-tier' + (tier === t.amount && !custom ? ' is-active' : '')}>
                      <span className="donate-tier-amount">
                        <span className="donate-tier-shekel">₪</span>{t.amount.toLocaleString()}
                      </span>
                      <span className="donate-tier-label">{t.label}</span>
                    </button>
                  )}
                </div>
                <div style={{ position: 'relative', marginBottom: 'clamp(40px, 5vw, 56px)' }}>
                  <input
                    type="number"
                    placeholder="סכום אחר"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className={'donate-custom' + (custom ? ' is-active' : '')} />
                  <span className="donate-custom-shekel">₪</span>
                </div>
              </Reveal>

              {/* Step 03 — purpose */}
              <Reveal delay={200}>
                <DonateStep num="03" label="ייעוד התרומה" />
                <div className="donate-purpose">
                  {DONATION_PURPOSES.map((p) =>
                    <button key={p.id} onClick={() => setPurpose(p.id)}
                      className={'donate-purpose-row' + (purpose === p.id ? ' is-active' : '')}>
                      <span className="donate-purpose-icon">
                        <Icon name={p.icon} size={18} stroke={1.5} />
                      </span>
                      <span className="donate-purpose-label">{p.label}</span>
                      <span className="donate-purpose-check" aria-hidden="true">
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                          <path d="M1 5.5L5 9.5L13 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </Reveal>
            </div>

            {/* LEFT (5fr) — sticky green summary banner */}
            <div className="donate-summary-wrap">
              <Reveal blur delay={140}>
                <div className="donate-summary" style={{ position: 'relative' }}>
                  {/* Offset gold-line frame — shared signature */}
                  <div aria-hidden="true" style={{
                    position: 'absolute', inset: '-14px 18px 18px -14px',
                    border: '1px solid rgba(184,146,62,0.45)', pointerEvents: 'none'
                  }} />

                  <div className="donate-summary-card" style={{
                    position: 'relative',
                    background: 'linear-gradient(180deg, #0a2628 0%, #082022 100%)',
                    border: '1px solid rgba(184, 146, 62, 0.28)',
                    color: 'var(--cream)',
                    overflow: 'hidden'
                  }}>
                    {/* Ambient glow */}
                    <div aria-hidden="true" style={{
                      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                      width: '80%', height: 180,
                      background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(184, 146, 62, 0.12) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', padding: 'clamp(32px, 3.5vw, 44px) clamp(28px, 3vw, 40px) clamp(28px, 3vw, 36px)' }}>
                      <div style={{
                        fontSize: 11, letterSpacing: '0.36em', color: 'var(--gold-light)',
                        fontWeight: 500, textTransform: 'uppercase', marginBottom: 22, textAlign: 'center'
                      }}>
                        סכום התרומה
                      </div>

                      <div style={{
                        fontFamily: 'Frank Ruhl Libre, serif',
                        fontSize: 'clamp(56px, 6vw, 76px)',
                        fontWeight: 500, lineHeight: 0.95,
                        textAlign: 'center', letterSpacing: '-0.02em',
                        color: 'var(--cream)'
                      }}>
                        <span style={{ fontSize: '0.4em', fontWeight: 400, color: 'var(--gold-light)', verticalAlign: 'middle', marginLeft: 6 }}>₪</span>
                        {amount.toLocaleString()}
                      </div>

                      <div style={{
                        marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12
                      }}>
                        <div style={{ width: 28, height: 1, background: 'rgba(212,184,140,0.4)' }} />
                        <div style={{
                          fontSize: 11.5, letterSpacing: '0.22em', color: 'var(--gold-light)',
                          textTransform: 'uppercase', whiteSpace: 'nowrap'
                        }}>
                          {freq === 'monthly' ? 'חודשי · הוראת קבע' : 'תרומה חד־פעמית'}
                        </div>
                        <div style={{ width: 28, height: 1, background: 'rgba(212,184,140,0.4)' }} />
                      </div>

                      {/* meta lines */}
                      <div style={{ marginTop: 28, borderTop: '1px solid rgba(212,184,140,0.22)' }}>
                        <DonateSummaryRow label="ייעוד" value={purposeLabel.split(' · ')[0]} />
                        <DonateSummaryRow label="אישור מס" value="סעיף 46א" last />
                      </div>

                      {/* Actions */}
                      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <button className="donate-pay-primary">
                          <Icon name="heart" size={16} stroke={1.8} />
                          <span>תרומה מאובטחת בכרטיס</span>
                        </button>
                        <button className="donate-pay-ghost">תרומה בביט</button>
                      </div>
                    </div>
                  </div>

                  {/* Museum-plaque caption */}
                  <div style={{
                    marginTop: 14, display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', gap: 16,
                    fontSize: 10.5, letterSpacing: '0.3em',
                    color: 'var(--muted-2)', textTransform: 'uppercase'
                  }}>
                    <span>אישור 46א מעל ₪50</span>
                    <span style={{ color: 'var(--gold)' }}>תשלום מוצפן · SSL</span>
                  </div>

                  <p style={{
                    marginTop: 18, fontSize: 13.5, fontWeight: 300, lineHeight: 1.75,
                    color: 'var(--muted)', maxWidth: 360
                  }}>
                    ניתן לתרום גם בהעברה בנקאית או בצ׳ק.{' '}
                    <button onClick={() => navigate('contact')} style={{
                      color: 'var(--gold)', fontWeight: 400, padding: 0,
                      borderBottom: '1px solid var(--gold)', fontFamily: 'inherit', fontSize: 'inherit'
                    }}>פרטים בעמוד צור קשר</button>.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .donate-step-head {
          display: flex; align-items: baseline; gap: 16px;
          margin-bottom: clamp(20px, 2.5vw, 28px);
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(184,146,62,0.2);
        }
        .donate-step-num {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: 13px; font-weight: 500;
          color: var(--gold); letter-spacing: 0.1em;
        }
        .donate-step-label {
          font-size: 11px; letter-spacing: 0.32em;
          color: var(--green-ink); font-weight: 500;
          text-transform: uppercase;
        }

        .donate-select {
          display: flex; flex-direction: column; gap: 5px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(184,146,62,0.25);
          border-radius: 2px;
          text-align: right; cursor: pointer; font-family: inherit;
          transition: border-color 280ms var(--ease), background 280ms var(--ease), box-shadow 280ms var(--ease);
        }
        .donate-select-title { font-size: 16px; font-weight: 500; color: var(--green-ink); }
        .donate-select-sub { font-size: 12px; font-weight: 300; color: var(--muted-2); letter-spacing: 0.04em; }
        .donate-select:hover { border-color: rgba(184,146,62,0.5); }
        .donate-select.is-active {
          border-color: var(--gold);
          background: var(--cream-warm);
          box-shadow: inset 0 0 0 1px var(--gold);
        }

        .donate-tier {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 22px 8px;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(184,146,62,0.25);
          border-radius: 2px;
          cursor: pointer; font-family: inherit;
          transition: border-color 280ms var(--ease), background 280ms var(--ease), box-shadow 280ms var(--ease), transform 280ms var(--ease);
        }
        .donate-tier:hover { border-color: rgba(184,146,62,0.5); transform: translateY(-2px); }
        .donate-tier-amount {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(20px, 1.8vw, 26px); font-weight: 500;
          color: var(--green-ink); line-height: 1; letter-spacing: -0.015em;
        }
        .donate-tier-shekel { font-size: 0.6em; color: var(--gold); margin-left: 2px; }
        .donate-tier-label {
          font-size: 10.5px; font-weight: 400; color: var(--muted-2);
          letter-spacing: 0.04em; text-align: center; line-height: 1.3;
        }
        .donate-tier.is-active {
          border-color: var(--gold);
          background: var(--green-ink);
          box-shadow: 0 8px 24px rgba(10,42,44,0.18);
        }
        .donate-tier.is-active .donate-tier-amount { color: var(--cream); }
        .donate-tier.is-active .donate-tier-shekel { color: var(--gold-light); }
        .donate-tier.is-active .donate-tier-label { color: var(--gold-light); }

        .donate-custom {
          width: 100%; padding: 16px 44px 16px 18px;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(184,146,62,0.25);
          border-radius: 2px;
          font-size: 16px; font-weight: 400; color: var(--green-ink);
          direction: rtl; font-family: inherit;
          transition: border-color 280ms var(--ease), box-shadow 280ms var(--ease);
        }
        .donate-custom::placeholder { color: var(--muted-2); font-weight: 300; }
        .donate-custom:focus { outline: none; border-color: var(--gold); box-shadow: inset 0 0 0 1px var(--gold); }
        .donate-custom.is-active { border-color: var(--gold); box-shadow: inset 0 0 0 1px var(--gold); }
        .donate-custom-shekel {
          position: absolute; right: 18px; top: 50%; transform: translateY(-50%);
          color: var(--gold); font-size: 16px; pointer-events: none;
        }

        .donate-purpose { border-top: 1px solid rgba(184,146,62,0.2); }
        .donate-purpose-row {
          width: 100%; display: grid;
          grid-template-columns: auto 1fr auto; gap: 16px; align-items: center;
          padding: 16px 4px;
          background: transparent; border: none;
          border-bottom: 1px solid rgba(184,146,62,0.16);
          cursor: pointer; font-family: inherit; text-align: right;
          transition: padding 280ms var(--ease);
        }
        .donate-purpose-row:hover { padding-right: 10px; }
        .donate-purpose-icon {
          width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(184,146,62,0.3); border-radius: 2px;
          color: var(--gold); flex-shrink: 0;
          transition: background 280ms var(--ease), color 280ms var(--ease), border-color 280ms var(--ease);
        }
        .donate-purpose-label { font-size: 15px; font-weight: 400; color: var(--green-ink); letter-spacing: 0.005em; }
        .donate-purpose-check {
          color: var(--gold); opacity: 0; transform: scale(0.7);
          transition: opacity 280ms var(--ease), transform 280ms var(--ease);
        }
        .donate-purpose-row.is-active .donate-purpose-icon { background: var(--green-ink); color: var(--gold-light); border-color: var(--green-ink); }
        .donate-purpose-row.is-active .donate-purpose-check { opacity: 1; transform: scale(1); }

        .donate-summary-wrap { position: sticky; top: 110px; }

        .donate-pay-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          width: 100%; padding: 16px;
          background: var(--gold); color: var(--green-ink);
          border: none; border-radius: 2px;
          font-family: inherit; font-size: 14px; font-weight: 600; letter-spacing: 0.1em;
          cursor: pointer;
          transition: background 300ms var(--ease), transform 300ms var(--ease), box-shadow 300ms var(--ease);
          box-shadow: 0 6px 24px rgba(184,146,62,0.28);
        }
        .donate-pay-primary:hover { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 10px 32px rgba(184,146,62,0.36); }
        .donate-pay-ghost {
          display: inline-flex; align-items: center; justify-content: center;
          width: 100%; padding: 14px;
          background: transparent; color: rgba(245,238,221,0.85);
          border: 1px solid rgba(212,184,140,0.4); border-radius: 2px;
          font-family: inherit; font-size: 13.5px; font-weight: 400; letter-spacing: 0.1em;
          cursor: pointer;
          transition: border-color 280ms var(--ease), background 280ms var(--ease), color 280ms var(--ease);
        }
        .donate-pay-ghost:hover { border-color: var(--gold-light); background: rgba(212,184,140,0.08); color: var(--cream); }

        @media (max-width: 920px) {
          .donate-grid { grid-template-columns: 1fr !important; }
          .donate-summary-wrap { position: static !important; }
          .donate-tiers { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .donate-freq { grid-template-columns: 1fr !important; }
          .donate-tiers { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
};

/* ───────── Sub-components ───────── */

const DonateStep = ({ num, label }) =>
  <div className="donate-step-head">
    <span className="donate-step-num">{num}</span>
    <span className="donate-step-label">{label}</span>
  </div>;

const DonateSummaryRow = ({ label, value, last = false }) =>
  <div style={{
    display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'baseline',
    padding: '13px 0',
    borderBottom: last ? 'none' : '1px solid rgba(212,184,140,0.16)'
  }}>
    <span style={{ fontSize: 10.5, letterSpacing: '0.28em', color: 'rgba(245,238,221,0.55)', textTransform: 'uppercase' }}>{label}</span>
    <span style={{ fontFamily: 'Frank Ruhl Libre, serif', fontSize: 14.5, fontWeight: 500, color: 'var(--cream)', textAlign: 'left' }}>{value}</span>
  </div>;

/* ───────── Editorial hero — matches home-page language ───────── */
const DonateHero = () =>
  <section className="donate-hero" style={{
    padding: 'clamp(80px, 10vw, 120px) 0 clamp(56px, 7vw, 80px)',
    background: 'var(--cream)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Vertical running label */}
    <div aria-hidden="true" className="donate-hero-vlabel" style={{
      position: 'absolute', left: 24, top: '52%', transform: 'translateY(-50%) rotate(180deg)',
      writingMode: 'vertical-rl', fontFamily: 'Heebo, sans-serif',
      fontSize: 10, letterSpacing: '0.48em', color: 'var(--gold)',
      fontWeight: 500, textTransform: 'uppercase', opacity: 0.55
    }}>
      PARTNERSHIP  ·  שותפות  ·  EST 1936
    </div>

    <div className="container" style={{ position: 'relative', maxWidth: 1280 }}>
      <Reveal>
        <div className="donate-hero-meta" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 'clamp(40px, 5vw, 64px)', paddingBottom: 18,
          borderBottom: '1px solid rgba(184,146,62,0.18)'
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.42em', color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase' }}>
            תרומות ותמיכה
          </div>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 16,
            fontSize: 11, letterSpacing: '0.28em', color: 'var(--muted-2)', fontWeight: 400, textTransform: 'uppercase'
          }}>
            <span>תרומה · הקדשה · קרן זיכרון</span>
            <span style={{ color: 'var(--gold)' }}>·</span>
            <span style={{ color: 'var(--green-ink)' }}>קבלה לצרכי מס · סעיף 46</span>
          </div>
        </div>
      </Reveal>

      <div className="donate-hero-grid" style={{
        display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'clamp(36px, 5vw, 72px)', alignItems: 'end'
      }}>
        <div>
          <Reveal>
            <div style={{ fontSize: 11, letterSpacing: '0.32em', color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase', marginBottom: 18 }}>
              שותפות  ·  נתינה
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{
              fontFamily: 'Heebo, sans-serif',
              fontSize: 'clamp(44px, 6.2vw, 88px)', fontWeight: 200,
              color: 'var(--green-ink)', margin: 0, lineHeight: 1.02,
              letterSpacing: '-0.035em', textWrap: 'balance'
            }}>
              <span style={{
                fontFamily: 'Frank Ruhl Libre, serif', fontSize: '0.28em', fontWeight: 400, fontStyle: 'italic',
                color: 'var(--gold)', letterSpacing: '0.04em', display: 'block', marginBottom: '0.5em', opacity: 0.9
              }}>
                בית הכנסת מתקיים
              </span>
              תרומות{' '}
              <span style={{ fontFamily: 'Frank Ruhl Libre, serif', fontStyle: 'italic', fontWeight: 500, color: 'var(--gold)' }}>ותמיכה</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 12, maxWidth: 220 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--gold)' }} />
              <div style={{ width: 6, height: 6, background: 'var(--gold)', transform: 'rotate(45deg)' }} />
              <div style={{ width: 24, height: 1, background: 'rgba(184,146,62,0.35)' }} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p style={{
            fontSize: 'clamp(16px, 1.4vw, 19px)', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--muted)', margin: 0, maxWidth: 440, paddingBottom: 6
          }}>
            כל תרומה — קטנה כגדולה — מחזיקה את בית התורה והתפילה הזה.
            התרומות מאפשרות לקיים תפילות ושיעורים, להחזיק את הבניין ההיסטורי, ולסייע למשפחות בקהילה.
          </p>
        </Reveal>
      </div>
    </div>

    <style>{`
      @media (max-width: 920px) {
        .donate-hero-vlabel { display: none; }
        .donate-hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; align-items: start !important; }
      }
      @media (max-width: 640px) {
        .donate-hero-meta { flex-direction: column; align-items: flex-start; gap: 10px; }
      }
    `}</style>
  </section>;

window.Donate = Donate;
