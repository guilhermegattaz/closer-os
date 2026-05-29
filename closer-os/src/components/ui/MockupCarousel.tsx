import { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

const MOCKUPS = [
  '/images/mockups/1.png',
  '/images/mockups/2.png',
  '/images/mockups/3.png',
  '/images/mockups/4.png',
]

const RING = 80        // ring indicator on image (px)
const ZOOM = 2.016      // magnification in the panel
const PANEL_W = 501
const PANEL_H = 842

interface Lens {
  imgX: number
  imgY: number
  imgW: number
  imgH: number
  screenX: number
  screenY: number
}

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

function MagnifyPhone({ src, index }: { src: string; index: number }) {
  const [lens, setLens] = useState<Lens | null>(null)
  const [lightbox, setLightbox] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const capture = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const img = el.querySelector('img') as HTMLImageElement | null
    setLens({
      imgX: clientX - r.left,
      imgY: clientY - r.top,
      imgW: img?.offsetWidth ?? r.width,
      imgH: img?.offsetHeight ?? r.height,
      screenX: clientX,
      screenY: clientY,
    })
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    capture(e.clientX, e.clientY)
  }, [capture])

  const clear = useCallback(() => setLens(null), [])

  const bgX = lens ? PANEL_W / 2 - lens.imgX * ZOOM : 0
  const bgY = lens ? PANEL_H / 2 - lens.imgY * ZOOM : 0
  const bgW = lens ? lens.imgW * ZOOM : 0

  let panelLeft = 0, panelTop = 0
  if (lens) {
    panelLeft = lens.screenX + 56
    if (panelLeft + PANEL_W > window.innerWidth - 16)
      panelLeft = lens.screenX - 56 - PANEL_W
    panelTop = Math.max(16, Math.min(
      window.innerHeight - PANEL_H - 16,
      lens.screenY - PANEL_H / 2
    ))
  }

  const ringX = lens ? lens.imgX - RING / 2 : 0
  const ringY = lens ? lens.imgY - RING / 2 : 0

  return (
    <>
      <div
        ref={containerRef}
        className="mockup-phone"
        onMouseMove={onMouseMove}
        onMouseLeave={clear}
        onClick={() => setLightbox(true)}
        style={{ cursor: lens ? 'zoom-in' : 'zoom-in' }}
      >
        <img
          src={src}
          alt={`CloserOS™ — tela ${index + 1}`}
          draggable={false}
        />
        {lens && (
          <div
            className="mockup-ring"
            style={{ left: ringX, top: ringY }}
          />
        )}
      </div>

      {lens && createPortal(
        <div
          className="mockup-panel"
          style={{
            left: panelLeft,
            top: panelTop,
            backgroundImage: `url(${src})`,
            backgroundSize: `${bgW}px auto`,
            backgroundPosition: `${bgX}px ${bgY}px`,
          }}
        />,
        document.body
      )}

      {lightbox && <Lightbox src={src} onClose={() => setLightbox(false)} />}
    </>
  )
}

export function MockupCarousel() {
  const [scrollActive, setScrollActive] = useState(0)
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = mobileRef.current
    if (!track) return
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[]
      const center = track.getBoundingClientRect().left + track.offsetWidth / 2
      let best = 0, bestDist = Infinity
      children.forEach((el, i) => {
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.left + r.width / 2 - center)
        if (d < bestDist) { bestDist = d; best = i }
      })
      setScrollActive(best)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="mockup-wrap">
      {/* Desktop */}
      <div className="mockup-row-desktop">
        {MOCKUPS.map((src, i) => (
          <MagnifyPhone key={i} src={src} index={i} />
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
