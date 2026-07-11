import { useEffect } from 'react'

function VturbHeroPlayer() {
  useEffect(() => {
    const SRC = 'https://scripts.converteai.net/9a830ae7-afc8-422f-84b7-f587f3948a96/players/6a446a53848157530b637061/v4/player.js'
    if (document.querySelector(`script[src="${SRC}"]`)) return
    const s = document.createElement('script')
    s.src = SRC
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <vturb-smartplayer
      id="vid-6a446a53848157530b637061"
      style={{ display: 'block', margin: '0 auto', width: '100%', '--player-border-radius': '28px' } as React.CSSProperties}
    />
  )
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-center">
        <div className="hero-text-top">
          {/* ROLLBACK: headline anterior
            Saiba exatamente o que dizer quando o cliente falar <span className="hl">&ldquo;vou pensar&rdquo;</span>, <span className="hl">&ldquo;tá caro&rdquo;</span> ou simplesmente <span className="hl">sumir depois da proposta</span>.
          */}
          <h1 className="hero-headline fade-up d1">
            Chega de perder clientes porque você <span className="hl text-gradient">não sabe o que responder</span>.
          </h1>

          <p className="hero-sub fade-up d2">
            Quando um cliente diz &ldquo;está caro&rdquo;, &ldquo;vou pensar&rdquo;, pede desconto ou simplesmente para de responder, <strong>você não precisa mais improvisar</strong>. Descreva o que aconteceu e receba exatamente o que dizer.
          </p>
        </div>

        <div className="fade-up d2 hero-vsl-col">
          <div className="vsl-wrap">
            <div className="vsl-ratio">
              <VturbHeroPlayer />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
