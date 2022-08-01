import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import filter from "../assets/filter.svg";
import { Box } from "@material-ui/core";
import BackTotopbutton from "../pages/Backtotopbutton";
import AllFilters from "../components/AllFilters";
import CloseIcon from "@mui/icons-material/Close";
import SortFilter from "../components/SortFilter";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import ScrollToTop from "../utils/scrollToTop";
import FilterChips from "../components/FilterChips";
import SavedAdsList from "../components/SavedAdsList";

const SavedAds = () => {

  const [filterActivate, setFilterActivate] = React.useState(true);

  return (
    <>
      <ScrollToTop />
      <BackTotopbutton />
      {/* <Stack direction={"column"}> */}
      <Typography>
        <b>Saved Ads</b>
      </Typography>
      {/* <Grid
          container
          sx={{
            // opacity: loading ? 0.5 : 1,
            // disabled: loading ? true : false,
            paddingRight: "36px",
          }}
        > */}
      <Grid container>
        <Grid item xs={12}>
          {filterActivate && (
            <Stack sx={{
              border: "1px solid #EBEBEB",
              borderRadius: "15px",
              padding: "16px 36px",
              marginTop: 2,
            }}>
              <AllFilters />
              <FilterChips />
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} justifyContent="flex-end" sx={{marginRight:"10px", marginTop:"10px", marginBottom:"15px"}}>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
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
                    color: "white",
                  }}
                  onClick={() => {
                    setFilterActivate(true);
                  }}
                />
              )}
            </Box>
            <Box>
              <SortFilter/>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <SavedAdsList />
        </Grid>
      </Grid>
      {/* </Stack> */}
    </>
  );
};

export default SavedAds;
