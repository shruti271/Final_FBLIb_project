import axios from "axios";
import appConfig from "../config/index";

const axiosInstance = axios.create({
  baseURL: appConfig.appUrl,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.setItem("is_alive", false);
      window.location.href = "/signin/";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
