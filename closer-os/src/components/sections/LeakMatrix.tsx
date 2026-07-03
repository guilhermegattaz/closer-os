export function LeakMatrix() {
  return (
    <section id="leak">
      <div className="container">
        <div className="leak-header fade-up">
          <span className="eyebrow">O diagnóstico</span>
          <h2 className="h2">A maioria das vendas não morre no preço. <span className="hl-wrap">Morre na resposta errada.</span></h2>
        </div>

        {/* Abertura: subtítulo + 1º parágrafo — antes dos cards */}
        <div className="leak-quote-card leak-quote-card--intro fade-up d1">
          <div className="leak-quote-inner">
            <p className="leak-sub">Você perde clientes porque chega um momento da conversa em que não sabe exatamente o que responder. E isso se repete toda semana.</p>
          </div>
        </div>

        <div className="leak-grid">

          {/* Card 1 — Não tem padrão (primeiro contato) */}
          <div className="leak-card fade-up d1">
            <span className="leak-tag">Não tem padrão</span>
            <div className="lm-dark">
              <div className="lm-row lm-row--start">
                <div className="lm-bubble lm-bubble--recv">Bom dia! Como funciona? 😊</div>
              </div>
              <div className="lm-silence">você escreve, apaga, escreve, apaga…</div>
            </div>
            <p className="leak-sub">
              O cliente chega interessado, e você trava no que responder. Sem clareza nem confiança para conduzir, a conversa esfria antes de começar.
            </p>
          </div>

          {/* Card 2 — Tudo parecia certo (WhatsApp) */}
          <div className="leak-card fade-up d2">
            <span className="leak-tag">Tudo parecia certo</span>
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
              <div className="lm-silence">48 horas de silêncio</div>
            </div>
            <p className="leak-sub">
              O orçamento foi visualizado, o cliente sumiu, e você não sabe como cobrar retorno sem parecer desesperado.
            </p>
          </div>

          {/* Card 3 — O silêncio na reunião (Meet) */}
          <div className="leak-card fade-up d3">
            <span className="leak-tag">O silêncio na reunião</span>
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

          {/* Card 4 — O Desconto por Impulso (Chat) */}
          <div className="leak-card fade-up d4">
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

        {/* Fechamento: 2º parágrafo — depois dos cards */}
        <div className="leak-quote-card leak-quote-card--close fade-up">
          <div className="leak-quote-inner">
            <div className="leak-quote-text">
              <p>Esses momentos parecem pequenos. Mas é justamente neles que a maioria das vendas acontece… ou deixa de acontecer.</p>
            </div>
          </div>
        </div>

        {/* Frase de transição */}
        <div className="leak-transition fade-up">
          <p>E o pior é que, quase sempre, o problema não está na sua proposta.</p>
          <p className="leak-transition-sub">Está na resposta que veio alguns minutos antes.</p>
        </div>

      </div>
    </section>
  )
}
