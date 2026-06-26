import { useStickyCTA } from '../../hooks/useStickyCTA'
import { KIWIFY_URL } from '../../data/links'

export function StickyCTA() {
  const visible = useStickyCTA()
  return (
    <div id="sticky-cta" role="complementary" className={visible ? 'visible' : ''}>
      <div className="sticky-inner">
        <div className="sticky-label">
          <small>Pagamento único</small>
          <strong>R$67</strong>
        </div>
        <a href={KIWIFY_URL} className="sticky-btn" target="_blank" rel="noopener noreferrer">
          Quero o próximo passo
        </a>
      </div>
    </div>
  )
}
