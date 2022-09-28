import axios from "axios";
import axiosInstance from "../axios/Index";

export const signUp = async (payload) => {
  let result = {};
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/usermanager/`,
      payload,
      {
        withCredentials: true,
      }
    );
    result = res.data || {};
    return { success: true, data: result };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
};

export const login = async (payload) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/api/login/`, payload, {
    withCredentials: true,
  });
};
export const logoutUser = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/logout/`, {
    withCredentials: true,
  });
};

export const isAlive = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/isalive/`, {
    withCredentials: "true",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const forgotPassword = async (payload) => {
  let result = {};
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/forgot_password/`,
      payload,
      { withCredentials: true }
    );
    result = res.data || {};
    return { success: true, data: result, message: null };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
};
// export const changePassword = async (payload) => {
//   let result = {};
//   try {
//     const userid = await axios.get(
//       `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/
//       { withCredentials: true }
//     );
//     const res = await axios.put(
//       `http://localhost:8000/api/usermanager/${userid?.data?.data?.id}/`, //http://127.0.0.1:8000/api/usermanager/
//       payload,
//       { withCredentials: true }
//     );
//     result = res.data || {};
//     return { success: true, data: result };
//   } catch (err) {
//     return {
//       success: false,
//       message: err || "something went wrong",
//     };
//   }
// };

// export const getName = async () => {
//   let result = {};
//   try {
//     const res = await axios.get(
//       `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/
//       { withCredentials: true }
//     );
//     result = res.data.data || {};
//     return { success: true, data: result };
//   } catch (err) {
//     return {
//       success: false,
//       message: err || "something went wrong",
//     };
//   }
// };

// export const changeName = async (payload) => {
//   let result = {};
//   try {
//     const userid = await axios.get(
//       `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/
//       { withCredentials: true }
//     );
//     const res = await axios.put(
//       `http://localhost:8000/api/usermanager/${userid?.data?.data?.id}/`, //http://127.0.0.1:8000/api/usermanager/
//       payload,
//       { withCredentials: true }
//     );
//     result = res.data || {};
//     return { success: true, data: result };
//   } catch (err) {
//     return {
//       success: false,
//       message: err || "something went wrong",
//       data: null,
//     };
//   }
// };

export const contactSupport = async (payload) => {
  let result = {};
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/support/`,
      payload,
      {
        withCredentials: true,
      }
    );
    result = res.data || {};
    return { success: true, data: result, message: null };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
      data: null,
    };
  }
};

export const monthsubscription = async () => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/api/create_checkout_session/`,
    { lookup_key: process.env.REACT_APP_MONTHLY_SUBSCRIPTION_KEY },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    }
  );
};

export const startYearlyTrial = () => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/api/starttrial/`, //http://127.0.0.1:8000/api/starttrial/
    { lookup_key: process.env.REACT_APP_YEARLY_SUBSCRIPTION_KEY },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    }
  );
};

export const startMonthlyTrial = () => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/api/starttrial/`,
    { lookup_key: process.env.REACT_APP_MONTHLY_SUBSCRIPTION_KEY },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    }
  );
};

export const yearsubcription = () => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/api/create_checkout_session/`,
    { lookup_key: process.env.REACT_APP_YEARLY_SUBSCRIPTION_KEY },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    }
  );
};

export const cancelusersubcription = () => {
  return axiosInstance.get(
    `${process.env.REACT_APP_API_URL}/api/cancel_subscription`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
};

export const fetch_payment_method = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/fetch_payment_method/`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
};

export const addToCartEventRegister = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/addToCartEventRegister/`,
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
};

export const activatyoureemail = (token) => {
  console.log("first", token.getTkn);
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/verify_email/${token.getTkn}`,
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
};

export const resendactivateemail = async (payload) => {
  let result = {};
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/resend_email/`,
      payload
    );
    result = res.data || {};
    return { success: true, data: result, message: null };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
};
export const resetPassword = async (payload) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/api/change_password/`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
};
