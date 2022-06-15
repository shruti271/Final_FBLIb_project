import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CustomAppBar } from "./components/CustomAppBar";
import { CustomSidebar } from "./components/CustomSidebar";
import { styled } from "@mui/material/styles";
import Addlibrarydatabase from "./pages/AdlibraryDatabase";
import SavedAds from "./pages/SavedAds";
import ContactSupport from "./pages/ContactSupport";
import AccountSetings from "./pages/AccountSettings";
import Pagenotfound from "./components/PageNotFound";
import AdDeatailsTabs from "./pages/adDetails/AdDetailsTabs";
import { useDispatch, useSelector } from "react-redux";
import { loadMediaStart } from "./redux/ducks/mediaAds";
import { Button } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    console.log("isOpen from Parent: ", isOpen);
  }, [isOpen]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMediaStart());
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomAppBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <CustomSidebar isOpen={isOpen} />        
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          <DrawerHeader />
          <Routes>
            <Route exact path="/" element={<Addlibrarydatabase />} />
            <Route exact path="/savedAds" element={<SavedAds />} />
            <Route exact path="/contactSupport" element={<ContactSupport />} />
            <Route exact path="/accountSetings" element={<AccountSetings />} />
            <Route
              exact
              path="/adDeatails/:adsId/*"
              element={<AdDeatailsTabs />}
            />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};
export default App;
