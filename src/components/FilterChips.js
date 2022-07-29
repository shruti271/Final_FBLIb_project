import React, { useEffect } from "react";
import { Chip, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";


const FilterChips = () => {
  const dispatch = useDispatch();

  const allAdsPerams = useSelector((state) => state.allAdsPerams);

  useEffect(()=>{
    console.log("In FilterChips :", allAdsPerams)
  },[allAdsPerams]);

  return (
    <Grid container sx={{ marginTop: 1 }}>
      {Object.keys(allAdsPerams?.appliedFilters).map((filter, index) => {
        return (
          allAdsPerams?.appliedFilters[filter]["isApplied"] && (
            <Chip
              key={index}
              color="primary"
              label={
                allAdsPerams?.appliedFilters[filter]["chipText"]
              }
              deleteIcon={
                <CloseIcon
                  style={{
                    color: "white",
                    backgroundColor: "#00CBFF",
                  }}
                />
              }
              onDelete={() => {
                dispatch(
                  allAdsPeramsDuck.clearSingleFilter({
                    key: filter,
                  })
                );
              }}
              sx={{
                borderRadius: 2,
                backgroundColor: "#00CBFF",
                margin: 0.5,
              }}
            />
          )
        );
      })}
    </Grid>
  )
}

export default FilterChips;

