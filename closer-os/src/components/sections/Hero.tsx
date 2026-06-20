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
        <span className="hero-micro fade-up">Sistema Operacional de Fechamento</span>

        <h1 className="hero-headline fade-up d1">
          O cliente sumiu no WhatsApp ou você travou na hora de falar o preço?{' '}
          <span className="hl">Saiba exatamente o que dizer para fechar o contrato sem dar desconto e sem diminuir o seu valor.</span>
        </h1>

        <p className="hero-sub fade-up d2">
          O CloserOS™ é um mentor de bolso que roda no seu ChatGPT gratuito. Você descreve a situação real do cliente e ele te dá a fala exata para conduzir a conversa — do primeiro "oi" ao fechamento. Sem estudar vendas, sem parecer chato, sem implorar.
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
            'Roda no ChatGPT Gratuito',
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
