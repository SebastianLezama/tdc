'use client'
import { Button, Card, CardBody, CardFooter, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Product } from '@/product/types';
import Link from 'next/link';


export default function ProductCard({ product, setSelectedImage, parseCurrency, handleAddToCart }: Readonly<{ product: Product, setSelectedImage: any, parseCurrency: any, handleAddToCart: any }>) {

  return (
    <Card variant={"outline"} key={product.id} minW={"180px"} borderRadius={"sm"} shadow={"10px 12px 8px 1px rgba(12, 23, 32, .2)"}>
      <CardBody p={0} borderRadius={"md"}>

        <Stack alignContent={"center"} >

          <Image
            onClick={() => setSelectedImage(product.image)}
            cursor={"pointer"} alt={product.title} src={product.image} w={"340px"} h={"180px"} objectFit={"cover"} borderRadius={"sm"} justifySelf={"center"}
          />
        </Stack>
      </CardBody>

      <CardFooter p={2} w={"100%"} alignItems={"center"} justifyContent={"center"}>
        <Stack pt={1} w={"100%"}>

          <Text fontSize={"lg"} fontWeight={"500"}>
            {product.title}
          </Text>
          <HStack justifyContent={"space-between"}>
          <Text fontSize={"lg"} color={"purple"}>{product.category}</Text>
          {/* <Button onClick={() => router.push(`/products?id=${product.id}`)} >Ver producto</Button> */}
          <Link href={`/products/${product.id}`} >Ver producto</Link>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={"300"}>Small</Text>
            <Text fontSize={"lg"} fontWeight={"600"}>
              {parseCurrency(product.price)}
            </Text>

            <Button variant={"ghost"} p={0} _hover={{ bgColor: "" }} _active={{ bgColor: "" }}>
              <Image alt='whatsapp' cursor={"pointer"} src={"https://icongr.am/fontawesome/heart-o.svg?size=20&color=5592aa"} />
            </Button>

          </HStack>


          <Button variant={"outline"} size={"md"} borderRadius={"sm"} borderColor="primary" color={"primary"} _hover={{ bgColor: "secondary.300", color: "white", borderColor: "secondary.200" }} onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
        </Stack>
      </CardFooter>
    </Card>


  )
}
