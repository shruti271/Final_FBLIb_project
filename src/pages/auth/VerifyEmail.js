import fbaddlogo from "../../assets/fbaddlogo.png";
import React, { useEffect, useState } from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
import { activatyoureemail } from "../../services";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const [verifiactionres, setVerifiactionres] = useState(null);
  const getTkn = useLocation()?.search;
  const verifymail = async () => {
    const res = await activatyoureemail({ getTkn });
    setVerifiactionres(res.data.message);
  };
  console.log("555---", verifiactionres);
  console.log("getTkn", getTkn);
  useEffect(() => {
    setTimeout(() => {
      if (getTkn !== undefined) {
        verifymail();
      }
    }, 3000);
  }, []);
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Grid container>
        <Box
          style={{
            width: "50%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid>
            <Card
              style={{
                maxWidth: 632,
                padding: "20px 5px",
                margin: "0 auto",
                backgroundColor: "#F6F6FB",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <img alt="logo" src={fbaddlogo} className={global.logo} />
                <Box style={{ padding: "30px 32px" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        I Acctivating Your Account
                      </Typography>
                      {verifiactionres === "User Verified" ? (
                        <Typography align="center">
                          Please Click Login Button
                        </Typography>
                      ) : (
                        <Typography align="center">
                          Please wait while your activate Your account
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Box
                    mt={2}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {verifiactionres === "User Verified" ? (
                      <Button
                        variant="contained"
                        size="large"
                        className={global.Crateaccountbutton}
                        sx={{
                          borderRadius: "14px",
                          textTransform: "none",
                          fontSize: "20px",
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
