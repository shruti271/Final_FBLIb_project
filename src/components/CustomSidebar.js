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
import fbEyelogo from "../assets/eye_logo.svg";
import fbEyelogoText from "../assets/logo_text.svg";
import SaveIcon from "../SvgIcons/SaveIcon";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { getFaviconEl } from "../utils/getFaviconEl";
import Mobiledrawer from "./Mobiledrawer";
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
    background: "rgba(0, 203, 255, 0.05)",
    borderRight: "4px solid #00C9FD",
    borderRadius: "32px 0px 0px 32px",
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
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const userLogout = async () => {
    logoutUser().then(
      (data) => {
        localStorage.setItem("is_alive", false);
        navigate("/auth/login");
      },
      (error) => {
        console.log("Error While LogOut", error);
      }
    );
  };
  const { state } = useLocation();

  useEffect(() => {
    if (window.location.pathname === `/ContactSupport`) {
      document.title = "Contactsupport";
      setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    } else if (window.location.pathname === `/`) {
      const favicon = getFaviconEl();
      favicon.href = "vector.png";
      document.title = "Adlibsdatabase";
      setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else if (window.location.pathname === `/savedAds`) {
      document.title = "Savedads";
      setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    } else if (
      (window.location.pathname.split("/").includes("adDeatails"),
      (document.title = "Addeatails"))
    ) {
      console.log("666 data ", currentPage);
      if (currentPage === "/savedAds")
        setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
      else setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else {
      setSelectedMenuItem("");
    }
  });

  useEffect(() => {
    if (state) setCurrentPage(state.fromPage);
  }, []);

  return (
    <>
      <Drawer variant="permanent" open={isOpen}>
        <Stack sx={{ height: "100%" }}>
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              marginLeft: "7.5px",
              alignItems: "center",
              marginTop: "28px",
              marginBottom: "48px",
            }}
          >
            <Box sx={{ marginRight: "8px" }}>
              <img
                alt="small-logo"
                src={fbEyelogo}
                onClick={() => navigate("/auth/login")}
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Box>
              <img
                alt="small-logo"
                src={fbEyelogoText}
                height="20"
                onClick={() => navigate("/auth/login")}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box
            className={
              !isOpen
                ? classes.openDrawerItemWrapper
                : classes.closeDrawerItemWrapper
            }
          >
            <Box
              sx={{ cursor: "pointer" }}
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
                <svg width={0} height={0}>
                  <linearGradient
                    id="linearColors"
                    x1={1}
                    y1={1}
                    x2={0}
                    y2={1}
                    gradientTransform={`rotate(220px)`}
                  >
                    <stop offset={0.1} stopColor="#B5EDFF" />
                    <stop offset={0.3} stopColor="#00CBFF" />
                    <stop offset={0.9} stopColor="#6721FF" />
                  </linearGradient>
                </svg>
                <AdLibraryDatabaseIcon
                  sx={{ fill: selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE ?"url(#linearColors)":'grey' }}
                  // fill={
                  //   selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                  //     ? "#00CBFF"
                  //     : "grey"
                  // }
                />
                <Typography sx={{ marginLeft: "26px" }}>
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
          >
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
                const favicon = getFaviconEl();
                console.log("9", favicon);
                favicon.href = "saveicon.png";
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
                <SaveIcon
                 sx={{ fill: selectedMenuItem === sideBarMenuItems.SAVEDADS ?"url(#linearColors)":'grey' }}
                  // fill={
                  //   selectedMenuItem === sideBarMenuItems.SAVEDADS
                  //     ? "#00CBFF"
                  //     : "grey"
                  // }
                />

                <Typography sx={{ marginLeft: "26px" }}>Saved Ads</Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            className={
              !isOpen
                ? classes.openDrawerItemWrapper
                : classes.closeDrawerItemWrapper
            }
            sx={{ marginTop: "auto" }}
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
                const favicon = getFaviconEl();
                favicon.href = "contact.png";
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
                <ContactIcon
                sx={{ fill: selectedMenuItem === sideBarMenuItems.SUPPORT ?"url(#linearColors)":'grey' }}
                  // fill={
                  //   selectedMenuItem === sideBarMenuItems.SUPPORT
                  //     ? "#00CBFF"
                  //     : "grey"
                  // }
                />
                <Typography sx={{ marginLeft: "26px" }}>
                  Contact Support
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
          >
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
                className={
                  isOpen ? classes.openDrawerItem : classes.closeDrawerItem
                }
                onClick={handleClickOpen}
              >
                <img alt="Logout" src={logout} width="17px" />
                <Typography sx={{ marginLeft: "33px" }}>Log Out</Typography>
              </Stack>
              <Box p={2}>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Typography
                        variant="h5"
                        p={2}
                        sx={{ fontWeight: "bold", color: "#2B2F42" }}
                      >
                        Are You Sure For Logout ?
                      </Typography>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    sx={{ marginRight: "inherit", paddingBottom: "16px" }}
                  >
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="primary"
                      style={{
                        borderRadius: 50,
                        backgroundColor: "#00CBFF",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={userLogout}
                      variant="contained"
                      color="primary"
                      style={{
                        borderRadius: 50,
                        backgroundColor: "#00CBFF",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};
