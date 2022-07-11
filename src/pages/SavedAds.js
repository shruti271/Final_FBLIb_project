import React, { useEffect } from "react";
import { Chip, Grid, Stack, Typography } from "@mui/material";
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
  putSavedAdsFilteredDataStart,
  SavedAdsclearSingleFilteredDataStart,
  SavedAdssearchStart,
  SavedAdsSortvalueStart,
} from "../redux/ducks/saveAds_clientSide";
import CloseIcon from "@mui/icons-material/Close";
import SortFilter from "../components/SortFilter";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

const SavedAds = () => {
  const dispatch = useDispatch();

  const {
    savedAdsLocal,
    SavedAppliedFilters,
    searchBarData,
    sortFilter,
    filteredData,
    searchType,
  } = useSelector((state) => state.savedclienads);
  // savedAdsClienSideReducer
  // const { savedAds, loading } = useSelector((state) => state.savedAds);
  const [filterActivate, setFilterActivate] = React.useState(true);
  useEffect(() => {
    if (!filteredData) dispatch(putSavedAdsFilteredDataStart(savedAdsLocal));
  }, [dispatch, filteredData, savedAdsLocal]);

  // useEffect(()=>{
  //   console.log(".............................++++++++++++++")
  //   console.log(SavedAppliedFilters)
  //   console.log(filteredData)
  //   console.log(".............................++++++++++++++")
  // })
  return (
    <>
    <BackTotopbutton/>
      <Stack direction={"column"}>
        <Typography>
          <b>Saved Ads</b>
        </Typography>

        <Box sx={{ marginRight: 5 }}>
          {/* <Grid  container justifyContent="flex-end"> */}
          {/* <Grid item>     */}
          <Grid container>
            {filterActivate ? (
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
                />
                <Grid container sx={{ marginTop: 1 }}>
                  {Object.keys(SavedAppliedFilters).map((filter, index) => {
                    // console.log(filter)
                    // console.log(Object.keys(SavedAppliedFilters))
                    // console.log(SavedAppliedFilters[filter]);
                    // console.log(
                    //   "99999999999999999999999999999999999999999999999999999999"
                    // );
                    return (
                      SavedAppliedFilters[filter]["Message"] &&
                      (console.log("cominnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"),
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
                            const filters = Object(SavedAppliedFilters[filter]);
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
                                  : typeof SavedAppliedFilters[filter][dum] ===
                                    "string"
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
                              SavedAdsclearSingleFilteredDataStart({
                                name: filter,
                                data: FilterRemoveData,
                                // componentName: "AllAdsPage",
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
                            document.getElementById("searchbar").value !== ""
                              ? dispatch(SavedAdssearchStart(searchBarData))
                              : dispatch(applySavedAdsallfilters());
                            dispatch(SavedAdsSortvalueStart());

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
            ) : null}
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
                        color:"white"
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
              <SortFilter sortDetail={sortFilter} name={"SavedPage"} />
              {/* <Typography>Sort by</Typography>
            <img
              alt="arrowdown"
              src={Arrowdown}
              // className={classes.DropDownArrow}
            /> */}
            </Stack>
          </Grid>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Object.keys(savedAdsLocal).length ? (
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "10px",
                  // opacity: loading ? 0.5 : 1,
                  // disabled: loading ? true : false,
                }}
              >
                {filteredData.map((ads, index) => (
                  <ThumbNailBox
                    adInfo={ads}
                    index={index}
                    key={index}
                    deleteId={ads.adID}
                  />
                ))}
              </Grid>
            ) : (
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
            )}
          </Stack>

          {/* </Grid> */}
        </Box>
      </Stack>
    </>
  );
};

export default SavedAds;
