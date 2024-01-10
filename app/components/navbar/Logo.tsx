import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <Text color={"primary"} fontSize={"lg"} fontWeight={"bold"}>TIENDA
        <Text as={"span"} color={"secondary.500"} fontWeight={"700"}>DE</Text>
        <Text as={"span"}>CUADROS</Text>
      </Text>
    </Link>
  )
}

export default Logo