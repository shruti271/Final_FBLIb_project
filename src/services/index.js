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
  await axios.post(
    `${process.env.REACT_APP_API_URL}/api/login/`,
    payload,
    {
      withCredentials: true,
    }
  );
};
export const logoutUser = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/logout/`,
    {
      withCredentials: true,
    }
  );
};

export const isAlive = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/isalive/`,
    {
      withCredentials: "true",
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
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
export const changePassword = async (payload) => {
  let result = {};
  try {
    const userid = await axios.get(
      `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/      
      { withCredentials: true }
    );
    console.log(userid.data.data);
    console.log("---------------- payload", payload)
    // console.log(payload);
    const res = await axios.put(
      `http://localhost:8000/api/usermanager/${userid?.data?.data?.id}/`, //http://127.0.0.1:8000/api/usermanager/
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

export const getName = async () => {
  let result = {};
  try {
    const res = await axios.get(
      `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/      
      { withCredentials: true }
    );
    result = res.data.data || {};   
    return { success: true, data: result };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
}

export const changeName = async (payload) => {
  let result = {};
  try {
    const userid = await axios.get(
      `http://localhost:8000/api/usermanager/`, //http://127.0.0.1:8000/api/usermanager/      
      { withCredentials: true }
    );
    console.log(userid.data.data);
    console.log("---------------- payload", payload)
    console.log(payload);
    const res = await axios.put(
      `http://localhost:8000/api/usermanager/${userid?.data?.data?.id}/`, //http://127.0.0.1:8000/api/usermanager/
      payload,
      { withCredentials: true }
    );
    result = res.data || {};
    return { success: true, data: result };
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
      data: null,
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

export const getCarddetails = async () => {
  console.log("getCarddetails---------------------------------------->")
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/fetch_payment_method`,
      { withCredentials: 'true' }
    );
    return res.data.data
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
}

export const monthsubscription = async () => {
  try {
    await axios.post("http://localhost:8000/api/create_checkout_session/", { lookup_key: "price_1LJcHhSDUd5CnxuZJVxj4oP9" }, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      withCredentials: true
    }).then((res) => window.open(res.data.data.url,"_self"))
      .catch((error) => console.log(error))
  }
  catch {
    console.log("error")
  }
}

export const yearsubcription = async () => {
  try {
    await axios.post("http://localhost:8000/api/create_checkout_session/", { lookup_key: "price_1LJcHhSDUd5CnxuZH9jfkvwr" }, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      withCredentials: true
    }).then((res) => window.open(res.data.data.url, "_self"))
      .catch((error) => console.log(error))
  }
  catch {
    console.log("error")
  }
}
export const cancelusersubcription = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/cancel_subscription`,
      { withCredentials: 'true' }
    );
    return res.data.data
  } catch (err) {
    return {
      success: false,
      message: err || "something went wrong",
    };
  }
}