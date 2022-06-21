import { Box, Button, Grid, InputBase, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { changeName, getName } from "../services";
import { makeStyles } from "@material-ui/core/styles";

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

const PersonalInfo = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const fields = ["first_name", "last_name"];
  const getname = async () => {
    const res = await getName();

    if (res) {
      setValue(fields[0], res.data.first_name);
      setValue(fields[1], res.data.last_name);
    }
  };
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
  useEffect(() => {
    getname();
  }, []);
  return (
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
        <Stack direction={"column"} width="90%" marginTop={3} marginBottom={3}>
          <form onSubmit={handleSubmit(onFormChangeNameSubmit)}>
            <Stack direction={"row"} spacing={2}>
              <Stack direction={"column"} width="50%">
                <Typography>First Name</Typography>

                <InputBase
                  className={classes.inputField}
                  label="outlined"
                  variant="outlined"
                  placeholder="firstname"
                  {...register("first_name", {
                    required: "firstname is required",
                  })}
                  name="first_name"
                  fullWidth
                />
                {errors.first_name?.message && (
                  <p style={{ color: "red" }}>current password is required.</p>
                )}
              </Stack>
              <Stack direction={"column"} width="50%">
                <Typography>Last Name</Typography>

                <InputBase
                  className={classes.inputField}
                  label="outlined"
                  variant="outlined"
                  {...register("last_name", {
                    required: "lastname is required",
                  })}
                  // error={this.state.errors ? true : false}
                  name="last_name"
                  fullWidth
                />
                {errors.last_name?.message && (
                  <p style={{ color: "red" }}>current password is required.</p>
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
                    // onClick={onFormChangeNameSubmit}
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
  );
};

export default PersonalInfo;
