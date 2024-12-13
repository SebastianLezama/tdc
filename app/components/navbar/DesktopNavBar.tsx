'use client'
import { Box, Button, Flex, HStack, Image, Select } from '@chakra-ui/react'
import React from 'react'
import { desktopNavStyles, navBarStack } from './style'
import Logo from './Logo'
import { categories, navItems } from '@/app/helpers'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'
import { useRouter } from 'next/navigation'

type Props = {}

const DesktopNavBar = (props: Props) => {
  const router = useRouter()
  return (
    <Flex {...desktopNavStyles}>
      <HStack {...navBarStack}>
        <Logo />

        {navItems.map(item => (
          <Box key={item.label}><Link href={item.href}>{item.label}</Link></Box>
        ))}

        <Box>
          <Select placeholder='Categorias' onChange={(e)=> !e.target.value ? router.push("/products", {scroll: false}): router.push(`/products/?category=${e.target.value}`, {
            scroll: false,
          })}>
            {categories.map(category => <option key={category} value={category}>{category}
            </option>)}
          </Select>
        </Box>
      </HStack>

        <Box >
          <SearchBar />
        </Box>

      <HStack>
        <Button variant={"ghost"} p={0}>
          <Image alt='favoritos' src={"https://icongr.am/fontawesome/heart-o.svg?size=28&color=5592aa"} />
        </Button>
        <Button variant={"ghost"} p={0}>
          <Image alt='carrito' src={"https://icongr.am/fontawesome/shopping-cart.svg?size=30&color=5592aa"} />
        </Button>
      </HStack>

    </Flex>
  )
}

export default DesktopNavBar