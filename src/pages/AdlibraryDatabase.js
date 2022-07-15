



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  // InputBase,
  Popover,
  Radio,
  RadioGroup,
  // Slider,
  // Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import "react-datepicker/dist/react-datepicker.css";
import Arrowdown from "../assets/Arrowdown.svg";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ThumbNailBox from "../components/ThumbNailBox";
import {
  applyallfilters,
  clearSingleFilteredDataStart,
  FilterAfterSearchStart,
  loadFilteredDataStart,
  putFilteredDataStart,
  searchStart,
  SortvalueStart,
} from "../redux/ducks/filtered_Data";
import EditableLabel from "react-simple-editlabel";
import { EditText } from "react-edit-text";
import BackTotopbutton from "../pages/Backtotopbutton";
import AllFilters from "../components/AllFilters";
import SortFilter from "../components/SortFilter";
import Mychart from "../components/Graph";

// import MyGraph from "../components/Graph";



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
    search_loading,
    searchType,
    maxRanger
    // AllAdsPage,
  } = useSelector((state) => state.filteredData);

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
  console.log("search_loading..", search_loading);
  useEffect(() => {
    // console.log(AllAdsPage);
    console.log(
      "....................................................",
      filteredData
    );
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
  //   var tarr = filteredData;
  //   tarr.filter((fil) => {
  //     let dum = 0;
  //     for (dum; words.length < dum; dum++) {
  //       console.log(words[dum]);
  //       if (Object.values(fil).toString().includes(words[dum])) {
  //         console.log(words[dum]);
  //         // console.log(Object.values(filteredData[0]).toString())
  //         console.log("0000000000");
  //         console.log(fil);
  //         // console.log("yesssssssssssss")
  //       } else {
  //         console.log("break........................................");
  //         return null;
  //         // return false;
  //       }
  //     }
  //     // if(words.length === dum+1){
  //     return true;
  //     // }else return false;
  //   });
  //   console.log(tarr);
  //   console.log("{{{{{{{{{{{{{{{{{{{{{{first}}}}}}}}}}}}}}}}}}}}}}");
  //   // for (let dat in filteredData) {
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
  //   // }
  //   // });

  //   // })
  //   console.log(
  //     ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
  //   );
  // });

  useEffect(() => {
    window.scrollTo({
      top: postionYoffset,
      behavior: "smooth",
    });
  }, [postionYoffset]);

  // useEffect(() => {
  //   console.log("33333333333333333333333333333333333333333333333333");
  //   console.log(appliedFilters);
  //   console.log(filteredData);
  //   console.log(appliedFilters);
  //   console.log(searchBarData);
  //   console.log("33333333333333333333333333333333333333333333333333");
  //   console.log(filteredData);
  //   console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  // });

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
      dispatch(putFilteredDataStart({ data: allMediaAds[1]?.all_ads }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMediaAds]);

  return (
    <>
      <BackTotopbutton />
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
              zIndex: 1,
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
            <Box
              sx={{
                opacity: search_loading ? 0.5 : 1,
                disabled: search_loading ? true : false,
              }}
            >
              <AllFilters
                name={"AllAdsPage"}
                pageFilterInfo={appliedFilters}
                search={searchBarData}
                search_type={searchType}
                loading={search_loading}
                ranger={maxRanger}
              />
            </Box>

            <Grid container sx={{ marginTop: 1 }}>
              {Object.keys(appliedFilters).map((filter, index) => {
                // console.log(filter)
                // console.log(Object.keys(AllAdsPage["appliedFilters"]))
                // console.log(AllAdsPage["appliedFilters"][filter]);
                // console.log(
                //   "99999999999999999999999999999999999999999999999999999999"
                // );
                return (
                  appliedFilters[filter]["Message"] &&
                  (console.log("cominnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"),
                  (
                    <Chip
                      key={index}
                      color="primary"
                      label={appliedFilters[filter]["Message"]}
                      deleteIcon={
                        <CloseIcon
                          style={{
                            color: "white",
                            backgroundColor: "#00CBFF",
                          }}
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
                        // console.table(FilterRemoveData);
                        console.log(FilterRemoveData);
                        dispatch(
                          clearSingleFilteredDataStart({
                            name: filter,
                            data: FilterRemoveData,
                            // componentName: "AllAdsPage",
                          })
                        );

                        // dispatch(applyallfilters());
                        // console.log(document.getElementById("searchbar").value);
                        console.log(
                          "-----------======================================" +
                            searchBarData.length
                        );
                        searchBarData !== ""
                          ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(searchBarData))
                          : dispatch(applyallfilters());

                        // dispatch(SortvalueStart());
                        // setAppliedFilters((pre) => ({
                        //   ...pre,
                        //   [`${filter}`]: FilterRemoveData,
                        // }));

                        console.log(filter);
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: "#00CBFF",
                        // marginLeft: 1,
                        margin: 0.5,
                      }}
                    />
                  ))
                );
              })}
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <SortFilter loading={search_loading} sortDetail={sortFilter} name={"AllAdsPage"} />
          </Grid>
          
            <Grid
              item
              // xs={12}
              sx={{
                // opacity: search_loading ? 0.5 : 1,
                disabled: search_loading ? true : false,
              }}
            >
             

              { search_loading? <Box
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
                  zIndex: 1,
                  visibility: search_loading ? "visible" : "hidden",
                }}
              />
            </Box>:<Grid
                container
                spacing={2}
                sx={{
                  marginTop: "10px",
                }}
              >
                
               
                
                {filteredData?.map((ads, index) => (
                // console.log(O)),console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*********************")  ,// console.log("first", ads),
                  <ThumbNailBox
                    adInfo={ads}
                    index={index}
                    deleteId={savedIds?.includes(ads.id) ? ads.id : false}
                    key={index}
                  />
                ))}
              </Grid>}
            </Grid>
         
        </Grid>
      )}
    </>
  );
};

export default Addlibrarydatabase;
