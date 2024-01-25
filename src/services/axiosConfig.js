export const baseUrl = 'https://e-commerce-pet-server-quindarts.vercel.app/'

export const getTokenFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: 'application/json',
  },
}
// export const baseURL = 'https://e-commerce-pet-server-quindarts.vercel.app/';
// import axios from 'axios'
// const axiosConfig = axios.create({
//     baseURL: 'https://e-commerce-pet-server-quindarts.vercel.app',
//     headers: {
//         'Context-Type': 'application/json',
//     },
// })

// axiosConfig.interceptors.request.use(
//     (config) => {
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )
// axiosConfig.interceptors.response.use(
//     function (response) {
//         return response.data
//     },
//     function (error) {
//         // return về reject để có thể dùng catch bên api
//         // fix ----------------fix
//         return Promise.reject(error)
//     }
// )

// export default axiosConfig
