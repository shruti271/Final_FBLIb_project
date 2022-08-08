import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import viss from "../assets/viss.svg";
import mastercard from "../assets/master-card.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAccountSettingsStart } from "../redux/ducks/accountSettings";
import useStyles from "../css/mediapage";
import { cancelusersubcription, fetch_payment_method } from "../services";
import { setSubscription } from "../redux/ducks/subscription";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { getFaviconEl } from "../utils/getFaviconEl";

const LoadingFor = {
  PersonalInfo: "personalInfo",
  Password: "password",
  Subscription: "subscription",
};

function AccountSettings() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subLoading, setSubLoading] = useState(false);
  const [values, setValues] = React.useState({
    showPassword: false,
    isShowCurrentPassword: false,
    isShowNewPassword: false,
  });

  const { accountSettings, loading, error } = useSelector(
    (state) => state.accountSettings
  );

  const subscriptionData = useSelector((state) => state.subscriptionData);

  useEffect(() => {}, [subscriptionData]);

  const [loadingFor, setLoadingFor] = useState("");

  const {
    register:personalFormRegister,
    handleSubmit: personalFormHandleSubmit,
    formState: { errors },
    setValue: personalFormSetValue,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
    },
  });

  const {
    register: securityFormRegister,
    handleSubmit: securityFormHandleSubmit,
    formState: {securityFormErrors },
  } = useForm({
    defaultValues: {
      c_password: "",
      n_password: "",
    },
  });

  useEffect(() => {
    document.title = "Account Setting"
    const favicon = getFaviconEl();
    favicon.href = "accountSetting.png";
    personalFormSetValue("first_name", accountSettings?.first_name);
    personalFormSetValue("last_name", accountSettings?.last_name);
  }, [accountSettings, personalFormSetValue]);

  const onPersonalFormSubmit = (data) => {
    console.log("data", data);
    setLoadingFor(LoadingFor.PersonalInfo);
    dispatch(updateAccountSettingsStart({ data, id: accountSettings?.id }));
  };

  const onSecurityFormSubmit = (data) => {
    setLoadingFor(LoadingFor.Password);
    dispatch(updateAccountSettingsStart({ data, id: accountSettings?.id }));
  };

  const cancelSubscription = () => {
    setLoadingFor(LoadingFor.Subscription);
    setSubLoading(true);
    cancelusersubcription().then(
      (response) => {
        fetch_payment_method().then(
          (response) => {
            setSubLoading(false);
            dispatch(setSubscription(response.data.data));
          },
          (error) => {
            setSubLoading(false);
          }
        );
      },
      (error) => {
        setSubLoading(false);
      }
    );
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      isShowCurrentPassword: !values.isShowCurrentPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onError = (errors) => console.log('Errors Occurred !! :', errors);

  return (
    <>
      <Grid container>
        <Grid item xs={12} pr={5}>
          <Stack>
            <Typography variant="h5">
              <b>Account Settings</b>
            </Typography>

            <Stack direction={"column"} marginTop={5}>
              <Box>
                <Typography variant="h6">Personal Information</Typography>
                <Box
                  border={0.5}
                  marginTop={1}
                  borderRadius={5}
                  borderColor="#EBEBEB"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack
                    direction={"column"}
                    width="90%"
                    marginTop={3}
                    marginBottom={3}
                  >
                    <form
                      onSubmit={personalFormHandleSubmit(onPersonalFormSubmit,onError)}
                    >
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{
                          opacity:
                            loading && loadingFor === LoadingFor.PersonalInfo
                              ? 0.5
                              : 1,
                          disabled:
                            loading && loadingFor === LoadingFor.PersonalInfo
                              ? true
                              : false,
                        }}
                      >
                        <Stack direction={"column"} width="50%">
                          <Typography>First Name</Typography>
                          <InputBase
                            className={classes.inputField}
                            disabled={
                              loading && LoadingFor.PersonalInfo === loadingFor
                                ? true
                                : false
                            }
                            label="outlined"
                            variant="outlined"
                            placeholder="firstname"
                            name="first_name"
                            // required
                            {...personalFormRegister("first_name", {
                              required: "firstname is required",
                            })}
                            fullWidth
                          />
                          {errors?.first_name && (
                            <p style={{ color: "red" }}>
                              {errors?.first_name?.message}
                            </p>
                          )}
                        </Stack>
                        <Stack direction={"column"} width="50%">
                          <Typography>Last Name</Typography>

                          <InputBase
                            className={classes.inputField}
                            disabled={
                              loading && LoadingFor.PersonalInfo === loadingFor
                                ? true
                                : false
                            }
                            label="outlined"
                            variant="outlined"
                            placeholder="lastname"
                            // required
                            {...personalFormRegister("last_name", {
                              required: "lastname is required",
                            })}
                            name="last_name"
                            fullWidth
                          />
                          {errors?.last_name && (
                            <p style={{ color: "red" }}>
                              {errors?.last_name?.message}
                            </p>
                          )}
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} marginTop={2}>
                        <Grid
                          container
                          style={{ display: "flex", justifyContent: "right" }}
                          item
                        >
                          <Box justifyContent={"right "}>
                            <Button
                              type="Submit"
                              variant="contained"
                              color="primary"
                              style={{
                                borderRadius: 50,
                                backgroundColor: "#00CBFF",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {loading &&
                              LoadingFor.PersonalInfo === loadingFor ? (
                                <CircularProgress
                                  size="1.5rem"
                                  sx={{
                                    color: "white",
                                  }}
                                />
                              ) : (
                                <>Save</>
                              )}
                            </Button>
                          </Box>
                        </Grid>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Box>

              <Box marginTop={3}>
                <Typography variant="h6">Security</Typography>
                <Box
                  marginTop={1}
                  border={0.5}
                  borderRadius={5}
                  borderColor="#EBEBEB"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack
                    direction={"column"}
                    width="90%"
                    marginTop={3}
                    marginBottom={3}
                  >
                    <form
                      onSubmit={securityFormHandleSubmit(onSecurityFormSubmit)}
                    >
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{
                          opacity:
                            loading && loadingFor === LoadingFor.Password
                              ? 0.5
                              : 1,
                        }}
                      >
                        <Stack direction={"column"} width="50%">
                          <Typography>Current Password</Typography>
                          <InputBase
                            type={
                              values.isShowCurrentPassword ? "text" : "password"
                            }
                            // value={values.password}
                            className={classes.inputField}
                            disabled={
                              loading && LoadingFor.Password === loadingFor
                                ? true
                                : false
                            }
                            label="outlined"
                            variant="outlined"
                            placeholder="Type in your current password"
                            name="currentPassword"
                            {...securityFormRegister("c_password", {
                              required: "currentpassword is required",
                            })}
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
                                      isShowCurrentPassword:
                                        !values.isShowCurrentPassword,
                                    })
                                  }
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {!values.isShowCurrentPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            fullWidth
                          />
                          {securityFormErrors?.currentpassword?.message && (
                            <p style={{ color: "red" }}>
                              Current password is required.
                            </p>
                          )}
                        </Stack>
                        <Stack direction={"column"} width="50%">
                          <Typography>New Password</Typography>
                          <InputBase
                            type={
                              values.isShowNewPassword ? "text" : "password"
                            }
                            //  value={values.password}
                            className={classes.inputField}
                            disabled={
                              loading && LoadingFor.Password === loadingFor
                                ? true
                                : false
                            }
                            label="outlined"
                            variant="outlined"
                            name="newPassword"
                            placeholder="Type in your new password"
                            {...securityFormRegister("n_password", {
                              required: "newpassword is required",
                            })}
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
                          />
                          {securityFormErrors?.newpassword?.message && (
                            <p style={{ color: "red" }}>
                              New password is required.
                            </p>
                          )}
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} marginTop={2}>
                        <Grid container>
                          <Grid
                            item
                            lg={3}
                            sm={3}
                            sx={{
                              color: "red",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {error}
                          </Grid>
                          <Grid
                            lg={9}
                            sm={9}
                            style={{
                              display: "flex",
                              justifyContent: "right",
                              alignItems: "right",
                            }}
                            item
                          >
                            <Box justifyContent={"right "}>
                              <Button
                                type="Submit"
                                variant="contained"
                                color="primary"
                                style={{
                                  borderRadius: 50,
                                  backgroundColor: "#00CBFF",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {loading &&
                                LoadingFor.Password === loadingFor ? (
                                  <CircularProgress
                                    size="1.5rem"
                                    sx={{
                                      color: "white",
                                    }}
                                  />
                                ) : (
                                  <>Change Password</>
                                )}
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Box>
              <Box marginTop={3}>
                <Typography variant="h6">Billing</Typography>
                <Box
                  marginTop={1}
                  border={0.5}
                  borderRadius={5}
                  borderColor="#EBEBEB"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack
                    direction={"column"}
                    width="90%"
                    marginTop={3}
                    marginBottom={3}
                  >
                    <Stack
                      direction={"row"}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack direction={"row"} spacing={10}>
                        <Stack direction={"column"}>
                          <Typography>Payment method</Typography>
                        </Stack>
                        <Stack direction={"column"}>
                          <Stack direction={"row"} ml={13}>
                            <Typography>
                              {subscriptionData?.data?.card_brand ===
                              "mastercard" ? (
                                <img
                                  src={mastercard}
                                  alt="mastercard"
                                  style={{ height: "25px" }}
                                ></img>
                              ) : (
                                <img
                                  src={viss}
                                  alt="viss"
                                  style={{ height: "20px", width: "30px" }}
                                />
                              )}
                            </Typography>
                            <Typography style={{ marginLeft: 3 }}>
                              <b>
                                Visa ending in {subscriptionData?.data?.last4}
                              </b>
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
              <Box marginTop={3}>
                <Typography variant="h6">Subscription</Typography>
                <Box
                  marginTop={1}
                  border={0.5}
                  borderRadius={5}
                  borderColor="#EBEBEB"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack
                    direction={"column"}
                    width="90%"
                    marginTop={3}
                    marginBottom={3}
                  >
                    <Stack
                      direction={"row"}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack direction={"column"}>
                        <Typography>
                          Subscription Status:
                          <b>{subscriptionData?.data?.status}</b>
                        </Typography>
                      </Stack>
                      <Stack direction={"column"}>
                        <Typography>
                          Plan:
                          <b>{subscriptionData?.data?.plan_type}</b>
                        </Typography>
                      </Stack>
                      <Stack direction={"column"}>
                        <Typography>
                          Next Renew: <b>{subscriptionData?.data?.end_date}</b>
                        </Typography>
                      </Stack>
                      <Stack direction={"column"}>
                        <Grid
                          container
                          style={{ display: "flex", justifyContent: "right" }}
                          item
                        >
                          <Box justifyContent={"right"}>
                            <Button
                              type="Submit"
                              variant="contained"
                              color="primary"
                              style={{
                                borderRadius: 50,
                                backgroundColor: "#00CBFF",
                                whiteSpace: "nowrap",
                              }}
                              onClick={
                                subscriptionData?.data?.status === "Canceled" ||
                                subscriptionData?.data?.status === "Inactive"
                                  ? () => navigate("/plans")
                                  : cancelSubscription
                              }
                            >
                              {subLoading && LoadingFor.Subscription ? (
                                <CircularProgress
                                  size="1.5rem"
                                  sx={{
                                    color: "white",
                                  }}
                                />
                              ) : (
                                <>
                                  {subscriptionData?.data?.status ===
                                    "Canceled" ||
                                  subscriptionData?.data?.status === "Inactive"
                                    ? "Active Your plan"
                                    : "Cancel Subscription"}
                                </>
                              )}
                            </Button>
                          </Box>
                        </Grid>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
export default AccountSettings;

