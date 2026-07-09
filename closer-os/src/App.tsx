import { useEffect } from 'react'
import { Footer } from './components/layout/Footer'
import {
  Hero,
  LeakMatrix,
  CustoInvisivel,
  ProfessionSelector,
  ImpactoCloserOS,
  FerramentaNaoCurso,
  Pilares,
  Autoridade,
  Provas,
  OfertaPreview,
  Oferta,
  AcessoRapido,
  Faq,
  DoisCaminhos,
} from './components/sections'

export default function App() {
  useEffect(() => {
    document.querySelectorAll<Element>('.fade-up').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible')
      }
    })

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))

    const safetyTimer = setTimeout(() => {
      document.querySelectorAll<Element>('.fade-up:not(.visible)').forEach((el) => {
        el.classList.add('visible')
      })
    }, 3000)

    return () => {
      obs.disconnect()
      clearTimeout(safetyTimer)
    }
  }, [])

  useEffect(() => {
    const grid = document.querySelector<HTMLElement>('.provas-grid')
    if (!grid) return
    let isDown = false, startX = 0, scrollStart = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      grid.style.cursor = 'grabbing'
      grid.style.userSelect = 'none'
      startX = e.pageX
      scrollStart = grid.scrollLeft
      e.preventDefault()
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      grid.scrollLeft = scrollStart - (e.pageX - startX)
    }
    const onMouseUp = () => {
      isDown = false
      grid.style.cursor = 'grab'
      grid.style.userSelect = ''
    }

    grid.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      grid.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    const grid = document.querySelector<HTMLElement>('.provas-grid')
    const dots = document.querySelectorAll<HTMLElement>('.provas-swipe-dots--desktop span')
    if (!grid || dots.length === 0) return
    const updateDots = () => {
      const scrollable = grid.scrollWidth - grid.clientWidth
      if (scrollable <= 0) return
      const progress = grid.scrollLeft / scrollable
      const activeIndex = Math.round(progress * (dots.length - 1))
      dots.forEach((dot, i) => dot.classList.toggle('dot-active', i === activeIndex))
    }
    grid.addEventListener('scroll', updateDots, { passive: true })
    return () => grid.removeEventListener('scroll', updateDots)
  }, [])

  useEffect(() => {
    const arrow = document.querySelector<HTMLElement>('.provas-arrow')
    const grid = document.querySelector<HTMLElement>('.provas-grid')
    if (!arrow || !grid) return
    const onClick = () => {
      const max = grid.scrollWidth - grid.clientWidth
      const step = grid.clientWidth
      if (grid.scrollLeft >= max - 5) {
        grid.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        grid.scrollTo({ left: Math.min(grid.scrollLeft + step, max), behavior: 'smooth' })
      }
    }
    arrow.addEventListener('click', onClick)
    return () => arrow.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <a
        href="#main"
        style={{
          position: 'absolute', left: -9999, top: 0, zIndex: 999,
          background: 'var(--text)', color: 'var(--bg)',
          padding: '8px 16px', fontSize: '0.85rem',
        }}
        onFocus={(e) => { e.currentTarget.style.left = '0' }}
        onBlur={(e) => { e.currentTarget.style.left = '-9999px' }}
      >
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#hero" className="site-header-logo">
            <img src="/images/Logodark.webp" alt="CloserOS" className="site-header-logo-img" />
          </a>
          <a href="https://pay.hotmart.com/M106671919D" className="site-header-cta" target="_blank" rel="noopener noreferrer">Quero meu acesso · R$67</a>
        </div>
      </header>
      <main id="main">
        <Hero />
        <LeakMatrix />
        <CustoInvisivel />
        <FerramentaNaoCurso />
        <Pilares />
        <ProfessionSelector />
        <ImpactoCloserOS />
        <Provas />
        <Autoridade />
        <OfertaPreview />
        <Oferta />
        <AcessoRapido />
        <DoisCaminhos />
        <Faq />
      </main>
      <Footer />
      <div className="copyright-bar">© 2026 CloserOS™. Todos os direitos reservados.</div>
    </>
  )
}
