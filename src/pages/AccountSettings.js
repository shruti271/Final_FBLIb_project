import { Button, Grid, InputBase, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import viss from "../assets/viss.svg";
import { makeStyles } from "@material-ui/core/styles";


function AccountSetings() {
  const classes = useStyles();
  return (
    <>
      <Stack marginLeft={5}>
        <Typography variant="h5">
          <b>Account Settings</b>
        </Typography>

        <Stack width="80%" direction={"column"} marginTop={8}>
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
                <Stack direction={"row"} spacing={2}>
                  <Stack direction={"column"} width="50%">
                    <Typography >First Name</Typography>
                    {/* <TextField /> */}
                    <InputBase
                        className={classes.inputField}
                        label="outlined"
                        variant="outlined"
                        placeholder="Name"
                        error
                        required
                        // error={this.state.errors ? true : false}
                        name="email"
                        fullWidth
                      />
                  </Stack>
                  <Stack direction={"column"} width="50%">
                    <Typography>Last Name</Typography>
                    {/* <TextField /> */}
                    <InputBase
                        className={classes.inputField}
                        label="outlined"
                        variant="outlined"
                        // placeholder="Name"
                        error
                        required
                        // error={this.state.errors ? true : false}
                        name="LastName"
                        fullWidth
                      />
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
                        style={{ borderRadius: 50, backgroundColor: "#00CBFF" }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Grid>
                </Stack>
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
                <Stack direction={"row"} spacing={2}>
                  <Stack direction={"column"} width="50%">
                    <Typography>current password</Typography>
                    {/* <TextField placeholder="Type in your current password" /> */}
                    <InputBase
                        className={classes.inputField}
                        label="outlined"
                        variant="outlined"
                        placeholder="Type in your current password"
                        error
                        required                        
                        name="currentPassword"
                        fullWidth
                      />
                  </Stack>
                  <Stack direction={"column"} width="50%">
                    <Typography>New password</Typography>
                    {/* <TextField placeholder="Type in your new password" /> */}
                    <InputBase
                        className={classes.inputField}
                        label="outlined"
                        variant="outlined"
                        placeholder="Type in your new password"
                        error
                        required
                        // error={this.state.errors ? true : false}
                        name="newPassword"
                        fullWidth
                      />
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
                        style={{ borderRadius: 50, backgroundColor: "#00CBFF" }}
                      >
                        Change password
                      </Button>
                    </Box>
                  </Grid>
                </Stack>
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
