import { useEffect, useRef } from 'react'
import { KIWIFY_URL } from '../../data/links'

function VturbPlayer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    // Cria o custom element uma única vez (guarda por ID)
    if (!document.getElementById('vid-6a2963ff69b3ad0cbf212249')) {
      const player = document.createElement('vturb-smartplayer')
      player.id = 'vid-6a2963ff69b3ad0cbf212249'
      player.style.cssText = 'display:block;margin:0 auto;width:100%;max-width:400px;'
      container.appendChild(player)
    }

    // Injeta o script uma única vez (guarda por data-attribute)
    if (!document.querySelector('script[data-vturb-id]')) {
      const s = document.createElement('script')
      s.src = 'https://scripts.converteai.net/9a830ae7-afc8-422f-84b7-f587f3948a96/players/6a2963ff69b3ad0cbf212249/v4/player.js'
      s.async = true
      s.setAttribute('data-vturb-id', '6a2963ff69b3ad0cbf212249')
      document.head.appendChild(s)
    }
  }, [])

  return <div ref={ref} className="vsl-vturb-mobile" />
}

export function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">

          <div className="hero-text">
            {/* VARIANTE A (ativa) */}
            <h1 className="display hero-headline fade-up d1">
              Saiba exatamente o que dizer para{' '}
              <em>fechar mais clientes</em> — sem parecer vendedor.
            </h1>
            {/* VARIANTE B (teste A/B) — para ativar: troque pelos dois blocos acima
            <h1 className="display hero-headline fade-up d1">
              Pare de perder clientes por não saber o que dizer na hora de <em>fechar.</em>
            </h1>
            */}
            <p className="body-lg fade-up d2" style={{ marginBottom: 14, maxWidth: 520 }}>
              Você é referência no que faz — mas trava na hora de falar de preço. O problema nunca foi o seu trabalho. É que ninguém te ensinou o que dizer.
            </p>
          </div>

          <div className="hero-right">
            <div className="vsl-wrap vsl-placeholder fade-up d2" role="region" aria-label="Vídeo de apresentação do CloserOS™">
              <div className="vsl-thumb">
                <div className="vsl-play" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="6,4 20,12 6,20"/>
                  </svg>
                </div>
                <span className="vsl-label">Veja o CloserOS funcionando</span>
              </div>
            </div>
            <VturbPlayer />
          </div>

          <div className="hero-cta-block">
            <div className="hero-cta-row fade-up d3">
              <a href={KIWIFY_URL} className="btn-primary large accent-btn" target="_blank" rel="noopener noreferrer">Quero o CloserOS™ — R$47 →</a>
            </div>
            <div className="hero-trust fade-up d3">
              {['Funciona no ChatGPT gratuito', 'Sem mensalidade', 'Garantia incondicional de 7 dias'].map((text) => (
                <div key={text} className="trust-item">
                  <div className="check">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--green)" strokeWidth="2">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
