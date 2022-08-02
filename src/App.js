import React from "react";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./components/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "./components/MainLayout";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Signup from "./pages/auth/Signup";
import PublicRoute from "./PublicRoute";
import "./App.scss";
import Activateemail from "./pages/auth/Activateemail";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Updatepassword from "./pages/auth/Updatepassword";
// import { loadIsAliveStart } from "./redux/ducks/session";
// import {
//   Box,
//   CircularProgress,
// } from "@mui/material";

const App = () => {
  // const dispatch = useDispatch();

  // const { loading } = useSelector((state) => state.isAliveData);

  // useEffect(() => {
  //   dispatch(loadIsAliveStart());
  // }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/auth/login"
          exact
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/register"
          exact
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/forgot-password"
          exact
          element={
            <PublicRoute>
              <ForgetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/activate"
          exact
          element={
            <PublicRoute>
              <Activateemail />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/verify_email/"
          exact
          element={
            <PublicRoute>
              <VerifyEmail />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/update_password/"
          exact
          element={
            <PublicRoute>
              <Updatepassword />
            </PublicRoute>
          }
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
