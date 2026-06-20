import { useEffect } from 'react'
import { bonusItems } from '../../data/bonus'
import { KIWIFY_URL } from '../../data/links'
import { useCountdown } from '../../hooks/useCountdown'

// {{CONFIGURAR: substitua pela data e hora reais do encerramento do preço de lançamento}}
const LAUNCH_DEADLINE = new Date('2026-06-15T23:59:00-03:00')

function BonusIcon({ tipo, nome }: { tipo: string; nome: string }) {
  if (tipo === 'principal') {
    return (
      <div className="bonus-mockup" aria-hidden="true">
        <div className="bonus-mockup-line" />
        <div className="bonus-mockup-line bonus-mockup-line--reply" />
        <div className="bonus-mockup-line" />
      </div>
    )
  }
  if (nome.startsWith('Treinamento')) {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <circle cx="10" cy="10" r="8" />
        <polygon points="8,7 14,10 8,13" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  // Guia / documento
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
      <path d="M4 2h8l4 4v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <polyline points="12,2 12,6 16,6" />
      <line x1="6" y1="9" x2="14" y2="9" />
      <line x1="6" y1="12" x2="14" y2="12" />
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
            {/* Mock de chat — NÃO ALTERAR */}
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

            {/* Âncora de valor */}
            <div className="oferta-valor-total">
              <div className="valor-total-label">Valor real do pacote</div>
              <div className="valor-total-num">R$594</div>
              <div className="valor-total-hoje">Hoje: R$67</div>
            </div>

            <div className="oferta-right-headline">Tudo que você recebe hoje</div>
            <div className="oferta-right-label">O que está incluído</div>
            <div className="bonus-list">
              {bonusItems.map((item) => (
                <div
                  key={item.id}
                  className={`bonus-row${item.highlight ? ' bonus-row-highlight' : ''}${item.tipo === 'principal' ? ' bonus-row-principal' : ''}`}
                  id={item.highlight ? 'bonus-roteiro' : undefined}
                >
                  {item.tipo === 'principal' ? (
                    <img
                      src="/images/mkoffer.webp"
                      alt="Interface do CloserOS respondendo a uma objeção de cliente"
                      className="bonus-principal-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="bonus-icon gift-icon">
                      <BonusIcon tipo={item.tipo} nome={item.nome} />
                    </div>
                  )}
                  <div className="bonus-name">
                    {item.nome}
                    <span className="bonus-incluso">incluso</span>
                  </div>
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
              <p className="oferta-payback">Fecha um cliente e já se pagou.</p>
            </div>
            <div>
              <Countdown />
              <a href={KIWIFY_URL} className="btn-oferta" target="_blank" rel="noopener noreferrer" aria-label="Quero acesso agora — R$67">
                Quero acesso agora — R$67 →
              </a>
              <div className="oferta-microselos">
                <span className="oferta-microselo oferta-microselo--peach">Preço de lançamento</span>
                <span className="oferta-microselo">Menos que uma consultoria</span>
              </div>
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
