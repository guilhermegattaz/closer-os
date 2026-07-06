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
              <img src="/images/mcel.webp" alt="Mockup do CloserOS™" width="100%" height="100%" loading="eager" />
            </div>
            <div className="op-row-content">
              <h3 className="op-name">CloserOS™</h3>
              <p className="op-desc">Seu mentor comercial para qualquer conversa importante. Explique a situação e descubra o próximo passo.</p>
            </div>
          </div>

          <div className="op-row">
            <div className="op-row-mockup">
              <img src="/images/mbib.webp" alt="Mockup da Biblioteca de Cenários Reais™" width="100%" height="100%" loading="lazy" />
            </div>
            <div className="op-row-content">
              <h3 className="op-name">Biblioteca de Cenários Reais™</h3>
              <p className="op-desc">Dezenas de situações reais conduzidas pelo CloserOS para você se inspirar no dia a dia.</p>
            </div>
          </div>

          <div className="op-row">
            <div className="op-row-mockup">
              <img src="/images/mrot.webp" alt="Mockup do Meu Roteiro Comercial™" width="100%" height="100%" loading="lazy" />
            </div>
            <div className="op-row-content">
              <h3 className="op-name">Meu Roteiro Comercial™</h3>
              <p className="op-desc">Construa, junto com o CloserOS, um roteiro totalmente personalizado para suas reuniões.</p>
            </div>
          </div>

          <div className="op-row">
            <div className="op-row-mockup">
              <img src="/images/mmanu.webp" alt="Mockup do Manual de Bolso™" width="100%" height="100%" loading="lazy" />
            </div>
            <div className="op-row-content">
              <h3 className="op-name">Autoridade Desde a Primeira Conversa™</h3>
              <p className="op-desc">Aprenda a conduzir os primeiros minutos da conversa para gerar confiança, valor e interesse antes mesmo de apresentar sua solução.</p>
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
