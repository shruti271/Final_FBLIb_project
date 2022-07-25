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
import React from "react";
import Arrowdown from "../assets/Arrowdown.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
  applyallfilters,
  applysortingfilters,
  fluctuatedDataEnd,
  SetSortOrdervalueStart,
  SortvalueStart,
} from "../redux/ducks/filtered_Data";
import {
  applySavedAdsallfilters,
  SavedAdsSetSortOrdervalueStart,
  SavedAdsSortvalueStart,
  SavedfluctuatedDataEnd,
} from "../redux/ducks/saveAds_clientSide";

const useStyles = makeStyles((theme) => ({
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
}));
function SortFilter(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [sortByAnchorel, setSortByAnchorel] = React.useState(null);
  const openSortByAnchorel = Boolean(sortByAnchorel);
  
  const handleChangeSortType = (event, newValue) => {
    if (props.name === "AllAdsPage") {
      if (
        props.sortDetail.type === "AdCountIncrease" ||
        props.sortDetail.type === "AdCountDecrease"
      ) {
        dispatch(fluctuatedDataEnd());
        dispatch(applyallfilters());
      }
      dispatch(
        SetSortOrdervalueStart({
          name: "type",
          data: newValue,
          componentName: props.name,
        })
      );

      if (newValue === "AdCountIncrease" || newValue === "AdCountDecrease") {
        dispatch(applyallfilters());
      } else {
        dispatch(applysortingfilters());
      }
    } else if (props.name === "SavedPage") {
      if (
        props.sortDetail.type === "AdCountIncrease" ||
        props.sortDetail.type === "AdCountDecrease"
      ) {
        dispatch(SavedfluctuatedDataEnd());
        dispatch(applySavedAdsallfilters());
      }
      dispatch(
        SavedAdsSetSortOrdervalueStart({
          name: "type",
          data: newValue,
          componentName: props.name,
        })
      );

      if (newValue === "AdCountIncrease" || newValue === "AdCountDecrease") {
        dispatch(applySavedAdsallfilters());
      } else {
        dispatch(SavedAdsSortvalueStart());
      }
    }
    //   dispatch(fluctuatedDataStart());
    //   console.log(filteredData);
    //   console.log(
    //     "---------------------))))))))))))))))----------------------"
    //   );
    // } else dispatch(SortvalueStart());

    // setSortedDetail((pre) => ({ ...pre, type: newValue }));
  };
  const handleChangeAceOrDes = (event, newValue) => {
    // console.log(newValue);
    // console.log(
    //   "---------------------------1111111111111111111111111--------------------------"
    // );
    if (props.name === "AllAdsPage") {
      dispatch(
        SetSortOrdervalueStart({
          name: "order",
          data: newValue,
          componentName: props.name,
        })
      );
      dispatch(SortvalueStart());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsSetSortOrdervalueStart({
          name: "order",
          data: newValue,
          // componentName: props.name,
        })
      );
      dispatch(SavedAdsSortvalueStart());

    }
    // setSortedDetail((pre) => ({ ...pre, order: newValue }));
  };

  return (
    <>
     {/* <Grid container justifyContent="flex-end">
       <Box> */}
        <Button disabled={props.loading}
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
          <Typography noWrap textTransform="capitalize">
            {/* {sortedDetail || "sort by"} */}
            Sort by
          </Typography>
        </Button>
        <Popover
          anchorEl={sortByAnchorel}
          open={openSortByAnchorel}
          add={openSortByAnchorel ? "simple-popover" : undefined}
          onClose={() => {
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
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={props.sortDetail.type}
                onChange={handleChangeSortType}
              >
                <FormControlLabel
                  value="startDate"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Started running date"
                />
                <FormControlLabel
                  value="lastUpdatedTime"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Recently updated"
                />
                <FormControlLabel
                  value="likes"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Page likes"
                />
                <FormControlLabel
                  value="noOfCopyAds"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Ad count total"
                />
                <FormControlLabel
                  value="AdCountIncrease"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Ad count increase"
                />
                <FormControlLabel
                  value="AdCountDecrease"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Ad count decrease"
                />
              </RadioGroup>
            </FormControl>
            <Divider />
            <FormControl sx={{ padding: "10px" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={props.sortDetail.order}
                onChange={handleChangeAceOrDes}
              >
                <FormControlLabel
                  disabled={
                    props.sortDetail.type === "AdCountIncrease" ||
                    props.sortDetail.type === "AdCountDecrease"
                      ? true
                      : false
                  }
                  value="Ascending"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Ascending"
                />
                <FormControlLabel
                  disabled={
                    props.sortDetail.type === "AdCountIncrease" ||
                    props.sortDetail.type === "AdCountDecrease"
                      ? true
                      : false
                  }
                  value="Descending"
                  control={<Radio style={{ color: "#00CBFF" }} />}
                  label="Descending"
                />
              </RadioGroup>
            </FormControl>

            {/* <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                  >
                    Reset
                  </Button>
                </Box> */}
          </Box>
        </Popover>
       {/* </Box>
     </Grid> */}
    </>
  );
}

export default SortFilter;
