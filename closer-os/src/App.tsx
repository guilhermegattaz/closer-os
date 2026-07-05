import { useEffect } from 'react'
import { Footer } from './components/layout/Footer'
import {
  Hero,
  LeakMatrix,
  CustoInvisivel,
  ComoPensa,
  ProfessionSelector,
  ImpactoCloserOS,
  FerramentaNaoCurso,
  Pilares,
  Autoridade,
  Provas,
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
          <a href="https://pay.kiwify.com.br/F0Rpruo" className="site-header-cta" target="_blank" rel="noopener noreferrer">Quero meu acesso · R$67</a>
        </div>
      </header>
      <main id="main">
        <Hero />
        <LeakMatrix />
        <CustoInvisivel />
        <FerramentaNaoCurso />
        <ComoPensa />
        <Pilares />
        <ProfessionSelector />
        <ImpactoCloserOS />
        <Provas />
        <Autoridade />
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
