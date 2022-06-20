import axios from "axios";
const baseURL = "http://localhost:8000";
// const baseURL = "https://qwdev.servicepack.ai";
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    // 'Authorization': "bearer " + localStorage.getItem('access_token'),
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