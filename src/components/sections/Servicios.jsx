import { SERVICIOS } from '../../data/servicios'

export default function Servicios() {
  return (
    <section id="servicios" className="section servicios">
      <div className="container">

        <div className="section__header">
          <span className="section__tag">— Servicios</span>
          <h2 className="section__title">Ingeniería de principio a fin</h2>
          <p className="section__sub">
            Dominio técnico en cada fase del ciclo constructivo,
            desde el diseño estructural hasta la entrega final.
          </p>
        </div>

        <div className="servicios__grid">
          {SERVICIOS.map(s => (
            <div key={s.num} className="servicio-card">

              <div className="servicio-card__header">
                <span className="servicio-card__num">{s.num}</span>
                <div className="servicio-card__icon" aria-hidden="true">{s.icon}</div>
              </div>

              <div className="servicio-card__divider" aria-hidden="true" />

              <h3 className="servicio-card__title">{s.title}</h3>
              <p className="servicio-card__desc">{s.desc}</p>

              <div className="servicio-card__tags">
                {s.tags.map(t => (
                  <span key={t} className="servicio-card__tag">{t}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
