import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { Grid } from "@material-ui/core";
import { Box, Input, Pagination, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ThumbNailBox from "./ThumbNailBox";
import { useSkipInitialEffect } from "../utils/customHooks";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import {
  clearCashedPageData,
  laodCashedPageData,
  loadFilteredAdsStart,
  setCurrentPaginationIndex,
} from "../redux/ducks/filteredAds";
import emptyImg from "../assets/empty.svg";

const AdsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();

  const filteredAds = useSelector((state) => state.filteredAds);
  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const [queryObject, setQueryObject] = useState({
    startdate: allAdsPerams?.appliedFilters?.StartRunningDate?.startdate,
    enddate: allAdsPerams?.appliedFilters?.StartRunningDate?.enddate,
    adcount:
      allAdsPerams?.appliedFilters?.AdCount?.chipText !== ""
        ? [
            allAdsPerams?.appliedFilters?.AdCount?.min,
            allAdsPerams?.appliedFilters?.AdCount?.max,
          ]
        : [],
    adstatus: allAdsPerams?.appliedFilters?.AdStatus?.selectedValue,
    fb_likes:
      allAdsPerams?.appliedFilters?.FacebookLikes?.chipText?.length !== 0
        ? [
            allAdsPerams?.appliedFilters?.FacebookLikes?.min,
            allAdsPerams?.appliedFilters?.FacebookLikes?.max,
          ]
        : [],
    insta_followers:
      allAdsPerams?.appliedFilters?.InstagramFollowers?.chipText !== ""
        ? [
            allAdsPerams?.appliedFilters?.InstagramFollowers?.min,
            allAdsPerams?.appliedFilters?.InstagramFollowers?.max,
          ]
        : [],
    media_type: allAdsPerams?.appliedFilters?.MediaType?.selectedValue,
    cta_status: allAdsPerams?.appliedFilters?.ButtonStatus?.selectedValue,

    sort_by:
      allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
      allAdsPerams?.sortFilter?.type?.selectedValue === "false"
        ? ""
        : allAdsPerams?.sortFilter?.type?.selectedValue,

    increaseCount:
      allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
      allAdsPerams?.sortFilter?.type?.selectedValue === "false"
        ? allAdsPerams?.sortFilter?.type?.selectedValue
        : null,

    order_by:
      allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
      allAdsPerams?.sortFilter?.type?.selectedValue === "false"
        ? ""
        : allAdsPerams?.sortFilter?.order?.selectedValue,

    keywords: allAdsPerams?.searchBarData.length
      ? allAdsPerams?.searchType === "Ad Text"
        ? allAdsPerams?.searchBarData.split(" ")
        : null
      : null,

    phrase: allAdsPerams?.searchBarData.length
      ? allAdsPerams?.searchType === "Exact Phrase"
        ? allAdsPerams?.searchBarData.split(",")
        : null
      : null,
  });
  const MobileScreenOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const MeduimScreenOnly = useMediaQuery(theme.breakpoints.down("md"));
  const MeduimUpScreenOnly = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    window.scrollTo(0, filteredAds.postionOfPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSkipInitialEffect(() => {
    const queryObject = {
      startdate: allAdsPerams?.appliedFilters?.StartRunningDate?.startdate,
      enddate: allAdsPerams?.appliedFilters?.StartRunningDate?.enddate,
      adcount:
        allAdsPerams?.appliedFilters?.AdCount?.chipText !== ""
          ? [
              allAdsPerams?.appliedFilters?.AdCount?.min,
              allAdsPerams?.appliedFilters?.AdCount?.max,
            ]
          : [],
      adstatus: allAdsPerams?.appliedFilters?.AdStatus?.selectedValue,
      fb_likes:
        allAdsPerams?.appliedFilters?.FacebookLikes?.chipText?.length !== 0
          ? [
              allAdsPerams?.appliedFilters?.FacebookLikes?.min,
              allAdsPerams?.appliedFilters?.FacebookLikes?.max,
            ]
          : [],
      insta_followers:
        allAdsPerams?.appliedFilters?.InstagramFollowers?.chipText !== ""
          ? [
              allAdsPerams?.appliedFilters?.InstagramFollowers?.min,
              allAdsPerams?.appliedFilters?.InstagramFollowers?.max,
            ]
          : [],
      media_type: allAdsPerams?.appliedFilters?.MediaType?.selectedValue,
      cta_status: allAdsPerams?.appliedFilters?.ButtonStatus?.selectedValue,

      sort_by:
        allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        allAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? ""
          : allAdsPerams?.sortFilter?.type?.selectedValue,

      increaseCount:
        allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        allAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? allAdsPerams?.sortFilter?.type?.selectedValue
          : null,

      order_by:
        allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        allAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? ""
          : allAdsPerams?.sortFilter?.order?.selectedValue,

      keywords: allAdsPerams?.searchBarData.length
        ? allAdsPerams?.searchType === "Ad Text"
          ? allAdsPerams?.searchBarData.split(" ")
          : null
        : null,

      phrase: allAdsPerams?.searchBarData.length
        ? allAdsPerams?.searchType === "Exact Phrase"
          ? allAdsPerams?.searchBarData.split(",")
          : null
        : null,
    };
    setQueryObject(queryObject);
  }, [
    allAdsPerams.appliedFilters,
    allAdsPerams.sortFilter,
    // allAdsPerams.pageIndex,  
    allAdsPerams.searchBarData,
  ]);

  useSkipInitialEffect(() => {
    if (
      Object.keys(filteredAds?.filterData).includes(
        allAdsPerams?.pageIndex.toString()
      )
    ) {
      dispatch(laodCashedPageData(filteredAds?.paginationIndex));
    } else {
      dispatch(
        loadFilteredAdsStart({
          ...queryObject,
          page_index: filteredAds?.paginationIndex,
          number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
        })
      );
    }
  }, [dispatch, queryObject,filteredAds?.paginationIndex]);

  useSkipInitialEffect(() => {
    if (allAdsPerams.searchBarData.length > 0) {
      location.pathname === `/` && dispatch(clearCashedPageData());
      setQueryObject({
        ...queryObject,
        keywords: allAdsPerams?.searchBarData.length
          ? allAdsPerams?.searchType === "Ad Text"
            ? allAdsPerams?.searchBarData.split(" ")
            : null
          : null,

        phrase: allAdsPerams?.searchBarData.length
          ? allAdsPerams?.searchType === "Exact Phrase"
            ? allAdsPerams?.searchBarData.split(",")
            : null
          : null,
      });
    }
  }, [dispatch, allAdsPerams.searchType, allAdsPerams.searchBarData]);

  return (
    <>
      {filteredAds?.loading && filteredAds?.filteredAds.length === 0 ? (
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
            width: "90%",
          }}
        >
          <Grid
            container
            sx={{
              marginTop: "5px",
              width: "100%",
            }}
          >
            {filteredAds?.filteredAds?.length !== 0 &&
              filteredAds?.filteredAds?.map((ads, index) => (
                <ThumbNailBox adInfo={ads} index={index} key={index} />
              ))}
            {filteredAds?.filteredAds?.length === 0 &&
              filteredAds?.loading === false && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
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
        }}
      >
        {Object.keys(filteredAds?.filterData).length !== 0 && (
          <Stack
            direction={MobileScreenOnly?"column":"row"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack>
              <Pagination 
                count={filteredAds?.totalPages}
                size={MobileScreenOnly?"small":MeduimUpScreenOnly?"large":"medium"}
                page={filteredAds?.paginationIndex + 1}
                onChange={(e, p) => {
                  // window.history.pushState({}, "", `/page=${p}`);
                  dispatch(setCurrentPaginationIndex(p - 1));
                  dispatch(allAdsPeramsDuck.setDatabasePageIndex(p - 1));
                }}
              />
            </Stack>

            <Stack sx={{paddingTop:MobileScreenOnly?2:""}}>
              <Box
                sx={{ display: "flex", alignItems: "center", justifyContent:"center"}}
              >
                <Typography sx={{ width: "auto", marginRight: 1 }}>
                  <b>{"Go to"}</b>
                </Typography>
                <Input
                  sx={{
                    background: "white",
                    borderRadius: 1,
                    maxWidth: "30%",
                    border: 1,
                    borderColor: "#EBEBEB",
                    pl: 1,
                    // p: 1,
                    // height: "45px",
                  }}
                  // placeholder="Page No."
                  type="number"
                  disableUnderline={true}
                  onKeyUp={(e) => {
                    
                    if (e.key === "Enter") {
                      // window.history.pushState(
                      //   {},
                      //   "",
                      //   `/page=${e.currentTarget.value}`
                      // );
                      
                      dispatch(
                        setCurrentPaginationIndex(e.currentTarget.value - 1)
                      );
                      dispatch(
                        allAdsPeramsDuck.setDatabasePageIndex(
                          e.currentTarget.value.trim() - 1
                        )
                      );
                    }
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        )}
        {/* {Object.keys(filteredAds?.filterData).length !== 0 && (
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
              lg={4}
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pagination
                count={filteredAds?.totalPages}
                size={"large"}
                page={filteredAds?.paginationIndex + 1}
                onChange={(e, p) => {
                  window.history.pushState({}, "", `/page=${p}`);
                  dispatch(setCurrentPaginationIndex(p - 1));
                  dispatch(allAdsPeramsDuck.setDatabasePageIndex(p - 1));
                }}
              />
            </Grid>

            <Grid
              item
              lg={4}
              md={4}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                paddingTop: 2,
                marginTop: MobileScreenOnly ? "20px" : "0px",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", width: "auto" }}
              >
                <Typography sx={{ width: "auto", marginRight: 1 }}>
                  <b>{"Go to"}</b>
                </Typography>
                <Input
                  sx={{
                    background: "white",
                    borderRadius: 1,
                    maxWidth: "20%",
                    border: 1,
                    borderColor: "#EBEBEB",
                    pl: 1,
                    // p: 1,
                    // height: "45px",
                  }}
                  // placeholder="Page No."
                  type="number"
                  disableUnderline={true}
                  onKeyUp={(e) => {
                    
                    if (e.key === "Enter") {
                      
                      
                      dispatch(
                        setCurrentPaginationIndex(e.currentTarget.value - 1)
                      );
                      dispatch(
                        allAdsPeramsDuck.setDatabasePageIndex(
                          e.currentTarget.value.trim() - 1
                        )
                      );
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        )} */}
      </Box>
    </>
  );
};

export default AdsList;
