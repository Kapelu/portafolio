import Image from 'next/image'

export default function Hero() {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      <Image
        src='/background.svg'
        alt='Pattern'
        fill
        priority
        className='object-cover opacity-30'
      />

      <div className='absolute inset-0 bg-black/20' />
    </div>
  )
}
