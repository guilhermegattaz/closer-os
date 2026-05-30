import { paraQuem } from '../../data/paraQuem'
import type { ParaQuemCard } from '../../types'
import { KIWIFY_URL } from '../../data/links'

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

export function ParaQuem() {
  return (
    <section id="para-quem">
      <div className="container">
        <div className="section-eyebrow fade-up">O CloserOS™ foi feito para você se...</div>
        <h2 className="h2 fade-up d1" style={{ textAlign: 'center' }}>
          Você tem talento.<br className="br-desktop" />{' '}O que falta é <span style={{ color: '#c3baff' }}>saber o que dizer.</span>
        </h2>
        <div className="quem-grid">
          {paraQuem.map((card, i) => (
            <div key={card.id} className={`quem-card fade-up${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`}>
              <div className="quem-icon"><QuemIcon icon={card.icon} /></div>
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>
            </div>
          ))}
        </div>
        <div className="fade-up vantagem-card">
          <div className="vantagem-left">
            <div className="vantagem-tag">Sua vantagem competitiva</div>
            <p className="vantagem-text">Seja visto como autoridade no que faz e conduza suas conversas com naturalidade e confiança. Saiba o que dizer em cada situação — da primeira conversa até o sim — disponível para você a qualquer hora.</p>
          </div>
          <div className="vantagem-right">
            <div className="vantagem-price">R$47</div>
            <div className="vantagem-period">pagamento único · sem mensalidade</div>
            <a href={KIWIFY_URL} className="vantagem-btn" target="_blank" rel="noopener noreferrer">Quero agora →</a>
            <p className="vantagem-meta">Garantia de 7 dias · Acesso imediato</p>
          </div>
        </div>
      </div>
    </section>
  )
}
