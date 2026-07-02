export function ComoPensa() {
  return (
    <section id="como-pensa">
      <div className="container">

        <div className="cp-header fade-up">
          <span className="eyebrow">COMO ELE PENSA</span>
          <h2 className="h2">Toda resposta começa muito antes da resposta.</h2>
          <p className="cp-subtitle">
            Antes de sugerir qualquer frase, o CloserOS faz a mesma coisa que um negociador experiente faria mentalmente: ele tenta entender o que realmente está acontecendo naquela conversa, antes de dizer qualquer coisa.
          </p>
        </div>

        <div className="cp-flow" role="list">

          <div className="cp-step fade-up d1" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="cp-step-content">
              <p className="cp-step-title">O que aconteceu?</p>
              <p className="cp-step-desc">Você descreve rapidamente o contexto. Não precisa explicar tudo, apenas o suficiente para o CloserOS entender a situação.</p>
            </div>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d2" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="cp-step-content">
              <p className="cp-step-title">O que está travando a decisão?</p>
              <p className="cp-step-desc">Nem toda objeção significa a mesma coisa. Às vezes o cliente está inseguro, às vezes ainda não enxergou valor, às vezes só precisa de mais clareza.</p>
            </div>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d3" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <div className="cp-step-content">
              <p className="cp-step-title">Qual é o próximo passo mais inteligente?</p>
              <p className="cp-step-desc">Só depois dessa análise ele escolhe como conduzir: às vezes responder, às vezes perguntar, às vezes esperar, às vezes mudar a direção da conversa.</p>
            </div>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d4" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="cp-step-content">
              <p className="cp-step-title">Agora sim: o que dizer.</p>
              <p className="cp-step-desc">A resposta nasce da estratégia, não o contrário.</p>
            </div>
          </div>

        </div>

        <p className="cp-final-statement fade-up">
          Grandes negociações raramente são decididas pela melhor resposta. Normalmente são decididas pela melhor leitura da situação.
        </p>

        <p className="cp-proof fade-up">Construído a partir de milhares de negociações reais, onde clientes foram perdidos por uma resposta errada ou recuperados pela resposta certa.</p>

        <p className="cp-microcopy fade-up">O CloserOS foi criado para ajudar você justamente nessa leitura.</p>

      </div>
    </section>
  )
}
