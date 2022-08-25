import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png";
import React, { useEffect, useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services";
import queryString from "query-string";

const Updatepassword = () => {
  const global = globalStyles();
  const theme = useTheme();
  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // useEffect(() => {
  //   document.title = "Reset Password - Eye of Ecom "
  // }, []);
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { search } = useLocation();
  const value = queryString.parse(search);
  const token = value.token;
  const resetpassword = async (data) => {
    setLoading(true);
    console.log("getTkn", token);
    try {
      console.log("getTkn11", token);
      console.log("password", data.password);
      const res = await resetPassword({
        token: token,
        password: data.password,
      });      
      setLoading(true);
      if (res.data.message === "Password updated") {
        setErrormessage("Password successfully updated");
        setLoading(false);
      } else if (res.data.message === "Token is not valid") {
        setLoading(false);
        // setErrormessage("error ocour")
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
          <Grid>
            <Card
              style={{
                maxWidth: 632,
                padding: "20px 5px",
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
                <Box mt={2} width="85%" ml={4}>
                  {errormessage && (
                    <Alert severity="success">
                      {errormessage}{" "}
                      <b
                        style={{ marginLeft: "100px", cursor: "pointer" }}
                        onClick={() => navigate("/auth/login")}
                      >
                        Go To Login
                      </b>{" "}
                    </Alert>
                  )}
                </Box>
                <Box style={{ padding: "2vmax 2.5vmax" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 21, lg: 25 },
                      marginLeft: { xs: "12%", sm: 0, md: 0, lg: 0, xl: 0 },
                    }}
                  >
                    Update password
                  </Typography>
                  <form style={{ paddingTop: "36px" }}>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
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
                          // pattern: {
                          //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
                          //   message:'Must Contain 1 Character, 1 Number, 1 Special Character'
                          //     // JS only: <p>error message</p> TS only support string
                          // }
                        })}
                      />
                      <Typography variant="inherit" color="red" p={0.5}>
                        {errors.password?.message}
                      </Typography>
                      <Grid item xs={12} mt={2}>
                        <FormControl
                          sx={{ mr: 1, width: "100%" }}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            Confirm Password
                          </InputLabel>
                          <OutlinedInput
                            placeholder="Confirm Password"
                            variant="outlined"
                            fullWidth
                            required
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            {...register("confirm_password", {
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
                            label="confirm Password"
                          />
                        </FormControl>
                        <Typography variant="inherit" color="red" p={0.8}>
                          {errors.confirm_password?.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                  <Box
                    pt={1}
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
                      onClick={handleSubmit(resetpassword)}
                    >
                      {loading ? (
                        <CircularProgress
                          size={36}
                          style={{ color: "#F6F6FB" }}
                        />
                      ) : (
                        "Update password"
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

export default Updatepassword;
