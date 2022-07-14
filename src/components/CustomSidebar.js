import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {  Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import appLogo from "../assets/appLogo.svg";
import logout from "../assets/Logout.svg";
import { logoutUser } from "../services";
// import SaveIcon from "../SvgIcons/SaveIcon";
import AdLibraryDatabaseIcon from "../SvgIcons/AdLibraryDatabaseIcon";
import ContactIcon from "../SvgIcons/ContactIcon";
import fbaddlogo from "../assets/fbaddlogo.png"
import fbEyelogo from "../assets/eye_logo.svg"
import fbEyelogoText from "../assets/logo_text.svg"
import SaveIcon from "../SvgIcons/SaveIcon";
import { setIsAlive } from "../redux/ducks/session"

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontStyle: "normal !important",
    fontWeight: "900 !important",
    fontSize: "24px !important",
    lineHeight: "31px !important",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  logoText: {
    fontFamily: 'Neue Haas Grotesk Display Pro',
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "32.5271px",
    lineHeight: "43px",
    background: "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    texFillColor: "transparent"
  },
  selectedMenu: {
    background:
      "linear-gradient(270deg, rgba(0, 203, 255, 0.5) 0%, rgba(0, 203, 255, 0.03) 100%)",
    borderRadius: "33px",
  },
  openDrawerItemWrapper:{
    paddingRight:"6px",
    paddingLeft:"6px"
  },
  closeDrawerItemWrapper:{
    padding: "0px"
  },
  openDrawerItem:{
    marginLeft: "28px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  closeDrawerItem:{
    marginLeft: "22px",
    paddingTop: "20px",
    paddingBottom: "20px",
  }
}));

const drawerWidth = 276;

const openedMixin = (theme) => ({
  width: drawerWidth,
  // marginLeft: "8px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  // padding: theme.spacing(0.5),
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 5px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 5px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const sideBarMenuItems = {
  ADLIBSDATABASE: "Adlibrary Database",
  SAVEDADS: "Saved Ads",
  SUPPORT: "Contact Support",
  LOGOUT: "Log Out",
};

export const CustomSidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );

  const userLogout = async () => {
    logoutUser().then((data)=>{
      // dispatch(setIsAlive(false));
      localStorage.setItem("is_alive", false);
      navigate("/auth/login");
    }, (error)=>{
      console.log("Error While LogOut", error)
    });
  };

  useEffect(() => {
    if (window.location.pathname === `/ContactSupport`) {
      setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    } else if (window.location.pathname === `/`) {
      setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else if (window.location.pathname === `/savedAds`) {
      setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    } else {
      setSelectedMenuItem("");
    }
  }, []);
  return (
    <>
      <Drawer variant="permanent" open={isOpen}>
        <Stack sx={{ height: "100%"}}>
          <Box
            onClick={() => navigate("/")}
            sx={{
              display:"flex",
              marginLeft: "7.5px",
              alignItems:"center",
              marginTop:"28px",
              marginBottom:"48px"
            }}
          >
            <Box sx={{marginRight: "8px"}}><img alt="small-logo" src={fbEyelogo} /></Box> 
            <Box><img alt="small-logo" src={fbEyelogoText} height="20"/></Box>
            
          </Box>
          <Box className={!isOpen ? classes.openDrawerItemWrapper : classes.closeDrawerItemWrapper}>
          <Box
            sx={{ cursor: "pointer"}}
            className={
              selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                ? classes.selectedMenu
                : ""
            }
            onClick={() => {
              setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
              navigate("/");
            }}
          >
            <Stack
              direction={"row"}
              className={isOpen ? classes.openDrawerItem : classes.closeDrawerItem}
            >              
              <AdLibraryDatabaseIcon fill={ selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE ?"#00CBFF":"grey"} />
              <Typography sx={{ marginLeft: "26px" }}>
                Adilbrary Database
              </Typography>
            </Stack>
          </Box>
          </Box>
          
          <Box className={!isOpen ? classes.openDrawerItemWrapper : classes.closeDrawerItemWrapper}>
          <Box
            sx={{
              marginTop: "6px",
              cursor: "pointer",
            }}
            className={
              selectedMenuItem === sideBarMenuItems.SAVEDADS
                ? classes.selectedMenu
                : ""
            }
            onClick={() => {
              setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
              navigate("/savedAds");
            }}
          >
            <Stack
              direction={"row"}
              className={isOpen ? classes.openDrawerItem : classes.closeDrawerItem}
            >
              

              <SaveIcon fill={ selectedMenuItem === sideBarMenuItems.SAVEDADS?"#00CBFF":"grey"} />

              <Typography sx={{ marginLeft: "26px" }}>Saved Ads</Typography>
            </Stack>
          </Box>
          </Box>
          <Box className={!isOpen ? classes.openDrawerItemWrapper : classes.closeDrawerItemWrapper} sx={{marginTop: "auto"}}>
          <Box
            sx={{
              cursor: "pointer",
            }}
            className={
              selectedMenuItem === sideBarMenuItems.SUPPORT
                ? classes.selectedMenu
                : ""
            }
            onClick={() => {
              setSelectedMenuItem(sideBarMenuItems.SUPPORT);
              navigate("/ContactSupport");
            }}
          >
            <Stack
              direction={"row"}
              className={isOpen ? classes.openDrawerItem : classes.closeDrawerItem}
            >
              <ContactIcon fill={selectedMenuItem === sideBarMenuItems.SUPPORT?"#00CBFF":"grey"}/>
              <Typography sx={{ marginLeft: "26px" }}>
                Contact Support
              </Typography>
            </Stack>
          </Box>
          </Box>
          <Box className={!isOpen ? classes.openDrawerItemWrapper : classes.closeDrawerItemWrapper}>
          <Box
            sx={{
              marginTop: "3px",
              display: "flex",
              marginBottom: "60px",
              cursor: "pointer",
            }}
            className={
              selectedMenuItem === sideBarMenuItems.LOGOUT
                ? classes.selectedMenu
                : ""
            }
            onClick={() => {
              setSelectedMenuItem(sideBarMenuItems.LOGOUT);
            }}
          >
            <Stack
              direction={"row"}
              className={isOpen ? classes.openDrawerItem : classes.closeDrawerItem}
              onClick={userLogout}
            >
              <img alt="Logout" src={logout} width="17px" />
              <Typography sx={{ marginLeft: "33px" }}>Log Out</Typography>
            </Stack>
          </Box>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};