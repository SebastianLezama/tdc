'use client'

import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { ProductsProvider } from './context/store'

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProductsProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ProductsProvider>
  )
}