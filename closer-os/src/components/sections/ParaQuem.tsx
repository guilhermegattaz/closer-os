import { useEffect, useRef } from 'react'
import { paraQuem } from '../../data/paraQuem'
import type { ParaQuemCard } from '../../types'
import { KIWIFY_URL } from '../../data/links'

const negociosItems = [
  { id: 'n1', tag: 'tá caro', titulo: 'Saiba o que dizer quando o cliente diz "tá caro".', descricao: 'Sem ceder desconto por medo de perder a venda.' },
  { id: 'n2', tag: 'vou pensar', titulo: 'Quebre o "vou pensar" e o "preciso falar com meu marido".', descricao: 'Respostas claras para as objeções que travam toda negociação.' },
  { id: 'n3', tag: 'sumiu', titulo: 'Recupere o cliente que sumiu depois da proposta.', descricao: 'Saiba como e quando retomar sem parecer desesperado.' },
  { id: 'n4', tag: 'vou indicar?', titulo: 'Feche bem — e faça a indicação vir naturalmente.', descricao: 'Quem conduz a conversa com segurança não precisa correr atrás de cliente.' },
]

function NegociosCard() {
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return
    const items = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack]'))
    const itemObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('in-view')
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
            <div className="section-eyebrow left fade-up">Todos os tipos de negócios</div>
            <h2 className="h2 fade-up d1" style={{ marginBottom: 12 }}>
              Funciona para <span style={{ color: 'var(--accent-violet)' }}>qualquer negócio de serviço.</span>
            </h2>
            <p className="negocios-ancora fade-up d2">
              Não importa o que você vende. Se o seu faturamento depende de uma conversa, é aqui que o CloserOS entra.
            </p>
            <ul className="negocios-microlinhas fade-up d2">
              <li>Funciona em <strong>qualquer nível</strong> — do iniciante ao avançado.</li>
              <li>Te guia em <strong>cada passo</strong>: de responder uma mensagem a quebrar objeções complexas.</li>
              <li>Mostra <strong>exatamente o que dizer</strong> nos momentos que mais travam.</li>
            </ul>
          </div>
          <div className="problema-right">
            <div className="problema-wrap">
              <div className="stack-wrapper" ref={stackRef}>
                {negociosItems.map((p) => (
                  <div key={p.id} className="problema-item negocios-item" data-stack="">
                    <span className="negocios-objecao-tag">"{p.tag}"</span>
                    <div className="negocios-ganho">
                      <div className="x-dot" style={{ background: 'rgba(139,229,171,0.15)', border: '1px solid rgba(139,229,171,0.3)', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#8be5ab" strokeWidth="2">
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      </div>
                      <p><strong>{p.titulo}</strong> {p.descricao}</p>
                    </div>
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

function QuemIcon({ icon }: { icon: ParaQuemCard['icon'] }) {
  const svgProps = { viewBox: '0 0 24 24', fill: 'none' as const, stroke: 'currentColor' as const, strokeWidth: 1.6, width: 20, height: 20 }
  switch (icon) {
    case 'briefcase': return <svg {...svgProps}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>
    case 'heart': return <svg {...svgProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    case 'pen-tool': return <svg {...svgProps}><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
    case 'zap': return <svg {...svgProps}><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>
    case 'star': return <svg {...svgProps}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/></svg>
    case 'users': return <svg {...svgProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  }
}

const quemBubbles = [
  '"Vou pensar e te falo."',
  '"Não tenho dinheiro agora."',
  '"Achei mais barato com outro."',
  '"Depois eu te aviso!" (e some)',
  '"Me manda mais detalhes que eu vejo." (silêncio)',
  '"Vou precisar de um tempo pra pensar."',
]

const quemColorClass = ['quem-card--lavanda', 'quem-card--peach', 'quem-card--verde']

export function ParaQuem() {
  return (
    <section id="para-quem">
      <div className="container">
        <p className="section-eyebrow fade-up" style={{ textAlign: 'center' }}>Para quem é</p>
        <h2 className="h2 fade-up d1" style={{ textAlign: 'center' }}>
          Se você vende um serviço,<br className="br-desktop" />{' '}o CloserOS foi feito <span style={{ color: 'var(--accent-2)' }}>para você.</span>
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '16px auto 0' }}>
          Não importa o que você vende — se o seu faturamento depende de uma conversa, é aqui que ele trava ou acontece.
        </p>
        <div className="quem-grid">
          {paraQuem.map((card, i) => (
            <div key={card.id} className={`quem-card ${quemColorClass[i % 3]} fade-up${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`}>
              <div className="quem-bubble">{quemBubbles[i]}</div>
              <div className="quem-icon"><QuemIcon icon={card.icon} /></div>
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>
            </div>
          ))}
        </div>
      </div>
      <NegociosCard />
      <VantagemCard />
    </section>
  )
}

interface VantagemCardProps {
  tag?: string
  text?: string
  variant?: 'light' | 'naked'
  btnText?: string
}

export function VantagemCard({ tag, text, variant, btnText }: VantagemCardProps = {}) {
  const cls = variant ? ` vantagem-card--${variant}` : ''
  return (
    <div className={`fade-up vantagem-card${cls}`}>
      <div className="vantagem-left">
        <div className="vantagem-tag">{tag ?? 'Sua vantagem competitiva'}</div>
        <p className="vantagem-text">{text ?? 'Seja visto como autoridade no que faz para se destacar da concorrência. Conduza seu próximo cliente da primeira conversa até o sim, com confiança e naturalidade. Seu mentor disponível para você a qualquer hora do dia.'}</p>
      </div>
      <div className="vantagem-right">
        <div className="vantagem-price">R$67</div>
        <div className="vantagem-period">pagamento único · sem mensalidade</div>
        <a href={KIWIFY_URL} className="vantagem-btn" target="_blank" rel="noopener noreferrer">{btnText ?? 'Quero fechar mais clientes — R$67 →'}</a>
        <p className="vantagem-meta">Garantia de 7 dias · Acesso imediato</p>
      </div>
    </div>
  )
}
