import { PROYECTOS } from '../../data/proyectos'

export default function Proyectos() {
  return (
    <section id="proyectos" className="section proyectos">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">— Proyectos</span>
          <h2 className="section__title">Obra que habla<br /><em>por sí sola</em></h2>
        </div>
        <div className="proyectos__grid">
          {PROYECTOS.map(c => (
            <div key={c.nombre} className="proyecto-card">
              <div className="proyecto-card__img-wrap">
                <div className="proyecto-card__placeholder">
                  <svg viewBox="0 0 80 60" fill="none" stroke="#C2B280" strokeWidth="0.8">
                    <rect x="10" y="30" width="60" height="24" />
                    <rect x="24" y="14" width="32" height="16" />
                    <path d="M10 30L40 10l30 20" />
                    <rect x="30" y="38" width="20" height="16" />
                  </svg>
                </div>
                <span className="proyecto-card__tipo">{c.tipo}</span>
              </div>
              <div className="proyecto-card__info">
                <h3 className="proyecto-card__name">{c.nombre}</h3>
                <p className="proyecto-card__loc">{c.loc}</p>
                <p className="proyecto-card__tag">{c.tag}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="proyectos__cta">
          <a href="#contacto" className="btn btn--outline">
            ¿Tienes un proyecto? Hablemos
          </a>
        </div>
      </div>
    </section>
  )
}
