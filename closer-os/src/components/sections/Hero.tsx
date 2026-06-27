import { useEffect, Fragment } from 'react'
import { KIWIFY_URL } from '../../data/links'

function VturbHeroPlayer() {
  useEffect(() => {
    const SRC = 'https://scripts.converteai.net/9a830ae7-afc8-422f-84b7-f587f3948a96/players/6a3e78c9cbea5b52000fa903/v4/player.js'
    if (document.querySelector(`script[src="${SRC}"]`)) return
    const s = document.createElement('script')
    s.src = SRC
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <vturb-smartplayer
      id="vid-6a3e78c9cbea5b52000fa903"
      style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%' }}
    >
      <div
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, backgroundColor: '#e8e4f8' }}
      />
    </vturb-smartplayer>
  )
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-center">
        <span className="hero-micro fade-up"><span className="hero-micro-dot" aria-hidden="true"></span>Pare de perder clientes interessados</span>

        {/* ROLLBACK: headline anterior
          Saiba exatamente o que dizer quando o cliente falar <span className="hl">&ldquo;vou pensar&rdquo;</span>, <span className="hl">&ldquo;tá caro&rdquo;</span> ou simplesmente <span className="hl">sumir depois da proposta</span>.
        */}
        <h1 className="hero-headline fade-up d1">
          Saiba exatamente o que dizer em cada conversa com um cliente.<br />
          Do primeiro contato ao <span className="hl-wrap">&ldquo;fechado&rdquo;</span>.
        </h1>

        <p className="hero-sub fade-up d2">
          Descreva a situação real da conversa e o CloserOS™ te mostra, em segundos, o próximo passo certo. Você para de improvisar e passa a conduzir cada conversa com segurança, até o cliente dizer sim.
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
            aria-label="Quero saber o que dizer · R$67"
          >
            Quero saber o que dizer · R$67
          </a>
          <p className="hero-subtexto">Acesso Imediato · Pagamento Único de R$67 · Sem Mensalidades</p>
        </div>

        <div className="trust-bar fade-up d3">
          {[
            'Sem instalar nada',
            'Scripts em Segundos',
            'Garantia de 7 Dias',
          ].map((item, i) => (
            <Fragment key={item}>
              {i > 0 && <span className="trust-sep" aria-hidden="true" />}
              <div className="trust-item">
                <span className="trust-check" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="2,6 5,9 10,3" />
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
