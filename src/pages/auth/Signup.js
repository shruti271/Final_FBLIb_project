import React,{useState} from "react"
import { MuiThemeProvider } from "@material-ui/core/styles";
import appLogo from "../../assets/appLogo.svg";
import { Box, Button, Card, Checkbox, CircularProgress, FormControlLabel, Stack, TextField, Typography, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema,signUp } from "../../services/index";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";

const Signup = () => {
  const global = globalStyles()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitsigninform = async (data) => {
    setLoading(true);
    try {
      const response = await signUp(data);
      if (response.success) {
        navigate("/auth/login");
      }
    } catch {
      setLoading(false)
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
                <img alt="logo" src={appLogo} className={global.logo} />
                <Typography edge="start" className={global.title}>
                  EYE OF ECOM
                </Typography>
              </Stack>

              <Box style={{ padding: "18px 61px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}
                >
                  Create a free account
                </Typography>

                <Typography className={global.alreadyaccount} pt={1}>
                  Already Have an account?{" "}
                  <span
                    style={{ color: "#00CBFF", cursor: "pointer" }}
                    onClick={() => navigate("/auth/login")}
                  >
                    Signin
                  </span>
                </Typography>
                <form style={{ paddingTop: "30px" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        // onChange={(e) => setFirstname(e.target.value)}
                        {...register("firstname")}
                        error={errors.firstname ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5} >
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
                        {...register("lastname")}
                        error={errors.lastname ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5}>
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
                        {...register("email")}
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5}>
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Password"
                        label="Password(must be at least 6 charcters)"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
                        {...register('password')}
                        error={errors.password ? true : false}
                      />
                      <Typography variant="inherit" color="textSecondary" p={0.5}>
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
                                style={{ color: "#00CBFF" }}
                                onChange={(e) => onChange(e.target.checked)}
                              />
                            )}
                          />
                        }
                        label={
                          <Typography color={errors.acceptTerms ? 'error' : 'inherit'} className={global.termsandcondition}>
                            I agree to the <span style={{ color: "#00CBFF" }}>Terms of service</span> and <span style={{ color: "#00CBFF" }}>Privacy Policy</span>
                          </Typography>
                        }
                      />
                      <br />
                      <Typography variant="inherit" color="textSecondary" mr={2}>
                        {errors.acceptTerms
                          ? "(" + errors.acceptTerms.message + ")"
                          : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "14px", textTransform: "none", fontSize: "20px" }}
                  className={global.Crateaccountbutton}
                  onClick={handleSubmit(submitsigninform)}
                >
                  {loading ? <CircularProgress style={{ color: "#F6F6FB" }} /> : "Create Account"}
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
