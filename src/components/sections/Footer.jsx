import logoWhite from '../../assets/branding/logo-white.png'

const SERVICIOS_FOOTER = [
  'Construcción',
  'Diseño estructural',
  'Licencias',
  'Remodelaciones',
  'Interventoría',
  'BIM y Consultoría',
]

const IconPhone = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M2.5 2h2.3l.8 2.3-1.5.75a8 8 0 0 0 3.35 3.35l.75-1.5L10.5 7.7V10a.5.5 0 0 1-.5.5C4.5 10.5 1 7 1 3a.5.5 0 0 1 .5-.5H2.5z" />
  </svg>
)

const IconInstagram = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <rect x="2" y="2" width="10" height="10" rx="3" />
    <circle cx="7" cy="7" r="2.3" />
    <circle cx="10.2" cy="3.8" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const IconFacebook = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M10 2H8a3 3 0 0 0-3 3v1.5H3.5V9H5v5h2.5V9h2L10 6.5H7.5V5a.5.5 0 0 1 .5-.5H10V2z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* ── Marca ── */}
        <div className="footer__brand">
          <img src={logoWhite} alt="Escala AYN Constructora" className="footer__logo" loading="lazy" decoding="async" />
          <p className="footer__tagline">
            Construimos proyectos con criterio técnico,
            precisión y visión de futuro.
          </p>
          <p className="footer__location">San Gil, Santander · Est. 2022</p>
        </div>

        {/* ── Servicios ── */}
        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            {SERVICIOS_FOOTER.map(s => (
              <li key={s}><a href="#servicios">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* ── Empresa ── */}
        <div className="footer__col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Quiénes somos</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* ── Contacto ── */}
        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="tel:+573158371235" className="footer__contact-link">
                <IconPhone />
                +57 315 837 1235
              </a>
            </li>
            <li>
              <a href="tel:+573215594502" className="footer__contact-link">
                <IconPhone />
                +57 321 559 4502
              </a>
            </li>
            <li className="footer__social-row">
              <a
                href="https://instagram.com/escalaayn"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-link"
                aria-label="Instagram de Escala AYN"
              >
                <IconInstagram />
                @escalaayn
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/constructoraescalaayn"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-link"
                aria-label="Facebook de Constructora ESCALA AYN"
              >
                <IconFacebook />
                Constructora ESCALA AYN
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Escala AYN Constructora S.A.S. · Todos los derechos reservados.</p>
          <p>San Gil, Santander · Colombia</p>
        </div>
      </div>
    </footer>
  )
}
