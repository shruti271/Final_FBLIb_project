import axiosInstance from "./../../../axios/Index";
export function requestGetMedia(payload) {
  // console.log("response****************", pay);
  // console.log("fffffffff"+ payload.page_index)
  return axiosInstance.post("api/allads/",payload,{
    withCredentials: true,
  });
}
