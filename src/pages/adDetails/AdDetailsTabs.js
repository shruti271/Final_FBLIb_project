import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Box } from "@mui/system";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AllAds from "./AllAds";
import AdDeatails from "./adDeatails";
import { loadSubAllAdsStart } from "../../redux/ducks/subAllAds";
import {
  loadSingleAdDataClear,
  loadSingleAdDataStart,
} from "../../redux/ducks/singleAdsData";
import * as subAllAdsDuck from "../../redux/ducks/subAllAds";
import LeftArrow from "../../assets/LeftArrow.svg";

function AdDeatailsTabs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { adId } = useParams();
  const { state } = useLocation();

  const adDetailsTabs = {
    ADOVERVIEW: "Ad Overview",
    ALLADS: "All Ads",
  };

  const showgrid = useMediaQuery(theme.breakpoints.only("xs"));

  const filteredAds = useSelector((state) => state.filteredAds);
  const subAllAds = useSelector((state) => state.subAllAds);
  const { filteredSavedAds } = useSelector((state) => state.filteredSavedAds);
  const { singleAdData } = useSelector((state) => state.singleAdData);
  

  


  const [isActiveTab, setIsActiveTab] = useState(adDetailsTabs.ADOVERVIEW);
  const [adDetail, setAdDetail] = useState();
  const [redirectToPage, setRedirectToPage] = useState(`/page=${filteredAds.paginationIndex + 1}`);

  useEffect(() => {
    if (state) setRedirectToPage(state.fromPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.location.pathname === `/adDeatails/${adId}`) {
      setIsActiveTab(adDetailsTabs.ADOVERVIEW);
    } else {
      setIsActiveTab(adDetailsTabs.ALLADS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  useEffect(() => {
    if (filteredAds.filteredAds.length > 0) {
      const adTobeDisplay =
        filteredAds.filteredAds.find((ad) => ad.id === adId && ad) ||
        subAllAds.subAllAds.find((ad) => ad.id === adId && ad) ||
        filteredSavedAds?.find((ad) => ad.id === adId && ad);

      if (!adTobeDisplay) {
        dispatch(loadSingleAdDataStart({ id: adId }));
      }
      setAdDetail(adTobeDisplay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filteredAds, adId]);

  useEffect(() => {
    if (!adDetail && Object.keys(singleAdData).length) {
      setAdDetail(singleAdData);
      dispatch(loadSingleAdDataClear());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleAdData]);

  useEffect(() => {
    if (adDetail?.pageInfo?.name) {
      if (Object.keys(subAllAds?.filterSubAllData).includes("0")) {
        if (
          Object(subAllAds?.filterSubAllData)[0][0]?.pageInfo?.name !==
          adDetail?.pageInfo?.name
        ) {
          dispatch(
            loadSubAllAdsStart({
              page_name: adDetail?.pageInfo?.name,
              page_index: 0,
              number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
            })
          );
        } else {
          dispatch(subAllAdsDuck.laodSubAllCashedPageData(0));
        }
      } else {
        dispatch(
          loadSubAllAdsStart({
            page_name: adDetail?.pageInfo?.name,
            page_index: 0,
            number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
          })
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, adDetail]);

  return (
    <>
      <Box
        sx={{
          width: "95%",
          margin: "auto",
          typography: "body1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => {
            
            // navigate(redirectToPage);
            navigate(`/page=${filteredAds.paginationIndex + 1}`)
            // window.history.back()

          }}
          sx={{ cursor: "pointer", marginTop: "10px" }}
        >
          <Stack direction={"row"} sx={{ marginLeft: "1px" }}>
            <Box sx={{ marginRight: "12px" }}>
              <img src={LeftArrow} aria-label="FirstCard" />
            </Box>
            <Typography
              sx={{
                fontWeight: { xs: 600, sm: 600, md: 600, xl: 600 },
                fontSize: { xs: "18px", sm: "18px", md: "18px", xl: "18px" },
              }}
            >
              Search Results
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: showgrid ? "25px" : "5px",
            marginBottom: "5px",
          }}
        >
          <Stack direction={"row"} spacing={10}>
            <Button
              disableRipple
              sx={{
                height: "20px",
                width: "113px",
                borderRadius: 0,
                borderColor: "#2B2F42",
                color: "#2B2F42",
                textTransform: "none",
              }}
              onClick={() => {
                setIsActiveTab(adDetailsTabs.ADOVERVIEW);
                navigate("");
                // window.history.replace("")

              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "18px", sm: "18px", md: "16px", xl: "16px" },
                  textDecoration:
                    isActiveTab === "Ad Overview" ? "underline" : "none",
                  textUnderlineOffset: "5px",
                }}
              >
                Ad Overview
              </Typography>
            </Button>
            <Button
              disableRipple
              sx={{
                height: "20px",
                borderRadius: 0,
                borderColor: "#2B2F42",
                color: "#2B2F42",
                textTransform: "none",
              }}
              onClick={() => {
                setIsActiveTab(adDetailsTabs.ALLADS);
                //adDeatails/PSHN6oIB5wG9Mmewh9Dl/allAds/page
                // navigate(`adDeatails/${adId}/allAds/page=${subAllAds?.pageIndex + 1}`);
                navigate(`allAds/page=${subAllAds?.pageIndex + 1}`);
                // window.history.replace("/allAds")
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "18px", sm: "18px", md: "16px", xl: "16px" },
                  textDecoration:
                    isActiveTab === "Ad Overview" ? "none" : "underline",
                  textUnderlineOffset: "5px",
                }}
              >
                {" "}
                All Ads
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          width: showgrid ? "98% !important" : "98% !important",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "10px",
        }}
      >
        <Routes>
          <Route exact path="" element={<AdDeatails />} />
          <Route exact path="allAds/page=:subId" element={<AllAds />} />
        </Routes>
      </Box>
    </>
  );
}

export default AdDeatailsTabs;
