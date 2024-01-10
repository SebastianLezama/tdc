import api from '@/product/api';
import { Product } from '@/product/types';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react';
import ProductCard from './productCard';
import theme from '@/theme';

export interface IIndexRouteProps {
  products: Product[]
}

function parseCurrency(value: number): string {
  return value.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS'
  })
}

const IndexRoute: React.FC<IIndexRouteProps> = ({products}) => {
  return (
    <ChakraProvider theme={theme}>
      <Box>

        <Container 
          my={"10px"}
          boxShadow={"md"}
          backgroundColor={"white"}
          maxW={"container.xl"}
          p={4}
        >
        <ProductCard products={products}/>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list()
  return {
    props: {
      products,
    },
    revalidate: 86400
  }
}

export default IndexRoute
