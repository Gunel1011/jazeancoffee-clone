import axios, { AxiosError } from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
const $axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
$axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      config.headers["authorization"] = savedToken;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
$axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default $axios;
