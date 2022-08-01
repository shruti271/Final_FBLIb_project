import axiosInstance from "./../../../axios/Index";

export function requestGetSingleAdData(payload) {
  return axiosInstance.post("api/databyid/", payload, {
    withCredentials: true,
  });
}
