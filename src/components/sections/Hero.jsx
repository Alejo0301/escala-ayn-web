import { useEffect, useRef } from 'react'
import heroMainImg   from '../../assets/hero/hero-main.jpeg'
import heroMobileImg from '../../assets/hero/hero-mobile.JPG'
import heroOverlay   from '../../assets/hero/hero-overlay.JPG'

const BADGES = ['Construcción', 'Diseño estructural', 'Licencias', 'BIM', 'Interventoría']

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

      {/* ── Capas de fondo ── */}
      <div className="hero__bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobileImg} />
          <img
            src={heroMainImg}
            alt=""
            className="hero__bg-img"
            loading="eager"
            decoding="async"
          />
        </picture>
        <img
          src={heroOverlay}
          alt=""
          className="hero__bg-texture"
          loading="eager"
          decoding="async"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* ── Cuadrícula decorativa ── */}
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="hero__grid-line" />
        ))}
      </div>

      {/* ── Contenido principal ── */}
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">San Gil · Santander · Est. 2020</p>

          <h1 className="hero__title">
            Construimos proyectos<br />
            <em>con rigor técnico</em><br />
            y visión de futuro.
          </h1>

          <p className="hero__sub">
            Diseño, construcción y gestión integral de proyectos
            residenciales y multifamiliares en San Gil y Santander.
          </p>

          <div className="hero__badges" aria-label="Servicios">
            {BADGES.map(b => (
              <span key={b} className="hero__badge">{b}</span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#proyectos" className="btn btn--gold">Ver proyectos</a>
            <a href="#contacto" className="btn btn--outline">Hablar con nosotros</a>
          </div>
        </div>
      </div>

      {/* ── Barra de estadísticas ── */}
      <div className="hero__stats">
        <div className="container hero__stats-inner">
          <div className="hero__stat">
            <span className="hero__stat-num">+50</span>
            <span className="hero__stat-label">Proyectos ejecutados</span>
          </div>
          <div className="hero__stat-sep" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num">+5</span>
            <span className="hero__stat-label">Años de experiencia</span>
          </div>
          <div className="hero__stat-sep" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num">BIM</span>
            <span className="hero__stat-label">Gestión digital</span>
          </div>
        </div>
      </div>

      {/* ── Indicador de scroll ── */}
      <div className="hero__scroll-line" aria-hidden="true">
        <span />
      </div>

    </section>
  )
}
