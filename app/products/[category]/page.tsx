'use client'
import ProductsGrid from "@/app/components/products/ProductsGrid";
import { useProductContext } from "@/app/context/store";
import { Product } from "@/product/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export default function viewProductCardByCategory(category: Params) {
  const context = useProductContext()
  let filtered: Product[] = []
  if (context?.products) {
    const selection = category.params.category
    filtered = context.products.filter(prod => prod.category === selection)
  }
  return <>{context && <ProductsGrid products={filtered} />}
  
  </>
}
