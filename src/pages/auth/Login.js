import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png";
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Alert,
  InputAdornment,
  InputBase,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login, resendactivateemail } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { themeLight, globalStyles, BootstrapInput } from "../../css/globalcss";
// import { loginvalidationSchema } from "./../../utils/validationSchemas";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginvalidationSchema } from "../../utils/validationSchemas";

const Login = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const paddingcardsmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const aligncenterfont = useMediaQuery(theme.breakpoints.up("sm"));
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const [verificationmesssage, setVerificationmesssage] = useState("");
  const [resendmessage, setResendmessage] = useState("");
  const [values, setValues] = React.useState({
    isShowNewPassword: false,
  });

  const {
    register: validate,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginvalidationSchema),
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
    navigate("/auth/activate");
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
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 25, lg: 25 },
                    }}
                    align={aligncenterfont ? "" : "center"}
                  >
                    Log in
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 16, sm: 16, lg: 16 },
                      paddingTop: { xs: 0, sm: 1, md: 1, lg: 1 },
                      fontWeight: 500,
                    }}
                    align={aligncenterfont ? "" : "center"}
                  >
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
                      <Alert
                        severity="error"
                        sx={{
                          marginBottom: paddingcardsmalldevice ? "10px" : "",
                        }}
                      >
                        {errormessage}
                      </Alert>
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
                              <Alert
                                severity="warning"
                                sx={{
                                  marginBottom: paddingcardsmalldevice
                                    ? "10px"
                                    : "",
                                }}
                              >
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
                  <form>
                    <Grid
                      container
                      spacing={1}
                      pt={paddingcardsmalldevice ? "" : 2.5}
                    >
                      <Grid item xs={12}>
                        <BootstrapInput
                          type="email"
                          placeholder="Email address"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          required
                          {...validate("email")}
                          error={errors.email ? true : false}
                        />
                        <Typography variant="inherit" color="red" p={0.5}>
                          {errors.email?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} display="flex">
                        <Box
                          onClick={() => navigate("/auth/forgot-password")}
                          sx={{ marginLeft: "auto" }}
                        >
                          <Typography
                            sx={{
                              color: "#00CBFF",
                              cursor: "pointer",
                              fontSize: { xs: 13, sm: 16, lg: 16 },
                              fontWeight: 500,
                            }}
                          >
                            {" "}
                            Forgot Your Password?{" "}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <InputBase
                          type={values.isShowNewPassword ? "text" : "password"}
                          //  value={values.password}
                          className={global.inputField}
                          label="outlined"
                          variant="outlined"
                          name="newPassword"
                          placeholder="Password (must be at least 6 characters)"
                          endAdornment={
                            <InputAdornment
                              position="end"
                              sx={{ marginRight: 2 }}
                            >
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() =>
                                  setValues({
                                    ...values,
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
                          }
                          fullWidth
                          {...validate("password", {
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
                            },
                          })}
                        />
                        <Typography variant="inherit" color="red" p={0.8}>
                          {errors.password?.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                  <Box
                    pt={2}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                          {" "}
                          Log in
                        </Typography>
                      )}
                    </Button>
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

export default Login;
