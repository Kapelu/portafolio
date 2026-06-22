import { Container } from '@/components/layout/Container'
import Hero from '@/components/section/Hero'
import Inicio from './inicio/page'
import Contact from './contacto/page'

export default function Home() {
  return (
    <>
      <section
        id='inicio'
        className='debug-inicio relative scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
          <Hero />
        <Container>
          <Inicio />
        </Container>
      </section>

      <section
        id='acerca'
        className='debug-acerca scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Container>
          {/* Acerca */}
          <h1 className='text-5xl font-bold'>Acerca</h1>
        </Container>
      </section>

      <section
        id='servicios'
        className='debug-servicio scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Container>
          {/* Servicios */}
          <h1 className='text-5xl font-bold'>Servicios</h1>
        </Container>
      </section>

      <section
        id='portafolio'
        className='debug-portafolio scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Container>
          {/* Portfolio */}
          <h1 className='text-5xl font-bold'>Portafolio</h1>
        </Container>
      </section>

      <section
        id='contacto'
        className='debug-contacto scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Container>
          <Contact />
        </Container>
      </section>
    </>
  )
}
