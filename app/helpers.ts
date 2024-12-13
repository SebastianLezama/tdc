import { NavItem } from "@/product/types";

export const navItems: NavItem[] = [
  {
    label: "Todos los productos",
    href: "/products"
  },
  // {
  //   label: "Categorías",
  //   href: "/categories"
  // }
]

export const categories: string[] = [
  "Anime",
  "Peliculas",
  "Series",
  "Musica"
]

export const Capitalize = (text: string) => {
  return (text.charAt(0).toUpperCase() + text.slice(1))
}