import axiosInstance from "./../../../axios/Index";

export function requestGetAccountSettings() {
  return axiosInstance.get("api/usermanager/", {
    withCredentials: true,
  });
}

export function requestUpdateAccountSettings(payload) {
  return axiosInstance.put(`api/usermanager/${payload.id}/`, payload.data, {
    withCredentials: true,
  });
}
