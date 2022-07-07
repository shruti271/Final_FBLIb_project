import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  createSavedAdsStart,
  deleteSavedAdsStart,
} from "../redux/ducks/saveAds";
import Firstcard from "../assets/Firstcard.svg";
import Firstcardimg from "../assets/FirstCardImg.svg";
import Shareicon from "../assets/Shareicon.svg";
import Saveicon from "../assets/Saveicon.svg";
import Addgraph from "../assets/Addgraph.svg";
import StarFill from "../assets/StarFill.svg";
import {
  createSavedAdsClientSideStart,
  deleteSavedAdsClientSideStart,
  deleteSavedAdsClientSideSuccess,
} from "../redux/ducks/saveAds_clientSide";
import pauseButton from "../assets/pauseButton.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  titleHome: {
    // height: "37px !important",
    // width: "41px !important",
    // marginRight: "10px",
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

  AdsImageVideo: {
    width: "100%",
    height: "auto",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
  shareicon: {
    marginLeft: theme.spacing(5),
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

const ThumbNailBox = ({ adInfo, index, deleteId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Grid item lg={3} md={4} xs={4} key={index}>
      <Stack
        sx={{
          border: "2px solid #F6F6FB",
          padding: "10px",
        }}
      >
        <Box className={classes.Addheader}>
          <Box
            sx={{
              border: 1,
              // width: "35px",
              borderRadius: "50%",
              borderColor: "#EBEBEB",
              // borderColor: "black",

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
              //  fontWeight: "bold"
            }}
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
            {`(${adInfo?.pageInfo?.platforms[0].likes} likes)`}
          </Typography>
        </Box>
        <Box>
          {adInfo.adMediaType === "video" ? (
            //   <ReactSimpleVideoPlayer
            //   url={adInfo?.bucketMediaURL}
            //   poster={adInfo?.thumbBucketUrl}
            //   className={classes.AdsImageVideo}
            //   controls
            //   autosize
            // />
            <video
              src={adInfo.bucketMediaURL}
              poster={adInfo?.thumbBucketUrl}
              // style={{
              //   backgroundImage:
              //     pauseButton,
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center'
              // }}
              autoPlay={false}
              className={classes.AdsImageVideo}
              controls
            />
          ) : adInfo?.adMediaType === "image" ? (
            <img
              src={adInfo?.bucketMediaURL}
              alt="thumbnail"
              className={classes.AdsImageVideo}
            />
          ) : (
            <img
              src={Firstcardimg}
              alt="thumbnail"
              className={classes.AdsImageVideo}
            />
          )}
        </Box>

        <Grid container sx={{ padding: "4px" }}>
          <Grid item sm={9}>
            <Box
              className={classes.AddFooter}
              style={{ alignItems: "baseline" }}
            >
              <Typography>{adInfo.status}</Typography>
              <img
                src={Shareicon}
                alt="Shareicon"
                className={classes.shareicon}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(adInfo?.purchaseURL, "_blank", "");
                  // window.location.target="_blank"
                  // window.location.href=adInfo?.purchaseURL;
                }}
              />
              {deleteId ? (
                <img
                  src={StarFill}
                  alt="StarFill"
                  className={classes.saveicon}
                  onClick={() => {
                    dispatch(deleteSavedAdsClientSideStart(adInfo));
                    dispatch(deleteSavedAdsStart({ deleted_id: adInfo?.adID }));
                  }}
                />
              ) : (
                <img
                  src={Saveicon}
                  alt="Saveicon"
                  className={classes.saveicon}
                  onClick={async () => {
                    dispatch(
                      createSavedAdsClientSideStart({ ad: adInfo?.adID })
                    );
                    await dispatch(createSavedAdsStart({ ad: adInfo.adID }));
                  }}
                />
              )}

              <Typography color="#c0c0c0" className={classes.AdsText}>
                Started Running : {adInfo.startDate}
              </Typography>
              <Typography color="#2B2F42" className={classes.AdsText}>
                {adInfo.headline}
              </Typography>
            </Box>
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
            <Box
              sx={{
                width: "55px",
                height: "55px",
                background: "#00CBFF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="div"
                  sx={{
                    fontWeight: 600,
                    fontSize: "30px",
                    lineHeight: "24px",
                    color: "#F6F6FB",
                  }}
                >
                  {adInfo.noOfCopyAds}
                </Typography>
                <Typography
                  variant="div"
                  sx={{
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "24px",
                    color: "#F6F6FB",
                  }}
                >
                  Ads
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
          <img
            src={Addgraph}
            alt="addgraph"
            className={classes.AdsImageVideo}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: "17px",
              background:
                "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
              float: "right",
            }}
            onClick={() => {
              navigate(`/adDeatails/${adInfo.adID}`);
            }}
          >
            see Details
          </Button>
        </Box>
      </Stack>
    </Grid>
  );
};

export default ThumbNailBox;
