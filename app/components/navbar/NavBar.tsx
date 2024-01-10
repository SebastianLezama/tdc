'use client'
import { Box, Divider, Flex, HStack, Heading, Image, Spacer, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { desktopNavStyles, navBarStack } from './style'
import Logo from './Logo'
import { navItems } from '@/app/helpers'
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <Flex {...desktopNavStyles}>
      <HStack {...navBarStack}>

        <Logo />
        {navItems.map(item => (
          <Box key={item.label}><Link href={item.href}>{item.label}</Link></Box>
        ))}
        <Box>Search</Box>

      </HStack>
      <HStack>
        <Box>Carrito</Box>
        <Box></Box>
      </HStack>

    </Flex>
  )
}

export default NavBar