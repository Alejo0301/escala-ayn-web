import { useState, useEffect } from 'react'
import heroImg from '../../assets/hero.png'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
