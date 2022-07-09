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
import EditableLabel from "react-simple-editlabel";
import { EditText } from "react-edit-text";
import AllFilters from "../components/AllFilters";

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
  // const focusDiv = useRef();

  const { allMediaAds, loading } = useSelector((state) => state.allMediaAds);
  const {
    filteredData,
    appliedFilters,
    sortFilter,
    searchBarData,
    postionYoffset,
    AllAdsPage,
  } = useSelector((state) => state.filteredData);
  useEffect(() => {
    console.log(AllAdsPage);
    console.log("-....................................................");
  });
  const { savedIds } = useSelector((state) => state.savedclienads);
  const [onFocusEditTextField, setOnFocusEditTextField] = React.useState(0);
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
    // const position = window.pageYOffset;
    console.log(
      "{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]}}}}}}}}}}}}}"
    );
    // console.log(position)
    console.log(
      "{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]}}}}}}}}}}}}}"
    );

    window.scrollTo({
      top: postionYoffset,
      behavior: "smooth",
    });
    // window.pageYOffset
  }, [postionYoffset]);
  useEffect(() => {
    console.log("33333333333333333333333333333333333333333333333333");
    console.log(appliedFilters);
    console.log(filteredData);
    console.log(appliedFilters);
    console.log(searchBarData);
    console.log("33333333333333333333333333333333333333333333333333");
    console.log(AllAdsPage.filteredData);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
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
      dispatch(
        putFilteredDataStart({
          data: allMediaAds[1]?.all_ads,
          componentName: "AllAdsPage",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMediaAds]);

  // const counterIncremten = (event, newValue) => {
  //   console.log("++++++++++++++" + document.getElementById("searchbar").value);
  //   console.log(newValue);
  //   console.log("............................................................");
  //   // console.log(event.type);
  //   console.log("............................................................");
  //   // if(event.type!=="mousedown" && event.type!=="mousemove"){
  //   console.log("insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  //   dispatch(
  //     AdCountvalueStart({
  //       name: "AdCount",
  //       min: newValue[0],
  //       max: newValue[1],
  //       Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
  //     })
  //   );
  //   // searchBarData!==[]?dispatch(searchStart(searchBarData)):
  //   dispatch(applyallfilters());

  //   // }
  //   // dispatch(applyallfilters());
  //   // searchBarData !== []
  //   //   ? dispatch(searchStart(searchBarData))
  //   //   : dispatch(applyallfilters());
  // };
  // const FacebookLikesIncremten = (event, newValue) => {
  //   dispatch(
  //     AdCountvalueStart({
  //       name: "FacebookLikes",
  //       min: newValue[0],
  //       max: newValue[1],
  //       Message: `Facebook Page likes: ${newValue[0]}-${newValue[1]}`,
  //     })
  //   );
  //   // console.log("llllllllllllllllllllllllll");
  //   // console.log(newValue.split("-")[1]);
  //   // console.log("llllllllllllllllllllllllll");
  //   // dispatch(
  //   //   AdCountvalueStart({
  //   //     name: "FacebookLikes",
  //   //     min: Number(newValue.split("-")[0]),
  //   //     max: Number(newValue.split("-")[1]),
  //   //     Message:
  //   //       newValue.split("-")[1] === "0"
  //   //         ? `FacebookLikes : ${newValue.split("-")[0]}+`
  //   //         : `FacebookLikes : ${newValue.split("-")[0]} - ${
  //   //             newValue.split("-")[1]
  //   //           }`,
  //   //   })
  //   // );
  //   dispatch(applyallfilters());
  // };
  // const InstragramFollowerIncremten = (event, newValue) => {
  //   console.log(newValue);
  //   console.log("11111111111111111@@@@@@@@@@@@@@@@@@@@@@@@");
  //   dispatch(
  //     AdCountvalueStart({
  //       name: "InstragramLike",
  //       min: newValue[0],
  //       max: newValue[1],
  //       Message: `Instragram Page likes: ${newValue[0]}-${newValue[1]}`,
  //     })
  //   );
  //   // console.log("llllllllllllllllllllllllll");
  //   // console.log(newValue.split("-")[1]);
  //   // console.log("llllllllllllllllllllllllll");
  //   // dispatch(
  //   //   AdCountvalueStart({
  //   //     name: "FacebookLikes",
  //   //     min: Number(newValue.split("-")[0]),
  //   //     max: Number(newValue.split("-")[1]),
  //   //     Message:
  //   //       newValue.split("-")[1] === "0"
  //   //         ? `FacebookLikes : ${newValue.split("-")[0]}+`
  //   //         : `FacebookLikes : ${newValue.split("-")[0]} - ${
  //   //             newValue.split("-")[1]
  //   //           }`,
  //   //   })
  //   // );
  //   dispatch(applyallfilters());
  // };
  // const handleButtonType = (event, newValue) => {
  //   // appliedFilters?.PurchaseType?.selctedButton
  //   // console.log("............................")
  //   // console.log(newValue)
  //   // console.log("............................")
  //   dispatch(
  //     ButtonTypevalueStart({
  //       name: "PurchaseType",
  //       selctedButton: newValue,
  //       Message: `Button : ${newValue}`,
  //     })
  //   );
  //   document.getElementById("searchbar").value
  //     ? dispatch(searchStart(searchBarData))
  //     : dispatch(applyallfilters());

  //   dispatch(SortvalueStart());
  // };
  // const handlechange = (event, newValue) => {
  //   console.log(newValue);
  //   console.log("..................................................");
  //   dispatch(
  //     MediaTypevalueStart({
  //       name: "MediaType",
  //       selectedData: newValue,
  //       Message: `MediaType : ${newValue}`,
  //     })
  //   );
  //   // dispatch(searchStart());
  //   // dispatch(applyallfilters());
  //   // document.getElementById("searchbar").innerText
  //   //   ? dispatch(searchStart(searchBarData))
  //   //   : dispatch(applyallfilters());
  //   // searchBarData !== ''
  //   //   ? dispatch(searchStart(searchBarData))
  //   // :
  //   //  dispatch(applyallfilters());
  //   document.getElementById("searchbar").value
  //     ? dispatch(searchStart(searchBarData))
  //     : dispatch(applyallfilters());

  //   dispatch(SortvalueStart());

  //   // setAppliedFilters((pre) => ({
  //   //   ...pre,
  //   //   MediaType: {
  //   // selectedData: newValue,
  //   // Message: `MediaType:${newValue}`,
  //   //   },
  //   // }));
  // };
  // const handleChangeStatus = (event, newValue) => {
  //   dispatch(
  //     statusValueStart({
  //       name: "AdStatus",
  //       status: newValue,
  //       Message: `Ad Status:${newValue}`,
  //     })
  //   );
  //   // dispatch(applyallfilters());
  //   document.getElementById("searchbar").value
  //     ? dispatch(searchStart(searchBarData))
  //     : dispatch(applyallfilters());
  //   // searchBarData !== []
  //   //   ? dispatch(searchStart(searchBarData))
  //   //   : dispatch(applyallfilters());
  //   dispatch(SortvalueStart());
  //   // setAppliedFilters((pre) => ({
  //   //   ...pre,
  //   //   AdStatus: {
  //   // status: newValue,
  //   // Message: `Ad Status:${newValue}`,
  //   //   },
  //   // }));
  // };

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

  // useEffect(() => {
  //   // const abc = focusDiv.current ? true : false;
  //   // console.log(abc);
  //   // console.log(focusDiv.current?.textContent);
  //   // dispatch(
  //   //       AdCountvalueStart({
  //   //         name: "AdCount",
  //   //         min: Number(
  //   //           focusDiv.current?.textContent
  //   //         ),
  //   //         max: appliedFilters?.AdCount?.max,
  //   //         Message: `Ad Count: ${focusDiv.current?.textContent}-${appliedFilters?.AdCount?.max}`,
  //   //       })
  //   //     );
  //   // dispatch(SortvalueStart());
  //   console.log(
  //     "111111111111111111111111111111111111111111111..............................."
  //   );
  // });

  // const [range, setRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);

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
          <AllFilters name={"AllAdsPage"} />
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
              {AllAdsPage.filteredData?.map((ads, index) => (
                <ThumbNailBox
                  adInfo={ads}
                  index={index}
                  deleteId={savedIds?.includes(ads.id) ? ads.id : false}
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
