import axiosInstance from "../../../axios/Index";

export function requestAddToSavedAds(SavedAds) {
  return axiosInstance.post("api/saveadmanager/", SavedAds, {
    withCredentials: true,
  });
}

export function requestRemoveFromSavedAds(id) {
  return axiosInstance.delete(`api/saveadmanager/${id.ad}/`, {
    withCredentials: true,
  });
}
