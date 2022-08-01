import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, Button, Stack, Avatar } from "@mui/material";
import Firsrcardimg from "../../assets/FirstCardImg.svg";
import facebook from "../../assets/facebook.svg";
import instragram from "../../assets/instragram.svg";
import MyChart from "../../components/linemy";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadSingleAdDataClear, loadSingleAdDataStart } from "../../redux/ducks/singleAdsData";
import { FadeLoader } from "react-spinners";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <Typography variant="p" className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <Typography
          variant="h7"
          style={{ color: "#B5EDFF", cursor: "pointer" }}
          onClick={toggleReadMore}
          className="read-or-hide"
        >
          {isReadMore ? "...Read more" : " Show less"}
        </Typography>
      </Typography>
    </>
  );
};

function AdDeatails() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { adId } = useParams();
  const filteredAds = useSelector((state) => state.filteredAds);
  const subAllAds = useSelector((state) => state.subAllAds);
  const {filteredSavedAds} = useSelector((state) => state.filteredSavedAds);
  const { singleAdData, loading } = useSelector((state) => state.singleAdData);

  const [adDetail, setAdDetail] = useState();

  window.scrollTo(
    {
      top: 0,
      behavior: "smooth",
    },
    []
  );
  // const abc= async ()=>{
  //   dispatch(loadSingleAdDataStart({ id: adId }));
  // }
  useEffect(() => {
    if (filteredAds.filteredAds.length > 0) {
      // eslint-disable-next-line array-callback-return
      let adTobeDisplay =
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

      // console.log("adTobeDisplay",adTobeDisplay)
      setAdDetail(adTobeDisplay);

      if (!adTobeDisplay) {        
        dispatch(loadSingleAdDataStart({ id: adId }));
      }
    }
  }, [dispatch, filteredAds, adId]);

  useEffect(() => {    
    if (!adDetail && Object.keys(singleAdData).length) {      
      setAdDetail(singleAdData);
      dispatch(loadSingleAdDataClear());      
    }
  }, [singleAdData]);


  return (
    <>
      <Box
        className="loader"
        style={{
          opacity: loading ? 1 : 0,
          position: "absolute",
          top: "50%",
          left: "55%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1,
          // width:"100%"
        }}
      >
        <FadeLoader
          color="#00BFFF"
          cssOverride={{ top: "0px", marginTop: "35px" }}
        />
      </Box>
      {adDetail && (
        <Grid container sx={{ marginTop: "36px" }}>
          <Grid item xs={12} lg={4} md={4} sm={12}>
            <Box
              sx={{ border: "1px solid #EBEBEB",
                borderRadius: "10px" }}
            >
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "13px",
                    marginLeft: "20px",
                  }}
                >
                  <Box
                    sx={{
                      border: 2,
                      borderRadius: "50%",
                      borderColor: "#EBEBEB",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={adDetail?.pageInfo?.logo}
                      aria-label="FirstCard"
                      style={{ width: "30px", height: "30px" }}
                    ></Avatar>
                  </Box>
                  <Typography
                    variant="h6"
                    style={{
                      marginLeft: "8px",
                      lineHeight: "30px",
                      color: "#2B2F42",
                      fontWeight: "bold",
                    }}
                  >
                    <b>
                      {adDetail?.pageInfo?.name ? adDetail.pageInfo?.name : " "}
                    </b>
                  </Typography>
                </Box>

                <Box sx={{ marginLeft: 2, marginRight: 2 }}>
                  <Typography
                    sx={{
                      fontWeight: 500,

                      lineHeight: "27px",
                      letterSpacing: "0.03em",
                      color: "#2B2F42",
                      margin: "10px 12px 10px 15px",
                    }}
                  >
                    <ReadMore>
                      {adDetail?.adDescription ? adDetail.adDescription : " "}
                    </ReadMore>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    marginLeft: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {adDetail?.adMediaType === "video" ? (
                    <video
                      poster={adDetail?.thumbBucketUrl}
                      src={adDetail?.bucketMediaURL}
                      controls
                      className={classes.AdsImageVideo}
                    />
                  ) : adDetail?.adMediaType === "image" ? (
                    <img
                      src={adDetail?.bucketMediaURL}
                      alt="img1"
                      className={classes.AdsImage}
                    />
                  ) : (
                    <img
                      src={Firsrcardimg}
                      alt="img1"
                      className={classes.AdsImage}
                    />
                  )}
                </Box>
                <Box sx={{ marginRight: 2, marginTop: 1 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={10}>
                      <Box sx={{ paddingLeft: "20px" }}>
                        <Typography
                          sx={{
                            lineHeight: "23px",
                            letterSpacing: "0.035em",
                            color: "#2B2F42",
                            opacity: 0.6,
                          }}
                          noWrap
                        >
                          <b>
                            {" "}
                            {adDetail?.displayURL
                              ? adDetail.displayURL.replace("HTTPS://", "")
                              : " "}
                          </b>
                        </Typography>
                        <Typography
                          style={{
                            lineHeight: "30px",
                            letterSpacing: "0.035em",
                            color: "#2B2F42",
                            fontWeight: "bold",
                          }}
                        >
                          {adDetail?.headline ? adDetail.headline : " "}
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: 400,
                            fontSize: "17px",
                            lineHeight: "21px",
                            letterSpacing: "0.035em",
                            color: "#2B2F42",
                          }}
                        >
                          <ReadMore>
                            {adDetail?.purchaseDescription
                              ? adDetail.purchaseDescription
                              : " "}
                          </ReadMore>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: "#00CBFF",
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
                          {adDetail?.noOfCopyAds ? adDetail.noOfCopyAds : " "}
                        </span>
                        <span style={{ fontSize: "10px", margin: "auto" }}>
                          Ads
                        </span>
                      </Avatar>
                    </Grid>
                  </Grid>
                </Box>
                <Grid container justifyContent="flex-end">
                  <Button
                    style={{
                      background:
                        "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
                      borderRadius: 18,
                      textTransform: "none",
                      width: "156px",
                      height: "31px",
                      color: "white",
                      marginBottom: "15px",
                      marginRight: "15px",
                      marginTop: "10px",
                    }}
                    onClick={() => {
                      window.open(adDetail?.purchaseURL, "_blank", "");
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontStyle={{ color: "white" }}
                      noWrap
                    >
                      <b>{adDetail?.ctaStatus}</b>
                    </Typography>
                  </Button>
                </Grid>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8} md={8} sm={12} p={2}>
            <Box>
              <Grid container sx={{ justifyContent: "space-around" }}>
                <Button
                  style={{
                    background: "#00CBFF",
                    borderRadius: 30,
                    fontSize: "18px",
                    textTransform: "none",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <a
                    href={adDetail?.thumbBucketUrl}
                    style={{ textDecoration: "none", color: "white" }}
                    download
                  >
                    {" "}
                    Download Thumbnail
                  </a>
                </Button>
                <Button
                  style={{
                    background: "#00CBFF",
                    borderRadius: 30,
                    fontSize: "18px",
                    textTransform: "none",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                  disabled={adDetail?.adMediaType === "video" ? false : true}
                >
                  <a
                    href={adDetail?.bucketMediaURL}
                    style={{ textDecoration: "none", color: "white" }}
                    download
                  >
                    {" "}
                    Download Video
                  </a>
                </Button>
              </Grid>
              <Grid
                container
                sx={{ justifyContent: "space-around", marginTop: "40px" }}
              >
                <Stack sx={{ alignItems: "center" }}>
                  <Typography className={classes.textdeco}>
                    Ad Status:
                  </Typography>
                  <Typography className={classes.textdeco}>
                    <b> {adDetail?.status ? adDetail.status : " "}</b>
                  </Typography>
                </Stack>
                <Stack sx={{ alignItems: "center" }}>
                  <Typography className={classes.textdeco}>
                    Started Running On:
                  </Typography>
                  <Typography className={classes.textdeco}>
                    <b> {adDetail?.startDate ? adDetail.startDate : " "}</b>
                  </Typography>
                  <Typography className={classes.textdeco}>
                    <b>
                      {" "}
                      {Math.floor(
                        Math.abs(
                          (new Date(adDetail?.startDate).getTime() -
                            new Date().getTime()) /
                            (1000 * 3600 * 24)
                        )
                      )}
                      {" Days"}
                    </b>
                  </Typography>
                </Stack>
                <Stack sx={{ alignItems: "center" }}>
                  <Typography className={classes.textdeco}>
                    Placements:
                  </Typography>
                  {adDetail?.platforms?.map((ads, index) => (
                    <Typography className={classes.textdeco} key={index}>
                      {" "}
                      <b>{ads}</b>
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  flexWrap: "nowrap",
                }}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "60px",
                  }}
                  spacing={2}
                >
                  <Typography style={{ fontWeight: 600 }} noWrap>
                    {adDetail?.pageInfo?.name}
                  </Typography>
                  <Box
                    sx={{
                      width: "112px",
                      height: "112px",
                      border: 2,
                      borderRadius: "50%",
                      borderColor: "#EBEBEB",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={adDetail?.pageInfo?.logo}
                      aria-label="FirstCard"
                      style={{ width: "100%", height: "100%" }}
                    ></Avatar>
                  </Box>
                </Stack>
                <Stack style={{ justifyContent: "center", marginTop: "36px" }}>
                  {adDetail?.pageInfo?.platforms.map((socialMedia, index) => {
                    return (
                      <Stack
                        key={index}
                        direction={"row"}
                        sx={{
                          marginBottom: "16px",
                        }}
                      >
                        <Box sx={{ marginRight: "10px" }}>
                          <img
                            src={
                              socialMedia.name === "Facebook"
                                ? facebook
                                : instragram
                            }
                            aria-label="Add"
                          />
                        </Box>
                        <Stack>
                          <Typography
                            style={{
                              fontFamily: "Neue Haas Grotesk Display Pro",
                            }}
                          >
                            {socialMedia?.other}
                          </Typography>
                          <Typography
                            style={{
                              fontFamily: "Neue Haas Grotesk Display Pro",
                            }}
                          >
                            {socialMedia.name === "Facebook"
                              ? socialMedia.likes +
                                " likes • " +
                                socialMedia.type
                              : socialMedia.followers +
                                " followers • " +
                                socialMedia.type}
                          </Typography>
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>
              </Grid>
              <Grid>
                <Stack
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  direction="column"
                >
                  <Typography variant="h6">
                    <b>Ad Count Over 30 Days</b>
                  </Typography>

                  <Grid container>
                    <Grid item xs={12} lg={12} sm={12}>
                      <MyChart
                        chartData={adDetail?.history}
                        dataBoxVisiblity={false}
                        axisVisiblity={true}
                        fillType={"area"}
                        graphHeight={350}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default AdDeatails;

const useStyles = makeStyles(() => ({
  AdsImageVideo: {
    objectFit: "fill",
    height: "400px",
    width: "95%",
  },
  AdsImage: {
    width: "95%",
    height: "400px",
    objectFit: "fill",
    padding: "0",
    margin: "0",
  },
}));
