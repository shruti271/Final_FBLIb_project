import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Divider, Menu, MenuItem, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useStyles from "../css/mediapage";
import { logoutUser } from "../services";
import EyeofEcomLaptopLogo from "../assets/EyeofEcomLaptopLogo.png";
import settings from "../assets/settings.svg";
import logout from "../assets/Logout.svg";
import contactUs from "../assets/contactUs.svg";

const drawerWidth = 276;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#fff",
  zIndex: 1200,
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const CustomAppBar = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { accountSettings } = useSelector((state) => state.accountSettings);

  const MenuListOptios = [
    { name: "Account Setings", icon: settings, url: "/accountSettings" },
    { name: "Contact Support", icon: contactUs, url: "/contactSupport" },
    { name: "Logout", icon: logout, url: "/auth/login" },
  ];

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
            <Stack direction={"row"}>
              <img
                src={EyeofEcomLaptopLogo}
                alt="444"
                height={33}
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              />
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
                  <Box
                    onClick={handleOpenMenu}
                    sx={{
                      display: "flex",
                      flexWrap: "nowrap",
                    }}
                  >
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#2B2F42",
                        marginRight: "16px",
                      }}
                    >
                      {accountSettings &&
                        `${accountSettings?.first_name} ${accountSettings?.last_name}`}
                    </Typography>
                    <Box
                      className={classes.avtar}
                      sx={{
                        borderRadius: "4px",
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <ArrowDropDownIcon />
                    </Box>
                  </Box>

                  <Menu
                    id="menu"
                    anchorEl={anchoerEL}
                    open={Boolean(anchoerEL)}
                    onClose={handleCloseMenu}
                    PaperProps={{
                      style: {
                        marginTop: 13,
                        maxHeight: 40 * 6,
                        width: "35ch",
                        background: "white",
                      },
                    }}
                  >
                    <Box marginLeft={3} marginTop={1} marginBottom={1}>
                      <Typography>
                        <b>
                          {accountSettings &&
                            `${accountSettings?.first_name} ${accountSettings?.last_name}`}
                        </b>
                      </Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
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
                          <Typography
                            marginLeft={1}
                            sx={{ fontWeight: 500, fontSize: "16px" }}
                          >
                            {item.name}
                          </Typography>
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
};
