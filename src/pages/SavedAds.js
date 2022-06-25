import React, { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ThumbNailBox from "../components/ThumbNailBox";
import { Box } from "@mui/system";
import { loadSavedAdsStart } from "../redux/ducks/saveAds";

const SavedAds = () => {
  const { savedAds, loading } = useSelector((state) => state.savedAds);
  const dispatch = useDispatch();

useEffect(()=>{
  // dispatch(loadSavedAdsStart());
  console.log(savedAds)

})
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress
          style={{
            position: "relative",
            top: 50,
            left: 50,
            opacity: 1,
            zIndex: 1,
            visibility: loading ? "visible" : "hidden",
          }}
        />
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "10px",
          opacity: loading ? 0.5 : 1,
          disabled: loading ? true : false,
        }}
      >
        {savedAds.map((ads, index) => (
          <ThumbNailBox
            adInfo={ads}
            index={index}
            key={index}
            deleteId={ads.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default SavedAds;
