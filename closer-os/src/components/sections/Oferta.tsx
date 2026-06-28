import { bonusItems } from '../../data/bonus'
import { KIWIFY_URL } from '../../data/links'

function StackIcon({ tipo, nome }: { tipo: string; nome: string }) {
  if (tipo === 'principal') {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
        <path d="M3 5h14M3 10h14M3 15h8" strokeLinecap="round" />
      </svg>
    )
  }
  if (nome.startsWith('Treinamento')) {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
        <circle cx="10" cy="10" r="8" />
        <polygon points="8,7 14,10 8,13" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
      <path d="M4 2h8l4 4v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <polyline points="12,2 12,6 16,6" />
      <line x1="6" y1="9" x2="14" y2="9" />
      <line x1="6" y1="12" x2="14" y2="12" />
    </svg>
  )
}

export function Oferta() {
  return (
    <section id="oferta">
      <div className="container">
        <div className="oferta-emotional fade-up">
          <p className="oferta-emotional-lead">No fundo, não é sobre vender mais. É sobre como você se sente em cada conversa.</p>
          <div className="oferta-emotional-grid">
            <div className="oferta-emotional-item">Enviar proposta e dormir tranquilo.</div>
            <div className="oferta-emotional-item">Parar de remoer a conversa depois.</div>
            <div className="oferta-emotional-item">Cobrar o preço cheio com naturalidade.</div>
            <div className="oferta-emotional-item">Não temer a próxima objeção.</div>
          </div>
        </div>

        <div className="oferta-card fade-up">

          <div className="oferta-card-header">
            <div className="oferta-launch-badge">Preço de Lançamento</div>
            <div className="oferta-anchor-label">Valor real do pacote</div>
            <div className="oferta-price-from">R$791</div>
            <div className="oferta-price-hoje">Hoje:</div>
            <div className="oferta-price-big"><sup>R$</sup>67</div>
            <div style={{ fontSize: '.78rem', color: 'var(--text-3)', marginTop: 4 }}>
              pagamento único · acesso vitalício · sem mensalidades
            </div>
          </div>

          <div>
            <div className="stack-section-title">O que está incluído</div>
            {bonusItems.map((item) => (
              <div key={item.id} className="stack-row">
                <div className="stack-icon">
                  <StackIcon tipo={item.tipo} nome={item.nome} />
                </div>
                <div className="stack-name">{item.nome}</div>
                <div className="stack-val">{item.valor}</div>
                <div className="stack-incluso">incluso</div>
              </div>
            ))}
          </div>

          <p className="oferta-payback">
            Se o CloserOS impedir apenas um desconto que você daria por insegurança... Ou recuperar apenas um cliente que iria embora... Ele já se pagou. O restante vira lucro.
          </p>

          <div>
            <a
              href={KIWIFY_URL}
              className="oferta-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero o CloserOS agora por R$67"
            >
              Quero parar de improvisar · R$67
            </a>
            <p className="oferta-payment-info">
              PIX, cartão ou boleto · Processado pela Kiwify
            </p>
            <div className="oferta-social-proof">
              <img className="osp-people" src="/images/pessoas.webp" alt="Profissionais que aprovam o CloserOS" loading="lazy" />
              <span className="osp-text">Aprovado por mais de <strong>100 profissionais</strong></span>
            </div>
          </div>

          <div className="oferta-garantia">
            <div className="oferta-garantia-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9,12 11,14 15,10" />
              </svg>
            </div>
            <p className="oferta-garantia-text">
              <strong>Garantia Incondicional de 7 Dias:</strong> Use em suas conversas nesta semana. Se você não sentir que fechar clientes ficou muito mais simples e leve, peça reembolso e devolvemos 100%. O risco é meu.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
