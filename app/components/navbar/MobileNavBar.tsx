'use client'
import { Box, Divider, Flex, HStack, Heading, Image, Spacer, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { mobileNavStyles, navBarStack } from './style'
import Logo from './Logo'
import { navItems } from '@/app/helpers'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'
import MobileSearchBar from '../search/MobileSearchBar'

type Props = {}

const MobileNavBar = (props: Props) => {
  return (
    <>
      <Flex {...mobileNavStyles}>
        <HStack {...navBarStack}>


          <Box>

            <SearchBar />
          </Box>

        </HStack>
        <HStack>
          <Box>Carrito</Box>
          <Box></Box>
        </HStack>

      </Flex>
      <MobileSearchBar />
    </>
  )
}

export default MobileNavBar