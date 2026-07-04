export function AcessoRapido() {
  return (
    <section id="acesso-rapido" className="acesso-rapido">
      <div className="container">
        <div className="ar-header fade-up">
          <h2 className="h2">Em poucos minutos você já pode estar usando o CloserOS.</h2>
          <p className="ar-sub">O acesso é liberado automaticamente. Você compra agora e pode usar o CloserOS na sua próxima conversa ainda hoje.</p>
        </div>

        <div className="ar-grid fade-up d1">
          <div className="ar-card">
            <span className="ar-step-label">PASSO 1</span>
            <h3 className="ar-card-title">Finalize sua compra</h3>
            <p className="ar-card-text">Assim que o pagamento for aprovado, seu acesso é enviado automaticamente para o e-mail informado no checkout.</p>
            <div className="ar-card-footer">⏱ Menos de 1 minuto</div>
          </div>

          <div className="ar-card">
            <span className="ar-step-label">PASSO 2</span>
            <h3 className="ar-card-title">Abra o CloserOS</h3>
            <p className="ar-card-text">Você recebe acesso imediato ao CloserOS e a todos os materiais de apoio para começar sem precisar configurar nada complicado.</p>
            <div className="ar-card-footer">⏱ Cerca de 3 minutos</div>
          </div>

          <div className="ar-card">
            <span className="ar-step-label">PASSO 3</span>
            <h3 className="ar-card-title">Use na sua próxima conversa</h3>
            <p className="ar-card-text">Recebeu uma mensagem importante? Vai entrar em uma reunião? Explique rapidamente o que aconteceu e receba orientação antes de responder ao cliente.</p>
            <div className="ar-card-footer">✅ Ainda hoje</div>
          </div>
        </div>

      </div>
    </section>
  )
}
