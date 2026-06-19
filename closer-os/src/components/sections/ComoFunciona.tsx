import { KIWIFY_URL } from '../../data/links'

export function ComoFunciona() {
  return (
    <section id="como">
      <div className="container">
        <div className="como-passos fade-up">
          <p className="section-eyebrow">Como funciona</p>
          <p className="como-passos-titulo">Simples assim. Em 3 passos.</p>
          <div className="como-passos-grid">
            <div className="como-passo">
              <div className="como-passo-num">1</div>
              <h4>Descreva a situação</h4>
              <p>Você conta o que o cliente disse: "tá caro", "vou pensar", "preciso falar com meu marido", ou que sumiu.</p>
            </div>
            <div className="como-passo-seta" aria-hidden="true">→</div>
            <div className="como-passo">
              <div className="como-passo-num">2</div>
              <h4>Ele faz as perguntas certas</h4>
              <p>O CloserOS entende o seu caso, o seu serviço e o contexto daquela conversa.</p>
            </div>
            <div className="como-passo-seta" aria-hidden="true">→</div>
            <div className="como-passo">
              <div className="como-passo-num">3</div>
              <h4>Você recebe o que dizer</h4>
              <p>A resposta exata para mandar agora, antes de responder ao cliente. Em segundos.</p>
            </div>
          </div>
        </div>
        <div className="como-layout">
          <div className="como-left">
            <div className="section-eyebrow left fade-up">A SOLUÇÃO</div>
            <h2 className="h2 fade-up d1">
              O mentor que está com você<br className="br-desktop" />{' '}<span style={{ color: 'var(--accent-violet)' }}>em cada conversa.</span>
            </h2>
            <p className="body-lg fade-up d2" style={{ margin: '16px 0 0' }}>
              Não é um curso pra assistir depois. É orientação na hora exata em que a conversa está acontecendo — para você nunca mais sair de uma conversa remoendo o que devia ter dito.
            </p>
            <p className="como-distinção fade-up d2">
              E não, isso não é um "prompt mágico" qualquer da internet. É um sistema construído sobre um <span style={{ color: 'var(--accent-2)' }}>método real de vendas</span> — ele entende o seu caso antes de te responder.
            </p>
            <p className="body-lg fade-up d2" style={{ margin: '20px 0 0', fontStyle: 'italic', color: 'var(--text-2)' }}>
              Imagine ter, do seu lado, um especialista pronto para te dizer o que falar — toda vez que um cliente te deixa travado.
            </p>
            <p className="body-lg fade-up d2" style={{ margin: '16px 0 0' }}>
              Não, isso não é "mais um prompt" que você acha no Google. O CloserOS™ é um sistema construído com a lógica de quem já conduziu milhões em vendas, atendendo cliente por cliente — ele faz as perguntas certas sobre o seu caso e te devolve o caminho exato para aquela conversa. A diferença entre pedir uma dica genérica ao ChatGPT e ter um especialista sentado ao seu lado.
            </p>
            <a href={KIWIFY_URL} className="como-cta fade-up d3" target="_blank" rel="noopener noreferrer" aria-label="Quero meu mentor de vendas — R$67">
              Quero meu mentor de vendas — R$67 →
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
              <p>O cliente manda "tá caro" às 22h. A reunião é amanhã cedo e você não sabe como abrir. O CloserOS está lá no momento exato — não no horário comercial, não daqui a uma semana.</p>
            </div>
            <div className="como-card fade-up d1">
              <div className="como-lottie">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg>
              </div>
              <h3>Para a sua situação específica</h3>
              <p>Ele não dá conselho genérico. Entende o seu serviço, o seu preço e o tom daquela conversa — e te devolve a resposta certa para aquele cliente, não um script pronto que serve pra qualquer um.</p>
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
              <p>Sem aplicativo, sem mensalidade, sem instalar nada. Abra o ChatGPT no celular, descreva a situação e tenha a resposta — enquanto o WhatsApp do cliente ainda está aberto.</p>
            </div>
            <div className="como-card fade-up d3">
              <div className="como-lottie">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>
                </svg>
              </div>
              <h3>Suas conversas ficam salvas</h3>
              <p>Cada situação que você consultou fica no histórico. Na próxima vez que o mesmo tipo de objeção aparecer, você já sabe o que dizer — sem precisar improvisar de novo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
