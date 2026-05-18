import { useState, useEffect } from 'react'
import verticImg from '../../assets/projects/vertice/lanzamiento_vertice.jpg'

const WA_VERTICE =
  'https://wa.me/573215594502?text=Hola%2C%20me%20interesa%20información%20sobre%20el%20proyecto%20VÉRTICE%20en%20preventa%20en%20San%20Gil.'

const STORAGE_KEY = 'vertice_ad_closed_at'
const TTL_MS = 24 * 60 * 60 * 1000

function wasRecentlyClosed() {
  try {
    const ts = localStorage.getItem(STORAGE_KEY)
    return ts && Date.now() - Number(ts) < TTL_MS
  } catch {
    return false
  }
}

export default function FloatingVerticeAd() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (wasRecentlyClosed()) return
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  function close(e) {
    e.stopPropagation()
    setVisible(false)
    try { localStorage.setItem(STORAGE_KEY, Date.now()) } catch {}
  }

  if (!visible) return null

  return (
    <a
      href={WA_VERTICE}
      target="_blank"
      rel="noopener noreferrer"
      className="vertice-ad"
      aria-label="Conocer proyecto VÉRTICE en preventa"
    >
      <button
        className="vertice-ad__close"
        onClick={close}
        aria-label="Cerrar anuncio"
        type="button"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 3l10 10M13 3L3 13" />
        </svg>
      </button>

      <div className="vertice-ad__image">
        <img src={verticImg} alt="Proyecto VÉRTICE — San Gil" />
        <span className="vertice-ad__badge">Nuevo lanzamiento</span>
      </div>

      <div className="vertice-ad__body">
        <p className="vertice-ad__location">San Gil, Santander</p>
        <h3 className="vertice-ad__name">VÉRTICE</h3>
        <p className="vertice-ad__details">4 niveles · 6 aptos · terraza BBQ</p>
        <p className="vertice-ad__price">Desde <strong>$120 millones</strong></p>
        <span className="vertice-ad__cta">Conocer proyecto →</span>
      </div>
    </a>
  )
}
