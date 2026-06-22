'use client'

import { useState } from 'react'
import { Logo } from '../shared/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Container } from './Container'

const links = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Acerca', id: 'acerca' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Portafolio', id: 'portafolio' },
  { label: 'Contacto', id: 'contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    history.replaceState(null, '', `#${id}`)
    setIsMenuOpen(false)
  }

  return (
    <header className='fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background text-title lg:sticky lg:top-0 lg:border-b lg:border-t-0'>
      <Container>
        <div className='grid h-16 grid-cols-3 items-center lg:flex lg:justify-between'>
          {/* Logo */}
          <div className='justify-self-start'>
            <Logo className='transition-opacity hover:opacity-50' />
          </div>

          {/* Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='justify-self-center rounded-lg border border-border bg-background p-1 text-title lg:hidden'
            aria-label='Abrir menú'>
            {isMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                className='fill-title'>
                <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                className='fill-title'>
                <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
              </svg>
            )}
          </button>

          {/* Theme Toggle móvil */}
          <div className='justify-self-end lg:hidden'>
            <ThemeToggle />
          </div>

          {/* Navegación desktop */}
          <div className='hidden items-center gap-10 lg:flex'>
            <nav className='flex gap-8'>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                  className='rounded-full px-4 py-0.5 font-semibold text-title transition-all duration-300 hover:bg-muted'>
                  {link.label}
                </a>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>

        {/* Menú móvil */}
        <nav
          className={`fixed bottom-16 left-0 z-40 w-full border-t border-border bg-background transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
              className='block w-full p-4 text-center text-xl font-bold text-title transition hover:bg-muted'>
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
