'use client'
import { Button, Card, CardBody, CardFooter, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Product } from '@/product/types';


export default function ProductCard({ product, setSelectedImage, parseCurrency, handleAddToCart }: Readonly<{ product: Product, setSelectedImage: any, parseCurrency: any, handleAddToCart: any }>) {

  return (
    <Card maxW={"180px"} variant={"outline"} key={product.id} borderRadius={"sm"} justifySelf={"center"}>
      <CardBody p={0} borderRadius={"md"}>

        <Stack alignContent={"center"} justifyContent={"center"}>

          <Image
            onClick={() => setSelectedImage(product.image)}
            cursor={"pointer"} alt={product.title} src={product.image} maxW={"100%"} maxH={"150px"} objectFit={"cover"} borderRadius={"xs"} justifySelf={"center"}
          />
        </Stack>
      </CardBody>

      <CardFooter p={2} alignItems={"center"} justifyContent={"center"}>
        <Stack pt={1} justifyContent={"space-between"}>
          <Text fontSize={"lg"} fontWeight={"500"}>
            {product.title}
          </Text>
          <HStack justifyContent={"space-between"}>

            <Text fontSize={"lg"} fontWeight={"600"}>
              {parseCurrency(product.price)}
            </Text>

            <Button variant={"ghost"} p={0} _hover={{ bgColor: "" }} _active={{ bgColor: "" }}>
              <Image alt='whatsapp' cursor={"pointer"} src={"https://icongr.am/fontawesome/heart-o.svg?size=20&color=5592aa"} />
            </Button>

          </HStack>


          <Button variant={"outline"} size={"sm"} borderRadius={"sm"} borderColor="primary" color={"primary"} _hover={{ bgColor: "secondary.300", color: "white", borderColor: "secondary.200" }} onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
        </Stack>
      </CardFooter>
    </Card>


  )
}
