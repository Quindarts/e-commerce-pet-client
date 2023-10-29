import axios from 'axios';
const url = "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    // Process config before sending
    return config;
  },
  (error) => {
    console.log(error);

    // Handling requests related errors
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response.data && !error.response?.data?.success) {
      if (error?.response?.status === 401) {
        //handle
      } else {
        //handle
      }
      return error;
    }

    return error;
  }
);

export default api;
