import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { StickyCTA } from './components/layout/StickyCTA'
import {
  Hero,
  LeakMatrix,
  CustoInvisivel,
  ComoPensa,
  ProfessionSelector,
  FerramentaNaoCurso,
  Pilares,
  Autoridade,
  Provas,
  Oferta,
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
      <Navbar />
      <main id="main">
        <Hero />
        <LeakMatrix />
        <CustoInvisivel />
        <FerramentaNaoCurso />
        <ComoPensa />
        <Pilares />
        <ProfessionSelector />
        <Provas />
        <Autoridade />
        <Oferta />
        <DoisCaminhos />
        <Faq />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
