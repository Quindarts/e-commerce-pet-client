import axios from 'axios'

export const baseURL = 'https://e-commerce-pet-server-quindarts.vercel.app/'

const axiosConfig = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosConfig.interceptors.request.use(
  (config) => {
    const userToken = JSON.parse(localStorage.getItem('user') || '{}')
    const accessToken = userToken.tokenList?.accessToken

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  (response) => {
    if (response) {
      return response.data
    }
  },
  async (error) => {
    const userToken = JSON.parse(localStorage.getItem('user') || '{}')
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = userToken.tokenList?.refreshToken
        const response = await axiosConfig.post('auth/accessToken-generate', {
          refreshToken,
        })

        const { accessToken } = response.data
        userToken.tokenList = {
          accessToken,
          refreshToken,
        }

        localStorage.setItem('user', JSON.stringify(userToken))
        originalRequest.headers.Authorization = `Bearer ${accessToken}`

        return axiosConfig(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(error.response.data)
  }
)

export default axiosConfig
