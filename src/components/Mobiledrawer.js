import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import AdLibraryDatabaseIcon from "../SvgIcons/AdLibraryDatabaseIcon";
import SaveIcon from "../SvgIcons/SaveIcon";
import ContactIcon from "../SvgIcons/ContactIcon";
import settings from "../assets/settings.svg";
import logout from "../assets/Logout.svg";
const useStyles = makeStyles((theme) => ({
  handbergurMenu: {
    margin: theme.spacing(1, 3),
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
const Drawer = () => {
  const classes = useStyles();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sideBarMenuItems.ADLIBSDATABASE
  );

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
        sx={{ fill: "url(#linearColors)" }}
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
              sx={{ display: "flex", justifyContent: "center",cursor:"pointer" }}
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
                sx={{ display: "flex", justifyContent: "center",cursor:"pointer" }}
              >
                <FormControlLabel control={<SaveIcon fontSize="large" 
                 fill={
                    selectedMenuItem === sideBarMenuItems.SAVEDADS
                      ? "url(#linearColors)"
                      : "grey"
                  }
                />} />
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
                sx={{ display: "flex", justifyContent: "center",cursor:"pointer" }}
              >
                <FormControlLabel
                  control={<img src={settings} width="30px" alt="icon"
                  />}
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
                sx={{ display: "flex", justifyContent: "center",cursor:"pointer" }}
              >
                <FormControlLabel control={<ContactIcon fontSize="large" 
                fill={
                    selectedMenuItem === sideBarMenuItems.SUPPORT
                      ? "url(#linearColors)"
                      : "grey"
                  }
                />} />
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
                sx={{ display: "flex", justifyContent: "center",cursor:"pointer" }}
              >
                <FormControlLabel control={<img src={logout} width="30px" alt="icon" />} />
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
                  setSelectedMenuItem(sideBarMenuItems.LOGOUT);
                }}
                >
                  Log out
                </Typography>
              </Stack>
            </Grid>
            <Divider textAlign="center"></Divider>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
export default Drawer;


