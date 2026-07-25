export function Exemplos() {
  return (
    <section id="exemplos">
      <div className="s-card-light">
      <div className="container">
        <div className="section-eyebrow fade-up">Veja funcionando</div>
        <h2 className="h2 exemplos-headline fade-up d1" style={{ textAlign: 'center', letterSpacing: '-0.04em' }}>
          Situações reais.<br className="br-desktop" />{' '}Respostas <span style={{ color: 'var(--accent-violet)' }}>em tempo real.</span>
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '16px auto 32px' }}>
          Por trás do CloserOS™: mais de R$9.000.000 em vendas 1:1, expertise dos maiores especialistas em vendas do mundo e a visão de quem atuou como Diretor Comercial de agência nos EUA.
        </p>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px', color: 'var(--text-2)' }}>
          Veja com os seus próprios olhos. Abaixo, conversas reais — e a resposta exata que o CloserOS devolve em segundos.
        </p>
        <div className="exemplos-video-mobile">
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src="https://player.mediadelivery.net/embed/680435/bd982b56-3ec1-4ab6-a498-76f908c92bb9?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
              loading="lazy"
              style={{ border: '0', position: 'absolute', top: 0, height: '100%', width: '100%' }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
              allowFullScreen
            />
          </div>
        </div>
        <div className="exemplos-video-desktop">
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src="https://player.mediadelivery.net/embed/680435/bd982b56-3ec1-4ab6-a498-76f908c92bb9?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
              loading="lazy"
              style={{ border: '0', position: 'absolute', top: 0, height: '100%', width: '100%' }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
