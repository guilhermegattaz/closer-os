const pilares = [
  {
    num: '01',
    title: 'Roteiro de Início de Conversa',
    desc: 'Como abrir o contato com um novo lead sem parecer ansioso ou genérico, e já criar interesse desde a primeira mensagem.',
  },
  {
    num: '02',
    title: 'Investigação — Perguntas de Valor',
    desc: 'As perguntas certas que fazem o cliente revelar o que realmente importa para ele, antes de você apresentar qualquer preço.',
  },
  {
    num: '03',
    title: 'Escudo de Objeções',
    desc: 'Respostas exatas para "tá caro", "vou falar com meu sócio" e "não tenho dinheiro agora", sem forçar, sem suplicar, sem diminuir o seu valor.',
  },
  {
    num: '04',
    title: 'Resgatador de Vácuo',
    desc: 'Como reativar um cliente que sumiu após receber a proposta, e transformar o silêncio incômodo em uma nova chance de fechar.',
  },
]

export function Pilares() {
  return (
    <section id="pilares">
      <div className="container">
        <div className="pilares-header fade-up">
          <span className="eyebrow">O que está incluso</span>
          <h2 className="h2">Tudo o que o seu mentor de bolso<br className="br-mobile" /> faz por você em segundos:</h2>
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
