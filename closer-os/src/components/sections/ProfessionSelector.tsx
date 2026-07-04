function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ProfessionSelector() {
  return (
    <section id="profissao">
      <div className="prof-inner">
        <div className="prof-header fade-up">
          <span className="eyebrow">Para quem é</span>
          <h2 className="h2">
            Você provavelmente vai se identificar com <span className="text-gradient">pelo menos uma destas situações.</span>
          </h2>
          <p className="pq-sub">
            Você não precisa trabalhar com vendas para viver isso. Basta conversar com clientes, apresentar um orçamento ou depender de novas vendas para crescer.
          </p>
        </div>

        <div className="pq-list-card fade-up d1 visible">
          <div className="pq-row">
            <span className="pq-check" aria-hidden="true"><CheckIcon /></span>
            <p className="pq-row-text">Já ficou olhando para uma conversa sem saber exatamente o que responder.</p>
          </div>
          <div className="pq-row">
            <span className="pq-check" aria-hidden="true"><CheckIcon /></span>
            <p className="pq-row-text">Envia uma proposta, um orçamento ou um preço e depois fica torcendo para o cliente responder.</p>
          </div>
          <div className="pq-row">
            <span className="pq-check" aria-hidden="true"><CheckIcon /></span>
            <p className="pq-row-text">Trava quando o cliente diz "tá caro" ou "vou pensar".</p>
          </div>
          <div className="pq-row">
            <span className="pq-check" aria-hidden="true"><CheckIcon /></span>
            <p className="pq-row-text">Sabe fazer muito bem o seu trabalho, mas sente que poderia conduzir melhor as conversas com os clientes.</p>
          </div>
          <div className="pq-row">
            <span className="pq-check" aria-hidden="true"><CheckIcon /></span>
            <p className="pq-row-text">Já terminou uma reunião pensando: "Eu poderia ter respondido aquilo de outro jeito."</p>
          </div>
          <div className="pq-row">
            <span className="pq-check" aria-hidden="true"><CheckIcon /></span>
            <p className="pq-row-text">Quer parar de improvisar e ter mais clareza sempre que uma conversa importante sair do roteiro.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
