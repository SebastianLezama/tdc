'use client'
import ProductCard from '@/app/components/products/ProductCard'
import { Product } from '@/product/types'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'


const FeaturedProducts = ({ products, setSelectedImage, parseCurrency, handleAddToCart }: Readonly<{ products: Product[], setSelectedImage: any, parseCurrency: any, handleAddToCart: any }>) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  }

  return (
    <Box>
      { }
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {products
          .map((product) =>
            <SwiperSlide key={product.id} style={{ boxSizing: "border-box", maxWidth: "350px" }}>
              <ProductCard product={product} setSelectedImage={setSelectedImage} parseCurrency={parseCurrency} handleAddToCart={handleAddToCart} />
            </SwiperSlide>
          )}
      </Swiper>
    </Box>
  )
}

export default FeaturedProducts
