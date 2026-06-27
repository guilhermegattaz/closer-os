export function ComoPensa() {
  return (
    <section id="como-pensa">
      <div className="container">

        <div className="cp-header fade-up">
          <span className="eyebrow">COMO ELE PENSA</span>
          <h2 className="h2">O CloserOS não entrega respostas.<br className="br-mobile" /> Primeiro ele entende a negociação.</h2>
          <p className="cp-subtitle">
            Antes de sugerir qualquer mensagem, o CloserOS identifica o contexto da conversa, entende o que provavelmente está impedindo a decisão do cliente e só então mostra qual é o próximo passo. É isso que faz cada resposta parecer natural, estratégica e específica para aquela situação.
          </p>
        </div>

        <div className="cp-flow" role="list">

          <div className="cp-step fade-up d1" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="cp-step-label">Você descreve a situação</p>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d2" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <p className="cp-step-label">Identifica o momento da negociação</p>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d3" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="cp-step-label">Analisa o que provavelmente está travando a decisão</p>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d4" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <p className="cp-step-label">Escolhe a melhor estratégia</p>
          </div>

          <div className="cp-connector" aria-hidden="true">›</div>

          <div className="cp-step fade-up d5" role="listitem">
            <div className="cp-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <p className="cp-step-label">Mostra qual é o próximo passo</p>
          </div>

        </div>

        <div className="cp-insight fade-up">
          <p className="cp-insight-lead">A mesma frase pode significar coisas completamente diferentes.</p>
          <p>Quando um cliente diz "Vou pensar.", ele pode estar:</p>
          <ul className="cp-insight-list">
            <li>sem urgência</li>
            <li>inseguro</li>
            <li>comparando propostas</li>
            <li>sem enxergar valor suficiente</li>
          </ul>
          <p>Responder igual para todos esses cenários normalmente gera o mesmo resultado: <span className="cp-silence">silêncio</span>.</p>
          <p>Por isso o CloserOS primeiro entende o contexto da negociação. Só depois decide como conduzir a conversa.</p>
        </div>

        <p className="cp-microcopy fade-up">Quanto menos você improvisa, mais cada conversa passa a ter direção.</p>

      </div>
    </section>
  )
}
