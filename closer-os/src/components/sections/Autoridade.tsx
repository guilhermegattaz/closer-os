import { GUILHERME_B64 } from '../../assets/guilherme'

export function Autoridade() {
  return (
    <section id="autoridade">
      <div className="container">
        <div className="autor-grid">
          <div className="fade-up">
            <div className="section-eyebrow left" style={{ marginBottom: 28 }}>Quem está por trás</div>
            <div className="autor-profile">
              <div className="autor-avatar" aria-label="Foto de Guilherme Dias Gattaz" style={{ background: 'none', padding: 0, overflow: 'hidden' }}>
                <img
                  src={GUILHERME_B64}
                  alt="Guilherme Dias Gattaz, especialista em vendas consultivas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <div className="autor-profile-info">
                <div className="autor-name">Guilherme Dias Gattaz</div>
                <div className="autor-role">Especialista em vendas consultivas 1:1</div>
              </div>
            </div>
            <div className="autor-bio">
              <p>Ao longo de anos conduzindo vendas consultivas de alto valor, desenvolvi um método próprio para cada situação de negociação — o que perguntar, o que dizer, como conduzir cada etapa de uma conversa com um cliente.</p>
              <p>Aprendi com os maiores especialistas em vendas do mundo — mentores que estão no top 1% do mercado americano — e adaptei tudo isso para a realidade de quem vende serviços no Brasil.</p>
              <p>O CloserOS™ reúne tudo isso em um único lugar. Não é teoria. É o que funciona quando o cliente diz "não é pra mim", "tá caro" ou "vou pensar" — e você precisa saber o que fazer agora.</p>
            </div>
          </div>
          <div className="autor-img-col fade-up d2">
            <div className="autor-img-placeholder">
              <img
                src="/images/gui.webp"
                alt="Guilherme Dias Gattaz, especialista em vendas consultivas"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
            <div className="autor-stats-bar">
              <div className="autor-stat">
                <div className="autor-stat-num">R$9M+</div>
                <div className="autor-stat-label">em vendas consultivas 1:1</div>
              </div>
              <div className="autor-stat">
                <div className="autor-stat-num">Top 1%</div>
                <div className="autor-stat-label">mentores de vendas · EUA</div>
              </div>
              <div className="autor-stat-quote">
                <p>"Quanto valeria fechar +80% de todos os clientes com quem conversa?"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
