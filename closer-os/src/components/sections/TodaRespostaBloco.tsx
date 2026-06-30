const AC = '#6d28d9'
const AC_LOW = 'rgba(109,40,217,0.35)'

const analysisCards = [
  {
    pos: 'top',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7.5" />
        <circle cx="9" cy="9" r="4.5" />
        <circle cx="9" cy="9" r="1.5" />
      </svg>
    ),
    text: <>O que <b>aconteceu?</b></>,
  },
  {
    pos: 'top-left',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="14" height="4" rx="1" />
        <rect x="2" y="7" width="14" height="4" rx="1" />
        <rect x="2" y="12" width="14" height="4" rx="1" />
      </svg>
    ),
    text: <>Em que etapa está a <b>negociação?</b></>,
  },
  {
    pos: 'top-right',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="6" r="3" />
        <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      </svg>
    ),
    text: <>O cliente quer <b>comprar</b> ou apenas <b>comparar?</b></>,
  },
  {
    pos: 'bottom-left',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1.5L2.25 4.5V9c0 3.975 2.925 7.2 6.75 7.875C12.825 16.2 15.75 12.975 15.75 9V4.5L9 1.5z" />
      </svg>
    ),
    text: <>A objeção é preço, risco ou falta de <b>urgência?</b></>,
  },
  {
    pos: 'bottom-right',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="7.5" r="5.25" />
        <line x1="11.25" y1="11.25" x2="15.75" y2="15.75" />
      </svg>
    ),
    text: <>O que está <b>travando</b> a decisão?</>,
  },
  {
    pos: 'bottom',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1.5l1.854 3.756 4.146.603-3 2.925.708 4.125L9 10.755l-3.708 1.95.708-4.125-3-2.925 4.146-.603L9 1.5z" />
      </svg>
    ),
    text: <>Qual abordagem faz mais <b>sentido?</b></>,
  },
]

// SVG nucleus ring: 6 node positions on a circle of radius 95 (cx=500, cy=280)
// 12h-left=300°, 2h=30°, 4h=120°, 6h=180°, 8h=240°, 10h=300°
// Actually: 12h-left≈340°, 2h≈60°, 4h≈120°, 6h≈180°, 8h≈240°, 10h≈300°
const CX = 500, CY = 280, NR = 95

const nodeAngles = [340, 60, 120, 180, 240, 300]
const nodePos = nodeAngles.map(deg => {
  const rad = (deg * Math.PI) / 180
  return { x: CX + NR * Math.cos(rad), y: CY + NR * Math.sin(rad) }
})

// Card positions (absolute SVG coords) — spaced around the nucleus
const cardData = [
  { i: 0, cx: 500, cy: 60, anchor: 'middle' },    // top
  { i: 1, cx: 210, cy: 100, anchor: 'end' },       // top-left
  { i: 2, cx: 790, cy: 100, anchor: 'start' },     // top-right
  { i: 3, cx: 210, cy: 460, anchor: 'end' },       // bottom-left
  { i: 4, cx: 790, cy: 460, anchor: 'start' },     // bottom-right
  { i: 5, cx: 500, cy: 490, anchor: 'middle' },    // bottom
]

const entryParticles = [
  { x: 118, y: 278, r: 2.5, o: 0.50 },
  { x: 128, y: 283, r: 2.0, o: 0.40 },
  { x: 138, y: 277, r: 1.5, o: 0.30 },
  { x: 148, y: 282, r: 1.2, o: 0.20 },
  { x: 157, y: 278, r: 0.8, o: 0.10 },
]

const exitParticles = [
  { x: 882, y: 278, r: 2.5, o: 0.50 },
  { x: 872, y: 283, r: 2.0, o: 0.40 },
  { x: 862, y: 277, r: 1.5, o: 0.30 },
  { x: 852, y: 282, r: 1.2, o: 0.20 },
  { x: 843, y: 278, r: 0.8, o: 0.10 },
]

export function TodaRespostaBloco() {
  return (
    <section id="img-todaresposta" className="img-bloco">
      <div className="img-bloco-inner">
        <div className="tr-card">

          {/* Background decorations */}
          <div className="tr-deco" aria-hidden="true">
            <div className="tr-dots tr-dots--tl" />
            <div className="tr-dots tr-dots--br" />
            <div className="tr-glow-l" />
            <div className="tr-glow-r" />
          </div>

          {/* Headline */}
          <div className="tr-content fade-up">
            <h2 className="tr-headline">
              <span className="tr-hl-dark">Toda resposta começa muito antes da{' '}</span>
              <br />
              <span className="tr-hl-accent">resposta.</span>
            </h2>
            <p className="tr-sub">
              O CloserOS não escolhe uma resposta pronta. Ele primeiro entende o contexto da negociação. Só depois decide como conduzir a conversa.
            </p>
          </div>

          {/* ── Desktop diagram (SVG) ── */}
          <div className="tr-diagram-wrap fade-up d1">
            <svg
              className="tr-diagram-svg"
              viewBox="0 0 1000 560"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <marker id="tr-arr" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
                  <polyline points="0,0.5 6,3.5 0,6.5" fill="none" stroke={AC} strokeWidth="1.3" />
                </marker>
                <filter id="tr-nucleus-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                </filter>
                <radialGradient id="tr-nucleus-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#efeaf8" />
                </radialGradient>
              </defs>

              {/* Entry line: from entry card edge to first particle */}
              <line x1="112" y1="280" x2="115" y2="280" stroke={AC} strokeWidth="2" />
              <line x1="22" y1="280" x2="113" y2="280" stroke={AC} strokeWidth="2" />

              {/* Entry particles */}
              {entryParticles.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={AC} fillOpacity={p.o} />
              ))}

              {/* Line from particles to nucleus */}
              <line x1="165" y1="280" x2={CX - NR - 2} y2={CY} stroke={AC} strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />

              {/* Nucleus glow */}
              <circle cx={CX} cy={CY} r={110} fill={AC} fillOpacity={0.07} filter="url(#tr-nucleus-glow)" />

              {/* Nucleus ring */}
              <circle cx={CX} cy={CY} r={NR} fill="url(#tr-nucleus-grad)" stroke={AC} strokeWidth="1.5" strokeOpacity="0.4" />

              {/* Nucleus logo text */}
              <text x={CX} y={CY - 8} textAnchor="middle" fontSize="20" fontWeight="700" fill="#18181b">Closer</text>
              <text x={CX + 38} y={CY - 8} textAnchor="start" fontSize="20" fontWeight="700" fill={AC}>OS</text>
              <text x={CX} y={CY + 14} textAnchor="middle" fontSize="11" fill="#a1a1aa">™</text>

              {/* Ring nodes */}
              {nodePos.map((np, i) => (
                <circle key={i} cx={np.x} cy={np.y} r={5.5} fill={AC} />
              ))}

              {/* Analysis card connectors (dashed arcs from node to card label point) */}
              {cardData.map((cd, i) => {
                const np = nodePos[i]
                return (
                  <line
                    key={i}
                    x1={np.x} y1={np.y}
                    x2={cd.cx} y2={cd.cy + 20}
                    stroke={AC_LOW}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                )
              })}

              {/* Exit line nucleus → particles */}
              <line x1={CX + NR + 2} y1={CY} x2="840" y2="280" stroke={AC} strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />

              {/* Exit particles */}
              {exitParticles.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={AC} fillOpacity={p.o} />
              ))}

              {/* Arrow to output card */}
              <line x1="884" y1="280" x2="973" y2="280" stroke={AC} strokeWidth="2" markerEnd="url(#tr-arr)" />
            </svg>

            {/* Analysis cards — absolutely positioned over SVG */}
            <div className="tr-cards-layer" aria-hidden="false">
              {/* Entry "Cliente" card */}
              <div className="tr-entry-card">
                <span className="tr-zone-label">Cliente</span>
                <div className="tr-bubble-card">
                  <span className="tr-quote tr-quote--open">&ldquo;</span>
                  <span className="tr-bubble-text">Vou pensar.</span>
                  <span className="tr-quote tr-quote--close">&rdquo;</span>
                </div>
              </div>

              {/* 6 analysis cards */}
              {analysisCards.map((c, i) => (
                <div key={i} className={`tr-analysis-card tr-ac--${c.pos}`}>
                  <div className="tr-ac-tile">
                    <span className="tr-ac-icon">{c.icon}</span>
                  </div>
                  <p className="tr-ac-text">{c.text}</p>
                </div>
              ))}

              {/* Output card */}
              <div className="tr-output-wrap">
                <span className="tr-zone-label tr-zone-label--ac">
                  <span className="tr-zl-dark">Closer</span><span className="tr-zl-ac">OS</span><sup className="tr-zl-tm">™</sup>
                </span>
                <div className="tr-output-card">
                  <div className="tr-output-bar" />
                  <div className="tr-output-inner">
                    <span className="tr-output-check">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="tr-output-title">A resposta foi construída.</p>
                  </div>
                  <div className="tr-output-skeletons">
                    <div className="tr-sk tr-sk--long" />
                    <div className="tr-sk tr-sk--short" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile layout (stacked) ── */}
          <div className="tr-mobile-flow fade-up d1" aria-hidden="false">
            {/* Client card */}
            <div className="tr-m-entry">
              <span className="tr-zone-label">Cliente</span>
              <div className="tr-bubble-card">
                <span className="tr-quote tr-quote--open">&ldquo;</span>
                <span className="tr-bubble-text">Vou pensar.</span>
                <span className="tr-quote tr-quote--close">&rdquo;</span>
              </div>
            </div>

            <div className="tr-m-arrow" aria-hidden="true">
              <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="28" stroke={AC} strokeWidth="2" /><polyline points="-3,24 1,31 5,24" fill="none" stroke={AC} strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>

            {/* Nucleus */}
            <div className="tr-m-nucleus">
              <span className="tr-m-nucleus-text">
                <span style={{ color: 'var(--text)', fontWeight: 700 }}>Closer</span>
                <span style={{ color: AC, fontWeight: 700 }}>OS</span>
                <sup style={{ color: '#a1a1aa', fontSize: '0.5em' }}>™</sup>
              </span>
            </div>

            {/* Analysis cards grid */}
            <div className="tr-m-cards">
              {analysisCards.map((c, i) => (
                <div key={i} className="tr-analysis-card-m">
                  <div className="tr-ac-tile">
                    <span className="tr-ac-icon">{c.icon}</span>
                  </div>
                  <p className="tr-ac-text">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="tr-m-arrow" aria-hidden="true">
              <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="28" stroke={AC} strokeWidth="2" /><polyline points="-3,24 1,31 5,24" fill="none" stroke={AC} strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>

            {/* Output card */}
            <div className="tr-output-wrap">
              <span className="tr-zone-label tr-zone-label--ac">
                <span className="tr-zl-dark">Closer</span><span className="tr-zl-ac">OS</span><sup className="tr-zl-tm">™</sup>
              </span>
              <div className="tr-output-card">
                <div className="tr-output-bar" />
                <div className="tr-output-inner">
                  <span className="tr-output-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="tr-output-title">A resposta foi construída.</p>
                </div>
                <div className="tr-output-skeletons">
                  <div className="tr-sk tr-sk--long" />
                  <div className="tr-sk tr-sk--short" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="tr-footer fade-up d2">
            <span className="tr-logo-closer">Closer</span><span className="tr-logo-os">OS</span><sup className="tr-logo-tm">™</sup>
          </div>

        </div>
      </div>
    </section>
  )
}
