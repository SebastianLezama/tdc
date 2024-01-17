import { Product } from "./types";
import axios from "axios"
import Papa from "papaparse"

export default {
  list: async (): Promise<Product[]> => {
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRQFdSYlCrAF-NhZG9PzsmOe5VsDSGoEICT4_uCEpl-JstJKhaGhW-Pq2hvp3khh7020eUK6RzkKlAf/pub?gid=0&single=true&output=csv", {responseType: 'blob'},)
    .then((res) => {
      return new Promise<Product[]>((resolve, reject) => {
        Papa.parse(res.data, {
          header: true,
          complete: (results) => {
            const products = results.data as Product[]
            return resolve(products.map((prod) => ({
              ...prod,
              price: Number(prod.price),
              featured: Boolean(prod.featured),
            })))
          },
          error: (err) => reject(err.message),
        })
      })
    })
  }
}
