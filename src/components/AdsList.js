import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ThumbNailBox from "./ThumbNailBox";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import { loadFilteredAdsStart, loadMoreFilteredAdsStart } from "../redux/ducks/filteredAds";
import { useSkipInitialEffect } from "../utils/customHooks";
import { FadeLoader } from "react-spinners";

const AdsList = () => {

    const dispatch     = useDispatch();
    const filteredAds  = useSelector((state) => state.filteredAds);
    const allAdsPerams = useSelector((state) => state.allAdsPerams);

    useSkipInitialEffect(() => {
        const queryObject = {
          startdate: allAdsPerams?.appliedFilters?.StartRunningDate?.startdate,
          enddate: allAdsPerams?.appliedFilters?.StartRunningDate?.enddate,
          adcount:allAdsPerams?.appliedFilters?.AdCount?.chipText !==""
              ? [
                  allAdsPerams?.appliedFilters?.AdCount?.min,
                  allAdsPerams?.appliedFilters?.AdCount?.max,
                ]
              : [],
          adstatus: allAdsPerams?.appliedFilters?.AdStatus?.selectedValue,
          fb_likes:
          allAdsPerams?.appliedFilters?.FacebookLikes?.chipText !==""          
              ? [
                  allAdsPerams?.appliedFilters?.FacebookLikes?.min,
                  allAdsPerams?.appliedFilters?.FacebookLikes?.max,
                ]
              : [],
          insta_followers:allAdsPerams?.appliedFilters?.InstagramFollowers?.chipText !==""
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
          allAdsPerams?.searchBarData !==""? allAdsPerams?.searchType === "All these words"
              ? allAdsPerams?.searchBarData.split(" ")
              : []:[],
    
          phrase:
          allAdsPerams?.searchBarData !==""? allAdsPerams?.searchType === "Exact Phrase"
              ? allAdsPerams?.searchBarData.split(",")
              : []:[],
        };
        if(allAdsPerams?.pageIndex > 0){
            dispatch(loadMoreFilteredAdsStart({ ...queryObject, page_index : allAdsPerams?.pageIndex}));
        }else{
            dispatch(loadFilteredAdsStart({ ...queryObject, page_index : 0}));
        }        
    }, [dispatch, allAdsPerams.appliedFilters, allAdsPerams.sortFilter, allAdsPerams.searchBarData, allAdsPerams.pageIndex]);
// console.log("1123", filteredAds?.filteredAds)
  return (
    <InfiniteScroll      
      dataLength={filteredAds?.filteredAds.length} //This is important field to render the next data
      next={() =>
        dispatch(
          allAdsPeramsDuck.setDatabasePageIndex(allAdsPerams?.pageIndex + 1)
        )
      }
      hasMore={filteredAds.hasMoreData}
      loader={
        filteredAds?.loading ?
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
          <FadeLoader color="#00BFFF" cssOverride={{top:"0px", marginTop:"35px"}}/>
        </Box> : null
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
          // spacing={2}
          sx={{
            marginTop: "5px",
            width: "100%",
            // opacity: save_loading ? 0.5 : 1,
            // disabled: save_loading ? true : false,
          }}
        >
          {filteredAds?.filteredAds?.length !== 0 &&
            filteredAds?.filteredAds?.map((ads, index) => (
              <ThumbNailBox
                adInfo={ads}
                index={index}
                key={index}
              />
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
                <Typography>No Result</Typography>
              </Box>
            )}
        </Grid>
      </Grid>
    </InfiniteScroll>
  );
};

export default AdsList;
