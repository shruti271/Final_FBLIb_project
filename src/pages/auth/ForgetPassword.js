<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { CircularProgress, Stack } from "@mui/material";
import appLogo from "../../assets/appLogo.svg";
import Backtologin from "../../assets/Backtologinicon.svg";
import { forgotPassword, isAlive } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetvalidationSchema } from "./../../utils/validationSchemas";

const themeLight = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});
const useStyles = makeStyles(() => ({
  logo: {
    height: "37px !important",
    width: "65px !important",
    marginRight: "10px",
    marginTop: "4px",
  },
  title: {
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontStyle: "normal !important",
    fontWeight: "900 !important",
    fontSize: "32.5271px !important",
    lineHeight: "43px !important",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  signin: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "36px",
    color: "#2B2F42",
  },

  forgetPasswordbutton: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontSize: "22px",
    fontHeight: 600,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "capitalize",
    color: "#F6F6FB",
    width: "60%",
  },
  BackToLogInArrow: {
    height: "16px !important",
    width: "14px !important",
    margin: "2px",

    marginRight: "10px",
  },
  Backtologinfont: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#2B2F42",
  },
=======
import appLogo from "../../assets/appLogo.svg";
import React, { useState, useEffect } from "react";
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, CircularProgress, Grid, Stack, TextField, Typography } from "@mui/material";
import Backtologin from "../../assets/Backtologinicon.svg";
import { useNavigate } from "react-router-dom";
import { forgetvalidationSchema, forgotPassword, isAlive } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
const useStyles = makeStyles(() => ({
>>>>>>> auth-changes
  Backtologinbutton: {
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
  },
}));

const ForgetPassword = () => {
  const classes = useStyles();
<<<<<<< HEAD

=======
  const global = globalStyles()
>>>>>>> auth-changes
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetvalidationSchema),
  });

  const forgetPassword = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);
    const response = await forgotPassword(formData);
    if (response.success) {
      setLoading(false);
    }
<<<<<<< HEAD
  };
=======
  }
>>>>>>> auth-changes

  const getAlive = async () => {
    const res = await isAlive();
    if (res.success && res?.data?.data) {
      if (res?.data?.data?.is_alive === true) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    getAlive();
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
                <Stack
                  direction={"row"}
                  sx={{ displayl: "flex", justifyContent: "center" }}
                >
                  <img alt="logo" src={appLogo} className={global.logo} />
                  <Typography edge="start" className={global.title}>
                    EYE OF ECOM
                  </Typography>
                </Stack>
                <Box style={{ padding: "30px 32px" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Forget Password?
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        {...register("email")}
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={1}>
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: "14px", textTransform: "none", fontSize: "20px" }}
                    className={global.Crateaccountbutton}
                    onClick={handleSubmit(forgetPassword)}
                  >
                    {loading ? (
                      <CircularProgress style={{ color: "#F6F6FB" }} />
                    ) : (
                      "Forget Password"
                    )}
                  </Button>
                </Box>
                <Box className={classes.Backtologinbutton}>
                  <img
                    src={Backtologin}
                    className={classes.BackToLogInArrow}
<<<<<<< HEAD
=======
                    style={{ marginRight: "10px" }}
>>>>>>> auth-changes
                    alt="bactologin"
                  />
                  <Typography variant="h6" sx={{ cursor: "pointer", }} onClick={() => navigate("/auth/login")}>
                    Back to log in
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
}

export default ForgetPassword;
