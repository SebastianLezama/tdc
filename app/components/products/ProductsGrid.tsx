'use client'
import { Cart, Product } from '@/product/types';
import { Box, Button, Card, CardBody, CardFooter, Container, Flex, Grid, HStack, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import CartDrawer from '../CartDrawer';
import ProductCard from './ProductCard';
import { useProductContext } from '@/app/context/store';


export default function ProductsGrid({ products }: Readonly<{ products: Product[] }>) {
  // const [cart, setCart] = React.useState<Cart[]>([])
  // const [cartAmount, setCartAmount] = React.useState<number>(0)

  // const text = React.useMemo(() => {
  //   return cart
  //     .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), ``)
  //     .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
  // }, [cart])

  // // const deleteItem = (id: number) => {
  // //   const filteredProd = cart.filter((prod) => prod.id !== id);
  // //   setCart(filteredProd);
  // // };

  // const addItem = (item: Product) => {
  //   const add = cart.map((prod) =>
  //     prod.id === item.id
  //       ? { ...prod, quantity: prod.quantity + 1 }
  //       : prod
  //   );
  //   setCart(add);
  //   setCartAmount(cartAmount + 1)
  // };

  // const isInCart = (id: number) => {
  //   return cart.some((prod) => prod.id === id);
  // };

  // // const filteredItem = (item: Product) => {
  // //   return cart.find((prod) => prod.id === item.id);
  // // };


  // const handleAddToCart = (item: Product) => {
  //   if (isInCart(item.id)) {
  //     addItem(item);
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //     setCartAmount(cartAmount + 1)
  //   }
  // };

  // const clearCart = () => {
  //   setCart([]);
  //   setCartAmount(0)
  // };


  // function parseCurrency(value: number): string {
  //   return value.toLocaleString('es-AR', {
  //     style: 'currency',
  //     currency: 'ARS'
  //   })
  // }

  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [selectedImage, setSelectedImage] = React.useState<string>('')


  const context = useProductContext()

  return (
    <Box mx={9}  >
      <Stack >
        <Grid gridGap={2} templateColumns="repeat(auto-fill, minmax(180px, 1fr))">
          {products.map((product: Product) =>
            <ProductCard key={product.id} product={product} setSelectedImage={context?.setSelectedImage} handleAddToCart={context?.addToCart} parseCurrency={context?.parseCurrency} />
          )}
        </Grid>

      </Stack>
      {context?.selectedImage && (
        <Flex
          alignItems={"center"}
          backgroundColor={"rgba(0,0,0,0.4)"}
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
