import axiosInstance from "../../../axios/Index";
export function requestGetFilteredAds(payload) {
  return axiosInstance.post("api/allads/",payload,{
    withCredentials: true,
  });
}
