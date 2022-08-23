import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Popover,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Arrowdown from "../assets/Arrowdown.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { PageNameEnum } from "../utils/enums";
import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
import * as savedAdsPeramsDuck from "../redux/ducks/savedAdsPerams";
import { clearCashedPageData } from "../redux/ducks/filteredAds";

const useStyles = makeStyles((theme) => ({
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
}));
function SortFilter(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageName(PageNameEnum.AdlibraryDatabase);
        break;
      case "/savedAds":
        setPageName(PageNameEnum.SavedAds);
        break;
      default:
        setPageName("");
    }
  }, [location.pathname]);

  const allAdsPerams = useSelector((state) => state.allAdsPerams);
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);

  const [sortByAnchorel, setSortByAnchorel] = React.useState(null);
  const openSortByAnchorel = Boolean(sortByAnchorel);

  const handleChangeSortType = (event, newValue) => {
    pageName === PageNameEnum.AdlibraryDatabase && dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeSortFilters({
            key: "type",
            value: {
              selectedValue: newValue,
            },
          })
        : savedAdsPeramsDuck.changeSavedSortFilters({
            key: "type",
            value: {
              selectedValue: newValue,
            },
          })
    );
  };

  const handleChangeAceOrDes = (event, newValue) => {
    pageName === PageNameEnum.AdlibraryDatabase && dispatch(clearCashedPageData());
    dispatch(
      pageName === PageNameEnum.AdlibraryDatabase
        ? allAdsPeramsDuck.changeSortFilters({
            key: "order",
            value: {
              selectedValue: newValue,
            },
          })
        : savedAdsPeramsDuck.changeSavedSortFilters({
            key: "order",
            value: {
              selectedValue: newValue,
            },
          })
    );
  };

  return (
    <>
      {/* <Grid container justifyContent="flex-end">
       <Box> */}
      <Button
        // disabled={props.loading}
        onClick={(event) => {
          setSortByAnchorel(event.currentTarget);
        }}
        size="large"
        // variant="outlined"
        disableElevation
        disableRipple
        sx={{
          color: "#2B2F42",
          whiteSpace: "nowrap",
          border: "1px solid white",
          borderRadius: "10px",
          marginRight: "14px",
          // marginTop: "22px",
        }}
        // className={classes.FilterBox}
        endIcon={
          <img
            alt="arrowdown"
            src={Arrowdown}
            className={classes.DropDownArrow}
          />
        }
      >
        <Typography noWrap textTransform="capitalize" sx={{fontWeight:500,fontSize:"16px"}}>
          {/* {sortedDetail || "sort by"} */}
          Sort by
        </Typography>
      </Button>
      <Popover
        anchorEl={sortByAnchorel}
        open={openSortByAnchorel}
        add={openSortByAnchorel ? "simple-popover" : undefined}
        onClose={() => {
          // callFilters();
          setSortByAnchorel(null);
        }}
        transformOrigin={{
          horizontal: "left",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
      >
        <Box>
          <FormControl sx={{ padding: "10px" }}>
            <RadioGroup
              aria-labelledby="sort-selector-label"
              name="sort-selector"
              value={
                pageName === PageNameEnum.AdlibraryDatabase
                  ? allAdsPerams?.sortFilter?.type?.selectedValue
                  : savedAdsPerams?.sortFilter?.type?.selectedValue
              }
              onChange={handleChangeSortType}
            >
              <FormControlLabel
                value="startDate"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Started running date</Typography>}
              />
              <FormControlLabel
                value="lastUpdatedTime"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Recently updated</Typography>}
              />
              <FormControlLabel
                value="pageInfo.platforms.Facebook.likes"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Page likes</Typography>}
              />
              <FormControlLabel
                value="noOfCopyAds"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Ad count total</Typography>}
              />
              <FormControlLabel
                value="true"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Ad count increase</Typography>}
              />
              <FormControlLabel
                value="false"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Ad count decrease</Typography>}
              />
            </RadioGroup>
          </FormControl>
          <Divider />
          <FormControl sx={{ padding: "10px" }}>
            <RadioGroup
              aria-labelledby="order-selector-label"
              name="order-selector"
              value={
                pageName === PageNameEnum.AdlibraryDatabase
                  ? allAdsPerams?.sortFilter?.order?.selectedValue
                  : savedAdsPerams?.sortFilter?.order?.selectedValue
              }
              onChange={handleChangeAceOrDes}
            >
              <FormControlLabel
                disabled={
                  pageName === PageNameEnum.AdlibraryDatabase
                  ? 
                  ((allAdsPerams?.sortFilter?.type?.selectedValue === "false" ||
                  allAdsPerams?.sortFilter?.type?.selectedValue === "true"
                  ) ? true : false)
                  : ((savedAdsPerams?.sortFilter?.type?.selectedValue === "false" ||
                  savedAdsPerams?.sortFilter?.type?.selectedValue === "true"
                  ) ? true : false)
                }
                value="asc"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Ascending</Typography>}
              />
              <FormControlLabel
                disabled={
                  pageName === PageNameEnum.AdlibraryDatabase
                  ? 
                  ((allAdsPerams?.sortFilter?.type?.selectedValue === "false" ||
                  allAdsPerams?.sortFilter?.type?.selectedValue === "true"
                  ) ? true : false)
                  : ((savedAdsPerams?.sortFilter?.type?.selectedValue === "false" ||
                  savedAdsPerams?.sortFilter?.type?.selectedValue === "true"
                  ) ? true : false)
                }
                value="desc"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={<Typography sx={{fontWeight:500,fontSize:"16px"}}>Descending</Typography>}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Popover>
    </>
  );
}

export default SortFilter;
