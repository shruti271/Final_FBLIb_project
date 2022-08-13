import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  Box,
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import AdLibraryDatabaseIcon from "../SvgIcons/AdLibraryDatabaseIcon";
import SaveIcon from "../SvgIcons/SaveIcon";
import ContactIcon from "../SvgIcons/ContactIcon";
import settings from "../assets/settings.svg";
import logout from "../assets/Logout.svg";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services";
const useStyles = makeStyles((theme) => ({
  handbergurMenu: {
    margin: theme.spacing(1, 3),
    cursor: "pointer",
  },
  iconsize: {
    marginTop: theme.spacing(1),
  },
  sideBarButton: {
    background:
      "-webkit-linear-gradient(243.18deg, #B5EDFF 0%, #00CBFF 28.65%, #6721FF 85.94%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
const sideBarMenuItems = {
  ADLIBSDATABASE: "Adlibrary Database",
  SAVEDADS: "Saved Ads",
  ACCOUNTSETTINGS: "Account Settings",
  SUPPORT: "Contact Support",
  LOGOUT: "Log Out",
};
const MobileDrawer = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );
  const [currentPage, setCurrentPage] = useState();
  const [openLogOut, setOpenLogOut] = React.useState(false);
  useEffect(() => {
    if (window.location.pathname === `/ContactSupport`) {
      setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    } else if (window.location.pathname === `/`) {
      setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else if (window.location.pathname === `/savedAds`) {
      // document.title = "Savedads";
      setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    } else if (window.location.pathname === `/accountSettings`) {
      // document.title = "Savedads";
      setSelectedMenuItem(sideBarMenuItems.ACCOUNTSETTINGS);
    } else if (window.location.pathname.split("/").includes("adDeatails")) {
      console.log("666 data ", currentPage);
      if (currentPage === "/savedAds")
        setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
      else setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else {
      setSelectedMenuItem("");
    }
  });

  const handleClickOpen = () => {
    setOpenLogOut(true);
  };

  const handleClose = () => {
    setOpenLogOut(false);
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

  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={0}>
          <stop offset={0.1} stopColor="#B5EDFF" />
          <stop offset={0.3} stopColor="#00CBFF" />
          <stop offset={0.9} stopColor="#6721FF" />
        </linearGradient>
      </svg>
      <MenuIcon
        className={classes.handbergurMenu}
        sx={{ fill: "url(#linearColors)", fontSize: "35px" }}
        onClick={() => {
          setIsOpen(() => false);
          console.log("first");
        }}
      />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            width: "85%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid item xs={12}>
            <Divider textAlign="center"></Divider>
            <Stack
              direction={"row"}
              p={2.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FormControlLabel
                control={
                  <AdLibraryDatabaseIcon
                    fontSize="large"
                    fill={
                      selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                        ? "url(#linearColors)"
                        : "grey"
                    }
                  />
                }
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: 18, sm: 25 },
                  fontWeight: "bold",
                }}
                className={
                  selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                    ? classes.sideBarButton
                    : ""
                }
                onClick={() => {
                  setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
                  setIsOpen(() => false);
                  navigate("/");
                }}
              >
                Adlibrary Database
              </Typography>
            </Stack>
            <Grid item xs={12}>
              <Divider textAlign="center"></Divider>
              <Stack
                direction={"row"}
                p={2.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FormControlLabel
                  control={
                    <SaveIcon
                      fontSize="large"
                      fill={
                        selectedMenuItem === sideBarMenuItems.SAVEDADS
                          ? "url(#linearColors)"
                          : "grey"
                      }
                    />
                  }
                />
                <Typography
                  variant="h6"
                  // sx={{ fontWeight: "bold", color: "#3A3D4B" }}
                  sx={{
                    fontSize: { xs: 18, sm: 25 },
                    fontWeight: "bold",
                    color: "#2B2F42",
                  }}
                  className={
                    selectedMenuItem === sideBarMenuItems.SAVEDADS
                      ? classes.sideBarButton
                      : ""
                  }
                  onClick={() => {
                    setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
                    setIsOpen(() => false);
                    navigate("/savedAds");
                  }}
                >
                  Saved Ads
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Divider textAlign="center"></Divider>
              <Stack
                direction={"row"}
                p={2.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FormControlLabel
                  control={<img src={settings} width="30px" alt="icon" />}
                />
                <Typography
                  variant="h6"
                  // sx={{ fontWeight: "bold", color: "#3A3D4B" }}
                  sx={{
                    fontSize: { xs: 18, sm: 25 },
                    fontWeight: "bold",
                    color: "#2B2F42",
                  }}
                  className={
                    selectedMenuItem === sideBarMenuItems.ACCOUNTSETTINGS
                      ? classes.sideBarButton
                      : ""
                  }
                  onClick={() => {
                    setSelectedMenuItem(sideBarMenuItems.ACCOUNTSETTINGS);
                    setIsOpen(() => false);
                    navigate("/accountSettings");
                  }}
                >
                  Account Settings
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider textAlign="center"></Divider>
              <Stack
                direction={"row"}
                p={2.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FormControlLabel
                  control={
                    <ContactIcon
                      fontSize="large"
                      fill={
                        selectedMenuItem === sideBarMenuItems.SUPPORT
                          ? "url(#linearColors)"
                          : "grey"
                      }
                    />
                  }
                />
                <Typography
                  variant="h6"
                  // sx={{ fontWeight: "bold", color: "#3A3D4B" }}
                  sx={{
                    fontSize: { xs: 18, sm: 25 },
                    fontWeight: "bold",
                    color: "#2B2F42",
                  }}
                  className={
                    selectedMenuItem === sideBarMenuItems.SUPPORT
                      ? classes.sideBarButton
                      : ""
                  }
                  onClick={() => {
                    setSelectedMenuItem(sideBarMenuItems.SUPPORT);
                    setIsOpen(() => false);
                    navigate("/ContactSupport");
                  }}
                >
                  Contact Support
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider textAlign="center"></Divider>
              <Stack
                direction={"row"}
                p={2.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FormControlLabel
                  control={<img src={logout} width="30px" alt="icon" />}
                />
                <Typography
                  variant="h6"
                  // sx={{ fontWeight: "bold", color: "#3A3D4B" }}
                  sx={{
                    fontSize: { xs: 18, sm: 25 },
                    fontWeight: "bold",
                    color: "#2B2F42",
                  }}
                  className={
                    selectedMenuItem === sideBarMenuItems.LOGOUT
                      ? classes.sideBarButton
                      : ""
                  }
                  onClick={() => {
                    handleClickOpen();
                    setSelectedMenuItem(sideBarMenuItems.LOGOUT);
                  }}
                >
                  Log out
                </Typography>
                <Box p={2}>
                  <Dialog
                    open={openLogOut}
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
              </Stack>
            </Grid>
            <Divider textAlign="center"></Divider>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
export default MobileDrawer;
