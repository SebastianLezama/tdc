'use client'
import ProductCard from '@/app/components/products/ProductCard'
import { Box, Flex, Image } from '@chakra-ui/react'
import React, { CSSProperties } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { useProductContext } from '@/app/context/store';



const FeaturedProducts = () => {
  const context = useProductContext()
  const products = context ? context?.products : []
  const setSelectedImage = context?.setSelectedImage
  const parseCurrency = context?.parseCurrency
  const handleAddToCart = context?.addToCart
  
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
      <Box maxWidth={{base: "90%", md: "80%"}} justifySelf={"center"} m={10}>
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%", gridTemplateColumns: "repeat(auto-fill, minmax( 250px, 1fr))" }}>
        {context && products
          .map((product) =>
            <SwiperSlide key={product.id} style={{ ...sliderStyles }}>
              <Box minW={"140px"} minH={"350px"} alignContent={"center"} m={4} >

              <ProductCard product={product} setSelectedImage={setSelectedImage} parseCurrency={parseCurrency} handleAddToCart={handleAddToCart} />
              </Box>
            </SwiperSlide>
          )}
      </Swiper>
    </Box>
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
    </Flex>
  )
}

export default FeaturedProducts
