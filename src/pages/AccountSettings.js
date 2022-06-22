import {
  Button,
  Grid,
  InputBase,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import viss from "../assets/viss.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { changeName, changePassword, getName } from "../services";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

function AccountSetings() {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  // const formData = new FormData();
  // const formDataForName = new FormData();
  const fields = ["first_name", "last_name"];
  const getname = async () => {
    const res = await getName();
    // fields.forEach((field) => setValue(field, res.first_name));
    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
    console.log(res.data.first_name);
    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

    if (res) {
      setValue(fields[0], res.data.first_name);
      setValue(fields[1], res.data.last_name);
    }

    // console.log(res);
    // console.log("_++++++++++++++++++++++++_");
    // formData.append("first_name", res.first_name);
    // formData.append("last_name", res.last_name);
  };

  useEffect(() => {
    getname();
  }, []);

  const onFormChangeNameSubmit = async (data) => {
    console.log("-----------------------", data);

    const response = await changeName({
      first_name: data?.first_name,
      last_name: data?.last_name,
    });

    if (!response.success) {
      console.log(response.message.response.data.message);
      errors.currentPassword.message = "password not mached";
    } else {
      console.log(response);
    }
  };

  const onFormSubmit = async (data) => {
    console.table("-----------------------", data);
    const response = await changePassword({
      c_password: data?.currentpassword,
      n_password: data?.newpassword,
    });

    if (!response.success) {
      console.log(response.message.response.data.message);
    } else {
      console.log(response);
      errors.currentPassword.message = "password not mached";
      navigate("/");
    }
  };

  return (
    <>
      <Stack marginLeft={5}>
        <Typography variant="h5">
          <b>Account Settings</b>
        </Typography>

        <Stack width="80%" direction={"column"} marginTop={8}>
          <PersonalInfo />

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
                <form onSubmit={handleSubmit(onFormSubmit)}>
                  <Stack direction={"row"} spacing={2}>
                    <Stack direction={"column"} width="50%">
                      <Typography>current password</Typography>
                      <InputBase
                        className={classes.inputField}
                        label="outlined"
                        variant="outlined"
                        placeholder="Type in your current password"
                        name="currentPassword"
                        {...register("currentpassword", {
                          required: "currentpassword is required",
                        })}
                        fullWidth
                      />
                      {errors.currentpassword?.message && (
                        <p style={{ color: "red" }}>
                          current password is required.
                        </p>
                      )}
                    </Stack>
                    <Stack direction={"column"} width="50%">
                      <Typography>New password</Typography>
                      <InputBase
                        className={classes.inputField}
                        label="outlined"
                        variant="outlined"
                        name="newPassword"
                        placeholder="Type in your new password"
                        {...register("newpassword", {
                          required: "newpassword is required",
                        })}
                        fullWidth
                      />
                      {errors.newpassword?.message && (
                        <p style={{ color: "red" }}>
                          new password is required.
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
                          onClick={onFormSubmit}
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
                  <Stack direction={"row"} spacing={10}>
                    <Stack direction={"column"}>
                      {/* <FaCcVisa /> */}

                      <Typography>Payment method</Typography>
                      {/* <TextField label="current password"/> */}
                    </Stack>
                    <Stack direction={"column"}>
                      <Stack direction={"row"}>
                        <Typography>
                          <img
                            src={viss}
                            alt="img1"
                            style={{ height: "20px", width: "30px" }}
                          />
                        </Typography>
                        <Typography style={{ marginLeft: 3 }}>
                          <b>Visa ending in 4436</b>
                        </Typography>
                      </Stack>

                      {/* <TextField label="New password" /> */}
                    </Stack>
                  </Stack>
                  <Stack direction={"row"}>
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
                          Change Payment Method
                        </Button>
                      </Box>
                    </Grid>
                  </Stack>
                </Stack>

                {/* <Stack direction={"row"} marginTop={2}>
                          
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
                                style={{ borderRadius: 50, backgroundColor: "#00CBFF" }}
                              >
                                Change password
                              </Button>
                            </Box>
                          </Grid>
                        </Stack> */}
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
                  <Stack direction={"column"}>
                    <Typography variant="h6">
                      Subscription Status:
                      {/* <Box fontWeight="bold" > */}
                      <b>true</b>
                      {/* </Box> */}
                    </Typography>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography>
                      Plan:<b>PRO</b>
                    </Typography>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography>
                      Next Renew:<b>May 20,2022</b>
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
                        >
                          Change Payment Method
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
    </>
  );
}

const useStyles = makeStyles(() => ({
  inputField: {
    border: "2px solid #EBEBEB",
    borderRadius: "10px",
    // height: "43px",
    paddingLeft: "16px",
    // width: "43px",//{ md: "43px", sm: "43px" ,lg:"43px"},
    height: "43px", //{ md: "43px", sm: "43px" ,lg:"43px"},
  },
}));
export default AccountSetings;
