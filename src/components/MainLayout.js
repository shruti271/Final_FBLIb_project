import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Addlibrarydatabase from "../pages/AdlibraryDatabase";
import SavedAds from "../pages/SavedAds";
import ContactSupport from "../pages/ContactSupport";
import AccountSettings from "../pages/AccountSettings";
import AdDeatailsTabs from "../pages/adDetails/AdDetailsTabs";
import { useDispatch } from "react-redux";
import { getSetCatSatus, loadMediaStart } from "../redux/ducks/mediaAds";
import { loadSubscriptionStart } from "../redux/ducks/subscription";
import { CustomAppBar } from "../components/CustomAppBar";
import { CustomSidebar } from "../components/CustomSidebar";
import { loadAccountSettingsStart } from "./../redux/ducks/accountSettings";
import Payment from "../pages/Plans"
import {  loadSavedAdsStart } from "../redux/ducks/saveAds_clientSide";
import { useSelector } from "react-redux";
// import { getSetCatSatus } from "../redux/ducks/filtered_Data";
import ActiveSubScription from "../ActiveSubScription";
import InActiveSubScription from "../InActiveSubScription";
import FadeLoader from "react-spinners/FadeLoader";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MainLayout = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.subscriptionData);
  const drawerOpenKey = "drawerOpen";
  const defaultOpen = localStorage.getItem(drawerOpenKey) === "true";
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  React.useEffect(() => {
    localStorage.setItem(drawerOpenKey, isOpen);
  }, [isOpen]);

  const pageScrolldataload = () => {
    dispatch(
      loadMediaStart({
        page_index: 0,
      })
    );
  };
  useEffect(() => {
    dispatch(loadSubscriptionStart());
    pageScrolldataload();
    dispatch(
      loadSavedAdsStart({
        page_index: 0,
      })
    );
    dispatch(loadAccountSettingsStart());
    dispatch(getSetCatSatus());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomSidebar isOpen={isOpen} />
        <CustomAppBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Box component="main" sx={{ flexGrow: 1, paddingLeft: 4 }}>
          <DrawerHeader />
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FadeLoader
                style={{
                  position: "relative",
                  opacity: 1,
                  zIndex: 1,
                  visibility: loading ? "visible" : "hidden",
                  marginTop: "250px",
                }}
                color="#00BFFF"
              />
            </Box>
          ) : (
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ActiveSubScription>
                    <Addlibrarydatabase />
                  </ActiveSubScription>
                }
              />
              <Route
                exact
                path="/savedAds"
                element={
                  <ActiveSubScription>
                    <SavedAds />
                  </ActiveSubScription>
                }
              />
              <Route
                exact
                path="/contactSupport"
                element={<ContactSupport />}
              />
              <Route
                exact
                path="/accountSettings"
                element={<AccountSettings />}
              />
              <Route
                exact
                path="/adDeatails/:adsId/*"
                element={
                  <ActiveSubScription>
                    <AdDeatailsTabs />
                  </ActiveSubScription>
                }
              />
              <Route
                exact
                path="/plans"
                element={
                  <InActiveSubScription>
                    <Payment />
                  </InActiveSubScription>
                }
              />
            </Routes>
          )}
        </Box>
      </Box>
    </>
  );
};
export default MainLayout;
