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
              <p>Depois de milhares de conversas e mais de R$9 milhões em vendas conduzidas pessoalmente, transformei tudo o que funcionava nessas situações em uma ferramenta simples.</p>
              <p>O CloserOS™ nasceu para resolver exatamente esse problema. Você descreve a situação. Ele entende o contexto. E te mostra exatamente o que dizer para conduzir a conversa com mais confiança.</p>
              <p>Não é teoria. Não é resposta genérica da internet. É o que realmente funciona quando uma conversa trava e você precisa agir agora.</p>
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
                <div className="autor-stat-num">R$9M+</div>
                <div className="autor-stat-label">em vendas consultivas 1:1</div>
              </div>
              <div className="autor-stat">
                <div className="autor-stat-num">Diretor Comercial</div>
                <div className="autor-stat-label">de agência nos EUA</div>
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
