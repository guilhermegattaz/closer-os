import { KIWIFY_URL } from '../../data/links'

export function DoisCaminhos() {
  return (
    <section id="dois-caminhos">
      <div className="container-sm">
        <div className="dc-header fade-up">
          <span className="eyebrow">A decisão é sua</span>
          <h2 className="h2">A partir daqui, você tem dois caminhos.</h2>
        </div>

        <div className="dc-grid">
          <div className="dc-card fade-up d1">
            <span className="dc-label">Caminho 1</span>
            <h3>Continuar contando com a sorte</h3>
            <p>Seguir improvisando em cada conversa. Travando quando o cliente pergunta o preço. Vendo proposta virar silêncio. E terminando o mês na dúvida de quanto deixou na mesa.</p>
          </div>
          <div className="dc-card dc-card--destaque fade-up d2">
            <span className="dc-label">Caminho 2</span>
            <h3>Saber exatamente o que dizer</h3>
            <p>Abrir o CloserOS, descrever a situação e ter, na hora, a resposta certa para conduzir a conversa com confiança, do primeiro contato até o cliente dizer "fechado".</p>
          </div>
        </div>

        <p className="dc-fechamento fade-up d2">
          Os dois custam alguma coisa. Um custa as vendas que você continua perdendo. O outro custa R$67.
        </p>
        <p className="dc-urgencia fade-up d2">
          E cada dia que você espera é mais uma conversa em que você vai improvisar, e talvez perder.
        </p>

        <div className="dc-cta fade-up d3">
          <a
            href={KIWIFY_URL}
            className="dc-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sim, quero parar de improvisar — R$67"
          >
            Sim, quero parar de improvisar — R$67 →
          </a>
        </div>
      </div>
    </section>
  )
}
