import fbaddlogo from "../../assets/Eye of Ecom Logo Blue 08-11 2 1.svg";
import fbaddlogowhitecolor from "../../assets/new.svg"
import React, { useEffect, useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
import { activatyoureemail } from "../../services";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const theme = useTheme()
  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [verifiactionres, setVerifiactionres] = useState(null);
  const getTkn = useLocation()?.search;
  const verifymail = async () => {
    const res = await activatyoureemail({ getTkn });
    setVerifiactionres(res.data.message);
  };
  console.log("555---", verifiactionres);
  console.log("getTkn", getTkn);
  useEffect(() => {
    // document.title = "VerifyEmail - Eye of Ecom "
    setTimeout(() => {
      if (getTkn !== undefined) {
        verifymail();
      }
    }, 1000);
  }, []);
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Grid container>
        <Box
          style={{
            width: "85%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
               {showhidelogosmalldevice ?
           <img
                alt="logo"
                src={fbaddlogowhitecolor}
                className={global.logo}
                onClick={() => navigate("/auth/login")}
              /> :""}
          <Grid>
            <Card
              style={{
                maxWidth: 632,
                padding: "20px 5px",
                margin: "15px auto",
                backgroundColor: "#F6F6FB",
                borderRadius: "16px",
              }}
            >
              <CardContent>
              {showhidelogolargedevice ?
              <img
                alt="logo"
                src={fbaddlogo}
                className={global.logo}
                onClick={() => navigate("/auth/login")}
              /> :""}
                <Box style={{  padding: "2vmax 2.5vmax"}}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      {/* <Typography
                        variant="h5"
                        align="center"
                        mb={3}
                        sx={{ fontWeight: "bold" }}
                      >
                        {verifiactionres ===
                        "User account has already been activated."
                          ? "Your Account has already been activated !"
                          : "  Verifying Your Email"}
                      </Typography>
                      {verifiactionres === "User Verified" ? (
                        <Typography align="center">
                          Please Click Login Button
                        </Typography>
                      ) : (
                        <Typography align="center">
                          {verifiactionres ===
                          "User account has already been activated."
                            ? ""
                            : "Please wait while your activate Your account"}
                        </Typography>
                      )} */}
                      {!verifiactionres ? (
                        <>
                        <Typography
                          variant="h5"
                          align="center"
                          mb={3}
                          sx={{ fontWeight: "bold" }}
                        >
                         Verifying your email...
                        </Typography>
                              <Typography
                              variant="h6"
                              align="center"
                              mb={3}
                            >
                              Please wait while we verify your email.
                            </Typography>
                            </>
                      ) : verifiactionres === "User Verified" ? (
                        <Typography
                          variant="h5"
                          align="center"
                          mb={3}
                          sx={{ fontWeight: "bold" }}
                        >
                          Your email has been verified.
                        </Typography>
                      ) : verifiactionres ===
                        "Token has already been expired" ? (
                        <Alert severity="warning">
                          You Token has already been expired
                        </Alert>
                      ) : (
                        <Typography
                          variant="h5"
                          align="center"
                          mb={3}
                          sx={{ fontWeight: "bold" }}
                        >
                          Your Account has already been activated !{" "}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Box
                    mt={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {verifiactionres === "User Verified" ||
                    verifiactionres ===
                      "User account has already been activated." ||
                    verifiactionres === "Token has already been expired" ? (
                      <Button
                        variant="contained"
                        size="large"
                        className={global.Crateaccountbutton}
                        sx={{
                          borderRadius: "14px",
                          textTransform: "none",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/auth/login")}
                      >
                        Login
                      </Button>
                    ) : (
                      <CircularProgress></CircularProgress>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default VerifyEmail;
