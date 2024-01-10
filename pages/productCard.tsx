'use client'
import { Product } from '@/product/types';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Container, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import React from 'react';


export default function ProductCard({products}: any) {
  const [cart, setCart] = React.useState<Product[]>([])

  const text = React.useMemo(()=> {
    return cart
      .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), ``)
      .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
  }, [cart])

  function handleAddToCart(product: Product) {
    setCart(cart => cart.concat(product))
  }

  function parseCurrency(value: number): string {
    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    })
  }

  return (
    <Stack>
      <Grid gridGap={5} templateColumns="repeat(auto-fill, minmax(220px, 1fr))">
        {products.map((product: any) => 
        <Stack p={4} spacing={3} key={product.id} backgroundColor={"secondary.100"} borderRadius={"md"}>
          <Text marginLeft={"5px"} fontSize={"md"} fontWeight={"500"}>
            {product.title}
          </Text>
          <Text marginLeft={"5px"} color={"green.600"} fontSize={"sm"} fontWeight={"700"}>
            {parseCurrency(product.price)}
          </Text>
          <Button variant={"outline"} size={"sm"} colorScheme="primary" onClick={()=>handleAddToCart(product)}>Agregar al carrito</Button>
        </Stack>)}
      </Grid>
      {Boolean(cart.length) && 
      <Flex p={4} position={"sticky"} 
        bottom={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          as={Link} 
          isExternal 
          href={`https://wa.me/5491140737970?text=${encodeURIComponent(text)}`} colorScheme='whatsapp' 
          w={"fit-content"} 
          minW={"220px"}
          _hover={{textDecoration: "None"}}
          >Ir al carrito ({cart.length})
        </Button>
      </Flex>
      }
    </Stack>
  )
}
