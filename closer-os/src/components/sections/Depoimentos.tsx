import { depoimentos } from '../../data/depoimentos'

export function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="container">
        <div className="depo-header fade-up">
          <span className="eyebrow">Resultados reais</span>
          <h2 className="h2">
            Depoimentos reais.<br className="br-mobile" />{' '}
            <span className="hl">Resultados comprovados.</span>
          </h2>
        </div>
        <div className="depo-grid">
          {depoimentos.map((d, i) => (
            <div
              key={d.id}
              className={`depo-card fade-up${i === 1 ? ' d1' : i === 2 ? ' d2' : ''}`}
            >
              <div className="depo-badge">{d.badge}</div>
              <p className="depo-texto">{d.texto}</p>
              <hr className="depo-divider" />
              <div className="depo-rodape">
                <div className="depo-avatar" aria-hidden="true">{d.iniciais}</div>
                <div className="depo-info">
                  <div className="depo-nome">{d.nome}</div>
                  <div className="depo-cargo">{d.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="depo-cta fade-up">
          <p className="depo-cta-line">
            Esses resultados começaram com a mesma decisão que está na sua frente agora.
          </p>
          <a
            className="hero-cta-btn"
            href="https://pay.kiwify.com.br/F0Rpruo"
            target="_blank"
            rel="noopener noreferrer"
          >
            QUERO O CLOSEROS AGORA POR R$67
          </a>
          <p className="depo-cta-sub">Acesso imediato · Pagamento único · Garantia de 7 dias</p>
        </div>
      </div>
    </section>
  )
}
