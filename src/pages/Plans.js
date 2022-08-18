import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import paymentCheckboxicon from "../../src/assets/paymentcheckboxicon.svg";
import annualplancheckboxicon from "../../src/assets/annualplancheckbox.svg";
import { monthsubscription, yearsubcription } from "../services";
const useStyles = makeStyles((theme) => ({
  paymentheading: {
    fontWeight: "900 !important",
    fontSize: "24px !important",
    lineHeight: "31px !important",
    [theme.breakpoints.down('xs')]: {
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
    fontSize: "22px !important",
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
    fontWeight: "600 !important",
    height: "35px",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    width: "80%",
    textTransform: "none",
  },
  fontcolor: {
    fontSize: "1px",
    color: "#F6F6FB",
  },
  monthplanborder: {
    border: "1px solid #EBEBEB",
  },
  dividerColor: {
    backgroundColor: "white",
  },
  month: {
    color: "#D3D5E1",
  },
}));
const Payment = () => {
  const classes = useStyles();
  const theme = useTheme();
  const aligncenterfont = useMediaQuery(theme.breakpoints.up("sm"));
  const [loading, setLoading] = useState(false);
  const [loadingyear, setLoadingyear] = useState(false);
  const buySubscriptionmonthly = async () => {
    setLoading(true);
    try {
      const res = await monthsubscription();
      window.open(res.data.data.url);
    } catch {
      setLoading(false);
    }
  };
  const buySubscriptionAnnually = async () => {
    setLoadingyear(true);
    try {
      const res = await yearsubcription();
      window.open(res.data.data.url);
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
          align={aligncenterfont ?"center" :"center"}
        >
          Experience The{" "}
          <span className={classes.paymentheading}>All-Seeing Eye</span> For
          Yourself
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          color="#2B2F42"
          p={1.5}
          align={aligncenterfont ?"center" :"center"}
        >
          Try it free for 24 hours!
        </Typography>
      </Box>

      <Grid
        container
        className={classes.fontSizeCustomize}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          marginRight:11
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
            marginRight: 2,
          }}
        >
          <Stack p={2} pt={4}>
            <Typography className={classes.plansheading} pl={3}
                sx={{marginLeft: { xs: "26px", sm: "16px" },border:"1px solid #EBEBEB",width:"200px",borderRadius:"41px"}}
            >
              {" "}
              Monthly Plan{" "}
            </Typography>
            <Stack p={2}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="h3" gutterBottom component="div"
                sx={{marginLeft:{xs:3,sm:0,lg:0}}}
                >
                  {" "}
                  $49
                </Typography>
                <Typography variant="h6" m={2.7} className={classes.month}>
                  /MONTH
                </Typography>
              </Box>
              <Typography sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}>
                Cancel Anytime, No Commitments
              </Typography>
              <Divider variant="fullWidth" sx={{ marginTop: 1 }} />
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Adlibrary Database With Over 30,000 Active Dropshipping Sites
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Early Access to the Most Powerfull Ecom Spy Tool
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Thousands of New Sites Added Daily
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Customer Support
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={paymentCheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
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
                  fontSize: 22,
                  borderColor: "#EBEBEB",
                  textTransform: "none",
                }}
              >
                {loading ? (
                  <CircularProgress size={25} style={{ color: "#00CBFF" }} />
                ) : (
                  "Choose Plan"
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
              "linear-gradient(321.16deg, #231259 87.91%, #5D88C3 100%)",
            borderRadius: {
              xs: "25px",
              sm: "18px 60px 18px 18px",
              lg: "18px 60px 18px 18px",
            },
            marginTop: { xs: 4, sm: 0, md: 0, lg: 0 },
          }}
        >
          <Stack p={2} pt={4}>
            <Button
              className={classes.annualheadinglabel}
              sx={{
                marginLeft: { xs: "26px", sm: "16px" },
                padding: "0px",
                width: { xs: "203px", sm: "163px", lg: "163px" },
                border: "2px solid  #EBEBEB",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
                color: "#F6F6FB",
                fontWeight: 700,
                fontSize: "19px",
                borderRadius: 15,
                textTransform: "none",
              }}
            >
              Annual Plan
            </Button>
            <Stack p={1.8}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  className={classes.fontcolor}
                  sx={{marginLeft:{xs:3,sm:0,lg:0}}}
                >
                  {" "}
                  $29
                </Typography>
                <Typography variant="h6" m={2.7} className={classes.month}>
                  /MONTH
                </Typography>
              </Box>
              <Typography
                className={classes.fontcolor}
                sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
              >
                Get 5 Months Free By Paying Annually
              </Typography>
              <Divider
                variant="fullWidth"
                className={classes.dividerColor}
                sx={{ marginTop: 1 }}
              />
              <Stack direction={"row"}>
                <img src={annualplancheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                  className={classes.fontcolor}
                >
                  Adlibrary Database With Over 30,000 Active Dropshipping Sites
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={annualplancheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  className={classes.fontcolor}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Early Access to the Most Powerful Ecom Spy Tool
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={annualplancheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  className={classes.fontcolor}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Thousands of New Sites Added Daily
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <img src={annualplancheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  className={classes.fontcolor}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  Customer Support
                </Typography>
              </Stack>

              <Stack direction={"row"}>
                <img src={annualplancheckboxicon} alt="paymentchekbox" />
                <Typography
                  m={2}
                  className={classes.fontcolor}
                  sx={{ fontSize: { xs: "14px", sm: "14px", lg: 16 } }}
                >
                  New Tools and Features Coming Soon
                </Typography>
              </Stack>
            </Stack>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                className={classes.yearplanbutton}
                onClick={buySubscriptionAnnually}
                sx={{ borderRadius: 30, fontSize: 22, textTransform: "none" }}
              >
                {loadingyear ? (
                  <CircularProgress size={25} style={{ color: "#F6F6FB" }} />
                ) : (
                  "Choose Plan"
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
