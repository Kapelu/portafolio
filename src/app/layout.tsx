import { ComeBack } from '@/components/ComeBack'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { AppConfig } from '@/lib/AppConfig'
import type { Metadata } from 'next'
import { Gentium_Book_Plus } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),

  title: {
    default: AppConfig.title,
    template: '%s | Daniel Calderon',
  },

  description: AppConfig.description,

  keywords: AppConfig.keywords,

  authors: [
    {
      name: AppConfig.author,
    },
  ],

  creator: AppConfig.author,

  publisher: AppConfig.author,

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: AppConfig.url,
  },

  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,

    url: AppConfig.url,

    siteName: AppConfig.site_name,

    locale: AppConfig.locale,

    type: 'website',

    images: [
      {
        url: AppConfig.image,
        width: 1200,
        height: 630,
        alt: AppConfig.title,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: AppConfig.title,

    description: AppConfig.description,

    creator: '@kapelu',

    images: [AppConfig.image],
  },

  category: 'technology',

  applicationName: AppConfig.site_name,

  referrer: 'origin-when-cross-origin',
}

const gentium = Gentium_Book_Plus({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'],
  variable: '--font-gentium',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={`dark ${gentium.variable}`}
      suppressHydrationWarning>
      <body>
        <Providers>
          <Hero />
          <ComeBack />

          <main className='mb-8'>
            <Header />
            <Container>{children}</Container>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
