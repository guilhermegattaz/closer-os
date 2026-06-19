import { useEffect } from 'react'
import { bonusItems } from '../../data/bonus'
import { KIWIFY_URL } from '../../data/links'
import { useCountdown } from '../../hooks/useCountdown'

// {{CONFIGURAR: substitua pela data e hora reais do encerramento do preço de lançamento}}
const LAUNCH_DEADLINE = new Date('2026-06-15T23:59:00-03:00')

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

function Countdown() {
  const { days, hours, minutes, seconds, expired } = useCountdown(LAUNCH_DEADLINE)
  if (expired) return null
  return (
    <div className="oferta-countdown">
      <p className="oferta-countdown-label">Preço de lançamento: R$67 — válido por tempo limitado</p>
      <div className="oferta-countdown-timer">
        {days > 0 && (
          <div className="countdown-unit">
            <span className="countdown-num">{String(days).padStart(2, '0')}</span>
            <span className="countdown-label">dias</span>
          </div>
        )}
        <div className="countdown-unit">
          <span className="countdown-num">{String(hours).padStart(2, '0')}</span>
          <span className="countdown-label">horas</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{String(minutes).padStart(2, '0')}</span>
          <span className="countdown-label">min</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{String(seconds).padStart(2, '0')}</span>
          <span className="countdown-label">seg</span>
        </div>
      </div>
    </div>
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
          {/* ESQUERDA: itens incluídos */}
          <div className="oferta-right" id="oferta-right-panel">
            {/* Mock de chat */}
            <div className="oferta-chat-mock">
              <div className="oferta-chat-status">
                <span className="oferta-chat-dot" />
                <span className="oferta-chat-live">CloserOS ao vivo</span>
              </div>
              <div className="oferta-chat-bubble oferta-chat-bubble--user">
                O cliente disse "tá caro" e sumiu. O que eu respondo?
              </div>
              <div className="oferta-chat-bubble oferta-chat-bubble--closer">
                <div className="oferta-chat-sender">
                  <img src="/images/Logonew1.webp" alt="CloserOS™" className="oferta-chat-logo" />
                  <span>CloserOS</span>
                </div>
                Não baixe o preço. Devolva o valor primeiro: "Entendo. Posso te mostrar em 1 minuto por que esse investimento se paga já no próximo cliente?"
              </div>
            </div>
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

          {/* DIREITA: preço + CTA */}
          <div className="oferta-left">
            <div>
              <div className="oferta-product">CloserOS™</div>
              <div className="price-from">De R$594</div>
              <div className="price-main"><sup>R$</sup>67</div>
              <div className="price-period">pagamento único · sem mensalidade</div>
              <p className="oferta-payback">Se isso te fizer fechar um único cliente que você perderia, já se pagou, <span style={{ color: 'var(--accent-green)' }}>e o mentor fica com você para sempre.</span></p>
              <p className="oferta-lancamento">Preço de lançamento. Em breve, o CloserOS™ passa a custar mais. Garantindo agora, você trava o valor de R$67 para sempre.</p>
              <p className="oferta-ancora">Menos do que uma única consultoria de vendas — que você teria só uma vez. Aqui, o mentor fica com você para sempre.</p>
            </div>
            <div>
              <Countdown />
              <a href={KIWIFY_URL} className="btn-oferta" target="_blank" rel="noopener noreferrer" aria-label="Quero acesso agora — R$67">
                Quero acesso agora — R$67 →
              </a>
              <p className="oferta-risco-zero">Você arrisca R$67 por 7 dias. Se o CloserOS™ não te ajudar a conduzir melhor suas conversas com clientes, é só pedir o reembolso.</p>
              <p className="oferta-kiwify">Kiwify · PIX, cartão ou boleto</p>
              <div className="oferta-garantia-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9,12 11,14 15,10" strokeWidth="2"/>
                </svg>
                <div>
                  <strong>Garantia de 7 dias.</strong>
                  <span> Satisfação garantida ou reembolso total.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
