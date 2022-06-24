import axiosInstance from "./../../../axios/Index";

export function requestGetSubAllMedia() {
  return axiosInstance.get("api/suballads/", {
    withCredentials: true,
  });
}
