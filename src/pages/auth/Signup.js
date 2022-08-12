import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUp } from "../../services/index";
import { themeLight, globalStyles, BootstrapInput } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
import { registerValidationSchema } from "./../../utils/validationSchemas";
import fbaddlogo from "../../assets/fbaddlogo.png";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    document.title = "Register - Eye of Ecom ";
  }, []);
  const submitsigninform = async (data) => {
    setLoading(true);
    try {
      const response = await signUp(data);
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
          <Card
            style={{
              maxWidth: 722,
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
              <form onSubmit={handleSubmit(submitsigninform)}>
                <Box sx={{ padding: "1vmax 2.5vmax" }}>
                  {/* <Box style={{  padding:{xs:0,lg:"18px 61px" ,xl:"18px 61px"}, }}mt={1} > */}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 21, lg: 25 },
                      marginLeft: { xs: "4%", sm: 0, md: 0, lg: 0 },
                    }}
                  >
                    Create a Free account
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 16, lg: 16 },
                      marginLeft: { xs: "9%", sm: 0, md: 0, lg: 0 },
                      paddingTop: { xs: 0, sm: 1, md: 1, lg: 1 },
                    }}
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
                            <Alert severity="error">{errormessage}</Alert>
                          )}
                        </Box>
                      ) : (
                        <Box mt={2}>
                          {errormessage && (
                            <Alert severity="error">{errormessage}</Alert>
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
                        {...register("first_name")}
                        name="first_name"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <BootstrapInput
                        placeholder=" Last name"
                        label="Last Name"
                        variant="outlined"
                        {...register("last_name")}
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
                        {...register("email")}
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="red" p={0.5}>
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <FormControl
                        sx={{ mr: 1, width: "100%" }}
                        variant="outlined"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          error={errors.password ? true : false}
                        >
                          Password
                        </InputLabel>
                        <OutlinedInput
                          placeholder="Password"
                          variant="outlined"
                          fullWidth
                          required
                          {...register("password")}
                          error={errors.password ? true : false}
                          type={values.showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {values.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl> */}
                      <InputBase
                        type={values.isShowNewPassword ? "text" : "password"}
                        //  value={values.password}
                        className={global.inputField}
                        label="outlined"
                        variant="outlined"
                        name="newPassword"
                        placeholder="Password (must be at least 6 characters)"
                        {...register("password")}
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
                            inputRef={register()}
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
                            sx={{ fontSize: { xs: 14, sm: 16, lg: 16 } }}
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
                        "Create Account"
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
