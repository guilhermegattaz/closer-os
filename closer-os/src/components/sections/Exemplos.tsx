import { MockupCarousel } from '../ui/MockupCarousel'

export function Exemplos() {
  return (
    <section id="exemplos">
      <div className="container">
        <div className="section-eyebrow fade-up">Veja funcionando</div>
        <h2 className="exemplos-headline fade-up d1" style={{
          textAlign: 'center',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
        }}>
          Situações reais.<br className="br-desktop" />{' '}Respostas <span style={{ color: '#123159' }}>em tempo real.</span>
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '16px auto 0' }}>
          Por trás do CloserOS™: mais de R$9.000.000 em vendas 1:1 e a expertise dos maiores especialistas em vendas do mundo.
        </p>
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
    </section>
  )
}
