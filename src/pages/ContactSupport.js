import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, Grid, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { contactSupport } from "../services";
import useStyles from "../css/mediapage";

const ContactSupport = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    setLoading(true);
    console.table("Contact Support Form Data :", data);
    const response = await contactSupport(data);
    if (!response.success) {
      setLoading(false);
    } else {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <>

      <Box
        clone
        style={{
          alignItems: "center",
          justifyContent: "center",         
          disabled: loading ? true : false,
        }}        
      >        
        <Typography
              className={classes.titleHome}
              variant="h5"
              ml={1}
              sx={{ fontWeight: "bold",color:"#3A3D4B" }}
            >
          <b>Contact Support</b>
        </Typography>
        
        <Box sx={{ opacity: loading ? 0.5 : 1,}}
          width={{ lg: "60%", md: "90%", sm: "90%" }}
          border={0.5}
          borderRadius={5}
          marginTop={3}
          borderColor="#ebebeb"
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Grid item xs={10} container spacing={2} margin={2}>
              <Grid xs={6} sm={6} lg={6} item>
                <InputBase disabled={loading?true:false}
                  className={classes.inputField}
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
                <InputBase disabled={loading?true:false}
                  className={classes.inputField}
                  type="email"
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
              </Grid>

              <Grid xs={12} item>
                <InputBase disabled={loading?true:false}
                  className={classes.multilineinput}
                  label="outlined"
                  variant="outlined"
                  {...register("message", { required: "Message is required" })}
                  fullWidth
                  placeholder="Message"
                  multiline
                  rows={10}
                  name="message"
                />
                {errors.message?.message && (
                  <span style={{ color: "#00CBFF" }}>
                    *Message is required.
                  </span>
                )}
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
                      
                    {loading ? (
                                <CircularProgress
                                  size="1.5rem"
                                  sx={{
                                    color: "white",
                                  }}
                                />
                              ) : (
                                <>Submit</>
                              )}
                              
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
