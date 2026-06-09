import { KIWIFY_URL } from '../../data/links'

export function FinalCta() {
  return (
    <section id="final-cta">
      <div className="final-cta-card fade-up">
          <p className="cta-quote">
            A próxima vez que um cliente disser 'tá caro' ou 'vou pensar', você vai saber exatamente o que fazer.
          </p>
          <p className="cta-sub">
            Você não precisa mais improvisar. Não precisa mais torcer para que o cliente aceite. Não precisa mais perder vendas por não saber o que dizer no momento certo.<br /><br />
            O CloserOS™ está disponível agora — e vai continuar disponível na próxima reunião, na próxima negociação, na próxima vez que um cliente disser "vou pensar".
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <a href={KIWIFY_URL} className="btn-white" target="_blank" rel="noopener noreferrer" aria-label="Sim, quero parar de improvisar — R$47">Sim, quero parar de improvisar — R$47 →</a>
            <p className="oferta-risco-zero" style={{ textAlign: 'center', maxWidth: 400 }}>Você arrisca R$47 por 7 dias. Se o CloserOS™ não te ajudar a conduzir melhor suas conversas com clientes, é só pedir o reembolso.</p>
            <p className="cta-meta">Acesso imediato · Funciona no ChatGPT gratuito · Sem mensalidade</p>
          </div>
      </div>
    </section>
  )
}
