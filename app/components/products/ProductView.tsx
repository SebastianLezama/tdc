'use client'
import { Product } from '@/product/types';
import { Box, Button, Card, CardBody, CardFooter, Flex, Grid, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CartDrawer from '../CartDrawer';
import { useProductContext } from '@/app/context/store';
import { useSearchParams } from 'next/navigation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link';


export default function ProductView( id : Readonly<{id: string}>) {
  
  const context = useProductContext()
  const productId = Number(id.id)

  const product = context?.filteredItem(productId)


  return (

    <Box mx={9}  >
      <Card variant={"outline"} key={product?.id} minW={"180px"} borderRadius={"sm"} shadow={"10px 12px 8px 1px rgba(12, 23, 32, .2)"}>
      <CardBody p={0} borderRadius={"md"}>

        <Stack alignContent={"center"} >

          <Image
            onClick={() => context?.setSelectedImage(product?.image)}
            cursor={"pointer"} alt={product?.title} src={product?.image} w={"340px"} h={"180px"} objectFit={"cover"} borderRadius={"sm"} justifySelf={"center"}
          />
        </Stack>
      </CardBody>

      <CardFooter p={2} w={"100%"} alignItems={"center"} justifyContent={"center"}>

      <Stack pt={1} w={"100%"}>

      <Text fontSize={"lg"} fontWeight={"500"}>
            {product?.title}
          </Text>
          <HStack justifyContent={"space-between"}>
          <Text fontSize={"lg"} color={"purple"}>{product?.category}</Text>
          {/* <Button onClick={() => router.push(`/products?id=${product?.id}`)} >Ver producto</Button> */}
          <Link href={`/products/${product?.id}`} >Ver producto</Link>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={"300"}>Small</Text>
            

            <Button variant={"ghost"} p={0} _hover={{ bgColor: "" }} _active={{ bgColor: "" }}>
              <Image alt='whatsapp' cursor={"pointer"} src={"https://icongr.am/fontawesome/heart-o.svg?size=20&color=5592aa"} />
            </Button>

          </HStack>


          <Button variant={"outline"} size={"md"} borderRadius={"sm"} borderColor="primary" color={"primary"} _hover={{ bgColor: "secondary.300", color: "white", borderColor: "secondary.200" }} onClick={() => context?.addToCart(product)}>Agregar al carrito</Button>
        </Stack>
      </CardFooter>
    </Card>
      {context.selectedImage && (
        <Flex
          alignItems={"center"}
          backgroundColor={"rgba(0,0,0,0.7)"}
          justifyContent={"center"}
          key={"backdrop"}
          position={"fixed"}
          zIndex={9}
          width={"100%"}
          h={"100%"}
          maxH={"100vh"}
          top={0}
          left={0}
          onClick={() => context.setSelectedImage('')}

        >
          <Image key={"image"} src={context.selectedImage} p={10} cursor={"pointer"} />
        </Flex>
      )}
      <CartDrawer
        isOpen={context.isOpen}
        onClose={context.onClose}
        text={context.text}
        cart={context.cart}
      />
      {Boolean(context.cart.length) &&
        <Flex p={4} position={"sticky"}
          bottom={4}
          alignItems={"center"}
          justifyContent={"center"}
          mt={4}
        >
          <Button mx={3} colorScheme='teal' onClick={context?.onOpen} w={"fit-content"}
            minW={{ base: "120px", md: "220px" }}
            _hover={{ textDecoration: "None" }}
          >Ir al carrito ({context?.cartAmount})
          </Button>
          <Button mx={3} colorScheme='red' onClick={context?.clearCart} w={"fit-content"}
            minW={{ base: "120px", md: "220px" }}
            _hover={{ textDecoration: "None" }}
          >Vaciar carrito
          </Button>
        </Flex>
      }
    </Box>
  )
}
