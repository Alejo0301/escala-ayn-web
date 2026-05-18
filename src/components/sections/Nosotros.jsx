const PILLARS = [
  ['Rigor técnico', 'NSR-10, RAS, normas ICONTEC'],
  ['Gestión BIM', 'Modelado 3D/5D con Revit'],
  ['Transparencia', 'Interventoría independiente'],
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="section nosotros">
      <div className="container nosotros__inner">
        <div className="nosotros__visual">
          <div className="nosotros__badge">
            <p className="nosotros__badge-num">+5</p>
            <p className="nosotros__badge-label">Años de<br />experiencia</p>
          </div>
          <div className="nosotros__diagram" aria-hidden="true">
            <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="318" height="378" rx="2" stroke="#D4AF37" strokeWidth="0.5" />
              <rect x="20" y="300" width="280" height="60" stroke="#2a2a2a" strokeWidth="0.8" />
              <rect x="60" y="200" width="200" height="100" stroke="#2a2a2a" strokeWidth="0.8" />
              <rect x="100" y="120" width="120" height="80" stroke="#2a2a2a" strokeWidth="0.8" />
              <path d="M160 60L60 200M160 60L260 200" stroke="#D4AF37" strokeWidth="0.8" />
              <path d="M160 60L160 120" stroke="#7A7A7A" strokeWidth="0.5" strokeDasharray="3 3" />
              <circle cx="160" cy="60" r="4" fill="#D4AF37" />
              <rect x="120" y="300" width="80" height="60" stroke="#D4AF37" strokeWidth="0.5" />
              <text x="160" y="340" textAnchor="middle" fill="#7A7A7A" fontSize="8" fontFamily="DM Sans">SECCIÓN A-A'</text>
              <text x="20" y="18" fill="#D4AF37" fontSize="7" fontFamily="DM Sans" letterSpacing="2">ESCALA AYN CONSTRUCTORA</text>
              <line x1="20" y1="22" x2="200" y2="22" stroke="#D4AF37" strokeWidth="0.3" />
              <line x1="20" y1="60" x2="300" y2="60" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="20" y1="120" x2="300" y2="120" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="20" y1="200" x2="300" y2="200" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="60" y1="40" x2="60" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="160" y1="40" x2="160" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="260" y1="40" x2="260" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
              <path d="M20 370h280" stroke="#7A7A7A" strokeWidth="0.4" />
              <path d="M20 366v8M300 366v8" stroke="#7A7A7A" strokeWidth="0.4" />
              <text x="160" y="375" textAnchor="middle" fill="#7A7A7A" fontSize="6" fontFamily="DM Sans">18.00 m</text>
            </svg>
          </div>
        </div>

        <div className="nosotros__content">
          <span className="section__tag">— Quiénes somos</span>
          <h2 className="section__title nosotros__title">
            Técnica aplicada,<br />
            <em>resultados que se ven.</em>
          </h2>
          <p className="nosotros__text">
            Escala AYN Constructora S.A.S. es una empresa santandereana fundada con el propósito
            de elevar los estándares técnicos en la industria de la construcción regional.
          </p>
          <p className="nosotros__text">
            Nuestro equipo combina rigor ingenieril con dominio de herramientas digitales como BIM,
            permitiéndonos gestionar proyectos con mayor eficiencia, menor error y total trazabilidad.
          </p>
          <div className="nosotros__pillars">
            {PILLARS.map(([t, d]) => (
              <div key={t} className="nosotros__pillar">
                <span className="nosotros__pillar-dot" />
                <div>
                  <strong>{t}</strong>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
