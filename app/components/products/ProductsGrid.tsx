'use client'
import { Product } from '@/product/types';
import { Box, Button, Flex, Grid, Image, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CartDrawer from '../CartDrawer';
import ProductCard from './ProductCard';
import { useProductContext } from '@/app/context/store';
import { useSearchParams } from 'next/navigation';


export default function ProductsGrid() {
  
  const context = useProductContext()
  const products = context.products

  const searchParams = useSearchParams()

  const category = searchParams?.get('category')
  const filteredProducts = !category ? products : products.filter(prod => prod.category === category)


  return (
    <Box mx={9}  >
      <Stack >
        <Grid gridGap={8} templateColumns="repeat(auto-fill, minmax(250px, 2fr))">
          {filteredProducts.map((product: Product) =>
            <ProductCard key={product.id} product={product} setSelectedImage={context?.setSelectedImage} handleAddToCart={context?.addToCart} parseCurrency={context?.parseCurrency} />
          )}
        </Grid>

      </Stack>
      {context?.selectedImage && (
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
          onClick={() => context?.setSelectedImage('')}

        >
          <Image key={"image"} src={context?.selectedImage} p={10} cursor={"pointer"} />
        </Flex>
      )}
      <CartDrawer
        isOpen={context?.isOpen}
        onClose={context?.onClose}
        text={context?.text}
        cart={context?.cart}
      />
      {Boolean(context?.cart.length) &&
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
