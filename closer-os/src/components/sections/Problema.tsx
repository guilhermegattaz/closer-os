import { useEffect, useRef } from 'react'
import { problemas } from '../../data/problemas'
import { KIWIFY_URL } from '../../data/links'

export function ProblemaCard() {
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return

    const items = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack]'))

    const itemObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('in-view')
            itemObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    )

    items.forEach((el) => itemObs.observe(el))

    return () => itemObs.disconnect()
  }, [])

  return (
    <div className="s-card">
      <div className="container">
        <div className="problema-grid">
          <div className="problema-left">
            <div className="section-eyebrow left fade-up">O problema</div>
            <h2 className="h2 fade-up d1" style={{ marginBottom: 12 }}>
              Você é excelente no que faz.<br className="br-desktop" />{' '}Mas na hora de vender, <span style={{ color: '#c3baff' }}>algo trava.</span>
            </h2>
            <p className="body-lg fade-up d2" style={{ margin: '0 0 16px' }}>
              Você dedicou anos aprendendo o seu ofício. Você é bom — muito bom. Seus clientes que te conhecem adoram o seu trabalho.
            </p>
            <p className="body-lg fade-up d2" style={{ margin: '0 0 16px' }}>
              Mas existe uma parte que ninguém te ensinou: o que fazer antes de alguém se tornar seu cliente.
            </p>
            <p className="body-lg fade-up d2" style={{ margin: '0' }}>
              E aí você fica improvisando, torcendo para dar certo, sentindo aquela sensação incômoda de ter deixado dinheiro na mesa.
            </p>
          </div>
          <div className="problema-right">
            <div className="problema-wrap">
              <div className="stack-wrapper" ref={stackRef}>
                {problemas.map((p) => (
                  <div key={p.id} className="problema-item" data-stack="">
                    <div className="x-dot">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--red)" strokeWidth="2">
                        <line x1="2" y1="2" x2="10" y2="10" />
                        <line x1="10" y1="2" x2="2" y2="10" />
                      </svg>
                    </div>
                    <p><strong>{p.titulo}</strong> {p.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Problema() {
  return (
    <section id="problema">
      <ProblemaCard />
      <div className="fade-up vantagem-card">
        <div className="vantagem-left">
          <div className="vantagem-tag">Isso tem solução. E ela cabe em R$47.</div>
          <p className="vantagem-text">Você perde clientes todos os dias — não porque o seu trabalho é ruim. Porque ninguém te ensinou o que dizer nesses momentos.</p>
        </div>
        <div className="vantagem-right">
          <div className="vantagem-price">R$47</div>
          <div className="vantagem-period">pagamento único · sem mensalidade</div>
          <a href={KIWIFY_URL} className="vantagem-btn" target="_blank" rel="noopener noreferrer">Quero agora →</a>
          <p className="vantagem-meta">Garantia de 7 dias · Acesso imediato</p>
        </div>
      </div>
    </section>
  )
}
