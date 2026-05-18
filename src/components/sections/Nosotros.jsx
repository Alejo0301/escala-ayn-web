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
    title: 'Equipo técnico calificado',
    desc:  'Ingenieros civiles, técnicos de obra y personal calificado con experiencia en proyectos de mediana y alta complejidad.',
  },
  {
    title: 'Capacidad operativa real',
    desc:  'Hasta 60 personas simultáneas en obra. Coordinación de frentes de trabajo con trazabilidad BIM en cada proyecto.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="section nosotros">
      <div className="container">

        {/* ── Encabezado izquierdo ── */}
        <div className="nosotros__header">
          <span className="section__tag">— Quiénes somos</span>
          <h2 className="section__title nosotros__title">
            Técnica aplicada,<br />
            <em>resultados que se ven.</em>
          </h2>
        </div>

        {/* ── Franja de métricas ── */}
        <div className="nosotros__metrics" aria-label="Datos clave">
          {METRICS.map((m, i) => (
            <div key={i} className="nosotros__metric">
              <span className="nosotros__metric-num">{m.num}</span>
              <span className="nosotros__metric-label">{m.label}</span>
              <span className="nosotros__metric-sub">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* ── Cuerpo: texto + diagrama ── */}
        <div className="nosotros__body">

          <div className="nosotros__text-col">
            <p className="nosotros__text">
              Escala AYN Constructora S.A.S. es una empresa sangileña fundada el 26 de julio
              de 2022 con el propósito de elevar los estándares técnicos en la construcción
              de Santander. Operamos desde San Gil con proyección regional en vivienda
              unifamiliar, multifamiliar, condominios y proyectos privados.
            </p>
            <p className="nosotros__text">
              Integramos ingenieros civiles, técnicos de obra y personal calificado con
              capacidad para movilizar hasta 60 personas en proyectos simultáneos. Combinamos
              rigor estructural con herramientas BIM para garantizar eficiencia, trazabilidad
              y cumplimiento en cada entrega.
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

          <div className="nosotros__diagram-col" aria-hidden="true">
            <div className="nosotros__diagram">
              <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="318" height="378" rx="2" stroke="#D4AF37" strokeWidth="0.5" />
                {/* Planta edificio */}
                <rect x="20" y="300" width="280" height="60" stroke="#2a2a2a" strokeWidth="0.8" />
                <rect x="60" y="200" width="200" height="100" stroke="#2a2a2a" strokeWidth="0.8" />
                <rect x="100" y="120" width="120" height="80" stroke="#2a2a2a" strokeWidth="0.8" />
                {/* Líneas de cubierta */}
                <path d="M160 60L60 200M160 60L260 200" stroke="#D4AF37" strokeWidth="0.8" />
                <path d="M160 60L160 120" stroke="#7A7A7A" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="160" cy="60" r="4" fill="#D4AF37" />
                {/* Núcleo */}
                <rect x="120" y="300" width="80" height="60" stroke="#D4AF37" strokeWidth="0.5" />
                {/* Etiquetas */}
                <text x="160" y="340" textAnchor="middle" fill="#7A7A7A" fontSize="8" fontFamily="DM Sans">SECCIÓN A-A'</text>
                <text x="20" y="18" fill="#D4AF37" fontSize="7" fontFamily="DM Sans" letterSpacing="2">ESCALA AYN CONSTRUCTORA</text>
                <line x1="20" y1="22" x2="200" y2="22" stroke="#D4AF37" strokeWidth="0.3" />
                {/* Cuadrícula */}
                <line x1="20" y1="60"  x2="300" y2="60"  stroke="#e8e8e8" strokeWidth="0.4" />
                <line x1="20" y1="120" x2="300" y2="120" stroke="#e8e8e8" strokeWidth="0.4" />
                <line x1="20" y1="200" x2="300" y2="200" stroke="#e8e8e8" strokeWidth="0.4" />
                <line x1="60"  y1="40" x2="60"  y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
                <line x1="160" y1="40" x2="160" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
                <line x1="260" y1="40" x2="260" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
                {/* Cota inferior */}
                <path d="M20 370h280" stroke="#7A7A7A" strokeWidth="0.4" />
                <path d="M20 366v8M300 366v8" stroke="#7A7A7A" strokeWidth="0.4" />
                <text x="160" y="375" textAnchor="middle" fill="#7A7A7A" fontSize="6" fontFamily="DM Sans">18.00 m</text>
                {/* Ubicación */}
                <text x="20" y="395" fill="#7A7A7A" fontSize="6" fontFamily="DM Sans" letterSpacing="1">SAN GIL · SANTANDER</text>
              </svg>
            </div>

            <p className="nosotros__diagram-caption">
              Plano esquemático representativo — Escala AYN Constructora S.A.S.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
