export function Provas() {
  const audioHeights = [10, 14, 18, 12, 20, 16, 10, 18, 14, 10, 16, 12, 18, 14, 10, 16, 12, 18, 14, 10]

  return (
    <section id="provas">
      <div className="container">
        <div className="provas-header fade-up">
          <span className="eyebrow">Resultados reais</span>
          <h2 className="h2">Mensagens reais de quem<br className="br-mobile" /> usa o CloserOS.</h2>
          <p className="provas-disclaimer">Depoimentos reais, compartilhados com permissão. nomes e @ alterados para preservar a privacidade.</p>
        </div>

        <div className="provas-grid">

          {/* ── Card 1: WhatsApp claro — Ana Paula S. ── */}
          <div className="pv-card pv-card--wa-light fade-up">
            <div className="pv-wa-header">
              <div className="pv-avatar" style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)' }}>AP</div>
              <div>
                <div className="pv-wa-name">Ana Paula S.</div>
                <div className="pv-wa-status">visto por último hoje</div>
              </div>
            </div>
            <div className="pv-wa-body">
              <div className="pv-bubble--sent">
                Oiii, deixa eu te contar pq vc não vai acreditar
                <span className="pv-bubble-time">23:44 <span className="pv-ticks">✓✓</span></span>
              </div>
              <div className="pv-bubble--sent">
                lembra q eu vivia reclamando q mandava orçamento e a pessoa sumia? eu nunca sabia se cobrava ou se parecia desesperada kkkk
                <span className="pv-bubble-time">23:45 <span className="pv-ticks">✓✓</span></span>
              </div>
              <div className="pv-bubble--sent">
                comecei a usar o closeros pra saber oq mandar nessas horas. ainda tem gente q some. mas essa semana 2 q tinham sumido voltaram e fecharam!!! 🙈
                <span className="pv-bubble-time">23:47 <span className="pv-ticks">✓✓</span> <span className="pv-wa-lido">Lido</span></span>
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
                Lembra q eu te falei q sempre ficava perdido quando o cliente falava q tava caro?
              </div>
              <div className="pv-bubble--ig-sent">
                ontem aconteceu de novo, mas dessa vez eu não saí dando desconto na hora igual idiota... respondi com uma pergunta q o Closeros tinha me dado e o cara meio q se começou a se justificar sozinhooo
              </div>
              <div className="pv-bubble--ig-sent">
                e fechou no valor normal, acredita? ainda to meio em choque pra falar a real...
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
                fer 🌱 <span className="pv-x-handle">@ferd.mentora</span> · 2d
              </div>
            </div>
            <p className="pv-x-text">
              vou ser honesta q quando vi "ferramenta que te ajuda a vender" eu revirei o olho. Achei que era mais uma ferramenta genérica dessas que vc paga barato e não funciona. Comprei com o pé atrás (era barato). A verdade é que não é mágico, é além disso! O que ela faz é te fazer perguntas que vc devia ter feito sozinha mas não faz pq ta nervosa na hora. Usei em 3 conversas essa semana, 2 deram certo. Isso mudou meu jogo demais.
            </p>
            <div className="pv-x-time">21:05 · 18 jun</div>
            <div className="pv-x-metrics">
              <span className="pv-x-metric">💬 6</span>
              <span className="pv-x-metric">🔁 9</span>
              <span className="pv-x-metric">❤ 73</span>
              <span className="pv-x-metric">📊 1.847</span>
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
                  amiga, isso q ela falou no post é exatamente eu. o q mais me travava era quando a cliente dizia "a outra especialista é mais barata". eu já ficava sem graça e às vezes baixava o preço antes mesmo dela pedir. Não curto vender, eu ainda fico nervosa. Mas aprendi a perguntar oq tava por trás em vez de me diminuir na hora. Ainda to testando mas já é diferente, consegui vender um tratamento completo essa semana.
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
              <span className="pv-email-bar-time">07:12</span>
            </div>
            <div className="pv-email-body">
              <div className="pv-email-subject">obrigada (e um desabafo)</div>
              <div className="pv-email-from">Mari Uchôa · ...@gmail.com · para: oi@closeros.app</div>
              <p className="pv-email-text">
                Oi. Respondendo a pergunta sobre minha experiência com o CloserOS, eu tenho um conflito enorme com a ideia de "vender" terapia, sempre achei um pouco anti-ético. Aí as pessoas falavam "vou pensar" e sumiam e eu nem entendia o porquê, ficava remoendo. Confesso que comprei cética achando que seria papo de coach. Não era. Me ajudou a entender o que dizer quando a pessoa fica em cima do muro, sem soar como pressão ou forçada. Me sinto segura e muito mais confiante nessas horas. Obrigada mesmo.
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
                Gente, lembra que comentei sobre a consulta importante que eu disse que tava nervoso pra caramba?
                <span className="pv-bubble-time pv-bubble-time--dark">22:54 <span className="pv-ticks pv-ticks--dark">✓✓</span></span>
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
                Então, na noite anterior eu joguei a situação na ferramenta pra me ajudar a planejar o que falar se a pessoa enrolasse pra começar. Não decorei nada rsrs só fui mais preparado. O paciente veio com o papo de começar mês que vem e dessa vez eu soube perguntar o que tava impedindo agora. Ele se convenceu e decidiu começar! Ainda não acredito hahaha
                <span className="pv-bubble-time pv-bubble-time--dark">23:02 <span className="pv-ticks pv-ticks--dark">✓✓</span></span>
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
