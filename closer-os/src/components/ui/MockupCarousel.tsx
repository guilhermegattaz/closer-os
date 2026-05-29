import { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

const MOCKUPS = [
  '/images/mockups/1.png',
  '/images/mockups/2.png',
  '/images/mockups/3.png',
  '/images/mockups/4.png',
]

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <img
        src={src}
        className="lightbox-img"
        draggable={false}
        onClick={e => e.stopPropagation()}
      />
      <button className="lightbox-close" onClick={onClose} aria-label="Fechar">✕</button>
    </div>,
    document.body
  )
}

function ClickPhone({ src, index }: { src: string; index: number }) {
  const [lightbox, setLightbox] = useState(false)

  return (
    <>
      <div
        className="mockup-phone"
        onClick={() => setLightbox(true)}
        style={{ cursor: 'zoom-in' }}
      >
        <img
          src={src}
          alt={`CloserOS™ — tela ${index + 1}`}
          draggable={false}
        />
      </div>
      {lightbox && <Lightbox src={src} onClose={() => setLightbox(false)} />}
    </>
  )
}

export function MockupCarousel() {
  const [scrollActive, setScrollActive] = useState(0)
  const mobileRef = useRef<HTMLDivElement>(null)

  const onScroll = useCallback(() => {
    const track = mobileRef.current
    if (!track) return
    const children = Array.from(track.children) as HTMLElement[]
    const center = track.getBoundingClientRect().left + track.offsetWidth / 2
    let best = 0, bestDist = Infinity
    children.forEach((el, i) => {
      const r = el.getBoundingClientRect()
      const d = Math.abs(r.left + r.width / 2 - center)
      if (d < bestDist) { bestDist = d; best = i }
    })
    setScrollActive(best)
  }, [])

  useEffect(() => {
    const track = mobileRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <div className="mockup-wrap">
      {/* Desktop */}
      <div className="mockup-row-desktop">
        {MOCKUPS.map((src, i) => (
          <ClickPhone key={i} src={src} index={i} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="mockup-row-mobile" ref={mobileRef}>
        {MOCKUPS.map((src, i) => (
          <div key={i} className={`mockup-phone${i === scrollActive ? ' active' : ''}`}>
            <img
              src={src}
              alt={`CloserOS™ — tela ${i + 1}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Indicador de posição */}
      <div className="mockup-dots" aria-hidden="true">
        {MOCKUPS.map((_, i) => (
          <span key={i} className={`mockup-dot${i === scrollActive ? ' on' : ''}`} />
        ))}
      </div>
    </div>
  )
}
