<<<<<<< HEAD
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import { CardContent, Grid } from "@material-ui/core";
import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import appLogo from "../../assets/appLogo.svg";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "./../../utils/validationSchemas";
import { signUp } from "./../../services/index";
=======
import React,{useState} from "react"
import { MuiThemeProvider } from "@material-ui/core/styles";
import appLogo from "../../assets/appLogo.svg";
import { Box, Button, Card, Checkbox, CircularProgress, FormControlLabel, Stack, TextField, Typography, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema,signUp } from "../../services/index";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
>>>>>>> auth-changes

const Signup = () => {
  const global = globalStyles()
  const navigate = useNavigate();
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(true);
=======
  const [loading, setLoading] = useState(false)
>>>>>>> auth-changes
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const submitsigninform = async (data) => {
    setLoading(true);
    try {
      const response = await signUp(data);
<<<<<<< HEAD

      if (response.success) {
        setMessage(true);
        navigate("/auth/login");
      }
    } catch {
      console.log("error");
      setLoading(false);
=======
      if (response.success) {
        navigate("/auth/login");
      }
    } catch {
      setLoading(false)
>>>>>>> auth-changes
    }
  };
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
          <Card
            style={{
              maxWidth: 722,
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

              <Box style={{ padding: "18px 61px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}
                >
                  Create a free account
                </Typography>

                <Typography className={global.alreadyaccount} pt={1}>
                  Already Have an account?{" "}
                  <span
                    style={{ color: "#00CBFF", cursor: "pointer" }}
                    onClick={() => navigate("/auth/login")}
                  >
                    Signin
                  </span>
                </Typography>
                <form style={{ paddingTop: "30px" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setFirstname(e.target.value)}
                        {...register("firstname")}
                        error={errors.firstname ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5} >
                        {errors.firstname?.message}
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setLasttname(e.target.value)}
                        {...register("lastname")}
                        error={errors.lastname ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5}>
                        {errors.lastname?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
<<<<<<< HEAD
                        // onChange={(e) => setEmail(e.target.value)}
=======
>>>>>>> auth-changes
                        {...register("email")}
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5}>
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Password"
                        label="Password(must be at least 6 charcters)"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
<<<<<<< HEAD
                        // onChange={(e) => setPassword(e.target.value)}
                        {...register("password")}
=======
                        {...register('password')}
>>>>>>> auth-changes
                        error={errors.password ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5}>
                        {errors.password?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="acceptTerms"
                            defaultValue="false"
                            inputRef={register()}
                            render={({ field: { onChange } }) => (
                              <Checkbox
                                style={{ color: "#00CBFF" }}
                                onChange={(e) => onChange(e.target.checked)}
                              />
                            )}
                          />
                        }
                        label={
<<<<<<< HEAD
                          <Typography
                            color={errors.acceptTerms ? "error" : "inherit"}
                            className={classes.termsandcondition}
                          >
                            I agree to the{" "}
                            <span style={{ color: "#00CBFF" }}>
                              Terms of service
                            </span>{" "}
                            and{" "}
                            <span style={{ color: "#00CBFF" }}>
                              Privacy Policy
                            </span>
=======
                          <Typography color={errors.acceptTerms ? 'error' : 'inherit'} className={global.termsandcondition}>
                            I agree to the <span style={{ color: "#00CBFF" }}>Terms of service</span> and <span style={{ color: "#00CBFF" }}>Privacy Policy</span>
>>>>>>> auth-changes
                          </Typography>
                        }
                      />
                      <br />
                      <Typography variant="inherit" color="textSecondary" mr={2}>
                        {errors.acceptTerms
                          ? "(" + errors.acceptTerms.message + ")"
                          : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "14px", textTransform: "none", fontSize: "20px" }}
                  className={global.Crateaccountbutton}
                  onClick={handleSubmit(submitsigninform)}
                >
<<<<<<< HEAD
                  {loading ? (
                    <CircularProgress style={{ color: "#F6F6FB" }} />
                  ) : (
                    "Create Account"
                  )}
                  {console.log("jjjjjjjjjjjjjjjj", loading)}
                  {/* create Account */}
                </Button>
              </Box>
              {message ? (
                <Alert severity="success">This is a success message!</Alert>
              ) : (
                "false"
              )}
=======
                  {loading ? <CircularProgress style={{ color: "#F6F6FB" }} /> : "Create Account"}
                </Button>
              </Box>
>>>>>>> auth-changes
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Signup;
<<<<<<< HEAD

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
  alreadyaccount: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#2B2F42",
    marginTop: "10px",
  },
  termsandcondition: {
    letterSpacing: "00.01px",
  },
  Crateaccountbutton: {
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
=======
>>>>>>> auth-changes
