export function OfertaPreview() {
  return (
    <section id="oferta-preview">
      <div className="container">
        <div className="op-header fade-up">
          <span className="eyebrow">O que você desbloqueia</span>
          <h2 className="h2">Isso é exatamente o que você vai abrir <span className="text-gradient">poucos minutos depois de comprar.</span></h2>
        </div>

        <div className="op-rows fade-up d1">
          <div className="op-row">
            <div className="op-row-mockup">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </div>
            <div className="op-row-content">
              <h3 className="op-name">CloserOS™</h3>
              <p className="op-desc">Seu mentor comercial para qualquer conversa importante. Explique a situação e descubra o próximo passo.</p>
            </div>
          </div>

          <div className="op-row">
            <div className="op-row-mockup">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            </div>
            <div className="op-row-content">
              <h3 className="op-name">Biblioteca de Cenários Reais™</h3>
              <p className="op-desc">Dezenas de situações reais conduzidas pelo CloserOS para você se inspirar no dia a dia.</p>
            </div>
          </div>

          <div className="op-row">
            <div className="op-row-mockup">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></svg>
            </div>
            <div className="op-row-content">
              <h3 className="op-name">Meu Roteiro Comercial™</h3>
              <p className="op-desc">Construa, junto com o CloserOS, um roteiro totalmente personalizado para suas reuniões.</p>
            </div>
          </div>

          <div className="op-row">
            <div className="op-row-mockup">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
            </div>
            <div className="op-row-content">
              <h3 className="op-name">Manual de Bolso™</h3>
              <p className="op-desc">Tenha o CloserOS ao alcance em segundos e use no dia a dia, de forma prática.</p>
            </div>
          </div>
        </div>

        <div className="op-final fade-up d2">
          <p className="op-final-lead">Tudo foi pensado para que você compre agora e consiga utilizar o CloserOS ainda hoje.</p>
          <p className="op-final-sub">Você não precisa estudar vendas, configurar sistemas ou aprender comandos complicados. Basta acessar, explicar rapidamente a situação e começar a usar.</p>
        </div>
      </div>
    </section>
  )
}
