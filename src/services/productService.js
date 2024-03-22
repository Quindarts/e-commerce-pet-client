import axiosConfig from './axiosConfig'

const getProducts = async (data) => {
  const response = await axiosConfig.get(`/products?limit=10&offset=1`)
  return response
}

const getProductByParams = async (data) => {
  const response = await axiosConfig.get(
    `/products?limit=${data.limit}&offset=${data.offset}`
  )
  return response
}

export const productService = {
  getProducts,
  getProductByParams,
}
