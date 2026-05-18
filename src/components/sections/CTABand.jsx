const WA_URL =
  'https://wa.me/573215594502?text=Hola%2C%20me%20interesa%20recibir%20información%20sobre%20sus%20servicios%20de%20construcción%20en%20Santander.'

export default function CTABand() {
  return (
    <section id="contacto" className="cta-band">
      <div className="cta-band__geo" aria-hidden="true" />

      <div className="container cta-band__inner">

        {/* ── Columna izquierda: copy ── */}
        <div className="cta-band__copy">
          <span className="section__tag">— Contacto</span>
          <h2 className="cta-band__title">
            Tu próximo proyecto<br />
            <em>merece criterio técnico.</em>
          </h2>
          <p className="cta-band__sub">
            Atendemos en San Gil y toda la región de Santander.
            Cuéntanos tu idea — nuestro equipo de arquitectos e ingenieros
            evalúa viabilidad, diseño y presupuesto sin costo y sin compromiso.
          </p>
        </div>

        {/* ── Columna derecha: contacto + CTAs ── */}
        <div className="cta-band__contact">

          <p className="cta-band__location">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.49-2.01-4.5-4.5-4.5z" />
              <circle cx="8" cy="6" r="1.5" />
            </svg>
            San Gil, Santander · Colombia
          </p>

          <div className="cta-band__phones">
            <a href="tel:+573158371235" className="cta-band__phone">
              +57 315 837 1235
            </a>
            <a href="tel:+573215594502" className="cta-band__phone">
              +57 321 559 4502
            </a>
          </div>

          <div className="cta-band__actions">
            <a
              href={WA_URL}
              className="btn btn--gold btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar consulta
            </a>
            <a href="#proyectos" className="btn btn--outline cta-band__btn-secondary">
              Ver proyectos
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
