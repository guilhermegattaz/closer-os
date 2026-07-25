export function Hero() {
  return (
    <section id="hero">
      <div className="hero-center">
        <div className="hero-text-top">
          {/* ROLLBACK: headline anterior
            Saiba exatamente o que dizer quando o cliente falar <span className="hl">&ldquo;vou pensar&rdquo;</span>, <span className="hl">&ldquo;tá caro&rdquo;</span> ou simplesmente <span className="hl">sumir depois da proposta</span>.
          */}
          <h1 className="hero-headline fade-up d1">
            Chega de perder clientes porque você <span className="hl text-gradient">não sabe o que responder</span>.
          </h1>

          <p className="hero-sub fade-up d2">
            Quando um cliente diz &ldquo;está caro&rdquo;, &ldquo;vou pensar&rdquo;, pede desconto ou simplesmente para de responder, <strong>você não precisa mais improvisar</strong>. Descreva o que aconteceu e receba exatamente o que dizer.
          </p>
        </div>

        <div className="fade-up d2 hero-vsl-col">
          <div className="vsl-wrap">
            <div className="vsl-ratio">
              <iframe
                className="vsl-iframe"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JcKtW9vZTKQ?si=GVaPSKmDDcsSDKEX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
