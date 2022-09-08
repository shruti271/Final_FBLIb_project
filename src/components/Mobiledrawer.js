import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { logoutUser } from "../services";
import AdLibraryDatabaseIcon from "../SvgIcons/AdLibraryDatabaseIcon";
import SaveIcon from "../SvgIcons/SaveIcon";
import ContactIcon from "../SvgIcons/ContactIcon";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  handbergurMenu: {
    margin: theme.spacing(1, 3),
    cursor: "pointer",
  },
  iconsize: {
    marginTop: theme.spacing(1),
  },
  sideBarButton: {
    background: " #FFFFFF",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  mobiledrawerfontalign: {
    [theme.breakpoints.down("xs")]: {
      marginRight: "70px",
    },
    marginRight: "98px",
  },
  accontsettingalign: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "12px",
    },
    marginRight: "24px",
  },
  contactsupportalign: {
    [theme.breakpoints.down("xs")]: {
      // marginRight: "12px",
      marginLeft: "12px",
    },
    marginRight: "22px",
  },
  logoutalign: {
    [theme.breakpoints.down("xs")]: {
      marginRight: "50px",
    },
    marginRight: "88px",
  },
  selectedMenu: {
    background:
      " linear-gradient(270deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
    borderRadius: "80px",
  },
}));

const sideBarMenuItems = {
  ADLIBSDATABASE: "Adlibrary Database",
  SAVEDADS: "Saved Ads",
  ACCOUNTSETTINGS: "Account Settings",
  SUPPORT: "Contact Support",
  LOGOUT: "Log Out",
};

const MobileDrawer = ({ setIsOpen }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const divdercenter = useMediaQuery(theme.breakpoints.up("sm"));

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );
  const filteredAds = useSelector((state) => state.filteredAds);
  const { paginationIndex } = useSelector(
    (state) => state.filteredSavedAds
  );
  

  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState();
  const [openLogOut, setOpenLogOut] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.location.pathname === `/ContactSupport`) {
      setSelectedMenuItem(sideBarMenuItems.SUPPORT);
    } else if (window.location.pathname === `/`) {
      setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
    } else if (window.location.pathname === `/savedAds`) {
      setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
    } else if (window.location.pathname === `/accountSettings`) {
      setSelectedMenuItem(sideBarMenuItems.ACCOUNTSETTINGS);
    } else if (window.location.pathname.split("/").includes("adDeatails")) {
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
      <MenuIcon
        className={classes.handbergurMenu}
        sx={{ fill: "#FFFFFF", fontSize: "35px" }}
        onClick={() => {
          setIsOpen(() => false);
        }}
      />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            width: divdercenter ? "77%" : "100%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              p={1.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                marginRight: selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE ?"0px":"20px"
              }}
              onClick={() => {
                setSelectedMenuItem(sideBarMenuItems.ADLIBSDATABASE);
                setIsOpen(() => false);
                navigate(`/`)
              }}
            >
              <Box
                sx={{ display: "flex", padding: "20px 40px" }}
                className={
                  selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                    ? classes.selectedMenu
                    : ""
                }
              >
                <FormControlLabel
                  control={
                    <AdLibraryDatabaseIcon
                      fontSize="large"
                      fill={
                        selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                          ? "#FFFFFF"
                          : "#FFFFFF"
                      }
                    />
                  }
                />
                <Typography
                  variant="h6"
                  color="#FFFFFF"
                  sx={{
                    fontSize: { xs: 18, sm: 25},
                    fontWeight: selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                    ? 600
                    : 400,
                  }}
                  className={
                    selectedMenuItem === sideBarMenuItems.ADLIBSDATABASE
                      ? classes.sideBarButton
                      : ""
                  }
                >
                  Adlibrary Database
                </Typography>
              </Box>
            </Stack>
            <Grid item xs={12}>
              <Stack
                direction={"row"}
                p={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                className={classes.mobiledrawerfontalign}
                onClick={() => {
                  setSelectedMenuItem(sideBarMenuItems.SAVEDADS);
                  setIsOpen(() => false);
                  navigate("/savedAds");
                }}
              >
                <Box
                  sx={{ display: "flex", padding: "20px 40px" }}
                  className={
                    selectedMenuItem === sideBarMenuItems.SAVEDADS
                      ? classes.selectedMenu
                      : ""
                  }
                >
                  <FormControlLabel
                    control={
                      <SaveIcon
                        fontSize="large"
                        fill={
                          selectedMenuItem === sideBarMenuItems.SAVEDADS
                            ? "#FFFFFF"
                            : "#FFFFFF"
                        }
                      />
                    }
                  />
                  <Typography
                    variant="h6"
                    color="#FFFFFF"
                    sx={{
                      fontSize: { xs: 18, sm: 25 },
                      fontWeight: selectedMenuItem === sideBarMenuItems.SAVEDADS
                    ? 600
                    : 400,
                    }}
                    className={
                      selectedMenuItem === sideBarMenuItems.SAVEDADS
                        ? classes.sideBarButton
                        : ""
                    }
                  >
                    Saved Ads
                  </Typography>
                </Box>
              </Stack>
            </Grid>

              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  p={2.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginRight: selectedMenuItem === sideBarMenuItems.ACCOUNTSETTINGS ?"28px":"42px"
                  }}
                  className={classes.accontsettingalign}
                  onClick={() => {
                    setSelectedMenuItem(sideBarMenuItems.ACCOUNTSETTINGS);
                    setIsOpen(() => false);
                    navigate("/accountSettings");
                  }}
                >
                    <Box sx={{display:"flex",padding:"20px 40px"}}
                  className={
                    selectedMenuItem === sideBarMenuItems.ACCOUNTSETTINGS
                      ? classes.selectedMenu
                      : ""
                  }
                >
                  
                  <FormControlLabel
                    control={
                      <SettingsIcon
                        fontSize="large"
                        style={{ fill: "#FFFFFF" }}
                      />
                    }
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: 18, sm: 25 },
                      fontWeight: selectedMenuItem === sideBarMenuItems.ACCOUNTSETTINGS
                      ? 600
                      : 400,
                      color: "#FFFFFF",
                      marginTop:divdercenter?"0px":"5px"
                    }}
                    className={
                      selectedMenuItem === sideBarMenuItems.ACCOUNTSETTINGS
                        ? classes.sideBarButton
                        : ""
                    }
                  >
                    Account Settings
                  </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  p={1.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginRight: selectedMenuItem === sideBarMenuItems.SUPPORT ?"24px":"40px"
                  }}
                  className={classes.contactsupportalign}
                  onClick={() => {
                    setSelectedMenuItem(sideBarMenuItems.SUPPORT);
                    setIsOpen(() => false);
                    navigate("/ContactSupport");
                  }}
                >
                  <Box sx={{display:"flex",padding:"20px 40px"}}
                  className={
                    selectedMenuItem === sideBarMenuItems.SUPPORT
                      ? classes.selectedMenu
                      : ""
                  }
                >
                  <FormControlLabel
                    control={
                      <ContactIcon
                        fontSize="large"
                        fill={
                          selectedMenuItem === sideBarMenuItems.SUPPORT
                            ? "#FFFFFF"
                            : "#FFFFFF"
                        }
                      />
                    }
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: 18, sm: 25 },
                      fontWeight: selectedMenuItem === sideBarMenuItems.SUPPORT
                      ? 600
                      : 400,
                      color: "#FFFFFF",
                    }}
                    className={
                      selectedMenuItem === sideBarMenuItems.SUPPORT
                        ? classes.sideBarButton
                        : ""
                    }
                  >
                    Contact Support
                  </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  p={2.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  className={classes.logoutalign}
                >
                  <FormControlLabel
                    control={<LogoutIcon
                      fontSize="large"
                      style={{ fill: "#FFFFFF" }}
                    />}
                  />
                  <Typography
                    variant="h6"                    
                    sx={{
                      fontSize: { xs: 18, sm: 25 },
                      fontWeight: 500,
                      color: "#FFFFFF",
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
            </Grid>
          </Box>
        </Grid>
    </>
  );
};
export default MobileDrawer;
