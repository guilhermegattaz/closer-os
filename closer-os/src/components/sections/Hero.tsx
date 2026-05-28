import { KIWIFY_URL } from '../../data/links'

export function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <h1 className="display hero-headline fade-up d1">
            Saiba exatamente o que dizer<br className="br-desktop" />{' '}
            para <em>fechar mais clientes.</em>
          </h1>

          <p className="body-lg fade-up d2" style={{ marginBottom: 14, maxWidth: 520 }}>
            Para profissionais liberais, freelancers, empreendedores, mentores e autônomos que perdem clientes por não saber o que dizer nos momentos críticos.
          </p>

          <div className="vsl-wrap fade-up d2" role="region" aria-label="Vídeo de apresentação do CloserOS™">
            <div className="vsl-thumb">
              <div className="vsl-play" aria-hidden="true">
                <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="white" /></svg>
              </div>
              <div className="vsl-label">Assista antes de decidir</div>
            </div>
          </div>

          <div className="hero-cta-row fade-up d3">
            <a href={KIWIFY_URL} className="btn-primary large accent-btn" target="_blank" rel="noopener noreferrer">Quero o CloserOS™ — R$47 →</a>
            <a href="#exemplos" className="btn-ghost">Ver funcionando</a>
          </div>

          <div className="hero-trust fade-up d3" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
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
    </section>
  )
}
