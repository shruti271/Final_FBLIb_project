import axiosInstance from "./../../../axios/Index";
export function requestGetMedia() {
  return axiosInstance.get("api/allads/", {
    withCredentials: true,
  });
}
