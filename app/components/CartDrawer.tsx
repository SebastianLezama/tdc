import React from 'react'
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

const CartDrawer = ({ isOpen, onClose, text, cart }: any) => {

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
        <DrawerContent>
          <DrawerCloseButton />

          {cart.sort().map((prod: Cart) => (
            <>
              <DrawerHeader borderBottomWidth='1px' key={prod.id}>{prod.title}{prod.quantity}</DrawerHeader>
              <DrawerBody>
                <Stack spacing='5px'>

                  <Box>
                    <FormLabel htmlFor='owner'>Seleccione tamaño</FormLabel>
                    <Select id='owner' defaultValue='segun'>
                      <option value='segun'>20cm x 15cm</option>
                      <option value='kola'>40cm x 30cm</option>
                    </Select>
                  </Box>

                </Stack>
              </DrawerBody>
            </>
          ))}


          <DrawerBody>
            <Stack spacing='5px'>
              <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>

              {/* <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box> */}

              {/* <Box>
                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>20cm x 15cm</option>
                  <option value='kola'>40cm x 30cm</option>
                </Select>
              </Box> */}

              <Box>
                <FormLabel htmlFor='desc'>Comentarios</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme='blue'>Submit</Button> */}
            <Button
              as={Link}
              leftIcon={<Image alt='whatsapp' src={"https://icongr.am/fontawesome/whatsapp.svg?size=30&color=ffffff"} />}
              isExternal
              href={`https://wa.me/5491140737970?text=${encodeURIComponent(text)}`} colorScheme='whatsapp'
              w={"fit-content"}
              minW={"220px"}
              _hover={{ textDecoration: "None" }}
            >
              Finalizar compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default CartDrawer