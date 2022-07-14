import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkAuth } from "./utils/auth";

const PrivateRoute = ({ children }) => {
  // const { isAlive } = useSelector((state) => state.isAliveData);
  // return isAlive ? children : <Navigate to="/auth/login" />;
  return checkAuth() ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;

