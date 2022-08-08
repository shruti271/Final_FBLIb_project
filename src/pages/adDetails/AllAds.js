import { Grid } from "@mui/material";
import React from "react";
import SubAllAdsList from "../../components/SubAllAdsList";

const AllAds = () => {
  document.title = "Allads"
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{marginTop:"36px"}}>
          <SubAllAdsList />
        </Grid>
      </Grid>
    </>
  );
};

export default AllAds;
