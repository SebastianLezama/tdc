'use client'
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Banner from './features/home/Banner';
import FeaturedProducts from './features/home/FeaturedProducts';
import { useProductContext } from './context/store';


const Index: React.FC = () => {

  const context = useProductContext()

  return (
    <Box>
      <Banner />
      <FeaturedProducts products={context?.featuredProducts!} setSelectedImage={context?.setSelectedImage!} handleAddToCart={context?.addToCart!} parseCurrency={context?.parseCurrency!} />
    </Box>
  );
}

export default Index