'use client'
import { Cart, Product } from '@/product/types';
import { Box, Button, Container, Flex, Grid, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import CartDrawer from './CartDrawer';


export default function ProductCard({ products }: Readonly<{ products: Product[] }>) {
  const [cart, setCart] = React.useState<Cart[]>([])
  const [cartAmount, setCartAmount] = React.useState<number>(0)

  const text = React.useMemo(() => {
    return cart
      .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), ``)
      .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
  }, [cart])

  // const deleteItem = (id: number) => {
  //   const filteredProd = cart.filter((prod) => prod.id !== id);
  //   setCart(filteredProd);
  // };

  const addItem = (item: Product) => {
    const add = cart.map((prod) =>
      prod.id === item.id
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod
    );
    setCart(add);
    setCartAmount(cartAmount + 1)
  };

  const isInCart = (id: number) => {
    return cart.some((prod) => prod.id === id);
  };

  // const filteredItem = (item: Product) => {
  //   return cart.find((prod) => prod.id === item.id);
  // };


  const handleAddToCart = (item: Product) => {
    if (isInCart(item.id)) {
      addItem(item);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setCartAmount(cartAmount + 1)
    }
  };

  const clearCart = () => {
    setCart([]);
  };


  function parseCurrency(value: number): string {
    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    })
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = React.useState<string>('')

  return (
    <Box mx={9}>
      <Stack >
        <Grid gridGap={5} templateColumns="repeat(auto-fill, minmax(220px, 1fr))">
          {products.map((product: Product) =>
            <Container key={product.id} backgroundColor={"secondary.50"} borderRadius={"md"}>
              <Stack p={4} spacing={3} borderRadius={"md"}>
                <Image
                  onClick={() => setSelectedImage(product.image)}
                  cursor={"pointer"} alt={product.title} src={product.image} maxH={200} objectFit={"cover"} borderRadius={"md"}
                />
                <Stack spacing={1}>
                  <Text marginLeft={"5px"} fontSize={"md"} fontWeight={"500"}>
                    {product.title}
                  </Text>
                  <Text marginLeft={"5px"} color={"green.600"} fontSize={"sm"} fontWeight={"700"}>
                    {parseCurrency(product.price)}
                  </Text>
                </Stack>
                <Button variant={"outline"} size={"sm"} colorScheme="teal" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
              </Stack>
            </Container>
          )}
        </Grid>

      </Stack>
      {selectedImage && (
        <Flex
          alignItems={"center"}
          backgroundColor={"rgba(0,0,0,0.5)"}
          justifyContent={"center"}
          key={"backdrop"}
          position={"fixed"}
          zIndex={9}
          width={"100%"}
          h={"100%"}
          maxH={"100vh"}
          top={0}
          left={0}
          onClick={() => setSelectedImage('')}
        >
          <Image key={"image"} src={selectedImage} />
        </Flex>
      )}
      <CartDrawer
        isOpen={isOpen}
        onClose={onClose}
        text={text}
        cart={cart}
      />
      {Boolean(cart.length) &&
        <Flex p={4} position={"sticky"}
          bottom={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button mx={3} colorScheme='teal' onClick={onOpen} w={"fit-content"}
            minW={"220px"}
            _hover={{ textDecoration: "None" }}
          >Ir al carrito ({cartAmount})
          </Button>
          <Button mx={3} colorScheme='red' onClick={clearCart} w={"fit-content"}
            minW={"220px"}
            _hover={{ textDecoration: "None" }}
          >Vaciar carrito
          </Button>
        </Flex>
      }
    </Box>
  )
}
