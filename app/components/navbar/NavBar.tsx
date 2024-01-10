'use client'
import { Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { desktopNavStyles, navBarStack } from './style'
import Logo from './Logo'
import { navItems } from '@/app/helpers'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <Flex {...desktopNavStyles}>
      <HStack {...navBarStack}>

        <Logo />
        {navItems.map(item => (
          <Box key={item.label}><Link href={item.href}>{item.label}</Link></Box>
        ))}
        <Box>

          <SearchBar />
        </Box>

      </HStack>
      <HStack>
        <Box>Carrito</Box>
        <Box></Box>
      </HStack>

    </Flex>
  )
}

export default NavBar