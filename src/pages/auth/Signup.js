import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Typography,
  CardContent,
  Grid,
  Alert,
  InputAdornment,
  InputBase,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CssBaseline } from "@material-ui/core";
import {
  addToCartEventRegister,
  gLogin,
  login,
  signUp,
  startYearlyTrial,
} from "../../services/index";
import { themeLight, globalStyles, BootstrapInput } from "../../css/globalcss";
import { registerValidationSchema } from "./../../utils/validationSchemas";
import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { setTrialStatus } from "../../redux/ducks/subscription";
import { useDispatch } from "react-redux";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import GoogleAuthLogin from "../../components/GoogleLogin";
// import { gLogin } from "../../services/index.js";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const Signup = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();

  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const paddingcardsmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const aligncenterfont = useMediaQuery(theme.breakpoints.up("sm"));

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const {
    register: validate,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    ReactGA.event({
      category: "AddToCart",
      action: "AddToCart",
    });
    addToCartEventRegister()
      .then((res) => {})
      .catch((error) => {});
  }, []);

  const submitsigninform = async (data) => {
    setLoading(true);

    try {
      console.log("come 1");
      const response = await signUp(data);
      console.log("come 2");
      if (response.data.message === "Password is too short") {
        setLoading(false);
        setErrormessage("Password is too short");
      } else if (response.data.message === "User already exist") {
        setLoading(false);
        setErrormessage("The email address is already in used");
      } else if (response.success) {
        console.log("come 4 suc");
        localStorage.setItem("email", data.email);
        localStorage.setItem("is_alive", true);
        dispatch(setTrialStatus(true));

        login(data).then((res) => {
          localStorage.setItem("is_alive", true);
          setLoading(false);
          navigate("/");
        });

        console.log("??????????????????????????????????????????");
        // navigate("/");

        // navigate("/auth/activate");
      }
    } catch {
      setLoading(false);
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
          <Card
            style={{
              maxWidth: 722,
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
              <form onSubmit={handleSubmit(submitsigninform)}>
                <Box
                  sx={{
                    padding: paddingcardsmalldevice ? "" : "1vmax 2.5vmax",
                    paddingBottom:"0px"
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 23, lg: 25 },
                    }}
                    align={aligncenterfont ? "" : "center"}
                  >
                    Create A Free Account To Get Immediate Access!
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 16, lg: 16 },
                      paddingTop: { xs: 0, sm: 1, md: 1, lg: 1 },
                      fontWeight: 500,
                    }}
                    align={aligncenterfont ? "" : "center"}
                  >
                    Already have an account?{" "}
                    <span
                      style={{
                        color: "#00CBFF",
                        cursor: "pointer",
                        marginLeft: "5px",
                      }}
                      onClick={() => navigate("/auth/login")}
                    >
                      Sign in
                    </span>
                    <Box mt={2}>
                      {errormessage ===
                      "The email address is already in used" ? (
                        <Box mt={2}>
                          {errormessage && (
                            <Alert
                              severity="error"
                              sx={{
                                marginBottom: {
                                  xs: "10px",
                                  sm: "10px",
                                  md: "0px",
                                  lg: "0px",
                                },
                              }}
                            >
                              {errormessage}
                            </Alert>
                          )}
                        </Box>
                      ) : (
                        <Box mt={2}>
                          {errormessage && (
                            <Alert
                              severity="error"
                              sx={{
                                marginBottom: {
                                  xs: "10px",
                                  sm: "10px",
                                  md: "0px",
                                  lg: "0px",
                                },
                              }}
                            >
                              {errormessage}
                            </Alert>
                          )}
                        </Box>
                      )}
                    </Box>
                  </Typography>
                  <Grid
                    container
                    spacing={2}
                    pt={4}
                    sx={{ paddingTop: { xs: 0, md: 2, lg: 2 } }}
                  >
                    <Grid xs={12} item>
                      <BootstrapInput
                        placeholder=" First name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        {...validate("first_name")}
                        name="first_name"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <BootstrapInput
                        placeholder=" Last name"
                        label="Last Name"
                        variant="outlined"
                        {...validate("last_name")}
                        fullWidth
                      />
                    </Grid>
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
                    <Grid item xs={12}>
                      <InputBase
                        type={values.isShowNewPassword ? "text" : "password"}
                        className={global.inputField}
                        label="outlined"
                        variant="outlined"
                        name="newPassword"
                        placeholder="Password (must be at least 6 characters)"
                        {...validate("password")}
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
                                  isShowNewPassword: !values.isShowNewPassword,
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
                      />
                      <Typography variant="inherit" color="red" p={0.8}>
                        {errors.password?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop:"0px !important"}}>
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="acceptTerms"
                            defaultValue="false"
                            inputRef={validate()}
                            render={({ field: { onChange } }) => (
                              <Checkbox
                                style={{ color: "#00CBFF" }}
                                className={global.termsandcondition}
                                onChange={(e) => onChange(e.target.checked)}
                              />
                            )}
                          />
                        }
                        label={
                          <Typography
                            color={errors.acceptTerms ? "error" : "inherit"}
                            className={global.termsandcondition}
                            sx={{
                              fontSize: { xs: 14, sm: 16, lg: 16 },
                              fontWeight: 500,
                            }}
                          >
                            I agree to the
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: { xs: 14, sm: 16, lg: 16 },
                                color: "#00CBFF",
                              }}
                            >
                              {" "}
                              Terms of service{" "}
                            </Typography>
                            {""}and {""}
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: { xs: 14, sm: 16, lg: 16 },
                                color: "#00CBFF",
                              }}
                            >
                              Privacy Policy
                            </Typography>
                          </Typography>
                        }
                      />
                      <br />
                    </Grid>
                  </Grid>
                  <Box
                    pt={1}
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
                      onClick={handleSubmit(submitsigninform)}
                    >
                      {loading ? (
                        <CircularProgress
                          size={36}
                          style={{ color: "#F6F6FB" }}
                        />
                      ) : (
                        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                          {" "}
                          Create Account
                        </Typography>
                      )}
                    </Button>
                  </Box>
                </Box>
              </form>
            </CardContent>

            <Box
                sx={{
                  padding: paddingcardsmalldevice ? "" : "1vmax 2.5vmax",
                  paddingTop:"0px",
                  paddingBottom:"0px"
                }}
              >
                <Divider>OR</Divider>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop:"16px",
                  paddingBottom:"18px"
                }}
              >
<GoogleAuthLogin from='signup' />
            {/* <GoogleOAuthProvider clientId="1051506495207-q9t49sm79f7e958lfc5r1fu17blputsp.apps.googleusercontent.com">
              <GoogleLogin //useOneTap={googleLogin}
                type="icon"
                onSuccess={async (credentialResponse) => {
                  // console.log(jsonwebtoken.decode(credentialResponse.credential));
                  // document.cookie.remove("http://localhost:3001/");

                  console.log(
                    jwt_decode(credentialResponse.credential, {
                      credential: true,
                    })
                  );

                  const abc = await axios.post(
                    "http://localhost:8000/api/googleauth/",
                    jwt_decode(credentialResponse.credential, {
                      credential: true,
                    })
                  ); //.then((res)=>{console.log("lkkkkkkkkkkkkkkkkkkkkkkkkkkkk",res)});

                  gLogin({ email: abc.data.data.email }).then((r) => {
                    localStorage.setItem("is_alive", true);
                    localStorage.setItem("email", abc.data.data.email);
                    console.log(")))))))))))))))))))))))))))",r);
                    navigate("/");
                  });

                  console.log("???????????????????????", abc);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider> */}
              </div>
            
          </Card>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Signup;
