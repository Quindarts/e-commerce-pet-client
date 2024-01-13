import { get } from "../utils/request";
import { getProduct } from "./productService";

export const getCartByUser = async (id) => {
    const result = await get(`cart?idUser=${id}`);
    return result;
}

export const getProductsByCart = async (arrayProduct) => {
    const productPromises = arrayProduct.map(async (itemProduct) => {
        const product = await getProduct(itemProduct)
        return product
    })
    const productList = await Promise.all(productPromises)
    return productList
}