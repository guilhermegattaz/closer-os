const pilares = [
  {
    num: '01',
    title: 'ANTES DA REUNIÃO',
    desc: 'Como iniciar conversas e reuniões sem parecer ansioso ou genérico, e já criar interesse e autoridade nos primeiros minutos.',
  },
  {
    num: '02',
    title: 'DURANTE A REUNIÃO',
    desc: 'As perguntas certas que fazem o cliente revelar o que realmente importa para ele, antes de você apresentar qualquer preço.',
  },
  {
    num: '03',
    title: 'QUANDO QUESTIONA O PREÇO OU VAI PENSAR',
    desc: 'Respostas exatas para "tá caro", "vou falar com meu sócio" e "não tenho dinheiro agora", sem forçar, sem pressionar, sem diminuir o seu valor.',
  },
  {
    num: '04',
    title: 'Resgate de Oportunidades',
    desc: 'Mensagens cirúrgicas para reativar conversas que pareciam perdidas, sem parecer insistente ou desesperado, e ganhar uma nova chance de fechar.',
  },
]

export function Pilares() {
  return (
    <section id="pilares">
      <div className="container">
        <div className="pilares-header fade-up">
          <span className="eyebrow">O que está incluso</span>
          <h2 className="h2">Tudo o que o CloserOS<br className="br-mobile" /> faz por você em segundos:</h2>
        </div>
        <div className="pilares-grid">
          {pilares.map((p, i) => (
            <div key={p.num} className={`pilar fade-up${i % 2 === 1 ? ' d1' : ''}`}>
              <span className="pilar-num">{p.num}</span>
              <div>
                <div className="pilar-title">{p.title}</div>
                <div className="pilar-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
