import {
    Button,
    // Card,
    Grid,
    InputBase,
    // makeStyles,
    // Paper,
    Stack,
    // Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import viss from "../assets/viss.svg";
  import { makeStyles } from "@material-ui/core/styles";
  
  // const useStyles = makeStyles({
  //   bold: {
  //     fontWeight: 600,
  //   },
  // });
  function AccountSetting() {
    const classes = useStyles();
    return (
      <>
        <Stack marginLeft={5}>
          <Typography variant="h5">
            <b>Account Settings</b>
          </Typography>
          {/* <Box border={2} borderRadius={2}> */}
  
          <Stack
            width={{ lg: "80%", md: "95%", sm: "90%" }}
            direction={"column"}
            marginTop={2}
            height="100%"
          >
            <Box>
              <Typography variant="h6" fontSize={{ lg: 20, md: 18, sm: 15 }}>
                Personal Information
              </Typography>
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
                  marginTop={{ lg: 3, md: 1, sm: 1 }}
                  marginBottom={{ lg: 3, md: 1, sm: 1 }}
                  // spacing={{
                  //   md: { marginTop: 3, marginBottom: 3 },
                  //   sm: { marginTop: 1, marginBottom: 1 },
                  // }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Stack direction={"column"} width="50%">
                      <Typography fontSize={{ lg: 16, md: 16, sm: 15 }}>
                        First Name
                      </Typography>
                      <InputBase
                        className={classes.input1}
                        label="outlined"
                        variant="outlined"
                        placeholder="Name"
                        error
                        required
                        // error={this.state.errors ? true : false}
                        name="email"
                        fullWidth
                      />
  
                      {/* <TextField
                        style={{
                          width: { md: "20px", sm: "20px" },
                          height: { md: "20px", sm: "20px" },
                        }}
                      /> */}
                    </Stack>
                    <Stack direction={"column"} width="50%">
                      <Typography fontSize={{ lg: 16, md: 16, sm: 15 }}>
                        Last Name
                      </Typography>
                      {/* <TextField /> */}
                      <InputBase
                        className={classes.input1}
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
                  <Stack direction={"row"} marginTop={{ md: 0.5, lg: 2, sm: 1 }}>
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
                          <Typography fontSize={{ lg: 15, md: 12, sm: 10 }}>
                            Save
                          </Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Stack>
                </Stack>
              </Box>
            </Box>
  
            <Box spacing={{ md: { marginTop: 1.5 }, lg: { marginTop: 5 } }}>
              <Typography variant="h6" fontSize={{ lg: 20, md: 18, sm: 15 }}>
                Security
              </Typography>
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
                  marginTop={{ lg: 3, md: 1, sm: 1 }}
                  marginBottom={{ lg: 3, md: 1, sm: 1 }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Stack direction={"column"} width="50%">
                      <Typography fontSize={{ lg: 16, md: 16, sm: 15 }}>
                        current password
                      </Typography>
                      {/* <TextField placeholder="Type in your current password" /> */}
                      <InputBase
                        className={classes.input1}
                        label="outlined"
                        variant="outlined"
                        placeholder="Type in your current password"
                        error
                        required
                        // error={this.state.errors ? true : false}
                        name="currentPassword"
                        fullWidth
                      />
                    </Stack>
                    <Stack direction={"column"} width="50%">
                      <Typography fontSize={{ lg: 16, md: 16, sm: 15 }}>
                        New password
                      </Typography>
                      {/* <TextField placeholder="Type in your new password" /> */}
                      <InputBase
                        className={classes.input1}
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
                  <Stack direction={"row"} marginTop={{ md: 0.5, lg: 2, sm: 1 }}>
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
                          <Typography fontSize={{ lg: 15, md: 12, sm: 10 }}>
                            Change password
                          </Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Stack>
                </Stack>
              </Box>
            </Box>
  
            <Box spacing={{ md: { marginTop: 1.5 }, lg: { marginTop: 5 } }}>
              <Typography variant="h6" fontSize={{ lg: 20, md: 18, sm: 15 }}>
                Billing
              </Typography>
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
                    <Stack direction={"row"} spacing={{ md: 2, lg: 6, sm: 3 }}>
                      <Stack direction={"column"}>
                        {/* <FaCcVisa /> */}
  
                        <Typography fontSize={{ lg: 15, md: 15, sm: 13 }}>
                          Payment method
                        </Typography>
                        {/* <TextField label="current password"/> */}
                      </Stack>
                      <Stack direction={"column"}>
                        <Stack direction={"row"}>
                          <Typography>
                            <img
                              src={viss}
                              alt="img1"
                              height="30px"
                              width="30px"
                              // style={{
                              //   height: { lg: 500, md: 50, sm: 3 },
                              //   width: { lg: 50, md: 50, sm: 50 },
                              // }}
  
                              // style={{
                              //   height: { lg: "1px", md: "30px", sm: 3 },
                              //   width: { lg: "15px", md: "30px", sm: 3 },
                              // }}
                            />
                          </Typography>
                          <Typography
                            style={{ marginLeft: 3 }}
                            fontSize={{ lg: 15, md: 15, sm: 15 }}
                            marginTop={0.5}
                          >
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
                            <Typography fontSize={{ lg: 15, md: 12, sm: 10 }}>
                              Change Payment Method
                            </Typography>
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
  
            <Box spacing={{ md: { marginTop: 1.5 }, lg: { marginTop: 5 } }}>
              <Typography variant="h6" fontSize={{ lg: 20, md: 18, sm: 15 }}>
                Subscription
              </Typography>
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
                    spacing={3}
                  >
                    <Stack direction={"column"}>
                      <Typography
                        variant="h6"
                        fontSize={{ lg: 18, md: 15, sm: 13 }}
                      >
                        Subscription Status:
                        {/* <Box fontWeight="bold" > */}
                        <b>true</b>
                        {/* </Box> */}
                      </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                      <Typography fontSize={{ lg: 18, md: 15, sm: 13 }}>
                        Plan:<b>PRO</b>
                      </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                      <Typography fontSize={{ lg: 18, md: 15, sm: 13 }}>
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
                            <Typography fontSize={{ lg: 15, md: 12, sm: 10 }}>
                              Change Payment Method
                            </Typography>
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
    input1: {
      border: "2px solid #EBEBEB",
      borderRadius: "10px",
      // height: "43px",
      paddingLeft: "16px",
      // width: "43px",//{ md: "43px", sm: "43px" ,lg:"43px"},
      height: "43px", //{ md: "43px", sm: "43px" ,lg:"43px"},
    },
    multilineinput: {
      border: "2px solid #EBEBEB",
      borderRadius: "10px",
      height: "264px",
      paddingLeft: "10px",
    },
  }));
  
  export default AccountSetting;
  