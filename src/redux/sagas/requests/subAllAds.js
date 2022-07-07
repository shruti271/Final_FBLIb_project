import axiosInstance from "./../../../axios/Index";

export function requestGetSubAllMedia(payload) {
  return axiosInstance.post("api/adsbypage/", payload, {
    withCredentials: true,
  });
}
