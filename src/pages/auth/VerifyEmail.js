import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { CssBaseline } from "@material-ui/core";
import { activatyoureemail } from "../../services";
import { themeLight, globalStyles } from "../../css/globalcss";
import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png";

const VerifyEmail = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const getTkn = useLocation()?.search;

  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const paddingcardsmalldevice= useMediaQuery(theme.breakpoints.down("sm")); 
  const [verifiactionres, setVerifiactionres] = useState(null);

  const verifymail = async () => {
    const res = await activatyoureemail({ getTkn });
    setVerifiactionres(res.data.message);
  };

  useEffect(() => {
    setTimeout(() => {
      if (getTkn !== undefined) {
        verifymail();
      }
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {showhidelogosmalldevice ? (
            <img
              alt="logo"
              src={fbaddlogowhitecolor}
              className={global.logo}
              onClick={() => navigate("/auth/login")}
            />
          ) : (
            ""
          )}
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
                {showhidelogolargedevice ? (
                  <img
                    alt="logo"
                    src={fbaddlogo}
                    className={global.logo}
                    onClick={() => navigate("/auth/login")}
                  />
                ) : (
                  ""
                )}
                <Box sx={{ padding:paddingcardsmalldevice ? "" :"1vmax 2.5vmax" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
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
                          <Typography variant="h6" align="center" mb={3} sx={{letterSpacing:" 0.04em"}}>
                            Please wait while we verify your email.
                          </Typography>
                        </>
                      ) : verifiactionres === "User Verified" ? (
                        <>
                        <Typography
                          variant="h5"
                          align="center"
                          mb={3}
                          sx={{ fontWeight: "bold" }}
                        >
                          Your email has been verified.
                        </Typography>
                           <Typography
                           variant="h6"
                           align="center"
                           mb={2}
                           sx={{ fontWeight: 500 }}
                         >
                           Welcome to Eye of Ecom 
                         </Typography>
                           <Typography
                           variant="h6"
                           align="center"
                           mb={2}
                           sx={{ fontWeight: 500 }}
                         >
                          Please click below to log in.
                         </Typography>
                         </>
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
                    mt={1}
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
                          fontWeight:600
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
