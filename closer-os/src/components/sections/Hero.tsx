import { useEffect, Fragment } from 'react'
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
        {/* ROLLBACK: headline anterior
          Saiba exatamente o que dizer quando o cliente falar <span className="hl">&ldquo;vou pensar&rdquo;</span>, <span className="hl">&ldquo;tá caro&rdquo;</span> ou simplesmente <span className="hl">sumir depois da proposta</span>.
        */}
        <h1 className="hero-headline fade-up d1">
          Chega de perder clientes porque você não sabe o que responder.
        </h1>

        <p className="hero-sub fade-up d2">
          Quando um cliente diz &ldquo;está caro&rdquo;, &ldquo;vou pensar&rdquo;, pede desconto ou simplesmente para de responder, você não precisa mais improvisar.<br /><br />
          Descreva rapidamente o que aconteceu, envie a mensagem, o print ou o áudio da conversa e receba exatamente como continuar.
        </p>

        <div className="fade-up d2">
          <div className="vsl-wrap">
            <div className="vsl-ratio">
              <VturbHeroPlayer />
            </div>
          </div>
        </div>

        <div className="hero-cta-wrap fade-up d3">
          <a
            href={KIWIFY_URL}
            className="hero-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eu quero o meu"
          >
            Eu quero o meu
          </a>
          <p className="hero-subtexto">Comece em menos de 2 minutos.</p>
        </div>

        <div className="trust-bar fade-up d3">
          {[
            'Compra Segura',
            'Privacidade Protegida',
            'Pagamento único',
          ].map((item, i) => (
            <Fragment key={item}>
              {i > 0 && <span className="trust-sep" aria-hidden="true" />}
              <div className="trust-item">
                <span className="trust-check" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4,12 10,18 20,6" />
                  </svg>
                </span>
                {item}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
