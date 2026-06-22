import Image from "next/image"
import { Button } from "@/components/ui/Button"

export default function Inicio() {
  const pdfURL = '/DanielCalderon-CV.pdf'

  return (
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
        className='mt-10 rounded-full border-2 border-border object-cover shadow-xl'
      />

      <div className='mt-10 flex flex-wrap justify-center gap-4'>
        <Button
          href={pdfURL}
          download='cv.pdf'
          target='_blank'
          rel='noopener noreferrer'
          variant='secondary'
          size='lg'>
          Descargar CV
        </Button>

        <Button href='#contacto' variant='primary' size='lg'>
          Contactarme
        </Button>
      </div>
    </section>
  )
}
