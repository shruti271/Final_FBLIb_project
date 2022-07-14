import axios from "axios";

export function requestGetIsAlive() {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/isalive/`, {
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      }
  });
}