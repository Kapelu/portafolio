'use client'
import ServiceCard from '@/components/ServiceCard'
import Skill from '@/components/Skill'
import { skills } from '@/lib/skill'
import Image from 'next/image'
import Link from 'next/link'

export default function Inicio() {
  const pdfURL = '/DanielCalderon-CV.pdf'

  return (
    <article className='mx-auto flex min-h-dvh max-w-7xl flex-col px-6 py-12'>
      <section className='flex flex-col items-center text-center'>
        <h1 className='font-gentium text-[10vw] font-bold text-cyan lg:mt-8 lg:text-[4vw]'>
          Daniel Calderón
        </h1>

        <h2 className='mt-2 text-[4vw] text-text lg:text-[1.5vw]'>
          Desarrollador Full Stack
        </h2>

        <Image
          width={320}
          height={320}
          src='/kapelu.png'
          alt='Daniel Calderón'
          priority
          className='mt-10 rounded-full border-4 border-border object-cover shadow-xl'
        />

        <div className='mt-10 flex flex-wrap justify-center gap-4'>
          <Link
            href={pdfURL}
            download='cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-lg border border-border bg-muted px-6 py-3 font-semibold text-title transition hover:bg-background'>
            Descargar CV
          </Link>
        </div>
      </section>

      <section className='font-gentium mt-20 grid gap-16 lg:grid-cols-3'>
        <article>
          <h2 className='mb-6 text-3xl font-bold text-title'>Quién soy</h2>

          <div className='space-y-6 text-lg leading-relaxed text-text'>
            <p>
              Soy un desarrollador <i>web</i> autodidacta. Durante los últimos
              tres años he dedicado gran parte de mi tiempo a adquirir
              habilidades y conocimientos en el campo del desarrollo <i>web</i>.
            </p>

            <p>
              Soy una persona dedicada y comprometida con mi trabajo y estoy
              dispuesto a aprender y adquirir nuevos conocimientos para mejorar
              mis habilidades como programador. Estoy más orientado al{' '}
              <i>Frontend</i>, pero también hago <i>Backend</i>.
            </p>

            <p>
              Me gusta enfrentar nuevos desafíos y encontrar soluciones
              creativas a los problemas que se presentan.
            </p>

            <p>
              Estoy emocionado de tener la oportunidad de unirme a un equipo y
              contribuir al crecimiento de una empresa. Creo que esta es una
              oportunidad ideal para seguir creciendo y aprendiendo.
            </p>
          </div>
        </article>

        <article>
          <h2 className='mb-8 text-center text-3xl font-bold text-title'>
            Mis habilidades
          </h2>

          <div className='space-y-8'>
            {skills.map((skill) => (
              <Skill key={skill.label} {...skill} />
            ))}
          </div>
        </article>

        <article>
          <h2 className='mb-8 text-3xl font-bold text-title'>
            ¿Qué te ofrezco?
          </h2>

          <div className='space-y-10'>
            <ServiceCard
              title='Diseño Web'
              description='Prototipo y maqueto tus diseños estáticos y los convierto en increíbles sitios y aplicaciones web responsivas, óptimas y accesibles.'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='size-8 fill-cyan'>
                <path d='M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z' />
              </svg>
            </ServiceCard>

            <ServiceCard
              title='Programación Web'
              description='Desarrollo sitios y aplicaciones web. Te ayudo a construir tu proyecto de principio a fin: Frontend, Backend y Base de Datos.'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='size-8 fill-cyan'>
                <path d='M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z' />
                <path d='M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z' />
              </svg>
            </ServiceCard>

            <ServiceCard
              title='SEO'
              description='Optimizo tus sitios y aplicaciones web para mejorar su posicionamiento orgánico en buscadores.'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='size-8 fill-cyan'>
                <path d='M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z' />
                <path d='M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z' />
              </svg>
            </ServiceCard>
          </div>
        </article>
      </section>
    </article>
  )
}
