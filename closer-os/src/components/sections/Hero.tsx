import { KIWIFY_URL } from '../../data/links'

export function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">

          <div className="hero-text">
            {/* VARIANTE A (ativa) */}
            <h1 className="display hero-headline fade-up d1">
              Saiba exatamente o que dizer para{' '}
              <em>fechar mais clientes</em> — sem dar desconto e sem diminuir o seu valor.
            </h1>
            {/* VARIANTE B (teste A/B) — para ativar: troque pelos dois blocos acima
            <h1 className="display hero-headline fade-up d1">
              Pare de perder clientes por não saber o que dizer na hora de <em>fechar.</em>
            </h1>
            */}
            <p className="body-lg fade-up d2" style={{ marginBottom: 14, maxWidth: 520 }}>
              Quando o cliente diz "tá caro", "vou pensar" ou "preciso falar com meu marido" — você tem a resposta certa na hora. Sem improvisar, sem travar, sem ver a venda sumir.
            </p>
          </div>

          <div className="hero-right">
            <div className="vsl-wrap vsl-video fade-up d2" role="region" aria-label="Vídeo de apresentação do CloserOS™">
              <div className="vsl-embed">
                <iframe
                  src="https://www.youtube.com/embed/S_esS7a8FUY?rel=0&modestbranding=1"
                  title="CloserOS VSL"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="hero-cta-block">
            <div className="hero-cta-row fade-up d3">
              <a href={KIWIFY_URL} className="btn-primary large accent-btn" target="_blank" rel="noopener noreferrer">Quero o CloserOS™ — R$47 →</a>
            </div>
            <div className="hero-trust fade-up d3">
              {['Funciona no ChatGPT gratuito', 'Sem mensalidade', 'Garantia incondicional de 7 dias'].map((text) => (
                <div key={text} className="trust-item">
                  <div className="check">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--green)" strokeWidth="2">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
