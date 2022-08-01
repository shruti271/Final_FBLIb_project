import axiosInstance from "./../../../axios/Index";

export function requestCatSatusData() {
  return axiosInstance.get(
    `api/get_cta_status/`,
    {
      withCredentials: true,
    }
  );
}
