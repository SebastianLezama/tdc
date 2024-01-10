'use server'
import { Product } from "./product/types";
import axios from "axios"
import Papa from "papaparse"
import React, { cache } from 'react';


// export const list = cache( async()  => {
//   console.log("pppp")
//   return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRQFdSYlCrAF-NhZG9PzsmOe5VsDSGoEICT4_uCEpl-JstJKhaGhW-Pq2hvp3khh7020eUK6RzkKlAf/pub?gid=0&single=true&output=csv", {responseType: 'blob'},)
//   .then((res) => {
//     return new Promise<Product[]>((resolve, reject) => {
//       console.log("res.data")
//       Papa.parse(res.data, {
//         header: true,
//         complete: (results) => {
//           const products = results.data as Product[]
//           return resolve(products.map((prod) => ({
//             ...prod,
//             price: Number(prod.price)
//           })))
//         },
//         error: (err) => reject(err.message),
//       })
//     })
//   })
// })

// export const list = cache( async()  => {
//   console.log("pppp")
//   return fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRQFdSYlCrAF-NhZG9PzsmOe5VsDSGoEICT4_uCEpl-JstJKhaGhW-Pq2hvp3khh7020eUK6RzkKlAf/pub?gid=0&single=true&output=csv")
//   .then((res) => {
//     return new Promise<Product[]>((resolve, reject) => {
//       console.log("res.data")
//       Papa.parse(res.data, {
//         header: true,
//         complete: (results) => {
//           const products = results.data as Product[]
//           return resolve(products.map((prod) => ({
//             ...prod,
//             price: Number(prod.price)
//           })))
//         },
//         error: (err) => reject(err.message),
//       })
//     })
//   })
// })