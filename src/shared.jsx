// Shared UI components — museum-grade
const { useEffect, useState, useRef } = React;

function useReveal(opts = {}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          obs.unobserve(el);
        }
      });
    }, { threshold: opts.threshold ?? 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, delay = 0, as: As = 'div', className = '', style = {}, blur = false, ...rest }) => {
  const ref = useReveal();
  return (
    <As ref={ref} className={`${blur ? 'reveal-blur' : 'reveal'} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </As>
  );
};

// Stagger children
const Stagger = ({ children, baseDelay = 0, step = 120, className = '', style = {} }) => {
  const arr = React.Children.toArray(children);
  return (
    <div className={className} style={style}>
      {arr.map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * step}>{child}</Reveal>
      ))}
    </div>
  );
};

// Word-by-word reveal — splits text into spans
const WordReveal = ({ text, as: As = 'span', delay = 0, step = 80, className = '', style = {} }) => {
  const ref = useReveal({ threshold: 0.2 });
  const words = text.split(' ');
  return (
    <As ref={ref} className={`word-reveal ${className}`} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{
          transitionDelay: `${delay + i * step}ms`,
          marginLeft: i < words.length - 1 ? '0.28em' : 0,
        }}>
          {w}
        </span>
      ))}
    </As>
  );
};

// Parallax — moves element at fraction of scroll speed
function useParallax(speed = 0.18) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${center * -speed}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [speed]);
  return ref;
}

const Parallax = ({ children, speed = 0.18, className = '', style = {} }) => {
  const ref = useParallax(speed);
  return <div ref={ref} className={className} style={{ willChange: 'transform', ...style }}>{children}</div>;
};

const GoldDivider = ({ width = 60, style = {} }) => (
  <div style={{ width, height: 1, background: 'var(--gold)', opacity: 0.7, ...style }} />
);

const SectionHead = ({ eyebrow, title, subtitle, align = 'right', light = false }) => (
  <div style={{
    textAlign: align,
    color: light ? 'var(--cream)' : undefined,
    maxWidth: 820,
    margin: align === 'center' ? '0 auto 56px' : '0 0 56px',
  }}>
    {eyebrow && (
      <div className="eyebrow" style={{
        color: light ? 'var(--gold-light)' : 'var(--gold)',
        marginBottom: 22,
      }}>
        {eyebrow}
      </div>
    )}
    <h2 style={{
      fontSize: 'clamp(30px, 4.2vw, 52px)',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      margin: '0 0 22px',
      color: light ? '#fff' : 'var(--green-ink)',
      lineHeight: 1.1,
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{
        fontSize: 17,
        fontWeight: 300,
        color: light ? 'rgba(250,246,239,0.72)' : 'var(--muted)',
        margin: 0,
        lineHeight: 1.75,
        maxWidth: 620,
        marginRight: align === 'right' ? 0 : 'auto',
        marginLeft: align === 'right' ? 'auto' : 'auto',
      }}>
        {subtitle}
      </p>
    )}
  </div>
);

// Decorative arches pattern (kept subtle)
const ArchesPattern = ({ count = 18, size = 14, style = {}, color = 'rgba(184,146,62,0.5)' }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: size * 0.4, ...style }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} style={{
        width: size,
        height: size * 1.1,
        background: color,
        borderTopLeftRadius: size,
        borderTopRightRadius: size,
      }} />
    ))}
  </div>
);

Object.assign(window, { useReveal, Reveal, Stagger, WordReveal, useParallax, Parallax, GoldDivider, SectionHead, ArchesPattern });
