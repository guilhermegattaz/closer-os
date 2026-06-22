import { useEffect } from 'react'

export function FerramentaNaoCurso() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const btn = (e.target as Element).closest('[data-copy-msg]') as HTMLButtonElement | null
      if (!btn) return
      const block = btn.closest('.ferra-copyblock')
      if (!block) return
      const msg = [...block.querySelectorAll('p')]
        .map(p => p.textContent?.trim().replace(/^"|"$/g, '') ?? '')
        .join('\n\n')
      const done = () => {
        const o = btn.innerHTML
        btn.innerHTML = '✓ Copiado!'
        btn.classList.add('copied')
        setTimeout(() => { btn.innerHTML = o; btn.classList.remove('copied') }, 2000)
      }
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(msg).then(done).catch(done)
      } else {
        const t = document.createElement('textarea')
        t.value = msg
        document.body.appendChild(t)
        t.select()
        try { document.execCommand('copy') } catch (_) {}
        t.remove()
        done()
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <section id="ferramenta">
      <div className="container">
        <div className="ferra-head fade-up visible">
          <span className="eyebrow">Como funciona</span>
          <h2 className="ferra-title">Receba a resposta certa em <span className="hl">menos de 1 minuto.</span></h2>
          <p className="ferra-sub">Veja, na prática, como é a conversa real entre você e o CloserOS.</p>
        </div>

        <div className="ferra-demo">
          <div className="ferra-step ferra-step--left fade-up visible">
            <span className="ferra-step-num">01</span>
            <div>
              <h3 className="ferra-step-title">Descreva a situação</h3>
              <p className="ferra-step-desc">Envie áudio ou mensagem, conte o que o cliente disse ou o que aconteceu na conversa.</p>
            </div>
          </div>

          <div className="ferra-phone fade-up visible">
            <div className="ferra-chat-head">
              <span className="ferra-avatar">C</span>
              <div>
                <strong className="ferra-chat-name">CloserOS <span className="ferra-dot-on"></span></strong>
                <span className="ferra-chat-status">Online · responde em segundos</span>
              </div>
            </div>
            <div className="ferra-chat-body">
              <div className="ferra-daysep">Hoje · 14:32</div>
              <div className="ferra-bubble-user">
                Meu cliente sumiu depois da reunião. Faz 5 dias sem resposta. O que eu mando agora?
                <span className="ferra-time">14:32 ✓</span>
              </div>
              <div className="ferra-typing">Analisando <span></span><span></span><span></span></div>
              <div className="ferra-card">
                <div className="ferra-card-label">Resposta</div>
                <p className="ferra-card-text">Não mande "Oi, tudo bem?" nem "Você pensou na proposta?" Mande exatamente isso:</p>
                <div className="ferra-copyblock">
                  <span className="ferra-copyblock-tag">Mensagem pronta</span>
                  <button type="button" className="ferra-copyblock-btn" data-copy-msg="">⧉ Copiar</button>
                  <p>"Oi [nome], estava pensando na conversa que a gente teve sobre [problema específico que ele mencionou].</p>
                  <p>Surgiu uma ideia que pode ser útil pra você — posso te mandar?"</p>
                </div>
                <p className="ferra-card-text ferra-card-text--after">Esse tipo de mensagem gera resposta porque não pressiona e ainda gera curiosidade. Me conta o que ele disse sobre o problema dele que eu ajusto o texto pra você.</p>
                <span className="ferra-card-meta">14:32 · gerado em 4s</span>
              </div>
            </div>
            <div className="ferra-chat-input">
              <span>Descreva a próxima situação...</span>
              <button className="ferra-send" aria-hidden="true" tabIndex={-1}>→</button>
            </div>
          </div>

          <div className="ferra-steps-right">
            <div className="ferra-step fade-up visible">
              <span className="ferra-step-num">02</span>
              <div>
                <h3 className="ferra-step-title">O CloserOS analisa</h3>
                <p className="ferra-step-desc">Lê contexto, intenção por trás e emoção da conversa em poucos segundos como um especialista.</p>
              </div>
            </div>
            <div className="ferra-step fade-up visible">
              <span className="ferra-step-num">03</span>
              <div>
                <h3 className="ferra-step-title">Receba o que dizer</h3>
                <p className="ferra-step-desc">Resposta cirúrgica, no tom certo, pronto para copiar e colar ou para dizer na próxima conversa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ferra-guarantees fade-up visible">
          <span><b>✓</b> Sem improvisar</span>
          <span><b>✓</b> Sem sair dando desconto</span>
          <span><b>✓</b> Sem travar</span>
        </div>
      </div>
    </section>
  )
}
