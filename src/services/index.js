import axios from "axios";
import axiosInstance from "../axios/Index";
import appConfig from "../config/index";
import * as Yup from 'yup';
export const usermanager = async (payload) => {
  let result = {};
  try {
    const res = await axiosInstance.post(`api/usermanager/`, payload, {
      withCredentials: true,
    });
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
    const res = await axios.post(`${appConfig.appUrl}/api/login/`, payload, {
      withCredentials: true,
    });
    result = res.data || {};
    localStorage.setItem("is_alive", true);
    return { success: true, data: result };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
};
export const logoutUser = async () => {
  let result = {};
  try {
    const res = await axios.get(`${appConfig.appUrl}/api/logout/`, {
      withCredentials: true,
    });
    result = res.data || {};
    localStorage.setItem("is_alive", false);
    return { success: true, data: result };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
};

export const isAlive = async () => {
  let result = {};
  try {
    const res = await axios.get(`${appConfig.appUrl}/api/isalive/`, {
      withCredentials: "true",
    });
    result = res.data || {};
    console.log("--------------------------result", result);
    localStorage.setItem("is_alive", res.data.data.is_alive);
    return { success: true, data: result };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
};

export const forgotPassword = async (payload) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/api/forgot_password/`,
      payload,
      { withCredentials: true }
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

export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Enter your firstname'),
  lastname: Yup.string()
    .required('Username is required'),
  //   .min(6, 'Username must be at least 6 characters')
  //   .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
});

export const loginvalidationSchema = Yup.object().shape({

  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

export const forgetvalidationSchema = Yup.object().shape({

  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),

});