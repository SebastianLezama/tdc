import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { VStack, Image, Heading, Spacer, Divider } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import NavBar from './components/navbar/NavBar'
import MobileNavBar from './components/navbar/MobileNavBar'

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
          <MobileNavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
