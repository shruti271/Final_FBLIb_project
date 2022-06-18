import React, { useEffect, useState } from "react";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputBase,
  Popover,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Arrowdown from "../assets/Arrowdown.svg";
import Firstcard from "../assets/Firstcard.svg";
import Firstcardimg from "../assets/FirstCardImg.svg";
import Shareicon from "../assets/Shareicon.svg";
import Saveicon from "../assets/Saveicon.svg";
import Addgraph from "../assets/Addgraph.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
// import {MdOutlineClose} from  "react-icons/md"
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
  btntry: {
    border: 3,
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

// const Addlibrarydatabase = ({ open }) => {
const Addlibrarydatabase = () => {
  const { allMediaAds } = useSelector((state) => state.allMediaAds);
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());

  // const [opens, setOpen] = React.useState(false);

  // const [addcounter, setAddcounter] = useState(false);
  const [min, setMin] = React.useState(1);
  const [max, setMax] = React.useState(1000);

  // const [addmediaselect, setaddmediaselect] = useState(false);
  const [adsFilteredData, setAdsFilteredData] = useState([...allMediaAds]);
  const [appliedFilters, setAppliedFilters] = useState({
    StartRunningDate: "",
    AdCount: "",
    FacebookLikes: "",
    InstragramLike: "",
    MediaType: "",
  });
  const [selectedMediaTypeValue, setSelectedMediaTypeValue] = useState("");

  const [rangeanchorel, setrangeAnchorEl] = React.useState(null);
  const addcounteropen = Boolean(rangeanchorel);
  const [mediaTypeAnchorel, setMediaTypeAnchorel] = React.useState(null);
  const openMediaTypeAnchorel = Boolean(mediaTypeAnchorel);

  const openAddcounter = (e) => {
    setrangeAnchorEl(e.currentTarget);
  };

  const counterIncremten = (event, newValue) => {
    console.log("handleChange2 newValue", newValue);

    setMin(newValue[0]);
    setMax(newValue[1]);
    setAppliedFilters((pre) => ({
      ...pre,
      AdCount: `Ad Count: ${min}-${max}`,
    }));
  };

  // const openAddmedia = () => {
  //   if (addmediaselect === false) {
  //     setaddmediaselect(true);
  //   } else {
  //     setaddmediaselect(false);
  //   }
  // };
  const handlechange = (event) => {
    setSelectedMediaTypeValue(event.currentTarget.value);
    console.log(
      ".................----------------------",
      event.currentTarget.value
    );
  };
  console.log("..//", selectedMediaTypeValue);

  useEffect(() => {
    // console.log("11111111111111111111");
    console.log(allMediaAds);
    // setAdsFilteredData(allMediaAds);
  });

  useEffect(() => {
    // setAdsFilteredData(
    //   allMediaAds.filter(
    //     (ads) => ads.noOfCopyAds >= min && ads.noOfCopyAds <= max
    //   )
    // );
  }, [allMediaAds, max, min]);
  return (
    <>
      {/* <Button variant="outlined" sx={{borderRadius: 50 , fontWeight: 600 ,borderColor:"#00CBFF",color:"#00CBFF", borderWidth:3}}>hello</Button> */}
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
            <Button
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                console.log(event.currentTarget);
              }}
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
                //   onClick={handleClick}
              >
                {" "}
                Started Running Date{" "}
              </Typography>
            </Button>
            <Popover
              anchorEl={anchorEl}
              open={open}
              add={open ? "simple-popover" : undefined}
              onClose={() => {
                setAnchorEl(null);
                console.log(setAnchorEl, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
              }}
              transformOrigin={{
                horizontal: "left",
                vertical: "top",
              }}
              anchorOrigin={{
                horizontal: "left",
                vertical: "bottom",
              }}
            >
              {/* {console.log(selectedDate + "comming in render")} */}

              <DatePicker
                inline
                selectsRange
                // startDate={startDate}
                // value={selectedDate}
                // selectedDate={selectedDate}
                // openToDate={selectedDate}
                // selected={selectedDate}
                // endDate={selectedEndDate}
                // selectsStarts
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={(newValue) => {
                  console.log(
                    ".............................",
                    newValue[0] + "/////////////" + newValue[1]
                  );
                  console.log("............" + startDate);
                  console.log("............" + selectedEndDate);
                  // console.log("newvalue--------------------" + newValue);
                  // console.log(
                  //   "selectedvalue--------------------" + selectedDate
                  // );

                  // setSelectedDate(newValue);
                  // console.log(
                  //   "selectedvalue--------------------" + selectedDate
                  // );

                  // console.log(
                  //   ";selected date--------------------;" + selectedDate
                  // );
                  // setAppliedFilters((pre) => ({
                  //   ...pre,
                  //   StartRunningDate: `Started Running Between ${newValue?.getDate()} to ${newValue?.getDate()}`,
                  // }));
                  // setAnchorEl(null);
                }}
                // onSelect={(newValue) => {
                //   console.log("newvalue--------------------"+newValue)
                //   setSelectedDate(newValue);
                //   console.log("selected date--------------------;"+selectedDate.getDate())
                //   setAppliedFilters((pre) => ({
                //     ...pre,
                //     StartRunningDate: `Started Running Between ${selectedDate?.getDate()} to ${selectedDate?.getDate()}`,
                //   }));
                //   setAnchorEl(null);
                // }}
              />
            </Popover>

            <Button
              // onClick={openAddcounter}
              onClick={(e) => setrangeAnchorEl(e.currentTarget)}
              variant="outlined"
              size="large"
              disableElevation
              disableRipple
              sx={{
                color: "#2B2F42",
                whiteSpace: "nowrap",
                border: "1px solid #EBEBEB",
                borderRadius: "10px",
                marginRight: "14px",
                marginTop: "22px",
                cursor: "pointer",
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
            <Popover
              open={addcounteropen}
              anchorEl={rangeanchorel}
              onClose={() => {
                setrangeAnchorEl(null);
                // console.log(rangeanchorel, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
              }}
              add={open ? "simple-popover" : undefined}
              transformOrigin={{
                horizontal: "left",
                vertical: "top",
              }}
              anchorOrigin={{
                horizontal: "left",
                vertical: "bottom",
              }}
            >
              <Box
                sx={{
                  margin: 2,
                  width: "187px",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Stack
                  direction={"column"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ padding: "0px" }}>
                    From {min} to {max}+
                  </Typography>
                  <Slider
                    size="small"
                    value={[min, max]}
                    min={1}
                    max={1000}
                    sx={{ color: "#00CBFF" }}
                    onChange={counterIncremten}
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      borderWidth: 2,
                    }}
                    onClick={() => {
                      setMax(1000);
                      setMin(1);
                      // console.log("ad count99999999999999999999");
                      setAppliedFilters((pre) => ({
                        ...pre,
                        AdCount: "",
                      }));
                      // console.log("ad count99999999999999999999");

                      setrangeAnchorEl(null);
                    }}
                  >
                    Reset
                  </Button>
                </Stack>
              </Box>
            </Popover>

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
              onClick={(e) => setMediaTypeAnchorel(e.currentTarget)}
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
              size="large"
            >
              <Typography noWrap textTransform="capitalize">
                {" "}
                Media Type{" "}
              </Typography>
            </Button>
            <Popover
              anchorEl={mediaTypeAnchorel}
              //  open={open}
              add={openMediaTypeAnchorel ? "simple-popover" : undefined}
              onClose={() => {
                setMediaTypeAnchorel(null);
                console.log(
                  setMediaTypeAnchorel,
                  "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
                );
              }}
              open={openMediaTypeAnchorel}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box sx={{ width: "190px" }}>
                <FormControl sx={{ padding: "10px" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={selectedMediaTypeValue}
                    onChange={handlechange}
                    // background="#00CBFF"
                  >
                    <FormControlLabel
                      value="Video-Photo"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Video or Photo"
                    />
                    <FormControlLabel
                      value="video"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Video"
                    />
                    <FormControlLabel
                      value="photo"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Photo"
                    />
                  </RadioGroup>
                  <Box
                    display={"flex"}
                    alignContent={"center"}
                    justifyContent={"center"}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: 50,
                        fontWeight: 600,
                        borderColor: "#00CBFF",
                        color: "#00CBFF",
                        height: "35px",
                        width: "80px",
                        borderWidth: 2,
                      }}
                    >
                      Reset
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Popover>
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
            <Button
              onClick={() => {
                setAdsFilteredData(
                  allMediaAds.filter(
                    (ads) => ads.noOfCopyAds >= min && ads.noOfCopyAds <= max
                  )
                );
              }}
            >
              apply
            </Button>
          </Grid>
          <Grid container sx={{ marginTop: 1 }}>
            {Object.keys(appliedFilters).map((filter, index) => {
              return (
                appliedFilters[filter] && (
                  <Chip
                    color="primary"
                    label={appliedFilters[filter]}
                    // deleteIcon={<img src={CancleButton} />}
                    deleteIcon={
                      <CloseIcon
                        style={{ color: "white", backgroundColor: "#00CBFF" }}
                      />
                    }
                    onDelete={() => {
                      console.log("clicked delete button" + appliedFilters);
                      setAppliedFilters((pre) => ({
                        ...pre,
                        [`${filter}`]: "",
                      }));
                    }}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#00CBFF",
                      marginLeft: 1,
                    }}
                  />
                )
              );
            })}
            {/* <Chip
              color="primary"
              label="starting date of jan is "
              // deleteIcon={<img src={CancleButton} />}
              deleteIcon={<CloseIcon color="#00CBFF" />}
              onDelete={() => console.log("first")}
              sx={{ borderRadius: 2, backgroundColor: "#00CBFF" }}
            /> */}

            {/* <Chip
              color="info"
              deleteIcon={<CancleButton />}
              onDelete={() => console.log("first")}
            /> */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            {adsFilteredData.map((ads, index) => (
              <Grid item xs={3} key={index}>
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
                      {ads?.pageInfo?.name}
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
                    {ads.adMediaType === "video" ? (
                      <video
                        src={ads.bucketMediaURL}
                        autoPlay={false}
                        // muted
                        className={classes.img}
                        controls
                        // onClick={() => navigate(`/adDeatails/${media.adID}`)}
                      />
                    ) : ads?.adMediaType === "image" ? (
                      <img
                        src={ads?.bucketMediaURL}
                        alt="img1"
                        className={classes.img}
                        // onClick={() => navigate(`/adDeatails/${media.adID}`)}
                      />
                    ) : (
                      <img
                        src={Firstcardimg}
                        alt="img1"
                        className={classes.img}
                      />
                    )}
                  </Box>

                  <Grid container sx={{ padding: "4px" }}>
                    <Grid item sm={9}>
                      <AddFooter>
                        <Typography>{ads.status}</Typography>
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
                          Started Running : {ads.startDate}
                        </Typography>
                        <Typography color="#2B2F42" className={classes.addinfo}>
                          {/* Sollar Powered Butterfly Lights */}
                          {ads.headline}
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
                            {ads.noOfCopyAds}
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
                      // navigate("adDeatails");
                      navigate(`/adDeatails/${ads.adID}`);
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