import { KIWIFY_URL } from '../../data/links'

export function DoisCaminhos() {
  return (
    <section id="dois-caminhos">
      <div className="container-sm">

        <div className="dc-header fade-up">
          <div className="dc-eyebrow-pill">A DECISÃO É SUA</div>
          <h2 className="h2">A partir daqui, você tem dois caminhos.</h2>
        </div>

        <div className="dc-grid">
          {/* Card 1 — o caminho ruim */}
          <div className="dc-card fade-up d1">
            <div className="dc-card-top">
              <div className="dc-path-label">
                <span className="dc-path-num">1</span>
                <span className="dc-path-text">Caminho 1</span>
              </div>
              <h3 className="dc-card-title dc-card-title--muted">
                Continuar contando com a sorte
              </h3>
              <p className="dc-card-body">
                Seguir improvisando em cada conversa. Travando quando o cliente pergunta o preço. Vendo proposta virar silêncio. E terminando o mês na dúvida de quanto deixou na mesa.
              </p>
            </div>
            <div className="dc-card-footer dc-card-footer--warn">
              ⚠️ Estagnação e frustração silenciosa
            </div>
          </div>

          {/* Card 2 — o caminho bom */}
          <div className="dc-card dc-card--destaque fade-up d2">
            <div className="dc-card-top">
              <div className="dc-path-label">
                <span className="dc-path-num">2</span>
                <span className="dc-path-text">Caminho 2</span>
              </div>
              <h3 className="dc-card-title">
                Saber exatamente o que dizer
                <span className="dc-pulse-dot" aria-hidden="true" />
              </h3>
              <p className="dc-card-body dc-card-body--normal">
                Abrir o CloserOS, descrever a situação e ter, na hora, a resposta certa para conduzir a conversa com confiança, do primeiro contato até o cliente dizer{' '}
                <span className="dc-hl">&ldquo;fechado&rdquo;</span>.
              </p>
            </div>
            <div className="dc-card-footer dc-card-footer--accent">
              ✨ Clareza, velocidade e previsibilidade
            </div>
          </div>
        </div>

        {/* Caixa de custo */}
        <div className="dc-cost-box fade-up d2">
          <p className="dc-cost-text">
            Os dois custam alguma coisa. Um custa as vendas que você continua perdendo.{' '}
            <span className="dc-hl">O outro custa R$67.</span>
          </p>
          <p className="dc-urgencia">
            A próxima objeção que você receber provavelmente vai chegar antes de amanhã.<br />A única diferença é que, dessa vez, você não precisa improvisar.
          </p>
        </div>

        <div className="dc-cta fade-up d3">
          <a
            href={KIWIFY_URL}
            className="dc-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sim, é isso que eu quero · R$67"
          >
            Sim, é isso que eu quero · R$67
          </a>
          <p className="dc-cta-sub">Acesso Imediato · Pagamento Único · Garantia de 7 Dias</p>
        </div>

      </div>
    </section>
  )
}
