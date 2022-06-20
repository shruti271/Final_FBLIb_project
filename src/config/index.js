const appConfig = {
    appUrl: "http://localhost:8000",
    // appUrl: "https://qwdev.servicepack.ai",
    token: localStorage.getItem("token") || "",
    authToken: () => localStorage.getItem("token") || "",
};

export default appConfig;



