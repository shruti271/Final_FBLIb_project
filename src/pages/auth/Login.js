<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  CardContent,
  makeStyles,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isAlive, login } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginvalidationSchema } from "./../../utils/validationSchemas";
import appLogo from "../../assets/appLogo.svg";


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
  Login: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "36px",
    color: "#2B2F42",
  },
  donotaccount: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#2B2F42",
    marginTop: "10px",
  },
  forgetpassword: {
    display: "flex",
    justifyContent: "end",
    color: "#00CBFF",
    cursor: "pointer",
  },
  loginbutton: {
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
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginvalidationSchema),
=======
import appLogo from "../../assets/appLogo.svg";
import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";
import { Grid } from "@mui/material";
import { CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isAlive, login, loginvalidationSchema } from "../../services/index";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { themeLight, globalStyles } from "../../css/globalcss";

const Login = () => {
  const global = globalStyles()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginvalidationSchema)
>>>>>>> auth-changes
  });

  const submitLoginform = async (data) => {
    setLoading(true);
    try {
<<<<<<< HEAD
      const formData = new FormData();
      console.log("------------------------dd", formData);
      formData.append("email", data.email);
      formData.append("password", data.password);
      const response = await login(formData);

=======
      const response = await login(data);
>>>>>>> auth-changes
      if (response.success) {
        navigate("/");
      }
    } catch {
      console.log("some error occour");
    }
  };
<<<<<<< HEAD

  const onError = (errors) => console.log("Errors Occurred !! :", errors);

=======
>>>>>>> auth-changes
  const getAlive = async () => {
    const res = await isAlive();
    if (res.success && res?.data?.data) {
      if (res?.data?.data?.is_alive === true) {
        navigate("/");
      }
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    setLoading(false);
    getAlive();
  }, []);
=======
useEffect(() => {
  setLoading(false)
  getAlive();
}, []);
>>>>>>> auth-changes

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

              <Box style={{ padding: "30px 45px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>Log in</Typography>

<<<<<<< HEAD
                <Box style={{ padding: "30px 45px" }}>
                  <Typography className={classes.Login}>Log in</Typography>

                  <Typography className={classes.donotaccount}>
                    Don't have an account ?{" "}
                    <span
                      onClick={gotoSignuppage}
                      style={{ color: "#00CBFF", cursor: "pointer" }}
                    >
                      Register
                    </span>
                  </Typography>
                  <form style={{ paddingTop: "50px" }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
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
                        <Typography variant="inherit" color="textSecondary">
                          {errors.email?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          onClick={forgetPassword}
                          className={classes.forgetpassword}
                        >
                          Forget Password?
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          placeholder="Password"
                          label="Password"
                          variant="outlined"
                          fullWidth
                          required
                          {...register("password")}
                          error={errors.password ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.password?.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: "14px" }}
                    className={classes.loginbutton}
                    onClick={handleSubmit(submitLoginform, onError)}
                  >
                    {loading ? (
                      <CircularProgress style={{ color: "#F6F6FB" }} />
                    ) : (
                      "Log in"
                    )}
                    {/* Log in */}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
=======
                <Typography pt={1}>
                  Don't have an account ?{" "}
                  <span
                    onClick={() => navigate("/auth/register")}
                    style={{ color: "#00CBFF", cursor: "pointer" }}
                  >
                    Register
                  </span>
                </Typography>
                <form style={{ paddingTop: "50px" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        {...register('email')}
                        error={errors.email ? true : false}
                      />
                      <Grid item xs={12} >
                        <Typography variant="inherit" color="textSecondary" p={0.8} >
                          {errors.email?.message}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} display="flex">
                      <Box
                        onClick={() => navigate("/auth/forgot-password")}
                        // className={global.forgetpassword}
                        sx={{ marginLeft: "auto" }}
                      >
                        <Typography style={{ color: "#00CBFF", cursor: "pointer" }}>    Forget Password? </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        placeholder="Password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
                        {...register('password')}
                        error={errors.password ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.8} >
                        {errors.password?.message}
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  className={global.Crateaccountbutton}
                  sx={{ borderRadius: "14px", textTransform: "none", fontSize: "20px" }}
                  onClick={handleSubmit(submitLoginform)}
                >
                  {loading ? <CircularProgress style={{ color: "#F6F6FB" }} /> : "Log in"}
                </Button >
              </Box >
            </CardContent >
          </Card >
        </Grid >
      </Box >
    </Grid >
  </MuiThemeProvider >
);
>>>>>>> auth-changes
};

export default Login;
