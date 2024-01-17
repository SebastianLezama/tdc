'use client'
import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { desktopNavStyles, navBarStack } from './style'
import Logo from './Logo'
import { navItems } from '@/app/helpers'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'

type Props = {}

const DesktopNavBar = (props: Props) => {
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
        <Button variant={"ghost"} p={0}>
          <Image alt='whatsapp' src={"https://icongr.am/fontawesome/heart-o.svg?size=28&color=5592aa"} />
        </Button>
        <Button variant={"ghost"} p={0}>
          <Image alt='whatsapp' src={"https://icongr.am/fontawesome/shopping-cart.svg?size=30&color=5592aa"} />
        </Button>
      </HStack>

    </Flex>
  )
}

export default DesktopNavBar