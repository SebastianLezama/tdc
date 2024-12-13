import ProductView from '@/app/components/products/ProductView'
import React from 'react'

export default function Page({ params }: Readonly<{params: {id: string}}>) {
  const { id } = params

  return (
    <ProductView id={id}></ProductView>
    // <div>{id}</div>
  )
}