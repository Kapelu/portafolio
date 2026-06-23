import Inicio from './pages/inicio'
import Portafolio from './pages/portafolio'
import Contacto from './pages/contacto'

export default function Home() {
	return (
		<>
			<section id='inicio' className='inicio'>
                <Inicio />
			</section>
			<section id='portafolio'  className="portfolio section">
                <Portafolio />
            </section>
            <section id='contacto' className='contact section'>
                <Contacto />
            </section>
		</>
	)
}
