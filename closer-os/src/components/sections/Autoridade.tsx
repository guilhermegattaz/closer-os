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
              <p>Ao longo de anos conduzindo vendas consultivas de alto valor, percebi uma coisa curiosa: a maioria das negociações não era perdida por causa do preço.</p>
              <p>Era perdida porque a pessoa simplesmente não sabia o que dizer quando ouvia &ldquo;tá caro&rdquo;, &ldquo;vou pensar&rdquo; ou &ldquo;preciso conversar com meu marido&rdquo;.</p>
              <p>Depois de mais de R$9 milhões em vendas conduzidas pessoalmente, transformei o que realmente funciona nessas situações no CloserOS™: uma ferramenta simples que mostra exatamente o que dizer quando uma conversa trava.</p>
              <p>Não é teoria. É o que funciona no mundo real.</p>
            </div>

            <a
              href={KIWIFY_URL}
              className="autor-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero acessar agora — R$67"
            >
              Quero acessar agora — R$67 →
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
                <div className="autor-stat-num">Diretor Comercial</div>
                <div className="autor-stat-label">de agência nos EUA</div>
              </div>
              <div className="autor-stat">
                <div className="autor-stat-num">R$9M+</div>
                <div className="autor-stat-label">em vendas consultivas 1:1</div>
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
