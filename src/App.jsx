import { useState, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

/* ── Navbar ─────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__brand">
          <img src={heroImg} alt="Escala AYN" className="navbar__logo" />
          <span className="navbar__name">Escala <em>AYN</em></span>
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link"
               onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--gold btn--sm">
            Solicitar consulta
          </a>
        </nav>

        <button className="navbar__toggle" onClick={() => setMenuOpen(o => !o)}
                aria-label="Menú">
          <span className={`hamburger${menuOpen ? ' hamburger--open' : ''}`} />
        </button>
      </div>
    </header>
  )
}

/* ── Hero ────────────────────────────────────────── */
function Hero() {
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
      {/* geometric grid overlay */}
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

/* ── Servicios ───────────────────────────────────── */
const SERVICIOS = [
  {
    num: '01',
    title: 'Construcción',
    desc: 'Ejecución de obras residenciales, comerciales e industriales con estándares técnicos rigurosos y control de calidad en cada etapa.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="20" width="28" height="14" rx="1" />
        <path d="M6 20L20 8l14 12" />
        <rect x="14" y="26" width="5" height="8" />
        <rect x="21" y="26" width="5" height="8" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Diseño Estructural',
    desc: 'Cálculo y diseño de sistemas estructurales con análisis sismorresistente conforme a la NSR-10.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 32V12M20 32V8M32 32V16" />
        <path d="M6 32h28" />
        <path d="M8 20h12M20 14h12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Licencias',
    desc: 'Gestión integral de licencias de construcción, urbanismo y permisos ante las curadurías urbanas de Santander.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="6" width="24" height="30" rx="1" />
        <path d="M14 14h12M14 20h12M14 26h8" />
        <path d="M28 28l4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Remodelaciones',
    desc: 'Intervención, adecuación y modernización de espacios existentes con enfoque funcional y estético.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 30L28 12" strokeLinecap="round" />
        <path d="M24 8l8 8-4 4" />
        <path d="M8 32l4-4" />
        <circle cx="12" cy="28" r="2" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Interventoría',
    desc: 'Supervisión técnica, administrativa y financiera de proyectos para garantizar cumplimiento de especificaciones y cronogramas.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="13" />
        <path d="M20 13v7l5 5" strokeLinecap="round" />
        <path d="M8 20H6M34 20h-2M20 8V6M20 34v-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'BIM & Consultoría',
    desc: 'Modelado digital en 3D/5D con Revit y Navisworks para optimizar costos, tiempos y coordinación multidisciplinaria.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 6l14 8v12L20 34 6 26V14z" />
        <path d="M20 6v28M6 14l14 8 14-8" strokeDasharray="3 2" />
      </svg>
    ),
  },
]

function Servicios() {
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

/* ── Nosotros ────────────────────────────────────── */
function Nosotros() {
  return (
    <section id="nosotros" className="section nosotros">
      <div className="container nosotros__inner">
        <div className="nosotros__visual">
          <div className="nosotros__badge">
            <p className="nosotros__badge-num">+5</p>
            <p className="nosotros__badge-label">Años de<br />experiencia</p>
          </div>
          <div className="nosotros__diagram" aria-hidden="true">
            {/* geometric architectural diagram */}
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
              {/* grid lines */}
              <line x1="20" y1="60" x2="300" y2="60" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="20" y1="120" x2="300" y2="120" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="20" y1="200" x2="300" y2="200" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="60" y1="40" x2="60" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="160" y1="40" x2="160" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
              <line x1="260" y1="40" x2="260" y2="360" stroke="#e8e8e8" strokeWidth="0.4" />
              {/* dimension marks */}
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
            {[
              ['Rigor técnico', 'NSR-10, RAS, normas ICONTEC'],
              ['Gestión BIM', 'Modelado 3D/5D con Revit'],
              ['Transparencia', 'Interventoría independiente'],
            ].map(([t, d]) => (
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

/* ── Proyectos placeholder ───────────────────────── */
function Proyectos() {
  const cards = [
    { tipo: 'Residencial', nombre: 'Conjunto Cerrado El Roble', loc: 'Bucaramanga', tag: 'Diseño estructural · Interventoría' },
    { tipo: 'Comercial', nombre: 'Centro Empresarial Norte', loc: 'Floridablanca', tag: 'BIM · Construcción' },
    { tipo: 'Infraestructura', nombre: 'Remodelación Hospital Municipal', loc: 'Girón', tag: 'Licencias · Remodelación' },
  ]

  return (
    <section id="proyectos" className="section proyectos">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">— Proyectos</span>
          <h2 className="section__title">Obra que habla<br /><em>por sí sola</em></h2>
        </div>
        <div className="proyectos__grid">
          {cards.map(c => (
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

/* ── CTA Band ────────────────────────────────────── */
function CTABand() {
  return (
    <section id="contacto" className="cta-band">
      <div className="cta-band__geo" aria-hidden="true" />
      <div className="container cta-band__inner">
        <div>
          <h2 className="cta-band__title">
            Tu próximo proyecto<br />
            <em>merece criterio técnico.</em>
          </h2>
          <p className="cta-band__sub">
            Cuéntanos tu idea. Nuestro equipo analiza la viabilidad técnica
            sin costo y sin compromiso.
          </p>
        </div>
        <div className="cta-band__actions">
          <a
            href="https://wa.me/573000000000?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios"
            className="btn btn--gold btn--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
          <a href="mailto:contacto@escalaayn.com" className="btn btn--white">
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={heroImg} alt="Escala AYN" className="footer__logo" />
          <p className="footer__tagline">
            Construimos proyectos con criterio técnico,<br />
            precisión y visión de futuro.
          </p>
          <p className="footer__location">📍 Santander, Colombia</p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Servicios</h4>
            <ul>
              {['Construcción', 'Diseño estructural', 'Licencias', 'Remodelaciones', 'Interventoría', 'BIM y Consultoría'].map(s => (
                <li key={s}><a href="#servicios">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Quiénes somos</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>contacto@escalaayn.com</li>
              <li>Santander, Colombia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Escala AYN Constructora S.A.S. · Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

/* ── App ─────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Proyectos />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
