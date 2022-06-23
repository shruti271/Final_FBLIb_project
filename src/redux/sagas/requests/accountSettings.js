import axiosInstance from "./../../../axios/Index";
import { axios } from "axios";

export function requestGetAccountSettings() {
  return axiosInstance.get("api/usermanager/", {
    withCredentials: true,
  });
  // return axios.get(
  //   `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/
  //   { withCredentials: true }
  // );
}

export function requestUpdateAccountSettings(payload) {
  return axiosInstance.put(`api/usermanager/${payload.id}/`, payload.data, {
    withCredentials: true,
  });
}
