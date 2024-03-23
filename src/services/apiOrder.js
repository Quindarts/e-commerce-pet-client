import axiosConfig from './axiosConfig'

export const apiCreateOrder = async (data) => {
  const response = await axiosConfig.post('/orders/', data)
  return response
}
