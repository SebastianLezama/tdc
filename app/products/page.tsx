'use client'
import React from 'react'
import ProductsGrid from '../components/products/ProductsGrid'
import { useProductContext } from '../context/store'

export default function Productos() {

  const context = useProductContext()

  return (
    <ProductsGrid products={context?.products!} />
  )
}
