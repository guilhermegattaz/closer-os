import { useState, useRef, useLayoutEffect } from 'react'
import { faqItems } from '../../data/faq.tsx'

function FaqAnswer({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px'
      el.style.opacity = '1'
    } else {
      el.style.maxHeight = '0'
      el.style.opacity = '0'
    }
  }, [isOpen])

  return (
    <div
      ref={ref}
      className="faq-a"
      style={{ maxHeight: 0, opacity: 0, overflow: 'hidden', transition: 'max-height 0.25s ease, opacity 0.2s ease' }}
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  )
}

export function Faq() {
  const [openId, setOpenId] = useState<string | null>('f-prompt')

  return (
    <section id="faq">
      <div className="container-sm">
        <div className="faq-header fade-up">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="h2">Ainda tem <span className="text-gradient">dúvidas?</span></h2>
          <p className="body-lg" style={{ marginTop: 8 }}>Tudo o que você precisa saber antes de começar.</p>
        </div>
        <div className="faq-list fade-up d1">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.pergunta}
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                </button>
                <FaqAnswer isOpen={isOpen}>{item.resposta}</FaqAnswer>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
