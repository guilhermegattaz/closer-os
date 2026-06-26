export function LeakMatrix() {
  return (
    <section id="leak">
      <div className="container">
        <div className="leak-header fade-up">
          <span className="eyebrow">O diagnóstico</span>
          <h2 className="h2">Onde o seu dinheiro está<br className="br-mobile" /> morrendo todos os dias?</h2>
        </div>

        <div className="leak-grid">

          {/* Card 1 — O Vácuo (WhatsApp) */}
          <div className="leak-card fade-up d1">
            <span className="leak-tag">O Vácuo</span>
            <div className="lm-dark">
              <div className="lm-row lm-row--end">
                <div className="lm-bubble lm-bubble--sent">
                  "Aqui está a proposta! Fico no aguardo 🙂"
                  <div className="lm-meta" style={{ display:'inline-flex', alignItems:'center', gap:4, justifyContent:'flex-end', width:'100%' }}>
                    <span style={{ opacity:.7 }}>10:42</span>
                    <span style={{ color:'#38bdf8', letterSpacing:'-0.15em' }}>✓✓</span>
                    <span style={{ color:'#38bdf8' }}>Lido</span>
                  </div>
                </div>
              </div>
              <div className="lm-silence">— 48 horas de silêncio —</div>
            </div>
            <p className="leak-sub">
              O orçamento foi visualizado, o cliente sumiu, e você não sabe como cobrar retorno sem parecer desesperado.
            </p>
          </div>

          {/* Card 2 — O Gelo na Reunião (Meet) */}
          <div className="leak-card fade-up d2">
            <span className="leak-tag">O Gelo na Reunião</span>
            <div className="lm-dark lm-meet">
              <div className="lm-meet-bar">
                <span className="lm-meet-bar-left"><span className="lm-rec-dot" /> Gravando</span>
                <span>Meet · 32:14</span>
              </div>
              <div className="lm-meet-grid">
                <div className="lm-tile lm-tile--active">
                  <div className="lm-avatar" style={{ background: '#71717a' }}>C</div>
                  <span className="lm-tile-mic">🎙️</span>
                  <span className="lm-tile-name">Cliente</span>
                </div>
                <div className="lm-tile">
                  <div className="lm-avatar" style={{ background: '#6d28d9' }}>V</div>
                  <span className="lm-tile-mic">🎙️</span>
                  <span className="lm-tile-name">Você</span>
                </div>
              </div>
              <p className="lm-meet-quote">"Achei ótimo seu trabalho... vou falar com meu sócio/esposa e te aviso."</p>
            </div>
            <p className="leak-sub">
              Apresentação impecável, mas você aceita a primeira desculpa e perde a venda por não saber reagir na hora.
            </p>
          </div>

          {/* Card 3 — O Desconto por Impulso (Chat) */}
          <div className="leak-card fade-up d3">
            <span className="leak-tag">O Desconto por Impulso</span>
            <div className="lm-dark">
              <div className="lm-row lm-row--start">
                <div className="lm-bubble lm-bubble--recv">Qual o valor?</div>
              </div>
              <div className="lm-row lm-row--end" style={{ marginTop: 8 }}>
                <div className="lm-bubble lm-bubble--sent">
                  É R$ 1.500, mas consigo fazer por <span className="lm-highlight">R$ 1.100</span> se fechar hoje 🙏
                </div>
              </div>
            </div>
            <p className="leak-sub">
              Você dá desconto antes mesmo de o cliente pedir. Sai da conversa com menos dinheiro, e com a sensação de que trabalhou mais para ganhar menos.
            </p>
          </div>

        </div>

        <div className="leak-quote-card fade-up">
          <div className="leak-quote-inner">
            <div className="leak-quote-pill">
              <span className="leak-quote-dot" aria-hidden="true" />
              Isso se repete toda semana
            </div>
            <div className="leak-quote-text">
              <p>Você fez o trabalho mais difícil. A reunião aconteceu. O interesse existia. A proposta foi enviada. <span className="leak-quote-hl">Mesmo assim, a conversa morreu...</span> E normalmente não foi porque faltava interesse.</p>
              <p>Toda vez que uma conversa trava, <span className="leak-quote-hl">você perde mais do que dinheiro</span>. Perde o tempo que investiu, a confiança para cobrar o que vale e começa a acreditar que o problema é o seu preço, quando muitas vezes <span className="leak-quote-hl">faltava apenas saber como conduzir a conversa</span>.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
