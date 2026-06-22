import Image from 'next/image'
import ContactForm from '@/components/cards/ContactForm'

export default function Contact() {
  return (
    <section className='py'>
      <div className='container mx-auto px-5'>
        <div className='mx-auto mb-12 flex max-w-3xl flex-col text-center'>
          <div className='text-center '>

            <Image
              width={320}
              height={320}
              src='/kapelu.png'
              alt='Daniel Calderón'
              priority
              className='mt-10 mx-auto mb-18 rounded-full border-2 border-border object-cover shadow-xl'
            />

            <p className='mx-auto max-w-2xl text-muted-foreground'>
              Hay mucho margen de mejora, las contribuciones son bienvenidas.
            </p>

            <p className='mx-auto max-w-2xl text-muted-foreground'>
              ¿Tienes una consulta, una propuesta de trabajo, o simplemente
              quieres saludar?
            </p>

            <p className='mx-auto max-w-2xl text-muted-foreground'>
              Completa el formulario y te responderé lo antes posible.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
