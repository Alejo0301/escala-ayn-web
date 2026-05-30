import { useEffect, useRef } from 'react'
import { PROYECTOS } from '../../data/proyectos'

export default function Proyectos() {
  const listRef = useRef(null)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('proyectos__list--visible')
          io.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="proyectos" className="section proyectos">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">— Proyectos</span>
          <h2 className="section__title">Obra que habla<br /><em>por sí sola</em></h2>
          <p className="section__sub">
            Proyectos ejecutados en Santander: vivienda residencial, multifamiliar y desarrollo privado.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="proyectos__list" ref={listRef}>
          {PROYECTOS.map(p => (
            <article key={p.id} className="proyecto-card">

              <div className="proyecto-card__img-wrap">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="proyecto-card__img"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
                <div className="proyecto-card__img-edge" aria-hidden="true" />
                {p.nuevo && (
                  <span className="proyecto-card__nuevo">Nuevo</span>
                )}
              </div>

              <div className="proyecto-card__body">
                <div className="proyecto-card__meta">
                  <span className="proyecto-card__cat">{p.category}</span>
                  <span className="proyecto-card__year">{p.year}</span>
                </div>

                <h3 className="proyecto-card__title">{p.title}</h3>
                <p className="proyecto-card__desc">{p.desc}</p>

                <div className="proyecto-card__highlights">
                  {p.highlights.slice(0, 3).map(h => (
                    <span key={h} className="proyecto-card__hl">{h}</span>
                  ))}
                </div>

                <p className="proyecto-card__loc">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.49-2.01-4.5-4.5-4.5z" />
                    <circle cx="8" cy="6" r="1.5" />
                  </svg>
                  {p.location}
                </p>
              </div>

            </article>
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
