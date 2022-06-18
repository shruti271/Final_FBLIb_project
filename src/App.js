import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CustomAppBar } from "./components/CustomAppBar";
import { CustomSidebar } from "./components/CustomSidebar";
import { styled } from "@mui/material/styles";
import Addlibrarydatabase, { AllDataPage } from "./pages/AdlibraryDatabase";
import SavedAds from "./pages/SavedAds";
import ContactSupport from "./pages/ContactSupport";
import AccountSetings from "./pages/AccountSettings";
import Pagenotfound from "./components/PageNotFound";
import AdDeatailsTabs from "./pages/adDetails/AdDetailsTabs";
import { useDispatch } from "react-redux";
import { loadMediaStart } from "./redux/ducks/mediaAds";
import AdDeatails from "./pages/adDetails/adDeatails";
// import {
//   AppBar,
//   Avatar,
//   Button,
//   Divider,
//   Grid,
//   IconButton,
//   Menu,
//   MenuItem,
//   Stack,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import ContactForm from "./contactForm";
// import settings from "../src/assets/settings.svg";
// import billing from "../src/assets/billing.svg";
// import Logout from "../src/assets/Logout.svg";
// import contactUs from "../src/assets/contactUs.svg";
// import Notefictionicon from "../src/assets/Notefictionicon.svg";
// import Profileicon from "../src/assets/Profile.svg";
// import Polygonicon from "../src/assets/Polygon.svg";
// import MenuIcon from "@mui/icons-material/Menu";

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
  // const [anchoerEL, setAnchoerEL] = React.useState();
  // const [isMenuOptionActive, setIsMenuOptionActive] = React.useState("Acount");
  // const MenuListOptios = [
  //   { name: "Account Setings", icon: settings },
  //   { name: "Billing", icon: billing },
  //   { name: "Contact Support", icon: contactUs },
  //   { name: "Logout", icon: Logout },
  // ];
  // const navigate = useNavigate();

  useEffect(() => {
    console.log("isOpen from Parent: ", isOpen);
  }, [isOpen]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMediaStart());
  }, []);

  // const handleOpenMenu = (e) => {
  //   setAnchoerEL(e.currentTarget);
  // };
  // const handleCloseMenu = (e) => {
  //   setAnchoerEL(null);
  // };
  // // const [open, setOpen] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   if (isOpen === false) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomSidebar isOpen={isOpen} />

        <CustomAppBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route exact path="/" element={<AllDataPage />} />
            <Route exact path="/savedAds" element={<SavedAds />} />
            <Route exact path="/contactSupport" element={<ContactSupport />} />
            <Route exact path="/accountSetings" element={<AccountSetings />} />
            {/* <Route exact path="/adDeatails/:adsId" element={<AdDeatails />} /> */}
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
