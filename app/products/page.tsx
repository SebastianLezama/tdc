'use server'
import React, { cache } from 'react'
import ProductCard from '../components/ProductCard'
import api from '@/product/api'
// import { list } from '@/utils'

export const getProducts = async() => {
  const products = await api.list()
  return {
    props: {
      products,
    },
    revalidate: 86400
  }
}


export default async function Productos () {

  const products = (await getProducts()).props.products

  return (
    <ProductCard products={products}/>
  )
}
