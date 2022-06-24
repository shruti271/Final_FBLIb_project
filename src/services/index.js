import axios from "axios";
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
  let result = {};
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/login/`,
      payload,
      {
        withCredentials: true,
      }
    );
    result = res.data || {};
    localStorage.setItem("is_alive", true);
    return { success: true, data: result, message: null };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
      data: null,
    };
  }
};
export const logoutUser = async () => {
  let result = {};
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/logout/`,
      {
        withCredentials: true,
      }
    );
    result = res.data || {};
    localStorage.setItem("is_alive", false);
    return { success: true, data: result, message: null };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
      data: null,
    };
  }
};

export const isAlive = async () => {
  let result = {};
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/isalive/`,
      {
        withCredentials: "true",
      }
    );
    result = res.data || {};
    localStorage.setItem("is_alive", res.data.data.is_alive);
    return { success: true, data: result, message: null };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
      data: null,
    };
  }
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
