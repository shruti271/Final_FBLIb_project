import React, { useEffect, useState } from "react";
import { Grid, Stack, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Firstcard from "../assets/Firstcard.svg";
import Firstcardimg from "../assets/FirstCardImg.svg";
import Shareicon from "../assets/Shareicon.svg";
import StarFill from "../assets/StarFill.svg";
import Addgraph from "../assets/Addgraph.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteSavedAdsStart, loadSavedAdsStart } from "../redux/ducks/saveAds";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    // margin:
  },
  titleimage: {
    height: "37px !important",
    width: "41px !important",
    marginRight: "10px",
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
  staricon: {
    marginLeft: "20px",
    cursor: "pointer",
  },
  libraryimg: {
    marginLeft: "20px",
  },
  img: {
    // maxWidth: "100%",
    width: "100%",
    height: "auto",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  Arrow: {
    marginLeft: theme.spacing(1),
  },
  shareicon: {
    marginLeft: theme.spacing(5),
  },
  saveicon: {
    marginLeft: theme.spacing(2),
  },
  addinfo: {
    display: "inlineBlock",
    fontWeight: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
  sedetails: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    float: "right",
  },
}));

const Addheader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  padding: "6px",
  whiteSpace: "nowrap",
}));

const AddFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  //   padding: "2px",
  // marginLeft: "30px",
  whiteSpace: "nowrap",
}));

const SavedAds = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { savedAds } = useSelector((state) => state.savedAds);

  const { allMediaAds } = useSelector((state) => state.allMediaAds);

  const [savedAdsData, setSavedAdsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSavedAdsStart());
  }, []);
  useEffect(() => {
    setSavedAdsData((pre) => []);
    console.log("----------------inside");

    for (let i = 0; i < savedAds.length; i++) {
      console.log("----------------????????????inside");
      for (let j = 0; j < allMediaAds.length; j++) {
        if (savedAds[i].ad === allMediaAds[j].adID) {
          console.log("++++++++++++++----inside array " + allMediaAds[j].adID);
          console.log(allMediaAds[j]);
          setSavedAdsData((pre) => [
            ...pre,
            { deleteId: savedAds[i].id, data: allMediaAds[j] },
          ]);
        }
      }
    }
  }, [allMediaAds, savedAds]);

  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      {savedAdsData.map((ads, index) => (
        <Grid item xs={3} key={index}>
          <Stack
            sx={{
              border: "2px solid #F6F6FB",
              padding: "10px",
            }}
          >
            <Addheader>
              <Box sx={{ marginRight: "12px" }}>
                <img src={Firstcard} aria-label="Add" />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#2B2F42",
                }}
              >
                {ads?.data?.pageInfo?.name}
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#2B2F42",
                  opacity: 0.6,
                }}
              >
                (21,604 likes)
              </Typography>
            </Addheader>
            <Box>
              {ads?.data.adMediaType === "video" ? (
                <video
                  src={ads?.data.bucketMediaURL}
                  autoPlay={false}
                  // muted
                  className={classes.img}
                  controls
                  // onClick={() => navigate(`/adDeatails/${media.adID}`)}
                />
              ) : ads?.data?.adMediaType === "image" ? (
                <img
                  src={ads?.data?.bucketMediaURL}
                  alt="img1"
                  className={classes.img}
                  // onClick={() => navigate(`/adDeatails/${media.adID}`)}
                />
              ) : (
                <img src={Firstcardimg} alt="img1" className={classes.img} />
              )}
            </Box>

            <Grid container sx={{ padding: "4px" }}>
              <Grid item sm={9}>
                <AddFooter>
                  <Typography>{ads?.data.status}</Typography>
                  <img
                    src={Shareicon}
                    alt="img2"
                    className={classes.shareicon}
                  />
                  {console.log(ads.deleteId)}
                  <img
                    src={StarFill}
                    alt="img2"
                    className={classes.saveicon}
                    onClick={() => {
                      console.log("-----------------"+ads.deleteId);
                      dispatch(deleteSavedAdsStart({ id: ads.deleteId }));
                    }}
                  />
                  <Typography color="#c0c0c0" className={classes.addinfo}>
                    Started Running : {ads.startDate}
                  </Typography>
                  <Typography color="#2B2F42" className={classes.addinfo}>
                    {/* Sollar Powered Butterfly Lights */}
                    {ads?.data.headline}
                  </Typography>
                </AddFooter>
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
                      {ads?.data.noOfCopyAds}
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
              <img src={Addgraph} alt="addgraph" className={classes.img} />
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "17px" }}
              className={classes.sedetails}
              onClick={() => {
                // navigate("adDeatails");
                navigate(`/adDeatails/${ads?.data.adID}`);
              }}
            >
              see Details
            </Button>
          </Stack>
        </Grid>
      ))}
      {/* {savedAds.map((user, index) => (
        <Grid item xs={3} key={index}>
          <Stack
            sx={{
              border: "2px solid #F6F6FB",
              padding: "10px",
            }}
          >
            <Addheader>
              <Box sx={{ marginRight: "12px" }}>
                <img src={Firstcard} aria-label="Add" />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#2B2F42",
                }}
              >
                Best Sollar Lighting{" "}
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#2B2F42",
                  opacity: 0.6,
                }}
              >
                (21,604 likes)
              </Typography>
            </Addheader>
            <Box>
              <img src={Firstcardimg} alt="img1" className={classes.img} />
            </Box>

            <Grid container sx={{ padding: "4px" }}>
              <Grid item sm={9}>
                <AddFooter>
                  <Typography>Active</Typography>
                  <img
                    src={Shareicon}
                    alt="img2"
                    className={classes.shareicon}
                  />
                  <img src={Saveicon} alt="img2" className={classes.saveicon} />
                  <Typography color="#c0c0c0" className={classes.addinfo}>
                    Started Running : May 15,2022
                  </Typography>
                  <Typography color="#2B2F42" className={classes.addinfo}>
                    Sollar Powered Butterfly Lights
                  </Typography>
                </AddFooter>
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
                      1
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
              <img src={Addgraph} alt="addgraph" className={classes.img} />
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "17px" }}
              className={classes.sedetails}
            >
              see Details
            </Button>
          </Stack>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default SavedAds;
