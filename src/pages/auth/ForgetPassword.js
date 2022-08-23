import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
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
import { forgotPassword, isAlive } from "../../services/index";
import { forgetvalidationSchema } from "./../../utils/validationSchemas";
import { themeLight, globalStyles, BootstrapInput } from "../../css/globalcss";
import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png";
import Backtologin from "../../assets/Backtologinicon.svg";

const useStyles = makeStyles(() => ({
  Backtologinbutton: {
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
  },
}));

const ForgetPassword = () => {
  const classes = useStyles();
  const global = globalStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const paddingcardsmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const aligncenterfont = useMediaQuery(theme.breakpoints.up("sm"));

  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetvalidationSchema),
  });

  const forgetPassword = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      const response = await forgotPassword(formData);
      if (response.data.message === "Success") {
        setErrormessage("Password reset link sent to your email");
        setLoading(false);
      }
    } catch {
      setErrormessage("Sorry, This email Id does not exist with us");
      setLoading(false);
    }
  };

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
    // document.title = "Forgot Password - Eye of Ecom ";
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
                padding: "10px 5px",
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
                <Box
                  sx={{
                    padding: paddingcardsmalldevice ? "" : "1vmax 2.5vmax",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: 23, lg: 25 },
                        }}
                        align={aligncenterfont ? "" : "center"}
                      >
                        Forget Password?
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      {errormessage ===
                      "Sorry, This email Id does not exist with us" ? (
                        <>
                          {errormessage && (
                            <Grid item xs={12} p={1}>
                              <Alert severity="error">{errormessage}</Alert>
                            </Grid>
                          )}
                        </>
                      ) : (
                        <>
                          {errormessage && (
                            <Grid item xs={12}>
                              <Alert severity="success">{errormessage}</Alert>
                            </Grid>
                          )}
                        </>
                      )}
                      <BootstrapInput
                        type="email"
                        placeholder="Email address"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        {...register("email")}
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="red" p={0.5}>
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box
                    pt={2}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: "14px",
                        textTransform: "none",
                        fontSize: "20px",
                      }}
                      className={global.Crateaccountbutton}
                      onClick={handleSubmit(forgetPassword)}
                    >
                      {loading ? (
                        <CircularProgress style={{ color: "#F6F6FB" }} />
                      ) : (
                        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                          {" "}
                          Reset Password
                        </Typography>
                      )}
                    </Button>
                  </Box>
                  <Box className={classes.Backtologinbutton}>
                    <img
                      src={Backtologin}
                      className={classes.BackToLogInArrow}
                      style={{ marginRight: "10px" }}
                      alt="bactologin"
                    />
                    <Typography
                      variant="h6"
                      sx={{ cursor: "pointer", fontWeight: 500 }}
                      onClick={() => navigate("/auth/login")}
                    >
                      Back to log in
                    </Typography>
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

export default ForgetPassword;
