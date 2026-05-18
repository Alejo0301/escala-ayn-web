import { useEffect, useRef } from 'react'
import { SERVICIOS } from '../../data/servicios'

export default function Servicios() {
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('servicios__grid--visible')
          io.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="servicios" className="section servicios">
      <div className="container">

        <div className="section__header">
          <span className="section__tag">— Servicios</span>
          <h2 className="section__title">Del espacio a la estructura.</h2>
          <p className="section__sub">
            Concebimos, calculamos y construimos. Diseño arquitectónico y rigor estructural
            coordinados desde la planificación espacial hasta la entrega final de obra.
          </p>
        </div>

        <div className="servicios__grid" ref={gridRef}>
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
