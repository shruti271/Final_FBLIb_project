import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import logout from "../assets/Logout.svg";
import { logoutUser } from "../services";
import AdLibraryDatabaseIcon from "../SvgIcons/AdLibraryDatabaseIcon";
import ContactIcon from "../SvgIcons/ContactIcon";
// import fbEyelogo from "../assets/eye_logo.svg";
// import fbEyelogoText from "../assets/logo_text.svg";
import SaveIcon from "../SvgIcons/SaveIcon";
import Menuicon from "../assets/bxs_left-arrow-circle.svg";
import Menuiconrightside from "../assets/bxs_Right-arrow-circle (1).svg";
import { IconButton } from "@mui/material";
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
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "32.5271px",
    lineHeight: "43px",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    texFillColor: "transparent",
  },
  selectedMenu: {
    background:
      " linear-gradient(270deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
    // borderRight: "4px solid #00C9FD",
    borderRadius: "32px",
  },
  openDrawerItemWrapper: {
    paddingRight: "6px",
    paddingLeft: "6px",
  },
  closeDrawerItemWrapper: {
    padding: "0px",
  },
  openDrawerItem: {
    marginLeft: "28px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  closeDrawerItem: {
    marginLeft: "22px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

const drawerWidth = 276;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 5px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 5px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  [theme.breakpoints.down("sm")]: {
    width: 0,
    display: "none",
  },
  flexShrink: 0,
  backgroundColor: "red !Important",
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

export const CustomSidebar = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );
  const [currentPage, setCurrentPage] = useState();
  const { state } = useLocation();

  useEffect(() => {
    if (window.location.pathname === `/ContactSupport`) {
      setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    } else if (window.location.pathname === `/`) {
      setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else if (window.location.pathname === `/savedAds`) {
      setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    } else if (window.location.pathname.split("/").includes("adDeatails")) {
      if (currentPage === "/savedAds")
        setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
      else setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else {
      setSelectedMenuItem("");
    }
  });

  useEffect(() => {
    if (state) setCurrentPage(state.fromPage);
    localStorage.setItem("IsDrawerOpen", JSON.stringify(isOpen));
  }, []);
  return (
    <>
      <Drawer variant="permanent" open={isOpen}>
        <Stack sx={{ height: "100%", background: "#002838" }}>
              <Stack pt={9} ml={isOpen === true ? 35 :10}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => {
                    !isOpen ? setIsOpen(true) : setIsOpen(false);
                  }}
                  edge="start"
                >
                  <img
                    alt="small-logo"
                    src={Menuicon}
                    height="40"
                    style={{
                      cursor: "pointer",
                      // width: "290px",
                      position: "fixed",
                      // backgroundColor:"#FFFFFF"
                      transform:isOpen === true ?"rotate(180deg)":"rotate(0deg)" 
                    }}
                  />
                </IconButton>
              </Stack>
          {/* </Box> */}
          <Box
            className={
              !isOpen
                ? classes.openDrawerItemWrapper
                : classes.closeDrawerItemWrapper
            }
            sx={{ paddingRight: 1 }}
          >
            <Box
              sx={{ cursor: "pointer", marginTop: 4 }}
              className={
                selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                  ? classes.selectedMenu
                  : ""
              }
              onClick={() => {
                setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
                setCurrentPage("/");
                navigate("/");
              }}
            >
              <Stack
                direction={"row"}
                className={
                  isOpen ? classes.openDrawerItem : classes.closeDrawerItem
                }
              >
                <AdLibraryDatabaseIcon
                  sx={{ color: "#FFFFFF" }}
                  // fill={
                  //   selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                  //     ? "#00CBFF"
                  //     : "grey"
                  // }
                />
                <Typography
                  color="#FFFFFF"
                  sx={{ marginLeft: "26px", fontWeight: 500 }}
                >
                  Adilbrary Database
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box
            className={
              !isOpen
                ? classes.openDrawerItemWrapper
                : classes.closeDrawerItemWrapper
            }
            sx={{ paddingRight: 1 }}
          >
            <Box
              sx={{
                // marginTop: "6px",
                cursor: "pointer",
                // marginRight:1
              }}
              className={
                selectedMenuItem === sideBarMenuItems.SAVEDADS
                  ? classes.selectedMenu
                  : ""
              }
              onClick={() => {
                setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
                setCurrentPage("/savedAds");
                navigate("/savedAds");
              }}
            >
              <Stack
                direction={"row"}
                className={
                  isOpen ? classes.openDrawerItem : classes.closeDrawerItem
                }
              >
                <SaveIcon sx={{ color: "#FFFFFF" }} />

                <Typography
                  color="#FFFFFF"
                  sx={{ marginLeft: "26px", fontWeight: 500 }}
                >
                  Saved Ads
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            className={
              !isOpen
                ? classes.openDrawerItemWrapper
                : classes.closeDrawerItemWrapper
            }
            sx={{ marginTop:"auto", paddingRight: 1,paddingBlockEnd:4 }}
          >
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
                className={
                  isOpen ? classes.openDrawerItem : classes.closeDrawerItem
                }
              >
                <ContactIcon sx={{ color: "#FFFFFF" }} />
                <Typography
                  color="#FFFFFF"
                  sx={{ marginLeft: "26px", fontWeight: 500 }}
                >
                  Contact Support
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};