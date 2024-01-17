'use client'
import { SectionHeading } from '@/product/types'
import { Heading } from '@chakra-ui/react'
import React from 'react'



const SectionHeading = ({ title }: SectionHeading) => {
  return (
    <Heading size={"md"} my={"1.5rem"}>
      {title}
    </Heading>
  )
}

export default SectionHeading