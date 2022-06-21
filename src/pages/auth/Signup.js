import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import appLogo from "../../assets/appLogo.svg";
import { Grid } from "@material-ui/core";
import { CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usermanager } from "../../services/index";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "../../services/index";

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const submitsigninform = async (data) => {
    console.log("dataaa", data)
    try {
      const formData = new FormData();
      formData.append('firstname', data.firstname);
      formData.append('lastname', data.lastname);
      formData.append('email', data.email);
      formData.append('password', data.password);
      const response = await usermanager(formData);
      setLoading(true)
      console.log("8888888888888888888888888", response)
      if (response.success) {
        navigate("/auth/login");
      }
    } catch {
      console.log("error")
    }
  };
  const gotoSigninpage = () => {
    navigate("/auth/login");
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
          <Card
            style={{
              maxWidth: 722,
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
                <img alt="logo" src={appLogo} className={classes.logo} />
                <Typography edge="start" className={classes.title}>
                  Eye of Ecom
                </Typography>
              </Stack>

              <Box style={{ padding: "30px 70px" }}>
                <Typography className={classes.signin}>
                  Create a free account
                </Typography>

                <Typography className={classes.alreadyaccount}>
                  Already Have an account?{" "}
                  <span
                    style={{ color: "#00CBFF", cursor: "pointer" }}
                    onClick={gotoSigninpage}
                  >
                    signin
                  </span>
                </Typography>
                <form style={{ paddingTop: "50px" }}>
                  <Grid container spacing={4}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setFirstname(e.target.value)}
                        {...register('firstname')}
                        error={errors.firstname ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary">
                        {errors.firstname?.message}
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setLasttname(e.target.value)}
                        {...register('lastname')}
                        error={errors.lastname ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary">
                        {errors.lastname?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                        {...register('email')}
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary">
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Password"
                        label="Password(must be at least 6 charcters)"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setPassword(e.target.value)}
                        {...register('password')}
                        error={errors.password ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary">
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
                                style={{ color: '#00CBFF' }}
                                onChange={e => onChange(e.target.checked)}
                              />
                            )}
                          />
                        }
                        label={
                          <Typography color={errors.acceptTerms ? 'error' : 'inherit'} className={classes.termsandcondition}>
                            I agree to the <span style={{ color: "#00CBFF" }}>Terms of service</span> and <span style={{ color: "#00CBFF" }}>Privacy Policy</span>
                          </Typography>
                        }
                      />
                      <br />
                      <Typography variant="inherit" color="textSecondary">
                        {errors.acceptTerms
                          ? '(' + errors.acceptTerms.message + ')'
                          : ''}
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "14px" }}
                  className={classes.Crateaccountbutton}
                  onClick={handleSubmit(submitsigninform)}
                >
                  {loading ? <CircularProgress /> : "Create Account"}
                  {console.log("jjjjjjjjjjjjjjjj", loading)}
                  {/* create Account */}
                </Button>
              </Box>
             
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Signup;

const themeLight = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});
const useStyles = makeStyles(() => ({
  logo: {
    height: "37px !important",
    width: "65px !important",
    marginRight: "10px",
    marginTop: "4px",
  },
  title: {
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontStyle: "normal !important",
    fontWeight: "900 !important",
    fontSize: "32.5271px !important",
    lineHeight: "43px !important",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  signin: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "36px",
    color: "#2B2F42",
  },
  alreadyaccount: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#2B2F42",
    marginTop: "10px",
  },
  termsandcondition: {
    letterSpacing: "00.01px",
  },
  Crateaccountbutton: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontSize: "22px",
    fontHeight: 600,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "capitalize",
    color: "#F6F6FB",
    width: "60%",
  },
}));

