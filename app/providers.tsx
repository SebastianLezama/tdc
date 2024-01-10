'use client'

import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}