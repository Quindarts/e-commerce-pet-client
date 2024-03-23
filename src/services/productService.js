import axiosConfig from './axiosConfig'
import { PRODUCTS_PER_PAGE } from '../utils/constants'

const getProducts = async (pageIndex) => {
  const response = await axiosConfig.get(`/products?limit=${PRODUCTS_PER_PAGE}&offset=${pageIndex || 1}`)
  return response.list
}

const getProductsByParams = async (pageIndex, paramsApi) => {
  const sortField = paramsApi[0].sortField;
  const sortType = paramsApi[0].sortType;
  const response = await axiosConfig.get(`/products/filter?limit=${PRODUCTS_PER_PAGE}&offset=${pageIndex || 1}&sortField=${sortField}&sortType=${sortType}`);
  return response.products;
}

const getProductById = async (id) => {
  const response = await axiosConfig.get(`/products/${id}`)
  return response.product
}

export const productService = {
  getProducts,
  getProductsByParams,
  getProductById
}
