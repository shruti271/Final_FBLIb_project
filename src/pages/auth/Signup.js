import React, {  useState } from "react";
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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CssBaseline } from "@material-ui/core";
import { signUp } from "../../services/index";
import { themeLight, globalStyles, BootstrapInput } from "../../css/globalcss";
import { registerValidationSchema } from "./../../utils/validationSchemas";
import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png";

const Signup = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const theme = useTheme();

  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const paddingcardsmalldevice= useMediaQuery(theme.breakpoints.down("sm"));
  const aligncenterfont = useMediaQuery(theme.breakpoints.up("sm"));

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const {
    register:validate,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitsigninform = async (data) => {
    setLoading(true);
    try {
      const response = await signUp(data);
      console.log("+++++++",response)
      if (response.data.message === "Password is too short") {
        setLoading(false);
        setErrormessage("Password is too short");
      } else if (response.data.message === "User already exist") {
        setLoading(false);
        setErrormessage("The email address is already in used");
      } else if (response.success) {
        localStorage.setItem("email", data.email);
        navigate("/auth/activate");
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
                <Box sx={{ padding:paddingcardsmalldevice ? "" :"1vmax 2.5vmax" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 23, lg: 25 },
                    }}
                    align={aligncenterfont ?"" :"center"}
                  >
                    Create a Free account
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 16, lg: 16 },
                      paddingTop: { xs: 0, sm: 1, md: 1, lg: 1 },
                      fontWeight:500
                    }}
                    align={aligncenterfont ?"" :"center"}
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
                            <Alert severity="error" sx={{marginBottom:{xs:"10px" ,sm:"10px",md:"0px",lg:"0px"}}}>{errormessage}</Alert>
                          )}
                        </Box>
                      ) : (
                        <Box mt={2}>
                          {errormessage && (
                            <Alert severity="error" sx={{marginBottom:{xs:"10px" ,sm:"10px",md:"0px",lg:"0px"}}}>{errormessage}</Alert>
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
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="acceptTerms"
                            defaultValue="false"
                            inputRef={validate()}
                            render={({ field: { onChange } }) => (
                              <Checkbox
                                sx={{ color: "#00CBFF" }}
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
                            sx={{ fontSize: { xs: 14, sm: 16, lg: 16 },fontWeight:500 }}
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
                      <Typography sx={{fontWeight:600,fontSize: "20px"}}> Create Account</Typography>
                      )}
                    </Button>
                  </Box>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Signup;
