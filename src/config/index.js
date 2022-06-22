const appConfig = {
  appUrl: "http://localhost:8000",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
};

export default appConfig;
