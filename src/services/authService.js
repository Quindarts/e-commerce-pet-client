import axios from "axios"
import { baseUrl } from "./axiosConfig";

const register = async (userData) => {
    const response = await axios.post(`${baseUrl}auth/register`, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post(`${baseUrl}auth/login`, userData);
    if (response) {
        const user = response.data.user;
        const tokenList = response.data.tokenList
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(tokenList.accessToken));
        return user;
    }
};

export const authService = {
    register,
    login,
}