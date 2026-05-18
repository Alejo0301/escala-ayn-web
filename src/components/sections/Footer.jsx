import heroImg from '../../assets/hero.png'

const SERVICIOS_FOOTER = [
  'Construcción',
  'Diseño estructural',
  'Licencias',
  'Remodelaciones',
  'Interventoría',
  'BIM y Consultoría',
]

export default function Footer() {
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
              {SERVICIOS_FOOTER.map(s => (
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
