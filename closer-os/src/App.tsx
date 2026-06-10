import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { StickyCTA } from './components/layout/StickyCTA'
import {
  Hero, Problema, ComoFunciona, Exemplos,
  ParaQuem, Autoridade, Oferta, Faq, FinalCta, Depoimentos
} from './components/sections'
import { VantagemCard } from './components/sections/ParaQuem'
import { KIWIFY_URL } from './data/links'

export default function App() {
  useEffect(() => {
    // Initial pass: mark elements already in viewport as visible immediately
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
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))

    // Safety: after 3s force-show any still-invisible fade-up elements
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
        <section className="section-banner">
          <div className="section-banner-inner fade-up">
            <p className="section-banner-text">Vender não é dom. É método.</p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 600, margin: '20px auto 0' }}>
              O cliente não compra o seu serviço — ele compra convicção. E convicção não é personalidade: é a forma como você conduz a conversa. Isso se aprende. E é exatamente isso que o CloserOS coloca na sua mão.
            </p>
          </div>
        </section>
        <ComoFunciona />
        <Exemplos />
        <ParaQuem />
        <Autoridade />
        <VantagemCard
          variant="naked"
          tag="Quanto valeria fechar a maioria dos clientes com quem você conversa?"
          text="Se a resposta for 'muito', você está a poucos minutos de mudar isso. Clique abaixo e tenha o CloserOS™ ao seu lado já na sua próxima conversa."
          btnText="Quero o CloserOS™ agora — R$47 →"
        />
        <Depoimentos />
        <section style={{ background: 'transparent', padding: '32px 0' }}>
          <div className="final-cta-card fade-up">
            <p className="cta-quote">Imagine a sua próxima conversa diferente.</p>
            <p className="cta-sub">
              Você, calmo, sem a mão suando. O cliente questiona o preço e você não se encolhe — conduz. Ele diz "vou pensar" e você sabe exatamente o que perguntar. Você cobra o que vale, com a voz firme, sem pedir desculpa. E fecha. Não porque virou outra pessoa. Porque finalmente teve quem te mostrasse o que dizer.<br /><br />
              E não é só sobre fechar mais um cliente. É sobre ter segurança, encher a agenda no seu ritmo e construir a liberdade de ser dono do próprio nariz.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <a href={KIWIFY_URL} className="btn-white" target="_blank" rel="noopener noreferrer">
                Quero conduzir com confiança — R$47 →
              </a>
            </div>
          </div>
        </section>
        <section className="section-banner">
          <div className="section-banner-inner fade-up" style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(1.75rem, 2.5vw + 0.5rem, 2.4rem)', fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.02em', color: '#ffffff' }}>
              Vender com confiança.<br />
              Vender sem medo.<br />
              Vender de forma natural.<br />
              Vender como um hábito.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 480, margin: '20px auto 0' }}>
              É isso que muda quando você sabe o que dizer.
            </p>
          </div>
        </section>
        <Oferta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
