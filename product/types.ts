import { Dispatch, SetStateAction } from "react"

export interface Product {
  id: number,
  title: string,
  category: string,
  description: string,
  image: string,
  price: number,
  featured: string
}
export interface Cart {
  id: number,
  title: string,
  category: string,
  description: string,
  image: string,
  price: number,
  quantity: number,
  featured: string

}

export interface NavItem {
  label:string,
  href: string,
}

export interface SectionHeading {
  title: string,
}

export type ContextProps = {
  products: Product []
  favorites: Product []
  featuredProducts: Product []
  cart: Cart []
  total: number
  cartAmount: number
  checkoutDetail: []
  isInCart: (id: number) => void
  addToCart: (item: Product) => void
  clearCart: () => void
  deleteItem: (id: number) => void
  checkoutOrder: (user: string, phone: number) => void
  setSelectedImage: Dispatch<SetStateAction<string>>
  isOpen: boolean,
  onOpen: any
  onClose: any
  selectedImage: string
  parseCurrency: (value: number) => string
  text: string
}