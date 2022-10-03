import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import ContactIcon from "../SvgIcons/ContactIcon";
import SaveIcon from "../SvgIcons/SaveIcon";
import Menuicon from "../assets/bxs_left-arrow-circle.svg";
import AdLibraryDatabaseIcon from "../SvgIcons/AdLibraryDatabaseIcon";
import { useSelector } from "react-redux";

import ReactGA from "react-ga";
// const TRACKING_ID = "UA-335033091-1"; // OUR_TRACKING_ID UA-243661237-1
// const TRACKING_ID = "UA-243661237-1"; // OUR_TRACKING_ID UA-243661237-1
ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const drawerWidth = 276;

const sideBarMenuItems = {
  ADLIBSDATABASE: "Adlibrary Database",
  SAVEDADS: "Saved Ads",
  SUPPORT: "Contact Support",
  LOGOUT: "Log Out",
};

const useStyles = makeStyles(() => ({
  selectedMenu: {
    background:
      " linear-gradient(270deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
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

// export const useAnalyticsEventTracker = (category = "Blog category") => {
//   const eventTracker = (action = "test action", label = "test label") => {
//     ReactGA.event({ category: "saved", action: "done", label: "done" });
//   };
//   return eventTracker;
// };

export const CustomSidebar = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // const gaEventTracker = useAnalyticsEventTracker('Contact us');
  // ReactGA.event({ category: "saved", action: "done", label: "done" });

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );
  const filteredAds = useSelector((state) => state.filteredAds);
  const { paginationIndex } = useSelector((state) => state.filteredSavedAds);

  const [currentPage, setCurrentPage] = useState();
  const { state } = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.location.pathname === `/ContactSupport`) {
      setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    } else if (window.location.pathname.includes("savedAds")) {
      setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    } else if (window.location.pathname.includes("/")) {
      setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else if (window.location.pathname.split("/").includes("adDeatails")) {
      if (currentPage === "/savedAds")
        setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
      else setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else {
      setSelectedMenuItem("");
    }
    // if (window.location.pathname === `/ContactSupport`) {
    //   setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    // } else if (window.location.pathname === `/page=${filteredAds.paginationIndex + 1}`) {
    //   setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    // } else if (window.location.pathname === `/savedAds/page=${paginationIndex}`) {
    //   setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    // } else if (window.location.pathname.split("/").includes("adDeatails")) {
    //   if (currentPage === "/savedAds")
    //     setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    //   else setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    // } else {
    //   setSelectedMenuItem("");
    // }
  });

  useEffect(() => {
    if (state) setCurrentPage(state.fromPage);
    localStorage.setItem("IsDrawerOpen", JSON.stringify(isOpen));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Drawer variant="permanent" open={isOpen}>
        <Stack sx={{ height: "100%", background: "#002838" }}>
          <Box pt={9} sx={{ display: "flex", justifyContent: "end" }}>
            <img
              alt="small-logo"
              src={Menuicon}
              height="40"
              style={{
                cursor: "pointer",
                position: "fixed",
                marginLeft: "20px",
                marginTop: "-12px",
                transform: isOpen === false ? "rotate(180deg)" : "rotate(0deg)",
              }}
              onClick={() => {
                !isOpen ? setIsOpen(true) : setIsOpen(false);
              }}
            />
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
              sx={{ cursor: "pointer", marginTop: 5 }}
              className={
                selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                  ? classes.selectedMenu
                  : ""
              }
              onClick={() => {
                setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
                setCurrentPage("/");
                navigate(`/`);
              }}
            >
              <Stack
                direction={"row"}
                className={
                  isOpen ? classes.openDrawerItem : classes.closeDrawerItem
                }
              >
                <AdLibraryDatabaseIcon sx={{ color: "#FFFFFF" }} />
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
                cursor: "pointer",
              }}
              className={
                selectedMenuItem === sideBarMenuItems.SAVEDADS
                  ? classes.selectedMenu
                  : ""
              }
              onClick={() => {
                setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
                setCurrentPage("/savedAds");
                navigate(`/savedAds`);
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
            sx={{ marginTop: "auto", paddingRight: 1, paddingBlockEnd: 4 }}
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
                // eslint-disable-next-line react-hooks/rules-of-hooks
                // const gaEventTracker = useAnalyticsEventTracker('Contact us');
                // ReactGA.event({
                //   category: "saved",
                //   action: "done",
                //   label: "done",
                // });
                // ReactGA.event( {
                //   category:"trialStart",
                //   action:"trialStart",
                //   label:"trialStart",
                //   value:"trialStart"
                // })


                ReactGA.event({
                  category: "shruti clicked",
                  action: "shruti clicked",
                });


                // window.gtag("event", "trialStart");
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
