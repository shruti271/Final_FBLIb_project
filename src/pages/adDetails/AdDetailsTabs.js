import { Button, Stack, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
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
  const [isActiveTab, setIsActiveTab] = useState('Ad Overview');

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
          <Stack direction={"row"} spacing={2}>
            <Button disableRipple 
              sx={{
                borderBottom: isActiveTab === "Ad Overview" ? 2 : 0,
                height: "20px",
                borderRadius: 0,
                borderColor:"#2B2F42"
                ,color:"#2B2F42"
              }}
              onClick={() => {
                setIsActiveTab('Ad Overview');
                navigate("");
              }}
            >
              Ad Overview
            </Button>
            <Button disableRipple 
              sx={{ borderBottom: isActiveTab === "All Ads" ? 2 : 0, height: "20px", borderRadius: 0 ,borderColor:"#2B2F42",color:"#2B2F42"}}
              onClick={() => {
                setIsActiveTab('All Ads');
                navigate("allAds");                
              }}
            >
              All Ads
            </Button>
          </Stack>

          {/* <Tabs value={activeTab} onChange={handleTabChange}>
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
          </Tabs> */}
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
