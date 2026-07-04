import { GUILHERME_B64 } from '../../assets/guilherme'
import { KIWIFY_URL } from '../../data/links'

export function Autoridade() {
  return (
    <section id="autoridade">
      <div className="container">
        <div className="autor-grid">

          <div className="fade-up">
            <h2 className="h2 autor-headline">O CloserOS nasceu depois de <span className="text-gradient">milhares de conversas</span> exatamente como essas.</h2>
            <div className="autor-bio">
              <p>Ao longo de anos conduzindo vendas consultivas, percebi um padrão: a maioria das vendas não era perdida porque o cliente não queria comprar.</p>
              <p>Era perdida porque o profissional não sabia exatamente o que responder quando a conversa mudava de direção.</p>
              <p>Depois de mais de R$ 9 milhões em vendas consultivas conduzidas pessoalmente, transformei o que realmente funciona nessas conversas no CloserOS™.</p>
              <p>Uma ferramenta simples para ajudar você exatamente quando a conversa trava.</p>
            </div>

            <a
              href={KIWIFY_URL}
              className="autor-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero parar de improvisar · R$67"
            >
              Quero parar de improvisar · R$67
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
