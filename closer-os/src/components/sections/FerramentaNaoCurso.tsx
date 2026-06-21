import { useState, useRef } from 'react'

const slides = [
  { src: '/images/mock1.webp', alt: 'Exemplo do CloserOS respondendo no WhatsApp' },
  { src: '/images/mock2.webp', alt: 'Exemplo do CloserOS em conversa de negociação' },
  { src: '/images/mock3.webp', alt: 'Exemplo do CloserOS contornando objeção de preço' },
  { src: '/images/mock4.webp', alt: 'Exemplo do CloserOS reativando cliente em silêncio' },
]

export function FerramentaNaoCurso() {
  const [active, setActive] = useState(0)
  const touchX = useRef<number | null>(null)

  const prev = () => setActive(i => (i - 1 + slides.length) % slides.length)
  const next = () => setActive(i => (i + 1) % slides.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const delta = touchX.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    else if (delta < -40) prev()
    touchX.current = null
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    else if (e.key === 'ArrowRight') { e.preventDefault(); next() }
  }

  return (
    <section id="ferramenta">
      <div className="container">
        <div className="ferra-grid">

          <div className="fade-up">
            <span className="eyebrow">Ferramenta, não curso</span>
            <h2 className="ferra-title">
              O CloserOS™ não é um curso de 40 horas{' '}
              <span className="hl">que vai acumular poeira.</span>
            </h2>
            <p className="ferra-body">
              Cursos exigem esforço e estudo. O CloserOS te dá alívio: uma inteligência comercial de bolso no seu ChatGPT gratuito. Abra o celular, descreva o problema com o cliente naquele minuto e copie a abordagem exata, sem estudar nada, sem decorar script, sem precisar virar outra pessoa.
            </p>
          </div>

          <div className="ferra-phone-wrap fade-up d1">
            <div
              className="ferra-carousel"
              role="region"
              aria-label="Exemplos do CloserOS"
              tabIndex={0}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onKeyDown={handleKeyDown}
            >
              <div
                className="ferra-carousel-track"
                style={{ transform: `translateX(calc(-${active} * 25%))` }}
                aria-live="polite"
              >
                {slides.map((s, i) => (
                  <div key={s.src} className="ferra-carousel-slide" aria-hidden={active !== i}>
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="ferra-carousel-img"
                      width={230}
                      height={468}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding={i === 0 ? 'sync' : 'async'}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="ferra-carousel-dots" role="tablist" aria-label="Navegar entre exemplos">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ver exemplo ${i + 1}`}
                  className={`ferra-carousel-dot${active === i ? ' ferra-carousel-dot--active' : ''}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
