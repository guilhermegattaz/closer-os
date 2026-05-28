import { useEffect } from 'react'
import { bonusItems } from '../../data/bonus'
import { KIWIFY_URL } from '../../data/links'

function BonusIcon({ tipo }: { tipo: string }) {
  if (tipo === 'principal') {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <rect x="3" y="5" width="14" height="11" rx="2"/>
        <path d="M7 5V4a3 3 0 0 1 6 0v1"/>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
      <path d="M18 9H2v10h16V9z"/>
      <path d="M21 4H3v5h18V4z"/>
      <path d="M12 21V4"/>
      <path d="M12 4H7.5a2.5 2.5 0 0 1 0-5C11 -1 12 4 12 4z"/>
      <path d="M12 4h4.5a2.5 2.5 0 0 0 0-5C13 -1 12 4 12 4z"/>
    </svg>
  )
}

export function Oferta() {
  useEffect(() => {
    const card = document.getElementById('bonus-roteiro')
    if (!card) return
    let triggered = false
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !triggered) {
        triggered = true
        setTimeout(() => card.classList.add('blue-in'), 300)
      }
    }, { threshold: 0.8 })
    obs.observe(card)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="oferta">
      <div className="container">
        <div className="oferta-layout fade-up d1">
          {/* ESQUERDA: bônus */}
          <div className="oferta-right" id="oferta-right-panel">
            <div className="oferta-right-headline">Tudo que você recebe hoje</div>
            <div className="oferta-right-label">O que está incluído</div>
            <div className="bonus-list">
              {bonusItems.map((item) => (
                <div
                  key={item.id}
                  className={`bonus-row${item.highlight ? ' bonus-row-highlight' : ''}`}
                  id={item.highlight ? 'bonus-roteiro' : undefined}
                >
                  <div className={`bonus-icon${item.tipo !== 'principal' ? ' gift-icon' : ''}`}>
                    <BonusIcon tipo={item.tipo} />
                  </div>
                  <div className="bonus-name">{item.nome}</div>
                  <div className="bonus-val" style={item.highlight ? { fontWeight: 600 } : undefined}>{item.valor}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DIREITA: azul, preço + CTA */}
          <div className="oferta-left">
            <div>
              <div className="oferta-product">CloserOS™</div>
              <div className="price-from">De R$691</div>
              <div className="price-main" style={{ color: '#facc1d' }}><sup>R$</sup>47</div>
              <div className="price-period">pagamento único · sem mensalidade</div>
            </div>
            <div>
              <a href={KIWIFY_URL} className="btn-oferta" target="_blank" rel="noopener noreferrer">
                Quero acesso agora — R$47 →
              </a>
              <p className="oferta-kiwify">Kiwify · PIX, cartão ou boleto</p>
              <div className="oferta-garantia-mini">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p><strong>7 dias de garantia.</strong> Não viu valor, devolvo 100%. Sem perguntas, sem burocracia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
