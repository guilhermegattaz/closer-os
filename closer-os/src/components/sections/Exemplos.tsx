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
        {/* Desktop: landscape video */}
        <div className="vsl-wrap vsl-exemplos vsl-exemplos-desktop fade-up d3" style={{ margin: '32px auto 0' }} role="region" aria-label="Vídeo de apresentação do CloserOS™">
          {/* @ts-expect-error wistia-player is a custom web component */}
          <wistia-player media-id="deeptfugdy" aspect="1.5635179153094463" />
        </div>
        {/* Mobile: portrait video */}
        <div className="vsl-wrap vsl-exemplos vsl-exemplos-mobile fade-up d3" style={{ margin: '32px auto 0' }} role="region" aria-label="Vídeo de apresentação do CloserOS™">
          {/* @ts-expect-error wistia-player is a custom web component */}
          <wistia-player media-id="2tbc1fl62k" aspect="0.46153846153846156" />
        </div>
      </div>
      </div>
    </section>
  )
}
