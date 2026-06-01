import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { StickyCTA } from './components/layout/StickyCTA'
import {
  Hero, Problema, ComoFunciona, Exemplos,
  ParaQuem, Autoridade, Oferta, Faq, FinalCta
} from './components/sections'
import { VantagemCard } from './components/sections/ParaQuem'

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* DotPattern desativado — fundo branco limpo */}
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
      <main id="main" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Problema />
        <ComoFunciona />
        <Exemplos />
        <ParaQuem />
        <Autoridade />
        <VantagemCard
          variant="naked"
          tag="Quanto valeria fechar +80% de todos os clientes com quem conversa?"
          text="Você ganharia mais dinheiro? Se sim, você está a 8 minutos de mudar isso em sua vida. É só clicar no botão e ter o CloserOS ao seu lado já na próxima conversa para fechar seu próximo cliente."
        />
        <Oferta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
