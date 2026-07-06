const steps = [
  {
    phase: 'PRIMEIRO CONTATO',
    desc: 'O CloserOS ajuda você a iniciar conversas de forma natural e estratégica.',
    example: 'Como começo essa conversa sem parecer invasivo?',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    phase: 'ENTENDENDO O CLIENTE E CONDUZINDO A REUNIÃO',
    desc: 'Cria os roteiros certos para entender o cliente e estrutura a conversa para conduzir a apresentação com clareza e confiança.',
    example: 'Tenho uma reunião daqui a 20 minutos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    phase: 'APRESENTANDO VALOR E CONSTRUINDO RELACIONAMENTO',
    desc: 'Mostra como apresentar seu valor, ser visto como a escolha óbvia e manter sua autoridade nas conversas seguintes.',
    example: 'O cliente achou caro.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    phase: 'NEGOCIAÇÃO E FECHAMENTO',
    desc: 'Ajuda você a negociar com segurança, sem improvisar. Mesmo que você não saiba nada sobre vendas.',
    example: 'Ele disse que vai pensar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

const delays = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']

export function Pilares() {
  return (
    <section id="pilares">
      <div className="container">

        <div className="tl-header fade-up">
          <span className="eyebrow">Quando ele ajuda</span>
          <h2 className="h2">
            O CloserOS acompanha toda a conversa.<br className="br-mobile" /> <span className="text-gradient">Do primeiro contato ao fechamento.</span>
          </h2>
          <p className="tl-subtitle">
            Sempre que surgir uma dúvida durante uma conversa com um cliente, ele pode ajudar você a decidir o próximo passo.
          </p>
        </div>

        <div className="tl-track">
          <div className="tl-steps">
            {steps.map((s, i) => (
              <div key={s.phase} className={`tl-step fade-up ${delays[i]}`}>
                <div className="tl-dot" aria-hidden="true">{s.icon}</div>
                <div className="tl-content">
                  <div className="tl-phase">{s.phase}</div>
                  <p className="tl-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tl-insight fade-up">
          <p className="tl-insight-lead">Em qualquer momento da negociação, sempre existe um próximo passo.</p>
          <p className="tl-insight-body">Não importa se você ainda vai falar com o cliente, está no meio da conversa ou tentando recuperar uma negociação parada. Você não precisa decorar uma técnica para cada situação. Basta entender onde a conversa está, e o CloserOS ajuda você a decidir o próximo passo. Ele não responde mensagens soltas: ele conduz situações.</p>
        </div>

      </div>
    </section>
  )
}
