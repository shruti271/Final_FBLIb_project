import axiosInstance from "../../../axios/Index";

export function requestGetSavedAds(payload) {
  return axiosInstance.post("api/allsavedads/",payload, { withCredentials: true });
}

export function requestCheckAdByFilter(payload) {
  return axiosInstance.post("api/checkAdByFilter/",payload, { withCredentials: true });
}
