function CheckIc() {
  return (
    <span className="op-check-ic">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  )
}

export function OfertaPreview() {
  return (
    <section id="oferta-preview">
      <div className="container">
        <div className="op-header fade-up">
          <span className="eyebrow">O que você desbloqueia</span>
          <h2 className="h2">Isso é exatamente o que você vai abrir <span className="text-gradient">poucos minutos depois de comprar.</span></h2>
          <p className="op-sub">Cada item abaixo já está pronto pra usar. Nada pra configurar, nada pra estudar antes.</p>
        </div>

        <div className="op-grid fade-up d1">
          <div className="op-card">
            <h3 className="op-name">CloserOS™</h3>
            <p className="op-desc">Seu mentor comercial para qualquer conversa importante. Explique a situação e descubra o próximo passo.</p>
            <div className="op-divider"></div>
            <ul className="op-checklist">
              <li><CheckIc />Responder objeções</li>
              <li><CheckIc />Preparar reuniões</li>
              <li><CheckIc />Apresentar o preço</li>
              <li><CheckIc />Retomar clientes</li>
            </ul>
          </div>

          <div className="op-card">
            <h3 className="op-name">Biblioteca de Cenários Reais™</h3>
            <p className="op-desc">Dezenas de situações reais conduzidas pelo CloserOS para você se inspirar no dia a dia.</p>
            <div className="op-divider"></div>
            <ul className="op-checklist">
              <li><CheckIc />&ldquo;Vou pensar&rdquo;</li>
              <li><CheckIc />&ldquo;Está caro&rdquo;</li>
              <li><CheckIc />Cliente sumiu</li>
              <li><CheckIc />Pedido de desconto</li>
              <li><CheckIc />Abrindo a reunião</li>
              <li><CheckIc />Primeiro contato</li>
            </ul>
          </div>

          <div className="op-card">
            <h3 className="op-name">Meu Roteiro Comercial™</h3>
            <p className="op-desc">Construa, junto com o CloserOS, um roteiro totalmente personalizado para suas reuniões.</p>
            <div className="op-divider"></div>
            <ul className="op-checklist">
              <li><CheckIc />Abertura</li>
              <li><CheckIc />Investigação</li>
              <li><CheckIc />Objeções</li>
              <li><CheckIc />Apresentação</li>
              <li><CheckIc />Preço</li>
              <li><CheckIc />Fechamento</li>
            </ul>
          </div>

          <div className="op-card">
            <h3 className="op-name">Manual de Bolso™</h3>
            <p className="op-desc">Tenha o CloserOS ao alcance em segundos e use no dia a dia, de forma prática.</p>
            <div className="op-divider"></div>
            <ul className="op-checklist">
              <li><CheckIc />Computador</li>
              <li><CheckIc />Celular</li>
              <li><CheckIc />ChatGPT gratuito</li>
              <li><CheckIc />Primeira conversa</li>
              <li><CheckIc />Melhores práticas</li>
            </ul>
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
