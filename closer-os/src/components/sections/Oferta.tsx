import { KIWIFY_URL } from '../../data/links'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <polyline points="20 6 9 17 4 12" />
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
        </div>

        <div className="oferta-card fade-up">

          {/* BLOCO 02: Entregáveis */}
          <div>
            <div className="stack-section-title">Comece agora e receba acesso imediato a tudo isso:</div>
            <div className="stack-row">
              <div className="stack-icon"><CheckIcon /></div>
              <div className="stack-name">CloserOS™</div>
              <div className="stack-val">R$497</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><CheckIcon /></div>
              <div className="stack-name">Biblioteca de Cenários Reais™</div>
              <div className="stack-val">R$97</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><CheckIcon /></div>
              <div className="stack-name">Meu Roteiro Comercial™</div>
              <div className="stack-val">R$197</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><CheckIcon /></div>
              <div className="stack-name">Autoridade Desde a Primeira Conversa™</div>
              <div className="stack-val">R$147</div>
            </div>
            <div className="stack-row">
              <div className="stack-icon"><CheckIcon /></div>
              <div className="stack-name">Configure tudo em poucos minutos e comece a utilizar ainda hoje.</div>
              <div className="stack-incluso">incluso</div>
            </div>
          </div>

          {/* BLOCO 03: Preço */}
          <div className="oferta-card-header">
            <div className="oferta-launch-badge">Preço de Lançamento</div>
            <div className="oferta-price-row">
              <div className="oferta-price-col-left">
                <div className="oferta-anchor-label">Valor real do pacote</div>
                <div className="oferta-price-from">R$938</div>
              </div>
              <div className="oferta-price-col-right">
                <div className="oferta-price-hoje">Hoje:</div>
                <div className="oferta-price-big"><sup>R$</sup>67</div>
              </div>
            </div>
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
              <div className="oferta-stars" aria-label="5 estrelas">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.878L2.55 8.792a.53.53 0 0 1 .294-.904l5.166-.756a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
