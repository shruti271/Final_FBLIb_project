import axiosInstance from "./../../../axios/Index";

// export function requestGetAccountSettings() {
//   return axiosInstance.get("api/usermanager/", {
//     withCredentials: true,
//   });
// }

export function requestSavedAdsSearchData(payload) {
  console.log(payload.data.split(","));
  console.log(
    "??????????????????????????????????????????????????????????????????????????????????????????" 
  );
  return axiosInstance.post(
    `api/savedad_filters/`,
    // {keywords:payload.data.split(" ")},
    {  keywords: payload.type ==="All these words"? payload.data.split(" ") :  payload.data.split(",") },
    // {  keywords:  payload.data.split(",")},

    // { keywords: ["flash  " , "65% off"] },

    {
      withCredentials: true,
    }
  );
}