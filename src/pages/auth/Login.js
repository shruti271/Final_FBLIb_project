import React, { useState } from "react";
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
import appLogo from "../../assets/appLogo.svg";
import { Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isAlive, login } from "../../services/index";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "../../services/index";
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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const submitLoginform = async (data) => {
    console.log("dataaa", data)
    try {
      const formData = new FormData();
      console.log("------------------------dd", formData)
      formData.append('email', data.email);
      formData.append('password', data.password);
      const response = await login(formData);
      if (response.success) {
        navigate("/");
      }
    } catch {
      console.log("some error occour")
    }
  };
  const getAlive = async () => {
    const res = await isAlive();
    console.log("resss::", res);
    if (res.success && res?.data?.data) {
      if (res?.data?.data?.is_alive === true) {
        console.log(
          ":::::::::::::::::::::::::::::::",
          res?.data?.data?.is_alive
        );
        navigate("/");
      }
    }
    // console.log(res);
  };

  useEffect(() => {
    getAlive();
    // eslint-disable-next-line
  }, []);

  const gotoSignuppage = () => {
    navigate("/auth/register");
  };

  const forgetPassword = () => {
    navigate("/auth/forgot-password");
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
                  <img alt="logo" src={appLogo} className={classes.logo} />
                  <Typography edge="start" className={classes.title}>
                    Eye of Ecom
                  </Typography>
                </Stack>

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
                          onChange={(e) => setEmail(e.target.value)}
                          {...register('email')}
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
                          onChange={(e) => setPassword(e.target.value)}
                          {...register('password')}
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
                    onClick={handleSubmit(submitLoginform)}
                  >
                    Log in
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Login;
