import axiosConfig from './axiosConfig'
import { productService } from './productService'

const getCart = async () => {
  const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
  const userId = userLocal?.user?.id
  const response = await axiosConfig.get(`/carts/${userId || 2}`)
  if (response) {
    return response.cart.cart_details;
  }
  return null;
}

const getAllProductCart = async () => {
    const cart = await getCart();
    const promises = cart.map(async (item) => {
        const product = await productService.getProductById(item.product_id);
        return { ...product, quantity: item.quantity };
    });
    const listProduct = await Promise.all(promises);
    return listProduct;
}

const updateProductCartById = async (userId, productId, data) => {
  const response = await axiosConfig.put(`/carts/${userId}/change/${productId}`, data);
  if (response) {
    return response.cart.cart_details;
  }
  return null;
}

export const cartService = {
  getCart,
  getAllProductCart,
  updateProductCartById
}
