import { useEffect, useRef } from 'react'
import palmaireHouse01 from '../../assets/projects/palmaire/palmaire-house-01.JPG'

const METRICS = [
  { num: '2022',  label: 'Año de fundación',    sub: 'San Gil, Santander' },
  { num: '+60',   label: 'Personas en obra',     sub: 'Capacidad operativa' },
  { num: '+35',   label: 'Proyectos ejecutados', sub: 'Residencial y privado' },
  { num: '6',     label: 'Líneas de servicio',   sub: 'Ciclo constructivo integral' },
]

const PILLARS = [
  {
    title: 'Empresa sangileña',
    desc:  'Fundada el 26 de julio de 2022 en San Gil. Operamos con proyección regional en Santander.',
  },
  {
    title: 'Equipo interdisciplinario',
    desc:  'Arquitectos, ingenieros civiles, técnicos de obra y personal calificado con experiencia en proyectos de mediana y alta complejidad.',
  },
  {
    title: 'Capacidad operativa real',
    desc:  'Hasta 60 personas simultáneas en obra. Coordinación de frentes de trabajo con trazabilidad BIM en cada proyecto.',
  },
]

export default function Nosotros() {
  const metricsRef = useRef(null)

  useEffect(() => {
    const el = metricsRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('nosotros__metrics--visible')
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="nosotros" className="section nosotros">
      <div className="container">

        {/* ── Encabezado izquierdo ── */}
        <div className="nosotros__header">
          <span className="section__tag">— Quiénes somos</span>
          <h2 className="section__title nosotros__title">
            Arquitectura y técnica,<br />
            <em>resultados que se ven.</em>
          </h2>
        </div>

        {/* ── Franja de métricas ── */}
        <div className="nosotros__metrics" ref={metricsRef} aria-label="Datos clave">
          {METRICS.map((m, i) => (
            <div key={i} className="nosotros__metric">
              <span className="nosotros__metric-num">{m.num}</span>
              <span className="nosotros__metric-label">{m.label}</span>
              <span className="nosotros__metric-sub">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* ── Cuerpo: texto + imagen ── */}
        <div className="nosotros__body">

          <div className="nosotros__text-col">
            <p className="nosotros__text">
              Escala AYN Constructora S.A.S. es una empresa sangileña fundada el 26 de julio
              de 2022 con el propósito de elevar los estándares de diseño y construcción
              en Santander. Operamos desde San Gil con proyección regional en vivienda
              unifamiliar, multifamiliar, condominios y proyectos privados.
            </p>
            <p className="nosotros__text">
              Nuestro equipo integra arquitectos, ingenieros civiles, técnicos de obra
              y personal calificado, con capacidad de movilizar hasta 60 personas en
              proyectos simultáneos. Coordinamos arquitectura e ingeniería como una sola
              disciplina, apoyados en herramientas BIM para garantizar eficiencia,
              trazabilidad y cumplimiento en cada etapa.
            </p>

            <div className="nosotros__pillars">
              {PILLARS.map(p => (
                <div key={p.title} className="nosotros__pillar">
                  <div className="nosotros__pillar-mark" aria-hidden="true" />
                  <div>
                    <strong className="nosotros__pillar-title">{p.title}</strong>
                    <p className="nosotros__pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="nosotros__diagram-col">
            <div className="nosotros__diagram">
              <img
                src={palmaireHouse01}
                alt="Proyecto Palmaire Condominio — Escala AYN Constructora"
                className="nosotros__diagram-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
