'use client'
import ProductCard from '@/app/components/products/ProductCard'
import { Product } from '@/product/types'
import { Box, Flex } from '@chakra-ui/react'
import React, { CSSProperties } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'


const FeaturedProducts = ({ products, setSelectedImage, parseCurrency, handleAddToCart }: Readonly<{ products: Product[], setSelectedImage: any, parseCurrency: any, handleAddToCart: any }>) => {

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 5,
    slidesPerView: "auto",
    direction: "horizontal",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  }

  const sliderStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "250px",
    minHeight: "300px"
  }

  return (
    <Flex justifyContent={"center"}>
      <Box maxWidth={{base: "100%", md: "2200px"}} justifySelf={"center"} m={10}>
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {products
          .map((product) =>
            <SwiperSlide key={product.id} style={{ ...sliderStyles }}>
              <ProductCard product={product} setSelectedImage={setSelectedImage} parseCurrency={parseCurrency} handleAddToCart={handleAddToCart} />
            </SwiperSlide>
          )}
      </Swiper>
    </Box>
    </Flex>
  )
}

export default FeaturedProducts
