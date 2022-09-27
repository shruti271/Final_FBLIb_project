import React, { useState } from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,  
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
import paymentCheckboxicon from "../../src/assets/paymentcheckboxicon.svg";
import annualplancheckboxicon from "../../src/assets/annualplancheckboxicon.svg";
import { monthsubscription, startMonthlyTrial, startYearlyTrial, yearsubcription } from "../services";
import GradientButton from "react-linear-gradient-button/lib/GradientButton";
import { useDispatch, useSelector } from "react-redux";
import { loadSubscriptionSuccess } from "../redux/ducks/subscription";

const useStyles = makeStyles((theme) => ({
  paymentheading: {
    fontWeight: "900 !important",
    fontSize: "24px !important",
    lineHeight: "31px !important",
    [theme.breakpoints.down("xs")]: {
      background:
        "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
    },
  },
  plansheading: {
    fontWeight: "600 !important",
    fontSize: "20px !important",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  chooseplanbutton: {
    fontWeight: "600 !important",
    height: "35px",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    width: "80%",
    textTransform: "none",
  },
  yearplanbutton: {
    fontWeight: "700 !important",
    height: "35px",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    width: "80%",
    textTransform: "none",
  },
  fontcolor: {
    color: "#F6F6FB",
    fontWeight: "600 !important",
  },
  fontcolorheading: {
    color: "#F6F6FB",
    fontWeight: "600 !important",
  },
  monthplanborder: {
    border: "1px solid #EBEBEB",
  },
  dividerColor: {
    backgroundColor: "white",
  },
  month: {
    color: "#D3D5E1",
    fontWeight: "600 !important",
  },
}));

const Payment = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.subscriptionData?.data);
  
  const aligncenterfont = useMediaQuery(theme.breakpoints.up("sm"));
  const aligncentercard = useMediaQuery(theme.breakpoints.up("sm"));
  const paddingcard = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);
  const [loadingyear, setLoadingyear] = useState(false);
console.log("8888888888888888888888888888888",status)

  const buySubscriptionmonthly = async () => {
    setLoading(true);
    try {
      if(status===false){
        const res = await startMonthlyTrial();
        console.log("00000000000000000",res)
        // dispatch(loadSubscriptionSuccess(res.data.status));        
        window.open("/","_self");
      }else if(status==="Inactive"){
      const res = await monthsubscription();
      window.open(res.data.data.url);
      }
      // const res=(status===false && await startMonthlyTrial()) || (status==="Inactive" && await monthsubscription());
      

      
     
      // window.open("/");
    } catch {
      setLoading(false);
    }
  };

  const buySubscriptionAnnually = async () => {
    setLoadingyear(true);
    try {
      if(status===false){
        const res = await startYearlyTrial();
        console.log("00000000000000000",res)      
        window.open("/","_self");
      }else if(status==="Inactive"){
      const res = await yearsubcription();
      window.open(res.data.data.url);
      }


      //  const res= (status===false && await startYearlyTrial()) || (status==="Inactive" && await yearsubcription());
      // // const res =
      // //  await yearsubcription();
      // window.open(res.data.data.url);
    } catch {
      setLoadingyear(false);
    }
  };

  return (
    <>
      <Box className={classes.fontSizeCustomize} p={1}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
          align={aligncenterfont ? "center" : "center"}
        >
          {status === false &&<span className={classes.paymentheading}>Select a Plan to Get Started</span>}
          { status === "Inactive" &&<span className={classes.paymentheading}> Your Free Trial Has expired </span>}
          
          {/* Experience The{" "}
          <span className={classes.paymentheading}>All-Seeing Eye</span> For
          Yourself */}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          color="#2B2F42"
          p={1.5}
          sx={{ fontWeight: 600 }}
          align={aligncenterfont ? "center" : "center"}
        >
          {/* Try it free for 24 hours! */}
          {status === "Inactive" && "Please select a plan to continue using Eye of Ecom!"}
          {status === false && "No credit card needed. Try it free for 24 hours!"}
        </Typography>
      </Box>

      <Grid
        container
        className={classes.fontSizeCustomize}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 11,
          marginBottom: paddingcard ? 5 : "",
        }}
      >
        <Grid
          item
          xs={10}
          lg={5}
          sm={5}
          className={classes.monthplanborder}
          sx={{
            borderRadius: {
              xs: "25px",
              sm: "60px 18px 18px 18px",
              lg: "60px 18px 18px 18px",
            },
            marginRight: aligncentercard ? 2 : "",
          }}
        >
          <Stack p={2} pt={4}>
            <Typography
              className={classes.plansheading}
              pl={2}
              sx={{
                marginLeft: { xs: "26px", sm: "16px" },
                border: "1px solid #EBEBEB",
                width: "148px",
                borderRadius: "25px",
                padding:"7px 15px"
              }}
            >
              {" "}
              Monthly Plan{" "}
            </Typography>
            <Stack p={2}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  sx={{ marginLeft: { xs: 3, sm: 0, lg: 0 }, fontWeight: 600 }}
                >
                  {" "}
                  $49
                </Typography>
                <Typography variant="h6" m={2.7} className={classes.month}>
                  /MONTH
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "16px", lg: "16px" },
                  fontWeight: 500,
                }}
                align={aligncenterfont ? "" : "center"}
              >
                Cancel Anytime, No Commitments
              </Typography>
              <Divider variant="fullWidth" sx={{ marginTop: 1 }} />
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{
                    fontSize: { xs: "18px", sm: "14px", lg: 16 },
                    fontWeight: 500,
                  }}
                >
                  Adlibrary Database With Over 30,000 Active Dropshipping Sites
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{
                    fontSize: { xs: "18px", sm: "14px", lg: 16 },
                    fontWeight: 500,
                  }}
                >
                  Early Access to the Most Powerfull Ecom Spy Tool
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{
                    fontSize: { xs: "18px", sm: "14px", lg: 16 },
                    fontWeight: 500,
                  }}
                >
                  Thousands of New Sites Added Daily
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{
                    fontSize: { xs: "18px", sm: "14px", lg: 16 },
                    fontWeight: 500,
                  }}
                >
                  Customer Support
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{
                    fontSize: { xs: "18px", sm: "14px", lg: 16 },
                    fontWeight: 500,
                  }}
                >
                  New Tools and Features Coming Soon
                </Typography>
              </Stack>
            </Stack>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                className={classes.chooseplanbutton}
                onClick={buySubscriptionmonthly}
                style={{
                  borderRadius: 30,
                  fontSize: "20px",
                  borderColor: "#EBEBEB",
                  textTransform: "none",
                }}
              >
                {loading ? (
                  <CircularProgress size={25} style={{ color: "#00CBFF" }} />
                ) : (
                  "Try It Free"
                )}
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={10}
          lg={5}
          sm={5}
          sx={{
            background:
              "linear-gradient(321.16deg, #002838 87.91%, #5F5DC3 100%)",
            borderRadius: {
              xs: "25px",
              sm: "18px 60px 18px 18px",
              lg: "18px 60px 18px 18px",
            },
            marginTop: { xs: 4, sm: 0, md: 0, lg: 0 },
          }}
        >
          <Stack p={2} pt={4}>
            <Box  sx={{marginLeft: { xs: "26px", sm: "16px" }}}>
            <GradientButton
             gradient={[
                    "rgba(103, 33, 255, 1)",
                    "rgba(0, 203, 255, 1)",
                    "rgba(181, 237, 255, 1)",
                  ]}
                  background=" #002838"
                  color="#F6F6FB"
                  fontSize="20px"
                  // width="fitContent"
              className={classes.annualheadinglabel}
              align={aligncenterfont ? "" : "center"}

            >
              Annual Plan
            </GradientButton>
            </Box>
            <Stack p={1.8}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  className={classes.fontcolorheading}
                  sx={{ marginLeft: { xs: 3, sm: 0, lg: 0 } }}
                >
                  {" "}
                  $29
                </Typography>
                <Typography variant="h6" m={2.7} className={classes.month}>
                  /MONTH
                </Typography>
              </Box>
              <Typography
                className={classes.fontcolorheading}
                sx={{ fontSize: { xs: "18px", sm: "14px", lg: "15px" } }}
                align={aligncenterfont ? "" : "center"}
              >
                Get 5 Months Free By Paying Annually
              </Typography>
              <Divider
                variant="fullWidth"
                className={classes.dividerColor}
                sx={{ marginTop: 1 }}
              />
              <Stack direction={"row"} pl={0.8}>
                <FormControlLabel
                  control={
                    <Avatar
                      src={annualplancheckboxicon}
                      alt="paymentchekbox"
                      sx={{ height: "32px", width: "32px" }}
                    />
                  }
                  label={
                    <Typography
                      m={2}
                      sx={{ fontSize: { xs: "18px", sm: "14px", lg: "15px" } }}
                      className={classes.fontcolor}
                    >
                      Adlibrary Database With Over 30,000 Active Dropshipping
                      Sites
                    </Typography>
                  }
                />
              </Stack>
              <Stack direction={"row"} pl={0.8}>
                <FormControlLabel
                  control={
                    <Avatar
                      src={annualplancheckboxicon}
                      alt="paymentchekbox"
                      sx={{ height: "32px", width: "32px" }}
                    />
                  }
                  label={
                    <Typography
                      m={2}
                      sx={{ fontSize: { xs: "18px", sm: "14px", lg: "15px" } }}
                      className={classes.fontcolor}
                    >
                      Early Access to the Most Powerful Ecom Spy Tool
                    </Typography>
                  }
                />
              </Stack>
              <Stack direction={"row"} pl={0.8}>
                <FormControlLabel
                  control={
                    <Avatar
                      src={annualplancheckboxicon}
                      alt="paymentchekbox"
                      sx={{ height: "32px", width: "32px" }}
                    />
                  }
                  label={
                    <Typography
                      m={2}
                      sx={{ fontSize: { xs: "18px", sm: "14px", lg: "15px" } }}
                      className={classes.fontcolor}
                    >
                      Thousands of New Sites Added Daily
                    </Typography>
                  }
                />
              </Stack>
              <Stack direction={"row"} pl={0.8}>
                <FormControlLabel
                  control={
                    <Avatar
                      src={annualplancheckboxicon}
                      alt="paymentchekbox"
                      sx={{ height: "32px", width: "32px" }}
                    />
                  }
                  label={
                    <Typography
                      m={2}
                      sx={{ fontSize: { xs: "18px", sm: "14px", lg: "15px" } }}
                      className={classes.fontcolor}
                    >
                      Customer Support
                    </Typography>
                  }
                />
              </Stack>

              <Stack direction={"row"} pl={0.8}>
                <FormControlLabel
                  control={
                    <Avatar
                      src={annualplancheckboxicon}
                      alt="paymentchekbox"
                      sx={{ height: "32px", width: "32px" }}
                    />
                  }
                  label={
                    <Typography
                      m={2}
                      sx={{ fontSize: { xs: "18px", sm: "14px", lg: "15px" } }}
                      className={classes.fontcolor}
                    >
                      New Tools and Features Coming Soon
                    </Typography>
                  }
                />
              </Stack>
            </Stack>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                className={classes.yearplanbutton}
                onClick={buySubscriptionAnnually}
                sx={{
                  borderRadius: 30,
                  fontSize: "20px",
                  textTransform: "none",
                }}
              >
                {loadingyear ? (
                  <CircularProgress size={25} style={{ color: "#F6F6FB" }} />
                ) : (
                  "Try It Free"
                )}
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Payment;