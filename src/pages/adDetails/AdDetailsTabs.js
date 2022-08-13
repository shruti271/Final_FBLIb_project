import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AllAds from "./AllAds";
import AdDeatails from "./adDeatails";
import { useDispatch, useSelector } from "react-redux";
import { loadSubAllAdsStart } from "../../redux/ducks/subAllAds";
import LeftArrow from "../../assets/LeftArrow.svg";
import {
  loadSingleAdDataClear,
  loadSingleAdDataStart,
} from "../../redux/ducks/singleAdsData";
function AdDeatailsTabs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adId } = useParams();
  const { state } = useLocation();

  // const subAllAds = useSelector((state) => state.subAllAds);

  const adDetailsTabs = {
    ADOVERVIEW: "Ad Overview",
    ALLADS: "All Ads",
  };
  const filteredAds = useSelector((state) => state.filteredAds);
  const [isActiveTab, setIsActiveTab] = useState(adDetailsTabs.ADOVERVIEW);
  const [adDetail, setAdDetail] = useState();
  const [redirectToPage, setRedirectToPage] = useState("/");

  const subAllAds = useSelector((state) => state.subAllAds);
  const { filteredSavedAds } = useSelector((state) => state.filteredSavedAds);
  const { singleAdData, loading } = useSelector((state) => state.singleAdData);

  useEffect(() => {
    if(state)
    setRedirectToPage(state.fromPage);
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
      // eslint-disable-next-line array-callback-return
      const adTobeDisplay =
        filteredAds.filteredAds.find((ad) => {
          if (ad.id === adId) {
            return ad;
          }
        }) ||
        subAllAds.subAllAds.find((ad) => {
          if (ad.id === adId) {
            return ad;
          }
        }) ||
        filteredSavedAds?.find((ad) => {
          if (ad.id === adId) {
            return ad;
          }
        });

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

  useEffect(() => {console.log("888",adDetail?.pageInfo?.name)
    if (adDetail?.pageInfo?.name) {
      console.log("888",adDetail?.pageInfo?.name)
      if (subAllAds.subAllAds.length > 0) {
        if (
          subAllAds.subAllAds[0]?.pageInfo?.name !== adDetail?.pageInfo?.name
        ) {
          console.log("888",adDetail?.pageInfo?.name)
          console.log("888",adDetail?.pageInfo?.name)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, adDetail]);

  return (
    <>
      <Box
        sx={{
          width: "95%",
          // marginTop: 2,
          margin:"auto",
          typography: "body1",
          justifyContent: "center",
          alignItems: "center",
          // marginBottom:3
          
        }}
      >
        <Box
          onClick={() => {            
            navigate(redirectToPage);            
          }}
          sx={{ cursor: "pointer",
          marginTop:"10px"   }}
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
            marginTop:"15px",
            marginBottom:"10px"
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
                textTransform: "none",
              //   "@media (max-width: 450px)": {
              // marginRight:15,
              // fontSize:"18px"
              //   },
              }}
              onClick={() => {
                setIsActiveTab(adDetailsTabs.ADOVERVIEW);
                navigate("");
              }}
            >
              <b>Ad Overview</b>
            </Button>
            <Button
              disableRipple  
              sx={{ 
                // display:{ md:'none', lg:'block'},
                borderBottom: isActiveTab === "All Ads" ? 2 : 0,
                height: "20px",
                borderRadius: 0,
                borderColor: "#2B2F42",
                color: "#2B2F42",
                textTransform: "none",
                // "@media (max-width: 450px)": {
                //   // marginRight:15,
                //   fontSize:"18px"
                //     },
              }}
              onClick={() => {
                setIsActiveTab(adDetailsTabs.ALLADS);
                navigate("allAds");
              }}
            >
              <b>All Ads</b>
            </Button>
          </Stack>
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
