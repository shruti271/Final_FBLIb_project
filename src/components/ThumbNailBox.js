import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Firstcardimg from "../assets/FirstCardImg.svg";
import Shareicon from "../assets/Shareicon.svg";
import Saveicon from "../assets/Saveicon.svg";
import StarFill from "../assets/StarFill.svg";
import MyChart from "./linemy";

// import { srtPostionForScrollValueStart } from "../redux/ducks/mediaAds";
import { addToSavedAdsFilterLocalStart, removesavedFilteredAdLocal } from "../redux/ducks/filteredSavedAds";
import { addSavedAdsIdsLocal, addToSavedAdsStart, removeFromSavedAdsStart, removeSavedAdsIdsLocal } from "../redux/ducks/savedAdsManager";

const useStyles = makeStyles((theme) => ({
  title: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  titleHome: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "24px",
    color: "#2B2F42",
  },
  subTitleHome: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2B2F42",
    marginTop: "8px",
    marginBottom: "18px",
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
  AdsImageSize: {
    ["@media (min-width:780px)"]: { height: "290px" },
    ["@media (min-width:920px)"]: { height: "250px" },
    ["@media (min-width:1440px)"]: { height: "290px" },
    ["@media (min-width:1700px)"]: { height: "410px" },
    width: "100%",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  AdsImage: {
    width: "100%",
    height: "230px",
    objectFit: "fill",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  AdsVideo: {
    width: "100%",
    objectFit: "cover",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
  shareicon: {
    marginLeft: theme.spacing(3),
    cursor: "pointer",
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

const ThumbNailBox = ({ adInfo, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [queryObject, setQueryObject] = useState({});

  const savedAdsManager = useSelector((state) => state.savedAdsManager);
  const savedAdsPerams = useSelector((state) => state.savedAdsPerams);

  useEffect(()=>{
    const queryObject = {
      startdate: savedAdsPerams?.appliedFilters?.StartRunningDate?.startdate,
      enddate: savedAdsPerams?.appliedFilters?.StartRunningDate?.enddate,
      adcount:
        savedAdsPerams?.appliedFilters?.AdCount?.min >
          savedAdsPerams?.maxRanger.AdCount?.min ||
        savedAdsPerams?.appliedFilters?.AdCount?.max <
          savedAdsPerams?.maxRanger.AdCount?.max
          ? [
              savedAdsPerams?.appliedFilters?.AdCount?.min,
              savedAdsPerams?.appliedFilters?.AdCount?.max,
            ]
          : [],
      adstatus: savedAdsPerams?.appliedFilters?.AdStatus?.status?.selectedValue,
      fb_likes:
        savedAdsPerams?.appliedFilters?.FacebookLikes?.min >
          savedAdsPerams?.maxRanger.FacebookLikes?.min ||
        savedAdsPerams?.appliedFilters?.FacebookLikes?.max <
          savedAdsPerams?.maxRanger.FacebookLikes?.max
          ? [
              savedAdsPerams?.appliedFilters?.FacebookLikes?.min,
              savedAdsPerams?.appliedFilters?.FacebookLikes?.max,
            ]
          : [],
      insta_followers:
        savedAdsPerams?.appliedFilters?.InstragramLike?.min >
          savedAdsPerams?.maxRanger.InstragramLike?.min ||
        savedAdsPerams?.appliedFilters?.InstragramLike?.max <
          savedAdsPerams?.maxRanger.InstragramLike?.max
          ? [
              savedAdsPerams?.appliedFilters?.InstragramLike?.min,
              savedAdsPerams?.appliedFilters?.InstragramLike?.max,
            ]
          : [],
      media_type: savedAdsPerams?.appliedFilters?.MediaType?.selectedValue,
      cta_status: savedAdsPerams?.appliedFilters?.ButtonStatus?.selectedValue,

      sort_by:
        savedAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        savedAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? ""
          : savedAdsPerams?.sortFilter?.type?.selectedValue,

      increaseCount:
        savedAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        savedAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? savedAdsPerams?.sortFilter?.type?.selectedValue
          : null,

      order_by:
        savedAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
        savedAdsPerams?.sortFilter?.type?.selectedValue === "false"
          ? ""
          : savedAdsPerams?.sortFilter?.order?.selectedValue,

      keywords:
        savedAdsPerams?.searchType === "All these words"
          ? savedAdsPerams?.searchBarData.split(" ")
          : [],

      phrase:
        savedAdsPerams?.searchType === "Exact Phrase"
          ? savedAdsPerams?.searchBarData.split(",")
          : [],
    };
    setQueryObject(queryObject)
  },[savedAdsPerams])
  
  return (
    <Grid item lg={3} md={4} xs={5} key={index}>
      <Card
      sx={{
          // transition: "transform 0.45s ease-in-out",
          // "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        
        borderRadius:"20px"
      }}
      >
      <Stack
        sx={{
          border: "2px solid #F6F6FB",
          padding: "10px",
          justifyContent: "space-between"
        }}
      >
        <Box className={classes.Addheader}>
          <Box
            sx={{
              border: 1,
              borderRadius: "50%",
              borderColor: "#EBEBEB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={adInfo?.pageInfo?.logo}
              aria-label="FirstCard"
              sx={{ width: 27, height: 27 }}
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#2B2F42",
              marginRight: "12px",
              paddingLeft: "10px",
            }}
            noWrap
          >
            {adInfo?.pageInfo?.name}
          </Typography>
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "24px",
              color: "#2B2F42",
              opacity: 0.6,
              marginRight: "12px",
            }}
          >
            {`(${Intl.NumberFormat().format(
              adInfo?.pageInfo?.platforms[0]?.likes
            )} likes)`}
          </Typography>
        </Box>
        <div style={{ height: "300px" }}>
          {adInfo.adMediaType === "video" ? (
            <video
              src={adInfo.bucketMediaURL}
              poster={adInfo?.thumbBucketUrl}
              style={{ height: "300px" }}
              autoPlay={false}
              className={classes.AdsVideo}
              controls
            />
          ) : adInfo?.adMediaType === "image" ? (
            <img
              src={adInfo?.bucketMediaURL}
              alt="thumbnail"
              style={{ height: "300px" }}
              className={classes.AdsImage}
            />
          ) : (
            <img
              src={Firstcardimg}
              alt="thumbnail"
              className={classes.AdsImage}
            />
          )}
        </div>

        <Grid container sx={{ padding: "4px" }}>
          <Grid item sm={9} md={9} lg={9} >
            <Stack direction={"column"}>
              <Stack direction={"row"}>
                {adInfo.status === "Active" ? (
                  <Typography>{adInfo.status}</Typography>
                ) : (
                  <Typography sx={{ color: "red" }}>
                    {adInfo.status}
                  </Typography>
                )}
                <Tooltip title="Redirect to shop link">
                  <img
                    src={Shareicon}
                    alt="Shareicon"
                    className={classes.shareicon}
                    onClick={(e) => {
                      console.log(adInfo?.purchaseURL);
                      window.open(adInfo?.purchaseURL, "_blank", "");
                    }}
                  />
                </Tooltip>
                <img
                    src={savedAdsManager.savedAdsIds.includes(adInfo?.id) ? StarFill : Saveicon}
                    alt="saved-icon"
                    className={classes.saveicon}
                    onClick={() => {
                      if(savedAdsManager.savedAdsIds.includes(adInfo?.id)){
                        dispatch(removesavedFilteredAdLocal(adInfo));
                        dispatch(removeSavedAdsIdsLocal(adInfo.id));
                        dispatch(removeFromSavedAdsStart({ ad: adInfo?.id }));
                      } else{
                        dispatch(addSavedAdsIdsLocal(adInfo.id));
                        dispatch(addToSavedAdsStart({ ad: adInfo.id }));
                        dispatch(addToSavedAdsFilterLocalStart({ ...queryObject, adId: adInfo.id }));
                      }
                    }}
                  />
              </Stack>

              <Typography color="#c0c0c0" className={classes.AdsText} noWrap>
                Started Running : {adInfo.startDate}
              </Typography>
              <Typography color="#2B2F42" className={classes.AdsText} noWrap>
                {adInfo.headline}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            sm={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                background: "linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
                display: "grid",
                width: "52px",
                height: "51px",
                padding: "5px 10px 10px",
              }}
            >
              <span
                style={{
                  fontSize: "25px",
                  lineHeight: "24px",
                  padding: "2px",
                  fontWeight: "700",
                }}
              >
                {adInfo.noOfCopyAds}
              </span>
              <span style={{ fontSize: "10px", margin: "auto" }}>Ads</span>
            </Avatar>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "20px", marginBottom: "20px", height: "100px" }}>
          <MyChart
            chartData={adInfo?.history}
            dataBoxVisiblity={false}
            axisVisiblity={false}
            graphHeight={"100px"}
          />
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: "17px",
            background:
              "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
            textTransform: "none",
          }}
          onClick={() => {
            // dispatch(srtPostionForScrollValueStart(window.pageYOffset));
            // navigate(`/adDeatails/${adInfo.id}`);
            navigate(`/adDeatails/${adInfo.id}`,{ state: { SingleAds: adInfo} });
          }}
        >
          <b>See Details</b>
        </Button>
      </Stack>
      </Card>
    </Grid>
  );
};

export default ThumbNailBox;
