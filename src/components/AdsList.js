import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ThumbNailBox from "./ThumbNailBox";
import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import {
  loadFilteredAdsStart,
  loadMoreFilteredAdsStart,
} from "../redux/ducks/filteredAds";
import { useSkipInitialEffect } from "../utils/customHooks";
import { FadeLoader } from "react-spinners";
import { useEffect, useState } from "react";
import emptyImg from "../assets/empty.svg";

const AdsList = () => {
  const dispatch = useDispatch();
  const filteredAds = useSelector((state) => state.filteredAds);
  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const [queryObject, setQueryObject] = useState({});

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

          keywords:
          allAdsPerams?.searchType === "All these words"
            ? allAdsPerams?.searchBarData.split(" ")
            : null,

        phrase:
          allAdsPerams?.searchType === "Exact Phrase"
            ? allAdsPerams?.searchBarData.split(",")
            : null,
    };
    setQueryObject(queryObject);
  }, [
    allAdsPerams.appliedFilters,
    allAdsPerams.sortFilter,
    allAdsPerams.pageIndex,
    allAdsPerams.searchBarData
  ]);

  useSkipInitialEffect(() => {
    if (allAdsPerams?.pageIndex > 0) {
      dispatch(
        loadMoreFilteredAdsStart({
          ...queryObject,
          page_index: allAdsPerams?.pageIndex,
        })
      );
    } else {
      dispatch(loadFilteredAdsStart({ ...queryObject, page_index: 0 }));
    }
  }, [dispatch, queryObject]);

  useSkipInitialEffect(() => {
    if (allAdsPerams.searchBarData.length > 0) {
      setQueryObject({
        ...queryObject,
        keywords:
          allAdsPerams?.searchType === "All these words"
            ? allAdsPerams?.searchBarData.split(" ")
            : null,

        phrase:
          allAdsPerams?.searchType === "Exact Phrase"
            ? allAdsPerams?.searchBarData.split(",")
            : null,
      });
    }
  }, [dispatch, allAdsPerams.searchType, allAdsPerams.searchBarData]);

  return (
    <>
    { filteredAds?.loading && filteredAds?.filteredAds.length === 0 ?   <Box
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
          </Box> : 
          <InfiniteScroll
          dataLength={filteredAds?.filteredAds.length} //This is important field to render the next data
          next={() =>
            dispatch(
              allAdsPeramsDuck.setDatabasePageIndex(allAdsPerams?.pageIndex + 1)
            )
          }
          hasMore={filteredAds.hasMoreData}
          loader={
            filteredAds?.loading ? (
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
            ) : null
          }
        >
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
        </InfiniteScroll>
          }
    </>
  );
};

export default AdsList;
