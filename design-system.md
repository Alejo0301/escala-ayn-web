# Design System — Escala AYN Constructora S.A.S.

**Versión:** 1.0  
**Estado:** Guía maestra activa  
**Alcance:** Sitio web de marketing (React + Vite, CSS custom properties, sin Tailwind)

---

## 1. Identidad de marca

### Posicionamiento
Escala AYN es una constructora boutique santandereana. No compite en precio ni en volumen — compite en **criterio técnico, trazabilidad digital y rigor profesional**. Su cliente objetivo es alguien que ya sabe lo que quiere: un profesional, un empresario o una entidad que valora la precisión sobre la promesa.

### Atributos visuales
| Atributo | Expresión visual |
|---|---|
| **Técnico** | Grids de referencia, SVGs de planos, numeración de servicios, detalles de 1px |
| **Elegante** | Mucho espacio negativo, tipografía display serif, dorado controlado |
| **Confiable** | Paleta sobria, sin gradientes de neón, sin ilustraciones decorativas |
| **Boutique** | Escala humana, copy directo, ausencia de clichés del sector |
| **Regional** | Mención de Santander con orgullo, sin folklorismo |

### Tono de voz
- Frases cortas, construcción activa.
- Primera persona del plural solo cuando habla el equipo ("Nuestro equipo…").
- Nunca frases de relleno tipo "somos apasionados" o "tu sueño hecho realidad".
- Los títulos de sección rompen en líneas calculadas — no se cortan por accidente.

---

## 2. Sistema de color

Fuente de verdad: `src/index.css` (CSS custom properties en `:root`).

### Paleta primaria

| Token | Valor | Uso |
|---|---|---|
| `--gold` | `#D4AF37` | Acento primario. CTA principal, números de servicio, eyebrows, decoración estructural |
| `--gold-light` | `#e8cc6a` | Estados hover de elementos gold, highlights de texto |
| `--gold-dark` | `#b8942a` | Hover de botones gold, tags de proyecto |
| `--black` | `#111111` | Fondos oscuros (hero, CTA band, footer nav), texto de mayor jerarquía |
| `--white` | `#FFFFFF` | Fondos de secciones claras, texto sobre negro |

### Paleta secundaria

| Token | Valor | Uso |
|---|---|---|
| `--beige` | `#C2B280` | Elemento de conexión con materiales físicos (concreto, piedra). Uso discreto |
| `--beige-light` | `#f0ece0` | Fondos de secciones alternas (Nosotros, hover de cards). Nunca como color de texto |
| `--gray-dark` | `#2a2a2a` | Color de texto de cuerpo por defecto |
| `--gray-mid` | `#7A7A7A` | Texto secundario, descripciones, captions |
| `--gray-light` | `#e8e8e8` | Bordes, separadores, fondos de grid |

### Reglas de uso de color

**Contraste mínimo (WCAG AA):**
- Texto cuerpo sobre blanco: `--gray-dark` (#2a2a2a) → 14.7:1 ✓
- Texto secundario sobre blanco: `--gray-mid` (#7A7A7A) → 4.6:1 ✓
- `--gold` (#D4AF37) sobre negro (#111): usar solo para acento decorativo, no para texto de cuerpo (ratio 6.2:1 — admisible para tamaños grandes)
- Texto blanco sobre negro: 18.1:1 ✓

**Alternancia de secciones (ritmo de página):**
```
Hero          → --black (fondo oscuro)
Servicios     → --white
Nosotros      → --beige-light
Proyectos     → --white
CTA Band      → --black
Footer        → #0a0a0a (negro profundo)
```
Este patrón `oscuro → claro → cálido → claro → oscuro → muy oscuro` es el esqueleto rítmico del sitio. Mantenerlo en cualquier nueva sección.

**Prohibido:**
- Introducir colores fuera de la paleta de tokens.
- Usar `--gold` como color de fondo de secciones completas.
- Usar `--beige-light` como color de texto.
- Gradientes de color multi-tono (solo se admite `linear-gradient` de un color hacia `transparent`).

---

## 3. Tipografía

### Fuentes cargadas (`index.html` → Google Fonts)

```
Cormorant Garamond: ital,wght@0,300;0,400;0,500;0,600;1,300;1,400
DM Sans: wght@300;400;500
```

| Token | Fuente | Rol |
|---|---|---|
| `--font-display` | Cormorant Garamond, Georgia, serif | Títulos de sección, nombre de marca, H1–H3 |
| `--font-body` | DM Sans, system-ui, sans-serif | Cuerpo de texto, UI (botones, labels, tags, nav) |

### Escala tipográfica

| Elemento | Font | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| H1 Hero | Display | `clamp(42px, 5vw, 68px)` | 300 | — | 1.05 |
| H2 Sección | Display | `clamp(36px, 4vw, 52px)` | 400 | `-0.02em` | 1.1 |
| H3 Card | Display | 20–22px | 500 | — | 1.2 |
| Eyebrow / Tag | Body | 11–12px | 500 | `0.16–0.18em` | — |
| Body | Body | 15–16px | 400 | — | 1.7–1.8 |
| Caption / Desc | Body | 13–14px | 400 | — | 1.7 |
| UI / Botón | Body | 12–15px | 500 | `0.06–0.08em` | — |
| Número estadístico | Display | 28px | 600 | — | 1 |

### Reglas tipográficas

- Los `em` en JSX son **itálica dorada**: `font-style: italic; color: var(--gold)`. Este es el único tratamiento especial de texto en títulos.
- Los eyebrows y tags de sección van en mayúscula con `letter-spacing` amplio. Nunca en negrita pesada.
- Texto de cuerpo: máximo 65–70 caracteres por línea. El token `--container-width: 1200px` con columnas en grid lo garantiza orgánicamente.
- No combinar más de dos pesos en la misma sección. En secciones claras: Display 400 (títulos) + Body 400 (cuerpo). En hero oscuro: Display 300 (títulos) + Body 400/500 (sub y buttons).
- Nunca `text-transform: uppercase` en Display/Garamond — solo en labels Body de UI.

---

## 4. Espaciado y layout

### Contenedor

```css
.container {
  max-width: 1200px;   /* --container-width */
  padding: 0 40px;     /* → 24px en mobile */
}
```

### Secciones

```css
.section { padding: 100px 0; }   /* --section-pad */
```
Secciones de alto impacto (Hero, CTA Band): pueden extender padding a 120–140px.  
Nunca bajar de 80px entre secciones en desktop.

### Sistema de grids

| Grid | Columnas | Gap | Usado en |
|---|---|---|---|
| Hero | `1fr 1fr` | 80px | Hero split content/visual |
| Servicios | `repeat(3, 1fr)` | 1px (borde) | Grid de cards con divisor |
| Nosotros | `1fr 1fr` | 80px | Diagrama + contenido |
| Proyectos | `repeat(3, 1fr)` | 24px | Galería de proyectos |
| Footer | `1.5fr 2fr` | 80px | Brand + columnas |

Breakpoints de quiebre:
- `900px` — grids de 2 columnas colapsan a 1
- `768px` — navbar cambia a hamburger, CTAs se apilan
- `540px` — grids de 2 columnas colapsan a 1

### Escala de z-index

| Capa | Valor | Elemento |
|---|---|---|
| Base | 0 | Contenido de página |
| Decorativa | 1–2 | Badges, accents, overlays internos |
| Navbar | 100 | Header fijo |
| Menú mobile | 200 | (si se implementa modal/drawer) |

---

## 5. Componentes base

### Botones

Sistema cerrado — **no crear variantes nuevas sin razón justificada.**

| Clase | Fondo | Borde | Texto | Hover |
|---|---|---|---|---|
| `.btn--gold` | `--gold` | `--gold` | `--black` | `--gold-dark` + sombra gold |
| `.btn--outline` | transparent | `--black` | `--black` | Fondo `--black`, texto `--white` |
| `.btn--white` | `--white` | `--white` | `--black` | transparent + texto `--white` |

Modificadores de tamaño:
- `.btn--sm` → 10px/20px, 12px font
- `.btn--lg` → 18px/40px, 15px font
- Default → 14px/28px

Propiedades fijas en todos los botones:
```css
border-radius: 2px;               /* Ángulo casi recto, no pill */
text-transform: uppercase;
letter-spacing: 0.08em;
transition: all 0.25s var(--ease);
cursor: pointer;
```

El `border-radius: 2px` es una decisión de marca — mantenerlo en todo elemento interactivo. Es la tensión entre lo técnico (recto) y lo humano (no 0px).

### Cards de servicio

Estructura: icono SVG (44×44px, `color: --gold`) → número (eyebrow) → título → descripción.  
Decoración hover: borde inferior de 2px en `--gold` que crece de izquierda a derecha (`scaleX` desde 0).  
Fondo hover: `--beige-light`.  
El grid de 1px de separación usa el fondo del contenedor como "borde" — solución sin `border` individual.

### Cards de proyecto

Badge de tipo: `--gold` sólido, esquina superior izquierda.  
Hover de card: `translateY(-4px)` + sombra suave. Solo vertical — nunca escalar (`scale`).  
Placeholder de imagen: SVG de plano isométrico simplificado con `--beige`.

### Sección header pattern

```
[section__tag]    → eyebrow en gold, mayúsculas
[section__title]  → H2 display con énfasis italic-gold
[section__sub]    → descripción en gray-mid, centrada, max-width 560px
```
Margen inferior antes del contenido: `64px`.

---

## 6. Iconografía

- **Solo SVGs inline** — sin librerías externas, sin emojis como íconos.
- `viewBox="0 0 40 40"`, `strokeWidth="1.5"`, `fill="none"`, `stroke="currentColor"`.
- Color heredado vía `color: var(--gold)` en el contenedor — el SVG no define color propio.
- El trazo de 1.5px es deliberado: transmite precisión técnica, como en planos de ingeniería.
- Excepción permitida en el `📍` del footer — pero en futuros rediseños reemplazar por SVG.

---

## 7. Animación y motion

### Principios

- **Entrada de secciones:** `IntersectionObserver` con clase `--visible`. Transición de `opacity 0→1` + `translateY 32→0px`.
- **Duración:** 0.9–1.0s para entradas de sección. 0.2–0.3s para microinteracciones de UI.
- **Easing:** siempre `var(--ease)` = `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out dramático — entrada rápida, frenado suave).
- **Delay:** el lado visual del hero tiene `0.2s` de retraso respecto al contenido. Este patrón de escalonado se puede replicar en otras secciones con contenido dividido.
- **Scroll line:** animación de 2s infinita en el hero. La única animación en loop del sitio.

### Reglas de motion

- Usar solo `transform` y `opacity` para animar — nunca `width`, `height`, `padding`, `top`.
- Los hovers de card usan `translateY` (vertical), nunca `scale` (evita layout shift).
- Respetar `prefers-reduced-motion`: las transiciones de entrada deben desactivarse si el usuario lo solicita.
- No animar más de 2 propiedades simultáneamente en un mismo elemento.

---

## 8. Elementos decorativos estructurales

Estos elementos funcionan como "firma visual" de la marca — referencias a los planos técnicos y la cuadrícula de construcción.

| Elemento | Descripción | Dónde se usa |
|---|---|---|
| **Grid de 12 columnas** | Lines verticales, `opacity: 0.035`, blancas sobre negro | Hero (overlay) |
| **Accent de esquinas** | Dos ángulos de 60×60px en `--gold` (top-right + bottom-left) | Frame del hero |
| **Diagrama SVG de plano** | Sección estilo corte arquitectónico con grid y cotas | Nosotros visual |
| **Grid de puntos / líneas** | `background-image` con líneas doradas, `opacity: 0.04` | CTA Band |
| **Separador de 1px** | `--gold-dark` o `rgba(gold, 0.15)` | Footer top border |

Estos decorativos deben tener siempre `aria-hidden="true"` y `pointer-events: none`.

### Patrón de frame de imagen
El contenedor de imagen del hero usa:
- `border: 1px solid rgba(212, 175, 55, 0.2)` — borde sutil dorado
- `border-radius: 2px`
- `aspect-ratio: 4/3`
- Accent de esquinas SVG (no imagen, CSS/SVG puro)

Este tratamiento es reutilizable para cualquier imagen en el sitio.

---

## 9. Responsive

### Filosofía

Mobile-aware, no mobile-first. El sitio se diseña primero en desktop (1200px) y se adapta hacia abajo. El contenido nunca se oculta en mobile — se reorganiza.

### Breakpoints

| Nombre | Valor | Comportamiento |
|---|---|---|
| Large desktop | ≥ 1200px | Layout completo, fuentes en clamp máximo |
| Desktop | 900px–1199px | Fuentes en clamp medio, grids intactos |
| Tablet | 769px–899px | Grids colapsan a 1–2 columnas |
| Mobile large | 541px–768px | Navbar → hamburger, CTAs apiladas |
| Mobile small | ≤ 540px | Grids de 1 columna, padding 24px |

### Comportamientos específicos

- **Navbar:** a `≤768px` → drawer lateral de 280px con fondo blanco, padding interno.
- **Hero:** a `≤900px` → 1 columna, visual debajo del contenido, scroll line oculta.
- **Servicios:** `900px` → 2col, `540px` → 1col.
- **Nosotros:** `900px` → 1col (visual primero, contenido abajo).
- **Proyectos:** `900px` → 2col, `540px` → 1col.
- **Footer:** `900px` → 1col, cols de 2, luego 1.

---

## 10. Accesibilidad

- Contraste AA garantizado en todas las combinaciones de texto/fondo del sistema.
- Todos los botones icon-only (hamburger) llevan `aria-label`.
- Imágenes con `alt` descriptivo.
- Todos los decorativos con `aria-hidden="true"`.
- Focus states: heredados del navegador — no eliminar `outline` sin reemplazar por alternativa visible.
- Orden de tabulación: sigue el orden visual (izquierda a derecha, arriba a abajo).
- `prefers-reduced-motion`: implementar cuando se agreguen animaciones de entrada en nuevas secciones.

---

## 11. Qué NO hacer (anti-patrones del proyecto)

| Anti-patrón | Razón |
|---|---|
| Gradientes de múltiples colores de marca | Rompe la sobriedad; la marca no es "tech startup colorida" |
| Sombras grandes y oscuras en cards de sección clara | El sitio usa sombras solo para elevación mínima |
| Texto de cuerpo en `--gold` | El dorado es acento, no color funcional de lectura |
| Animaciones de entrada con `scale` | Genera layout shift y sensación de juguetón |
| Más de 2 CTAs por sección | Cada sección tiene un único objetivo de conversión |
| `border-radius` mayor a 4px en elementos de UI | La marca es angular; las curvas grandes no encajan |
| Emojis como iconos de UI | Usar SVG inline en su lugar |
| Colores hardcodeados fuera de los tokens | Rompe la consistencia; todo pasa por `:root` |
| Sans-serif en títulos principales | Los H1–H3 son siempre `--font-display` |
| Imágenes sin reserva de espacio (aspect-ratio) | Genera layout shift al cargar |

---

## 12. Fases del rediseño (orden recomendado)

Esta guía maestras se implementa por fases, editando mínimos archivos por iteración:

| Fase | Alcance | Archivos |
|---|---|---|
| **A — Tokens** | Ajustar/ampliar variables en `:root` si se requieren nuevos valores | `src/index.css` |
| **B — Estilos de sección** | Mejorar o rediseñar secciones en orden de impacto visual | `src/App.css` |
| **C — Estructura JSX** | Solo si cambia HTML, datos o se extraen componentes | `src/App.jsx` |
| **D — Extracción** | Mover secciones a `src/components/sections/`, datos a `src/data/` | Nuevos archivos |

**Regla de economía:** no pasar a la siguiente fase hasta agotar lo que se puede hacer en la anterior.

---

*Este documento refleja el estado del sistema a partir de la estructura del commit `d9cb3c5` (rediseño inicial). Actualizar cuando un cambio estructural o de paleta sea aprobado y mergeado.*
