export function Provas() {
  const audioHeights = [10, 14, 18, 12, 20, 16, 10, 18, 14, 10, 16, 12, 18, 14, 10, 16, 12, 18, 14, 10]

  return (
    <section id="provas">
      <div className="container">
        <div className="provas-header fade-up">
          <span className="eyebrow">Resultados reais</span>
          <h2 className="h2">Quem começa a usar o CloserOS percebe a diferença na <span className="text-gradient">primeira conversa importante.</span></h2>
          <p className="provas-disclaimer">Mensagens reais, compartilhadas com permissão. Nomes e @ alterados para preservar a privacidade.</p>
        </div>

        <div className="provas-carousel-wrap">
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
                oii deixa eu te contar uma coisa pq ainda to processando
                <span className="pv-bubble-time">23:44 <span className="pv-ticks">✓✓</span></span>
              </div>
              <div className="pv-bubble--sent">
                lembra q eu vivia reclamando q mandava orçamento e a pessoa sumia? eu nunca sabia se cobrava de novo ou se ia parecer desesperada kkkk
                <span className="pv-bubble-time">23:45 <span className="pv-ticks">✓✓</span></span>
              </div>
              <div className="pv-bubble--sent">
                comecei a usar o Closeros só pra saber oq mandar nessas horas e teve uma cliente q tinha sumido faz uns dias, mandei do jeito q ele sugeriu e ela respondeu na hora 🙈 fechou ontem
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

          {/* ── Card 2: Instagram Direct — Gabi Freire ── */}
          <div className="pv-card pv-card--ig-dm fade-up d1">
            <div className="pv-ig-dm-header">
              <span className="pv-back-btn" aria-hidden="true">‹</span>
              <div className="pv-avatar" style={{ background: 'linear-gradient(135deg,#f77737,#c13584)' }}>GF</div>
              <div>
                <div className="pv-ig-handle">gabi.freiredesign</div>
                <div className="pv-ig-active">Ativo agora</div>
              </div>
            </div>
            <div className="pv-ig-dm-body">
              <div className="pv-bubble--ig-sent">
                Mano lembra q eu sempre ficava nervosa qnd o cliente falava q tava caro? N sabia mto bem oq fazer.....
              </div>
              <div className="pv-bubble--ig-sent">
                Ontem rolou de novo!!! Só q dessa vez eu não saí dando desconto na hora igual eu sempre fazia. Respondi com uma pergunta q a ferramenta tinha me dado e o cara meio q foi se justificando sozinho
              </div>
              <div className="pv-bubble--ig-sent">
                ele acabou contratando sem eu baixar nada!!! Ainda to meio sem acreditar pra ser sincera, serio
              </div>
              <div className="pv-ig-seen">Visto há 2 min</div>
            </div>
            <div className="pv-footer">
              <span>Gabi Freire</span>
              <span className="pv-footer-sep">·</span>
              <span>Designer</span>
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
              vou ser bem honesta: qnd vi "ferramenta q te ajuda a vender" eu revirei o olho. achei q era mais um prompt genérico desses q vc acha de graça por aí. comprei meio sem fé pq era barato. n é nenhuma magica, oq ele faz é te lembrar das perguntas q vc devia fazer mas n faz pq ta nervosa na hora. usei em 3 conversas essa semana. ainda n fechei nenhuma, mas pela primeira vez eu n travei e n saí me justificando. já valeu
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
                  Amiga isso q ela falou é EXATAMENTE eu. Oq mais me travava era qnd a cliente dizia "na outra especialista é mais barato". Eu já ficava sem graça e às vezes baixava o preço antes dela nem pedir. Não queria perder, né. Mas a verdade é que eu n sabia oq fazer. Claro q ainda fico nervosa mas aprendi a perguntar oq tava por trás pra entender a cliente em vez de me diminuir. Semana passada uma falou isso e em vez de dar desconto eu perguntei e ela acabou fechando o tratamento completo
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

          {/* ── Card 5: E-mail — Dra. Diana Mendes ── */}
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
              <div className="pv-email-subject">obrigada (e um pequeno desabafo)</div>
              <div className="pv-email-from">Dra. Diana Mendes · ...@gmail.com · para: oi@closeros.app</div>
              <p className="pv-email-text">
                Oi. Nem sei se vocês leem esses e-mails, mas precisava escrever. Eu sempre tive um conflito enorme com a ideia de "vender" terapia, achava quase antiético. Aí as pessoas diziam "vou pensar" e sumiam, e eu ficava remoendo sem entender o porquê. Confesso que comprei cética, achando que ia ser papo de coach. Não foi. Me ajudou a saber o que dizer quando a pessoa fica em cima do muro, sem soar como pressão. Ainda perco gente, mas tenho me sentido mais tranquila nessas horas. Obrigada de verdade.
              </p>
            </div>
            <div className="pv-footer">
              <span>Dra. Diana Mendes</span>
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
                Cara, passando aqui pra te contar, lembra aquela consulta importante que eu te falei que eu tava nervoso pra caramba?
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
                Então, na noite anterior eu joguei a situação no CloserOS pra pensar o que falar se a paciente enrolasse pra começar. Não decorei nada rsrs só fui mais preparado, consegui preparar um roteirinho. Ela veio com o "mês que vem eu começo" e em vez de aceitar eu soube perguntar o que tava impedindo ela agora. Nunca tinha feito isso.. Acabou marcando a primeira consulta pra semana que vem. Fiquei feliz demais
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
          <div className="provas-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        <div className="provas-swipe-dots" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="provas-swipe-dots provas-swipe-dots--desktop" aria-hidden="true">
          <span className="dot-active"></span><span></span><span></span>
        </div>
        <p className="provas-drag-hint" aria-hidden="true">arraste para ver mais</p>

      </div>
    </section>
  )
}
