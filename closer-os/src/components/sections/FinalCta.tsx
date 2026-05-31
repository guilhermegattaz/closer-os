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
            <a href={KIWIFY_URL} className="btn-white" target="_blank" rel="noopener noreferrer">Quero o CloserOS™ agora — R$47 →</a>
            <p className="cta-meta">Garantia de 7 dias · Acesso imediato · Funciona no ChatGPT gratuito</p>
          </div>
      </div>
    </section>
  )
}
