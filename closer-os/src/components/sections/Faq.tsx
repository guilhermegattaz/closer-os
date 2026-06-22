import { useState } from 'react'
import { faqItems } from '../../data/faq.tsx'

export function Faq() {
  const [openId, setOpenId] = useState<string | null>('f-prompt')

  return (
    <section id="faq">
      <div className="container-sm">
        <div className="faq-header fade-up">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="h2">Ainda tem dúvidas?</h2>
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
                {isOpen && <div className="faq-a">{item.resposta}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
