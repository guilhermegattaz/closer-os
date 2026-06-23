export function Provas() {
  const audioHeights = [10, 14, 18, 12, 20, 16, 10, 18, 14, 10, 16, 12, 18, 14, 10, 16, 12, 18, 14, 10]

  return (
    <section id="provas">
      <div className="container">
        <div className="provas-header fade-up">
          <span className="eyebrow">Prova social</span>
          <h2 className="h2">Mensagens reais de quem<br className="br-mobile" /> usa o CloserOS.</h2>
        </div>

        <div className="provas-grid">

          {/* ── Card 1: WhatsApp claro — Ana Paula S. ── */}
          <div className="pv-card pv-card--wa-light fade-up">
            <div className="pv-wa-header">
              <div className="pv-avatar" style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)' }}>AP</div>
              <div>
                <div className="pv-wa-name">Ana Paula S.</div>
                <div className="pv-wa-status">online</div>
              </div>
            </div>
            <div className="pv-wa-body">
              <div className="pv-bubble--sent">
                Eu sempre travava na hora de cobrar. Com o CloserOS, aprendi como conduzir e o melhor jeito de falar sobre o preço...
                <span className="pv-bubble-time">09:14 <span className="pv-ticks">✓✓</span></span>
              </div>
              <div className="pv-bubble--sent">
                Fechei 3 clientes novos na mesma semana! 🎉
                <span className="pv-bubble-time">09:15 <span className="pv-ticks">✓✓</span> <span className="pv-wa-lido">Lido</span></span>
              </div>
            </div>
            <div className="pv-footer">
              <span>Ana Paula S.</span>
              <span className="pv-footer-sep">·</span>
              <span>Social Media</span>
              <span className="pv-footer-sep">·</span>
              <span className="pv-platform">WhatsApp</span>
            </div>
          </div>

          {/* ── Card 2: Instagram Direct — Rodrigo M. ── */}
          <div className="pv-card pv-card--ig-dm fade-up d1">
            <div className="pv-ig-dm-header">
              <span className="pv-back-btn" aria-hidden="true">‹</span>
              <div className="pv-avatar" style={{ background: 'linear-gradient(135deg,#f77737,#c13584)' }}>RM</div>
              <div>
                <div className="pv-ig-handle">rodrigo.makesales</div>
                <div className="pv-ig-active">Ativo agora</div>
              </div>
            </div>
            <div className="pv-ig-dm-body">
              <div className="pv-bubble--ig-sent">
                O cliente disse "tá caro" e eu sabia exatamente o que responder.
              </div>
              <div className="pv-bubble--ig-sent">
                Fechei o contrato no valor cheio, sem desconto. 💜
              </div>
              <div className="pv-ig-seen">Visto há 2 min</div>
            </div>
            <div className="pv-footer">
              <span>Rodrigo M.</span>
              <span className="pv-footer-sep">·</span>
              <span>Agência de Marketing</span>
              <span className="pv-footer-sep">·</span>
              <span className="pv-platform">Direct · Instagram</span>
            </div>
          </div>

          {/* ── Card 3: Post no X — Fernanda L. ── */}
          <div className="pv-card pv-card--x fade-up d2">
            <div className="pv-x-header">
              <div className="pv-avatar" style={{ background: 'linear-gradient(135deg,#10b981,#0d9488)' }}>FL</div>
              <div className="pv-x-name-row">
                fer 🌱 <span className="pv-x-handle">@fer.mentora</span> · 2d
              </div>
            </div>
            <p className="pv-x-text">
              Nunca imaginei que algumas perguntas certas poderiam mudar tanto uma negociação. O CloserOS me mostrou exatamente o que dizer em cada etapa. Me senti confiante pela primeira vez vendendo minha mentoria.
            </p>
            <div className="pv-x-time">10:23 · 18 jun</div>
            <div className="pv-x-metrics">
              <span className="pv-x-metric">💬 4</span>
              <span className="pv-x-metric">🔁 11</span>
              <span className="pv-x-metric">❤ 89</span>
              <span className="pv-x-metric">📊 2.341</span>
            </div>
            <div className="pv-footer">
              <span>Fernanda L.</span>
              <span className="pv-footer-sep">·</span>
              <span>Mentora de Negócios</span>
              <span className="pv-footer-sep">·</span>
              <span className="pv-platform">Post no X</span>
            </div>
          </div>

          {/* ── Card 4: Post do Instagram — Thaís Oliveira ── */}
          <div className="pv-card pv-card--ig-post fade-up">
            <div className="pv-ig-post-img" aria-hidden="true">
              <span>POST · CLOSEROS</span>
            </div>
            <div className="pv-ig-post-bar" aria-hidden="true">
              <span>♡</span>
              <span>💬</span>
              <span>↗</span>
              <span className="pv-ig-post-save">🔖</span>
            </div>
            <div className="pv-ig-likes">412 curtidas</div>
            <div className="pv-ig-comment-wrap">
              <div className="pv-avatar pv-avatar--sm" style={{ background: 'linear-gradient(135deg,#f77737,#833ab4)', flexShrink: 0 }}>TO</div>
              <div>
                <span className="pv-ig-commenter">thais.estetica </span>
                <span className="pv-ig-comment-text">
                  Gente, o que mais me cansava era quando a cliente falava "no outro lugar é mais barato". Aprendi a responder com uma pergunta em vez de me defender. Testei e deu super certo! 🙌
                </span>
                <div className="pv-ig-comment-meta">2 d · 34 curtidas · Responder</div>
              </div>
            </div>
            <div className="pv-footer">
              <span>Thaís Oliveira</span>
              <span className="pv-footer-sep">·</span>
              <span>Empresária de Estética</span>
              <span className="pv-footer-sep">·</span>
              <span className="pv-platform">Comentário · Instagram</span>
            </div>
          </div>

          {/* ── Card 5: E-mail — Mari Uchôa ── */}
          <div className="pv-card pv-card--email fade-up d1">
            <div className="pv-email-bar">
              <div className="pv-email-dots" aria-hidden="true">
                <span className="pv-email-dot" style={{ background: '#ff5f57' }} />
                <span className="pv-email-dot" style={{ background: '#febc2e' }} />
                <span className="pv-email-dot" style={{ background: '#28c840' }} />
              </div>
              <span className="pv-email-bar-title">Caixa de entrada</span>
              <span className="pv-email-bar-time">14:08</span>
            </div>
            <div className="pv-email-body">
              <div className="pv-email-subject">só queria agradecer</div>
              <div className="pv-email-from">Mari Uchôa · ...@gmail.com · para: oi@closeros.app</div>
              <p className="pv-email-text">
                Tenho um conflito enorme com essa ideia de "vender" atendimento psicológico. Mas fui no CloserOS sem expectativa e fiquei surpresa: as orientações não pareciam técnica de vendas. Pareciam como conduzir uma conversa natural. Mudei a triagem e lotei a agenda.
              </p>
            </div>
            <div className="pv-footer">
              <span>Mari Uchôa</span>
              <span className="pv-footer-sep">·</span>
              <span className="pv-platform">Psicóloga</span>
            </div>
          </div>

          {/* ── Card 6: WhatsApp escuro — Anderson Lima ── */}
          <div className="pv-card pv-card--wa-dark fade-up d2">
            <div className="pv-wa-header pv-wa-header--dark">
              <span className="pv-back-btn--dark" aria-hidden="true">‹</span>
              <div className="pv-avatar" style={{ background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' }}>AL</div>
              <div>
                <div className="pv-wa-name pv-wa-name--dark">Anderson Lima 🥑</div>
                <div className="pv-wa-status pv-wa-status--dark">digitando…</div>
              </div>
            </div>
            <div className="pv-wa-body pv-wa-body--dark">
              <div className="pv-bubble--wa-dark-r">
                Não sabia o que responder sem parecer desesperado quando alguém queria deixar para o próximo mês...
                <span className="pv-bubble-time pv-bubble-time--dark">22:38 <span className="pv-ticks pv-ticks--dark">✓✓</span></span>
              </div>
              <div className="pv-audio-bubble">
                <div className="pv-audio-play-btn" aria-label="Mensagem de áudio">▶</div>
                <div className="pv-audio-waveform" aria-hidden="true">
                  {audioHeights.map((h, i) => (
                    <div key={i} className="pv-audio-bar" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <span className="pv-audio-duration">0:47</span>
              </div>
              <div className="pv-bubble--wa-dark-r">
                Consegui mais um paciente novo! A pergunta que o CloserOS me deu não era pressão — era a certa. 🙌
                <span className="pv-bubble-time pv-bubble-time--dark">22:41 <span className="pv-ticks pv-ticks--dark">✓✓</span></span>
              </div>
            </div>
            <div className="pv-footer pv-footer--dark">
              <span>Anderson Lima</span>
              <span className="pv-footer-sep">·</span>
              <span className="pv-platform">Nutricionista</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
