import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllAds from "./AllAds";
import AdDeatails from "./adDeatails";

const adDetailsTabs = {
  ADOVERVIEW: "Ad Overview",
  ALLADS: "All Ads",
};

function AdDeatailsTabs() {
  const [activeTab, setActiveTab] = React.useState(adDetailsTabs.ADOVERVIEW);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab
              value={adDetailsTabs.ADOVERVIEW}
              label="Ad Overview"
              onClick={() => {
                navigate("");
              }}
            />

            <Tab
              value={adDetailsTabs.ALLADS}
              label="All Ads"
              onClick={() => {
                navigate("allAds");
              }}
            />
          </Tabs>
        </Box>
      </Box>
      <Routes>
        <Route exact path="" element={<AdDeatails />} />
        <Route exact path="allAds" element={<AllAds />} />
      </Routes>
    </>
  );
}

export default AdDeatailsTabs;
