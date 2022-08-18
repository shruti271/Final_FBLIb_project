import fbaddlogo from "../../assets/Eye of Ecom  Blue.png";
import fbaddlogowhitecolor from "../../assets/Eye of Ecom White.png"
import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Alert, Box, Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline } from "@material-ui/core";
import { resendactivateemail } from "../../services";
import {  useNavigate } from "react-router-dom";

const Activate = () => {
  const global = globalStyles();
  const theme = useTheme()
  const showhidelogolargedevice = useMediaQuery(theme.breakpoints.up("sm"));
  const showhidelogosmalldevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [resendmessage, setResendmessage] = useState("");
  const email = localStorage.getItem("email");
  const navigate = useNavigate()
  const reSendlink = async () => {
    const formData = new FormData();
    formData.append("email", email);
    const res = await resendactivateemail(formData);
    console.log("YY", res.data.message);
    console.log("zzz", resendmessage);
    setResendmessage(res.data.message);
    if (res.data.message === "Email Sent") {
      setResendmessage("Please check you email once again");
    }
  };
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Grid container>
        <Box
          style={{
            width: "85%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
               {showhidelogosmalldevice ?
           <img
                alt="logo"
                src={fbaddlogowhitecolor}
                className={global.logo}
                onClick={() => navigate("/auth/login")}
              /> :""}
          <Grid>
            <Card
              style={{
                maxWidth: 632,
                padding: "20px 5px",
                margin: "15px auto",
                backgroundColor: "#F6F6FB",
                borderRadius: "16px",
              }}
            >
              <CardContent>
              {showhidelogolargedevice ?
              <img
                alt="logo"
                src={fbaddlogo}
                className={global.logo}
                onClick={() => navigate("/auth/login")}
              /> :""}
                <Box style={{  padding: "1vmax 2.5vmax" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {console.log("===", resendmessage)}
                      {resendmessage === "Email sent" ? (
                        <Alert severity="success">
                          Please check you email once again
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid xs={12} item>
                      <Typography variant="h6" align="center" sx={{fontSize:{xs:16,sm:19,lg:19,xl:19},fontWeight:600}} >
                        We've just sent a verification email to: <b>{email}</b>
                      </Typography>
                      <Typography variant="h6" align="center" p={1} sx={{fontSize:{xs:16,sm:19,lg:19},fontWeight:500}}>
                      Click the link in your email to verify your account. If you can't find the email check your spam folder or click here to resend.{""}
                        {""}
                        <Typography
                          variant="h6"
                          component="span"
                          color="#00CBFF"
                          onClick={reSendlink}
                          sx={{cursor:"pointer",fontSize:{xs:16,sm:19,lg:19}}}
                        >
                          Let's resend it
                        </Typography>
                      </Typography>
                      <Typography variant="h6" align="center" p={1} sx={{fontSize:{xs:16,sm:19,lg:19},fontWeight:500}}>
                        Wrong email? {""}
                        <Typography
                          variant="h6"
                          component="span"
                          color="#00CBFF"
                          sx={{cursor:"pointer",fontSize:{xs:16,sm:19,lg:19},fontWeight:600}}
                          onClick={()=>navigate("/auth/register")}
                        >
                               Click here to Log Out
                        </Typography>{" "}
                        and create a new account.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Activate;
