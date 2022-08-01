import { makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import Arrowdown from "../assets/Arrowdown.svg";
import { useDispatch, useSelector } from "react-redux";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { addDays } from "date-fns";
import { EditText } from "react-edit-text";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import * as savedAdsPeramsDuck from "../redux/ducks/savedAdsPerams";
import { PageNameEnum } from "../utils/enums";
import { useLocation } from "react-router-dom";
import { loadFilteredAdsStart } from "../redux/ducks/filteredAds";
import { useSkipInitialEffect, useInitialOnlyEffect } from "../utils/customHooks";

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
    // fontWeight: 500,
    // fontSize: "18px",
    // lineHeight: "24px",
    // color: "#2B2F42",
    // marginTop: "8px",
    // marginBottom: "18px",
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
  DropDownArrow2: {
    marginLeft: theme.spacing(8),
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

function AllFilters() {
  const [pageName, setPageName] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageName(PageNameEnum.AdlibraryDatabase);
        break;
      case "/savedAds":
        setPageName(PageNameEnum.SavedAds);
        break;
      default:
        setPageName("");
    }
  }, [location.pathname]);

  const { buttonTypes } = useSelector((state) => state.buttonTypes);

  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [rangeanchorel, setrangeAnchorEl] = React.useState(null);
  const addcounteropen = Boolean(rangeanchorel);
  const [mediaTypeAnchorel, setMediaTypeAnchorel] = React.useState(null);
  const openMediaTypeAnchorel = Boolean(mediaTypeAnchorel);
  const [adStatusAnchorel, setAdStatusAnchorel] = React.useState(null);
  const openAdStatusAnchorel = Boolean(adStatusAnchorel);
  const [facebookLikeanchorel, setFacebookLikeAnchorEl] = React.useState(null);
  const openFaceboolLike = Boolean(facebookLikeanchorel);
  const [instragramFolloweranchorel, setInstragramFollowerAnchorEl] =
    React.useState(null);
  const openInstragramFollower = Boolean(instragramFolloweranchorel);
  const [ButtonTypeanchorel, setButtonTypeAnchorEl] = React.useState(null);
  const openButtonType = Boolean(ButtonTypeanchorel);
  const [seachTypeanchorel, setSeachTypeAnchorEl] = React.useState(null);
  const openSearchType = Boolean(seachTypeanchorel);

  useEffect(() => {
    console.log("allAdsPerams :", allAdsPerams);
  }, [allAdsPerams]);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleAdsCountChange = (newValue, isReset) => {
    console.log("newValue :::", newValue);
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "AdCount",
            value: {
              // componentName: pageName,
              min: newValue[0],
              max: newValue[1],
              chipText: `Adcount : ${newValue[0]}-${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "AdCount",
            value: {
              // componentName: pageName,
              min: newValue[0],
              max: newValue[1],
              chipText: `Adcount : ${newValue[0]}-${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleChangeStatus = (newValue, isReset) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "AdStatus",
            value: {              
              selectedValue: newValue,
              chipText: `Adstatus : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "AdStatus",
            value: {
              // componentName: pageName,
              selectedValue: newValue,
              chipText: `Adstatus : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleFacebookLikesChange = (newValue, isReset) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "FacebookLikes",
            value: {
              // componentName: pageName,
              min: newValue[0],
              max: newValue[1],
              chipText: `FacebookLikes : ${newValue[0]}-${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "FacebookLikes",
            value: {
              // componentName: pageName,
              min: newValue[0],
              max: newValue[1],
              chipText: `FacebookLikes : ${newValue[0]}-${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleInstagramFollowersChange = (newValue, isReset) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "InstagramFollowers",
            value: {
              // componentName: pageName,
              min: newValue[0],
              max: newValue[1],
              chipText: `InstagramFollowers : ${newValue[0]}-${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "InstagramFollowers",
            value: {
              // componentName: pageName,
              min: newValue[0],
              max: newValue[1],
              chipText: `InstagramFollowers : ${newValue[0]}-${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleMediaTypechange = (newValue, isReset) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "MediaType",
            value: {
              selectedValue: newValue,
              chipText: `MediaType : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "MediaType",
            value: {
              selectedValue: newValue,
              chipText: `MediaType : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleButtonType = (newValue, isReset) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "ButtonStatus",
            value: {
              selectedValue: newValue,
              chipText: `ButtonText : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "ButtonStatus",
            value: {
              selectedValue: newValue,
              chipText: `ButtonText : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleChangeSearchType = (newValue) => {
    console.log("handleChangeSearchType :", newValue);
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeSearchType({
            key: "searchType",
            value: newValue,
          })
        : savedAdsPeramsDuck.changeSavedSearchType({
            key: "searchType",
            value: newValue,
          })
    );
  };

  const handleChangeSearchBar = (newValue) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeSearchBarData({
            key: "searchBarData",
            value: newValue,
          })
        : savedAdsPeramsDuck.changeSavedSearchBarData({
            key: "searchBarData",
            value: newValue,
          })
    );
  };

  const handleStartDateChange = (newValue) => {
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "StartRunningDate",
            value: {
              startdate: format(newValue.selection.startDate, "yyyy-MM-dd"),
              enddate: format(newValue.selection.endDate, "yyyy-MM-dd"),
              chipText: `running date ${format(
                newValue.selection.startDate,
                "yyyy-MM-dd"
              )} to ${format(newValue.selection.endDate, "yyyy-MM-dd")}`,
              isApplied: true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "StartRunningDate",
            value: {
              startdate: format(newValue.selection.startDate, "yyyy-MM-dd"),
              enddate: format(newValue.selection.endDate, "yyyy-MM-dd"),
              chipText: `running date ${format(
                newValue.selection.startDate,
                "yyyy-MM-dd"
              )} to ${format(newValue.selection.endDate, "yyyy-MM-dd")}`,
              isApplied: true,
            },
          })
    );
  };

  return (
    <>
      {pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPerams?.searchBarData
        : savedAdsPerams?.searchBarData}
      <Grid
        container
        sx={{ border: "2px solid #EBEBEB", borderRadius: "10px" }}
      >
        <Grid item sx={{ display: "flex" }}>
          {/* Select Search Type Start  */}
          <Button
            onClick={(event) => {
              setSeachTypeAnchorEl(event.currentTarget);
            }}
            size="large"
            variant="outlined"
            disableElevation
            disableRipple
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
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
              {pageName === PageNameEnum.AdlibraryDatabase
                ? allAdsPerams?.searchType
                : savedAdsPerams?.searchType}
            </Typography>
          </Button>
          <Popover
            anchorEl={seachTypeanchorel}
            add={openSearchType ? "simple-popover" : undefined}
            onClose={() => {
              setSeachTypeAnchorEl(null);
            }}
            open={openSearchType}
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
                  name="radio-buttons-group"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.searchType
                      : savedAdsPerams?.searchType
                  }
                  onChange={(e) => {
                    handleChangeSearchType(e.target.value);
                    setSeachTypeAnchorEl(null);
                  }}
                >
                  <FormControlLabel
                    value="All these words"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="All these words"
                  />
                  <FormControlLabel
                    value="Exact Phrase"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Exact Phrase"
                  />
                </RadioGroup>
                <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    // disabled={props.loading}
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      textTransform: "none",
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    onClick={(e) => {
                      handleChangeSearchType("All these words");
                      setSeachTypeAnchorEl(null);
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Popover>
          {/* Select Search Type End  */}

          <Divider orientation="vertical" sx={{ marginLeft: "auto" }} />
        </Grid>

        <Grid item>
          {/* Searchbar Start  */}
          <Box sx={{ marginLeft: "21px" }}>
            <InputBase
              defaultValue={
                pageName === PageNameEnum.AdlibraryDatabase
                  ? allAdsPerams?.searchBarData
                  : savedAdsPerams?.searchBarData
              }
              fullWidth
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleChangeSearchBar(e.currentTarget.value);
                }
                if (e.target.value.length === 0) {
                  handleChangeSearchBar("");
                }
              }}
              margin="dense"
              size="large"
            />
          </Box>
          {/* Searchbar End  */}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={11} md={11}>
          {/* Date Filter Start */}
          <Button
            // disabled={props.loading}
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
              // callFilters();
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
              id="datepicker"
              onChange={(item) => {
                console.log("StartDate Change:", item);
                handleStartDateChange(item);
                setRange([item.selection]);
              }}
              editableDateInputs={false}
              ranges={range}
              months={1}
              direction="horizontal"
              className="calendarElement"
            />
          </Popover>
          {/* Date Filter End */}

          {/* Ad Count Filter Start */}
          <Button
            // disabled={props.loading}
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
              // callFilters();
              setrangeAnchorEl(null);
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
                width: "210px",
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
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? allAdsPerams?.appliedFilters?.AdCount?.min.toString()
                          : savedAdsPerams?.appliedFilters?.AdCount?.min.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          console.log("222",e.value)
                          handleAdsCountChange([
                            Number(e.value),
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.AdCount?.max
                              : savedAdsPerams?.appliedFilters?.AdCount?.max,
                          ]);
                        }
                      }}
                    />

                    <Typography>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? allAdsPerams?.appliedFilters?.AdCount?.max.toString()
                          : savedAdsPerams?.appliedFilters?.AdCount?.max.toString()
                      }
                      onSave={(e) => {
                        console.log("222 prv data ",e.previousValue)
                        if (Number(e.value) !== e.previousValue) {
                          console.log("222",e.value)
                          if (
                            Number(e.value) >
                            (pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.maxRanger?.AdCount?.max
                              : savedAdsPerams?.maxRanger?.AdCount?.max)
                          ) {
                            dispatch(
                              pageName === PageNameEnum.AdlibraryDatabase
                                ? allAdsPeramsDuck.refixMinMaxRange({
                                    key: "AdCount",
                                    value: {
                                      max: Number(e.value),
                                    },
                                  })
                                : savedAdsPeramsDuck.refixSavedMinMaxRange({
                                    key: "AdCount",
                                    value: {
                                      max: Number(e.value),
                                    },
                                  })
                            );
                          }
                          handleAdsCountChange([
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.AdCount?.min
                              : savedAdsPerams?.appliedFilters?.AdCount?.min,
                            Number(e.value),
                          ]);
                        }
                      }}
                    />
                  </Stack>
                </Box>

                <Slider
                  id="adcount"
                  size="small"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? [
                          allAdsPerams?.appliedFilters?.AdCount?.min,
                          allAdsPerams?.appliedFilters?.AdCount?.max,
                        ]
                      : [
                          savedAdsPerams?.appliedFilters?.AdCount?.min,
                          savedAdsPerams?.appliedFilters?.AdCount?.max,
                        ]
                  }
                  min={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.maxRanger?.AdCount?.min
                      : savedAdsPerams?.maxRanger?.AdCount?.min
                  }
                  max={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.maxRanger?.AdCount?.max
                      : savedAdsPerams?.maxRanger?.AdCount?.max
                  }
                  sx={{ color: "#00CBFF" }}
                  // onChangeCommitted={console.log("55 data")}    
                  // onkeyPress={()=>console.log("ccccccc")}              
                  onChange={(e) => handleAdsCountChange(e.target.value)}
                />
                <Button
                  // disabled={props.loading}
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    textTransform: "none",
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    handleAdsCountChange([1, 1000], true);
                    setrangeAnchorEl(null);
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Popover>
          {/* Ad Count Filter End */}

          {/* Ad Status Filter Start */}
          <Button
            // disabled={props.loading}
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
              // callFilters();
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
                  name="radio-buttons-group"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.appliedFilters?.AdStatus?.selectedValue
                      : savedAdsPerams?.appliedFilters?.AdStatus?.selectedValue
                  }
                  onChange={(e) => {
                    handleChangeStatus(e.target.value);
                    setAdStatusAnchorel(null);
                  }}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Inactive"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Inactive"
                  />
                </RadioGroup>
                <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    // disabled={props.loading}
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      textTransform: "none",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    onClick={(e) => {
                      handleChangeStatus("", true);
                      setAdStatusAnchorel(null);
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Popover>
          {/* Ad Status Filter End */}

          {/* Facebook Likes Filter Start */}
          <Button
            // disabled={props.loading}
            variant="outlined"
            onClick={(e) => setFacebookLikeAnchorEl(e.currentTarget)}
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
          <Popover
            open={openFaceboolLike}
            anchorEl={facebookLikeanchorel}
            add={openFaceboolLike ? "simple-popover" : undefined}
            onClose={() => {
              // callFilters();
              setFacebookLikeAnchorEl(null);
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
            <Box
              sx={{
                margin: 2,
                width: "210px",
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
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? allAdsPerams?.appliedFilters?.FacebookLikes?.min.toString()
                          : savedAdsPerams?.appliedFilters?.FacebookLikes?.min.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          handleFacebookLikesChange([
                            Number(e.value),
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.FacebookLikes?.max
                              : savedAdsPerams?.appliedFilters?.FacebookLikes
                                  ?.max,
                          ]);
                        }
                      }}
                    />

                    <Typography>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? allAdsPerams?.appliedFilters?.FacebookLikes?.max.toString()
                          : savedAdsPerams?.appliedFilters?.FacebookLikes?.max.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (
                            Number(e.value) >
                            (pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.FacebookLikes?.max
                              : savedAdsPerams?.appliedFilters?.FacebookLikes
                                  ?.max)
                          ) {
                            dispatch(
                              pageName === PageNameEnum.AdlibraryDatabase
                                ? allAdsPeramsDuck.refixMinMaxRange({
                                    key: "FacebookLikes",
                                    value: {
                                      max: Number(e.value),
                                    },
                                  })
                                : savedAdsPeramsDuck.refixSavedMinMaxRange({
                                    key: "FacebookLikes",
                                    value: {
                                      max: Number(e.value),
                                    },
                                  })
                            );
                          }
                          handleFacebookLikesChange([
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.FacebookLikes?.min
                              : savedAdsPerams?.appliedFilters?.FacebookLikes
                                  ?.min,
                            Number(e.value),
                          ]);
                        }
                      }}
                    />
                  </Stack>
                </Box>

                <Slider
                  id="facebook"
                  size="small"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? [
                          allAdsPerams?.appliedFilters?.FacebookLikes?.min,
                          allAdsPerams?.appliedFilters?.FacebookLikes?.max,
                        ]
                      : [
                          savedAdsPerams?.appliedFilters?.FacebookLikes?.min,
                          savedAdsPerams?.appliedFilters?.FacebookLikes?.max,
                        ]
                  }
                  min={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.maxRanger?.FacebookLikes?.min
                      : savedAdsPerams?.maxRanger?.FacebookLikes?.min
                  }
                  max={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.maxRanger?.FacebookLikes?.max
                      : savedAdsPerams?.maxRanger?.FacebookLikes?.max
                  }
                  sx={{ color: "#00CBFF" }}
                  onChange={(e) => handleFacebookLikesChange(e.target.value)}
                />
                <Button
                  // disabled={props.loading}
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    fontWeight: 600,
                    textTransform: "none",
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    handleFacebookLikesChange([1, 100000], true);
                    setFacebookLikeAnchorEl(null);
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Popover>
          {/* Facebook Likes Filter End */}

          {/* Instagram Likes Filter Start */}
          <Button
            // disabled={props.loading}
            variant="outlined"
            onClick={(e) => setInstragramFollowerAnchorEl(e.currentTarget)}
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
              Instagram Page Followers{" "}
            </Typography>
          </Button>
          <Popover
            open={openInstragramFollower}
            anchorEl={instragramFolloweranchorel}
            add={openInstragramFollower ? "simple-popover" : undefined}
            onClose={() => {
              // callFilters();
              setInstragramFollowerAnchorEl(null);
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
            <Box
              sx={{
                margin: 2,
                width: "210px",
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
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? allAdsPerams?.appliedFilters?.InstagramFollowers?.min.toString()
                          : savedAdsPerams?.appliedFilters?.InstagramFollowers?.min.toString()
                      }
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          handleInstagramFollowersChange([
                            Number(e.value),
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.InstagramFollowers
                                  ?.max
                              : savedAdsPerams?.appliedFilters
                                  ?.InstagramFollowers?.max,
                          ]);
                        }
                      }}
                    />

                    <Typography>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? allAdsPerams?.appliedFilters?.InstagramFollowers?.max.toString()
                          : savedAdsPerams?.appliedFilters?.InstagramFollowers?.max.toString()
                      }
                      onSave={(e) => {
                        console.log(e);
                      
                        if (Number(e.value) !== e.previousValue) {
                          if (
                            Number(e.value) >
                            (pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.maxRanger?.InstagramFollowers
                                  ?.max
                              : savedAdsPerams?.maxRanger
                                  ?.InstagramFollowers?.max)
                          ) {  console.log("444", PageNameEnum.AdlibraryDatabase);
                            dispatch(
                              pageName === PageNameEnum.AdlibraryDatabase
                                ? allAdsPeramsDuck.refixMinMaxRange({
                                    key: "InstagramFollowers",
                                    value: {
                                      max: Number(e.value),
                                    },
                                  })
                                : savedAdsPeramsDuck.refixSavedMinMaxRange({
                                    key: "InstagramFollowers",
                                    value: {
                                      max: Number(e.value),
                                    },
                                  })
                            );
                          } console.log("4445", PageNameEnum.AdlibraryDatabase);
                          handleInstagramFollowersChange([
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.InstagramFollowers
                                  ?.min
                              : savedAdsPerams?.appliedFilters
                                  ?.InstagramFollowers?.min,
                            Number(e.value),
                          ]);
                        }
                      }}
                    />
                  </Stack>
                </Box>

                <Slider
                  id="instragram"
                  size="small"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? [
                          allAdsPerams?.appliedFilters?.InstagramFollowers?.min,
                          allAdsPerams?.appliedFilters?.InstagramFollowers?.max,
                        ]
                      : [
                          savedAdsPerams?.appliedFilters?.InstagramFollowers
                            ?.min,
                          savedAdsPerams?.appliedFilters?.InstagramFollowers
                            ?.max,
                        ]
                  }
                  min={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.maxRanger?.InstagramFollowers?.min
                      : savedAdsPerams?.maxRanger?.InstagramFollowers?.min
                  }
                  max={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.maxRanger?.InstagramFollowers?.max
                      : savedAdsPerams?.maxRanger?.InstagramFollowers?.max
                  }
                  sx={{ color: "#00CBFF" }}
                  onChange={(e) =>
                    handleInstagramFollowersChange(e.target.value)
                  }
                />
                <Button
                  // disabled={props.loading}
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    textTransform: "none",
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    handleInstagramFollowersChange([1, 10000], true);
                    setInstragramFollowerAnchorEl(null);
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Popover>
          {/* Instagram Likes Filter End */}

          {/* Media Type Filter Start */}
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
              Media Type
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
                  name="radio-buttons-group"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.appliedFilters?.MediaType?.selectedValue
                      : savedAdsPerams?.appliedFilters?.MediaType?.selectedValue
                  }
                  onChange={(e) => {
                    handleMediaTypechange(e.target.value);
                    setMediaTypeAnchorel(null);
                  }}
                >
                  <FormControlLabel
                    value=""
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
                      textTransform: "none",
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    onClick={() => {
                      handleMediaTypechange("", true);
                      setMediaTypeAnchorel(null);
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Popover>
          {/* Media Type Filter End */}

          {/* Button Filter Start */}
          <Button
            variant="outlined"
            onClick={(e) => setButtonTypeAnchorEl(e.currentTarget)}
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
              Button
            </Typography>
          </Button>
          <Popover
            anchorEl={ButtonTypeanchorel}
            add={openButtonType ? "simple-popover" : undefined}
            onClose={() => {
              setButtonTypeAnchorEl(null);
            }}
            open={openButtonType}
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
                  name="radio-buttons-group"
                  value={
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPerams?.appliedFilters?.ButtonStatus
                          ?.selectedValue
                      : savedAdsPerams?.appliedFilters?.ButtonStatus
                          ?.selectedValue
                  }
                  onChange={(e) => {
                    handleButtonType(e.target.value);
                    setButtonTypeAnchorEl(null);
                  }}
                >
                  {buttonTypes.map((value) => {
                    return (
                      <FormControlLabel
                        key={value}
                        value={`${value}`}
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label={`${value}`}
                      />
                    );
                  })}
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
                      textTransform: "none",
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    onClick={() => {
                      handleButtonType("", true);
                      setButtonTypeAnchorEl(null);
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Popover>
          {/* Button Filter End */}
        </Grid>

        {/* Reset Filter Start */}
        <Grid item lg={1} md={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid item sx={{ marginTop: "23px" }}>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: 50,
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    height: "35px",
                    width: "80px",
                    borderWidth: 2,
                    textTransform: "none",
                  }}
                  onClick={() => {
                    if (pageName === PageNameEnum.AdlibraryDatabase) {
                      dispatch(allAdsPeramsDuck.clearFilterData());
                    } else if (pageName === "SavedPage") {
                      dispatch(savedAdsPeramsDuck.clearSavedFilterData());
                    }
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Reset Filter End */}
      </Grid>
    </>
  );
}

export default AllFilters;
