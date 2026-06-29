const cards = [
  {
    delay: 'd1',
    titulo: 'Tempo',
    desc: 'Você já investiu horas naquela oportunidade. Quando a negociação trava, você não perde apenas uma venda. Perde todo o tempo que colocou nela.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    delay: 'd2',
    titulo: 'Dinheiro',
    desc: 'Muitas vezes você baixa o preço por insegurança. Ou simplesmente deixa um cliente desaparecer. Nos dois casos, o resultado é o mesmo: menos faturamento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26" aria-hidden="true">
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </svg>
    ),
  },
  {
    delay: 'd3',
    titulo: 'Confiança',
    desc: 'Depois de algumas negociações perdidas, fica cada vez mais difícil sustentar seu preço e conduzir a próxima conversa com tranquilidade.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    delay: 'd4',
    titulo: 'Energia',
    desc: 'Você termina a negociação pensando: "O que eu deveria ter respondido?". E continua revivendo aquela conversa durante dias.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
]

export function CustoInvisivel() {
  return (
    <section id="custo-invisivel">
      <div className="container">

        <div className="ci-header fade-up">
          <span className="eyebrow">O CUSTO INVISÍVEL</span>
          <h2 className="h2">
            Você provavelmente não está perdendo clientes.<br className="br-mobile" />
            Está perdendo todo o trabalho que veio antes deles.
          </h2>
          <p className="ci-subtitle">O prejuízo de uma negociação perdida quase nunca aparece de uma vez. Ele se divide em quatro.</p>
        </div>

        <div className="ci-grid">
          {cards.map((c) => (
            <div key={c.titulo} className={`ci-card fade-up ${c.delay}`}>
              <div className="ci-card-icon">{c.icon}</div>
              <div className="ci-card-title">{c.titulo}</div>
              <p className="ci-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="ci-insight fade-up">
          <p>A maioria das pessoas acredita que precisa aprender a vender melhor. Mas, muitas vezes, o que falta não é falar mais. É saber qual é o próximo passo quando a conversa muda de direção.</p>
        </div>

        <p className="ci-microcopy fade-up">É exatamente nesse momento que a maioria das vendas se perde.</p>

        <div className="ci-checklist fade-up">
          <p className="ci-checklist-title">Você provavelmente já viveu pelo menos uma destas:</p>
          <ul className="ci-checklist-list">
            <li>Abriu o WhatsApp, escreveu e apagou a mensagem mais de uma vez.</li>
            <li>Não soube como cobrar um retorno sem parecer desesperado.</li>
            <li>Deu desconto antes mesmo de o cliente pedir.</li>
            <li>Saiu de uma reunião pensando "depois eu penso no que mando".</li>
            <li>Reviveu uma conversa por dias, imaginando o que poderia ter dito.</li>
          </ul>
          <p className="ci-checklist-turn">Se você marcou pelo menos uma, o problema nunca foi esforço. Foi não <span className="ci-turn-hl">saber qual era o próximo passo</span>.</p>
        </div>

      </div>
    </section>
  )
}
