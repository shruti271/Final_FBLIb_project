import React, { useEffect, useState } from "react";
import { Chip, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import * as savedAdsPeramsDuck from "../redux/ducks/savedAdsPerams";
import { useLocation } from "react-router-dom";
import { PageNameEnum } from "../utils/enums";

const FilterChips = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [dataSource, setDataSource] = useState({});
  const [pageName, setPageName] = useState("");

  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setDataSource(allAdsPerams);
        setPageName(PageNameEnum.AdlibraryDatabase);
        break;
      case "/savedAds":
        setDataSource(savedAdsPerams);
        setPageName(PageNameEnum.SavedAds);
        break;
      default:
        setDataSource({});
    }
  }, [allAdsPerams, location.pathname, savedAdsPerams]);

  useEffect(()=>{
    console.log("In FilterChips allAdsPerams :", allAdsPerams)
  },[allAdsPerams]);

  useEffect(()=>{
    console.log("In FilterChips savedAdsPerams :", savedAdsPerams)
  },[savedAdsPerams]);

  return (
    <Grid container sx={{ marginTop: 1 }}>
      { dataSource?.appliedFilters && Object.keys(dataSource?.appliedFilters).map((filter, index) => {
        return (
          dataSource?.appliedFilters[filter]["isApplied"] && (
            <Chip
              key={index}
              color="primary"
              label={
                dataSource?.appliedFilters[filter]["chipText"]
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
                  pageName === PageNameEnum.AdlibraryDatabase ?
                  allAdsPeramsDuck.clearSingleFilter({
                    key: filter,
                  }) :
                  savedAdsPeramsDuck.clearSavedSingleFilter({
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

