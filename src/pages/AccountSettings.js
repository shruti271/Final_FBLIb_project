import {
  Button,
  CircularProgress,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import viss from "../assets/viss.svg";
import { useSelector, useDispatch } from "react-redux";
import { updateAccountSettingsStart } from "../redux/ducks/accountSettings";
import useStyles from "../css/mediapage";
import { cancelusersubcription, getCarddetails } from "../services/index";

function AccountSettings() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { accountSettings } = useSelector((state) => state.accountSettings);
  const [usercardInfo, setusercardInfo] = React.useState([])
  const [loadingname ,setLoadingname]= useState(false)
  const [loading ,setLoading]= useState(false)
  const {
    register: personalFormRegister,
    handleSubmit: personalFormHandleSubmit,
    formState: { personalFormErrors },
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
    console.log("accountSettings ::", accountSettings);
    personalFormSetValue("first_name", accountSettings?.first_name);
    personalFormSetValue("last_name", accountSettings?.last_name);
    getData()
  }, [accountSettings, personalFormSetValue]);

  const onPersonalFormSubmit = async (data) => {
    // setLoading(true)
    setLoadingname("personal");
    dispatch(updateAccountSettingsStart({ data, id: accountSettings?.id }));
    // setLoading(false)
  };

  const onSecurityFormSubmit = async (data) => {
    setLoadingname("security");
    console.table("onSecurityFormSubmit data:", data);
    dispatch(updateAccountSettingsStart({ data, id: accountSettings?.id }));
  };

  const getData = async () => {
    const res = await getCarddetails();
    console.log("first----------------------", res);
    setusercardInfo(res)
  }
  console.log("444444444444", usercardInfo.last4)
  const cancelSubscription = () => {
    const res = cancelusersubcription()
    if (res.success) {
      getData()
    }
  }
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <Stack marginLeft={5}>
            <Typography variant="h5">
              <b>Account Settings</b>
            </Typography>

            <Stack width="80%" direction={"column"} marginTop={5}>
              <Box>
                <Typography variant="h6">Personal Information</Typography>
                <Box
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
                    <form onSubmit={personalFormHandleSubmit(onPersonalFormSubmit)}>
                      <Stack direction={"row"} spacing={2}>
                        <Stack direction={"column"} width="50%">
                          <Typography>First Name</Typography>
                          <InputBase
                            className={classes.inputField}
                            label="outlined"
                            variant="outlined"
                            placeholder="firstname"
                            {...personalFormRegister("first_name", {
                              required: "firstname is required",
                            })}
                            name="first_name"
                            fullWidth
                          />
                          {personalFormErrors?.first_name?.message && (
                            <p style={{ color: "red" }}>Firstname is required.</p>
                          )}
                        </Stack>
                        <Stack direction={"column"} width="50%">
                          <Typography>Last Name</Typography>

                          <InputBase
                            className={classes.inputField}
                            label="outlined"
                            variant="outlined"
                            placeholder="lastname"
                            {...personalFormRegister("last_name", {
                              required: "lastname is required",
                            })}
                            name="last_name"
                            fullWidth
                          />
                          {personalFormErrors?.last_name?.message && (
                            <p style={{ color: "red" }}>Lastname is required.</p>
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
                              }}
                            >
                              Save
                            </Button>
                          </Box>
                        </Grid>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Box>

              <Box marginTop={5}>
                <Typography variant="h6">Security</Typography>
                <Box
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
                    <form onSubmit={securityFormHandleSubmit(onSecurityFormSubmit)}>
                      <Stack direction={"row"} spacing={2}>
                        <Stack direction={"column"} width="50%">
                          <Typography>Current Password</Typography>
                          <InputBase
                            className={classes.inputField}
                            label="outlined"
                            variant="outlined"
                            placeholder="Type in your current password"
                            name="currentPassword"
                            {...securityFormRegister("c_password", {
                              required: "currentpassword is required",
                            })}
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
                            className={classes.inputField}
                            label="outlined"
                            variant="outlined"
                            name="newPassword"
                            placeholder="Type in your new password"
                            {...securityFormRegister("n_password", {
                              required: "newpassword is required",
                            })}
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
                        {/* <Button variant="contained">submit</Button> */}
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
                              }}
                            >
                              Change password
                            </Button>
                          </Box>
                        </Grid>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Box>
              <Box marginTop={5}>
                <Typography variant="h6">Billing</Typography>
                <Box
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
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <CircularProgress
                        style={{
                          position: "relative",
                          top: 100,
                          left: 30,
                          opacity: 1,
                          zIndex: 1,
                          visibility:
                            loadingname === "personal"
                              ? loading
                                ? "visible"
                                : "hidden"
                              : "hidden",
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Box
                  border={0.5}
                  borderRadius={5}
                  borderColor="#EBEBEB"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    opacity:
                      loadingname === "personal" ? (loading ? 0.5 : 1) : 1,
                    disabled: loading ? true : false,
                  }}
                >
                  <Stack
                    direction={"column"}
                    width="90%"
                    marginTop={3}
                    marginBottom={3}
                  >
                    <form
                      onSubmit={personalFormHandleSubmit(onPersonalFormSubmit)}
                    >
                      <Stack direction={"row"} spacing={2}>
                        <Stack direction={"column"} width="50%">
                          <Typography>First Name</Typography>
                          <InputBase
                            className={classes.inputField}
                            label="outlined"
                            variant="outlined"
                            placeholder="firstname"
                            {...personalFormRegister("first_name", {
                              required: "firstname is required",
                            })}
                            name="first_name"
                            fullWidth
                          />
                          <Typography style={{ marginLeft: 3 }}>
                            {/* {usercardInfo[card].map((newcard,id)=> */}
                            <b>Visa ending in {usercardInfo.last4}</b>
                          </Typography>
                        </Stack>
                      </Stack>
                      </form>
                  </Stack> 
                </Box>
              </Box>

              <Box marginTop={5}>
                <Typography variant="h6">Subscription</Typography>
                <Box
                  border={0.5}
                  borderRadius={5}
                  borderColor="#EBEBEB"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack direction={"column"}>
                    <Typography >
                      Subscription Status:
                      <b>{usercardInfo.status}</b>
                    </Typography>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography>
                      Plan:<b>{usercardInfo.plan_type}</b>
                    </Typography>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography>
                      Next Renew:<b>{usercardInfo.end_date}</b>
                    </Typography>
                  </Stack>
                  <Stack direction={"column"}>
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
                          }}
                          onClick={cancelSubscription}
                        >
                          Cancel Subscription
                        </Button>
                      </Box>
                    </Grid>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid >
      </Grid >
    </>
  );
}
export default AccountSettings;
