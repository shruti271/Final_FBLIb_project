import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Drawer } from "@material-ui/core";
import { logoutUser } from "../services";
import MobileDrawer from "./Mobiledrawer";
import useStyles from "../css/mediapage";
import EyeofEcomTabletLogo from "../assets/EyeofEcomTabletLogo.png";
import settings from "../assets/settings.svg";
import logout from "../assets/Logout.svg";
import contactUs from "../assets/contactUs.svg";
import mobile_logo from "../assets/mobile_logo.png";

const drawerWidth = 276;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "100%",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#fff",
  ...(open && {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function MobileAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { accountSettings } = useSelector((state) => state.accountSettings);

  const MenuListOptios = [
    { name: "Account Setings", icon: settings, url: "/accountSettings" },
    { name: "Contact Support", icon: contactUs, url: "/contactSupport" },
    { name: "Logout", icon: logout, url: "/auth/login" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [isMenuOptionActive, setIsMenuOptionActive] = React.useState("");
  const [anchoerEL, setAnchoerEL] = React.useState();

  const handleOpenMenu = (e) => {
    setAnchoerEL(e.currentTarget);
  };
  const userLogout = async () => {
    logoutUser().then(
      (data) => {
        localStorage.setItem("is_alive", false);
        handleCloseMenu();
        navigate("/auth/login");
      },
      (error) => {
        handleCloseMenu();
      }
    );
  };
  const handleCloseMenu = () => {
    setAnchoerEL(null);
  };

  useEffect(() => {
    setIsMenuOptionActive(window.location.pathname);
  }, []);

  return (
    <>
      <AppBar open={isOpen}>
        <Toolbar>
          <Stack
            direction={"row"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stack>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  isOpen ? setIsOpen(() => false) : setIsOpen(() => true);
                }}
              >
                <MenuIcon sx={{ fill: "#72E2FF", fontSize: "35px" }} />
              </IconButton>
              <Drawer
                PaperProps={{ style: { width: "100%", background: "#002838" } }}
                open={isOpen}
              >
                <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
              </Drawer>
            </Stack>
            <Stack>
              <Box sx={{ marginRight: "8px", display: "flex" }}>
                <img
                  alt="small-logo"
                  src={mobile_logo}
                  onClick={() => navigate("/auth/login")}
                  style={{ cursor: "pointer", width: "71px" }}
                />
              </Box>
            </Stack>
            <Stack>
              <Stack direction={"row"} spacing={2}>
                <Box
                  className={classes.avtar}
                  onClick={handleOpenMenu}
                  sx={{ cursor: "pointer" }}
                >
                  <PersonIcon />
                </Box>

                <Stack
                  className={classes.profileItem}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Menu
                    id="menu"
                    anchorEl={anchoerEL}
                    open={Boolean(anchoerEL)}
                    onClose={handleCloseMenu}
                    PaperProps={{
                      style: {
                        width: "auto",
                        background: "white",
                      },
                    }}
                  >
                    <Box
                      marginLeft={2.5}
                      marginTop={1}
                      marginBottom={1}
                      paddingRight={1}
                    >
                      <Typography variant="h4"  sx={{fontWeight:600,fontSize:"18px",lineHeight:"24px"}}>
                          {accountSettings &&
                            `${accountSettings?.first_name} ${accountSettings?.last_name}`}
                      </Typography>
                      <Typography noWrap  color="#2B2F42" sx={{fontWeight:400,fontSize:"14px",lineHeight:"24px",letterSpacing:"0.02em"}}>
                        {accountSettings && accountSettings?.email}
                      </Typography>
                    </Box>
                    <Divider />

                    {MenuListOptios.map((item, index) => {
                      return (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            if (item.name === "Logout") {
                              userLogout();
                            } else {
                              handleCloseMenu();
                              navigate(item.url);
                            }
                            setIsMenuOptionActive(window.location.pathname);
                          }}
                          style={{
                            background:
                              isMenuOptionActive === item.url
                                ? "#ebebeb"
                                : "white",
                          }}
                        >
                          <img
                            src={item.icon}
                            alt="img1"
                            style={{ height: "15px", width: "15px" }}
                          />
                          <Typography sx={{fontWeight:500,fontSize:"16px",lineHeight:"24px"}} marginLeft={1}>{item.name}</Typography>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
}

export default MobileAppBar;
