import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Chip, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PageNameEnum } from "../utils/enums";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import * as savedAdsPeramsDuck from "../redux/ducks/savedAdsPerams";
import { clearCashedPageData } from "../redux/ducks/filteredAds";

const FilterChips = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);
  const filteredAds = useSelector((state) => state.filteredAds);
  const { paginationIndex } = useSelector(
    (state) => state.filteredSavedAds
  );
  const [dataSource, setDataSource] = useState({});
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case `/page=${filteredAds.paginationIndex + 1}`:
        setDataSource(allAdsPerams);
        setPageName(PageNameEnum.AdlibraryDatabase);
        break;
      case `/savedAds/page=${paginationIndex}`:
        setDataSource(savedAdsPerams);
        setPageName(PageNameEnum.SavedAds);
        break;
      default:
        setDataSource({});
    }
  }, [allAdsPerams, location.pathname, savedAdsPerams]);

  return (
    <Grid container sx={{ marginTop: 1 }}>
      {dataSource?.appliedFilters &&
        Object.keys(dataSource?.appliedFilters).map((filter, index) => {
          return (
            dataSource?.appliedFilters[filter]["isApplied"] && (
              <Chip
                key={index}
                color="primary"
                label={dataSource?.appliedFilters[filter]["chipText"]}
                deleteIcon={
                  <CloseIcon
                    style={{
                      color: "white",
                      backgroundColor: "#00CBFF",
                    }}
                  />
                }
                onDelete={() => {
                  pageName === PageNameEnum.AdlibraryDatabase &&
                    dispatch(clearCashedPageData());
                  dispatch(
                    pageName === PageNameEnum.AdlibraryDatabase
                      ? allAdsPeramsDuck.clearSingleFilter({
                          key: filter,
                        })
                      : savedAdsPeramsDuck.clearSavedSingleFilter({
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
  );
};

export default FilterChips;
