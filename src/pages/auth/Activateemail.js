import fbaddlogo from "../../assets/fbaddlogo.png";
import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Alert, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { themeLight, globalStyles } from "../../css/globalcss";
import { CssBaseline, withMobileDialog } from "@material-ui/core";
import { resendactivateemail } from "../../services";

const Activate = () => {
  const global = globalStyles();
  const [resendmessage, setResendmessage] = useState("");
  const email = localStorage.getItem("email");

  const reSendlink = async () => {
    const formData = new FormData();
    formData.append("email", email);
    const res = await resendactivateemail(formData);
    console.log("YY",res.data.message)
    console.log("zzz",resendmessage)
    setResendmessage(res.data.message)
    // if (res.data.message === "Email Sent") {
    //   setResendmessage("Please check you email once again");
    // }
  };
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Grid container>
        <Box
          style={{
            width: "50%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid>
            <Card
              style={{
                maxWidth: 632,
                padding: "20px 5px",
                margin: "0 auto",
                backgroundColor: "#F6F6FB",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <img alt="logo" src={fbaddlogo} className={global.logo} />
                <Box style={{ padding: "30px 32px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {console.log("===",resendmessage)}
                      {resendmessage === "Email sent" ? (
                        <Alert severity="success">Please check you email once again</Alert>
                      ) :""}
                    </Grid>
                    <Grid xs={12} item>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        I Verify Your Email
                      </Typography>
                      <Typography variant="h6" align="center">
                        To use Eye Of Ecom.click the verifiaction link in the
                        email we sent to <b>{email}</b> .This helps keep your
                        account secure.
                      </Typography>
                      <Typography variant="h6" align="center" p={1}>
                        No email in your inbox or span folder? {""}
                        <Typography
                          variant="h6"
                          component="span"
                          color="#00CBFF"
                          onClick={reSendlink}
                        >
                          let's resend it
                        </Typography>
                      </Typography>
                      <Typography variant="h6" align="center" p={1}>
                        Wrong adderss? {""}
                        <Typography
                          variant="h6"
                          component="span"
                          color="#00CBFF"
                        >
                          Log Out
                        </Typography>{" "}
                        to sign in with a diffrent email. if You mistyped your
                        email when signingup.create a new account
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
