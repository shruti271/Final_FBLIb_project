import { Grid } from "@material-ui/core";
import ThumbNailBox from "./ThumbNailBox";
import { Box, Input, Pagination, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadsavedFilteredAdsStart,
  setSavedCurrentPaginationAds,
} from "../redux/ducks/filteredSavedAds";
import { useSkipInitialEffect } from "../utils/customHooks";
import emptyImg from "../assets/empty.svg";
import { FadeLoader } from "react-spinners";
import { useEffect, useMemo, useState } from "react";

const SavedAdsList = () => {
  const dispatch = useDispatch();
  const filteredSavedAds = useSelector((state) => state.filteredSavedAds);
  const { paginationIndex, SavedCurrentPage, totalAds } = useSelector(
    (state) => state.filteredSavedAds
  );
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);
  const [queryObject, setQueryObject] = useState({});
  // const [savepage, setSavePage] = useState(1);
  const theme = useTheme();
  const MobileScreenOnly = useMediaQuery(theme.breakpoints.only("xs"));

// console.log("aaagapnpati",paginationIndex)
  const page = useMemo(() => {return {paginationIndex}}, [paginationIndex])

  useEffect(()=>{
    console.log("aaagapnpati ----------------- useefct ",paginationIndex)
    window.history.pushState(
      {},
      "",
      `/savedAds/page=${paginationIndex}`
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])

  useEffect(() => {
    filteredSavedAds.filteredSavedAds.length &&
      dispatch(
        setSavedCurrentPaginationAds({
          start:
            (paginationIndex - 1) * process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
          end: paginationIndex * process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
          currentPage: paginationIndex,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filteredSavedAds.filteredSavedAds]);

  console.log("9-0-",paginationIndex)
  useSkipInitialEffect(() => {
    const queryObject = {
      startdate: savedAdsPerams?.appliedFilters?.StartRunningDate?.startdate,
      enddate: savedAdsPerams?.appliedFilters?.StartRunningDate?.enddate,
      adcount:
        savedAdsPerams?.appliedFilters?.AdCount?.min >
          savedAdsPerams?.maxRanger.AdCount?.min ||
        savedAdsPerams?.appliedFilters?.AdCount?.max <
          savedAdsPerams?.maxRanger.AdCount?.max
          ? [
              savedAdsPerams?.appliedFilters?.AdCount?.min,
              savedAdsPerams?.appliedFilters?.AdCount?.max,
            ]
          : [],
      adstatus: savedAdsPerams?.appliedFilters?.AdStatus?.selectedValue,
      fb_likes:
        savedAdsPerams?.appliedFilters?.FacebookLikes?.min >
          savedAdsPerams?.maxRanger.FacebookLikes?.min ||
        savedAdsPerams?.appliedFilters?.FacebookLikes?.max <
          savedAdsPerams?.maxRanger.FacebookLikes?.max
          ? [
              savedAdsPerams?.appliedFilters?.FacebookLikes?.min,
              savedAdsPerams?.appliedFilters?.FacebookLikes?.max,
            ]
          : [],
      insta_followers:
        savedAdsPerams?.appliedFilters?.InstagramFollowers?.min >
          savedAdsPerams?.maxRanger.InstagramFollowers?.min ||
        savedAdsPerams?.appliedFilters?.InstagramFollowers?.max <
          savedAdsPerams?.maxRanger.InstagramFollowers?.max
          ? [
              savedAdsPerams?.appliedFilters?.InstagramFollowers?.min,
              savedAdsPerams?.appliedFilters?.InstagramFollowers?.max,
            ]
          : [],
      media_type: savedAdsPerams?.appliedFilters?.MediaType?.selectedValue,
      cta_status: savedAdsPerams?.appliedFilters?.ButtonStatus?.selectedValue,

      sort_by:
        savedAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        savedAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? ""
          : savedAdsPerams?.sortFilter?.type?.selectedValue,

      increaseCount:
        savedAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        savedAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? savedAdsPerams?.sortFilter?.type?.selectedValue
          : null,

      order_by:
        savedAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        savedAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? ""
          : savedAdsPerams?.sortFilter?.order?.selectedValue,

      keywords: savedAdsPerams?.searchBarData.length
        ? savedAdsPerams?.searchType === "Ad Text"
          ? savedAdsPerams?.searchBarData.split(" ")
          : null
        : null,

      phrase: savedAdsPerams?.searchBarData.length
        ? savedAdsPerams?.searchType === "Exact Phrase"
          ? savedAdsPerams?.searchBarData.split(",")
          : null
        : null,
    };
    setQueryObject(queryObject);
  }, [
    savedAdsPerams.appliedFilters,
    savedAdsPerams.sortFilter,
    savedAdsPerams.pageIndex,
    savedAdsPerams.searchBarData,
  ]);

  useSkipInitialEffect(() => {
    dispatch(
      loadsavedFilteredAdsStart({
        ...queryObject,
        number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
      })
    );
  }, [dispatch, queryObject]);

  useSkipInitialEffect(() => {
    if (savedAdsPerams.searchBarData.length > 0) {
      setQueryObject({
        ...queryObject,
        keywords: savedAdsPerams?.searchBarData.length
          ? savedAdsPerams?.searchType === "Ad Text"
            ? savedAdsPerams?.searchBarData.split(" ")
            : null
          : null,

        phrase: savedAdsPerams?.searchBarData.length
          ? savedAdsPerams?.searchType === "Exact Phrase"
            ? savedAdsPerams?.searchBarData.split(",")
            : null
          : null,
      });
    }
  }, [dispatch, savedAdsPerams.searchType, savedAdsPerams.searchBarData]);

  return (
    <Box>
      {filteredSavedAds?.loading &&
      filteredSavedAds?.filteredSavedAds.length === 0 ? (
        <Box
          className="loader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FadeLoader
            color="#00BFFF"
            cssOverride={{ top: "0px", marginTop: "35px" }}
          />
        </Box>
      ) : (
        <Grid
          item
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            sx={{
              marginTop: "5px",
              width: "100%",
            }}
          >
            {filteredSavedAds?.filteredSavedAds?.length !== 0 &&
              SavedCurrentPage.map((ads, index) => (
                <ThumbNailBox adInfo={ads} index={index} key={index} />
              ))}
            {filteredSavedAds?.filteredSavedAds?.length === 0 &&
              filteredSavedAds?.loading === false && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "100px",
                  }}
                >
                  <Stack>
                    <img src={emptyImg} alt="" />
                    <Typography sx={{ color: "#808080" }}>
                      No Records Found
                    </Typography>
                  </Stack>
                </Box>
              )}
          </Grid>
        </Grid>
      )}
      <Box
        sx={{
          width: "100%",
          marginBottom: 5,
          marginTop: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!filteredSavedAds?.loading &&
          filteredSavedAds?.filteredSavedAds?.length !== 0 && (
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                lg={6}
                xs={12}
                md={9}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  count={Math.ceil(
                    totalAds / process.env.REACT_APP_NO_OF_ADS_PER_PAGE
                  )}
                  size={"large"}
                  page={paginationIndex}
                  onChange={(e, p) => {
                  
                    dispatch(
                      setSavedCurrentPaginationAds({
                        start:
                          (p - 1) * process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
                        end: p * process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
                        currentPage: p,
                      })
                    );
                  }}
                />
              </Grid>
              <Grid
                item
                lg={2}
                md={3}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 2,
                  marginTop:MobileScreenOnly?"20px":"0px"
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "auto" }}
                >
                  <Typography sx={{ width: "auto", marginRight: 1 }}>
                    {"Go to"}
                  </Typography>
                  <Input
                    sx={{
                      background: "white",
                      borderRadius: 1,
                      maxWidth: "40%",
                      border: 1,
                      borderColor: "#EBEBEB",
                      pl: 1,
                      p: 1,
                      height: "45px",
                    }}
                    placeholder="Page No."
                    type="number"
                    disableUnderline={true}
                    onKeyUp={(e) => {
                      console.log("enter");
                      if (e.key === "Enter") {
                                            

                        dispatch(
                          setSavedCurrentPaginationAds({
                            start:
                              (e.currentTarget.value - 1) *
                              process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
                            end:
                              e.currentTarget.value *
                              process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
                            currentPage: Number(e.currentTarget.value),
                          })
                        );
                      }
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            )} 
      </Box>
    </Box>
  );
};

export default SavedAdsList;
