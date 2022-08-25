import axiosInstance from "../../../axios/Index";

export function requestGetSavedAds(payload) {
  return axiosInstance.post("api/allsavedads/", payload, {
    withCredentials: true,
  });
}

export function requestCheckAdByFilter(payload) {
  return axiosInstance.post("api/checkAdByFilter/", payload, {
    withCredentials: true,
  });
}

export function requestAddToSavedAds(SavedAds) {
  return axiosInstance.post("api/saveadmanager/", SavedAds, {
    withCredentials: true,
  });
}

export function requestRemoveFromSavedAds(ad) {
  return axiosInstance.delete(`api/saveadmanager/${ad.id}/`, {
    withCredentials: true,
  });
}
