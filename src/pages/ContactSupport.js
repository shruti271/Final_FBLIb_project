import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  InputBase,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { contactSupport } from "../services";
import useStyles from "../css/mediapage";

const ContactSupport = () => {
  const classes = useStyles();
  const theme = useTheme();

  const savebutton = useMediaQuery(theme.breakpoints.up("sm"));

  const [loading, setLoading] = useState(false);
  const [resendmessage, setResendmessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    setLoading(true);

    const response = await contactSupport(data);

    setResendmessage(response.data.message);
    if (!response.success) {
      setResendmessage("Email sent Successfully");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        clone
        sx={{
          alignItems: "center",
          justifyContent: "center",
          disabled: loading ? true : false,
          marginTop: 2,
          marginLeft: { xs: "15px", sm: "35px", md: "30px", lg: "40px" },
          marginRight: { xs: "15px", sm: 0, md: 0, lg: "40px" },
        }}
      >
        <Typography
          className={classes.titleHome}
          variant="h5"
          ml={1}
          sx={{ fontWeight: "bold", color: "#3A3D4B" }}
        >
          <b>Contact Support</b>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          width={{ lg: "70%", md: "90%", sm: "90%" }}
          border={0.5}
          borderRadius={5}
          marginTop={3}
          borderColor="#ebebeb"
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Grid
              xs={11}
              container
              spacing={2}
              sx={{ margin: { xs: "-5px", sm: "10px", md: "8px", lg: "8px" } }}
            >
              <Grid xs={12} sm={6} lg={6} item>
                <InputBase
                  disabled={loading ? true : false}
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

              <Grid xs={12} sm={6} lg={6} item>
                <InputBase
                  disabled={loading ? true : false}
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
                <InputBase
                  disabled={loading ? true : false}
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
              {resendmessage === "Email sent" && (
                <Grid item xs={12}>
                  <Alert severity="success">Email sent successfully</Alert>
                </Grid>
              )}
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: savebutton ? "right" : "center",
                }}
                item
              >
                <Box p={2.5}>
                  <Button
                    type="Submit"
                    variant="contained"
                    color="primary"
                    className={classes.sendbutton}
                    sx={{
                      borderRadius: "15px",
                      background:
                        "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                      width: {
                        xs: "232px",
                        sm: "120px",
                        md: "120px",
                        lg: "120px",
                      },
                    }}
                  >
                    <Typography
                      fontSize={{ lg: 15, md: 13, sm: 13 }}
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      {loading ? (
                        <CircularProgress
                          size="1.5rem"
                          sx={{
                            color: "white",
                          }}
                        />
                      ) : (
                        <>Send</>
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
