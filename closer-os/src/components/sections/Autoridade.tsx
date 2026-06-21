import { GUILHERME_B64 } from '../../assets/guilherme'
import { KIWIFY_URL } from '../../data/links'

export function Autoridade() {
  return (
    <section id="autoridade">
      <div className="container">
        <div className="autor-grid">

          <div className="fade-up">
            <span className="eyebrow">Quem está por trás</span>
            <div className="autor-profile">
              <div className="autor-avatar-sm">
                <img
                  src={GUILHERME_B64}
                  alt="Guilherme Dias Gattaz"
                />
              </div>
              <div>
                <div className="autor-name">Guilherme Dias Gattaz</div>
                <div className="autor-role">Especialista em vendas consultivas 1:1 · Diretor Comercial de agência nos EUA</div>
              </div>
            </div>

            <div className="autor-bio">
              <p>Ao longo de anos conduzindo vendas consultivas de alto valor, desenvolvi um método próprio para cada situação de negociação, o que perguntar, o que dizer, como conduzir cada etapa de uma conversa com um cliente.</p>
              <p>Aprendi com os maiores especialistas em vendas do mundo, mentores que estão no top 1% do mercado americano — e adaptei tudo isso para a realidade de quem vende serviços no Brasil.</p>
              <p>O CloserOS™ reúne tudo isso em um único lugar. Não é teoria. É o que funciona quando o cliente diz "não é pra mim", "tá caro" ou "vou pensar" — e você precisa saber o que fazer agora.</p>
            </div>

            <a
              href={KIWIFY_URL}
              className="autor-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero aprender o método — R$67"
            >
              Quero aprender o método — R$67 →
            </a>
          </div>

          <div className="fade-up d2">
            <div className="autor-img">
              <img
                src="/images/gui.webp"
                alt="Guilherme Dias Gattaz, especialista em vendas consultivas"
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
              <div className="autor-stat">
                <div className="autor-stat-num">12 anos</div>
                <div className="autor-stat-label">de experiência em negociações</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
