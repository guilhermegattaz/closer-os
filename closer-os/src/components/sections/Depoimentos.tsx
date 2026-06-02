import { depoimentos } from '../../data/depoimentos'

export function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="container">
        <h2 className="h2 fade-up" style={{ textAlign: 'center', marginBottom: 48 }}>
          Depoimentos reais.<br className="br-desktop" /><br className="br-mobile" />{' '}
          <span style={{ color: '#c3baff' }}>Resultados comprovados.</span>
        </h2>
        <div className="depo-grid">
          {depoimentos.map((d, i) => (
            <div key={d.id} className={`depo-card fade-up${i === 1 ? ' d1' : i === 2 ? ' d2' : ''}`}>
              <div className="depo-badge">{d.badge}</div>
              <p className="depo-texto">{d.texto}</p>
              <hr className="depo-divider" />
              <div className="depo-rodape">
                <div className="depo-avatar">{d.iniciais}</div>
                <div className="depo-info">
                  <div className="depo-nome">{d.nome}</div>
                  <div className="depo-cargo">{d.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
