import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import appLogo from "../../assets/appLogo.svg";
import { Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import Backtologin from "../../assets/Backtologinicon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { forgotPassword, isAlive } from "../../services/index";

const themeLight = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});
const useStyles = makeStyles(() => ({
  logo: {
    height: "37px !important",
    width: "65px !important",
    marginRight: "10px",
    marginTop: "4px",
  },
  title: {
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontStyle: "normal !important",
    fontWeight: "900 !important",
    fontSize: "32.5271px !important",
    lineHeight: "43px !important",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  signin: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "36px",
    color: "#2B2F42",
  },

  forgetPasswordbutton: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontSize: "22px",
    fontHeight: 600,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "capitalize",
    color: "#F6F6FB",
    width: "60%",
  },
  arrow: {
    height: "16px !important",
    width: "14px !important",
    margin: "2px",
    marginRight: "10px",
  },
  Backtologinfont: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#2B2F42",
  },
  Backtologinbutton: {
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
    cursor: "pointer",
  },
}));
const ForgetPassword = () => {
  const classes = useStyles();

  // const [email,setEmail] = useState()

  const navigate = useNavigate();

  // const [authState, setauthState] = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");
  // const [invalid, setInvalid] = useState(false);

  const handlesubmit = async () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail.match(mailformat)) {
      const response = await forgotPassword({ email: userEmail });
      console.log(response);
      if (!response.success) {
        // setErrorMsg(response.message.response.data.message);
        console.log(response.message.response.data.message);

        // setInvalid(true);
      } else {
        console.log(response);
        // setSuccessMsg(response.data.message);
      }
      //   alert("Valid email address!");
      return true;
    } else {
      // setErrorMsg("You have entered an invalid email address!");
      alert("You have entered an invalid email addre/ss!");
      return false;
    }
  };

  const test_str = () => {
    var idx = userEmail.indexOf("@");
    var res = userEmail.replace(userEmail.slice(5, idx), "*".repeat(5));
    console.log(res);
    return res;
  };

  const getAlive = async () => {
    const res = await isAlive();
    if (res.success && res?.data?.data) {
      if (res?.data?.data?.is_alive === true) {
        console.log(
          ":::::::::::::::::::::::::::::::",
          res?.data?.data?.is_alive
        );
        navigate("/Addlibrarydatabase");
      }
    }
    console.log(res);
  };

  useEffect(() => {
    getAlive();
  }, []);

  const gotoLoginpage = () => {
    navigate("/Login");
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
                <Stack
                  direction={"row"}
                  sx={{ displayl: "flex", justifyContent: "center" }}
                >
                  <img alt="logo" src={appLogo} className={classes.logo} />
                  <Typography edge="start" className={classes.title}>
                    Eye of Ecom
                  </Typography>
                </Stack>

                <Box style={{ padding: "30px 32px" }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <Typography className={classes.signin}>
                        Forget Password?
                      </Typography>
                    </Grid>

                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter Email Address"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: "14px" }}
                    className={classes.forgetPasswordbutton}
                    onClick={handlesubmit}
                  >
                    Reset Password
                  </Button>
                </Box>
                <Box
                  className={classes.Backtologinbutton}
                  onClick={gotoLoginpage}
                >
                  <img
                    src={Backtologin}
                    className={classes.arrow}
                    alt="bactologin"
                  />
                  <Typography className={classes.Backtologinfont}>
                    Back to log in
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </MuiThemeProvider>
  );
};

export default ForgetPassword;
