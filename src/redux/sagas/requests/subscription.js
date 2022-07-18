import axios from "axios";

export function requestGetSubscription() {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/fetch_payment_method/`, {
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      }
  });
}