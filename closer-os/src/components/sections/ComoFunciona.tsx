export function ComoFunciona() {
  return (
    <section id="como">
      <div className="container">
        <div className="section-eyebrow fade-up">A SOLUÇÃO</div>
        <h2 className="h2 fade-up d1" style={{ textAlign: 'center' }}>
          O mentor que <span style={{ textDecoration: 'underline', textDecorationColor: '#facc1d', textUnderlineOffset: '4px' }}>está com você</span><br className="br-desktop" />{' '}em cada conversa.
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 520, margin: '16px auto 0' }}>
          Você descreve o que está acontecendo — ele te diz exatamente o que fazer. Não no dia seguinte. Não depois de um curso de 40 horas. Agora. Na hora que você precisa.
        </p>
        <div className="como-grid">
          <div className="como-card fade-up">
            <div className="como-lottie">
              <span className="como-emoji">🕐</span>
            </div>
            <h3>Disponível a qualquer hora</h3>
            <p>Às 22h antes de uma reunião importante. No intervalo do almoço. Logo depois de uma conversa difícil. Sem hora marcada, sem esperar resposta.</p>
          </div>
          <div className="como-card fade-up d1">
            <div className="como-lottie">
              <span className="como-emoji">🧠</span>
            </div>
            <h3>Para a sua situação específica</h3>
            <p>Não é resposta genérica de internet. Você descreve o cliente, o serviço, o contexto — e recebe orientação para aquela situação exata. Como conversar com um mentor que te conhece.</p>
          </div>
          <div className="como-card fade-up d2">
            <div className="como-lottie">
              <span className="como-emoji">📱</span>
            </div>
            <h3>Funciona no ChatGPT gratuito</h3>
            <p>Sem aplicativo extra. Sem mensalidade. Funciona no celular ou computador, na versão gratuita do ChatGPT. Suas conversas ficam salvas para você consultar quando quiser.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
