import { useEffect } from 'react'
import { KIWIFY_URL } from '../../data/links'

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
        <div className="hero-text-col">
          {/* ROLLBACK: headline anterior
            Saiba exatamente o que dizer quando o cliente falar <span className="hl">&ldquo;vou pensar&rdquo;</span>, <span className="hl">&ldquo;tá caro&rdquo;</span> ou simplesmente <span className="hl">sumir depois da proposta</span>.
          */}
          <h1 className="hero-headline fade-up d1">
            Chega de perder clientes porque você <span className="hl text-gradient">não sabe o que responder</span>.
          </h1>

          <p className="hero-sub fade-up d2">
            Quando um cliente diz &ldquo;está caro&rdquo;, &ldquo;vou pensar&rdquo;, pede desconto ou simplesmente para de responder, você não precisa mais improvisar. Descreva o que aconteceu e receba exatamente o que dizer.
          </p>

          <div className="hero-cta-wrap fade-up d3">
            <a
              href={KIWIFY_URL}
              className="hero-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero o CloserOS"
            >
              Quero o CloserOS
              <svg className="hero-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <p className="hero-subtexto">Comece em menos de 2 minutos.</p>
          </div>

          <div className="trust-bar fade-up d3">
            <div className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
              </span>
              Compra Segura
            </div>
            <span className="trust-sep" aria-hidden="true" />
            <div className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </span>
              Privacidade Protegida
            </div>
            <span className="trust-sep" aria-hidden="true" />
            <div className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
              </span>
              Pagamento único
            </div>
          </div>
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
