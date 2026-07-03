import { bonusItems } from '../../data/bonus'
import { KIWIFY_URL } from '../../data/links'

function StackIcon({ tipo, nome }: { tipo: string; nome: string }) {
  if (tipo === 'principal') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    )
  }
  if (nome.startsWith('Treinamento')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10,8 17,12 10,16" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  )
}

export function Oferta() {
  return (
    <section id="oferta">
      <div className="container">
        <div className="oferta-pre-titulo fade-up">
          <h2 className="h2">Se o CloserOS ajudar você a recuperar apenas uma conversa importante… ele provavelmente já terá se pago.</h2>
          <p className="oferta-pre-sub">Mas a ideia nunca foi recuperar apenas uma. A ideia é que você nunca mais precise improvisar quando um cliente fizer uma pergunta difícil, pedir desconto ou simplesmente parar de responder.</p>
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
            Se o CloserOS impedir apenas um desconto que você daria por insegurança… Ou recuperar apenas um cliente que iria embora… Ele já se pagou. O restante vira lucro.
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
