export function ComoFunciona() {
  return (
    <section id="como">
      <div className="container">
        <div className="section-eyebrow fade-up">Como funciona</div>
        <h2 className="h2 fade-up d1" style={{ textAlign: 'center' }}>
          O mentor que está com você<br className="br-desktop" />{' '}em cada conversa.
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 520, margin: '16px auto 0' }}>
          Você descreve o que está acontecendo — ele te diz exatamente o que fazer. Não no dia seguinte. Não depois de um curso de 40 horas. Agora. Na hora que você precisa.
        </p>
        <div className="como-grid">
          <div className="como-card fade-up">
            <div className="como-lottie">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="20" stroke="#1a1814" strokeWidth="2"/>
                <circle cx="28" cy="28" r="2" fill="#1a1814"/>
                <line x1="28" y1="28" x2="28" y2="13" stroke="#3d5afe" strokeWidth="2" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 28 28" to="360 28 28" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="28" y1="28" x2="28" y2="17" stroke="#1a1814" strokeWidth="2.5" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 28 28" to="360 28 28" dur="72s" repeatCount="indefinite"/>
                </line>
                <line x1="28" y1="9" x2="28" y2="12" stroke="#1a1814" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="28" y1="44" x2="28" y2="47" stroke="#1a1814" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="9" y1="28" x2="12" y2="28" stroke="#1a1814" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="44" y1="28" x2="47" y2="28" stroke="#1a1814" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Disponível a qualquer hora</h3>
            <p>Às 22h antes de uma reunião importante. No intervalo do almoço. Logo depois de uma conversa difícil. Sem hora marcada, sem esperar resposta.</p>
          </div>
          <div className="como-card fade-up d1">
            <div className="como-lottie">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <animateTransform attributeName="transform" type="translate"
                    values="0,0; 3,-3; 0,3; -3,-2; 0,0"
                    keyTimes="0; 0.25; 0.5; 0.75; 1"
                    dur="2.8s" repeatCount="indefinite" calcMode="spline"
                    keySplines="0.4,0,0.2,1; 0.4,0,0.2,1; 0.4,0,0.2,1; 0.4,0,0.2,1"/>
                  <circle cx="24" cy="23" r="12" stroke="#1a1814" strokeWidth="2"/>
                  <circle cx="24" cy="23" r="7" stroke="#3d5afe" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="33" y1="32" x2="44" y2="43" stroke="#1a1814" strokeWidth="2.5" strokeLinecap="round"/>
                </g>
              </svg>
            </div>
            <h3>Para a sua situação específica</h3>
            <p>Não é resposta genérica de internet. Você descreve o cliente, o serviço, o contexto — e recebe orientação para aquela situação exata. Como conversar com um mentor que te conhece.</p>
          </div>
          <div className="como-card fade-up d2">
            <div className="como-lottie">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="6" width="34" height="19" rx="9" fill="#e8e5df"/>
                <path d="M18 25 L13 31 L24 25Z" fill="#e8e5df"/>
                <circle cx="32" cy="42" r="12" fill="#3d5afe"/>
                <rect x="27" y="37" width="10" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
                <line x1="30" y1="37" x2="30" y2="35" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="34" y1="37" x2="34" y2="35" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="30" y1="47" x2="30" y2="49" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="34" y1="47" x2="34" y2="49" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="27" y1="40" x2="25" y2="40" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="27" y1="44" x2="25" y2="44" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="37" y1="40" x2="39" y2="40" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="37" y1="44" x2="39" y2="44" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="32" cy="42" r="2" fill="white">
                  <animate attributeName="r" values="1.5;2.5;1.5" dur="1.4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.4s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <h3>Funciona no ChatGPT gratuito</h3>
            <p>Sem aplicativo extra. Sem mensalidade. Funciona no celular ou computador, na versão gratuita do ChatGPT. Suas conversas ficam salvas para você consultar quando quiser.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
