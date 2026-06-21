export function LeakMatrix() {
  return (
    <section id="leak">
      <div className="container">
        <div className="leak-header fade-up">
          <span className="eyebrow">O diagnóstico</span>
          <h2 className="h2">Onde o seu dinheiro está<br className="br-mobile" /> morrendo todos os dias?</h2>
        </div>

        <div className="leak-grid">

          {/* Card 1 */}
          <div className="leak-card fade-up d1">
            <span className="leak-tag">O Vácuo</span>
            <div className="leak-chat">
              <div className="chat-row">
                <span className="chat-label">Você</span>
                <span className="chat-bubble chat-bubble--sent">
                  "Aqui está a proposta! Fico no aguardo 🙂"
                </span>
              </div>
              <div className="chat-silence">— 48 horas de silêncio —</div>
            </div>
            <p className="leak-sub">
              O orçamento foi visualizado, o cliente sumiu, e você não sabe como cobrar retorno sem parecer desesperado.
            </p>
          </div>

          {/* Card 2 */}
          <div className="leak-card fade-up d2">
            <span className="leak-tag">O Gelo na Reunião</span>
            <div className="leak-chat">
              <div className="chat-row">
                <span className="chat-label">Cliente</span>
                <span className="chat-bubble chat-bubble--recv">
                  "Achei ótimo seu trabalho... vou falar com meu sócio/esposa e te aviso."
                </span>
              </div>
            </div>
            <p className="leak-sub">
              Apresentação impecável, mas você aceita a primeira desculpa e perde a venda por não saber reagir na hora.
            </p>
          </div>

          {/* Card 3 */}
          <div className="leak-card fade-up d3">
            <span className="leak-tag">O Desconto por Impulso</span>
            <div className="leak-chat">
              <div className="chat-row">
                <span className="chat-label">Cliente</span>
                <span className="chat-bubble chat-bubble--recv">"Quanto custa?"</span>
              </div>
              <div className="chat-row" style={{ marginTop: 4 }}>
                <span className="chat-label">Você</span>
                <span className="chat-bubble chat-bubble--sent">
                  "É R$1.500... mas consigo por R$1.100 se fechar hoje."
                </span>
              </div>
            </div>
            <p className="leak-sub">
              Você se desvaloriza e queima sua margem por medo de ouvir um não, antes mesmo de o cliente questionar o preço.
            </p>
          </div>

        </div>

        <div className="leak-conclusion fade-up">
          <span className="leak-conclusion-title">Nenhum desses momentos parece grave sozinho</span>
          <p className="leak-conclusion-body">
            O problema é que eles se repetem toda semana, e cada um é um contrato que era seu e foi embora <strong>em silêncio</strong>, sem você nem perceber onde perdeu.
          </p>
        </div>

        <p className="leak-turn fade-up">
          A boa notícia: isso não é falta de talento. É só não saber o que dizer na hora exata — e isso <span>tem conserto.</span>
        </p>

        <a href="#profissao" className="leak-microcta fade-up">
          Ver como o CloserOS resolve isso na minha profissão ↓
        </a>
      </div>
    </section>
  )
}
