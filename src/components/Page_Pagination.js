import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ThumbNailBox from "./ThumbNailBox";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import {
    clearCashedPageData,
  laodCashedPageData,
  loadFilteredAdsStart,
  loadMoreFilteredAdsStart,
  setCurrentPaginationIndex,
} from "../redux/ducks/filteredAds";
import { useSkipInitialEffect } from "../utils/customHooks";
import { FadeLoader } from "react-spinners";
import { useEffect, useState } from "react";
import emptyImg from "../assets/empty.svg";
import { useLocation } from "react-router-dom";

const PagePagination = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const filteredAds = useSelector((state) => state.filteredAds);
  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const [queryObject, setQueryObject] = useState({});
  useEffect(() => {
    console.log("0-0", filteredAds.filterData);
  });
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
        allAdsPerams?.appliedFilters?.FacebookLikes?.chipText !== ""
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
        ? allAdsPerams?.searchType === "All these words"
          ? allAdsPerams?.searchBarData.split(" ")
          : null
        : null,

      phrase: allAdsPerams?.searchBarData.length
        ? allAdsPerams?.searchType === "Exact Phrase"
          ? allAdsPerams?.searchBarData.split(",")
          : null
        : null,
        number_of_pagead:12
    };
    setQueryObject(queryObject);
  }, [
    allAdsPerams.appliedFilters,
    allAdsPerams.sortFilter,
    allAdsPerams.pageIndex,
    allAdsPerams.searchBarData,
  ]);

  useSkipInitialEffect(() => {
    console.log("0-0 index of stored page",Object.keys(filteredAds?.filterData).includes(allAdsPerams?.pageIndex.toString()))
    if (
      Object.keys(filteredAds?.filterData).includes(allAdsPerams?.pageIndex.toString())
    ) {
      dispatch(laodCashedPageData(allAdsPerams?.pageIndex));
    } else {
      if (allAdsPerams?.pageIndex > 0) {
        dispatch(
          loadMoreFilteredAdsStart({
            ...queryObject,
            page_index: allAdsPerams?.pageIndex,
          })
        );
      } else {
        console.log("0-0 come in")
        dispatch(loadFilteredAdsStart({ ...queryObject, page_index: 0 }));
      }
    }
  }, [dispatch, queryObject]);

  useSkipInitialEffect(() => {
    if (allAdsPerams.searchBarData.length > 0) {
        location.pathname==="/" && dispatch(clearCashedPageData());
      setQueryObject({
        ...queryObject,
        keywords: allAdsPerams?.searchBarData.length
          ? allAdsPerams?.searchType === "All these words"
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
      {/* <Pagination count={10} showLastButton={false} onChange={()=>{}}/> */}

      {filteredAds?.loading && filteredAds?.filteredAds.length === 0 ? (
        <Box
          className="loader"
          style={{
            // opacity:0.5,
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >{console.log("8989",filteredAds?.paginationIndex)}
        <Pagination
          count={filteredAds?.totalPages}
          size={"large"}           
          page={filteredAds?.paginationIndex+1}
          onChange={(e, p) => {
            //console.log("9909",e)
            dispatch(setCurrentPaginationIndex(p-1))
            dispatch(allAdsPeramsDuck.setDatabasePageIndex(p - 1));
          }}
        />
      </Box>
    </>
  );
};

export default PagePagination;
