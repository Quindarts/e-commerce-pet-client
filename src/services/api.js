import axiosConfig from './axiosConfig'

export const apiRegister = (data) => {
    return axiosConfig({
        url: '/auth/register',
        method: 'post',
        data,
    })
    // có 2 kiểu dùng catch
    //  kiểu thứ nhất không dùng async await
    // return new Promise((resolve, reject) => {
    //     axiosConfig({
    //         url: '/auth/register',
    //         method: 'post',
    //         data,
    //     })
    //         .then((res) => resolve(res))
    //         .catch((e) => {
    //             if (e) {
    //                 if (e.response) {
    //                     const { message } = e.response.data
    //                     return reject(message)
    //                 }
    //                 return reject('Lỗi server')
    //             }
    //         })
    // })
    // kiểu thứ 2 dùng async
    // return new Promise(async (resolve, reject) => {
    //     try {
    //         const response = await axiosConfig({
    //             url: '/auth/register',
    //             method: 'post',
    //             data,
    //         })
    //         resolve(response)
    //     } catch (error) {
    //         reject(error.response)
    //     }
    // })
}
