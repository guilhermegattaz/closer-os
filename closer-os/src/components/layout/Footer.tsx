export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/images/logo1.webp" alt="CloserOS™" style={{ height: 28, width: 'auto' }} />
          </div>
          <div className="footer-links">
            <a href="https://www.closeros.com.br/termos" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
            <a href="https://www.closeros.com.br/politica" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
            <a href="https://wa.me/16176209468?text=Oi%21%20Quero%20saber%20mais%20sobre%20o%20CloserOS." target="_blank" rel="noopener noreferrer">Contato</a>
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
