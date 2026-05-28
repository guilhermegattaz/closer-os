import { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

const MOCKUPS = [
  '/images/mockups/1.png',
  '/images/mockups/2.png',
  '/images/mockups/3.png',
  '/images/mockups/4.png',
]

const RING = 80        // ring indicator on image (px)
const ZOOM = 3.6       // magnification in the panel
const PANEL_W = 500
const PANEL_H = 300

interface Lens {
  imgX: number   // cursor relative to image container
  imgY: number
  imgW: number   // rendered image width
  imgH: number   // rendered image height
  screenX: number
  screenY: number
}

function MagnifyPhone({ src, index }: { src: string; index: number }) {
  const [lens, setLens] = useState<Lens | null>(null)
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

  // Panel background math: map cursor point to panel center
  const bgX = lens ? PANEL_W / 2 - lens.imgX * ZOOM : 0
  const bgY = lens ? PANEL_H / 2 - lens.imgY * ZOOM : 0
  const bgW = lens ? lens.imgW * ZOOM : 0

  // Panel position: right of cursor, clamp to viewport
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

  // Ring position on image
  const ringX = lens ? lens.imgX - RING / 2 : 0
  const ringY = lens ? lens.imgY - RING / 2 : 0

  return (
    <>
      <div
        ref={containerRef}
        className="mockup-phone"
        onMouseMove={onMouseMove}
        onMouseLeave={clear}
        style={{ cursor: lens ? 'none' : 'crosshair' }}
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
    </>
  )
}

export function MockupCarousel() {
  const [scrollActive, setScrollActive] = useState(1)
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
