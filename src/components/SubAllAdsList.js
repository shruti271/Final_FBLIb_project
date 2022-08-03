import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ThumbNailBox from "./ThumbNailBox";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as subAllAdsDuck from "../redux/ducks/subAllAds";
import { useEffect } from "react";
import { FadeLoader } from "react-spinners";

const SubAllAdsList = () => {

  const dispatch     = useDispatch();
  const subAllAds  = useSelector((state) => state.subAllAds);

  useEffect(()=>{
    console.log("666 suba ll ads in main page",subAllAds.postionOfPage)
    window.scrollTo(0,subAllAds.postionOfPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

return (
  <InfiniteScroll
    // style={{ opacity: loading ? 0.5 : 1 }}
    dataLength={subAllAds?.subAllAds?.length} //This is important field to render the next data
    next={() =>
        dispatch(subAllAdsDuck.loadMoreSubAllAdsStart({ page_name: subAllAds?.pageName, page_index:subAllAds?.pageIndex + 1 }))
    }
    hasMore={subAllAds.hasMoreData}
    loader={
      subAllAds?.loading ?
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
        width: "100%",
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
        {subAllAds?.subAllAds?.length !== 0 &&
          subAllAds?.subAllAds?.map((ads, index) => (
            <ThumbNailBox
              adInfo={ads}
              index={index}
              key={index}
            />
          ))}
        {subAllAds?.subAllAds?.length === 0 &&
          subAllAds?.loading === false && (
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

export default SubAllAdsList;