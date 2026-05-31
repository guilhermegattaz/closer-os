import { MockupCarousel } from '../ui/MockupCarousel'

export function Exemplos() {
  return (
    <section id="exemplos">
      <div className="s-card-light">
      <div className="container">
        <div className="section-eyebrow fade-up">Veja funcionando</div>
        <h2 className="h2 exemplos-headline fade-up d1" style={{
          textAlign: 'center',
          letterSpacing: '-0.04em',
        }}>
          Situações reais.<br className="br-desktop" />{' '}Respostas <span style={{ color: '#c3baff' }}>em tempo real.</span>
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '16px auto 0' }}>
          Por trás do CloserOS™: mais de R$9.000.000 em vendas 1:1 e a expertise dos maiores especialistas em vendas do mundo.
        </p>
        <div className="vsl-wrap fade-up d3" style={{ margin: '32px auto 0', maxWidth: 1118 }} role="region" aria-label="Vídeo de apresentação do CloserOS™">
          {/* @ts-expect-error wistia-player is a custom web component */}
          <wistia-player media-id="zgyxvdc2ev" aspect="1.5609756097560976" />
        </div>
        <div className="mockup-click-hint fade-up d3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M7 15l5 5 5-5"/>
          </svg>
          Clique em cada exemplo para visualizar aumentado
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M7 15l5 5 5-5"/>
          </svg>
        </div>
        <div className="mockup-swipe-hint fade-up d3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M15 7l5 5-5 5"/>
          </svg>
          deslize para ver os exemplos
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M15 7l5 5-5 5"/>
          </svg>
        </div>
        <MockupCarousel />
      </div>
      </div>
    </section>
  )
}
