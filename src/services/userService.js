import axios from "axios"
import { baseUrl } from "./axiosConfig";

const register = async (userData) => {
    const response = await axios.post(`${baseUrl}/auth/register`, userData);
    if (response.data) {
        return response.data;
    }
};

const login = async (userData) => {
    const response = await axios.post(`${baseUrl}/auth/login`, userData);
    if (response.data) {
        return response.data;
    }
};

export const authService = {
    register,
    login,
}