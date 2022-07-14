import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
    if (error.response.status === 401 ) {
      console.log("----------------")
      localStorage.setItem("is_alive", false);
      window.location.href = "/auth/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
