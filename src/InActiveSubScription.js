import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InActiveSubScription = ({ children }) => {
  const { status } = useSelector((state) => state.subscriptionData?.data);
  return status !== "active" ? children : <Navigate to="/plans" />;
};

export default InActiveSubScription;