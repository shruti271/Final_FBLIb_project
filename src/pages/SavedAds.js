import React, { useEffect } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ThumbNailBox from "../components/ThumbNailBox";
import filter from "../assets/filter.svg";
import noSavedAdsImage from "../assets/noSavedAdsImage.svg";
import Arrowdown from "../assets/Arrowdown.svg";
import { Box } from "@material-ui/core";
import AllFilters from "../components/AllFilters";
import disabledFilter from "../assets/disabledFilter.svg"
// import { loadSavedAdsStart } from "../redux/ducks/saveAds";
import { useDispatch } from "react-redux";
import { putFilteredDataStart } from "../redux/ducks/filtered_Data";

const SavedAds = () => {
  const dispatch = useDispatch();

  const { savedAdsLocal } = useSelector((state) => state.savedclienads);
  // const { savedAds, loading } = useSelector((state) => state.savedAds);
  const [filterActivate, setFilterActivate] = React.useState(false);
useEffect(()=>{
  dispatch(putFilteredDataStart({data:filterActivate,componentName:"savedPage"}));
})
  return (
    <>
      <Stack direction={"column"}>
        <Typography>
          <b>Saved Ads</b>
        </Typography>

        <Box sx={{ marginRight: 5 }}>
          {/* <Grid  container justifyContent="flex-end"> */}
          {/* <Grid item>     */}
          <Grid container>
           {filterActivate? <AllFilters name={"savedPage"}/>:null}
          </Grid>
          <Stack
            direction={"row"}
            sx={{
              marginRight: "30px",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
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
                  onClick={()=>{
                    setFilterActivate(false)
                  }}
                />
              ) : (
                <img
                  src={disabledFilter}
                  alt="savedAds"
                  style={{
                    width: "20px",
                    height: "20px",
                    float: "right",
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    setFilterActivate(true)
                  }}
                />
              )}
            </Box>
            <Typography>Sort by</Typography>
            <img
              alt="arrowdown"
              src={Arrowdown}
              // className={classes.DropDownArrow}
            />
          </Stack>

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
                {savedAdsLocal.map((ads, index) => (
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
