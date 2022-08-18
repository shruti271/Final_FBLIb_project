import axiosInstance from "../../../axios/Index";

export function requestAddToSavedAds(SavedAds) {
  return axiosInstance.post("api/saveadmanager/", SavedAds, {
    withCredentials: true,
  });
}

export function requestRemoveFromSavedAds(ad) {
  console.log("404 ===999",ad)
  return axiosInstance.delete(`api/saveadmanager/${ad.id}/`, {
    withCredentials: true,
  });
}
