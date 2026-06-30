const AC = '#6d28d9'
const GL = '#d4d4d8'
const GA = '#a1a1aa'
const TK = '#18181b'

const steps = [
  { id: '01', label: 'Primeiro Contato' },
  { id: '02', label: 'Reunião' },
  { id: '03', label: 'Diagnóstico' },
  { id: '04', label: 'Proposta' },
  { id: '05', label: 'Negociação' },
  { id: '06', label: 'Resposta' },
]

// Horizontal SVG: viewBox 0 0 1000 175
const CY = 50, R = 18
const NX = [55, 196, 337, 478, 619, 760, 901]

const hParticles = [
  { x: 790, y: 47, r: 2.5, o: 0.50 },
  { x: 798, y: 54, r: 2.0, o: 0.40 },
  { x: 806, y: 47, r: 1.5, o: 0.33 },
  { x: 814, y: 53, r: 1.5, o: 0.25 },
  { x: 822, y: 49, r: 1.2, o: 0.18 },
  { x: 830, y: 52, r: 1.0, o: 0.12 },
  { x: 839, y: 47, r: 0.8, o: 0.07 },
]

// Vertical SVG: viewBox 0 0 280 510
const VNY = [40, 107, 174, 241, 308, 375]
const GHOST_Y = 460

const vParticles = [
  { x: 50, y: 406, r: 2.5, o: 0.50 },
  { x: 46, y: 413, r: 2.0, o: 0.40 },
  { x: 54, y: 419, r: 1.5, o: 0.30 },
  { x: 49, y: 425, r: 1.2, o: 0.20 },
  { x: 51, y: 432, r: 0.8, o: 0.10 },
]

export function TrabalhoPerdidoBloco() {
  return (
    <section id="img-trabalhoperdido" className="img-bloco">
      <div className="img-bloco-inner">
        <div className="tp-card">

          {/* Background decorations */}
          <div className="tp-deco" aria-hidden="true">
            <div className="tp-circle-r" />
            <div className="tp-arc-bl" />
            <div className="tp-dots tp-dots--tl" />
            <div className="tp-dots tp-dots--br" />
          </div>

          {/* Headline */}
          <div className="tp-content fade-up">
            <h2 className="tp-headline">
              <span className="tp-hl-dark">O problema nunca foi<br />perder um cliente.</span>
              <br />
              <span className="tp-hl-accent">Foi desperdiçar tudo o que<br />veio antes dele.</span>
            </h2>
            <p className="tp-sub">
              Uma resposta errada não faz você perder apenas uma negociação. Ela reduz o valor de todo o tempo, energia e confiança investidos até aquele momento.
            </p>
          </div>

          {/* Timeline */}
          <div className="tp-tl-wrap fade-up d1">

            {/* ── Horizontal (≥860px) ─────────────────────────── */}
            <svg className="tp-tl-h" viewBox="0 0 1000 175" aria-hidden="true" focusable="false">
              <defs>
                <marker id="tp-arr" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
                  <polyline points="0,0.5 6,3.5 0,6.5" fill="none" stroke={AC} strokeWidth="1.2" />
                </marker>
                <filter id="tp-glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
              </defs>

              {/* Lines */}
              <line x1={NX[0]+R} y1={CY} x2={NX[4]-R} y2={CY} stroke={GL} strokeWidth="1" />
              <line x1={NX[4]+R} y1={CY} x2={NX[5]-R} y2={CY} stroke={AC} strokeWidth="2" />

              {/* Wall */}
              <line x1={NX[5]+R+5} y1={CY-11} x2={NX[5]+R+5} y2={CY+11} stroke={AC} strokeWidth="1.5" />

              {/* Particles */}
              {hParticles.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={AC} fillOpacity={p.o} />
              ))}

              {/* Dashed → ghost */}
              <line x1="848" y1={CY} x2={NX[6]-R} y2={CY} stroke={GL} strokeWidth="1" strokeDasharray="4 4" />
              <circle cx={NX[6]} cy={CY} r={R} fill="none" stroke={GL} strokeWidth="1" />

              {/* Nodes 01-05 */}
              {NX.slice(0, 5).map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={CY} r={R} fill="none" stroke={GL} strokeWidth="1" />
                  <polygon points={`${x-5},${CY-7} ${x+7},${CY} ${x-5},${CY+7}`} fill={GA} />
                </g>
              ))}

              {/* Node 06 */}
              <circle cx={NX[5]} cy={CY} r={26} fill={AC} fillOpacity={0.15} filter="url(#tp-glow)" />
              <circle cx={NX[5]} cy={CY} r={R} fill={AC} />

              {/* Labels 01-05 */}
              {NX.slice(0, 5).map((x, i) => (
                <g key={i}>
                  <text x={x} y={CY+R+17} textAnchor="middle" fontSize="13" fontWeight="600" fill={GA}>{steps[i].id}</text>
                  <text x={x} y={CY+R+31} textAnchor="middle" fontSize="11" fill={GA}>{steps[i].label}</text>
                </g>
              ))}

              {/* Label 06 */}
              <text x={NX[5]} y={CY+R+17} textAnchor="middle" fontSize="13" fontWeight="600" fill={TK}>06</text>
              <text x={NX[5]} y={CY+R+31} textAnchor="middle" fontSize="11" fontWeight="700" fill={TK}>Resposta</text>

              {/* Arrow + annotation */}
              <path d={`M 555 148 C 620 148, 755 112, ${NX[5]+R+4} 63`}
                fill="none" stroke={AC} strokeWidth="1.5" markerEnd="url(#tp-arr)" />
              <text x="460" y="155" textAnchor="middle" fontSize="13.5" fontWeight="500" fill={AC}>
                Aqui, tudo pode perder o valor.
              </text>
            </svg>

            {/* ── Vertical (<860px) ───────────────────────────── */}
            <svg className="tp-tl-v" viewBox="0 0 280 510" aria-hidden="true" focusable="false">
              <defs>
                <marker id="tp-arr-v" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
                  <polyline points="0,0.5 6,3.5 0,6.5" fill="none" stroke={AC} strokeWidth="1.2" />
                </marker>
                <filter id="tp-glow-v" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
              </defs>

              {/* Lines */}
              <line x1="50" y1={VNY[0]+R} x2="50" y2={VNY[4]-R} stroke={GL} strokeWidth="1" />
              <line x1="50" y1={VNY[4]+R} x2="50" y2={VNY[5]-R} stroke={AC} strokeWidth="2" />

              {/* Wall (just below node 06) */}
              <line x1="42" y1={VNY[5]+R+7} x2="58" y2={VNY[5]+R+7} stroke={AC} strokeWidth="1.5" />

              {/* Particles */}
              {vParticles.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={AC} fillOpacity={p.o} />
              ))}

              {/* Dashed → ghost */}
              <line x1="50" y1="437" x2="50" y2={GHOST_Y-R} stroke={GL} strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy={GHOST_Y} r={R} fill="none" stroke={GL} strokeWidth="1" />

              {/* Nodes 01-05 */}
              {VNY.slice(0, 5).map((cy, i) => (
                <g key={i}>
                  <circle cx="50" cy={cy} r={R} fill="none" stroke={GL} strokeWidth="1" />
                  <polygon points={`45,${cy-7} 57,${cy} 45,${cy+7}`} fill={GA} />
                </g>
              ))}

              {/* Node 06 */}
              <circle cx="50" cy={VNY[5]} r={26} fill={AC} fillOpacity={0.15} filter="url(#tp-glow-v)" />
              <circle cx="50" cy={VNY[5]} r={R} fill={AC} />

              {/* Labels 01-05 */}
              {VNY.slice(0, 5).map((cy, i) => (
                <g key={i}>
                  <text x="80" y={cy-4} fontSize="12" fontWeight="600" fill={GA}>{steps[i].id}</text>
                  <text x="80" y={cy+10} fontSize="11" fill={GA}>{steps[i].label}</text>
                </g>
              ))}

              {/* Label 06 */}
              <text x="80" y={VNY[5]-4} fontSize="12" fontWeight="600" fill={TK}>06</text>
              <text x="80" y={VNY[5]+10} fontSize="11" fontWeight="700" fill={TK}>Resposta</text>

              {/* Arrow + annotation */}
              <path d={`M 168 421 C 145 416, 78 404, 59 ${VNY[5]+R+8}`}
                fill="none" stroke={AC} strokeWidth="1.5" markerEnd="url(#tp-arr-v)" />
              <text x="82" y="414" fontSize="12" fontWeight="500" fill={AC}>Aqui, tudo pode</text>
              <text x="82" y="428" fontSize="12" fontWeight="500" fill={AC}>perder o valor.</text>
            </svg>

          </div>

          {/* Footer logo */}
          <div className="tp-footer fade-up d2">
            <span className="tp-logo-closer">Closer</span><span className="tp-logo-os">OS</span><sup className="tp-logo-tm">™</sup>
          </div>

        </div>
      </div>
    </section>
  )
}
