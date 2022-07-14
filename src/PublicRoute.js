import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkAuth } from "./utils/auth";

const PublicRoute = ({ children }) => {
  // const { isAlive } = useSelector((state) => state.isAliveData);
  // return !isAlive ? children : <Navigate to="/" />;
  return !checkAuth() ? children : <Navigate to="/" />;
};

export default PublicRoute;
