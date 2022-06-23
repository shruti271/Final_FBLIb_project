import React from "react";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./components/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "./components/MainLayout";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/auth/login" exact element={<Login />} />
        <Route path="/auth/register" exact element={<Signup />} />
        <Route
          path="/auth/forgot-password"
          exact
          element={<ForgetPassword />}
        />

        {/* Private Routes */}
        <Route
          exact
          path="/*"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        />

        {/* unknown Routes */}
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};
export default App;
