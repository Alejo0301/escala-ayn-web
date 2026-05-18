import { SERVICIOS } from '../../data/servicios'

export default function Servicios() {
  return (
    <section id="servicios" className="section servicios">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">— Servicios</span>
          <h2 className="section__title">Ingeniería de principio a fin</h2>
          <p className="section__sub">
            Un equipo técnico con dominio integral del ciclo constructivo.
          </p>
        </div>
        <div className="servicios__grid">
          {SERVICIOS.map(s => (
            <div key={s.num} className="servicio-card">
              <div className="servicio-card__icon">{s.icon}</div>
              <div>
                <span className="servicio-card__num">{s.num}</span>
                <h3 className="servicio-card__title">{s.title}</h3>
                <p className="servicio-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
