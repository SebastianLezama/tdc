import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import NavBar from './components/navbar/NavBar'
import 'swiper/swiper-bundle.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'e-commerce',
  description: 'Tus cuadros nerds',
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
