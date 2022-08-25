import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";
import { updateAccountSettingsStart } from "../redux/ducks/accountSettings";
import { setSubscription } from "../redux/ducks/subscription";
import { cancelusersubcription, fetch_payment_method } from "../services";
import useStyles from "../css/mediapage";
import viss from "../assets/viss.svg";
import mastercard from "../assets/master-card.svg";

const LoadingFor = {
  PersonalInfo: "personalInfo",
  Password: "password",
  Subscription: "subscription",
};

function AccountSettings() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [subLoading, setSubLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    showPassword: false,
    isShowCurrentPassword: false,
    isShowNewPassword: false,
  });

  const showgrid = useMediaQuery(theme.breakpoints.up("sm"));
  const savebutton = useMediaQuery(theme.breakpoints.up("sm"));
  const { accountSettings, loading, error } = useSelector(
    (state) => state.accountSettings
  );

  const subscriptionData = useSelector((state) => state.subscriptionData);

  useEffect(() => {}, [subscriptionData]);

  const [loadingFor, setLoadingFor] = useState("");

  const {
    register: personalFormRegister,
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
    formState: { securityFormErrors },
  } = useForm({
    defaultValues: {
      c_password: "",
      n_password: "",
    },
  });

  useEffect(() => {
    personalFormSetValue("first_name", accountSettings?.first_name);
    personalFormSetValue("last_name", accountSettings?.last_name);
  }, [accountSettings, personalFormSetValue]);

  const onPersonalFormSubmit = (data) => {
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onError = (errors) => console.log("Errors Occurred !! :", errors);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ pl: { lg: 5, md: 5, sm: 5 } }}>
          <Stack>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 450px)": {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                },
              }}
            >
              <b>Account Settings</b>
            </Typography>

            <Stack
              direction={"column"}
              marginTop={2}
              sx={{
                "@media (max-width: 450px)": {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                },
              }}
            >
              <Box
                sx={{ width: { lg: "80%", sm: "90%", xs: "90%", md: "90%" } }}
              >
                <Typography
                  variant="h6"
                  className={classes.headindtextcenter}
                  sx={{
                    "@media (max-width: 450px)": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "15px",
                    },
                  }}
                >
                  Personal Information
                </Typography>
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
                      onSubmit={personalFormHandleSubmit(
                        onPersonalFormSubmit,
                        onError
                      )}
                    >
                      <Stack
                        direction={showgrid ? "row" : "column"}
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
                        <Stack
                          direction={"column"}
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "50%",
                              md: "50%",
                              lg: "50%",
                            },
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 500, fontSize: "16px" }}
                          >
                            First Name
                          </Typography>
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
                        <Stack
                          direction={"column"}
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "50%",
                              md: "50%",
                              lg: "50%",
                            },
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 500, fontSize: "16px" }}
                          >
                            Last Name
                          </Typography>

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
                          style={{
                            display: "flex",
                            justifyContent: savebutton ? "right" : "center",
                          }}
                          item
                          xs={12}
                        >
                          <Button
                            type="Submit"
                            variant="contained"
                            color="primary"
                            style={{
                              borderRadius: 50,
                              background:
                                "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                              whiteSpace: "nowrap",
                              width: savebutton ? "auto" : "99%",
                              textTransform: "none",
                              fontWeight: 600,
                              fontSize: "16px",
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
                        </Grid>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Box>

              <Box
                marginTop={showgrid ? 3 : 0}
                sx={{ width: { lg: "80%", sm: "90%", xs: "90%", md: "90%" } }}
              >
                <Typography
                  variant="h6"
                  className={classes.headindtextcenter}
                  sx={{
                    "@media (max-width: 450px)": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "15px",
                    },
                  }}
                >
                  Security
                </Typography>
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
                        direction={showgrid ? "row" : "column"}
                        spacing={2}
                        sx={{
                          opacity:
                            loading && loadingFor === LoadingFor.Password
                              ? 0.5
                              : 1,
                        }}
                      >
                        <Stack
                          direction={"column"}
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "50%",
                              md: "50%",
                              lg: "50%",
                            },
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 500, fontSize: "16px" }}
                          >
                            Current Password
                          </Typography>
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
                        <Stack
                          direction={"column"}
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "50%",
                              md: "50%",
                              lg: "50%",
                            },
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 500, fontSize: "16px" }}
                          >
                            New Password
                          </Typography>
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
                        <Grid container justifyContent="center">
                          <Grid
                            item
                            lg={4}
                            sm={4}
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
                            lg={8}
                            sm={8}
                            xs={12}
                            style={{
                              display: "flex",
                              justifyContent: savebutton ? "right" : "center",
                              // justifyContent:"right"
                            }}
                            item
                          >
                            <Button
                              type="Submit"
                              variant="contained"
                              color="primary"
                              style={{
                                borderRadius: 50,
                                background:
                                  "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                                whiteSpace: "nowrap",
                                width: savebutton ? "auto" : "99%",
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: "16px",
                              }}
                            >
                              {loading && LoadingFor.Password === loadingFor ? (
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
                          </Grid>
                        </Grid>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Box>

              <Typography
                mb={2}
                mt={2}
                variant="h6"
                className={classes.headindtextcenter}
                sx={{
                  "@media (max-width: 450px)": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "15px",
                  },
                }}
                // p={1}
              >
                Billing
              </Typography>
              <Grid
                container
                sx={{ width: { lg: "80%", sm: "90%", xs: "90%", md: "90%" } }}
                padding={4}
                border={0.5}
                borderRadius={5}
                borderColor="#EBEBEB"
              >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography
                    sx={{
                      marginLeft: {
                        xs: "0px",
                        sm: "32px",
                        md: "32px",
                        lg: "32px",
                      },
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    Payment method
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography
                    ml={2}
                    sx={{
                      marginTop: {
                        xs: "20px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    {subscriptionData?.data?.card_brand === "mastercard" ? (
                      <>
                        <FormControlLabel
                          control={
                            <img
                              src={mastercard}
                              alt="viss"
                              style={{ width: "30px" }}
                            />
                          }
                          label={
                            <Typography ml={0.5} sx={{ fontWeight: "bold" }}>
                              {" "}
                              Visa ending in {subscriptionData?.data?.last4}
                            </Typography>
                          }
                        />
                      </>
                    ) : (
                      <>
                        <FormControlLabel
                          control={
                            <img
                              src={viss}
                              alt="viss"
                              style={{ width: "30px" }}
                            />
                          }
                          label={
                            <Typography ml={0.5} sx={{ fontWeight: "bold" }}>
                              {" "}
                              Visa ending in {subscriptionData?.data?.last4}
                            </Typography>
                          }
                        />
                      </>
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Box marginTop={showgrid ? 2 : 0}>
                <Typography
                  variant="h6"
                  mb={2}
                  className={classes.headindtextcenter}
                  sx={{
                    "@media (max-width: 450px)": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "15px",
                    },
                  }}
                >
                  Subscription
                </Typography>
              </Box>

              <Grid
                container
                p={3}
                pt={3}
                sx={{
                  paddingLeft: { xs: "", sm: "", md: "", lg: "60px" },
                  width: { lg: "80%", sm: "90%", xs: "90%", md: "90%" },
                }}
                border={0.5}
                borderRadius={5}
                borderColor="#EBEBEB"
              >
                <Grid item xs={12} sm={5} md={5} lg={3}>
                  <Typography
                    sx={{
                      marginLeft: {
                        xs: "0px",
                        sm: "0px",
                        md: "19px",
                        lg: "0px",
                      },
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    Subscription Status:
                    <b>{subscriptionData?.data?.status}</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={2}>
                  <Typography
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    Plan:
                    <b>{subscriptionData?.data?.plan_type}</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} lg={3}>
                  <Typography
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    Next Renew: <b>{subscriptionData?.data?.end_date}</b>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sx={{
                    paddingTop: { xs: 1 },
                    padding: { sm: "12px", md: "10px", lg: "0px" },
                    marginLeft: {
                      // xs: "auto",
                      sm: "40px",
                      md: "64%",
                      lg: "20px",
                    },
                    display: "flex",
                    justifyContent: savebutton ? "right" : "center",
                  }}
                >
                  <Button
                    type="Submit"
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: 50,
                      background:
                        "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                      whiteSpace: "nowrap",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "16px",
                      width: savebutton ? "auto" : "100%",
                    }}
                    onClick={
                      subscriptionData?.data?.status === "Canceled"
                        ? () => navigate("/plans")
                        : handleClickOpen
                    }
                  >
                    <>
                      {subscriptionData?.data?.status === "Canceled" ||
                      subscriptionData?.data?.status === "Inactive"
                        ? "Active Your plan"
                        : "Cancel Subscription"}
                    </>
                  </Button>
                  <Box p={2} in={open}>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <Typography
                            variant="h5"
                            p={1}
                            sx={{ fontWeight: 600, color: "#2B2F42" }}
                          >
                            Are you sure you want to cancel your subscription?
                            You will lose access to Eye of Ecom immediately and
                            will not receive a refund for any time remaining in
                            your subscription.
                          </Typography>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          marginRight: "inherit",
                          paddingBottom: "16px",
                          marginLeft: savebutton ? "0px" : "23px",
                        }}
                      >
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          color="primary"
                          style={{
                            borderRadius: 50,
                            background:
                              "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                            whiteSpace: "nowrap",
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "16px",
                            width: savebutton ? "auto" : "100%",
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="Submit"
                          variant="contained"
                          color="primary"
                          style={{
                            borderRadius: 50,
                            background:
                              "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                            whiteSpace: "nowrap",
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "16px",
                            width: savebutton ? "auto" : "100%",
                          }}
                          onClick={cancelSubscription}
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
                              {subscriptionData?.data?.status === "Canceled" ||
                              subscriptionData?.data?.status === "Inactive"
                                ? "Yes"
                                : "Yes"}
                            </>
                          )}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
export default AccountSettings;
