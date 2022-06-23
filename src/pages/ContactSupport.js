import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { contactSupport } from "../services";

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

const ContactSupport = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    console.table("Contact Support Form Data :", data);
    const response = await contactSupport(data);
    if (!response.success) {
      console.log("SuccessFull!!", response);
      // navigate("/");
    } else {
      console.log("Failure!!", response);
      // navigate("/");
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
                  name="name"
                  fullWidth
                  {...register("name", {
                    required: "FirstName is required",
                  })}
                />
                {errors.name?.message && (
                  <span style={{ color: "#00CBFF" }}>*Name is required</span>
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
                  <span style={{ color: "#00CBFF" }}>*Email is required.</span>
                )}
                {/* <span style={{ color: 'red' }}>{errors.email?.message}</span> */}
              </Grid>

              <Grid xs={12} item>
                <InputBase
                  className={classes.multilineinput}
                  label="outlined"
                  variant="outlined"
                  {...register("message", { required: "Message is required" })}
                  fullWidth
                  placeholder="Message"
                  multiline
                  rows={10}
                  name="message"
                  // required
                />
                {errors.message?.message && (
                  <span style={{ color: "#00CBFF" }}>
                    *Message is required.
                  </span>
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
    </>
  );
};

export default ContactSupport;
