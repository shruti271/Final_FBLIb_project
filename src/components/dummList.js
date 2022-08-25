// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FadeLoader } from "react-spinners";
// import { Grid } from "@material-ui/core";
// import { Box, Pagination, Stack, Typography } from "@mui/material";
// import ThumbNailBox from "./ThumbNailBox";
// import { useSkipInitialEffect } from "../utils/customHooks";
// import * as allAdsPeramsDuck from "../redux/ducks/allAdsPerams";
// import {
//   clearCashedPageData,
//   laodCashedPageData,
//   loadFilteredAdsStart,
//   setCurrentPaginationIndex,
// } from "../redux/ducks/filteredAds";
// import emptyImg from "../assets/empty.svg";
// // import Masony from "react-masonry-component";
// // import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// // import Masonry from "react-masonry-css";
// import Masonry from "react-masonry-css";
// import { ResponsiveMasonry } from "react-responsive-masonry";
// // import Masonry from '@mui/lab/Masonry';

// const masonryOptions = {
//   fitWidth: false,
//   columnWidth: 10,
//   gutter: 10,
//   itemSelector: ".photo-item",
// };
// const imagesLoadedOptions = { background: ".my-bg-image-el" };

// const DummList = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const filteredAds = useSelector((state) => state.filteredAds);
//   const allAdsPerams = useSelector((state) => state.allAdsPerams);
//   const [queryObject, setQueryObject] = useState({});



//   useEffect(() => {
//     window.scrollTo(0, filteredAds.postionOfPage);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useSkipInitialEffect(() => {
//     const queryObject = {
//       startdate: allAdsPerams?.appliedFilters?.StartRunningDate?.startdate,
//       enddate: allAdsPerams?.appliedFilters?.StartRunningDate?.enddate,
//       adcount:
//         allAdsPerams?.appliedFilters?.AdCount?.chipText !== ""
//           ? [
//               allAdsPerams?.appliedFilters?.AdCount?.min,
//               allAdsPerams?.appliedFilters?.AdCount?.max,
//             ]
//           : [],
//       adstatus: allAdsPerams?.appliedFilters?.AdStatus?.selectedValue,
//       fb_likes:
//         allAdsPerams?.appliedFilters?.FacebookLikes?.chipText?.length !== 0
//           ? [
//               allAdsPerams?.appliedFilters?.FacebookLikes?.min,
//               allAdsPerams?.appliedFilters?.FacebookLikes?.max,
//             ]
//           : [],
//       insta_followers:
//         allAdsPerams?.appliedFilters?.InstagramFollowers?.chipText !== ""
//           ? [
//               allAdsPerams?.appliedFilters?.InstagramFollowers?.min,
//               allAdsPerams?.appliedFilters?.InstagramFollowers?.max,
//             ]
//           : [],
//       media_type: allAdsPerams?.appliedFilters?.MediaType?.selectedValue,
//       cta_status: allAdsPerams?.appliedFilters?.ButtonStatus?.selectedValue,

//       sort_by:
//         allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
//         allAdsPerams?.sortFilter?.type?.selectedValue === "false"
//           ? ""
//           : allAdsPerams?.sortFilter?.type?.selectedValue,

//       increaseCount:
//         allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
//         allAdsPerams?.sortFilter?.type?.selectedValue === "false"
//           ? allAdsPerams?.sortFilter?.type?.selectedValue
//           : null,

//       order_by:
//         allAdsPerams?.sortFilter?.type?.selectedValue === "true" ||
//         allAdsPerams?.sortFilter?.type?.selectedValue === "false"
//           ? ""
//           : allAdsPerams?.sortFilter?.order?.selectedValue,

//       keywords: allAdsPerams?.searchBarData.length
//         ? allAdsPerams?.searchType === "Ad Text"
//           ? allAdsPerams?.searchBarData.split(" ")
//           : null
//         : null,

//       phrase: allAdsPerams?.searchBarData.length
//         ? allAdsPerams?.searchType === "Exact Phrase"
//           ? allAdsPerams?.searchBarData.split(",")
//           : null
//         : null,
//     };
//     setQueryObject(queryObject);
//   }, [
//     allAdsPerams.appliedFilters,
//     allAdsPerams.sortFilter,
//     allAdsPerams.pageIndex,
//     allAdsPerams.searchBarData,
//   ]);

//   useSkipInitialEffect(() => {
//     if (
//       Object.keys(filteredAds?.filterData).includes(
//         allAdsPerams?.pageIndex.toString()
//       )
//     ) {
//       dispatch(laodCashedPageData(filteredAds?.paginationIndex));
//     } else {
//       dispatch(
//         loadFilteredAdsStart({
//           ...queryObject,
//           page_index: filteredAds?.paginationIndex,
//           number_of_pagead: process.env.REACT_APP_NO_OF_ADS_PER_PAGE,
//         })
//       );
//     }
//   }, [dispatch, queryObject]);

//   useSkipInitialEffect(() => {
//     if (allAdsPerams.searchBarData.length > 0) {
//       location.pathname === "/" && dispatch(clearCashedPageData());
//       setQueryObject({
//         ...queryObject,
//         keywords: allAdsPerams?.searchBarData.length
//           ? allAdsPerams?.searchType === "Ad Text"
//             ? allAdsPerams?.searchBarData.split(" ")
//             : null
//           : null,

//         phrase: allAdsPerams?.searchBarData.length
//           ? allAdsPerams?.searchType === "Exact Phrase"
//             ? allAdsPerams?.searchBarData.split(",")
//             : null
//           : null,
//       });
//     }
//   }, [dispatch, allAdsPerams.searchType, allAdsPerams.searchBarData]);

//   return (
//     <>
//       {filteredAds?.loading && filteredAds?.filteredAds.length === 0 ? (
//         <Box
//           className="loader"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//           }}
//         >
//           <FadeLoader
//             color="#00BFFF"
//             cssOverride={{ top: "0px", marginTop: "35px" }}
//           />
//         </Box>
//       ) : (
//         <Grid
//           item
//           sx={{
//             width: "90%",
//           }}
//         >
//           <Grid
//             container
//             sx={{
//               marginTop: "5px",
//               width: "100%",
//             }}
//           >
//             {/* <Masonry
//               breakpointCols={{
//                 default: 3,
//                 1100: 3,
//                 900: 2,
//                 700: 1,
//               }}
//               className="my-masonry-grid"
//               columnClassName="my-masonry-grid_column"
//             >
//               {filteredAds?.filteredAds?.length !== 0 &&
//                 filteredAds?.filteredAds?.map((ads, index) => (
//                   <ThumbNailBox adInfo={ads} index={index} key={index} />
//                 ))}
//             </Masonry> */}
//             {/* <Masony
//               className={"my-gallery-class"} 
//               elementType={"ul"} // default 'div'
//     options={masonryOptions} // default {}
//     disableImagesLoaded={false} // default false
//     updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//     imagesLoadedOptions={imagesLoadedOptions} 
//             >
//               {filteredAds?.filteredAds?.length !== 0 &&
//                 filteredAds?.filteredAds?.map((ads, index) => (
//                   <ThumbNailBox adInfo={ads} index={index} key={index} />
//                 ))}
//             </Masony> */}
//             {/* <ResponsiveMasonry
//                columnsCountBreakPoints={{350: 3, 750: 2, 900: 4}}
//             > */}
//               <Masonry  //className="grid" columns={{ xs: 1, sm: 2, md: 3 , lg:4 }}
//                 columnsCount={4}
//               //   breakpointCols={{1440:4, 1000: 3, 700: 2, 500: 1 }}
//               >
//                 {filteredAds?.filteredAds?.length !== 0 &&
//                   filteredAds?.filteredAds?.map((ads, index) => (
//                     <ThumbNailBox adInfo={ads} index={index} key={index} />
//                   ))}
//               </Masonry>
//             {/* </ResponsiveMasonry> */}
//             {filteredAds?.filteredAds?.length === 0 &&
//               filteredAds?.loading === false && (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     width: "100%",
//                   }}
//                 >
//                   <Stack>
//                     <img src={emptyImg} alt="" />
//                     <Typography sx={{ color: "#808080" }}>
//                       No Records Found
//                     </Typography>
//                   </Stack>
//                 </Box>
//               )}
//           </Grid>
//         </Grid>
//       )}
//       <Box
//         sx={{
//           width: "100%",
//           marginBottom: 5,
//           marginTop: 5,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {(allAdsPerams.pageIndex !== 0 || !filteredAds?.loading) && (
//           <Pagination
//             count={filteredAds?.totalPages}
//             size={"large"}
//             page={filteredAds?.paginationIndex + 1}
//             onChange={(e, p) => {
//               dispatch(setCurrentPaginationIndex(p - 1));
//               dispatch(allAdsPeramsDuck.setDatabasePageIndex(p - 1));
//             }}
//           />
//         )}
//       </Box>
//     </>
//   );
// };

// export default DummList;