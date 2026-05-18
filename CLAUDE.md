# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint` — ESLint across all `.js/.jsx` (flat config in `eslint.config.js`)

There is no test runner configured.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Node 22 and publishes `dist/` to GitHub Pages. The site is served from a subpath, so `vite.config.js` sets `base: '/escala-ayn-web/'` — keep this in sync if the repo is ever renamed or moved to a custom domain, otherwise asset URLs break in production.

## Architecture

Single-page marketing site for **Escala AYN Constructora S.A.S.** (Santander, Colombia). Content is Spanish; preserve language and tone (technical-construction copy) when editing.

The whole site currently lives in **[src/App.jsx](src/App.jsx)** as a sequence of small section components (`Navbar`, `Hero`, `Servicios`, `Nosotros`, `Proyectos`, `CTABand`, `Footer`) composed by the default `App` export. Navigation is anchor-based (`#servicios`, `#nosotros`, `#proyectos`, `#contacto`) — there is no router yet, even though `react-router-dom` is in `package.json`.

Section data (services, projects) is defined as plain arrays at the top of `App.jsx` (e.g. `SERVICIOS`). Icons are inline SVGs colocated with their data entries — when adding a service, follow the existing `{ num, title, desc, icon }` shape and keep the SVG inline.

Empty scaffold folders exist under `src/` (`components/{common,layout,sections}`, `pages`, `routes`, `data`, `styles`, `utils`) signalling the intended split. If extracting a section out of `App.jsx`, prefer `src/components/sections/<Name>.jsx` and lift its constants into `src/data/` rather than inventing a new layout.

## Styling

Two-file CSS system, no CSS-in-JS, no Tailwind:

- **[src/index.css](src/index.css)** — design tokens as CSS custom properties (`--gold #D4AF37`, `--beige #C2B280`, `--black #111`, fonts `Cormorant Garamond` display + `DM Sans` body, `--container-width 1200px`, `--ease` cubic-bezier). Also the global reset and the `.container` utility. Brand fonts are loaded from Google Fonts in [index.html](index.html).
- **[src/App.css](src/App.css)** — all component styles using BEM-ish naming (`.hero__title`, `.servicio-card__num`, `.btn--gold`).

When adding UI, reuse the existing tokens and button modifiers (`.btn`, `.btn--gold`, `.btn--outline`, `.btn--white`, `.btn--sm`, `.btn--lg`) instead of introducing new color values.
