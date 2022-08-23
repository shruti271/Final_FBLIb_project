import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { EditText } from "react-edit-text";
import { addDays } from "date-fns";
import { format } from "date-fns";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PageNameEnum } from "../utils/enums";
import ResetButton from "../css/ResetButton";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import * as savedAdsPeramsDuck from "../redux/ducks/savedAdsPerams";
import { clearCashedPageData } from "../redux/ducks/filteredAds";
import Arrowdown from "../assets/Arrowdown.svg";

const useStyles = makeStyles((theme) => ({
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
  searchBtn: {
    "&:hover": {
      border: "none !important",
    },
  },
  filterBtn: {
    "&:hover": {
      border: "1px solid #EBEBEB !important",
    },
  },
  filterButton: {
    "&:hover": {
      border: "1px solid #EBEBEB !important",
    },
    color: "#2B2F42",
    whiteSpace: "nowrap",
    border: "1px solid #EBEBEB",
    borderRadius: "10px",
    marginRight: "14px",
    marginTop: "22px",
    "@media (max-width: 450px)": {
      width: "100%",
    },
  },
}));

function AllFilters(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();

  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);
  const { buttonTypes } = useSelector((state) => state.buttonTypes);

  const ShowFilterWithClearButton = useMediaQuery(theme.breakpoints.only("xs"));

  const [pageName, setPageName] = useState("");
  const [searchBarValue, setSearchBarValue] = useState("");

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
  // all ads
  const [rangeAdcountValue, setRangeAdcountValue] = useState({
    min: allAdsPerams?.appliedFilters?.AdCount?.min,
    max: allAdsPerams?.appliedFilters?.AdCount?.max,
  });
  const [rangeFacebookValue, setRangeFacebookValue] = useState({
    min: allAdsPerams?.appliedFilters?.FacebookLikes?.min,
    max: allAdsPerams?.appliedFilters?.FacebookLikes?.max,
  });
  const [rangeInstragramValue, setRangeInstragramValue] = useState({
    min: allAdsPerams?.appliedFilters?.InstagramFollowers?.min,
    max: allAdsPerams?.appliedFilters?.InstagramFollowers?.max,
  });
  // saved ads
  const [savedPageRangeAdcountValue, setSavedPageRangeAdcountValue] = useState({
    min: savedAdsPerams?.appliedFilters?.AdCount?.min,
    max: savedAdsPerams?.appliedFilters?.AdCount?.max,
  });
  const [savedPageRangeFacebookValue, setSavedPageRangeFacebookValue] =
    useState({
      min: savedAdsPerams?.appliedFilters?.FacebookLikes?.min,
      max: savedAdsPerams?.appliedFilters?.FacebookLikes?.max,
    });

  const [savedPageRangeInstragramValue, setSavedPageRangeInstragramValue] =
    useState({
      min: savedAdsPerams?.appliedFilters?.InstagramFollowers?.min,
      max: savedAdsPerams?.appliedFilters?.InstagramFollowers?.max,
    });

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

  useEffect(() => {
    setSearchBarValue(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPerams?.searchBarData
        : savedAdsPerams?.searchBarData
    );
  }, [pageName, allAdsPerams?.searchBarData, savedAdsPerams?.searchBarData]);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleAdsCountChange = (newValue, isReset) => {
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "AdCount",
            value: {
              min: newValue[0],
              max: newValue[1],
              chipText: `Ad Count : ${newValue[0]} - ${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "AdCount",
            value: {
              min: newValue[0],
              max: newValue[1],
              chipText: `Ad Count : ${newValue[0]} - ${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleChangeStatus = (newValue, isReset) => {
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "AdStatus",
            value: {
              selectedValue: newValue,
              chipText: `Ad status : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "AdStatus",
            value: {
              selectedValue: newValue,
              chipText: `Ad status : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleFacebookLikesChange = (newValue, isReset) => {
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "FacebookLikes",
            value: {
              min: newValue[0],
              max: newValue[1],
              chipText: `FacebookLike Page Likes: ${newValue[0]} - ${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "FacebookLikes",
            value: {
              min: newValue[0],
              max: newValue[1],
              chipText: `FacebookLike Page Followers: ${newValue[0]} - ${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleInstagramFollowersChange = (newValue, isReset) => {
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "InstagramFollowers",
            value: {
              min: newValue[0],
              max: newValue[1],
              chipText: `Instagram Page Followers : ${newValue[0]} - ${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "InstagramFollowers",
            value: {
              min: newValue[0],
              max: newValue[1],
              chipText: `Instagram Page Followers : ${newValue[0]} - ${newValue[1]}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleMediaTypechange = (newValue, isReset) => {
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "MediaType",
            value: {
              selectedValue: newValue,
              chipText: `Media Type : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "MediaType",
            value: {
              selectedValue: newValue,
              chipText: `Media Type : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleButtonType = (newValue, isReset) => {
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "ButtonStatus",
            value: {
              selectedValue: newValue,
              chipText: `Button Text : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "ButtonStatus",
            value: {
              selectedValue: newValue,
              chipText: `Button Text : ${newValue}`,
              isApplied: isReset ? false : true,
            },
          })
    );
  };

  const handleChangeSearchType = (newValue) => {
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
    pageName === PageNameEnum.AdlibraryDatabase &&
      dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeAppliedFilters({
            key: "StartRunningDate",
            value: {
              startdate: format(newValue.selection.startDate, "yyyy-MM-dd"),
              enddate: format(newValue.selection.endDate, "yyyy-MM-dd"),
              chipText: `Running Date ${format(
                newValue.selection.startDate,
                "yyyy/MM/dd"
              )}   -  ${format(newValue.selection.endDate, "yyyy/MM/dd")}`,
              isApplied: true,
            },
          })
        : savedAdsPeramsDuck.changeSavedAppliedFilters({
            key: "StartRunningDate",
            value: {
              startdate: format(newValue.selection.startDate, "yyyy-MM-dd"),
              enddate: format(newValue.selection.endDate, "yyyy-MM-dd"),
              chipText: `Running Date ${format(
                newValue.selection.startDate,
                "yyyy/MM/dd"
              )}   -  ${format(newValue.selection.endDate, "yyyy/MM/dd")}`,
              isApplied: true,
            },
          })
    );
  };

  useEffect(() => {
    allAdsPerams?.appliedFilters?.AdCount?.chipText === "" &&
      setRangeAdcountValue({
        min: 1,
        max: 1000,
      });
    allAdsPerams?.appliedFilters?.FacebookLikes?.chipText === "" &&
      setRangeFacebookValue({
        min: 1,
        max: 100000,
      });

    allAdsPerams?.appliedFilters?.InstagramFollowers?.chipText === "" &&
      setRangeInstragramValue({
        min: 1,
        max: 100000,
      });

    savedAdsPerams?.appliedFilters?.AdCount?.chipText === "" &&
      setSavedPageRangeAdcountValue({
        min: 1,
        max: 1000,
      });

    savedAdsPerams?.appliedFilters?.FacebookLikes?.chipText === "" &&
      setSavedPageRangeFacebookValue({
        min: 1,
        max: 100000,
      });

    savedAdsPerams?.appliedFilters?.InstagramFollowers?.chipText === "" &&
      setSavedPageRangeInstragramValue({
        min: 1,
        max: 100000,
      });
  }, [
    allAdsPerams?.appliedFilters?.AdCount?.chipText,
    allAdsPerams?.appliedFilters?.FacebookLikes?.chipText,
    allAdsPerams?.appliedFilters?.InstagramFollowers?.chipText,
    savedAdsPerams?.appliedFilters?.AdCount?.chipText,
    savedAdsPerams?.appliedFilters?.FacebookLikes?.chipText,
    savedAdsPerams?.appliedFilters?.InstagramFollowers?.chipText,
  ]);
  return (
    <>
      <Stack
        direction={"row"}
        sx={{ border: "1px solid #EBEBEB", borderRadius: 2 }}
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
              border: "none",
            }}
            className={classes.searchBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
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
                    label={
                      <Typography sx={{ fontWeight: 500 }}>
                        All these words
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="Exact Phrase"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label={
                      <Typography sx={{ fontWeight: 500 }}>
                        Exact Phrase
                      </Typography>
                    }
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
                      textTransform: "none",
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    className={classes.filterBtn}
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

        {/* Searchbar Start  */}
        <InputBase
          value={searchBarValue}
          fullWidth
          placeholder="Search"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              pageName === PageNameEnum.AdlibraryDatabase &&
                dispatch(clearCashedPageData());
              handleChangeSearchBar(e.currentTarget.value);
            }

            if (e.target.value.length === 0) {
              handleChangeSearchBar("");
              pageName === PageNameEnum.AdlibraryDatabase &&
                dispatch(clearCashedPageData());
            }
          }}
          onChange={(e) => {
            setSearchBarValue(e.currentTarget.value);
          }}
          size="large"
          sx={{ paddingLeft: "15px" }}
        />
        {/* Searchbar End  */}
      </Stack>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item lg={11} md={12} sm={12} xs={12}>
          {/* Date Filter Start */}
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
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
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
              id="datepicker"
              onChange={(item) => {
                handleStartDateChange(item);
                setRange([item.selection]);
              }}
              rangeColors={["#00CBFF"]}
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
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {" "}
              Ad count{" "}
            </Typography>
          </Button>
          <Popover
            open={addcounteropen}
            anchorEl={rangeanchorel}
            onClose={() => {
              setrangeAnchorEl(null);
            }}
            add={open ? "simple-popover" : undefined}
            transformOrigin={{
              horizontal: ShowFilterWithClearButton ? "center" : "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: ShowFilterWithClearButton ? "center" : "left",
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
                    <Typography sx={{ fontWeight: 500 }}>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? rangeAdcountValue.min.toString()
                          : savedPageRangeAdcountValue.min.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (pageName === PageNameEnum.AdlibraryDatabase) {
                            dispatch(clearCashedPageData());
                            setRangeAdcountValue({
                              min: Number(e.value),
                              max: rangeAdcountValue.max,
                            });
                          } else {
                            setSavedPageRangeAdcountValue({
                              min: Number(e.value),
                              max: savedPageRangeAdcountValue.max,
                            });
                          }

                          handleAdsCountChange([
                            Number(e.value),
                            pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.appliedFilters?.AdCount?.max
                              : savedAdsPerams?.appliedFilters?.AdCount?.max,
                          ]);
                        }
                      }}
                    />

                    <Typography sx={{ fontWeight: 500 }}>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? rangeAdcountValue.max.toString()
                          : savedPageRangeAdcountValue.max.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (pageName === PageNameEnum.AdlibraryDatabase) {
                            dispatch(clearCashedPageData());
                            setRangeAdcountValue({
                              min: rangeAdcountValue.min,
                              max: Number(e.value),
                            });
                          } else {
                            setSavedPageRangeAdcountValue({
                              min: savedPageRangeAdcountValue.min,
                              max: Number(e.value),
                            });
                          }
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
                      ? [rangeAdcountValue.min, rangeAdcountValue.max]
                      : [
                          savedPageRangeAdcountValue.min,
                          savedPageRangeAdcountValue.max,
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
                  onChangeCommitted={(e) => {
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? handleAdsCountChange([
                          rangeAdcountValue.min,
                          rangeAdcountValue.max,
                        ])
                      : handleAdsCountChange([
                          savedPageRangeAdcountValue.min,
                          savedPageRangeAdcountValue.max,
                        ]);
                  }}
                  onChange={(e) => {
                    if (pageName === PageNameEnum.AdlibraryDatabase) {
                      setRangeAdcountValue({
                        min: e.target.value[0],
                        max: e.target.value[1],
                      });
                    } else {
                      setSavedPageRangeAdcountValue({
                        min: e.target.value[0],
                        max: e.target.value[1],
                      });
                    }
                  }}
                />
                <ResetButton
                  onResetFunction={() => {
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? setRangeAdcountValue({
                          min: 1,
                          max: allAdsPerams?.maxRanger?.AdCount?.max,
                        })
                      : setSavedPageRangeAdcountValue({
                          min: 1,
                          max: savedAdsPerams?.maxRanger?.AdCount?.max,
                        });

                    pageName === PageNameEnum.AdlibraryDatabase &&
                      dispatch(clearCashedPageData());
                    dispatch(
                      pageName === PageNameEnum.AdlibraryDatabase
                        ? allAdsPeramsDuck.clearSingleFilter({
                            key: "AdCount",
                          })
                        : savedAdsPeramsDuck.clearSavedSingleFilter({
                            key: "AdCount",
                          })
                    );
                    setrangeAnchorEl(null);
                  }}
                  style={{
                    fontWeight: 600,
                    color: "#00CBFF",
                    textTransform: "none",
                  }}
                  borderWidth={3}
                >
                  <Typography
                    paddingLeft={1}
                    paddingRight={1}
                    style={{
                      textTransform: "none",
                      color: "url(#linearColors)",
                    }}
                    variant="p"
                  >
                    Reset
                  </Typography>
                </ResetButton>
              </Stack>
            </Box>
          </Popover>
          {/* Ad Count Filter End */}

          {/* Ad Status Filter Start */}
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
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
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
              horizontal: ShowFilterWithClearButton ? "center" : "left",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: ShowFilterWithClearButton ? "center" : "left",
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
                    label={
                      <Typography sx={{ fontWeight: 500 }}>Active</Typography>
                    }
                  />
                  <FormControlLabel
                    value="Inactive"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label={
                      <Typography sx={{ fontWeight: 500 }}>Inactive</Typography>
                    }
                  />
                </RadioGroup>
                <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <ResetButton
                    onResetFunction={(e) => {
                      handleChangeStatus("", true);
                      setAdStatusAnchorel(null);
                    }}
                    style={{
                      fontWeight: 600,
                      color: "#00CBFF",
                      textTransform: "none",
                    }}
                    borderWidth={3}
                  >
                    <Typography
                      paddingLeft={1}
                      paddingRight={1}
                      style={{
                        textTransform: "none",
                        color: "url(#linearColors)",
                      }}
                      variant="p"
                    >
                      Reset
                    </Typography>
                  </ResetButton>
                </Box>
              </FormControl>
            </Box>
          </Popover>
          {/* Ad Status Filter End */}

          {/* Facebook Likes Filter Start */}
          <Button
            variant="outlined"
            onClick={(e) => setFacebookLikeAnchorEl(e.currentTarget)}
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {" "}
              Facebook Page Likes
            </Typography>
          </Button>
          <Popover
            open={openFaceboolLike}
            anchorEl={facebookLikeanchorel}
            add={openFaceboolLike ? "simple-popover" : undefined}
            onClose={() => {
              setFacebookLikeAnchorEl(null);
            }}
            transformOrigin={{
              horizontal: ShowFilterWithClearButton ? "center" : "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: ShowFilterWithClearButton ? "center" : "left",
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
                    <Typography sx={{ fontWeight: 500 }}>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? rangeFacebookValue.min.toString()
                          : savedPageRangeFacebookValue.min.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (pageName === PageNameEnum.AdlibraryDatabase) {
                            dispatch(clearCashedPageData());
                            setRangeFacebookValue({
                              min: Number(e.value),
                              max: rangeFacebookValue.max,
                            });
                          } else {
                            setSavedPageRangeFacebookValue({
                              min: Number(e.value),
                              max: savedPageRangeFacebookValue.max,
                            });
                          }

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

                    <Typography sx={{ fontWeight: 500 }}>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? rangeFacebookValue.max.toString()
                          : savedPageRangeFacebookValue.max.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (pageName === PageNameEnum.AdlibraryDatabase) {
                            setRangeFacebookValue({
                              min: rangeFacebookValue.min,
                              max: Number(e.value),
                            });
                          } else {
                            setSavedPageRangeFacebookValue({
                              min: savedPageRangeFacebookValue.min,
                              max: Number(e.value),
                            });
                          }

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
                      ? [rangeFacebookValue.min, rangeFacebookValue.max]
                      : [
                          savedPageRangeFacebookValue.min,
                          savedPageRangeFacebookValue.max,
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
                  onChangeCommitted={(e) => {
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? handleFacebookLikesChange([
                          rangeFacebookValue.min,
                          rangeFacebookValue.max,
                        ])
                      : handleFacebookLikesChange([
                          savedPageRangeFacebookValue.min,
                          savedPageRangeFacebookValue.max,
                        ]);
                  }}
                  onChange={(e) => {
                    if (pageName === PageNameEnum.AdlibraryDatabase) {
                      setRangeFacebookValue({
                        min: e.target.value[0],
                        max: e.target.value[1],
                      });
                    } else {
                      setSavedPageRangeFacebookValue({
                        min: e.target.value[0],
                        max: e.target.value[1],
                      });
                    }
                  }}
                />
                <ResetButton
                  onResetFunction={() => {
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? setRangeFacebookValue({
                          min: 1,
                          max: allAdsPerams?.maxRanger?.FacebookLikes?.max,
                        })
                      : setSavedPageRangeFacebookValue({
                          min: 1,
                          max: savedAdsPerams?.maxRanger?.FacebookLikes?.max,
                        });

                    pageName === PageNameEnum.AdlibraryDatabase &&
                      dispatch(clearCashedPageData());
                    dispatch(
                      pageName === PageNameEnum.AdlibraryDatabase
                        ? allAdsPeramsDuck.clearSingleFilter({
                            key: "FacebookLikes",
                          })
                        : savedAdsPeramsDuck.clearSavedSingleFilter({
                            key: "FacebookLikes",
                          })
                    );
                    setFacebookLikeAnchorEl(null);
                  }}
                  style={{
                    fontWeight: 600,
                    color: "#00CBFF",
                    textTransform: "none",
                  }}
                  borderWidth={3}
                >
                  <Typography
                    paddingLeft={1}
                    paddingRight={1}
                    style={{
                      textTransform: "none",
                      color: "url(#linearColors)",
                    }}
                    variant="p"
                  >
                    Reset
                  </Typography>
                </ResetButton>
              </Stack>
            </Box>
          </Popover>
          {/* Facebook Likes Filter End */}

          {/* Instagram Likes Filter Start */}
          <Button
            variant="outlined"
            onClick={(e) => setInstragramFollowerAnchorEl(e.currentTarget)}
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {" "}
              Instagram Page Followers{" "}
            </Typography>
          </Button>
          <Popover
            open={openInstragramFollower}
            anchorEl={instragramFolloweranchorel}
            add={openInstragramFollower ? "simple-popover" : undefined}
            onClose={() => {
              setInstragramFollowerAnchorEl(null);
            }}
            transformOrigin={{
              horizontal: ShowFilterWithClearButton ? "center" : "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: ShowFilterWithClearButton ? "center" : "left",
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
                    <Typography sx={{ fontWeight: 500 }}>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? rangeInstragramValue.min.toString()
                          : savedPageRangeInstragramValue.min.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (pageName === PageNameEnum.AdlibraryDatabase) {
                            setRangeInstragramValue({
                              min: Number(e.value),
                              max: rangeInstragramValue.max,
                            });
                          } else {
                            setSavedPageRangeInstragramValue({
                              min: Number(e.value),
                              max: savedPageRangeInstragramValue.max,
                            });
                          }

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

                    <Typography sx={{ fontWeight: 500 }}>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={
                        pageName === PageNameEnum.AdlibraryDatabase
                          ? rangeInstragramValue.max.toString()
                          : savedPageRangeInstragramValue.max.toString()
                      }
                      onSave={(e) => {
                        if (Number(e.value) !== e.previousValue) {
                          if (pageName === PageNameEnum.AdlibraryDatabase) {
                            setRangeInstragramValue({
                              min: rangeInstragramValue.min,
                              max: Number(e.value),
                            });
                          } else {
                            setSavedPageRangeInstragramValue({
                              min: savedPageRangeInstragramValue.min,
                              max: Number(e.value),
                            });
                          }

                          if (
                            Number(e.value) >
                            (pageName === PageNameEnum.AdlibraryDatabase
                              ? allAdsPerams?.maxRanger?.InstagramFollowers?.max
                              : savedAdsPerams?.maxRanger?.InstagramFollowers
                                  ?.max)
                          ) {
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
                          }
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
                      ? [rangeInstragramValue.min, rangeInstragramValue.max]
                      : [
                          savedPageRangeInstragramValue.min,
                          savedPageRangeInstragramValue.max,
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
                  onChangeCommitted={(e) => {
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? handleInstagramFollowersChange([
                          rangeInstragramValue.min,
                          rangeInstragramValue.max,
                        ])
                      : handleInstagramFollowersChange([
                          savedPageRangeInstragramValue.min,
                          savedPageRangeInstragramValue.max,
                        ]);
                  }}
                  onChange={(e) => {
                    if (pageName === PageNameEnum.AdlibraryDatabase) {
                      setRangeInstragramValue({
                        min: e.target.value[0],
                        max: e.target.value[1],
                      });
                    } else {
                      setSavedPageRangeInstragramValue({
                        min: e.target.value[0],
                        max: e.target.value[1],
                      });
                    }
                  }}
                />
                <ResetButton
                  onResetFunction={() => {
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? setRangeInstragramValue({
                          min: 1,
                          max: allAdsPerams?.maxRanger?.InstagramFollowers?.max,
                        })
                      : setSavedPageRangeInstragramValue({
                          min: 1,
                          max: savedAdsPerams?.maxRanger?.InstagramFollowers
                            ?.max,
                        });

                    pageName === PageNameEnum.AdlibraryDatabase &&
                      dispatch(clearCashedPageData());
                    dispatch(
                      pageName === PageNameEnum.AdlibraryDatabase
                        ? allAdsPeramsDuck.clearSingleFilter({
                            key: "InstagramFollowers",
                          })
                        : savedAdsPeramsDuck.clearSavedSingleFilter({
                            key: "InstagramFollowers",
                          })
                    );
                    setInstragramFollowerAnchorEl(null);
                  }}
                  style={{
                    fontWeight: 600,
                    color: "#00CBFF",
                    textTransform: "none",
                  }}
                  borderWidth={3}
                >
                  <Typography
                    paddingLeft={1}
                    paddingRight={1}
                    style={{
                      textTransform: "none",
                      color: "url(#linearColors)",
                    }}
                    variant="p"
                  >
                    Reset
                  </Typography>
                </ResetButton>
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
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
            size="large"
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
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
              horizontal: ShowFilterWithClearButton ? "center" : "left",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: ShowFilterWithClearButton ? "center" : "left",
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
                    label={
                      <Typography sx={{ fontWeight: 500 }}>
                        Video or Photo
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="video"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label={
                      <Typography sx={{ fontWeight: 500 }}>Video</Typography>
                    }
                  />
                  <FormControlLabel
                    value="image"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label={
                      <Typography sx={{ fontWeight: 500 }}> Photo</Typography>
                    }
                  />
                </RadioGroup>
                <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <ResetButton
                    onResetFunction={() => {
                      handleMediaTypechange("", true);
                      setMediaTypeAnchorel(null);
                    }}
                    style={{
                      fontWeight: 600,
                      color: "#00CBFF",
                      textTransform: "none",
                    }}
                    borderWidth={3}
                  >
                    <Typography
                      paddingLeft={1}
                      paddingRight={1}
                      style={{
                        textTransform: "none",
                        color: "url(#linearColors)",
                      }}
                      variant="p"
                    >
                      Reset
                    </Typography>
                  </ResetButton>
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
              "@media (max-width: 450px)": {
                width: "100%",
              },
            }}
            className={classes.filterBtn}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
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
              horizontal: ShowFilterWithClearButton ? "center" : "left",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: ShowFilterWithClearButton ? "center" : "left",
            }}
          >
            <Box sx={{ width: "170px" }}>
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
                  <ResetButton
                    onResetFunction={() => {
                      handleButtonType("", true);
                      setButtonTypeAnchorEl(null);
                    }}
                    style={{
                      fontWeight: 600,
                      color: "#00CBFF",
                      textTransform: "none",
                    }}
                    borderWidth={3}
                  >
                    <Typography
                      paddingLeft={1}
                      paddingRight={1}
                      style={{
                        textTransform: "none",
                        color: "url(#linearColors)",
                      }}
                      variant="p"
                    >
                      Reset
                    </Typography>
                  </ResetButton>
                </Box>
              </FormControl>
            </Box>
          </Popover>
          {/* Button Filter End */}
        </Grid>

        {/* Reset Filter Start */}
        <Grid item lg={1} md={12} sm={12} xs={12} justifyContent="flex-end">
          <Box
            sx={{
              display: "flex",

              marginTop: ShowFilterWithClearButton ? 2 : "",
              justifyContent: ShowFilterWithClearButton ? "center" : "end",
              alignItems: ShowFilterWithClearButton ? "center" : "end",
              // },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: 50,

                textTransform: "none",
                fontWeight: 600,
                borderColor: "#00CBFF",
                color: "#00CBFF",
                height: "35px",
                width: "100px",
                borderWidth: 2,
              }}
              className={classes.filterBtn}
              onClick={() => {
                if (pageName === PageNameEnum.AdlibraryDatabase) {
                  dispatch(allAdsPeramsDuck.clearFilterData());
                } else {
                  dispatch(savedAdsPeramsDuck.clearSavedFilterData());
                }
              }}
            >
              <Typography
                paddingLeft={1}
                paddingRight={1}
                style={{
                  textTransform: "none",
                  color: "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                }}
                variant="p"
              >
                Clear
              </Typography>
            </Button>
          </Box>
        </Grid>
        {/* Reset Filter End */}
      </Grid>
    </>
  );
}

export default AllFilters;
