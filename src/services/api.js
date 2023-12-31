import axios from 'axios'
import api from './axiosConfig'

export const apiRegister = (data) =>
    axios({
        url: 'https://e-commerce-pet-server-quindarts.vercel.app/auth/register',
        method: 'post',
        data,
    })
