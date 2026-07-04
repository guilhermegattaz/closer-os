import { KIWIFY_URL } from '../../data/links'

function IconPrincipal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  )
}

function IconVideo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10,8 17,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFile() {
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

        {/* BLOCO 01: Título + Subtítulo + Frase de impacto */}
        <div className="oferta-pre-titulo fade-up">
          <h2 className="h2">Se o CloserOS ajudar você a recuperar apenas uma conversa importante… <span className="text-gradient">ele já terá se pago.</span></h2>
          <p className="oferta-pre-sub">Mas a ideia nunca foi recuperar apenas uma. A ideia é que você nunca mais precise improvisar quando um cliente fizer uma pergunta difícil, pedir desconto ou simplesmente parar de responder.</p>
        </div>

        <div className="oferta-card fade-up">

          {/* BLOCO 02: Entregáveis */}
          <div>
            <div className="stack-section-title">Você recebe acesso imediato a tudo isso:</div>
            <div className="stack-row">
              <div className="stack-icon"><IconPrincipal /></div>
              <div className="stack-name">Converse com o CloserOS sempre que um cliente responder, fizer uma objeção ou você não souber como continuar a conversa.</div>
              <div className="stack-val">R$497</div>
              <div className="stack-incluso">incluso</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><IconFile /></div>
              <div className="stack-name">Biblioteca de exemplos reais para descobrir novas formas de utilizar o CloserOS no dia a dia.</div>
              <div className="stack-val">R$97</div>
              <div className="stack-incluso">incluso</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><IconVideo /></div>
              <div className="stack-name">Construa um roteiro de perguntas totalmente adaptado ao seu negócio com ajuda do próprio CloserOS.</div>
              <div className="stack-val">R$197</div>
              <div className="stack-incluso">incluso</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><IconFile /></div>
              <div className="stack-name">Configure tudo em poucos minutos e comece a utilizar ainda hoje.</div>
              <div className="stack-incluso">incluso</div>
            </div>
          </div>

          {/* BLOCO 03: Preço */}
          <div className="oferta-card-header">
            <div className="oferta-launch-badge">Preço de Lançamento</div>
            <div className="oferta-anchor-label">Valor real do pacote</div>
            <div className="oferta-price-from">R$791</div>
            <div className="oferta-price-hoje">Hoje:</div>
            <div className="oferta-price-big"><sup>R$</sup>67</div>
            <p className="oferta-price-details">Pagamento único. Sem mensalidade. Sem assinatura. Acesso imediato.</p>
          </div>

          {/* BLOCO 04: Garantia */}
          <div className="oferta-garantia">
            <div className="oferta-garantia-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9,12 11,14 15,10" />
              </svg>
            </div>
            <div>
              <p className="oferta-garantia-title">Experimente sem risco.</p>
              <p className="oferta-garantia-text">Se durante o período de garantia você entender que o CloserOS não faz sentido para a sua realidade, basta solicitar o reembolso. Simples assim.</p>
            </div>
          </div>

          {/* BLOCO 05: CTA */}
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
              Comece hoje. Use na próxima conversa importante.
            </p>
            <div className="oferta-social-proof">
              <img className="osp-people" src="/images/pessoas.webp" alt="Profissionais que aprovam o CloserOS" loading="lazy" />
              <span className="osp-text">Aprovado por mais de <strong>100 profissionais</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
