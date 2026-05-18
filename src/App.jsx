import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Servicios from './components/sections/Servicios'
import Nosotros from './components/sections/Nosotros'
import Proyectos from './components/sections/Proyectos'
import CTABand from './components/sections/CTABand'
import Footer from './components/sections/Footer'

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
