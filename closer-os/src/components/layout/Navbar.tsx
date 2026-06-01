import { KIWIFY_URL } from '../../data/links'

export function Navbar() {
  return (
    <nav id="navbar" role="banner">
      <div className="nav-inner">
        <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/Logonew1.webp" alt="CloserOS™" style={{ height: 32, width: 'auto' }} />
        </a>
        <a href={KIWIFY_URL} className="btn-ghost" target="_blank" rel="noopener noreferrer">Quero o CloserOS™ — R$47 →</a>
      </div>
    </nav>
  )
}
