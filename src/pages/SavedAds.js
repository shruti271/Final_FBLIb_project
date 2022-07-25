



import React, { useEffect } from "react";
import { Chip, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ThumbNailBox from "../components/ThumbNailBox";
import filter from "../assets/filter.svg";
import noSavedAdsImage from "../assets/noSavedAdsImage.svg";
import Arrowdown from "../assets/Arrowdown.svg";
import { Box } from "@material-ui/core";
import BackTotopbutton from "../pages/Backtotopbutton";
import AllFilters from "../components/AllFilters";
import disabledFilter from "../assets/disabledFilter.svg";
// import { loadSavedAdsStart } from "../redux/ducks/saveAds";
import { useDispatch } from "react-redux";
// import { putFilteredDataStart } from "../redux/ducks/filtered_Data";
import {
  applySavedAdsallfilters,
  loadSavedAdsStart,
  putSavedAdsFilteredDataStart,
  SavedAdsclearSingleFilteredDataStart,
  SavedAdsFilterAfterSearchStart,
  SavedAdssearchStart,
  SavedAdsSortvalueStart,
} from "../redux/ducks/saveAds_clientSide";
import CloseIcon from "@mui/icons-material/Close";
import SortFilter from "../components/SortFilter";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import InfiniteScroll from "react-infinite-scroll-component";

const SavedAds = () => {
  const dispatch = useDispatch();

  const {
    savedAdsLocal,
    SavedAppliedFilters,
    searchBarData,
    sortFilter,
    filteredData,
    searchType,
    search_loading,
    save_loading,
    maxRanger,
    page_index,
  } = useSelector((state) => state.savedclienads);
  // savedAdsClienSideReducer
  // const { savedAds, loading } = useSelector((state) => state.savedAds);
  const [filterActivate, setFilterActivate] = React.useState(true);
  // useEffect(() => {
  //   if (!filteredData) {dispatch(putSavedAdsFilteredDataStart(savedAdsLocal));
  //   }

  // }, [dispatch, filteredData, savedAdsLocal]);

  // useEffect(()=>{
  //   console.log(".............................++++++++++++++")
  //   console.log(SavedAppliedFilters)
  //   console.log(filteredData)
  //   console.log(".............................++++++++++++++")
  // })
  const fetchData = () => {
    console.log("::::::::::::::::::::::");
    dispatch(
      loadSavedAdsStart({
        page_index: page_index + 1,
        startdate: SavedAppliedFilters?.StartRunningDate?.startdate,
        enddate: SavedAppliedFilters?.StartRunningDate?.enddate,
        adcount:
          SavedAppliedFilters?.AdCount?.min > maxRanger.AdCount.min ||
          SavedAppliedFilters?.AdCount?.max < maxRanger.AdCount.max
            ? [
                SavedAppliedFilters?.AdCount?.min,
                SavedAppliedFilters?.AdCount?.max,
              ]
            : [],
        adstatus: SavedAppliedFilters?.AdStatus?.status,
        fb_likes:
          SavedAppliedFilters?.FacebookLikes?.min >
            maxRanger.FacebookLikes.min ||
          SavedAppliedFilters?.FacebookLikes?.max < maxRanger.FacebookLikes.max
            ? [
                SavedAppliedFilters?.FacebookLikes?.min,
                SavedAppliedFilters?.FacebookLikes?.max,
              ]
            : [],
        insta_followers:
          SavedAppliedFilters?.InstragramLike?.min >
            maxRanger.InstragramLike.min ||
          SavedAppliedFilters?.InstragramLike?.max <
            maxRanger.InstragramLike.max
            ? [
                SavedAppliedFilters?.InstragramLike?.min,
                SavedAppliedFilters?.InstragramLike?.max,
              ]
            : [],
        media_type: SavedAppliedFilters?.MediaType?.selectedData,
        cta_status: SavedAppliedFilters?.PurchaseType?.selctedButton,

        // increaseCount: false,
      })
    );
  };
  return (
    <>
      <BackTotopbutton />
      {/* <Stack direction={"column"}> */}
        <Typography>
          <b>Saved Ads</b>
        </Typography>
        {/* <Grid
          container
          sx={{
            // opacity: loading ? 0.5 : 1,
            // disabled: loading ? true : false,
            paddingRight: "36px",
          }}
        > */}
        <Grid container sx={{ marginRight: 5 }}>
          <Grid item>
            {filterActivate && (
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
                <AllFilters
                  name={"SavedPage"}
                  pageFilterInfo={SavedAppliedFilters}
                  search={searchBarData}
                  search_type={searchType}
                  loading={search_loading}
                  ranger={maxRanger}
                />
                {search_loading ? (
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
                        left: "50%",
                        opacity: 1,
                        zIndex: 1,
                        visibility: search_loading ? "visible" : "hidden",
                      }}
                    />
                  </Box>
                ) : (
                  <Grid
                    container
                    sx={{
                      marginTop: 1,
                      // opacity: search_loading ? 0.5 : 1,
                      // disabled: search_loading ? true : false,
                    }}
                  >
                    {Object.keys(SavedAppliedFilters).map((filter, index) => {
                      // console.log(filter)
                      // console.log(Object.keys(SavedAppliedFilters))
                      // console.log(SavedAppliedFilters[filter]);
                      // console.log(
                      //   "99999999999999999999999999999999999999999999999999999999"
                      // );
                      return (
                        SavedAppliedFilters[filter]["Message"] &&
                        (console.log(
                          "cominnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
                        ),
                        (
                          <Chip
                            key={index}
                            color="primary"
                            label={SavedAppliedFilters[filter]["Message"]}
                            deleteIcon={
                              <CloseIcon
                                style={{
                                  color: "white",
                                  backgroundColor: "#00CBFF",
                                }}
                              />
                            }
                            onDelete={() => {
                              const filters = Object(
                                SavedAppliedFilters[filter]
                              );
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
                                // console.log(typeof SavedAppliedFilters[filter][dum]);
                                FilterRemoveData[dum] =
                                  typeof SavedAppliedFilters[filter][dum] ===
                                  "number"
                                    ? dum === AdsRemovedElement.MIN
                                      ? 1
                                      : filter === "FacebookLikes"
                                      ? 100000
                                      : filter === "InstragramLike"
                                      ? 10000
                                      : 1000
                                    : typeof SavedAppliedFilters[filter][
                                        dum
                                      ] === "string"
                                    ? dum === AdsRemovedElement.MEDIATYPE
                                      ? dum === AdsRemovedElement.STATUS
                                        ? ""
                                        : ""
                                      : ""
                                    : new Date();
                              }
                              console.table(FilterRemoveData);
                              console.log(FilterRemoveData);
                              dispatch(
                                SavedAdsclearSingleFilteredDataStart({
                                  name: filter,
                                  data: FilterRemoveData,
                                  // componentName: "AllAdsPage",
                                })
                              );
                              dispatch(
                                loadSavedAdsStart({
                                  page_index: 0,
                                  startdate: SavedAppliedFilters?.StartRunningDate?.startdate,
                                  enddate: SavedAppliedFilters?.StartRunningDate?.enddate,
                                  adcount:
                                    SavedAppliedFilters?.AdCount?.min > maxRanger.AdCount.min ||
                                    SavedAppliedFilters?.AdCount?.max < maxRanger.AdCount.max
                                      ? [
                                          SavedAppliedFilters?.AdCount?.min,
                                          SavedAppliedFilters?.AdCount?.max,
                                        ]
                                      : [],
                                  adstatus: SavedAppliedFilters?.AdStatus?.status,
                                  fb_likes:
                                    SavedAppliedFilters?.FacebookLikes?.min >
                                      maxRanger.FacebookLikes.min ||
                                    SavedAppliedFilters?.FacebookLikes?.max < maxRanger.FacebookLikes.max
                                      ? [
                                          SavedAppliedFilters?.FacebookLikes?.min,
                                          SavedAppliedFilters?.FacebookLikes?.max,
                                        ]
                                      : [],
                                  insta_followers:
                                    SavedAppliedFilters?.InstragramLike?.min >
                                      maxRanger.InstragramLike.min ||
                                    SavedAppliedFilters?.InstragramLike?.max <
                                      maxRanger.InstragramLike.max
                                      ? [
                                          SavedAppliedFilters?.InstragramLike?.min,
                                          SavedAppliedFilters?.InstragramLike?.max,
                                        ]
                                      : [],
                                  media_type: SavedAppliedFilters?.MediaType?.selectedData,
                                  cta_status: SavedAppliedFilters?.PurchaseType?.selctedButton,
                          
                                  // increaseCount: false,
                                })
                              );
                              // dispatch(
                              //   SetSortOrdervalueStart({
                              //     name: "type",
                              //     data: "",
                              //   })
                              // );
                              // dispatch(applyallfilters());
                              console.log(
                                document.getElementById("searchbar").value
                              );
                              console.log(
                                "-----------======================================"
                              );
                              // searchBarData !== ""
                              //   ? dispatch(SavedAdssearchStart(searchBarData))
                              //   : dispatch(applySavedAdsallfilters());
                              document.getElementById("searchbar").value
                                ? dispatch(SavedAdsFilterAfterSearchStart())
                                : dispatch(applySavedAdsallfilters());
                              // dispatch(SavedAdsSortvalueStart());

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
                )}
              </Grid>
            ) }
          </Grid>
          <Grid container justifyContent="flex-end">
            <Stack
              direction={"row"}
              sx={{
                marginRight: "30px",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                marginTop: 1,
              }}
              spacing={1}
            >
              <Box
                style={{
                  backgroundColor: "#00CBFF",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "2px",
                  opacity: search_loading ? 0.5 : 1,
                  disabled: search_loading ? true : false,
                }}
              >
                {filterActivate ? (
                  <img
                    src={filter}
                    alt="savedAds"
                    style={{
                      width: "20px",
                      height: "20px",
                      float: "right",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setFilterActivate(false);
                    }}
                  />
                ) : (
                  <FilterAltOffIcon
                    style={{
                      width: "20px",
                      height: "20px",
                      float: "right",
                      cursor: "pointer",
                      color: "white",
                    }}
                    onClick={() => {
                      setFilterActivate(true);
                    }}
                  />
                  // <img
                  //   src={disabledFilter}
                  //   alt="savedAds"
                  //   style={{
                  //     width: "20px",
                  //     height: "20px",
                  //     float: "right",
                  //     cursor: "pointer",
                  //   }}
                  //   onClick={() => {
                  //     setFilterActivate(true);
                  //   }}
                  // />
                )}
              </Box>
              <SortFilter
                loading={search_loading}
                sortDetail={sortFilter}
                name={"SavedPage"}
              />
            </Stack>
          </Grid>
          <Grid item >
          <InfiniteScroll
        dataLength={savedAdsLocal.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>{save_loading?<h4>Loading...</h4>:null}</Box>}
        >
          <Grid
            item
            // xs={12}
            sx={{
           
              width: "100%",
            }}
          >
           
            <Grid
              container
              // spacing={2}
              sx={{
                marginTop: "5px",
                width:"100%"
                // opacity: save_loading ? 0.5 : 1,
                // disabled: save_loading ? true : false,
              }}
            >
              {savedAdsLocal?.length !==0 && (
                savedAdsLocal?.map((ads, index) => (
                  <ThumbNailBox
                    adInfo={ads}
                    index={index}
                    deleteId={ads.id}
                    key={index}
                  />
                ))
              ) }
                {savedAdsLocal?.length === 0 && save_loading === false && <Grid>
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <Typography>
                  Nothing to show. Click the star icon in the adlibrary database
                  tab to save ads here.
                </Typography>
                <img
                  src={noSavedAdsImage}
                  alt="NoSavedAds"
                  style={{ width: "50%", height: "30%" }}
                  // className={classes.saveicon}
                />
              </Stack>
              </Grid>
              }
            </Grid>
            {/* // )} */}
          </Grid>
          </InfiniteScroll>
          </Grid>
        </Grid>
      {/* </Stack> */}
    </>
  );
};

export default SavedAds;
