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
  // clearSingleFilteredDataStart,
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
import { clearSingleFilteredDataStart, loadMediaStart } from "../redux/ducks/mediaAds";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const { allMediaAdsData,allMediaAds,appliedFilters,maxRanger, page_index, loading, } = useSelector((state) => state.allMediaAds);
  const {
    filteredData,
    // appliedFilters,
    sortFilter,
    searchBarData,
    postionYoffset,
    search_loading,
    searchType,
    // maxRanger,
  } = useSelector((state) => state.filteredData);

  console.log("--------------------------------------------------------------------------------")
  console.log("*********--",allMediaAds)
  const { savedIds, savedAdsLocal, save_loading } = useSelector((state) => state.savedclienads);

  // function handleScroll(){
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  // }

  const fetchData = () => {
    console.log("::::::::::::::::::::::")
    dispatch(loadMediaStart({
      page_index: page_index+1,
      startdate:appliedFilters?.StartRunningDate?.startdate,
      enddate: appliedFilters?.StartRunningDate?.enddate,
      adcount:
        appliedFilters?.AdCount?.min > maxRanger.AdCount.min ||
        appliedFilters?.AdCount?.max < maxRanger.AdCount.max
          ? [
              appliedFilters?.AdCount?.min,
              appliedFilters?.AdCount?.max,
            ]
          : [],
      adstatus: appliedFilters?.AdStatus?.status,
      fb_likes:
        appliedFilters?.FacebookLikes?.min > maxRanger.FacebookLikes.min ||
        appliedFilters?.FacebookLikes?.max < maxRanger.FacebookLikes.max
          ? [
              appliedFilters?.FacebookLikes?.min,
              appliedFilters?.FacebookLikes?.max,
            ]
          : [],
      insta_followers:
        appliedFilters?.InstragramLike?.min > maxRanger.InstragramLike.min ||
        appliedFilters?.InstragramLike?.max < maxRanger.InstragramLike.max
          ? [
              appliedFilters?.InstragramLike?.min,
              appliedFilters?.InstragramLike?.max,
            ]
          : [],
      media_type:appliedFilters?.MediaType?.selectedData,
      cta_status:
        appliedFilters?.PurchaseType?.selctedButton,

      // increaseCount: false,
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: postionYoffset,
      behavior: "smooth",
    });
  }, [postionYoffset]);

  useEffect(() => {
    console.log(savedIds);
    console.log(savedAdsLocal);
    console.log("------------------------------00000000000000");
  });
  useEffect(() => {
    if (Object(filteredData)?.length) {
      dispatch(loadFilteredDataStart());
    } else {
      dispatch(putFilteredDataStart({ data: allMediaAds[1]?.all_ads }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMediaAds]);
 console.log("***********************",InfiniteScroll)
  return (
    <>
      <BackTotopbutton />
      {/* <InfiniteScroll
        dataLength={allMediaAdsData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<Box sx={{display:"flex",justifyContent:"center"}}>{loading?<h4>Loading...</h4>:null}</Box>}
        > */}
        <Grid
          container
          sx={{
            // opacity: loading ? 0.5 : 1,
            // disabled: loading ? true : false,
            paddingRight: "36px",
          }}
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
                Spy on 100% of the ads ran by over 30,000 active dropshipping stores.
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
                          fetchData();
                         
                          // searchBarData !== ""
                          //   ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(searchBarData))
                          //   : dispatch(applyallfilters());

                         

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
          <Grid container justifyContent="flex-end" sx={{ marginTop: "10px" }}>
            <SortFilter
              loading={search_loading}
              sortDetail={sortFilter}
              name={"AllAdsPage"}
            />
          </Grid>
          <InfiniteScroll
        dataLength={allMediaAdsData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<Box sx={{display:"flex",justifyContent:"center"}}>{loading?<h4>Loading...</h4>:null}</Box>}
        >
          <Grid
            item
            // xs={12}
            sx={{
              // opacity: search_loading ? 0.5 : 1,
              // disabled: loading || search_loading || save_loading? true : false,
              width: "100%",
            }}
          >
           
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "5px",
                opacity: save_loading ? 0.5 : 1,
                // disabled: save_loading ? true : false,
              }}
            >
              {allMediaAdsData?.length ? (
                allMediaAdsData?.map((ads, index) => (
                  <ThumbNailBox
                    adInfo={ads}
                    index={index}
                    deleteId={savedIds?.includes(ads.id) ? ads.id : false}
                    key={index}
                  />
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  No Result
                </Box>
              )}
            </Grid>
            {/* // )} */}
          </Grid>
          </InfiniteScroll>
        </Grid>
      {/* </InfiniteScroll> */}
    </>
  );
};

export default Addlibrarydatabase;