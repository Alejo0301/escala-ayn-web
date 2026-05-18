export default function CTABand() {
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
