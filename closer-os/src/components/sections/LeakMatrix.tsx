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
                  <div className="lm-meta">10:42 ✓✓ <span className="lm-read">Lido</span></div>
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
                <div className="lm-tile">
                  <div className="lm-avatar" style={{ background: '#5f4339' }}>C</div>
                  <span className="lm-tile-mic">🎙️</span>
                  <span className="lm-tile-name">Cliente</span>
                </div>
                <div className="lm-tile lm-tile--active">
                  <div className="lm-avatar" style={{ background: '#c94f7c' }}>V</div>
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
                <div className="lm-bubble lm-bubble--recv">Quanto custa?</div>
              </div>
              <div className="lm-row lm-row--end" style={{ marginTop: 8 }}>
                <div className="lm-bubble lm-bubble--sent">
                  É R$ 1.500, mas consigo fazer por <span className="lm-highlight">R$ 1.100</span> se fechar hoje 🙏
                </div>
              </div>
            </div>
            <p className="leak-sub">
              Você se desvaloriza e queima sua margem por medo de ouvir um não, antes mesmo de o cliente questionar o preço.
            </p>
          </div>

        </div>

        <div className="leak-quote-card fade-up">
          <div className="leak-quote-inner">
            <div className="leak-quote-pill">
              <span className="leak-quote-dot" aria-hidden="true" />
              A SOMA SILENCIOSA DO PREJUÍZO
            </div>
            <p className="leak-quote-text">
              Nenhum desses momentos parece grave sozinho. O problema é que{' '}
              <span className="leak-quote-hl">eles se repetem toda semana</span>, e cada um é um contrato que era seu e{' '}
              <span className="leak-quote-hl">foi embora em silêncio</span>, sem você nem perceber onde perdeu.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
