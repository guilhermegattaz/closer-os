// Canvas SVG: viewBox 0 0 520 420. Nucleus at (260, 210), ring radius 75.
const AC = '#6d28d9'
const ACL = 'rgba(109,40,217,0.35)'

// Ring nodes: top, top-left, top-right, bot-left, bot-right, bottom
const nodePos = [270, 225, 315, 135, 45, 90].map(deg => ({
  x: +(260 + 75 * Math.cos(deg * Math.PI / 180)).toFixed(2),
  y: +(210 + 75 * Math.sin(deg * Math.PI / 180)).toFixed(2),
}))

// Connector lines: from ring node toward each card (SVG 0 0 520 420)
const connLines: [number, number, number, number][] = [
  [260,     135,    260,   96 ], // top node → above
  [206.97, 156.97, 158,   140 ], // tl node → right
  [313.03, 156.97, 362,   140 ], // tr node → left
  [206.97, 263.03, 158,   284 ], // bl node → right
  [313.03, 263.03, 362,   284 ], // br node → left
  [260,     285,    260,  322 ], // bot node → above card
]

function TargetIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6.5"/><circle cx="8" cy="8" r="3.5"/><circle cx="8" cy="8" r="1"/></svg>
}
function LayersIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 5.5l6-3 6 3-6 3-6-3z"/><path d="M2 9.5l6 3 6-3"/><path d="M2 13l6 3 6-3"/></svg>
}
function PersonIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"/></svg>
}
function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 1.5L2 4v4.5c0 3.313 2.438 6 6 6s6-2.687 6-6V4L8 1.5z"/></svg>
}
function SearchIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6.5" cy="6.5" r="4.5"/><line x1="10" y1="10" x2="14" y2="14"/></svg>
}
function StarIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 1.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6L8 9.7l-3.2 1.7.6-3.6L2.8 5.3l3.6-.5L8 1.5z"/></svg>
}

const analysisCards = [
  { icon: <TargetIcon />, text: <>O que <b>aconteceu?</b></>, cls: 'top' },
  { icon: <LayersIcon />, text: <>Em que etapa está a <b>negociação?</b></>, cls: 'tl' },
  { icon: <PersonIcon />, text: <>O cliente quer <b>comprar</b> ou apenas <b>comparar?</b></>, cls: 'tr' },
  { icon: <ShieldIcon />, text: <>A objeção é preço, risco ou falta de <b>urgência?</b></>, cls: 'bl' },
  { icon: <SearchIcon />, text: <>O que está <b>travando</b> a decisão?</>, cls: 'br' },
  { icon: <StarIcon />,   text: <>Qual abordagem faz mais <b>sentido?</b></>, cls: 'bot' },
]

function OutputCard() {
  return (
    <div className="tr-output-card">
      <div className="tr-output-bar" />
      <div className="tr-output-inner">
        <span className="tr-output-check">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l2.5 2.5 5.5-5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="tr-output-title">A resposta foi construída.</p>
      </div>
      <div className="tr-output-skeletons">
        <div className="tr-sk tr-sk--long" />
        <div className="tr-sk tr-sk--short" />
      </div>
    </div>
  )
}

function BubbleCard() {
  return (
    <div className="tr-bubble-card">
      <span className="tr-quote tr-quote--open">&ldquo;</span>
      <span className="tr-bubble-text">Vou pensar.</span>
      <span className="tr-quote tr-quote--close">&rdquo;</span>
    </div>
  )
}

function DownArrow() {
  return (
    <div className="tr-m-arrow" aria-hidden="true">
      <svg width="2" height="32" viewBox="0 0 2 32">
        <line x1="1" y1="0" x2="1" y2="26" stroke={AC} strokeWidth="2" />
        <polyline points="-3,22 1,30 5,22" fill="none" stroke={AC} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export function TodaRespostaBloco() {
  return (
    <section id="img-todaresposta" className="img-bloco">
      <div className="img-bloco-inner">
        <div className="tr-card">

          <div className="tr-deco" aria-hidden="true">
            <div className="tr-dots tr-dots--tl" />
            <div className="tr-dots tr-dots--br" />
            <div className="tr-glow-l" />
            <div className="tr-glow-r" />
          </div>

          <div className="tr-content fade-up">
            <h2 className="tr-headline">
              <span className="tr-hl-dark">Toda resposta começa muito antes da </span>
              <br />
              <span className="tr-hl-accent">resposta.</span>
            </h2>
            <p className="tr-sub">
              O CloserOS não escolhe uma resposta pronta. Ele primeiro entende o contexto da negociação. Só depois decide como conduzir a conversa.
            </p>
          </div>

          {/* ── Desktop diagram (≥1024px) ── */}
          <div className="tr-diagram fade-up d1">

            {/* Left column */}
            <div className="tr-side-col tr-side-col--entry">
              <span className="tr-zone-label">Cliente</span>
              <BubbleCard />
            </div>

            {/* Entry → center connector */}
            <div className="tr-h-conn" aria-hidden="true" />

            {/* Center canvas */}
            <div className="tr-center-col">
              <div className="tr-canvas">

                {/* SVG: nucleus + ring + connectors + horizontal entry/exit lines */}
                <svg
                  className="tr-canvas-svg"
                  viewBox="0 0 520 420"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <radialGradient id="tr-ng" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#efeaf8" />
                    </radialGradient>
                    <filter id="tr-gf" x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="9" />
                    </filter>
                    <marker id="tr-arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polyline points="0,0.5 5.5,3.5 0,6.5" fill="none" stroke={AC} strokeWidth="1.3" />
                    </marker>
                  </defs>

                  {/* Nucleus glow */}
                  <circle cx="260" cy="210" r="110" fill={AC} fillOpacity="0.07" filter="url(#tr-gf)" />

                  {/* Nucleus ring */}
                  <circle cx="260" cy="210" r="75" fill="url(#tr-ng)" stroke={AC} strokeWidth="1.5" strokeOpacity="0.4" />

                  {/* Ring nodes */}
                  {nodePos.map((n, i) => (
                    <circle key={i} cx={n.x} cy={n.y} r="5" fill={AC} />
                  ))}

                  {/* Connector lines: node → card */}
                  {connLines.map(([x1, y1, x2, y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={ACL} strokeWidth="1" strokeDasharray="4 3" />
                  ))}

                  {/* Horizontal entry line: canvas left → nucleus left edge */}
                  <line x1="0" y1="210" x2="183" y2="210" stroke={AC} strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" />

                  {/* Horizontal exit line: nucleus right → canvas right edge with arrow */}
                  <line x1="337" y1="210" x2="515" y2="210" stroke={AC} strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" markerEnd="url(#tr-arr)" />
                </svg>

                {/* Nucleus text: absolutely centered over the SVG */}
                <div className="tr-nucleus-text" aria-hidden="true">
                  <span className="tr-nt-closer">Closer</span><span className="tr-nt-os">OS</span><sup className="tr-nt-tm">™</sup>
                </div>

                {/* Analysis cards: absolutely positioned over canvas */}
                {analysisCards.map((c, i) => (
                  <div key={i} className={`tr-acard tr-acard--${c.cls}`}>
                    <div className="tr-ac-tile">
                      <span className="tr-ac-icon">{c.icon}</span>
                    </div>
                    <p className="tr-ac-text">{c.text}</p>
                  </div>
                ))}

              </div>
            </div>

            {/* Center → exit gap (arrow is in SVG) */}
            <div className="tr-h-conn tr-h-conn--ghost" aria-hidden="true" />

            {/* Right column */}
            <div className="tr-side-col tr-side-col--exit">
              <span className="tr-zone-label tr-zone-label--ac">
                <span className="tr-zl-dark">Closer</span><span className="tr-zl-ac">OS</span><sup className="tr-zl-tm">™</sup>
              </span>
              <OutputCard />
            </div>

          </div>

          {/* ── Mobile flow (<1024px) ── */}
          <div className="tr-mobile-flow fade-up d1">

            <div className="tr-m-entry">
              <span className="tr-zone-label">Cliente</span>
              <BubbleCard />
            </div>

            <DownArrow />

            <div className="tr-m-nucleus">
              <span className="tr-m-nucleus-text">
                <span className="tr-nt-closer">Closer</span><span className="tr-nt-os">OS</span><sup className="tr-nt-tm" style={{ fontSize: '0.5em', color: '#a1a1aa' }}>™</sup>
              </span>
            </div>

            <DownArrow />

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

            <DownArrow />

            <div className="tr-m-output">
              <span className="tr-zone-label tr-zone-label--ac">
                <span className="tr-zl-dark">Closer</span><span className="tr-zl-ac">OS</span><sup className="tr-zl-tm">™</sup>
              </span>
              <OutputCard />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
