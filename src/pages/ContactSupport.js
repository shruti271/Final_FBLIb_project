import React from "react";
import Typography from "@mui/material/Typography";
// import { Card } from "@material-ui/core";
import { Button, Grid, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { contactSupport } from "../services";
import { useNavigate } from "react-router-dom";

const ContactSupport = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    console.table("-----------------------", data);
    const response = await contactSupport({
      name: data.firstName,
      email: data.email,
      message: data.Message
    });
    // console.response(response);
    if (!response.success) {
      // setErrorMsg(response.message.response.data.message);
      // navigate("/");
      console.log(response.message.response.data.message);

      // setInvalid(true);
    } else {
      console.log(response);
      navigate("/");
      // setSuccessMsg(response.data.message);
    }
  };

  return (
    <>
      <Box
        clone
        style={{ alignItems: "center", justifyContent: "center" }}
        margin={5}
      >
        <Typography fontSize={{ lg: 25, md: 25, sm: 25 }}>
          <b>Contact Support</b>
        </Typography>

        <Box
          width={{ lg: "60%", md: "90%", sm: "90%" }}
          border={0.5}
          borderRadius={5}
          borderColor="#ebebeb"
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Grid item xs={10} container spacing={2} margin={2}>
              <Grid xs={6} sm={6} lg={6} item>
                <InputBase
                  className={classes.fieldsStyle}
                  label="outlined"
                  variant="outlined"
                  placeholder="Name"
                  error
                  name="firstName"
                  fullWidth
                  {...register("firstName", {
                    required: "FirstName is required",
                  })}
                />
                {errors.firstName?.message && (
                  <p style={{ color: "red" }}>Last name is required.</p>
                )}
              </Grid>

              <Grid xs={6} sm={6} lg={6} item>
                <InputBase
                  className={classes.fieldsStyle}
                  type="email"
                  // required
                  label="outlined"
                  variant="outlined"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  fullWidth
                  placeholder="Email"
                  name="email"
                />
                {errors.email?.message && (
                  <p style={{ color: "red" }}>Email is required.</p>
                )}
                {/* <span style={{ color: 'red' }}>{errors.email?.message}</span> */}
              </Grid>

              <Grid xs={12} item>
                <InputBase
                  className={classes.multilineinput}
                  label="outlined"
                  variant="outlined"
                  {...register("Message", { required: "Message is required" })}
                  fullWidth
                  placeholder="Message"
                  multiline
                  rows={10}
                  name="Message"
                  // required
                />
                {errors.Message?.message && (
                  <p style={{ color: "red" }}>Message is required.</p>
                )}

                {/* <span style={{ color: 'red' }}>{errors.Message?.message}</span> */}
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
                    <Typography fontSize={{ lg: 15, md: 13, sm: 13 }}>
                      Submit
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      {/* <Box
        clone
        style={{ alignItems: "center", justifyContent: "center" }}
        margin={5}
      >
        <Typography variant="h4">Contact Support</Typography>

      
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
      </Box> */}
    </>
  );
};

const useStyles = makeStyles(() => ({
  fieldsStyle: {
    border: "2px solid #EBEBEB",
    borderRadius: "10px",
    height: "43px",
    paddingLeft: "16px",
  },
  multilineinput: {
    border: "2px solid #EBEBEB",
    borderRadius: "10px",
    height: "264px",
    paddingLeft: "16px !important",
  },
}));

export default ContactSupport;
