'use client'
import Image from 'next/image'
import Link from 'next/link'
import '../style/inicio.css'

export default function Inicio() {
	const pdfURL = '/DanielCalderon-CV.pdf'

	return (
		<article className='hero-image'>
			<div className='hero-image-opacity contain'>
				<section>
					<h1 className='inicio-title'>Daniel Calderón</h1>
					<h5 className='inicio-subtitle'>
						Desarrollador Full Stack
					</h5>
					<Image
						className='foto-perfil'
						width='320'
						height='320'
						src='/kapelu.webp'
						alt='Daniel Calderon'
					/>
					<br />
					<br />
					<br />
					<Link className='btn' href='#contacto'>
						Contáctame
					</Link>
					<br />
					<br />
				</section>
				<section className='services'>
					<div className='container'>
						<article className='section'>
							<h2 className='section-title'>Quién soy</h2>
							<p className='text-left text-lg-left'>
								Soy un desarrollador <i>web</i> autodidacta,
								durante los ultimos 3 años he dedicado gran
								parte de mi tiempo a adquirir habilidades y
								conocimientos en el campo del desarrollo{' '}
								<i>web</i>.
								<br />
								<br />
								Una persona dedicada y comprometida con mi
								trabajo, y estoy dispuesto a aprender y adquirir
								nuevos conocimientos para mejorar mis
								habilidades como programador. Estoy más
								orientado al <i>Frontend</i>, pero también hago{' '}
								<i>Backend</i>.
								<br />
								<br />
								Me gusta enfrentar nuevos desafíos y encontrar
								soluciones creativas a los problemas que se
								presentan.
								<br />
								<br />
								Estoy emocionado de tener la oportunidad de
								unirme a un equipo y contribuir al crecimiento
								de una empresa. Creo que esta va a ser una
								oportunidad ideal para seguir creciendo y
								aprendiendo, y estoy dispuesto a trabajar
								arduamente para alcanzar los objetivos de la
								empresa.
							</p>
						</article>
						<article className='section'>
							<h2 className='text-center section-title section text-lg-centert'>
								Mis habilidades
							</h2>
							<div className='progress'>
								<p>
									<b>
										Diseño <i>Web</i>
									</b>
									<b>85%</b>
								</p>
								<progress
									value='85'
									min='0'
									max='100'
								></progress>
							</div>
							<div className='progress'>
								<p>
									<b>
										Desarrollo <i>Web Frontend</i>
									</b>
									<b>90%</b>
								</p>
								<progress
									value='90'
									min='0'
									max='100'
								></progress>
							</div>
							<div className='progress'>
								<p>
									<b>
										Desarrollo <i>Web Backend</i>
									</b>
									<b>75%</b>
								</p>
								<progress
									value='75'
									min='0'
									max='100'
								></progress>
							</div>
							<div className='progress'>
								<p>
									<b>
										<i>WPO</i> y <i>SEO</i>
									</b>
									<b>80%</b>
								</p>
								<progress
									value='80'
									min='0'
									max='100'
								></progress>
							</div>
							<br />
							<br />
							<br />
							<Link
								className='btn'
								href={pdfURL}
								download='cv.pdf'
								target='_blank'
								rel='noopener noreferrer preload'
							>
								Descargar CV
							</Link>
						</article>
						<article className='section'>
							<div className='container full-lg-screen'>
								<h2 className='section-title'>
									¿Qué te ofrezco?
								</h2>
								<article className='service-card'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
									>
										<path d='M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z' />
									</svg>
									<h3>Diseño Web</h3>
									<p className='text-left text-lg-left'>
										Prototipo y maqueto tus diseños
										estáticos y los convierto en increíbles
										sitios y aplicaciones <i>web</i>
										responsivas, óptimas y accesibles.
									</p>
								</article>
								<article className='service-card'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
									>
										<path d='M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z' />
										<path d='M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z' />
									</svg>
									<h3>
										Programación <i>Web</i>
									</h3>
									<p className='text-left text-lg-left'>
										Desarrollo sitios y aplicaciones para
										plataformas
										<i>Web</i>. Te ayudo a construir tu
										proyecto de principio a fin:{' '}
										<i>Frontend</i>, <i>Backend</i> y Base
										de Datos.
									</p>
								</article>

								<article className='service-card'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
									>
										<path d='M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z' />
										<path d='M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z' />
									</svg>
									<h3>
										<i>SEO</i>
									</h3>
									<p className='text-left text-lg-left'>
										<i>Search Engine Optimization</i>,
										optimizo tus sitios y aplicaciones{' '}
										<i>web</i> para que mejoren su posición
										en los buscadores orgánicamente.
									</p>
								</article>
							</div>
						</article>
					</div>
				</section>
			</div>
		</article>
	)
}
