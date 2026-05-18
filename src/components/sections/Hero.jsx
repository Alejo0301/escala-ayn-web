import { useEffect, useRef } from 'react'
import heroImg from '../../assets/hero.png'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add('hero--visible'),
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="hero__grid-line" />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Santander, Colombia · Est. 2020</p>
          <h1 className="hero__title">
            Construimos proyectos<br />
            <em>con criterio técnico,</em><br />
            precisión y visión<br />
            de futuro.
          </h1>
          <p className="hero__sub">
            Escala AYN integra ingeniería estructural, diseño y gestión BIM
            para entregar obras que perduran.
          </p>
          <div className="hero__actions">
            <a href="#servicios" className="btn btn--gold">Ver servicios</a>
            <a href="#contacto" className="btn btn--outline">Hablemos de tu proyecto</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img src={heroImg} alt="Escala AYN Constructora" className="hero__img" />
            <div className="hero__frame-accent" aria-hidden="true" />
          </div>
          <div className="hero__stat-row">
            <div className="hero__stat">
              <span className="hero__stat-num">+50</span>
              <span className="hero__stat-label">Proyectos ejecutados</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">6</span>
              <span className="hero__stat-label">Líneas de servicio</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">BIM</span>
              <span className="hero__stat-label">Gestión digital</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-line" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
