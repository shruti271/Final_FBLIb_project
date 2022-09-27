import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ActiveSubScription = ({ children }) => {
  const { status } = useSelector((state) => state.subscriptionData?.data);
  return status === "active" || status === true ? children : <Navigate to="/plans" />;
};

export default ActiveSubScription;