import { KIWIFY_URL } from '../../data/links'

export function ComoFunciona() {
  return (
    <section id="como">
      <div className="container">
        <div className="como-layout">
          <div className="como-left">
            <div className="section-eyebrow left fade-up">A SOLUÇÃO</div>
            <h2 className="h2 fade-up d1">
              O mentor que está com você<br className="br-desktop" />{' '}<span style={{ color: 'var(--accent-violet)' }}>em cada conversa.</span>
            </h2>
            <p className="body-lg fade-up d2" style={{ margin: '16px 0 0' }}>
              Você descreve o que está acontecendo — ele te diz exatamente o que fazer. Não no dia seguinte. Não depois de um curso de 40 horas. Agora. Na hora que você precisa.
            </p>
            <p className="body-lg fade-up d2" style={{ margin: '20px 0 0', fontStyle: 'italic', color: 'var(--text-2)' }}>
              Imagine ter, do seu lado, um especialista pronto para te dizer o que falar — toda vez que um cliente te deixa travado.
            </p>
            <a href={KIWIFY_URL} className="como-cta fade-up d3" target="_blank" rel="noopener noreferrer" aria-label="Quero meu mentor de vendas — R$47">
              Quero meu mentor de vendas → R$47
            </a>
          </div>
          <div className="como-grid">
            <div className="como-card fade-up">
              <div className="como-lottie">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3>Disponível a qualquer hora</h3>
              <p>Às 22h antes de uma reunião importante. No intervalo do almoço. Logo depois de uma conversa difícil. Sem hora marcada, sem esperar resposta.</p>
            </div>
            <div className="como-card fade-up d1">
              <div className="como-lottie">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg>
              </div>
              <h3>Para a sua situação específica</h3>
              <p>Não é resposta genérica de internet. Você descreve o cliente, o serviço, o contexto — e recebe orientação para aquela situação exata. Como conversar com um mentor que te conhece.</p>
            </div>
            <div className="como-card fade-up d2">
              <div className="como-lottie">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="5" y="2" width="14" height="20" rx="2"/>
                  <line x1="9" y1="7" x2="15" y2="7"/>
                  <line x1="9" y1="11" x2="15" y2="11"/>
                  <line x1="9" y1="15" x2="13" y2="15"/>
                </svg>
              </div>
              <h3>Funciona no ChatGPT gratuito</h3>
              <p>Sem aplicativo extra. Sem mensalidade. Funciona no celular ou computador, na versão gratuita do ChatGPT. Suas conversas ficam salvas para você consultar quando quiser.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
