'use client'
import { Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Banner from './features/home/Banner';
import TopCategories from './features/home/TopCategories';
import FeaturedProducts from './features/home/FeaturedProducts';
import { useProductContext } from './context/store';
import { Product } from '@/product/types';


const Index: React.FC = () => {

  const context = useProductContext()

  return (
    <Box>
      <Banner />
      <FeaturedProducts products={context?.products!} setSelectedImage={context?.setSelectedImage!} handleAddToCart={context?.addToCart!} parseCurrency={context?.parseCurrency!} />
    </Box>
  );
}

export default Index