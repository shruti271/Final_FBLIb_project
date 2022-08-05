import fbaddlogo from "../../assets/fbaddlogo.png";
import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  InputAdornment,
} from "@mui/material";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login, resendactivateemail } from "../../services/index";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { themeLight, globalStyles } from "../../css/globalcss";
// import { loginvalidationSchema } from "./../../utils/validationSchemas";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const [verificationmesssage, setVerificationmesssage] = useState("");
  const [resendmessage, setResendmessage] = useState("");
  const [values, setValues] = React.useState({
    isShowNewPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },    
  } = useForm({    
  });
 

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const submitLoginform = (data) => {
    setLoading(true);
    console.log("888", data);
    localStorage.setItem("email", data.email);
    try {
      login(data).then(
        (res) => {
          localStorage.setItem("is_alive", true);
          navigate("/");
        },
        (error) => {
          localStorage.setItem("is_alive", false);
          setLoading(false);
          if (error.response.status === 401) {
            console.log("bdshfskfusdjfkjk");

            setVerificationmesssage("Please verify your email address");
          } else if (error.response.status === 404) {
            setErrormessage("User does not exist with us.");
          } else if (error.response.status === 400) {
            setErrormessage("Invalid email address or password");
          }
        }
      );
    } catch {
      setLoading(false);
    }
  };
  const email = localStorage.getItem("email");
  const reSendlink = async () => {
    const formData = new FormData();
    formData.append("email", email);
    const res = await resendactivateemail(formData);
    console.log("YY", res.data.message);
    console.log("zzz", resendmessage);
    setResendmessage(res.data.message);
    if (res.data.message === "Email Sent") {
      setResendmessage("Verifivation Email link send Your gmail");
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
                <Box style={{ padding: "30px 45px" }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Log in
                  </Typography>

                  <Typography pt={1}>
                    Don't have an account ?{" "}
                    <span
                      onClick={() => navigate("/auth/register")}
                      style={{ color: "#00CBFF", cursor: "pointer" }}
                    >
                      Register
                    </span>
                  </Typography>
                  <Box mt={2}>
                    {errormessage && (
                      <Alert severity="error">{errormessage}</Alert>
                    )}
                    {verificationmesssage && (
                      <>
                        <Grid
                          container
                          display="flex"
                          justifyContent="left"
                          spacing={4}
                        >
                          <Grid item xs={9}>
                            {!resendmessage ? (
                              <Alert severity="warning">
                                {verificationmesssage}
                              </Alert>
                            ) : (
                              <Alert severity="success">
                                Email verification link send Your gmail
                              </Alert>
                            )}
                          </Grid>
                          <Grid item mt={1}>
                            <Typography
                              // variant="h6"
                              color="#00CBFF"
                              sx={{ fontWeight: "bold" }}
                              onClick={reSendlink}
                            >
                              Resend
                            </Typography>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </Box>
                  <form style={{ paddingTop: "36px" }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          type="email"
                          placeholder="Email adderss"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          required
                          {...register("email", {
                            required: (
                              <span style={{ color: "red" }}>
                                {"E-mail is required"}
                              </span>
                            ),
                          })}
                          error={errors.email ? true : false}
                        />
                        <Grid item xs={12}>
                          <Typography
                            variant="inherit"
                            color="textSecondary"
                            p={0.8}
                          >
                            {errors.email?.message}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} display="flex">
                        <Box
                          onClick={() => navigate("/auth/forgot-password")}
                          sx={{ marginLeft: "auto" }}
                        >
                          <Typography
                            style={{ color: "#00CBFF", cursor: "pointer" }}
                          >
                            {" "}
                            Forgot Password?{" "}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          autoComplete="off"
                          type={values.isShowNewPassword ? "text" : "password"}
                          fullWidth
                          label="Password"
                          error={errors.password ? true : false}
                          required
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                sx={{ marginRight: 1 }}
                              >
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    setValues({
                                      isShowNewPassword:
                                        !values.isShowNewPassword,
                                    })
                                  }
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {!values.isShowNewPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          placeholder="password"
                          {...register("password", {
                            required: (
                              <span style={{ color: "red" }}>
                                {"Password is required"}
                              </span>
                            ),
                            minLength: {
                              value: 6,
                              message: (
                                <span style={{ color: "red" }}>
                                  {"Password must be more than 6 characters"}
                                </span>
                              ),
                              // color:"red"
                            },
                          })}
                        />

                        <Typography
                          variant="inherit"
                          color="textSecondary"
                          p={0.8}
                        >
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
                    sx={{
                      borderRadius: "14px",
                      textTransform: "none",
                      fontSize: "20px",
                    }}
                    onClick={handleSubmit(submitLoginform)}
                  >
                    {loading ? (
                      <CircularProgress
                        size={36}
                        style={{ color: "#F6F6FB" }}
                      />
                    ) : (
                      "Log in"
                    )}
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
