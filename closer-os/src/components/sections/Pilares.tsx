const pilares = [
  {
    num: '01',
    title: 'ANTES DA REUNIÃO',
    desc: 'Você abre a conversa com segurança, sem parecer ansioso ou genérico, e já desperta interesse e autoridade nos primeiros minutos.',
  },
  {
    num: '02',
    title: 'DURANTE A REUNIÃO',
    desc: 'Você faz as perguntas certas e o cliente revela o que realmente importa pra ele, antes de qualquer preço entrar na mesa.',
  },
  {
    num: '03',
    title: 'QUANDO QUESTIONA O PREÇO OU VAI PENSAR',
    desc: 'Você sabe exatamente o que responder a "tá caro", "vou falar com meu sócio" ou "vou pensar", sem forçar, sem pressionar e sem diminuir o seu valor.',
  },
  {
    num: '04',
    title: 'DEPOIS DA REUNIÃO',
    desc: 'Você reativa conversas que pareciam perdidas com a mensagem certa, sem parecer insistente ou desesperado, e ganha uma nova chance de fechar.',
  },
]

export function Pilares() {
  return (
    <section id="pilares">
      <div className="container">
        <div className="pilares-header fade-up">
          <span className="eyebrow">O que está incluso</span>
          <h2 className="h2">O CloserOS te acompanha em cada etapa da negociação:</h2>
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
