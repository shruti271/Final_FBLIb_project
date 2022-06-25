import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import AllAds from "./AllAds";
import AdDeatails from "./adDeatails";
import { useDispatch, useSelector } from "react-redux";
import { loadSubAllMediaStart } from "../../redux/ducks/subAllAds";

function AdDeatailsTabs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adID = useParams();

  const { allMediaAds } = useSelector((state) => state.allMediaAds);

  const adDetailsTabs = {
    ADOVERVIEW: "Ad Overview",
    ALLADS: "All Ads",
  };
  const [isActiveTab, setIsActiveTab] = useState(adDetailsTabs.ADOVERVIEW);
  const [adDetail, setAdDetail] = useState();
  useEffect(() => {
    if (window.location.pathname === `/adDeatails/${adID.adsId}`) {
      setIsActiveTab(adDetailsTabs.ADOVERVIEW);
    } else {
      setIsActiveTab(adDetailsTabs.ALLADS);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (allMediaAds) {
      // eslint-disable-next-line array-callback-return
      const singleAds = allMediaAds.find((ad) => {
        if (ad.adID === adID.adsId) {
          return ad;
        }
      });

      setAdDetail(singleAds);
    }
  }, [allMediaAds, adID.adsId, adDetail]);

  useEffect(() => {
    dispatch(loadSubAllMediaStart({ ad_name: adDetail?.pageInfo?.name }));
  }, [adDetail?.pageInfo?.name, dispatch]);

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
            <Button
              disableRipple
              sx={{
                borderBottom: isActiveTab === "Ad Overview" ? 2 : 0,
                height: "20px",
                borderRadius: 0,
                borderColor: "#2B2F42",
                color: "#2B2F42",
              }}
              onClick={() => {
                setIsActiveTab(adDetailsTabs.ADOVERVIEW);
                navigate("");
              }}
            >
              Ad Overview
            </Button>
            <Button
              disableRipple
              sx={{
                borderBottom: isActiveTab === "All Ads" ? 2 : 0,
                height: "20px",
                borderRadius: 0,
                borderColor: "#2B2F42",
                color: "#2B2F42",
              }}
              onClick={() => {
                setIsActiveTab(adDetailsTabs.ALLADS);
                navigate("allAds");
              }}
            >
              All Ads
            </Button>
          </Stack>
        </Box>
      </Box>
      <Routes>
        <Route
          exact
          path=""
          element={<AdDeatails ThumbnailData={adDetail} />}
        />
        <Route exact path="allAds" element={<AllAds />} />
      </Routes>
    </>
  );
}

export default AdDeatailsTabs;
