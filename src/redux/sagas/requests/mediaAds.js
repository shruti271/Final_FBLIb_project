import axiosInstance from "./../../../axios/Index";
export function requestGetMedia(payload) {
  // console.log("response****************", pay);
  console.log("fffffffff"+ payload.payload)
  return axiosInstance.post("api/allads/",payload,{
    withCredentials: true,
  });
}
