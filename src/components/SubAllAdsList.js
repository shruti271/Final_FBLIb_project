import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { Box, Input, Pagination, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import * as subAllAdsDuck from "../redux/ducks/subAllAds";
import ThumbNailBox from "./ThumbNailBox";

const SubAllAdsList = () => {
  const dispatch = useDispatch();
  const subAllAds = useSelector((state) => state.subAllAds);

  useEffect(() => {
    window.scrollTo(0, subAllAds.postionOfPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {subAllAds?.loading && subAllAds?.subAllAds.length === 0 ? (
        <Box
          className="loader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FadeLoader
            color="#00BFFF"
            cssOverride={{ top: "0px", marginTop: "35px" }}
          />
        </Box>
      ) : (
        <Grid
          item
          sx={{
            width: "90%",
          }}
        >
          <Grid
            container
            sx={{
              marginTop: "5px",
              width: "100%",
            }}
          >
            {subAllAds?.subAllAds?.length !== 0 &&
              subAllAds?.subAllAds?.map((ads, index) => (
                <ThumbNailBox adInfo={ads} index={index} key={index} />
              ))}
            {subAllAds?.subAllAds?.length === 0 &&
              subAllAds?.loading === false && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography>No Result</Typography>
                </Box>
              )}
          </Grid>
        </Grid>
      )}
      <Box
        sx={{
          width: "100%",
          marginBottom: 5,
          marginTop: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {(subAllAds.pageIndex !== 0 || !subAllAds?.loading) && (
          <>
          <Pagination
            count={subAllAds?.totalPages}
            size={"large"}
            page={subAllAds?.pageIndex + 1}
            onChange={(e, p) => {
              if (
                Object.keys(subAllAds?.filterSubAllData).includes(
                  `${(p - 1).toString()}`
                )
              ) {
                dispatch(subAllAdsDuck.laodSubAllCashedPageData(p - 1));
              } else {
                dispatch(
                  subAllAdsDuck.loadMoreSubAllAdsStart({
                    page_name: subAllAds?.pageName,
                    number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
                    page_index: p - 1,
                  })
                );
              }
            }}
          />
          <Box
                sx={{ display: "flex", alignItems: "center", width: "auto" }}
              >
                <Typography sx={{ width: "auto", marginRight: 1 }}>
                  {"Go to"}
                </Typography>
                <Input
                  sx={{
                    background: "white",
                    borderRadius: 1,
                    maxWidth: "40%",
                    border: 1,
                    borderColor: "#EBEBEB",
                    pl: 1,
                    p: 1,
                    height: "45px",
                  }}
                  placeholder="Page No."
                  type="number"
                  disableUnderline={true}
                  onKeyUp={(e) => {
                    
                    if (e.key === "Enter") {
                      if (
                        Object.keys(subAllAds?.filterSubAllData).includes(
                          `${(e.currentTarget.value - 1).toString()}`
                        )
                      ) {
                        dispatch(subAllAdsDuck.laodSubAllCashedPageData(e.currentTarget.value - 1));
                      } else {
                        dispatch(
                          subAllAdsDuck.loadMoreSubAllAdsStart({
                            page_name: subAllAds?.pageName,
                            number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
                            page_index: e.currentTarget.value - 1,
                          })
                        );
                      }
                    }
                  }}
                />
              </Box>
              </>
        )}
      </Box>
    </>
  );
};

export default SubAllAdsList;
