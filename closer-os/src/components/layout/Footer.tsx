export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/images/logo1.webp" alt="CloserOS™" style={{ height: 28, width: 'auto' }} />
          </div>
          <div className="footer-links">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Contato</a>
          </div>
          <div className="footer-copy">
            © 2026 CloserOS™ · Todos os direitos reservados<br />
            CloserOS™ não é afiliado, patrocinado ou endossado pela OpenAI.
          </div>
        </div>
      </div>
    </footer>
  )
}
