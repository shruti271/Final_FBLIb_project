import React from "react";
import { Box } from "@material-ui/core";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import SubAllAdsList from "../../components/SubAllAdsList"

const AllAds = () => {
  const theme = useTheme();

  const showgrid = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <Box
        sx={{
          width: showgrid ? "90% !important" : "98% !important",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: "24px" }}>
            <SubAllAdsList />            
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AllAds;
