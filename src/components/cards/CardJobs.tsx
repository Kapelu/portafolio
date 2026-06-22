import Image from 'next/image'
import Link from 'next/link'
import { Job } from '@/lib/jobs'

type Props = {
  job: Job
}

export default function CardJobs({ job }: Props) {
  return (
    <Link
      href={job.enlace}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative block aspect-square overflow-hidden rounded-xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
      {/* Imagen */}
      <Image
        src={job.imagen}
        alt={job.titulo}
        fill
        className='object-cover transition duration-700 group-hover:scale-110'
        sizes='(max-width:768px) 100vw,
               (max-width:1024px) 50vw,
               33vw'
      />

      {/* Overlay */}
      <div
        className='absolute inset-0 flex items-center justify-center
        bg-black/90 p-4 opacity-0 transition-all duration-500
        group-hover:opacity-100'>
        <div
          className='flex h-full w-full flex-col justify-center
          rounded-lg border border-white p-5 text-center text-white'>
          <h3 className='text-xl font-bold'>{job.titulo}</h3>

          <p className='mt-3 line-clamp-3 text-sm text-gray-200'>
            {job.descripcion}
          </p>

          <div className='mt-4 space-y-1 text-xs'>
            <p>
              <span className='font-semibold'>Fecha:</span> {job.fecha}
            </p>

            <p>
              <span className='font-semibold'>Tecnologías:</span> {job.tipo}
            </p>
          </div>

          <div className='mt-4'>
            <span
              className='rounded-md border border-white/30 px-3 py-1
              text-xs transition group-hover:bg-white/10'>
              Ver proyecto →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
