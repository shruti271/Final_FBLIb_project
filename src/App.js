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
        <Route path="/auth/login" exact component={Login} />
        <Route path="/auth/register" exact component={Signup} />
        <Route path="/auth/forgot-password" exact component={ForgetPassword} />
        <PrivateRoute exact path="/" component={MainLayout}></PrivateRoute>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};
export default App;
