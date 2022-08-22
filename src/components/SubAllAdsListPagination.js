import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ThumbNailBox from "./ThumbNailBox";
import { Box, Pagination, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as subAllAdsDuck from "../redux/ducks/subAllAds";
import { useEffect } from "react";
import { FadeLoader } from "react-spinners";

const SubAllAdsListPagination = () => {
  const dispatch = useDispatch();
  const subAllAds = useSelector((state) => state.subAllAds);

  useEffect(() => {
    console.log("666 suba ll ads in main page", subAllAds.postionOfPage);
    window.scrollTo(0, subAllAds.postionOfPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
useEffect(()=>{
  console.log("909",subAllAds.filterSubAllData)
})
  return (
    <>
    {subAllAds?.loading && subAllAds?.subAllAds.length === 0 ? (
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
      ) :
      (
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
          }}
        >
          {subAllAds?.subAllAds?.length !== 0 &&
            subAllAds?.subAllAds?.map((ads, index) => (
              <ThumbNailBox adInfo={ads} index={index} key={index} />
            ))}
          {subAllAds?.subAllAds?.length === 0 && subAllAds?.loading === false && (
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
      { (subAllAds.pageIndex !== 0 || !subAllAds?.loading) && <Pagination
        count={subAllAds?.totalPages}
        size={"large"}
        page={subAllAds?.pageIndex + 1}
        onChange={(e, p) => {
          console.log("909 pagination on vchange",Object.keys(subAllAds?.filterSubAllData).includes(`${(p - 1).toString()}`), p - 1)
          // dispatch(subAllAdsDuck.setSubAllCurrentPaginationIndex(p-1))
          if(Object.keys(subAllAds?.filterSubAllData).includes(`${(p-1).toString()}`))
          {
            console.log("909 page index",subAllAds?.pageIndex)
            dispatch(subAllAdsDuck.laodSubAllCashedPageData(p-1));
          }
          else
         { dispatch(
            subAllAdsDuck.loadMoreSubAllAdsStart({
              page_name: subAllAds?.pageName,
              number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
              page_index: p - 1,
            })
          );}
        }}
      />}
      </Box>
    </>
  );
};

export default SubAllAdsListPagination;
