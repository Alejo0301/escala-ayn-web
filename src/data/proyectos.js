// ── ESC-1 ──────────────────────────────────────────
import esc1Cover       from '../assets/projects/esc1/esc1-cover.jpeg'
import esc1Ext01       from '../assets/projects/esc1/esc1-exterior-01.jpg'
import esc1Ext02       from '../assets/projects/esc1/esc1-exterior-02.jpeg'
import esc1Obra01      from '../assets/projects/esc1/esc1-obra-01.jpg'
import esc1Obra02      from '../assets/projects/esc1/esc1-obra-02.jpg'
import esc1Structure01 from '../assets/projects/esc1/esc1-structure-01.jpg'

// ── CASA 81 ────────────────────────────────────────
import casa81Cover     from '../assets/projects/casa81/casa81-cover.jpeg'
import casa81Ext01     from '../assets/projects/casa81/casa81-exterior-01.jpeg'
import casa81Ext02     from '../assets/projects/casa81/casa81-exterior-02.jpeg'
import casa81Int01     from '../assets/projects/casa81/casa81-interior-01.jpeg'
import casa81Obra01    from '../assets/projects/casa81/casa81-obra-01.jpg'

// ── MONTEREAL ──────────────────────────────────────
import monterealCover  from '../assets/projects/montereal/montereal-cover.jpg.jpg'
import monterealExt01  from '../assets/projects/montereal/montereal-exterior-01.jpg'
import monterealExt02  from '../assets/projects/montereal/montereal-exterior-02.jpg'
import monterealObra01 from '../assets/projects/montereal/montereal-obra-01.jpg'
import monterealStr01  from '../assets/projects/montereal/montereal-structure-01.jpg'

// ── GLAMPING CURITÍ ────────────────────────────────
import glampingCover   from '../assets/projects/glamping-curiti/glamping-cover.jpg'
import glampingExt01   from '../assets/projects/glamping-curiti/glamping-exterior-01.jpeg'
import glampingExt02   from '../assets/projects/glamping-curiti/glamping-exterior-02.jpeg'
import glampingNight01 from '../assets/projects/glamping-curiti/glamping-night-01.jpg'
import glampingPisc01  from '../assets/projects/glamping-curiti/glamping-piscina-01.jpg'

// ── PALMAIRE ───────────────────────────────────────
import palmaireCover   from '../assets/projects/palmaire/palmaire-cover.JPG'
import palmaireHouse01 from '../assets/projects/palmaire/palmaire-house-01.JPG'
import palmaireHouse02 from '../assets/projects/palmaire/palmaire-house-02.JPG'
import palmaireInt01   from '../assets/projects/palmaire/palmaire-interior-01.JPG'
import palmaireSoc01   from '../assets/projects/palmaire/palmaire-social-01.JPG'
import palmaireSoc02   from '../assets/projects/palmaire/palmaire-social-02.jpeg'

export const PROYECTOS = [
  {
    id: 'esc1',
    title: 'ESC-1 Vivienda Multifamiliar',
    location: 'San Gil, Santander',
    year: '2023',
    category: 'Multifamiliar',
    desc: 'Proyecto de vivienda multifamiliar con diseño estructural sismorresistente conforme a NSR-10. Integración de modelado BIM para coordinación multidisciplinaria y control de obra.',
    highlights: ['Diseño estructural', 'BIM', 'Construcción', 'Interventoría'],
    cover: esc1Cover,
    gallery: [esc1Ext01, esc1Ext02, esc1Obra01, esc1Obra02, esc1Structure01],
  },
  {
    id: 'casa81',
    title: 'Casa 81 Balcones Bella Isla',
    location: 'San Gil, Santander',
    year: '2023',
    category: 'Residencial',
    desc: 'Vivienda unifamiliar de alto estándar en el conjunto Balcones Bella Isla. Diseño estructural, licencia de construcción y ejecución de obra con acabados de detalle.',
    highlights: ['Diseño estructural', 'Licencias', 'Remodelación'],
    cover: casa81Cover,
    gallery: [casa81Ext01, casa81Ext02, casa81Int01, casa81Obra01],
  },
  {
    id: 'montereal',
    title: 'Edificio MonteReal',
    location: 'San Gil, Santander',
    year: '2024',
    category: 'Multifamiliar',
    desc: 'Edificio multifamiliar de mediana altura con gestión integral desde el diseño estructural hasta la entrega. Supervisión técnica permanente y control de calidad en cada etapa constructiva.',
    highlights: ['Diseño estructural', 'Construcción', 'Interventoría'],
    cover: monterealCover,
    gallery: [monterealExt01, monterealExt02, monterealObra01, monterealStr01],
  },
  {
    id: 'glamping-curiti',
    title: 'Glamping Curití D&D',
    location: 'Curití, Santander',
    year: '2022',
    category: 'Turístico',
    desc: 'Complejo de glamping en zona rural de Curití. Diseño y construcción de estructuras livianas, zonas sociales, piscina y paisajismo integrado al entorno natural de la región.',
    highlights: ['Diseño estructural', 'Construcción', 'Licencias'],
    cover: glampingCover,
    gallery: [glampingExt01, glampingExt02, glampingNight01, glampingPisc01],
  },
  {
    id: 'palmaire',
    title: 'Palmaire Condominio',
    location: 'San Gil, Santander',
    year: '2024',
    category: 'Condominio',
    desc: 'Condominio residencial con énfasis en espacios sociales y calidad de vida. Gestión BIM, coordinación estructural y acompañamiento técnico durante todo el ciclo del proyecto.',
    highlights: ['BIM', 'Diseño estructural', 'Construcción'],
    cover: palmaireCover,
    gallery: [palmaireHouse01, palmaireHouse02, palmaireInt01, palmaireSoc01, palmaireSoc02],
  },
]
