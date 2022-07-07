const appConfig = {
  appUrl: "http://localhost:8000",
  // appUrl: "http://ec2-3-95-183-79.compute-1.amazonaws.com/",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
};
export default appConfig;
