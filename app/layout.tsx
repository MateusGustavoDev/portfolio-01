import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { ScreenWidthProvider } from '@/context/screen-width'

const poppins = Poppins({
  weight: ['100', '200', '400', '600', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Mateus Gustavo',
  description: 'Desenvolvedor front-end React',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" sizes="" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} bg-base`}>
        <ScreenWidthProvider>
          <Header />
          {children}
        </ScreenWidthProvider>
      </body>
    </html>
  )
}
