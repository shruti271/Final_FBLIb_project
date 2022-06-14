import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Arrowdown from "../assets/Arrowdown.svg";
import Firstcard from "../assets/Firstcard.svg";
import Firstcardimg from "../assets/FirstCardImg.svg";
import Shareicon from "../assets/Shareicon.svg";
import Saveicon from "../assets/Saveicon.svg";
import Addgraph from "../assets/Addgraph.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
// import { loadMediaStart } from "../redux/ducks/mediaAds";
const useStyles = makeStyles((theme) => ({
  title: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    // margin:
  },
  titleimage: {
    height: "37px !important",
    width: "41px !important",
    marginRight: "10px",
  },
  addTextfilter: {
    padding: theme.spacing(1, 3),
    border: "1px solid #EBEBEB",
    borderRadius: "15px",
    marginTop: "10px",
  },
  addtextfilterButton: {
    padding: "4px 4px",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid #EBEBEB",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  calenderfilter: {
    color: "#2B2F42",
    whiteSpace: "nowrap",
    border: "1px solid #EBEBEB",
    borderRadius: 3,
  },
  staricon: {
    marginLeft: "20px",
  },
  libraryimg: {
    marginLeft: "20px",
  },
  img: {
    // maxWidth: "100%",
    width: "100%",
    height: "auto",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  Arrow: {
    marginLeft: theme.spacing(1),
  },
  shareicon: {
    marginLeft: theme.spacing(5),
  },
  saveicon: {
    marginLeft: theme.spacing(2),
  },
  addinfo: {
    display: "inlineBlock",
    fontWeight: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
  sedetails: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    float: "right",
  },
}));

const Addheader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  padding: "6px",
  whiteSpace: "nowrap",
}));

const AddFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  //   padding: "2px",
  // marginLeft: "30px",
  whiteSpace: "nowrap",
}));

const Addlibrarydatabase = ({ open }) => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  // const [openDatepicker, setopenDatepicker] = useState(false)
  const [opens, setOpen] = React.useState(false);
  // const dispatch = useDispatch();

  const { allMediaAds } = useSelector((state) => state.media);
  // const adsList = [1, 2, 3, 4, 5, 6, 7];

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log("11111111111111111111");
    // console.log(allMediaAds[0].adID);
    
  });
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box component="main">
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "24px",
                color: "#2B2F42",
              }}
            >
              Welcome to the All-Seeing Eye!
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#2B2F42",
                marginTop: "8px",
                marginBottom: "18px",
              }}
            >
              Spy on 100% of the ads ran by over 30,000 active dropshippingn
              stores
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            border: "1px solid #EBEBEB",
            borderRadius: "15px",
            padding: "16px 36px",
          }}
        >
          <Grid
            container
            sx={{ border: "2px solid #EBEBEB", borderRadius: "10px" }}
          >
            <Grid item xs={2} sx={{ display: "flex" }}>
              <Box sx={{ width: "100%", marginRight: "21px" }}>
                <Stack
                  direction={"row"}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Button label="Outlined" sx={{ color: "#2B2F42" }}>
                    <Typography noWrap textTransform="capitalize">
                      Add Text
                    </Typography>
                  </Button>
                  <img
                    alt="arrowdown"
                    src={Arrowdown}
                    className={classes.Arrow}
                  />
                </Stack>
              </Box>
              <Divider orientation="vertical" sx={{ marginLeft: "auto" }} />
            </Grid>
            <Grid item xs={10}>
              <Box sx={{ marginLeft: "21px" }}>
                <InputBase margin="dense" size="large" placeholder="Search" />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <ClickAwayListener onClickAway={handleClickAway}>
              <Button
                size="large"
                variant="outlined"
                disableElevation
                disableRipple
                sx={{
                  color: "#2B2F42",
                  whiteSpace: "nowrap",
                  border: "1px solid #EBEBEB",
                  borderRadius: "10px",
                  marginRight: "14px",
                  marginTop: "22px",
                }}
                endIcon={
                  <img
                    alt="arrowdown"
                    src={Arrowdown}
                    className={classes.Arrow}
                  />
                }
              >
                <Typography
                  noWrap
                  textTransform="capitalize"
                  onClick={handleClick}
                >
                  {" "}
                  Started Running Date{" "}
                </Typography>
                {opens ? (
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                ) : null}
              </Button>
            </ClickAwayListener>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
              }}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.Arrow}
                />
              }
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Ad count{" "}
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
              }}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.Arrow}
                />
              }
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Ad status{" "}
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
              }}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.Arrow}
                />
              }
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Facebook Page Likes
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
              }}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.Arrow}
                />
              }
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Instagram Page Like{" "}
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
              }}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.Arrow}
                />
              }
              size="large"
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Media Type{" "}
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
              }}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.Arrow}
                />
              }
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Button{" "}
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            {allMediaAds.map((media, index) => (
              <Grid item xs={3}>
                <Stack
                  sx={{
                    border: "2px solid #F6F6FB",
                    padding: "10px",
                  }}
                >
                  <Addheader>
                    <Box sx={{ marginRight: "12px" }}>
                      <img src={Firstcard} aria-label="Add" />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#2B2F42",
                      }}
                    >
                      {/* Best Sollar Lighting{" "} */}
                      {media.headline}
                    </Typography>
                    <Typography
                      noWrap
                      sx={{
                        fontWeight: 500,
                        fontSize: "15px",
                        lineHeight: "24px",
                        color: "#2B2F42",
                        opacity: 0.6,
                      }}
                    >
                      (21,604 likes)
                    </Typography>
                  </Addheader>
                  <Box>
                    <img
                      src={Firstcardimg}
                      alt="img1"
                      className={classes.img}
                      onClick={()=>navigate(`/adDeatails/${media.adID}`)}
                    />
                  </Box>

                  <Grid container sx={{ padding: "4px" }}>
                    <Grid item sm={9}>
                      <AddFooter>
                        <Typography>{media.status}</Typography>
                        <img
                          src={Shareicon}
                          alt="img2"
                          className={classes.shareicon}
                        />
                        <img
                          src={Saveicon}
                          alt="img2"
                          className={classes.saveicon}
                        />
                        <Typography color="#c0c0c0" className={classes.addinfo}>
                          Started Running : {media.startDate}
                        </Typography>
                        <Typography color="#2B2F42" className={classes.addinfo}>
                          Sollar Powered Butterfly Lights
                        </Typography>
                      </AddFooter>
                    </Grid>
                    <Grid
                      item
                      sm={3}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "55px",
                          height: "55px",
                          background: "#00CBFF",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Stack
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="div"
                            sx={{
                              fontWeight: 600,
                              fontSize: "30px",
                              lineHeight: "24px",
                              color: "#F6F6FB",
                            }}
                          >
                            {media.noOfCopyAds}
                          </Typography>
                          <Typography
                            variant="div"
                            sx={{
                              fontWeight: 600,
                              fontSize: "10px",
                              lineHeight: "24px",
                              color: "#F6F6FB",
                            }}
                          >
                            Ads
                          </Typography>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                    <img
                      src={Addgraph}
                      alt="addgraph"
                      className={classes.img}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ borderRadius: "17px" }}
                    className={classes.sedetails}
                    onClick={() => {
                      navigate("adDeatails");
                    }}
                  >
                    see Details
                  </Button>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Addlibrarydatabase;
