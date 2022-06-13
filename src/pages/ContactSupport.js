import React from "react";
import Typography from "@mui/material/Typography";
// import { Card } from "@material-ui/core";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

const ContactSupport = () => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    console.table(data);
  };

  return (
    <>
      <Box
        clone
        style={{ alignItems: "center", justifyContent: "center" }}
        margin={5}
      >
        <Typography variant="h4">Contact Support</Typography>

        {/* <form> */}
        <Box width={"60%"} border={0.5} borderRadius={5} borderColor="#ebebeb">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Grid item xs={10} container spacing={2} margin={2}>
              <Grid xs={6} sm={6} lg={6} item>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="firstname"
                  {...register("firstName", {
                    required: "FirstName is required",
                  })}
                />
              </Grid>

              <Grid xs={6} sm={6} lg={6} item>
                <TextField
                  type={"email"}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  // name="email"
                  {...register("email", { required: "Email is required" })}
                  borderRadius="10"
                  // required
                  name="email"
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  variant="outlined"
                  borderColor="#EBEBEB"
                  borderRadius={9}
                  fullWidth
                  // required
                  name="Message"
                  {...register("Message", { required: "Message is required" })}
                  rows={10}
                />
              </Grid>

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
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactSupport;
