import axiosInstance from "./../../../axios/Index";

export function requestGetSavedAds() {
  return axiosInstance.get("api/saveadmanager/", { withCredentials: true });
}

export function requestCreateSavedAds(SavedAds) {
  console.log("????????????????????????????????++++++++++++++++++++++===================")
  console.log(SavedAds)
  return axiosInstance.post("api/saveadmanager/", SavedAds, {
    withCredentials: true,
  });
}

export function requestDeleteSavedAds(id) {
  console.log(id.ad);
  console.log("--------------------------------------------------------------------")
  return axiosInstance.delete(`api/saveadmanager/${id.ad}/`, {
    withCredentials: true,
  });
}
