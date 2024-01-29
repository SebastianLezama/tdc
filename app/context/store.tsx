'use client'
import api from "@/product/api";
import { Product, ContextProps, Cart } from "@/product/types";
import { useDisclosure } from "@chakra-ui/react";
import React, { Context, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const ProductsContext = createContext<ContextProps | null>(null)


export const ProductsProvider: React.FC<React.ReactNode> = ({ children }: any) => {
  const getLocalStorage = (name: string) => {
    const localData = localStorage.getItem(name);
    return localData ? JSON.parse(localData) : [];
  };

  const [cart, setCart] = useState<Cart[]>(getLocalStorage("items"));
  const [products, setProducts] = useState(getLocalStorage("products"));
  const [favorites, setFavorites] = useState(getLocalStorage("favorites"));
  const [featuredProducts, setFeaturedProducts] = useState(getLocalStorage("featured_products"));
  
  const [cartAmount, setCartAmount] = React.useState<number>(0)

  const [total, setTotal] = useState(0);
  const [checkoutDetail, setCheckoutDetail] = useState(
    getLocalStorage("checkout")
  );

  const text = React.useMemo(() => {
    return cart
      .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price * product.quantity)}\n`), ``)
      .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price * product.quantity, 0))}`)
  }, [cart])

  const deleteItem = (id: number) => {
    const filteredProd = cart.filter((prod) => prod.id !== id);
    setCart(filteredProd);
  };

  const addItem = (item: Product) => {
    const add = cart.map((prod) =>
      prod.id === item.id
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod
    );
    setCart(add);
    setCartAmount(cartAmount + 1)

  };

  const isInCart = (id: number) => {
    return cart.some((prod) => prod.id === id);
  };

  const filteredItem = (item: Product) => {
    return cart.find((prod) => prod.id === item.id);
  };


  const addToCart = (item: Product) => {
    if (isInCart(item.id)) {
      console.log("is in cart")
      addItem(item);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setCartAmount(cartAmount + 1)
    }
  };

  const calcTotal = useCallback(() => {
    const cartCopy = [...cart];
    let count = 0;
    cartCopy.forEach((p) => (count += p.quantity * p.price));
    setTotal(count);
  }, [cart]);

  const cartAmountCounter = useCallback(() => {
    const cartCopy = [...cart];
    let count = 0;
    cartCopy.forEach((p) => (count += p.quantity));
    setCartAmount(count);
  }, [cart]);



  const checkoutOrder = (user: string, phone: number) => {
    setCheckoutDetail([
      { user: user, phone: phone, total: total },
      { items: [...cart] },
    ]);
  };


  // const deleteItem = (id: number) => {
  //   const filteredProd = cart.filter((prod) => prod.id !== id);
  //   setCart(filteredProd);
  // };


  // const filteredItem = (item: Product) => {
  //   return cart.find((prod) => prod.id === item.id);
  // };


  const clearCart = () => {
    setCart([]);
    setCartAmount(0)
  };


  function parseCurrency(value: number): string {
    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    })
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = React.useState<string>('')

  const getProductsFromSheet = async () => {
    const products = await api.list()
    return {
      props: {
        products,
      },
      revalidate: 86400
    }
  }

  const getProducts = async () => {
    const products = (await getProductsFromSheet()).props.products
    setProducts(products)
    localStorage.setItem("products", JSON.stringify(products));
    const featuredProducts = products.filter((p) => p.featured === "TRUE")
    console.log(featuredProducts)
    setFeaturedProducts(featuredProducts)
    localStorage.setItem("featured_products", JSON.stringify(featuredProducts));

  }

  useEffect(() => {
    getProducts()
  }, [])


  useEffect(() => {
    calcTotal();
    cartAmountCounter();
    localStorage.setItem("items", JSON.stringify(cart));

  }, [cart, calcTotal, cartAmountCounter]);

  const obj = useMemo(() => ({
    cart,
    products,
    favorites,
    featuredProducts,
    total,
    cartAmount,
    checkoutDetail,
    isInCart,
    addToCart,
    clearCart,
    deleteItem,
    checkoutOrder,
    isOpen,
    onOpen,
    onClose,
    selectedImage,
    setSelectedImage,
    parseCurrency,
    text
  }), [cart,
    products,
    favorites,
    featuredProducts,
    total,
    cartAmount,
    checkoutDetail,
    isInCart,
    addToCart,
    clearCart,
    deleteItem,
    checkoutOrder,
    isOpen,
    onOpen,
    onClose,
    selectedImage,
    setSelectedImage,
    parseCurrency,
    text])


  return (
    <ProductsContext.Provider
      value={obj}
    >
      {children}
    </ProductsContext.Provider>
  );

}

export const useProductContext = () => useContext(ProductsContext)
