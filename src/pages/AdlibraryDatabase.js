import React, { useEffect, useRef, useState } from "react";
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
  ButtonTypevalueStart,
  clearFilteredDataStart,
  clearSingleFilteredDataStart,
  datevalueStart,
  facebookLikesStart,
  fluctuatedDataEnd,
  fluctuatedDataStart,
  loadFilteredDataStart,
  MediaTypevalueStart,
  putFilteredDataStart,
  searchStart,
  searchValueStart,
  SetSortOrdervalueStart,
  SortvalueStart,
  statusValueStart,
} from "../redux/ducks/filtered_Data";
import { EditText } from "react-edit-text";
// import { escapeRegExp } from "@mui/x-data-grid/utils/utils";

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
  const focusDiv = useRef();

  const { allMediaAds, loading } = useSelector((state) => state.allMediaAds);
  const { filteredData, appliedFilters, sortFilter, searchBarData } =
    useSelector((state) => state.filteredData);
  // const [countMin, setCountMin] = useState([]);
  // const [countMax, setCountMax] = useState(1000);
  const { savedIds } = useSelector((state) => state.savedclienads);

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
  const [facebookLikeanchorel, setFacebookLikeAnchorEl] = React.useState(null);
  const openFaceboolLike = Boolean(facebookLikeanchorel);
  const [instragramFolloweranchorel, setInstragramFollowerAnchorEl] =
    React.useState(null);
  const openInstragramFollower = Boolean(instragramFolloweranchorel);
  const [ButtonTypeanchorel, setButtonTypeAnchorEl] = React.useState(null);
  const openButtonType = Boolean(ButtonTypeanchorel);
  useEffect(() => {
    console.log("11111111111111111111111###################");
    console.log(sortFilter);
    console.log("11111111111111111111111###################");
  });
  // useEffect(() => {
  //   // var words = ['hello', 'hi', 'howdy'];
  //   var words = ["cool", "4"];

  //   var strmy = "hello hi bas";
  //   // var value = new RegExp(words.join('|'));
  //   console.log(
  //     ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
  //   );
  //   // console.log(value);
  //   // Object.values()
  //   // filteredData?.map(a=>{
  //   // console.log(Object.values(a).toString().includes('cool'))
  //   // words.forEach((dum) => {
  //     var tarr=filteredData
  //     tarr.filter((fil)=>{
  //       let dum=0;
  //       for (dum ; words.length<dum;dum++) {
  //         console.log(words[dum]);
  //         if (Object.values(fil).toString().includes(words[dum])) {
  //           console.log(words[dum]);
  //           // console.log(Object.values(filteredData[0]).toString())
  //           console.log("0000000000");
  //           console.log(fil);
  //           // console.log("yesssssssssssss")
  //         } else {
  //           console.log("break........................................");
  //           return null;
  //           // return false;
  //         }
  //       }
  //       // if(words.length === dum+1){
  //         return true;
  //       // }else return false;

  //     })
  //     console.log(tarr)
  //     console.log("{{{{{{{{{{{{{{{{{{{{{{first}}}}}}}}}}}}}}}}}}}}}}")
  //   for (let dat in filteredData) {
  //     // let dum=0;
  //     // for (dum in words) {
  //     //   console.log(words[dum]);
  //     //   if (Object.values(filteredData[0]).toString().includes(words[dum])) {
  //     //     console.log(words[dum]);
  //     //     // console.log(Object.values(filteredData[0]).toString())
  //     //     console.log("0000000000");
  //     //     console.log(filteredData[0]);
  //     //     // console.log("yesssssssssssss")
  //     //   } else {
  //     //     console.log("break........................................");
  //     //     // break;
  //     //     // return false;
  //     //   }
  //     // }
  //     // if(words.length === dum+1){

  //     // }
  //   }
  //   // });

  //   // })
  //   console.log(
  //     ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
  //   );
  // });

  useEffect(() => {
    console.log("33333333333333333333333333333333333333333333333333");
    console.log(appliedFilters);
    console.log(filteredData);
    console.log(appliedFilters);
    console.log(searchBarData);
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
      dispatch(putFilteredDataStart(allMediaAds[1]?.all_ads));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMediaAds]);

  const counterIncremten = (event, newValue) => {
    console.log("++++++++++++++" + document.getElementById("searchbar").value);
    console.log(newValue);
    console.log("............................................................");
    // console.log(event.type);
    console.log("............................................................");
    // if(event.type!=="mousedown" && event.type!=="mousemove"){
    console.log("insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    dispatch(
      AdCountvalueStart({
        name: "AdCount",
        min: newValue[0],
        max: newValue[1],
        Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
      })
    );
    // searchBarData!==[]?dispatch(searchStart(searchBarData)):
    dispatch(applyallfilters());

    // }
    // dispatch(applyallfilters());
    // searchBarData !== []
    //   ? dispatch(searchStart(searchBarData))
    //   : dispatch(applyallfilters());
  };
  const FacebookLikesIncremten = (event, newValue) => {
    dispatch(
      AdCountvalueStart({
        name: "FacebookLikes",
        min: newValue[0],
        max: newValue[1],
        Message: `FacebookLikes: ${newValue[0]}-${newValue[1]}`,
      })
    );
    // console.log("llllllllllllllllllllllllll");
    // console.log(newValue.split("-")[1]);
    // console.log("llllllllllllllllllllllllll");
    // dispatch(
    //   AdCountvalueStart({
    //     name: "FacebookLikes",
    //     min: Number(newValue.split("-")[0]),
    //     max: Number(newValue.split("-")[1]),
    //     Message:
    //       newValue.split("-")[1] === "0"
    //         ? `FacebookLikes : ${newValue.split("-")[0]}+`
    //         : `FacebookLikes : ${newValue.split("-")[0]} - ${
    //             newValue.split("-")[1]
    //           }`,
    //   })
    // );
    dispatch(applyallfilters());
  };
  const InstragramFollowerIncremten = (event, newValue) => {
    console.log(newValue);
    console.log("11111111111111111@@@@@@@@@@@@@@@@@@@@@@@@");
    dispatch(
      AdCountvalueStart({
        name: "InstragramLike",
        min: newValue[0],
        max: newValue[1],
        Message: `InstragramLike: ${newValue[0]}-${newValue[1]}`,
      })
    );
    // console.log("llllllllllllllllllllllllll");
    // console.log(newValue.split("-")[1]);
    // console.log("llllllllllllllllllllllllll");
    // dispatch(
    //   AdCountvalueStart({
    //     name: "FacebookLikes",
    //     min: Number(newValue.split("-")[0]),
    //     max: Number(newValue.split("-")[1]),
    //     Message:
    //       newValue.split("-")[1] === "0"
    //         ? `FacebookLikes : ${newValue.split("-")[0]}+`
    //         : `FacebookLikes : ${newValue.split("-")[0]} - ${
    //             newValue.split("-")[1]
    //           }`,
    //   })
    // );
    dispatch(applyallfilters());
  };
  const handleButtonType = (event, newValue) => {
    // appliedFilters?.PurchaseType?.selctedButton
    // console.log("............................")
    // console.log(newValue)
    // console.log("............................")
    dispatch(
      ButtonTypevalueStart({
        name: "PurchaseType",
        selctedButton: newValue,
        Message: `PurchaseType : ${newValue}`,
      })
    );
    document.getElementById("searchbar").value
      ? dispatch(searchStart(searchBarData))
      : dispatch(applyallfilters());

    dispatch(SortvalueStart());
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
    // dispatch(searchStart());
    // dispatch(applyallfilters());
    // document.getElementById("searchbar").innerText
    //   ? dispatch(searchStart(searchBarData))
    //   : dispatch(applyallfilters());
    // searchBarData !== ''
    //   ? dispatch(searchStart(searchBarData))
    // :
    //  dispatch(applyallfilters());
    document.getElementById("searchbar").value
      ? dispatch(searchStart(searchBarData))
      : dispatch(applyallfilters());

    dispatch(SortvalueStart());

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
    // dispatch(applyallfilters());
    document.getElementById("searchbar").value
      ? dispatch(searchStart(searchBarData))
      : dispatch(applyallfilters());
    // searchBarData !== []
    //   ? dispatch(searchStart(searchBarData))
    //   : dispatch(applyallfilters());
    dispatch(SortvalueStart());
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
    console.log(
      "---------------------------1111111111111111111111111--------------------------"
    );
    dispatch(
      SetSortOrdervalueStart({
        name: "order",
        data: newValue,
      })
    );
    dispatch(SortvalueStart());
    // setSortedDetail((pre) => ({ ...pre, order: newValue }));
  };

  const handleChangeSortType = (event, newValue) => {
    // console.log(newValue);
    // console.log("11111111111111111111111111111111111------------------");
    if (
      sortFilter.type === "AdCountIncrease" ||
      sortFilter.type === "AdCountDecrease"
    ) {
      dispatch(fluctuatedDataEnd());
      dispatch(applyallfilters());
    }
    dispatch(
      SetSortOrdervalueStart({
        name: "type",
        data: newValue,
      })
    );

    if (newValue === "AdCountIncrease" || newValue === "AdCountDecrease") {
      dispatch(applyallfilters());
    } else {
      dispatch(SortvalueStart());
    }
    //   dispatch(fluctuatedDataStart());
    //   console.log(filteredData);
    //   console.log(
    //     "---------------------))))))))))))))))----------------------"
    //   );
    // } else dispatch(SortvalueStart());

    // setSortedDetail((pre) => ({ ...pre, type: newValue }));
  };

  useEffect(() => {
    // const abc = focusDiv.current ? true : false;
    // console.log(abc);
    // console.log(focusDiv.current?.textContent);
    // dispatch(
    //       AdCountvalueStart({
    //         name: "AdCount",
    //         min: Number(
    //           focusDiv.current?.textContent
    //         ),
    //         max: appliedFilters?.AdCount?.max,
    //         Message: `Ad Count: ${focusDiv.current?.textContent}-${appliedFilters?.AdCount?.max}`,
    //       })
    //     );
    // dispatch(SortvalueStart());
    console.log(
      "111111111111111111111111111111111111111111111..............................."
    );
  });

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            style={{
              position: "relative",
              top: 50,
              left: 50,
              opacity: 1,
              // zIndex: 1,
              visibility: loading ? "visible" : "hidden",
            }}
          />
        </Box>
      ) : (
        <Grid
          container
          sx={{ opacity: loading ? 0.5 : 1, disabled: loading ? true : false }}
        >
          <Grid item xs={12}>
            <Box component="main">
              <Typography
                className={classes.titleHome}
                variant="h5"
                sx={{ fontWeight: "bold" }}
              >
                Welcome to the All-Seeing Eye!
              </Typography>
              <Typography
                // className={classes.subTitleHome}
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  // lineHeight: "24px",
                  color: "#2B2F42",
                  // marginTop: "8px",
                  // marginBottom: "18px",
                }}
              >
                Spy on 100% of the ads ran by over 30,000 active dropshipping
                stores.
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
              marginTop: 2,
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
                  {/* <form
                    onSubmit={(value) => {
                      console.log(value);
                      console.log(
                        "--------------------------???????????????????????"
                      );
                    }} 
                  >*/}

                  <InputBase
                    id="searchbar"
                    fullWidth
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(
                          searchStart({
                            keywords: e.currentTarget.value.split(" "),
                          })
                        );
                        // dispatch(applyallfilters())
                        // const dum = Object.values(filteredData[2]).flat();
                        // console.log(Object.values(filteredData[2]).flat());
                        // // console.log(dum.includes("2022-06-10"));

                        // filteredData.map((ads) => {
                        //   // Object.values(ads).flat()
                        //   const rarr = e.currentTarget.value.split(" ");
                        //   console.log(rarr);
                        //   e.currentTarget.value
                        //     .split(" ")
                        //     .every((a) =>
                        //       Object.values(ads).flat().includes(a)
                        //     );
                        //   console.log(
                        //     Object.values(ads).flat().includes("2022-06-10")
                        //   );
                        //   return true;
                        // });
                      }
                      console.log("||||||||||||||||||||||||||||||||||||||||||");
                      console.log(e.currentTarget.value === "");
                      console.table(e.currentTarget.value);
                      console.log("||||||||||||||||||||||||||||||||||||||||||");
                      if (e.currentTarget.value === "") {
                        dispatch(applyallfilters());
                        dispatch(
                          searchStart({
                            keywords: [],
                          })
                        );
                        // dispatch(applyallfilters());
                        // document.getElementById("searchbar").value
                        dispatch(searchStart(searchBarData));
                        // : dispatch(applyallfilters());
                      }
                    }}
                    margin="dense"
                    size="large"
                    placeholder="Search"
                    // onSubmit={(value) => {
                    //   console.log(value);
                    //   console.log(
                    //     "--------------------------???????????????????????"
                    //   );
                    // }}
                  />
                  {/* </form> */}
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
                    document.getElementById("searchbar").value
                      ? dispatch(searchStart(searchBarData))
                      : dispatch(applyallfilters());
                    // searchBarData?.keywords !== []
                    //   ? dispatch(searchStart(searchBarData))
                    //   : dispatch(applyallfilters());

                    dispatch(SortvalueStart());
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
                      // searchBarData?.keywords !== []
                      // ? dispatch(searchStart(searchBarData))
                      // :
                      // dispatch(applyallfilters());
                      document.getElementById("searchbar").value
                        ? dispatch(searchStart(searchBarData))
                        : dispatch(applyallfilters());
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
                          )} to ${format(
                            item.selection.endDate,
                            "yyyy-MM-dd"
                          )}`,
                        })
                      );
                      // searchBarData?.keywords!==[]?dispatch(searchStart(searchBarData)):dispatch(applyallfilters());
                      // dispatch(applyallfilters());
                      document.getElementById("searchbar").value
                        ? dispatch(searchStart(searchBarData))
                        : dispatch(applyallfilters());

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
                    // dispatch(applyallfilters());
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
                          <EditText
                            id="minRange"
                            type="number"
                            inputProps={{                              
                              style: { Width: 5 },
                            }}
                            // width="30px"
                            onKeyDown={(e)=>{
                              console.log("............................")
                              console.log(e)
                              console.log("..........................................")
                            }}
                            onClick={(e)=>{
                              console.log("..........................................")

                              console.log(e)
                              console.log("..........................................")
                              // document.getElementById('minRange').style.width="24px"
                              // e.currentTarget.width="24px"
                            }}
                            defaultValue={appliedFilters?.AdCount?.min}
                            onSave={(e) => {
                              console.log(e);
                              console.log("==============================");
                              if (e.value) {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "AdCount",
                                    min: Number(e.value),
                                    max: appliedFilters?.AdCount?.max,
                                    Message: `Ad Count: ${e.value}-${appliedFilters?.AdCount?.max}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());
                              }
                            }}
                          />
                          {/* <Typography
                            contentEditable
                            id="minRange"
                            onInput={(newValue) => {
                              console.log(typeof appliedFilters?.AdCount?.max);
                              console.log(
                                "++++++++++++++++++++++++*******************************"
                              );
                              if (newValue.currentTarget.textContent !== "") {
                                // dispatch(
                                //   AdCountvalueStart({
                                //     name: "AdCount",
                                //     min: newValue[0],
                                //     max: newValue[1],
                                //     Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
                                //   })
                                // );
                                dispatch(
                                  AdCountvalueStart({
                                    name: "AdCount",
                                    min: Number(
                                      newValue.currentTarget.textContent
                                    ),
                                    max: appliedFilters?.AdCount?.max,
                                    Message: `Ad Count: ${newValue.currentTarget.textContent}-${appliedFilters?.AdCount?.max}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());

                                // dispatch(applyallfilters());
                                // if (searchBarData !== [])
                                //   dispatch(searchStart(searchBarData));

                                dispatch(SortvalueStart());
                              }
                            }}
                          >
                            {appliedFilters?.AdCount?.min}
                          </Typography> */}
                          <Typography>to</Typography>
                          <EditText
                            id="minRange"
                            type="number"
                            defaultValue={appliedFilters?.AdCount?.max}
                            onSave={(e) => {
                              console.log(e);
                              console.log("==============================");
                              if (e.value) {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "AdCount",
                                    min: appliedFilters?.AdCount?.min,
                                    max: Number(e.value),
                                    Message: `Ad Count: ${appliedFilters?.AdCount?.min}-${e.value}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());
                              }
                            }}
                          />
                          {/* <Typography
                            contentEditable={true}
                            id="maxRange"
                            onInput={(newValue) => {
                              // setCountMax(
                              //   `${newValue.currentTarget.textContent}`
                              // );
                              if (newValue.currentTarget.textContent !== "") {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "AdCount",
                                    min: appliedFilters?.AdCount?.min,
                                    max: Number(
                                      newValue.currentTarget.textContent
                                    ),
                                    Message: `Ad Count: ${appliedFilters?.AdCount?.min}-${newValue.currentTarget.textContent}`,
                                  })
                                );
                                // searchBarData!==[]?dispatch(searchStart(searchBarData)):
                                // dispatch(applyallfilters());
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());

                                dispatch(SortvalueStart());
                              }
                              console.log(
                                "------------------" +
                                  newValue.currentTarget.textContent
                              );
                            }}
                          >
                            {" "}
                            {appliedFilters?.AdCount?.max}
                          </Typography> */}
                        </Stack>
                      </Box>
                      {/* <Typography contentEditable={true} sx={{ padding: "0px" }}>
                      From {appliedFilters?.AdCount?.min} to{" "}
                      {appliedFilters?.AdCount?.max}+
                    </Typography> */}
                      <Slider
                        id="adcount"
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
                          document.getElementById("searchbar").value
                            ? dispatch(searchStart(searchBarData))
                            : dispatch(applyallfilters());
                          // dispatch(applyallfilters());
                          // searchBarData !== []
                          //   ? dispatch(searchStart(searchBarData))
                          //   : dispatch(applyallfilters());
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
                            // dispatch(applyallfilters());
                            // searchBarData !== []
                            //   ? dispatch(searchStart(searchBarData))
                            //   : dispatch(applyallfilters());
                            document.getElementById("searchbar").value
                              ? dispatch(searchStart(searchBarData))
                              : dispatch(applyallfilters());
                            dispatch(SortvalueStart());
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
                    setFacebookLikeAnchorEl(null);
                    // dispatch(applyallfilters());
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
                          <EditText
                            id="minFacebookRange"
                            type="number"
                            defaultValue={appliedFilters?.FacebookLikes?.min}
                            onSave={(e) => {
                              // console.log(e);
                              // console.log("==============================");
                              if (e.value) {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "FacebookLikes",
                                    min: Number(e.value),
                                    max: appliedFilters?.FacebookLikes?.max,
                                    Message: `FacebookLikes: ${e.value}-${appliedFilters?.FacebookLikes?.max}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());
                              }
                            }}
                          />
                          {/* <Typography
                            contentEditable
                            onInput={(newValue) => {
                              console.log(
                                typeof appliedFilters?.FacebookLikes?.max
                              );
                              console.log(
                                "++++++++++++++++++++++++*******************************"
                              );
                              if (newValue.currentTarget.textContent !== "") {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "FacebookLikes",
                                    min: Number(
                                      newValue.currentTarget.textContent
                                    ),
                                    max: appliedFilters?.FacebookLikes?.max,
                                    Message: `FacebookLikes: ${newValue.currentTarget.textContent}-${appliedFilters?.FacebookLikes?.max}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());

                                // dispatch(applyallfilters());
                                // if (searchBarData !== [])
                                //   dispatch(searchStart(searchBarData));

                                dispatch(SortvalueStart());
                              }
                            }}
                          >
                            {appliedFilters?.FacebookLikes?.min}
                          </Typography> */}
                          <Typography>to</Typography>
                          <EditText
                            id="maxFacebookRange"
                            type="number"
                            defaultValue={appliedFilters?.FacebookLikes?.max}
                            onSave={(e) => {
                              // console.log(e);
                              // console.log("==============================");
                              if (e.value) {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "FacebookLikes",
                                    min: appliedFilters?.FacebookLikes?.min,
                                    max: Number(e.value),
                                    Message: `FacebookLikes : ${appliedFilters?.FacebookLikes?.min}-${e.value}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());
                              }
                            }}
                          />
                          {/* <Typography
                            contentEditable
                            onInput={(newValue) => {
                              // setCountMax(
                              //   `${newValue.currentTarget.textContent}`
                              // );
                              if (newValue.currentTarget.textContent !== "") {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "FacebookLikes",
                                    min: appliedFilters?.FacebookLikes?.min,
                                    max: Number(
                                      newValue.currentTarget.textContent
                                    ),
                                    Message: `FacebookLikes : ${appliedFilters?.FacebookLikes?.min}-${newValue.currentTarget.textContent}`,
                                  })
                                );
                                // searchBarData!==[]?dispatch(searchStart(searchBarData)):
                                // dispatch(applyallfilters());
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());

                                dispatch(SortvalueStart());
                              }
                              console.log(
                                "------------------" +
                                  newValue.currentTarget.textContent
                              );
                            }}
                          >
                            {" "}
                            {appliedFilters?.FacebookLikes?.max}
                          </Typography> */}
                        </Stack>
                      </Box>
                      {/* <Typography contentEditable={true} sx={{ padding: "0px" }}>
                      From {appliedFilters?.AdCount?.min} to{" "}
                      {appliedFilters?.AdCount?.max}+
                    </Typography> */}
                      <Slider
                        id="facebook"
                        size="small"
                        value={[
                          appliedFilters?.FacebookLikes?.min,
                          appliedFilters?.FacebookLikes?.max,
                        ]}
                        min={0}
                        max={100000}
                        sx={{ color: "#00CBFF" }}
                        onChange={FacebookLikesIncremten}
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
                              name: "FacebookLikes",
                              min: 1,
                              max: 100000,
                              Message: "",
                            })
                          );

                          document.getElementById("searchbar").value
                            ? dispatch(searchStart(searchBarData))
                            : dispatch(applyallfilters());

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
                  onClick={(e) =>
                    setInstragramFollowerAnchorEl(e.currentTarget)
                  }
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
                    setInstragramFollowerAnchorEl(null);
                    // dispatch(applyallfilters());
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
                          <EditText
                            id="minInstragramRange"
                            type="number"
                            defaultValue={appliedFilters?.InstragramLike?.min}
                            onSave={(e) => {
                              // console.log(e);
                              // console.log("==============================");
                              if (e.value) {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "InstragramLike",
                                    min: Number(e.value),
                                    max: appliedFilters?.InstragramLike?.max,
                                    Message: `InstragramLike: ${e.value}-${appliedFilters?.InstragramLike?.max}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());
                              }
                            }}
                          />
                          {/* <Typography
                            contentEditable
                            // id="minRange"
                            onInput={(newValue) => {
                              console.log(
                                typeof appliedFilters?.InstragramLike?.max
                              );
                              console.log(
                                "++++++++++++++++++++++++*******************************"
                              );
                              if (newValue.currentTarget.textContent !== "") {
                                // dispatch(
                                //   AdCountvalueStart({
                                //     name: "AdCount",
                                //     min: newValue[0],
                                //     max: newValue[1],
                                //     Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
                                //   })
                                // );
                                dispatch(
                                  AdCountvalueStart({
                                    name: "InstragramLike",
                                    min: Number(
                                      newValue.currentTarget.textContent
                                    ),
                                    max: appliedFilters?.InstragramLike?.max,
                                    Message: `InstragramLike: ${newValue.currentTarget.textContent}-${appliedFilters?.InstragramLike?.max}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());

                                // dispatch(applyallfilters());
                                // if (searchBarData !== [])
                                //   dispatch(searchStart(searchBarData));

                                dispatch(SortvalueStart());
                              }
                            }}
                          >
                            {appliedFilters?.InstragramLike?.min}
                          </Typography> */}
                          <Typography>to</Typography>
                          <EditText
                            id="maxFacebookRange"
                            type="number"
                            defaultValue={appliedFilters?.InstragramLike?.max}
                            onSave={(e) => {
                              // console.log(e);
                              // console.log("==============================");
                              if (e.value) {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "InstragramLike",
                                    min: appliedFilters?.InstragramLike?.min,
                                    max: Number(e.value),
                                    Message: `InstragramLike: ${appliedFilters?.InstragramLike?.min}-${e.value}`,
                                  })
                                );
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());
                              }
                            }}
                          />
                          {/* <Typography
                            contentEditable
                            // id="maxRange"
                            onInput={(newValue) => {
                              // setCountMax(
                              //   `${newValue.currentTarget.textContent}`
                              // );
                              if (newValue.currentTarget.textContent !== "") {
                                dispatch(
                                  AdCountvalueStart({
                                    name: "InstragramLike",
                                    min: appliedFilters?.InstragramLike?.min,
                                    max: Number(
                                      newValue.currentTarget.textContent
                                    ),
                                    Message: `InstragramLike: ${appliedFilters?.InstragramLike?.min}-${newValue.currentTarget.textContent}`,
                                  })
                                );
                                // searchBarData!==[]?dispatch(searchStart(searchBarData)):
                                // dispatch(applyallfilters());
                                document.getElementById("searchbar").value
                                  ? dispatch(searchStart(searchBarData))
                                  : dispatch(applyallfilters());

                                dispatch(SortvalueStart());
                              }
                              console.log(
                                "------------------" +
                                  newValue.currentTarget.textContent
                              );
                            }}
                          >
                            {" "}
                            {appliedFilters?.InstragramLike?.max}
                          </Typography> */}
                        </Stack>
                      </Box>
                      {/* <Typography contentEditable={true} sx={{ padding: "0px" }}>
                      From {appliedFilters?.AdCount?.min} to{" "}
                      {appliedFilters?.AdCount?.max}+
                    </Typography> */}
                      <Slider
                        id="instragram"
                        size="small"
                        value={[
                          appliedFilters?.InstragramLike?.min,
                          appliedFilters?.InstragramLike?.max,
                        ]}
                        min={0}
                        max={10000}
                        sx={{ color: "#00CBFF" }}
                        onChange={InstragramFollowerIncremten}
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
                              name: "InstragramLike",
                              min: 1,
                              max: 10000,
                              Message: "",
                            })
                          );
                          document.getElementById("searchbar").value
                            ? dispatch(searchStart(searchBarData))
                            : dispatch(applyallfilters());
                          // dispatch(applyallfilters());
                          // searchBarData !== []
                          //   ? dispatch(searchStart(searchBarData))
                          //   : dispatch(applyallfilters());
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
                            // dispatch(applyallfilters());
                            // searchBarData !== []
                            //   ? dispatch(searchStart(searchBarData))
                            //   : dispatch(applyallfilters());
                            document.getElementById("searchbar").value
                              ? dispatch(searchStart(searchBarData))
                              : dispatch(applyallfilters());
                            dispatch(SortvalueStart());
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
                    {" "}
                    Button{" "}
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
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={
                          appliedFilters?.PurchaseType?.selctedButton || ""
                        }
                        onChange={handleButtonType}
                      >
                        <FormControlLabel
                          value="Shop Now"
                          control={<Radio style={{ color: "#00CBFF" }} />}
                          label="Shop Now"
                        />
                      </RadioGroup>
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
                          onClick={() => {
                            dispatch(
                              MediaTypevalueStart({
                                name: "MediaType",
                                selectedData: "Video or Photo",
                                Message: "",
                              })
                            );
                            // dispatch(applyallfilters());
                            // searchBarData !== []
                            //   ? dispatch(searchStart(searchBarData))
                            //   : dispatch(applyallfilters());
                            document.getElementById("searchbar").value
                              ? dispatch(searchStart(searchBarData))
                              : dispatch(applyallfilters());
                            dispatch(SortvalueStart());
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
                      </Box> */}
                    </FormControl>
                  </Box>
                </Popover>
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
                          // dispatch(
                          //   SetSortOrdervalueStart({
                          //     name: "type",
                          //     data: "",
                          //   })
                          // );
                          dispatch(SortvalueStart());
                        }}
                      >
                        clear
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
                                ? 1
                                : filter === "FacebookLikes"
                                ? 100000
                                : filter === "InstragramLike"
                                ? 10000
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
                        // dispatch(
                        //   SetSortOrdervalueStart({
                        //     name: "type",
                        //     data: "",
                        //   })
                        // );
                        // dispatch(applyallfilters());
                        console.log(document.getElementById("searchbar").value);
                        console.log(
                          "-----------======================================"
                        );
                        document.getElementById("searchbar").value !== ""
                          ? dispatch(searchStart(searchBarData))
                          : dispatch(applyallfilters());
                        dispatch(SortvalueStart());
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
                      value={sortFilter?.type}
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
                        value="likes"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Page likes"
                      />
                      <FormControlLabel
                        value="noOfCopyAds"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Ad count total"
                      />
                      <FormControlLabel
                        value="AdCountIncrease"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Ad count increase"
                      />
                      <FormControlLabel
                        value="AdCountDecrease"
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
                      value={sortFilter?.order}
                      onChange={handleChangeAceOrDes}
                    >
                      <FormControlLabel
                        disabled={
                          sortFilter.type === "AdCountIncrease" ||
                          sortFilter.type === "AdCountDecrease"
                            ? true
                            : false
                        }
                        value="Ascending"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Ascending"
                      />
                      <FormControlLabel
                        disabled={
                          sortFilter.type === "AdCountIncrease" ||
                          sortFilter.type === "AdCountDecrease"
                            ? true
                            : false
                        }
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
      )}
    </>
  );
};

export default Addlibrarydatabase;
