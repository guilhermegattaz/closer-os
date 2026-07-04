export function ComoPensa() {
  return (
    <section id="como-pensa">
      <div className="container">

        <div className="cp-header fade-up">
          <span className="eyebrow">COMO ELE PENSA</span>
          <h2 className="h2">Ele pensa por você e te ajuda na <span className="text-gradient">melhor decisão.</span></h2>
          <p className="cp-subtitle">
            Antes de sugerir o que dizer, o CloserOS faz a mesma coisa que um negociador experiente faria: ele primeiro entende o que está acontecendo naquela conversa.
          </p>
        </div>

        <div className="cp-flow" role="list">

          <div className="cp-step fade-up d1 visible" role="listitem">
            <span className="cp-step-num">1</span>
            <span className="cp-step-line" aria-hidden="true"></span>
            <div className="cp-step-card">
              <div className="cp-step-card-head">
                <p className="cp-step-title">O que aconteceu?</p>
                <svg className="cp-step-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </div>
              <p className="cp-step-desc">Você descreve rapidamente o contexto. Não precisa explicar tudo, apenas o suficiente para o CloserOS entender a situação.</p>
            </div>
          </div>

          <div className="cp-step fade-up d2 visible" role="listitem">
            <span className="cp-step-num">2</span>
            <span className="cp-step-line" aria-hidden="true"></span>
            <div className="cp-step-card">
              <div className="cp-step-card-head">
                <p className="cp-step-title">O que está travando a decisão?</p>
                <svg className="cp-step-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </div>
              <p className="cp-step-desc">Nem toda objeção significa a mesma coisa. Às vezes o cliente está inseguro, às vezes ainda não enxergou valor, às vezes só precisa de mais clareza.</p>
            </div>
          </div>

          <div className="cp-step fade-up d3 visible" role="listitem">
            <span className="cp-step-num">3</span>
            <span className="cp-step-line" aria-hidden="true"></span>
            <div className="cp-step-card">
              <div className="cp-step-card-head">
                <p className="cp-step-title">Qual é o próximo passo mais inteligente?</p>
                <svg className="cp-step-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </div>
              <p className="cp-step-desc">Só depois dessa análise ele escolhe como conduzir: às vezes responder, às vezes perguntar, às vezes esperar, às vezes mudar a direção da conversa.</p>
            </div>
          </div>

          <div className="cp-step fade-up d4 visible" role="listitem">
            <span className="cp-step-num">4</span>
            <div className="cp-step-card">
              <div className="cp-step-card-head">
                <p className="cp-step-title">Agora sim: o que dizer.</p>
                <svg className="cp-step-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </div>
              <p className="cp-step-desc">A resposta nasce da estratégia, não o contrário. Ele acompanha toda a conversa com o cliente.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
