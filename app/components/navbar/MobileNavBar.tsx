'use client'
import { Box, Divider, Flex, HStack, Heading, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { mobileNavStyles, navBarStack } from './style'
import Logo from './Logo'
import { navItems } from '@/app/helpers'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'
import MobileSearchBar from '../search/MobileSearchBar'
import { mobileSearchWrapperProps } from '../search/style'

type Props = {}

const MobileNavBar = (props: Props) => {
  return (
    <>
      <Flex {...mobileNavStyles}>
        <Text>Menu</Text>
      </Flex>

      {/* <Box {...mobileSearchWrapperProps}> */}
      <MobileSearchBar />
      {/* </Box> */}
    </>
  )
}

export default MobileNavBar