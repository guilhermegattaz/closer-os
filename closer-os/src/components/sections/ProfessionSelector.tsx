const blocks = [
  {
    title: 'Você domina o que faz.',
    text: 'Mas quando o cliente faz uma pergunta inesperada, você sente que poderia responder melhor.',
  },
  {
    title: 'Você já perdeu clientes...',
    text: '...e ficou pensando depois: "Se eu tivesse respondido diferente, talvez essa venda tivesse acontecido."',
  },
  {
    title: 'Você evita parecer insistente.',
    text: 'Então muitas vezes demora para fazer um follow-up ou simplesmente deixa a conversa morrer.',
  },
  {
    title: 'Você sabe fazer o seu trabalho.',
    text: 'Mas apresentar o preço ainda gera insegurança em algumas situações.',
  },
  {
    title: 'Você conversa com clientes praticamente todos os dias.',
    text: 'Mesmo assim, algumas respostas continuam difíceis.',
  },
  {
    title: 'Você não quer aprender técnicas complicadas.',
    text: 'Só quer saber exatamente o que responder quando a conversa sair do roteiro.',
  },
]

export function ProfessionSelector() {
  return (
    <section id="profissao">
      <div className="prof-inner">
        <div className="prof-header fade-up">
          <span className="eyebrow">Para quem é</span>
          <h2 className="h2">
            Você provavelmente vai se identificar com pelo menos uma destas situações.
          </h2>
          <p className="pq-sub">
            Você não precisa trabalhar com vendas para viver isso. Basta conversar com clientes, apresentar um orçamento ou depender de novas vendas para crescer.
          </p>
        </div>

        <div className="pq-blocks-grid fade-up d1">
          {blocks.map((block) => (
            <div className="pq-block" key={block.title}>
              <p className="pq-block-title">{block.title}</p>
              <p className="pq-block-text">{block.text}</p>
            </div>
          ))}
        </div>

        <p className="pq-impact fade-up d2">
          Não importa se você vende um serviço, uma consultoria, um tratamento, um projeto ou qualquer outra solução. Sempre que existir uma conversa importante com um cliente, o CloserOS pode ajudar.
        </p>
      </div>
    </section>
  )
}
