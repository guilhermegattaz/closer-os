import { useEffect, useRef } from 'react'

function VturbPlayer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    if (!document.getElementById('vid-6a296e9bdde81cc5ef9e31d3')) {
      const player = document.createElement('vturb-smartplayer')
      player.id = 'vid-6a296e9bdde81cc5ef9e31d3'
      player.style.cssText = 'display:block;margin:0 auto;width:100%;max-width:400px;'
      container.appendChild(player)
    }

    if (!document.querySelector('script[data-vturb-id]')) {
      const s = document.createElement('script')
      s.src = 'https://scripts.converteai.net/9a830ae7-afc8-422f-84b7-f587f3948a96/players/6a296e9bdde81cc5ef9e31d3/v4/player.js'
      s.async = true
      s.setAttribute('data-vturb-id', '6a296e9bdde81cc5ef9e31d3')
      document.head.appendChild(s)
    }
  }, [])

  return <div ref={ref} className="exemplos-video-mobile" />
}

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
          Você descreve a situação — "o cliente disse que tá caro", "mandei a proposta e sumiu", "não sei como começar a conversa" — e o CloserOS responde com orientação específica para aquele momento. Em segundos. Como um mentor que você consulta na hora que precisa, não depois que a oportunidade passou.
        </p>
        <VturbPlayer />
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
