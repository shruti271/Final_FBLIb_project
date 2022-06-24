import appLogo from "../../assets/appLogo.svg";
import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Grid } from "@mui/material";
import { CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isAlive, login } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { themeLight, globalStyles } from "../../css/globalcss";
import { loginvalidationSchema } from "./../../utils/validationSchemas";

const Login = () => {
  const global = globalStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginvalidationSchema),
  });

  const submitLoginform = async (data) => {
    setLoading(true);
    try {
      const response = await login(data);
      if (response.success) {
        navigate("/");
      }
    } catch {
      console.log("some error occour");
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
    setLoading(false);
    getAlive();
  }, []);

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
                  <img alt="logo" src={appLogo} className={global.logo} />
                  <Typography edge="start" className={global.title}>
                    EYE OF ECOM
                  </Typography>
                </Stack>

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
                          {...register("email")}
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
                          // className={global.forgetpassword}
                          sx={{ marginLeft: "auto" }}
                        >
                          <Typography
                            style={{ color: "#00CBFF", cursor: "pointer" }}
                          >
                            {" "}
                            Forget Password?{" "}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          placeholder="Password"
                          label="Password"
                          variant="outlined"
                          type="password"
                          fullWidth
                          required
                          {...register("password")}
                          error={errors.password ? true : false}
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
                      <CircularProgress style={{ color: "#F6F6FB" }} />
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
