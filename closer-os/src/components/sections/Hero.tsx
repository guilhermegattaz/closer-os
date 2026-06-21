import { useState, Fragment } from 'react'
import { KIWIFY_URL } from '../../data/links'

function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const vid = 'S_esS7a8FUY'

  return (
    <div className="vsl-ratio">
      {playing ? (
        <iframe
          className="vsl-iframe"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1`}
          title="CloserOS™ — Apresentação"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      ) : (
        <div className="vsl-thumb" onClick={() => setPlaying(true)} role="button" aria-label="Reproduzir vídeo de apresentação do CloserOS™">
          <img
            src={`https://img.youtube.com/vi/${vid}/maxresdefault.jpg`}
            alt="Prévia do vídeo CloserOS™"
            loading="eager"
          />
          <div className="vsl-play">
            <div className="vsl-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-center">
        <span className="hero-micro fade-up">Pare de ficar sem resposta</span>

        <h1 className="hero-headline fade-up d1">
          Saiba exatamente o que dizer quando o cliente disser{' '}
          <span className="hl">&ldquo;tá caro&rdquo;, falar que vai pensar ou simplesmente sumir.</span>
        </h1>

        <p className="hero-sub fade-up d2">
          Descreva a situação real da conversa e o CloserOS™ te mostra, em segundos, exatamente o que responder para conduzir o cliente até o fechamento. Sem estudar vendas. Sem improvisar. Sem forçar.
        </p>

        <p className="vsl-anchor fade-up d2">
          <span className="vsl-anchor-arrow" aria-hidden="true">▼</span>
          Aperte o play e veja, em 2 minutos, uma conversa travada sendo resolvida na prática.
        </p>

        <div className="vsl-wrap fade-up d2">
          <VideoPlayer />
        </div>

        <div className="hero-cta-wrap fade-up d3">
          <a
            href={KIWIFY_URL}
            className="hero-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero o CloserOS agora — R$67"
          >
            QUERO O CLOSEROS AGORA
          </a>
          <p className="hero-subtexto">Acesso Imediato · Pagamento Único de R$67 · Sem Mensalidades</p>
        </div>

        <div className="trust-bar fade-up d3">
          {[
            'Sem instalar nada',
            'Scripts em Segundos',
            'Garantia de 7 Dias',
          ].map((item, i) => (
            <Fragment key={item}>
              {i > 0 && <span className="trust-sep" aria-hidden="true" />}
              <div className="trust-item">
                <span className="trust-check" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                </span>
                {item}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
