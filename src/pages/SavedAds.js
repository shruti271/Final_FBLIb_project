import React from "react";
import {
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import filter from "../assets/filter.svg";
import { Box } from "@material-ui/core";
import BackTotopbutton from "../pages/Backtotopbutton";
import AllFilters from "../components/AllFilters";
import SortFilter from "../components/SortFilter";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import ScrollToTop from "../utils/scrollToTop";
import FilterChips from "../components/FilterChips";
import SavedAdsList from "../components/SavedAdsList";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Style.css";
const useStyles = makeStyles((theme) => ({
  titleHome: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "24px",
    color: "#2B2F42",
  },
}));

const SavedAds = () => {
  const classes = useStyles();
  const theme = useTheme();

  const ShowFilterButton = useMediaQuery(theme.breakpoints.up("sm"));
  const ShowFilterWithClearButton = useMediaQuery(theme.breakpoints.only("xs"));
  const [filterActivate, setFilterActivate] = React.useState(true);
  const mountedStyle = {
    animation: "inAnimation 450ms ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimation 470ms ease-out",
    animationFillMode: "forwards",
  };
  
  return (
    <>
      <ScrollToTop />
      <BackTotopbutton />
      <Grid
        container
        sx={{
          width: ShowFilterButton ? "95%" : "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                },
              }}
            >
              Saved Ads
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingTop: 1,
            width: "100%",
            display: ShowFilterWithClearButton ? "flex" : "",
            justifyContent: ShowFilterWithClearButton ? "center" : "",
            alignItems: ShowFilterWithClearButton ? "center" : "",
          }}
        >
          {filterActivate && (
            <Stack
              sx={{
                border: "1px solid #EBEBEB",
                borderRadius: "15px",
                padding: { lg: "16px 36px", xs: "15px 20px" },
                marginTop: 2,
                width: "99%",
                margin: "auto",
              }}
              style={filterActivate ? mountedStyle : unmountedStyle}
              className="transitionDiv"
            >
              <AllFilters setFilterActivate={setFilterActivate} />
              <FilterChips />
            </Stack>
          )}
          {!filterActivate && (
            <Box
              width="95%"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  background:
                    "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                  width: "100%",
                  visibility: {
                    xs: "visible",
                    lg: "hidden",
                    md: "hidden",
                    sm: "hidden",
                  },
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px",
                  color: "white",
                }}
                onClick={() => setFilterActivate(true)}
              >
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
                <Typography
                  sx={{
                    textTransform: "none",
                    paddingLeft: 1,
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Filters{" "}
                </Typography>
              </Button>
            </Box>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent="flex-end"
          sx={{ marginTop: "10px", marginBottom: "15px" }}
        >
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
            spacing={1}
          >
            {ShowFilterButton && (
              <Box
                style={{
                  background:
                    "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
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
            )}
            <Box>
              <SortFilter />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <SavedAdsList />
        </Grid>
      </Grid>
    </>
  );
};

export default SavedAds;
