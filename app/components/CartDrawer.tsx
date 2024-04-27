import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  Button,
  InputRightAddon,
  VStack,
  Image,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Cart, Product } from '@/product/types'
import PaymentMp from './PaymentMp'

const CartDrawer = ({ isOpen, onClose, text, cart }: any) => {

  const [paymentData, setPaymentData] = useState({})

  const handleChange = ({ target }) => {
    
    if (target.name !== 'username' && target.name !== 'comments' ) {
      
      const price = cart.find((prod: Cart) => prod.id == target.name)[target.value]
      console.log(price)
      const size = target.value
      
      setPaymentData({...paymentData, [target.name]: size})
    }
  }

  const firstField = React.useRef(null)

  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        autoFocus={true}
        initialFocusRef={firstField}
        size={"md"}
      >
        <DrawerOverlay />
        <form action={PaymentMp}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px' >Tu compra</DrawerHeader>

                <DrawerBody >
                  <Stack spacing='10px'>

            {cart?.sort().map((prod: Cart) => (
                    <Box key={prod.id}>
                      <FormLabel htmlFor='owner'>{prod.title}{paymentData[prod.id] ? " - $" + prod[paymentData[prod.id]] : ""}</FormLabel>
                      <Select id='owner'
                        placeholder='Seleccione tamaño'
                        name={String(prod.id)}
                        onChange={handleChange}
                        isRequired
                        value={paymentData[prod.id]}
                      >
                        <option value='small'>20cm x 15cm</option>
                        <option value='medium'>40cm x 30cm</option>
                        <option value='large'>60cm x 45cm</option>
                      </Select>
                    </Box>

            ))}
                  </Stack>
                </DrawerBody>

              <DrawerBody>
                <Stack spacing='5px'>
                  <Box>
                    <FormLabel htmlFor='username'>Nombre</FormLabel>
                    <Input
                      ref={firstField}
                      id='username'
                      placeholder='Ingrese su nombre'
                      name='username'
                      isRequired
                      onChange={handleChange}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='desc'>Comentarios</FormLabel>
                    <Textarea id='desc' 
                    name='comments'
                    onChange={handleChange}/>
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                {/* <Button colorScheme='blue'>Submit</Button> */}
                {/* <Button
                  as={Link}
                  leftIcon={<Image alt='whatsapp' src={"https://icongr.am/fontawesome/whatsapp.svg?size=30&color=ffffff"} />}
                  isExternal
                  href={`https://wa.me/5491140737970?text=${encodeURIComponent(text)}`} colorScheme='whatsapp'
                  w={"fit-content"}
                  minW={"220px"}
                  _hover={{ textDecoration: "None" }}
                > */}
                <Button colorScheme='blue' type='submit'>
                  Finalizar compra
                </Button>
              </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>

    </div>
  )
}

export default CartDrawer