import fbaddlogo from "../../assets/fbaddlogo.png"
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
  Alert,
} from "@mui/material";
import { Grid } from "@mui/material";
import { CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { themeLight, globalStyles } from "../../css/globalcss";
import { loginvalidationSchema } from "./../../utils/validationSchemas";
import { setIsAlive } from "../../redux/ducks/session";

const Login = () => {
  const dispatch = useDispatch();
  const global = globalStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errormessage,setErrormessage] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginvalidationSchema),
  });

  const submitLoginform = (data) => {
    setLoading(true);
    login(data).then((res)=>{
      // dispatch(setIsAlive(true));
      localStorage.setItem("is_alive", true);
      navigate("/");
    },(error)=>{
      // dispatch(setIsAlive(false));
      localStorage.setItem("is_alive", false);
      setLoading(false);
      const res = login(data)
      if(res.error="true") {
        console.log("bdshfskfusdjfkjk")
        setErrormessage("User does not exist with us")
      }
      if(res.error="true")
      console.log("bdshfskfusdjfkjk")
       setErrormessage("Username and Password does not match")
    })
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
                            Forgot Password?{" "}
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
                        {errormessage &&  <Alert severity="error">{errormessage}</Alert>}
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
