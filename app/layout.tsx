import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Footer } from '@/components/footer'
import './globals.css'
import { Header } from '@/components/header'

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
      <body className={GeistSans.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
