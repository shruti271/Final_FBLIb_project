import axiosInstance from "./../../../axios/Index";

export function requestGetSavedAds() {
  return axiosInstance.get("api/saveadmanager/", { withCredentials: true });
}

export function requestCreateSavedAds(SavedAds) {
  return axiosInstance.post("api/saveadmanager/", SavedAds, {
    withCredentials: true,
  });
}

export function requestDeleteSavedAds(id) {
  return axiosInstance.delete(`api/saveadmanager/${Number(id)}/`, {
    withCredentials: true,
  });
}