import React, { useEffect } from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import BackTotopbutton from "../pages/Backtotopbutton";
import AllFilters from "../components/AllFilters";
import SortFilter from "../components/SortFilter";
import AdsList from "../components/AdsList";
import FilterChips from "../components/FilterChips";
import { useSkipInitialEffect } from "../utils/customHooks";
import PagePagination from "../components/Page_Pagination";

const useStyles = makeStyles((theme) => ({
  title: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  titleHome: {
    // height: "37px !important",
    // width: "41px !important",
    // marginRight: "10px",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "24px",
    color: "#2B2F42",
  },
  subTitleHome: {
    // fontWeight: 500,
    // fontSize: "18px",
    // lineHeight: "24px",
    // color: "#2B2F42",
    // marginTop: "8px",
    // marginBottom: "18px",
  },
  addTextfilter: {
    padding: theme.spacing(1, 3),
    border: "1px solid #EBEBEB",
    borderRadius: "15px",
    marginTop: "10px",
  },
  addtextfilterButton: {
    padding: "4px 4px",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid #EBEBEB",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  calenderfilter: {
    color: "#2B2F42",
    whiteSpace: "nowrap",
    border: "1px solid #EBEBEB",
    borderRadius: 3,
  },

  AdsImageVideo: {
    width: "100%",
    height: "auto",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
  shareicon: {
    marginLeft: theme.spacing(5),
  },
  saveicon: {
    marginLeft: theme.spacing(2),
    cursor: "pointer",
  },
  AdsText: {
    display: "inlineBlock",
    fontWeight: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
  Addheader: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "6px",
    whiteSpace: "nowrap",
  },
  AddFooter: {
    display: "flex",
    flexWrap: "wrap",
    whiteSpace: "nowrap",
  },
  FilterBox: {
    color: "#2B2F42",
    whiteSpace: "nowrap",
    border: "1px solid #EBEBEB",
    borderRadius: "10px",
    marginRight: "14px",
    marginTop: "22px",
  },
}));

const Addlibrarydatabase = () => {
  const classes = useStyles();
  const theme = useTheme();
  const showgrid = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <>
      <BackTotopbutton />

      <Grid
        container
        sx={{
          // paddingRight: "36px",
          width: showgrid?"90% !important":"97% !important",
          marginX: "auto",
        }}
      >
        <Grid item xs={12}>
          <Box component="main">
            <Typography
              className={classes.titleHome}
              variant="h5"
              ml={1}
              sx={{
                fontWeight: "bold",
                color: "#3A3D4B",
                "@media (max-width: 450px)": {
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  marginTop:"15px"
                },
              }}
            >
              Adlibrary Database
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            border: "1px solid #EBEBEB",
            borderRadius: "15px",
            padding: "16px 36px",
            width: "95%",
            marginTop: 2,
            "@media (max-width: 450px)": {
              marginTop: 1,
            },
          }}
        >
          <Box>
            <AllFilters />
          </Box>
          <Box>
            <FilterChips />
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="flex-end"
          sx={{ marginTop: "10px", marginBottom: "15px" }}
        >
          <SortFilter />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          {/* <AdsList /> */}
          <PagePagination/>
        </Grid>
      </Grid>
    </>
  );
};

export default Addlibrarydatabase;
