'use client'
import { Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavStyles, navBarStack } from './style'
import Logo from './Logo'
import { navItems } from '@/app/helpers'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <Box h={"100px"}>
      <Box {...NavStyles}>
        <DesktopNavBar />
        <MobileNavBar />
      </Box>
    </Box>
  )
}

export default NavBar