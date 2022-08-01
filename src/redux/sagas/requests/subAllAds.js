import axiosInstance from "./../../../axios/Index";

export function requestGetSubAllAds(payload) {
  return axiosInstance.post("api/adsbypage/", payload, {
    withCredentials: true,
  });
}
