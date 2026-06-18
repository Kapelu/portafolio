// components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='fixed inset-0 -z-10 h-dvh w-full overflow-hidden'>
      {/* Fondo principal */}
      <Image
        src='/imagen1.png'
        alt='Background'
        fill
        priority
        className='object-cover'
      />

      {/* Patrón SVG encima */}
      <Image
        src='/background.svg'
        alt='Pattern'
        fill
        priority
        className='object-cover opacity-30'
      />

      {/* Overlay opcional */}
      <div className='absolute inset-0 bg-black/20' />
    </div>
  )
}
