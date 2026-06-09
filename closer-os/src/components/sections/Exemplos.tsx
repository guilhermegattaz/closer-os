import { exemplos } from '../../data/exemplos'

export function Exemplos() {
  return (
    <section id="exemplos">
      <div className="s-card-light">
      <div className="container">
        <div className="section-eyebrow fade-up">Veja funcionando</div>
        <h2 className="h2 exemplos-headline fade-up d1" style={{ textAlign: 'center', letterSpacing: '-0.04em' }}>
          Situações reais.<br className="br-desktop" />{' '}Respostas <span style={{ color: 'var(--accent-violet)' }}>em tempo real.</span>
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '16px auto 32px' }}>
          Por trás do CloserOS™: mais de R$9.000.000 em vendas 1:1 e a expertise dos maiores especialistas em vendas do mundo.
        </p>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px', color: 'var(--text-2)' }}>
          Você descreve a situação — "o cliente disse que tá caro", "mandei a proposta e sumiu", "não sei como começar a conversa" — e o CloserOS responde com orientação específica para aquele momento. Em segundos. Como um mentor que você consulta na hora que precisa, não depois que a oportunidade passou.
        </p>
        <div className="exemplos-grid fade-up d3">
          {exemplos.map((e) => (
            <div key={e.id} className={`exemplo-card${e.destacado ? ' exemplo-destaque' : ''}`}>
              <p className="exemplo-pergunta">"{e.pergunta}"</p>
              <div className="exemplo-resposta">
                <span>{e.resposta}</span>
                {e.destacado && <strong className="exemplo-destaque-text">{e.destacado}</strong>}
                {!e.destacado && <strong>{e.destacado}</strong>}
              </div>
              <div className="exemplo-label">{e.titulo}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
