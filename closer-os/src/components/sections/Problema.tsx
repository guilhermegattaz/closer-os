import { useEffect, useRef } from 'react'
import { problemas } from '../../data/problemas'

const ENTER_DURATION = '480ms'
const EXIT_DURATION = '560ms'
const ENTER_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'
const EXIT_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'

export function Problema() {
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack]'))

    const itemObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('in-view')
            if (el.classList.contains('bridge-box')) {
              el.style.opacity = '1'
              el.style.transform = 'translateX(0) scale(1)'
            }
            itemObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    )

    items.forEach((el) => itemObs.observe(el))

    if (!prefersReducedMotion) {
      const enterTransition = `transform ${ENTER_DURATION} ${ENTER_EASING}, opacity ${ENTER_DURATION} ease`
      const exitTransition = `transform ${EXIT_DURATION} ${EXIT_EASING}, opacity ${EXIT_DURATION} ease`

      items.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
          // lift the hovered card
          item.style.transition = enterTransition
          item.style.transform = 'translateY(-3px) scale(1.012)'
          item.style.boxShadow = '0 10px 28px rgba(0,0,0,0.1)'
          item.style.borderColor = 'var(--border-2)'
          item.style.zIndex = '4'

          // push neighbors with depth
          items.forEach((el, j) => {
            if (j === i) return
            const dist = Math.abs(j - i)
            const dir = j < i ? -1 : 1
            el.style.transition = enterTransition
            el.style.transform = `translateY(${dir * dist * 3}px) scale(${1 - dist * 0.007})`
            el.style.opacity = String(Math.max(0.68, 1 - dist * 0.1))
          })
        })

        item.addEventListener('mouseleave', () => {
          // smooth return of hovered card
          item.style.transition = exitTransition
          item.style.transform = ''
          item.style.boxShadow = ''
          item.style.borderColor = ''
          item.style.zIndex = ''

          // smooth return of neighbors
          items.forEach((el, j) => {
            if (j === i) return
            el.style.transition = exitTransition
            el.style.transform = ''
            el.style.opacity = ''
          })
        })
      })
    }

    return () => itemObs.disconnect()
  }, [])

  return (
    <section id="problema">
      <div className="container">
        <div className="section-eyebrow fade-up">O problema</div>
        <h2 className="h2 fade-up d1" style={{ textAlign: 'center', marginBottom: 12 }}>
          Você é excelente no que faz.<br className="br-desktop" />{' '}Mas na hora de vender, <span style={{ color: '#e53e3e' }}>algo trava.</span>
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 16px' }}>
          Você dedicou anos aprendendo o seu ofício. Você é bom — muito bom. Seus clientes que te conhecem adoram o seu trabalho. Mas existe uma parte que ninguém te ensinou: o que fazer antes de alguém se tornar seu cliente.
        </p>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
          E aí você fica improvisando, torcendo para dar certo, sentindo aquela sensação incômoda de ter deixado dinheiro na mesa.
        </p>
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
            <div
              className="bridge-box"
              data-stack=""
              style={{
                opacity: 0,
                transform: 'translateX(32px) scale(0.97)',
                transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.32s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.32s',
              }}
            >
              <div className="bridge-box-dot">
                <svg viewBox="0 0 14 14" fill="none" stroke="#fff" strokeWidth="2">
                  <polyline points="2,7 6,11 12,3" />
                </svg>
              </div>
              <p className="bridge-text">
                <strong>Isso tem solução. E ela cabe em R$47.</strong>
                Você perde clientes todos os dias — não porque o seu trabalho é ruim. Porque ninguém te ensinou o que dizer nesses momentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
