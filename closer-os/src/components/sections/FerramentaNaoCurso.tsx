import { useEffect, useRef } from 'react'

export function FerramentaNaoCurso() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ferramenta">
      <div className="container">
        <div className="ferra-head fade-up visible">
          <span className="eyebrow">Como funciona</span>
          <h2 className="ferra-title">Receba a resposta certa em <span className="hl">menos de 1 minuto.</span></h2>
          <p className="ferra-sub">Veja, na prática, como é a conversa real entre você e o CloserOS.</p>
        </div>

        <div className="ferra-demo">
          <div className="ferra-step ferra-step--left fade-up visible">
            <span className="ferra-step-num">01</span>
            <div>
              <h3 className="ferra-step-title">Descreva a situação</h3>
              <p className="ferra-step-desc">Envie áudio ou mensagem, conte o que o cliente disse ou o que aconteceu na conversa.</p>
            </div>
          </div>

          <div className="ferra-video-wrap fade-up visible">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Demonstração do CloserOS respondendo a uma situação de venda"
              className="ferra-demo-video"
            >
              <source src="/images/demofullfinal.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="ferra-steps-right">
            <div className="ferra-step fade-up visible">
              <span className="ferra-step-num">02</span>
              <div>
                <h3 className="ferra-step-title">O CloserOS analisa</h3>
                <p className="ferra-step-desc">Lê contexto, intenção por trás e emoção da conversa em poucos segundos como um especialista.</p>
              </div>
            </div>
            <div className="ferra-step fade-up visible">
              <span className="ferra-step-num">03</span>
              <div>
                <h3 className="ferra-step-title">Receba o que dizer</h3>
                <p className="ferra-step-desc">Resposta cirúrgica, no tom certo, pronto para copiar e colar ou para dizer na próxima conversa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ferra-guarantees fade-up visible">
          <div className="guarantee-item">
            <span className="check-badge">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span>Sem improvisar</span>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="guarantee-item">
            <span className="check-badge">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span>Sem sair dando desconto</span>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="guarantee-item">
            <span className="check-badge">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span>Sem travar</span>
          </div>
        </div>

        <p className="ferra-closing fade-up">Você sai de cada conversa sabendo que conduziu. Não torcendo para ter acertado.</p>
      </div>
    </section>
  )
}
