import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import AllAds from "./AllAds";
import AdDeatails from "./adDeatails";
import { useDispatch, useSelector } from "react-redux";
import { loadSubAllAdsStart } from "../../redux/ducks/subAllAds";
import LeftArrow from "../../assets/LeftArrow.svg";
function AdDeatailsTabs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adsId: peramsAdId } = useParams();

  const filteredAds = useSelector((state) => state.filteredAds);
  const subAllAds = useSelector((state) => state.subAllAds);

  const adDetailsTabs = {
    ADOVERVIEW: "Ad Overview",
    ALLADS: "All Ads",
  };
  const [isActiveTab, setIsActiveTab] = useState(adDetailsTabs.ADOVERVIEW);
  const [adDetail, setAdDetail] = useState();

  useEffect(() => {
    if (window.location.pathname === `/adDeatails/${peramsAdId}`) {
      setIsActiveTab(adDetailsTabs.ADOVERVIEW);
    } else {
      setIsActiveTab(adDetailsTabs.ALLADS);
    }
  }, [window.location.pathname]);

  useEffect(() => {
    if (filteredAds.filteredAds.length > 0) {
      // eslint-disable-next-line array-callback-return
      const adTobeDisplay = filteredAds.filteredAds.find((ad) => {
        if (ad.adID === peramsAdId) {
          return ad;
        }
      });
      setAdDetail(adTobeDisplay);
    }
  }, [dispatch, filteredAds, peramsAdId]);

  useEffect(() => {
    if (adDetail?.pageInfo?.name) {
      if (subAllAds.subAllAds.length > 0) {
        if (
          subAllAds.subAllAds[0]?.pageInfo?.name !== adDetail?.pageInfo?.name
        ) {
          dispatch(
            loadSubAllAdsStart({
              page_name: adDetail?.pageInfo?.name,
              page_index: 0,
            })
          );
        }
      } else {
        dispatch(
          loadSubAllAdsStart({
            page_name: adDetail?.pageInfo?.name,
            page_index: 0,
          })
        );
      }
    }
  }, [dispatch, adDetail]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          typography: "body1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => {
            navigate("/");
          }}
          sx={{ cursor: "pointer" }}
        >
          <Stack direction={"row"}>
            <Box sx={{ marginRight: "12px" }}>
              <img src={LeftArrow} aria-label="FirstCard" />
            </Box>
            <Typography>
              <b>Search Results</b>
            </Typography>
          </Stack>
        </Box>
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
