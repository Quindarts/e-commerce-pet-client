import axiosConfig from "./axiosConfig"

const getProducts = async (data) => {
    const response = await axiosConfig.get(`/products?limit=10&offset=1`)
    return response
  }

  export const productService = {
    getProducts,
  }