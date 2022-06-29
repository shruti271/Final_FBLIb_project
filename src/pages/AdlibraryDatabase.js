import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Chip,
  CircularProgress,
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
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { DateRange } from "react-date-range";
import "react-datepicker/dist/react-datepicker.css";
import Arrowdown from "../assets/Arrowdown.svg";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { addDays } from "date-fns";
import ThumbNailBox from "../components/ThumbNailBox";
import {
  AdCountvalueStart,
  applyallfilters,
  clearFilteredDataStart,
  clearSingleFilteredDataStart,
  datevalueStart,
  loadFilteredDataStart,
  MediaTypevalueStart,
  putFilteredDataStart,
  statusValueStart,
} from "../redux/ducks/filtered_Data";

const useStyles = makeStyles((theme) => ({
  title: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  titleHome: {
    // height: "37px !important",
    // width: "41px !important",
    // marginRight: "10px",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "24px",
    color: "#2B2F42",
  },
  subTitleHome: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2B2F42",
    marginTop: "8px",
    marginBottom: "18px",
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

  AdsImageVideo: {
    width: "100%",
    height: "auto",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
  shareicon: {
    marginLeft: theme.spacing(5),
  },
  saveicon: {
    marginLeft: theme.spacing(2),
    cursor: "pointer",
  },
  AdsText: {
    display: "inlineBlock",
    fontWeight: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
  Addheader: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "6px",
    whiteSpace: "nowrap",
  },
  AddFooter: {
    display: "flex",
    flexWrap: "wrap",
    whiteSpace: "nowrap",
  },
  FilterBox: {
    color: "#2B2F42",
    whiteSpace: "nowrap",
    border: "1px solid #EBEBEB",
    borderRadius: "10px",
    marginRight: "14px",
    marginTop: "22px",
  },
}));

const Addlibrarydatabase = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { allMediaAds, loading } = useSelector((state) => state.allMediaAds);
  const { filteredData, appliedFilters } = useSelector(
    (state) => state.filteredData
  );
  const [countMin, setCountMin] = useState([]);
  const [countMax, setCountMax] = useState(1000);
  const { savedIds } = useSelector((state) => state.savedclienads);

  // const [appliedFilters, setAppliedFilters] = useState({
  //   StartRunningDate: { startdate: "", enddate: "", Message: "" },
  //   AdStatus: { status: "", Message: "" },
  //   AdCount: { min: 0, max: 1000, Message: "" },
  //   FacebookLikes: { Message: "" },
  //   InstragramLike: { Message: "" },
  //   MediaType: { selectedData: "Video or Photo", Message: "" },
  // });

  const [sortedDetail, setSortedDetail] = useState({
    order: "startDate",
    type: "Ascending",
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [rangeanchorel, setrangeAnchorEl] = React.useState(null);
  const addcounteropen = Boolean(rangeanchorel);
  const [mediaTypeAnchorel, setMediaTypeAnchorel] = React.useState(null);
  const openMediaTypeAnchorel = Boolean(mediaTypeAnchorel);
  const [adStatusAnchorel, setAdStatusAnchorel] = React.useState(null);
  const openAdStatusAnchorel = Boolean(adStatusAnchorel);
  const [sortByAnchorel, setSortByAnchorel] = React.useState(null);
  const openSortByAnchorel = Boolean(sortByAnchorel);
  useEffect(() => {
    console.log("33333333333333333333333333333333333333333333333333");
    console.log(appliedFilters);
    console.log(filteredData);
    console.log("33333333333333333333333333333333333333333333333333");
  });
  useEffect(() => {
    console.log(filteredData);
    console.log(
      "hhhhhhhhhhhhhhhh:::::::::::::::::::::",
      Object(filteredData).length
    );
    if (Object(filteredData).length) {
      console.log("come here 111111");
      dispatch(loadFilteredDataStart());
    } else {
      console.log("come here 2");
      // setAdsFilteredData(allMediaAds[1]?.all_ads);
      dispatch(putFilteredDataStart(allMediaAds[1]?.all_ads));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMediaAds]);

  // useEffect(() => {
  //   dispatch(loadFilteredDataStart());
  // }, [adsFilteredData, dispatch]);

  const counterIncremten = (event, newValue) => {
    console.log(newValue);
    console.log("............................................................");
    dispatch(
      AdCountvalueStart({
        name: "AdCount",
        min: newValue[0],
        max: newValue[1],
        Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
      })
    );
    dispatch(applyallfilters());

    // setAppliedFilters((pre) => ({
    //   ...pre,
    //   AdCount: {
    // min: newValue[0],
    // max: newValue[1],
    // Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
    //   },
    // }));
  };
  const handlechangeall = (newValue) => {
    dispatch(
      AdCountvalueStart({
        name: "AdCount",
        min: newValue,
        max: 1000,
        Message: `Ad Count: ${newValue[0]}-${appliedFilters?.AdCount?.max}`,
      })
    );
    console.log("------------------" + newValue.currentTarget.textContent);
  };

  const handlechange = (event, newValue) => {
    console.log(newValue);
    console.log("..................................................");
    dispatch(
      MediaTypevalueStart({
        name: "MediaType",
        selectedData: newValue,
        Message: `MediaType : ${newValue}`,
      })
    );
    dispatch(applyallfilters());

    // setAppliedFilters((pre) => ({
    //   ...pre,
    //   MediaType: {
    // selectedData: newValue,
    // Message: `MediaType:${newValue}`,
    //   },
    // }));
  };
  const handleChangeStatus = (event, newValue) => {
    dispatch(
      statusValueStart({
        name: "AdStatus",
        status: newValue,
        Message: `Ad Status:${newValue}`,
      })
    );
    dispatch(applyallfilters());
    // setAppliedFilters((pre) => ({
    //   ...pre,
    //   AdStatus: {
    // status: newValue,
    // Message: `Ad Status:${newValue}`,
    //   },
    // }));
  };

  const handleChangeAceOrDes = (event, newValue) => {
    console.log(newValue);
    setSortedDetail((pre) => ({ ...pre, order: newValue }));
  };

  const handleChangeSortType = (event, newValue) => {
    console.log(newValue);
    setSortedDetail((pre) => ({ ...pre, type: newValue }));
  };

  // useEffect(()=>{
    
  // },[addcounteropen])
  // useEffect(() => {
  //   console.log(sortedDetail?.type);
  //   if (sortedDetail?.order === "Ascending") {
  //     sortedDetail?.type === "startDate"
  //       ? adsFilteredData?.sort(
  //           (firstAd, secondAd) =>
  //             Date.parse(firstAd[sortedDetail?.type]) -
  //             Date.parse(secondAd[sortedDetail?.type])
  //         )
  //       : adsFilteredData?.sort(
  //           (firstAd, secondAd) =>
  //             firstAd[sortedDetail?.type] - secondAd[sortedDetail?.type]
  //         );
  //   } else
  //     sortedDetail?.type === "startDate"
  //       ? adsFilteredData?.sort(
  //           (firstAd, secondAd) =>
  //             Date.parse(secondAd[sortedDetail?.type]) -
  //             Date.parse(firstAd[sortedDetail?.type])
  //         )
  //       : adsFilteredData?.sort(
  //           (firstAd, secondAd) =>
  //             secondAd[sortedDetail?.type] - firstAd[sortedDetail?.type]
  //         );
  // }, [adsFilteredData, sortedDetail?.order, sortedDetail?.type]);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // useEffect(() => {
  //   const abc = document.getElementById("countRange").innerText;
  //   console.log(abc)
  //   console.log("((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))")
  // },[]);
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress
          style={{
            position: "relative",
            top: 50,
            left: 50,
            opacity: 1,
            zIndex: 1,
            visibility: loading ? "visible" : "hidden",
          }}
        />
      </Box>
      <Grid
        container
        sx={{ opacity: loading ? 0.5 : 1, disabled: loading ? true : false }}
      >
        <Grid item xs={12}>
          <Box component="main">
            <Typography className={classes.titleHome}>
              Welcome to the All-Seeing Eye!
            </Typography>
            <Typography className={classes.subTitleHome}>
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
                    className={classes.DropDownArrow}
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
            <Grid item lg={11} md={11}>
              <Button
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
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
                // className={classes.FilterBox}
                endIcon={
                  <img
                    alt="arrowdown"
                    src={Arrowdown}
                    className={classes.DropDownArrow}
                  />
                }
              >
                <Typography noWrap textTransform="capitalize">
                  Started Running Date{" "}
                </Typography>
              </Button>
              <Popover
                anchorEl={anchorEl}
                open={open}
                add={open ? "simple-popover" : undefined}
                onClose={() => {
                  setAnchorEl(null);
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
                <DateRange
                  onClick={(item) => {
                    console.log(item);
                    dispatch(
                      datevalueStart({
                        name: "StartRunningDate",
                        startdate: format(
                          item.selection.startDate,
                          "yyyy-MM-dd"
                        ),
                        enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                        Message: `running date ${format(
                          item.selection.startDate,
                          "yyyy-MM-dd"
                        )}`,
                      })
                    );
                    // setAppliedFilters((pre) => ({
                    //   ...pre,
                    //   StartRunningDate: {
                    //     startdate: format(
                    //       item.selection.startDate,
                    //       "yyyy/MM/dd"
                    //     ),
                    //     enddate: format(item.selection.endDate, "yyyy/MM/dd"),
                    //     Message: `running date ${format(
                    //       item.selection.startDate,
                    //       "yyyy/MM/dd"
                    //     )}`,
                    //   },
                    // }));
                    setRange([item.selection]);
                  }}
                  onChange={(item) => {
                    console.log(item);
                    dispatch(
                      datevalueStart({
                        name: "StartRunningDate",

                        startdate: format(
                          item.selection.startDate,
                          "yyyy-MM-dd"
                        ),
                        enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                        Message: `running date ${format(
                          item.selection.startDate,
                          "yyyy-MM-dd"
                        )} to ${format(item.selection.endDate, "yyyy-MM-dd")}`,
                      })
                    );
                    // setAppliedFilters((pre) => ({
                    //   ...pre,
                    //   StartRunningDate: {
                    //     startdate: format(
                    //       item.selection.startDate,
                    //       "yyyy-MM-dd"
                    //     ),
                    //     enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                    //     Message: `running date ${format(
                    //       item.selection.startDate,
                    //       "yyyy/MM/dd"
                    //     )} to ${format(item.selection.endDate, "yyyy/MM/dd")}`,
                    //   },
                    // }));
                    console.log(appliedFilters);
                    setRange([item.selection]);
                  }}
                  editableDateInputs={false}
                  ranges={range}
                  months={1}
                  direction="horizontal"
                  className="calendarElement"
                />
              </Popover>

              <Button
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
                    className={classes.DropDownArrow}
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
                  // let min = document.getElementById("minRange").innerText;
                  // let max = document.getElementById("maxRange").innerText;
                  // console.log(min);
                  // console.log(max);
                  // dispatch(
                  //   AdCountvalueStart({
                  //     name: "AdCount",
                  //     min: min,
                  //     max: max,
                  //     Message: `Ad Count: ${min}-${max}`,
                  //   })
                  // );
                  // console.log(
                  //   "[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]"
                  // );
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
                    {/* <Box>
                      <TextField sx={{border: 'none',borderColor:"white"}} min={0} max={1000}/>
                    </Box> */}
                    <Box>
                      <Stack direction={"row"} spacing={1}>
                        <Typography>From</Typography>
                        {/* <span
                          contentEditable
                          onInput={(e) => {
                            console.log(
                              "????????????????????",
                              +e.currentTarget.textContent
                            );
                          }}
                        >
                          11111
                        </span> */}

                        <Typography
                          contentEditable
                          id="minRange"
                          // onInput={handlechangeall}
                          // onInput={(newValue) => {
                          //   setCountMin(
                          //     `${newValue.currentTarget.textContent}`
                          //   );
                          // }}
                          onInput={(newValue) => {
                            dispatch(
                              AdCountvalueStart({
                                name: "AdCount",
                                min: Number(newValue.currentTarget.textContent),
                                max: appliedFilters?.AdCount?.max,
                                Message: `Ad Count: ${newValue.currentTarget.textContent}-${appliedFilters?.AdCount?.max}`,
                              })
                            );
                            console.log(
                              "------------------" +
                                newValue.currentTarget.textContent
                            );
                          }}
                        >
                          {appliedFilters?.AdCount?.min}
                        </Typography>
                        <Typography>to</Typography>
                        <Typography
                          contentEditable={true}
                          id="maxRange"
                          onInput={(newValue) => {
                            // setCountMax(
                            //   `${newValue.currentTarget.textContent}`
                            // );
                            dispatch(
                              AdCountvalueStart({
                                name: "AdCount",
                                min: appliedFilters?.AdCount?.min,
                                max: Number(newValue.currentTarget.textContent),
                                Message: `Ad Count: ${appliedFilters?.AdCount?.min}-${newValue.currentTarget.textContent}`,
                              })
                            );
                            console.log(
                              "------------------" +
                                newValue.currentTarget.textContent
                            );
                          }}
                        >
                          {" "}
                          {appliedFilters?.AdCount?.max}
                        </Typography>
                      </Stack>
                    </Box>
                    {/* <Typography contentEditable={true} sx={{ padding: "0px" }}>
                      From {appliedFilters?.AdCount?.min} to{" "}
                      {appliedFilters?.AdCount?.max}+
                    </Typography> */}
                    <Slider
                      size="small"
                      value={[
                        appliedFilters?.AdCount?.min,
                        appliedFilters?.AdCount?.max,
                      ]}
                      min={0}
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
                        dispatch(
                          AdCountvalueStart({
                            name: "AdCount",
                            min: 0,
                            max: 1000,
                            Message: "",
                          })
                        );
                        dispatch(applyallfilters());
                        // setAppliedFilters((pre) => ({
                        //   ...pre,
                        //   AdCount: { min: 0, max: 1000, Message: "" },
                        // }));

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
                onClick={(e) => setAdStatusAnchorel(e.currentTarget)}
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
                }}
                endIcon={
                  <img
                    alt="arrowdown"
                    src={Arrowdown}
                    className={classes.DropDownArrow}
                  />
                }
              >
                <Typography noWrap textTransform="capitalize">
                  {" "}
                  Ad status{" "}
                </Typography>
              </Button>
              <Popover
                anchorEl={adStatusAnchorel}
                add={openAdStatusAnchorel ? "simple-popover" : undefined}
                onClose={() => {
                  setAdStatusAnchorel(null);
                }}
                open={openAdStatusAnchorel}
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
                      value={appliedFilters?.AdStatus?.status || ""}
                      onChange={handleChangeStatus}
                    >
                      <FormControlLabel
                        value="Active"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Active"
                      />
                      <FormControlLabel
                        value="inActive"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="inActive"
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
                        onClick={() => {
                          dispatch(
                            statusValueStart({
                              name: "AdStatus",
                              status: "Active",
                              Message: "",
                            })
                          );
                          dispatch(applyallfilters());
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
                    className={classes.DropDownArrow}
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
                    className={classes.DropDownArrow}
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
                    className={classes.DropDownArrow}
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
                add={openMediaTypeAnchorel ? "simple-popover" : undefined}
                onClose={() => {
                  setMediaTypeAnchorel(null);
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
                      value={appliedFilters?.MediaType?.selectedData || ""}
                      onChange={handlechange}
                    >
                      <FormControlLabel
                        value="Video or Photo"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Video or Photo"
                      />
                      <FormControlLabel
                        value="video"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Video"
                      />
                      <FormControlLabel
                        value="image"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="photo"
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
                        onClick={() => {
                          dispatch(
                            MediaTypevalueStart({
                              name: "MediaType",
                              selectedData: "Video or Photo",
                              Message: "",
                            })
                          );
                          dispatch(applyallfilters());
                          // setAppliedFilters((pre) => ({
                          //   ...pre,
                          //   MediaType: {
                          //     selectedData: "Video or Photo",
                          //     Message: "",
                          //   },
                          // }));

                          setMediaTypeAnchorel(null);
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
                    className={classes.DropDownArrow}
                  />
                }
              >
                <Typography noWrap textTransform="capitalize">
                  {" "}
                  Button{" "}
                </Typography>
              </Button>
            </Grid>
            <Grid item lg={1} md={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  <Grid item sx={{ marginTop: "20px" }}>
                    <Button
                      variant="outlined"
                      style={{
                        // background: "#00CBFF",
                        borderRadius: 30,
                        fontSize: "18px",
                        borderColor: "#00CBFF",
                        textTransform: "none",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        marginBottom: "10px",
                        color: "#00CBFF",
                      }}
                      onClick={() => {
                        const emptyFilter = [];
                        // eslint-disable-next-line array-callback-return
                        Object.keys(appliedFilters).map((filter, index) => {
                          const FilterRemoveDat = [];
                          for (let dum in appliedFilters[filter]) {
                            FilterRemoveDat[dum] =
                              typeof appliedFilters[filter][dum] === "number"
                                ? dum === "min"
                                  ? 0
                                  : 1000
                                : typeof appliedFilters[filter][dum] ===
                                  "string"
                                ? dum === "Mediatype"
                                  ? "Video or Photo"
                                  : dum === "status"
                                  ? ""
                                  : ""
                                : new Date();
                          }
                          dispatch(clearFilteredDataStart(FilterRemoveDat));
                          // setAppliedFilters((pre) => ({
                          //   ...pre,
                          //   [`${filter}`]: FilterRemoveDat,
                          // }));
                          emptyFilter[filter] = FilterRemoveDat;
                          // setAdsFilteredData(() => allMediaAds[1]?.all_ads);
                        });
                        dispatch(clearFilteredDataStart(emptyFilter));
                      }}
                    >
                      clear
                    </Button>
                    <Button
                      style={{
                        background: "#00CBFF",
                        borderRadius: 30,
                        fontSize: "18px",
                        textTransform: "none",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        color: "white",
                      }}
                      onClick={() => {
                        dispatch(applyallfilters());
                        // setAdsFilteredData(
                        //   allMediaAds[1]?.all_ads.filter(
                        //     (ads) =>
                        //       (appliedFilters?.AdCount?.min !== 0 ||
                        //       appliedFilters?.AdCount?.max !== 1000
                        //         ? ads.noOfCopyAds >=
                        //             appliedFilters?.AdCount?.min &&
                        //           ads.noOfCopyAds <=
                        //             appliedFilters?.AdCount?.max
                        //         : true) &&
                        //       (appliedFilters?.MediaType?.selectedData === "" ||
                        //       appliedFilters?.MediaType?.selectedData ===
                        //         "Video or Photo"
                        //         ? true
                        //         : ads.adMediaType ===
                        //           appliedFilters?.MediaType?.selectedData) &&
                        //       (appliedFilters?.AdStatus?.status !== ""
                        //         ? ads?.status ===
                        //           appliedFilters?.AdStatus?.status
                        //         : true) &&
                        //       (appliedFilters?.StartRunningDate?.startdate &&
                        //       appliedFilters?.StartRunningDate?.enddate
                        //         ? appliedFilters?.StartRunningDate?.startdate <=
                        //             ads?.startDate &&
                        //           appliedFilters?.StartRunningDate?.enddate >=
                        //             ads?.startDate
                        //         : true)
                        //   )
                        // );
                      }}
                    >
                      apply
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: 1 }}>
            {Object.keys(appliedFilters).map((filter, index) => {
              return (
                appliedFilters[filter]["Message"] && (
                  <Chip
                    key={index}
                    color="primary"
                    label={appliedFilters[filter]["Message"]}
                    deleteIcon={
                      <CloseIcon
                        style={{ color: "white", backgroundColor: "#00CBFF" }}
                      />
                    }
                    onDelete={() => {
                      const filters = Object(appliedFilters[filter]);
                      const AdsRemovedElement = {
                        MIN: "min",
                        MEDIATYPE: "selectedData",
                        STATUS: "status",
                        SELECTEDDATE: "StartRunningDate",
                      };
                      console.log(filter);

                      console.log(";;;;;;;;;;;;;;;");
                      const FilterRemoveData = [];
                      for (let dum in filters) {
                        console.log("dum" + dum);
                        console.log(dum, filters[dum]);
                        // console.log(typeof appliedFilters[filter][dum]);
                        FilterRemoveData[dum] =
                          typeof appliedFilters[filter][dum] === "number"
                            ? dum === AdsRemovedElement.MIN
                              ? 0
                              : 1000
                            : typeof appliedFilters[filter][dum] === "string"
                            ? dum === AdsRemovedElement.MEDIATYPE
                              ? dum === AdsRemovedElement.STATUS
                                ? "Active"
                                : "Video or Photo"
                              : ""
                            : new Date();
                      }
                      console.table(FilterRemoveData);
                      console.log(FilterRemoveData);
                      dispatch(
                        clearSingleFilteredDataStart({
                          name: filter,
                          data: FilterRemoveData,
                        })
                      );
                      dispatch(applyallfilters());
                      // setAppliedFilters((pre) => ({
                      //   ...pre,
                      //   [`${filter}`]: FilterRemoveData,
                      // }));

                      console.log(filter);
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
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Box>
            <Button
              onClick={(event) => {
                setSortByAnchorel(event.currentTarget);
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
              // className={classes.FilterBox}
              endIcon={
                <img
                  alt="arrowdown"
                  src={Arrowdown}
                  className={classes.DropDownArrow}
                />
              }
            >
              <Typography noWrap textTransform="capitalize">
                {/* {sortedDetail || "sort by"} */}
                Sort by
              </Typography>
            </Button>
            <Popover
              anchorEl={sortByAnchorel}
              open={openSortByAnchorel}
              add={openSortByAnchorel ? "simple-popover" : undefined}
              onClose={() => {
                setSortByAnchorel(null);
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
              <Box>
                <FormControl sx={{ padding: "10px" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={sortedDetail.type}
                    onChange={handleChangeSortType}
                  >
                    <FormControlLabel
                      value="startDate"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Started running date"
                    />
                    <FormControlLabel
                      value="Recently updated"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Recently updated"
                    />
                    <FormControlLabel
                      value="Page likes"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Page likes"
                    />
                    <FormControlLabel
                      value="noOfCopyAds"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Ad count total"
                    />
                    <FormControlLabel
                      value="Ad count increase"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Ad count increase"
                    />
                    <FormControlLabel
                      value="Ad count decrease"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Ad count decrease"
                    />
                  </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl sx={{ padding: "10px" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={sortedDetail?.order}
                    onChange={handleChangeAceOrDes}
                  >
                    <FormControlLabel
                      value="Ascending"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Ascending"
                    />
                    <FormControlLabel
                      value="Descending"
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label="Descending"
                    />
                  </RadioGroup>
                </FormControl>

                {/* <Box
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
                </Box> */}
              </Box>
            </Popover>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "10px",
            }}
          >
            {filteredData?.map((ads, index) => (
              <ThumbNailBox
                adInfo={ads}
                index={index}
                deleteId={savedIds?.includes(ads.adID) ? ads.adID : false}
                key={index}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Addlibrarydatabase;
