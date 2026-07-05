export function CustoInvisivel() {
  return (
    <section id="custo-invisivel">
      <div className="container">
        <div className="custo-header fade-up">
          <span className="eyebrow">O custo invisível</span>
          <h2 className="h2">Você já calculou quanto uma resposta travada custa por ano?</h2>
          <p className="custo-sub">Não é sobre o preço do CloserOS. É sobre o que você já está perdendo, mês após mês, sem perceber.</p>
        </div>
        <div className="custo-card fade-up d1">
          <div className="custo-row">
            <span className="custo-label">Perder só 1 cliente de R$1.500 por mês</span>
            <span className="custo-value">R$18.000 <small>por ano</small></span>
          </div>
          <div className="custo-divider"></div>
          <div className="custo-row custo-row--final">
            <span className="custo-label">O CloserOS custa, uma única vez</span>
            <span className="custo-value custo-value--price">R$67</span>
          </div>
        </div>
        <p className="custo-foot fade-up d2">A pergunta não é se o CloserOS vale R$67. É quanto ainda vale continuar travando na resposta errada.</p>
      </div>
    </section>
  )
}
