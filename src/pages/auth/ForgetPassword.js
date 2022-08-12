import fbaddlogo from "../../assets/fbaddlogo.png";
import React, { useState, useEffect } from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Backtologin from "../../assets/Backtologinicon.svg";
import { useNavigate } from "react-router-dom";
import { forgotPassword, isAlive } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { themeLight, globalStyles, BootstrapInput } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
import { forgetvalidationSchema } from "./../../utils/validationSchemas";
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
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
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
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      const response = await forgotPassword(formData);
      console.log("::", response.data.message);
      if (response.data.message === "Success") {
        setErrormessage("Password Reset link send your gmail");
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
          <Grid>
            <Card
              style={{
                maxWidth: 632,
                padding: "10px 5px",
                margin: "0 auto",
                backgroundColor: "#F6F6FB",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <img
                  alt="logo"
                  src={fbaddlogo}
                  className={global.logo}
                  onClick={() => navigate("/auth/login")}
                />
                <Box style={{ padding: "1vmax 2.5vmax" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: 21, lg: 25 },
                          marginLeft: { xs: "12%", sm: 0, md: 0, lg: 0, xl: 0 },
                        }}
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
                        "Reset Password"
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
                      sx={{ cursor: "pointer" }}
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
