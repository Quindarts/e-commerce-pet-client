import { get } from '../utils/request'

export const getProduct = async (id) => {
    const result = await get(`product/${id}`)
    return result
}
