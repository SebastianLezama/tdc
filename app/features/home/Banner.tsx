'use client'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { bannerButtonProps, bannerHeadingProps, bannerProps } from './style'
import Link from 'next/link'

type Props = {}

const Banner = (props: Props) => {
  return (
    <Flex {...bannerProps}>
      <Box>
        <Heading {...bannerHeadingProps}>Todos los cuadros
        </Heading>
        <Heading {...bannerHeadingProps}>
          un solo lugar
        </Heading>
      </Box>
      <Link href={"/products"}>
        <Button  {...bannerButtonProps}>Ver productos</Button>
      </Link>
    </Flex>
  )
}

export default Banner