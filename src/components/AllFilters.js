// import { makeStyles } from '@material-ui/core';
// import { Box, Button, Divider, Grid, InputBase, Popover, Stack, Typography } from '@mui/material';
// import React, { useState } from 'react'
// import Arrowdown from "../assets/Arrowdown.svg";
// import { useDispatch ,useSelector} from "react-redux";
// import { applyallfilters, datevalueStart, searchStart, SortvalueStart } from '../redux/ducks/filtered_Data';
// import { DateRange } from 'react-date-range';
// import { format } from "date-fns";
// import { addDays } from "date-fns";

// const useStyles = makeStyles((theme) => ({
//     title: {
//       background:
//         "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     },
//     titleHome: {
//       // height: "37px !important",
//       // width: "41px !important",
//       // marginRight: "10px",
//       fontWeight: 600,
//       fontSize: "24px",
//       lineHeight: "24px",
//       color: "#2B2F42",
//     },
//     subTitleHome: {
//       // fontWeight: 500,
//       // fontSize: "18px",
//       // lineHeight: "24px",
//       // color: "#2B2F42",
//       // marginTop: "8px",
//       // marginBottom: "18px",
//     },
//     addTextfilter: {
//       padding: theme.spacing(1, 3),
//       border: "1px solid #EBEBEB",
//       borderRadius: "15px",
//       marginTop: "10px",
//     },
//     addtextfilterButton: {
//       padding: "4px 4px",
//       borderRadius: 10,
//       display: "flex",
//       justifyContent: "space-between",
//       border: "2px solid #EBEBEB",
//     },
//     divider: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     calenderfilter: {
//       color: "#2B2F42",
//       whiteSpace: "nowrap",
//       border: "1px solid #EBEBEB",
//       borderRadius: 3,
//     },

//     AdsImageVideo: {
//       width: "100%",
//       height: "auto",
//       padding: "0",
//       margin: "0",
//       overflowY: "none",
//       outline: "none",
//     },
//     DropDownArrow: {
//       marginLeft: theme.spacing(1),
//     },
//     shareicon: {
//       marginLeft: theme.spacing(5),
//     },
//     saveicon: {
//       marginLeft: theme.spacing(2),
//       cursor: "pointer",
//     },
//     AdsText: {
//       display: "inlineBlock",
//       fontWeight: "16px",
//       whiteSpace: "nowrap",
//       overflow: "hidden !important",
//       textOverflow: "ellipsis",
//     },
//     Addheader: {
//       display: "flex",
//       justifyContent: "space-evenly",
//       padding: "6px",
//       whiteSpace: "nowrap",
//     },
//     AddFooter: {
//       display: "flex",
//       flexWrap: "wrap",
//       whiteSpace: "nowrap",
//     },
//     FilterBox: {
//       color: "#2B2F42",
//       whiteSpace: "nowrap",
//       border: "1px solid #EBEBEB",
//       borderRadius: "10px",
//       marginRight: "14px",
//       marginTop: "22px",
//     },
//   }));

// function AllFilters() {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const { allMediaAds, loading } = useSelector((state) => state.allMediaAds);
//   const {
//     filteredData,
//     appliedFilters,
//     sortFilter,
//     searchBarData,
//     postionYoffset,
//   } = useSelector((state) => state.filteredData);

//   const { savedIds } = useSelector((state) => state.savedclienads);

//   const [onFocusEditTextField, setOnFocusEditTextField] = React.useState(0);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const [rangeanchorel, setrangeAnchorEl] = React.useState(null);
//   const addcounteropen = Boolean(rangeanchorel);
//   const [mediaTypeAnchorel, setMediaTypeAnchorel] = React.useState(null);
//   const openMediaTypeAnchorel = Boolean(mediaTypeAnchorel);
//   const [adStatusAnchorel, setAdStatusAnchorel] = React.useState(null);
//   const openAdStatusAnchorel = Boolean(adStatusAnchorel);
//   const [sortByAnchorel, setSortByAnchorel] = React.useState(null);
//   const openSortByAnchorel = Boolean(sortByAnchorel);
//   const [facebookLikeanchorel, setFacebookLikeAnchorEl] = React.useState(null);
//   const openFaceboolLike = Boolean(facebookLikeanchorel);
//   const [instragramFolloweranchorel, setInstragramFollowerAnchorEl] =
//     React.useState(null);
//   const openInstragramFollower = Boolean(instragramFolloweranchorel);
//   const [ButtonTypeanchorel, setButtonTypeAnchorEl] = React.useState(null);
//   const openButtonType = Boolean(ButtonTypeanchorel);

//   const [range, setRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);
//   return (
//     <Grid
//             item
//             xs={12}
//             sx={{
//               border: "1px solid #EBEBEB",
//               borderRadius: "15px",
//               padding: "16px 36px",
//               marginTop: 2,
//             }}
//           >
//             <Grid
//               container
//               sx={{ border: "2px solid #EBEBEB", borderRadius: "10px" }}
//             >
//               <Grid item xs={2} sx={{ display: "flex" }}>
//                 <Box sx={{ width: "100%", marginRight: "21px" }}>
//                   <Stack
//                     direction={"row"}
//                     sx={{ justifyContent: "space-between" }}
//                   >
//                     <Button label="Outlined" sx={{ color: "#2B2F42" }}>
//                       <Typography noWrap textTransform="capitalize">
//                         Add Text
//                       </Typography>
//                     </Button>
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   </Stack>
//                 </Box>
//                 <Divider orientation="vertical" sx={{ marginLeft: "auto" }} />
//               </Grid>
//               <Grid item xs={10}>
//                 <Box sx={{ marginLeft: "21px" }}>
//                   {/* <form
//                     onSubmit={(value) => {
//                       console.log(value);
//                       console.log(
//                         "--------------------------???????????????????????"
//                       );
//                     }}
//                   >*/}

//                   <InputBase
//                     id="searchbar"
//                     fullWidth
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         dispatch(
//                           searchStart({
//                             keywords: e.currentTarget.value.split(" "),
//                           })
//                         );
//                         // dispatch(applyallfilters())
//                         // const dum = Object.values(filteredData[2]).flat();
//                         // console.log(Object.values(filteredData[2]).flat());
//                         // // console.log(dum.includes("2022-06-10"));

//                         // filteredData.map((ads) => {
//                         //   // Object.values(ads).flat()
//                         //   const rarr = e.currentTarget.value.split(" ");
//                         //   console.log(rarr);
//                         //   e.currentTarget.value
//                         //     .split(" ")
//                         //     .every((a) =>
//                         //       Object.values(ads).flat().includes(a)
//                         //     );
//                         //   console.log(
//                         //     Object.values(ads).flat().includes("2022-06-10")
//                         //   );
//                         //   return true;
//                         // });
//                       }
//                       console.log("||||||||||||||||||||||||||||||||||||||||||");
//                       console.log(e.currentTarget.value === "");
//                       console.table(e.currentTarget.value);
//                       console.log("||||||||||||||||||||||||||||||||||||||||||");
//                       if (e.currentTarget.value === "") {
//                         dispatch(applyallfilters());
//                         dispatch(
//                           searchStart({
//                             keywords: [],
//                           })
//                         );
//                         // dispatch(applyallfilters());
//                         // document.getElementById("searchbar").value
//                         dispatch(searchStart(searchBarData));
//                         // : dispatch(applyallfilters());
//                       }
//                     }}
//                     margin="dense"
//                     size="large"
//                     placeholder="Search"
//                     // onSubmit={(value) => {
//                     //   console.log(value);
//                     //   console.log(
//                     //     "--------------------------???????????????????????"
//                     //   );
//                     // }}
//                   />
//                   {/* </form> */}
//                 </Box>
//               </Grid>
//             </Grid>
//             <Grid container>
//               <Grid item lg={11} md={11}>
//                 <Button
//                   onClick={(event) => {
//                     setAnchorEl(event.currentTarget);
//                   }}
//                   size="large"
//                   variant="outlined"
//                   disableElevation
//                   disableRipple
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                   }}
//                   // className={classes.FilterBox}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     Started Running Date{" "}
//                   </Typography>
//                 </Button>
//                 <Popover
//                   anchorEl={anchorEl}
//                   open={open}
//                   add={open ? "simple-popover" : undefined}
//                   onClose={() => {
//                     setAnchorEl(null);
//                     document.getElementById("searchbar").value
//                       ? dispatch(searchStart(searchBarData))
//                       : dispatch(applyallfilters());
//                     // searchBarData?.keywords !== []
//                     //   ? dispatch(searchStart(searchBarData))
//                     //   : dispatch(applyallfilters());

//                     dispatch(SortvalueStart());
//                   }}
//                   transformOrigin={{
//                     horizontal: "left",
//                     vertical: "top",
//                   }}
//                   anchorOrigin={{
//                     horizontal: "left",
//                     vertical: "bottom",
//                   }}
//                 >
//                   <DateRange
//                     onClick={(item) => {
//                       console.log(item);
//                       dispatch(
//                         datevalueStart({
//                           name: "StartRunningDate",
//                           startdate: format(
//                             item.selection.startDate,
//                             "yyyy-MM-dd"
//                           ),
//                           enddate: format(item.selection.endDate, "yyyy-MM-dd"),
//                           Message: `running date ${format(
//                             item.selection.startDate,
//                             "yyyy-MM-dd"
//                           )}`,
//                         })
//                       );
//                       // searchBarData?.keywords !== []
//                       // ? dispatch(searchStart(searchBarData))
//                       // :
//                       // dispatch(applyallfilters());
//                       document.getElementById("searchbar").value
//                         ? dispatch(searchStart(searchBarData))
//                         : dispatch(applyallfilters());
//                       setRange([item.selection]);
//                     }}
//                     onChange={(item) => {
//                       console.log(item);
//                       dispatch(
//                         datevalueStart({
//                           name: "StartRunningDate",

//                           startdate: format(
//                             item.selection.startDate,
//                             "yyyy-MM-dd"
//                           ),
//                           enddate: format(item.selection.endDate, "yyyy-MM-dd"),
//                           Message: `running date ${format(
//                             item.selection.startDate,
//                             "yyyy-MM-dd"
//                           )} to ${format(
//                             item.selection.endDate,
//                             "yyyy-MM-dd"
//                           )}`,
//                         })
//                       );
//                       // searchBarData?.keywords!==[]?dispatch(searchStart(searchBarData)):dispatch(applyallfilters());
//                       // dispatch(applyallfilters());
//                       document.getElementById("searchbar").value
//                         ? dispatch(searchStart(searchBarData))
//                         : dispatch(applyallfilters());

//                       console.log(appliedFilters);
//                       setRange([item.selection]);
//                     }}
//                     editableDateInputs={false}
//                     ranges={range}
//                     months={1}
//                     direction="horizontal"
//                     className="calendarElement"
//                   />
//                 </Popover>

//                 <Button
//                   onClick={(e) => setrangeAnchorEl(e.currentTarget)}
//                   variant="outlined"
//                   size="large"
//                   disableElevation
//                   disableRipple
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                     cursor: "pointer",
//                   }}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     {" "}
//                     Ad count{" "}
//                   </Typography>
//                 </Button>
//                 <Popover
//                   open={addcounteropen}
//                   anchorEl={rangeanchorel}
//                   onClose={() => {
//                     setrangeAnchorEl(null);
//                     // dispatch(applyallfilters());
//                     // let min = document.getElementById("minRange").innerText;
//                     // let max = document.getElementById("maxRange").innerText;
//                     // console.log(min);
//                     // console.log(max);
//                     // dispatch(
//                     //   AdCountvalueStart({
//                     //     name: "AdCount",
//                     //     min: min,
//                     //     max: max,
//                     //     Message: `Ad Count: ${min}-${max}`,
//                     //   })
//                     // );
//                     // console.log(
//                     //   "[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]"
//                     // );
//                   }}
//                   add={open ? "simple-popover" : undefined}
//                   transformOrigin={{
//                     horizontal: "left",
//                     vertical: "top",
//                   }}
//                   anchorOrigin={{
//                     horizontal: "left",
//                     vertical: "bottom",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       margin: 2,
//                       width: "210px",
//                       alignContent: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Stack
//                       direction={"column"}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       {/* <Box>
//                       <TextField sx={{border: 'none',borderColor:"white"}} min={0} max={1000}/>
//                     </Box> */}
//                       <Box>
//                         <Stack direction={"row"} spacing={1}>
//                           <Typography>From</Typography>
//                           <EditableLabel
//                             text={appliedFilters?.AdCount?.min}
//                             inputWidth="100px"
//                             onFocus={(e) => {
//                               setOnFocusEditTextField(() => e);
//                             }}
//                             onFocusOut={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(onFocusEditTextField) !== e) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "AdCount",
//                                     min: Number(e),
//                                     max: appliedFilters?.AdCount?.max,
//                                     Message: `Ad Count: ${e}-${appliedFilters?.AdCount?.max}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           />
//                           {/* <EditText
//                             id="minRange"
//                             type="number"
//                             inputProps={{
//                               style: { Width: 5 },
//                             }}
//                             // width="30px"

//                             onClick={(e) => {
//                               console.log(
//                                 ".........................................."
//                               );

//                               console.log(e);
//                               console.log(
//                                 ".........................................."
//                               );
//                               // document.getElementById('minRange').style.width="24px"
//                               // e.currentTarget.width="24px"
//                             }}
//                             defaultValue={appliedFilters?.AdCount?.min}
//                             onSave={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(e.value) !== e.previousValue) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "AdCount",
//                                     min: Number(e.value),
//                                     max: appliedFilters?.AdCount?.max,
//                                     Message: `Ad Count: ${e.value}-${appliedFilters?.AdCount?.max}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           /> */}
//                           {/* <Typography
//                             contentEditable
//                             id="minRange"
//                             onInput={(newValue) => {
//                               console.log(typeof appliedFilters?.AdCount?.max);
//                               console.log(
//                                 "++++++++++++++++++++++++*******************************"
//                               );
//                               if (newValue.currentTarget.textContent !== "") {
//                                 // dispatch(
//                                 //   AdCountvalueStart({
//                                 //     name: "AdCount",
//                                 //     min: newValue[0],
//                                 //     max: newValue[1],
//                                 //     Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
//                                 //   })
//                                 // );
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "AdCount",
//                                     min: Number(
//                                       newValue.currentTarget.textContent
//                                     ),
//                                     max: appliedFilters?.AdCount?.max,
//                                     Message: `Ad Count: ${newValue.currentTarget.textContent}-${appliedFilters?.AdCount?.max}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());

//                                 // dispatch(applyallfilters());
//                                 // if (searchBarData !== [])
//                                 //   dispatch(searchStart(searchBarData));

//                                 dispatch(SortvalueStart());
//                               }
//                             }}
//                           >
//                             {appliedFilters?.AdCount?.min}
//                           </Typography> */}
//                           <Typography>to</Typography>
//                           <EditableLabel
//                             text={appliedFilters?.AdCount?.max}
//                             inputWidth="100px"
//                             onFocus={(e) => {
//                               setOnFocusEditTextField(() => e);
//                             }}
//                             onFocusOut={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(onFocusEditTextField) !== e) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "AdCount",
//                                     min: appliedFilters?.AdCount?.min,
//                                     max: Number(e),
//                                     Message: `Ad Count: ${appliedFilters?.AdCount?.min}-${e}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           />
//                           {/* <EditText
//                             id="minRange"
//                             type="number"
//                             defaultValue={appliedFilters?.AdCount?.max}
//                             onSave={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(e.value) !== e.previousValue) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "AdCount",
//                                     min: appliedFilters?.AdCount?.min,
//                                     max: Number(e.value),
//                                     Message: `Ad Count: ${appliedFilters?.AdCount?.min}-${e.value}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           /> */}
//                           {/* <Typography
//                             contentEditable={true}
//                             id="maxRange"
//                             onInput={(newValue) => {
//                               // setCountMax(
//                               //   `${newValue.currentTarget.textContent}`
//                               // );
//                               if (newValue.currentTarget.textContent !== "") {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "AdCount",
//                                     min: appliedFilters?.AdCount?.min,
//                                     max: Number(
//                                       newValue.currentTarget.textContent
//                                     ),
//                                     Message: `Ad Count: ${appliedFilters?.AdCount?.min}-${newValue.currentTarget.textContent}`,
//                                   })
//                                 );
//                                 // searchBarData!==[]?dispatch(searchStart(searchBarData)):
//                                 // dispatch(applyallfilters());
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());

//                                 dispatch(SortvalueStart());
//                               }
//                               console.log(
//                                 "------------------" +
//                                   newValue.currentTarget.textContent
//                               );
//                             }}
//                           >
//                             {" "}
//                             {appliedFilters?.AdCount?.max}
//                           </Typography> */}
//                         </Stack>
//                       </Box>
//                       {/* <Typography contentEditable={true} sx={{ padding: "0px" }}>
//                       From {appliedFilters?.AdCount?.min} to{" "}
//                       {appliedFilters?.AdCount?.max}+
//                     </Typography> */}
//                       <Slider
//                         id="adcount"
//                         size="small"
//                         value={[
//                           appliedFilters?.AdCount?.min,
//                           appliedFilters?.AdCount?.max,
//                         ]}
//                         min={0}
//                         max={1000}
//                         sx={{ color: "#00CBFF" }}
//                         onChange={counterIncremten}
//                       />
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           borderRadius: 50,
//                           fontWeight: 600,
//                           borderColor: "#00CBFF",
//                           color: "#00CBFF",
//                           borderWidth: 2,
//                         }}
//                         onClick={() => {
//                           dispatch(
//                             AdCountvalueStart({
//                               name: "AdCount",
//                               min: 1,
//                               max: 1000,
//                               Message: "",
//                             })
//                           );
//                           document.getElementById("searchbar").value
//                             ? dispatch(searchStart(searchBarData))
//                             : dispatch(applyallfilters());
//                           // dispatch(applyallfilters());
//                           // searchBarData !== []
//                           //   ? dispatch(searchStart(searchBarData))
//                           //   : dispatch(applyallfilters());
//                           // setAppliedFilters((pre) => ({
//                           //   ...pre,
//                           //   AdCount: { min: 0, max: 1000, Message: "" },
//                           // }));

//                           setrangeAnchorEl(null);
//                         }}
//                       >
//                         Reset
//                       </Button>
//                     </Stack>
//                   </Box>
//                 </Popover>

//                 <Button
//                   variant="outlined"
//                   onClick={(e) => setAdStatusAnchorel(e.currentTarget)}
//                   size="large"
//                   disableElevation
//                   disableRipple
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                   }}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     {" "}
//                     Ad status{" "}
//                   </Typography>
//                 </Button>
//                 <Popover
//                   anchorEl={adStatusAnchorel}
//                   add={openAdStatusAnchorel ? "simple-popover" : undefined}
//                   onClose={() => {
//                     setAdStatusAnchorel(null);
//                   }}
//                   open={openAdStatusAnchorel}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                 >
//                   <Box sx={{ width: "190px" }}>
//                     <FormControl sx={{ padding: "10px" }}>
//                       <RadioGroup
//                         aria-labelledby="demo-radio-buttons-group-label"
//                         defaultValue="female"
//                         name="radio-buttons-group"
//                         value={appliedFilters?.AdStatus?.status || ""}
//                         onChange={handleChangeStatus}
//                       >
//                         <FormControlLabel
//                           value="Active"
//                           control={<Radio style={{ color: "#00CBFF" }} />}
//                           label="Active"
//                         />
//                         <FormControlLabel
//                           value="Inactive"
//                           control={<Radio style={{ color: "#00CBFF" }} />}
//                           label="Inactive"
//                         />
//                       </RadioGroup>
//                       <Box
//                         display={"flex"}
//                         alignContent={"center"}
//                         justifyContent={"center"}
//                       >
//                         <Button
//                           variant="outlined"
//                           sx={{
//                             borderRadius: 50,
//                             fontWeight: 600,
//                             borderColor: "#00CBFF",
//                             color: "#00CBFF",
//                             height: "35px",
//                             width: "80px",
//                             borderWidth: 2,
//                           }}
//                           onClick={() => {
//                             dispatch(
//                               statusValueStart({
//                                 name: "AdStatus",
//                                 status: "Active",
//                                 Message: "",
//                               })
//                             );
//                             // dispatch(applyallfilters());
//                             // searchBarData !== []
//                             //   ? dispatch(searchStart(searchBarData))
//                             //   : dispatch(applyallfilters());
//                             document.getElementById("searchbar").value
//                               ? dispatch(searchStart(searchBarData))
//                               : dispatch(applyallfilters());
//                             dispatch(SortvalueStart());
//                           }}
//                         >
//                           Reset
//                         </Button>
//                       </Box>
//                     </FormControl>
//                   </Box>
//                 </Popover>

//                 <Button
//                   variant="outlined"
//                   onClick={(e) => setFacebookLikeAnchorEl(e.currentTarget)}
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                   }}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     {" "}
//                     Facebook Page Likes
//                   </Typography>
//                 </Button>
//                 <Popover
//                   open={openFaceboolLike}
//                   anchorEl={facebookLikeanchorel}
//                   add={openFaceboolLike ? "simple-popover" : undefined}
//                   onClose={() => {
//                     setFacebookLikeAnchorEl(null);
//                   }}
//                   transformOrigin={{
//                     horizontal: "left",
//                     vertical: "top",
//                   }}
//                   anchorOrigin={{
//                     horizontal: "left",
//                     vertical: "bottom",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       margin: 2,
//                       width: "210px",
//                       alignContent: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Stack
//                       direction={"column"}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <Box>
//                         <Stack direction={"row"} spacing={1}>
//                           <Typography>From</Typography>
//                           <EditableLabel
//                             text={appliedFilters?.FacebookLikes?.min}
//                             inputWidth="100px"
//                             onFocus={(e) => {
//                               setOnFocusEditTextField(() => e);
//                             }}
//                             onFocusOut={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(onFocusEditTextField) !== e) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "FacebookLikes",
//                                     min: Number(e),
//                                     max: appliedFilters?.FacebookLikes?.max,
//                                     Message: `FacebookLikes: ${e}-${appliedFilters?.FacebookLikes?.max}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           />

//                           <Typography>to</Typography>
//                           <EditableLabel
//                             text={appliedFilters?.FacebookLikes?.max}
//                             inputWidth="100px"
//                             onFocus={(e) => {
//                               setOnFocusEditTextField(() => e);
//                             }}
//                             onFocusOut={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(onFocusEditTextField) !== e) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "FacebookLikes",
//                                     min: appliedFilters?.FacebookLikes?.min,
//                                     max: Number(e),
//                                     Message: `FacebookLikes : ${appliedFilters?.FacebookLikes?.min}-${e}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           />
//                         </Stack>
//                       </Box>

//                       <Slider
//                         id="facebook"
//                         size="small"
//                         value={[
//                           appliedFilters?.FacebookLikes?.min,
//                           appliedFilters?.FacebookLikes?.max,
//                         ]}
//                         min={0}
//                         max={100000}
//                         sx={{ color: "#00CBFF" }}
//                         onChange={FacebookLikesIncremten}
//                       />
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           borderRadius: 50,
//                           fontWeight: 600,
//                           borderColor: "#00CBFF",
//                           color: "#00CBFF",
//                           borderWidth: 2,
//                         }}
//                         onClick={() => {
//                           dispatch(
//                             AdCountvalueStart({
//                               name: "FacebookLikes",
//                               min: 1,
//                               max: 100000,
//                               Message: "",
//                             })
//                           );

//                           document.getElementById("searchbar").value
//                             ? dispatch(searchStart(searchBarData))
//                             : dispatch(applyallfilters());

//                           setFacebookLikeAnchorEl(null);
//                         }}
//                       >
//                         Reset
//                       </Button>
//                     </Stack>
//                   </Box>
//                 </Popover>

//                 <Button
//                   variant="outlined"
//                   onClick={(e) =>
//                     setInstragramFollowerAnchorEl(e.currentTarget)
//                   }
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                   }}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     {" "}
//                     Instagram Page Followers{" "}
//                   </Typography>
//                 </Button>
//                 <Popover
//                   open={openInstragramFollower}
//                   anchorEl={instragramFolloweranchorel}
//                   add={openInstragramFollower ? "simple-popover" : undefined}
//                   onClose={() => {
//                     setInstragramFollowerAnchorEl(null);
//                     // dispatch(applyallfilters());
//                     // let min = document.getElementById("minRange").innerText;
//                     // let max = document.getElementById("maxRange").innerText;
//                     // console.log(min);
//                     // console.log(max);
//                     // dispatch(
//                     //   AdCountvalueStart({
//                     //     name: "AdCount",
//                     //     min: min,
//                     //     max: max,
//                     //     Message: `Ad Count: ${min}-${max}`,
//                     //   })
//                     // );
//                     // console.log(
//                     //   "[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]"
//                     // );
//                   }}
//                   transformOrigin={{
//                     horizontal: "left",
//                     vertical: "top",
//                   }}
//                   anchorOrigin={{
//                     horizontal: "left",
//                     vertical: "bottom",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       margin: 2,
//                       width: "210px",
//                       alignContent: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Stack
//                       direction={"column"}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <Box>
//                         <Stack direction={"row"} spacing={1}>
//                           <Typography>From</Typography>
//                           <EditableLabel
//                             text={appliedFilters?.InstragramLike?.min}
//                             inputWidth="100px"
//                             onFocus={(e) => {
//                               setOnFocusEditTextField(() => e);
//                             }}
//                             onFocusOut={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(onFocusEditTextField) !== e) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "InstragramLike",
//                                     min: Number(e),
//                                     max: appliedFilters?.InstragramLike?.max,
//                                     Message: `InstragramLike: ${e}-${appliedFilters?.InstragramLike?.max}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           />

//                           <Typography>to</Typography>
//                           <EditableLabel
//                             text={appliedFilters?.InstragramLike?.max}
//                             inputWidth="100px"
//                             onFocus={(e) => {
//                               setOnFocusEditTextField(() => e);
//                             }}
//                             onFocusOut={(e) => {
//                               console.log(e);
//                               console.log("==============================");
//                               if (Number(onFocusEditTextField) !== e) {
//                                 dispatch(
//                                   AdCountvalueStart({
//                                     name: "InstragramLike",
//                                     min: appliedFilters?.InstragramLike?.min,
//                                     max: Number(e),
//                                     Message: `InstragramLike: ${appliedFilters?.InstragramLike?.min}-${e}`,
//                                   })
//                                 );
//                                 document.getElementById("searchbar").value
//                                   ? dispatch(searchStart(searchBarData))
//                                   : dispatch(applyallfilters());
//                               }
//                             }}
//                           />
//                         </Stack>
//                       </Box>

//                       <Slider
//                         id="instragram"
//                         size="small"
//                         value={[
//                           appliedFilters?.InstragramLike?.min,
//                           appliedFilters?.InstragramLike?.max,
//                         ]}
//                         min={0}
//                         max={10000}
//                         sx={{ color: "#00CBFF" }}
//                         onChange={InstragramFollowerIncremten}
//                       />
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           borderRadius: 50,
//                           fontWeight: 600,
//                           borderColor: "#00CBFF",
//                           color: "#00CBFF",
//                           borderWidth: 2,
//                         }}
//                         onClick={() => {
//                           dispatch(
//                             AdCountvalueStart({
//                               name: "InstragramLike",
//                               min: 1,
//                               max: 10000,
//                               Message: "",
//                             })
//                           );
//                           document.getElementById("searchbar").value
//                             ? dispatch(searchStart(searchBarData))
//                             : dispatch(applyallfilters());

//                           setInstragramFollowerAnchorEl(null);
//                         }}
//                       >
//                         Reset
//                       </Button>
//                     </Stack>
//                   </Box>
//                 </Popover>

//                 <Button
//                   variant="outlined"
//                   onClick={(e) => setMediaTypeAnchorel(e.currentTarget)}
//                   disableElevation
//                   disableRipple
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                   }}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                   size="large"
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     {" "}
//                     Media Type{" "}
//                   </Typography>
//                 </Button>
//                 <Popover
//                   anchorEl={mediaTypeAnchorel}
//                   add={openMediaTypeAnchorel ? "simple-popover" : undefined}
//                   onClose={() => {
//                     setMediaTypeAnchorel(null);
//                   }}
//                   open={openMediaTypeAnchorel}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                 >
//                   <Box sx={{ width: "190px" }}>
//                     <FormControl sx={{ padding: "10px" }}>
//                       <RadioGroup
//                         aria-labelledby="demo-radio-buttons-group-label"
//                         defaultValue="female"
//                         name="radio-buttons-group"
//                         value={appliedFilters?.MediaType?.selectedData || ""}
//                         onChange={handlechange}
//                       >
//                         <FormControlLabel
//                           value="Video or Photo"
//                           control={<Radio style={{ color: "#00CBFF" }} />}
//                           label="Video or Photo"
//                         />
//                         <FormControlLabel
//                           value="video"
//                           control={<Radio style={{ color: "#00CBFF" }} />}
//                           label="Video"
//                         />
//                         <FormControlLabel
//                           value="image"
//                           control={<Radio style={{ color: "#00CBFF" }} />}
//                           label="photo"
//                         />
//                       </RadioGroup>
//                       <Box
//                         display={"flex"}
//                         alignContent={"center"}
//                         justifyContent={"center"}
//                       >
//                         <Button
//                           variant="outlined"
//                           sx={{
//                             borderRadius: 50,
//                             fontWeight: 600,
//                             borderColor: "#00CBFF",
//                             color: "#00CBFF",
//                             height: "35px",
//                             width: "80px",
//                             borderWidth: 2,
//                           }}
//                           onClick={() => {
//                             dispatch(
//                               MediaTypevalueStart({
//                                 name: "MediaType",
//                                 selectedData: "Video or Photo",
//                                 Message: "",
//                               })
//                             );
//                             // dispatch(applyallfilters());
//                             // searchBarData !== []
//                             //   ? dispatch(searchStart(searchBarData))
//                             //   : dispatch(applyallfilters());
//                             document.getElementById("searchbar").value
//                               ? dispatch(searchStart(searchBarData))
//                               : dispatch(applyallfilters());
//                             dispatch(SortvalueStart());
//                             // setAppliedFilters((pre) => ({
//                             //   ...pre,
//                             //   MediaType: {
//                             //     selectedData: "Video or Photo",
//                             //     Message: "",
//                             //   },
//                             // }));

//                             setMediaTypeAnchorel(null);
//                           }}
//                         >
//                           Reset
//                         </Button>
//                       </Box>
//                     </FormControl>
//                   </Box>
//                 </Popover>

//                 <Button
//                   variant="outlined"
//                   onClick={(e) => setButtonTypeAnchorEl(e.currentTarget)}
//                   sx={{
//                     color: "#2B2F42",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #EBEBEB",
//                     borderRadius: "10px",
//                     marginRight: "14px",
//                     marginTop: "22px",
//                   }}
//                   endIcon={
//                     <img
//                       alt="arrowdown"
//                       src={Arrowdown}
//                       className={classes.DropDownArrow}
//                     />
//                   }
//                 >
//                   <Typography noWrap textTransform="capitalize">
//                     {" "}
//                     Button{" "}
//                   </Typography>
//                 </Button>
//                 <Popover
//                   anchorEl={ButtonTypeanchorel}
//                   add={openButtonType ? "simple-popover" : undefined}
//                   onClose={() => {
//                     setButtonTypeAnchorEl(null);
//                   }}
//                   open={openButtonType}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                 >
//                   <Box sx={{ width: "190px" }}>
//                     <FormControl sx={{ padding: "10px" }}>
//                       <RadioGroup
//                         aria-labelledby="demo-radio-buttons-group-label"
//                         defaultValue="female"
//                         name="radio-buttons-group"
//                         value={
//                           appliedFilters?.PurchaseType?.selctedButton || ""
//                         }
//                         onChange={handleButtonType}
//                       >
//                         <FormControlLabel
//                           value="Shop Now"
//                           control={<Radio style={{ color: "#00CBFF" }} />}
//                           label="Shop Now"
//                         />
//                       </RadioGroup>
//                       {/* <Box
//                         display={"flex"}
//                         alignContent={"center"}
//                         justifyContent={"center"}
//                       >
//                         <Button
//                           variant="outlined"
//                           sx={{
//                             borderRadius: 50,
//                             fontWeight: 600,
//                             borderColor: "#00CBFF",
//                             color: "#00CBFF",
//                             height: "35px",
//                             width: "80px",
//                             borderWidth: 2,
//                           }}
//                           onClick={() => {
//                             dispatch(
//                               MediaTypevalueStart({
//                                 name: "MediaType",
//                                 selectedData: "Video or Photo",
//                                 Message: "",
//                               })
//                             );
//                             // dispatch(applyallfilters());
//                             // searchBarData !== []
//                             //   ? dispatch(searchStart(searchBarData))
//                             //   : dispatch(applyallfilters());
//                             document.getElementById("searchbar").value
//                               ? dispatch(searchStart(searchBarData))
//                               : dispatch(applyallfilters());
//                             dispatch(SortvalueStart());
//                             // setAppliedFilters((pre) => ({
//                             //   ...pre,
//                             //   MediaType: {
//                             //     selectedData: "Video or Photo",
//                             //     Message: "",
//                             //   },
//                             // }));

//                             setMediaTypeAnchorel(null);
//                           }}
//                         >
//                           Reset
//                         </Button>
//                       </Box> */}
//                     </FormControl>
//                   </Box>
//                 </Popover>
//               </Grid>
//               <Grid item lg={1} md={1}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Grid container>
//                     <Grid item sx={{ marginTop: "20px" }}>
//                       <Button
//                         variant="outlined"
//                         style={{
//                           // background: "#00CBFF",
//                           borderRadius: 30,
//                           fontSize: "18px",
//                           borderColor: "#00CBFF",
//                           textTransform: "none",
//                           paddingLeft: "16px",
//                           paddingRight: "16px",
//                           marginBottom: "10px",
//                           color: "#00CBFF",
//                         }}
//                         onClick={() => {
//                           const emptyFilter = [];
//                           // eslint-disable-next-line array-callback-return
//                           Object.keys(appliedFilters).map((filter, index) => {
//                             const FilterRemoveDat = [];
//                             for (let dum in appliedFilters[filter]) {
//                               FilterRemoveDat[dum] =
//                                 typeof appliedFilters[filter][dum] === "number"
//                                   ? dum === "min"
//                                     ? 0
//                                     : 1000
//                                   : typeof appliedFilters[filter][dum] ===
//                                     "string"
//                                   ? dum === "Mediatype"
//                                     ? "Video or Photo"
//                                     : dum === "status"
//                                     ? ""
//                                     : ""
//                                   : new Date();
//                             }
//                             dispatch(clearFilteredDataStart(FilterRemoveDat));
//                             // setAppliedFilters((pre) => ({
//                             //   ...pre,
//                             //   [`${filter}`]: FilterRemoveDat,
//                             // }));
//                             emptyFilter[filter] = FilterRemoveDat;
//                             // setAdsFilteredData(() => allMediaAds[1]?.all_ads);
//                           });
//                           dispatch(clearFilteredDataStart(emptyFilter));
//                           // dispatch(
//                           //   SetSortOrdervalueStart({
//                           //     name: "type",
//                           //     data: "",
//                           //   })
//                           // );
//                           dispatch(SortvalueStart());
//                         }}
//                       >
//                         clear
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Grid>
//             </Grid>
//             <Grid container sx={{ marginTop: 1 }}>
//               {Object.keys(appliedFilters).map((filter, index) => {
//                 return (
//                   appliedFilters[filter]["Message"] && (
//                     <Chip
//                       key={index}
//                       color="primary"
//                       label={appliedFilters[filter]["Message"]}
//                       deleteIcon={
//                         <CloseIcon
//                           style={{ color: "white", backgroundColor: "#00CBFF" }}
//                         />
//                       }
//                       onDelete={() => {
//                         const filters = Object(appliedFilters[filter]);
//                         const AdsRemovedElement = {
//                           MIN: "min",
//                           MEDIATYPE: "selectedData",
//                           STATUS: "status",
//                           SELECTEDDATE: "StartRunningDate",
//                         };
//                         console.log(filter);

//                         console.log(";;;;;;;;;;;;;;;");
//                         const FilterRemoveData = [];
//                         for (let dum in filters) {
//                           console.log("dum" + dum);
//                           console.log(dum, filters[dum]);
//                           // console.log(typeof appliedFilters[filter][dum]);
//                           FilterRemoveData[dum] =
//                             typeof appliedFilters[filter][dum] === "number"
//                               ? dum === AdsRemovedElement.MIN
//                                 ? 1
//                                 : filter === "FacebookLikes"
//                                 ? 100000
//                                 : filter === "InstragramLike"
//                                 ? 10000
//                                 : 1000
//                               : typeof appliedFilters[filter][dum] === "string"
//                               ? dum === AdsRemovedElement.MEDIATYPE
//                                 ? dum === AdsRemovedElement.STATUS
//                                   ? "Active"
//                                   : "Video or Photo"
//                                 : ""
//                               : new Date();
//                         }
//                         console.table(FilterRemoveData);
//                         console.log(FilterRemoveData);
//                         dispatch(
//                           clearSingleFilteredDataStart({
//                             name: filter,
//                             data: FilterRemoveData,
//                           })
//                         );
//                         // dispatch(
//                         //   SetSortOrdervalueStart({
//                         //     name: "type",
//                         //     data: "",
//                         //   })
//                         // );
//                         // dispatch(applyallfilters());
//                         console.log(document.getElementById("searchbar").value);
//                         console.log(
//                           "-----------======================================"
//                         );
//                         document.getElementById("searchbar").value !== ""
//                           ? dispatch(searchStart(searchBarData))
//                           : dispatch(applyallfilters());
//                         dispatch(SortvalueStart());
//                         // setAppliedFilters((pre) => ({
//                         //   ...pre,
//                         //   [`${filter}`]: FilterRemoveData,
//                         // }));

//                         console.log(filter);
//                       }}
//                       sx={{
//                         borderRadius: 2,
//                         backgroundColor: "#00CBFF",
//                         marginLeft: 1,
//                       }}
//                     />
//                   )
//                 );
//               })}
//             </Grid>
//           </Grid>
//   )
// }

// export default AllFilters
import { makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputBase,
  Popover,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Arrowdown from "../assets/Arrowdown.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  AdCountvalueStart,
  applyallfilters,
  ButtonTypevalueStart,
  chnageSearchType,
  clearFilteredDataStart,
  clearSingleFilteredDataStart,
  datevalueStart,
  EmptySearchValueStart,
  FilterAfterSearchStart,
  MediaTypevalueStart,
  rangerefixMinMaxSiler,
  searchPhraseStart,
  searchStart,
  SortvalueStart,
  statusValueStart,
} from "../redux/ducks/filtered_Data";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { addDays } from "date-fns";
import CloseIcon from "@mui/icons-material/Close";
import EditableLabel from "react-simple-editlabel";
import {
  applySavedAdsallfilters,
  EmptySavedSearchValueStart,
  SavedAdsAdCountvalueStart,
  SavedAdsButtonTypevalueStart,
  savedAdschnageSearchType,
  SavedAdsclearFilteredDataStart,
  SavedAdsdatevalueStart,
  SavedAdsFilterAfterSearchStart,
  SavedAdsMediaTypevalueStart,
  SavedAdssearchStart,
  SavedAdssearchValueStart,
  SavedAdsstatusValueStart,
  savedShnageSearchType,
} from "../redux/ducks/saveAds_clientSide";
import { EditText } from "react-edit-text";

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
    // fontWeight: 500,
    // fontSize: "18px",
    // lineHeight: "24px",
    // color: "#2B2F42",
    // marginTop: "8px",
    // marginBottom: "18px",
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
    justifyContent: "space-evenly",
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

function AllFilters(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    filteredData,
    appliedFilters,
    ctaStatus,
    allData,
    // maxRanger,
    // AllAdsPage,
  } = useSelector((state) => state.filteredData);

  // const { savedAdsLocal, SavedAppliedFilters, filteredData } = useSelector(
  //   (state) => state.savedclienads
  // );

  // const { allMediaAds, loading } = useSelector((state) => state.allMediaAds);
  // const {
  //   filteredData,
  //   appliedFilters,
  //   sortFilter,
  //   searchBarData,
  //   postionYoffset,
  //   // AllAdsPage,
  // } = useSelector((state) => state.filteredData);

  // const { savedIds } = useSelector((state) => state.savedclienads);
  const [rangeEditTextField, setRangeEditTextField] = React.useState({
    min: 0,
    max: 1000,
  });

  const [onFocusEditTextField, setOnFocusEditTextField] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [rangeanchorel, setrangeAnchorEl] = React.useState(null);
  const addcounteropen = Boolean(rangeanchorel);
  const [mediaTypeAnchorel, setMediaTypeAnchorel] = React.useState(null);
  const openMediaTypeAnchorel = Boolean(mediaTypeAnchorel);
  const [adStatusAnchorel, setAdStatusAnchorel] = React.useState(null);
  const openAdStatusAnchorel = Boolean(adStatusAnchorel);
  // const [sortByAnchorel, setSortByAnchorel] = React.useState(null);
  // const openSortByAnchorel = Boolean(sortByAnchorel);
  const [facebookLikeanchorel, setFacebookLikeAnchorEl] = React.useState(null);
  const openFaceboolLike = Boolean(facebookLikeanchorel);
  const [instragramFolloweranchorel, setInstragramFollowerAnchorEl] =
    React.useState(null);
  const openInstragramFollower = Boolean(instragramFolloweranchorel);
  const [ButtonTypeanchorel, setButtonTypeAnchorEl] = React.useState(null);
  const openButtonType = Boolean(ButtonTypeanchorel);
  const [seachTypeanchorel, setSeachTypeAnchorEl] = React.useState(null);
  const openSearchType = Boolean(seachTypeanchorel);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
useEffect(()=>{
  console.log("-----------------------------------------------------------------------------------")
  console.log(props.ranger)
  console.log("-----------------------------------------------------------------------------------")
})
  useEffect(() => {
    console.log("ccccccccccccccccccccccccccccc");
    console.log(props.name);
    console.log(props.search);
    if (props.search) {
      // console.log(props.search);
      console.log("-----------");
    } else {
      console.log("else");
    }
    console.log("ccccccccccccccccccccccccccccc");
  });
  const counterIncremten = (event, newValue) => {
    console.log("++++++++++++++" + document.getElementById("searchbar").value);
    console.log(newValue);
    console.log("............................................................");
    // console.log(event.type);
    console.log("............................................................");
    // if(event.type!=="mousedown" && event.type!=="mousemove"){

    if (props.name === "AllAdsPage") {
      setRangeEditTextField((pre) => {
        return {
          max: Number(newValue[1]),
          min: Number(newValue[0]),
        };
      });
      console.log(rangeEditTextField);
      console.log("insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

      dispatch(
        AdCountvalueStart({
          name: "AdCount",
          min: newValue[0],
          max: newValue[1],
          Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
        : dispatch(applyallfilters());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsAdCountvalueStart({
          name: "AdCount",
          min: newValue[0],
          max: newValue[1],
          Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(SavedAdsFilterAfterSearchStart())
        : dispatch(applySavedAdsallfilters());
    }

    // dispatch(
    //   AdCountvalueStart({
    //     name: "AdCount",
    //     min: newValue[0],
    //     max: newValue[1],
    //     Message: `Ad Count: ${newValue[0]}-${newValue[1]}`,
    //   })
    // );
    // searchBarData!==[]?dispatch(searchStart(searchBarData)):
    // dispatch(applyallfilters());

    // }
    // dispatch(applyallfilters());
    // searchBarData !== []
    //   ? dispatch(searchStart(searchBarData))
    //   : dispatch(applyallfilters());
  };
  const handleChangeStatus = (event, newValue) => {
    if (props.name === "AllAdsPage") {
      dispatch(
        statusValueStart({
          name: "AdStatus",
          componentName: props.name,
          status: newValue,
          Message: `Ad Status:${newValue}`,
        })
      );

      document.getElementById("searchbar").value
        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
        : dispatch(applyallfilters());

      dispatch(SortvalueStart());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsstatusValueStart({
          name: "AdStatus",
          // componentName: props.name,
          status: newValue,
          Message: `Ad Status:${newValue}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(SavedAdsFilterAfterSearchStart())
        : dispatch(applySavedAdsallfilters());
    }
  };
  const FacebookLikesIncremten = (event, newValue) => {
    if (props.name === "AllAdsPage") {
      dispatch(
        AdCountvalueStart({
          name: "FacebookLikes",
          min: newValue[0],
          max: newValue[1],
          Message: `Facebook Page likes: ${newValue[0]}-${newValue[1]}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
        : dispatch(applyallfilters());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsAdCountvalueStart({
          name: "FacebookLikes",
          min: newValue[0],
          max: newValue[1],
          Message: `Facebook Page likes: ${newValue[0]}-${newValue[1]}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(SavedAdsFilterAfterSearchStart())
        : dispatch(applySavedAdsallfilters());
    }
  };
  const InstragramFollowerIncremten = (event, newValue) => {
    console.log(newValue);
    console.log("11111111111111111@@@@@@@@@@@@@@@@@@@@@@@@");
    if (props.name === "AllAdsPage") {
      dispatch(
        AdCountvalueStart({
          name: "InstragramLike",
          min: newValue[0],
          max: newValue[1],
          Message: `Instragram Page likes: ${newValue[0]}-${newValue[1]}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
        : dispatch(applyallfilters());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsAdCountvalueStart({
          name: "InstragramLike",
          min: newValue[0],
          max: newValue[1],
          Message: `Instragram Page likes: ${newValue[0]}-${newValue[1]}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(SavedAdsFilterAfterSearchStart())
        : dispatch(applySavedAdsallfilters());
    }
  };
  const handlechange = (event, newValue) => {
    console.log(newValue);
    console.log("..................................................");
    if (props.name === "AllAdsPage") {
      dispatch(
        MediaTypevalueStart({
          name: "MediaType",
          // componentName: props.name,
          selectedData: newValue,
          Message: `MediaType : ${newValue}`,
        })
      );

      document.getElementById("searchbar").value
        ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
        : dispatch(applyallfilters());
      dispatch(SortvalueStart());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsMediaTypevalueStart({
          name: "MediaType",
          // componentName: props.name,
          selectedData: newValue,
          Message: `MediaType : ${newValue}`,
        })
      );

      document.getElementById("searchbar").value
        ? dispatch(SavedAdsFilterAfterSearchStart())
        : dispatch(applySavedAdsallfilters());
    }

    // setAppliedFilters((pre) => ({
    //   ...pre,
    //   MediaType: {
    // selectedData: newValue,
    // Message: `MediaType:${newValue}`,
    //   },
    // }));
  };
  const handleButtonType = (event, newValue) => {
    // appliedFilters?.PurchaseType?.selctedButton
    // console.log("............................")
    // console.log(newValue)
    // console.log("............................")
    if (props.name === "AllAdsPage") {
      dispatch(
        ButtonTypevalueStart({
          name: "PurchaseType",
          // componentName: props.name,
          selctedButton: newValue,
          Message: `Button : ${newValue}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
        : dispatch(applyallfilters());

      dispatch(SortvalueStart());
    } else if (props.name === "SavedPage") {
      dispatch(
        SavedAdsButtonTypevalueStart({
          name: "PurchaseType",
          // componentName: props.name,
          selctedButton: newValue,
          Message: `Button : ${newValue}`,
        })
      );
      document.getElementById("searchbar").value
        ? dispatch(SavedAdsFilterAfterSearchStart())
        : dispatch(applySavedAdsallfilters());
    }
  };

  const handleChangeSearchType = (event, newValue) => {
    if (props.name === "AllAdsPage") {
      dispatch(chnageSearchType(newValue));
    } else if (props.name === "SavedPage") {
      dispatch(savedAdschnageSearchType(newValue));
    }
  };
  // useEffect(() => {
  //   console.log("|||||||||||||||||||||||||||||||||||||||");

  //   console.log(props?.pageFilterInfo);
  //   console.log("|||||||||||||||||||||||||||||||||||||||");
  // });

  return (
    <>
      {/* <Grid
      item
      xs={12}
      sx={{
        border: "1px solid #EBEBEB",
        borderRadius: "15px",
        padding: "16px 36px",
        marginTop: 2,
      }}
    > */}
      <Grid
        container
        sx={{ border: "2px solid #EBEBEB", borderRadius: "10px" }}
      >
        <Grid item xs={2} sx={{ display: "flex" }}>
          <Box sx={{ width: "100%", marginRight: "21px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Button
                disabled={props.loading}
                onClick={(event) => {
                  setSeachTypeAnchorEl(event.currentTarget);
                }}
                endIcon={
                  <img
                    alt="arrowdown"
                    src={Arrowdown}
                    className={classes.DropDownArrow}
                  />
                }
                label="Outlined"
                sx={{ color: "#2B2F42" }}
                style={{ disabled: true }}
              >
                <Typography noWrap textTransform="capitalize">
                  {props.search_type}
                </Typography>
              </Button>

              <Popover
                anchorEl={seachTypeanchorel}
                add={openSearchType ? "simple-popover" : undefined}
                onClose={() => {
                  setSeachTypeAnchorEl(null);
                }}
                open={openSearchType}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box sx={{ width: "190px" }}>
                  <FormControl sx={{ padding: "10px" }}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      value={props?.search_type}
                      onChange={handleChangeSearchType}
                    >
                      <FormControlLabel
                        value="All these words"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="All these words"
                      />
                      <FormControlLabel
                        value="Exact Phrase"
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label="Exact Phrase"
                      />
                    </RadioGroup>
                    <Box
                      display={"flex"}
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <Button
                        disabled={props.loading}
                        variant="outlined"
                        sx={{
                          borderRadius: 50,
                          fontWeight: 600,
                          borderColor: "#00CBFF",
                          color: "#00CBFF",
                          height: "35px",
                          width: "80px",
                          borderWidth: 2,
                        }}
                        onClick={() => {
                          if (props.name === "AllAdsPage") {
                            dispatch(chnageSearchType("All these words"));

                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                            dispatch(SortvalueStart());
                          } else if (props.name === "SavedPage") {
                            dispatch(savedShnageSearchType("All these words"));
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdssearchStart(props.search))
                              : dispatch(applySavedAdsallfilters());
                          }
                        }}
                      >
                        Reset
                      </Button>
                    </Box>
                  </FormControl>
                </Box>
              </Popover>
            </Stack>
          </Box>
          <Divider orientation="vertical" sx={{ marginLeft: "auto" }} />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ marginLeft: "21px" }}>
            {/* <form
                    onSubmit={(value) => {
                      console.log(value);
                      console.log(
                        "--------------------------???????????????????????"
                      );
                    }} 
                  >*/}

            <InputBase
              disabled={props.loading}
              id="searchbar"
              // placeholder={props.search}
              // value={props.search}
              defaultValue={props.search}
              fullWidth
              onKeyUp={(e) => {
                console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                console.log(e.target.value);
                if (props.name === "AllAdsPage") {
                  if (e.key === "Enter") {
                    console.log("com indiseeeeeeeeeeeeeeeeeee");
                    if(props.search_type==="All these words")
                    {dispatch(
                      searchStart({
                        // type: props.search_type,
                        data: e.currentTarget.value,
                      })
                    );}
                    else
                    {dispatch(searchPhraseStart({data:e.currentTarget.value}))}

                    dispatch(FilterAfterSearchStart());
                  }
                  if (e.target.value.length === 0) {
                    // dispatch(
                    //   searchStart({
                    //     type: props.search_type,
                    //     data: e.currentTarget.value,
                    //   })
                    // );
                    console.log(allData);

                    dispatch(EmptySearchValueStart());
                    dispatch(applyallfilters());
                  }
                } else if (props.name === "SavedPage") {
                  if (e.key === "Enter") {
                    console.log("com indiseeeeeeeeeeeeeeeeeee");
                    dispatch(
                      SavedAdssearchValueStart({
                        type: props.search_type,
                        data: e.currentTarget.value,
                      })
                    );
                    dispatch(SavedAdsFilterAfterSearchStart());
                  }
                  if (e.target.value.length === 0) {
                    dispatch(EmptySavedSearchValueStart());
                    dispatch(applySavedAdsallfilters());
                  }
                }
              }}
              // onKeyDown={(e) => {
              //   // console.log(e)
              //   // console.log(";;;;;;;;;;;;;;;;;;;;;;;;;")
              //   if (e.key === "Enter") {
              //     dispatch(
              //       searchStart({
              //         type: props.search_type,
              //         data: e.currentTarget.value,
              //       })
              //     );
              //     // dispatch(FilterAfterSearchStart());

              //     // dispatch(
              //     //   searchStart({
              //     //     keywords: e.currentTarget.value.split(" "),
              //     //   })
              //     // );
              //     // dispatch(applyallfilters())
              //     // const dum = Object.values(filteredData[2]).flat();
              //     // console.log(Object.values(filteredData[2]).flat());
              //     // // console.log(dum.includes("2022-06-10"));

              //     // filteredData.map((ads) => {
              //     //   // Object.values(ads).flat()
              //     //   const rarr = e.currentTarget.value.split(" ");
              //     //   console.log(rarr);
              //     //   e.currentTarget.value
              //     //     .split(" ")
              //     //     .every((a) =>
              //     //       Object.values(ads).flat().includes(a)
              //     //     );
              //     //   console.log(
              //     //     Object.values(ads).flat().includes("2022-06-10")
              //     //   );
              //     //   return true;
              //     // });
              //   }
              //   console.log("||||||||||||||||||||||||||||||||||||||||||");
              //   console.log(e.currentTarget.value === "");
              //   console.table(e.currentTarget.value);
              //   console.log("||||||||||||||||||||||||||||||||||||||||||");
              //   if (e.currentTarget.value === "") {
              //     dispatch(applyallfilters());
              //     dispatch(
              //       searchStart({
              //         keywords: "",
              //       })
              //     );
              //     // dispatch(applyallfilters());
              //     // document.getElementById("searchbar").value
              //     // dispatch(searchStart(props.search));
              //     dispatch(FilterAfterSearchStart());
              //     // : dispatch(applyallfilters());
              //   }
              // }}
              margin="dense"
              size="large"
              // onSubmit={(value) => {
              //   console.log(value);
              //   console.log(
              //     "--------------------------???????????????????????"
              //   );
              // }}
            />
            {/* </form> */}
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={11} md={11}>
          <Button
            disabled={props.loading}
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
            size="large"
            variant="outlined"
            disableElevation
            disableRipple
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
            }}
            // className={classes.FilterBox}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography noWrap textTransform="capitalize">
              Started Running Date{" "}
            </Typography>
          </Button>
          <Popover
            anchorEl={anchorEl}
            open={open}
            add={open ? "simple-popover" : undefined}
            onClose={() => {
              setAnchorEl(null);              
            }}
            transformOrigin={{
              horizontal: "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: "left",
              vertical: "bottom",
            }}
          >
            <DateRange
              onClick={(item) => {
                console.log(item);
                console.log("ffffffffffffffffffffffffffffffffffffffffffffffff");
                if (props.name === "AllAdsPage") {
                  dispatch(
                    datevalueStart({
                      name: "StartRunningDate",
                      startdate: format(item.selection.startDate, "yyyy-MM-dd"),
                      enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                      Message: `running date ${format(
                        item.selection.startDate,
                        "yyyy-MM-dd"
                      )} to ${format(item.selection.endDate, "yyyy-MM-dd")}`,                     
                    })
                  );

                  document.getElementById("searchbar").value
                    ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                    : dispatch(applyallfilters());
                } else if (props.name === "SavedPage") {
                  dispatch(
                    SavedAdsdatevalueStart({
                      name: "StartRunningDate",
                      startdate: format(item.selection.startDate, "yyyy-MM-dd"),
                      enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                      Message: `running date ${format(
                        item.selection.startDate,
                        "yyyy-MM-dd"
                      )} to ${format(item.selection.endDate, "yyyy-MM-dd")}`,
                      // componentName: props.name,
                    })
                  );

                  document.getElementById("searchbar").value
                    ? dispatch(SavedAdsFilterAfterSearchStart())
                    : dispatch(applySavedAdsallfilters());
                }

                setRange([item.selection]);
              }}
              onChange={(item) => {
                console.log(item);
                if (props.name === "AllAdsPage") {
                  dispatch(
                    datevalueStart({
                      name: "StartRunningDate",

                      startdate: format(item.selection.startDate, "yyyy-MM-dd"),
                      enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                      Message: `running date ${format(
                        item.selection.startDate,
                        "yyyy-MM-dd"
                      )} to ${format(item.selection.endDate, "yyyy-MM-dd")}`,
                      // componentName: props.name,
                    })
                  );

                  document.getElementById("searchbar").value
                    ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                    : dispatch(applyallfilters());
                } else {
                  dispatch(
                    SavedAdsdatevalueStart({
                      name: "StartRunningDate",
                      startdate: format(item.selection.startDate, "yyyy-MM-dd"),
                      enddate: format(item.selection.endDate, "yyyy-MM-dd"),
                      Message: `running date ${format(
                        item.selection.startDate,
                        "yyyy-MM-dd"
                      )} to ${format(item.selection.endDate, "yyyy-MM-dd")}`,
                      // componentName: props.name,
                    })
                  );

                  document.getElementById("searchbar").value
                    ? dispatch(SavedAdsFilterAfterSearchStart()) //dispatch(SavedAdssearchStart(props.search))
                    : dispatch(applySavedAdsallfilters());
                }

                setRange([item.selection]);
              }}
              editableDateInputs={false}
              ranges={range}
              months={1}
              direction="horizontal"
              className="calendarElement"
            />
          </Popover>

          <Button
            disabled={props.loading}
            onClick={(e) => setrangeAnchorEl(e.currentTarget)}
            variant="outlined"
            size="large"
            disableElevation
            disableRipple
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
              cursor: "pointer",
            }}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography noWrap textTransform="capitalize">
              {" "}
              Ad count{" "}
            </Typography>
          </Button>
          <Popover
            open={addcounteropen}
            anchorEl={rangeanchorel}
            onClose={() => {
              setrangeAnchorEl(null);
            }}
            add={open ? "simple-popover" : undefined}
            transformOrigin={{
              horizontal: "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: "left",
              vertical: "bottom",
            }}
          >
            <Box
              sx={{
                margin: 2,
                width: "210px",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={props?.pageFilterInfo?.AdCount?.min.toString()}
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          if (props.name === "AllAdsPage") {
                            
                            dispatch(
                              AdCountvalueStart({
                                name: "AdCount",
                                // componentName: props.name,
                                min: Number(e.value),
                                max: props?.pageFilterInfo?.AdCount?.max,
                                Message: `Ad Count: ${e.value}-${props?.pageFilterInfo?.AdCount?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            console.log(
                              "============================== in save page"
                            );
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "AdCount",
                                min: Number(e.value),
                                max: props?.pageFilterInfo?.AdCount?.max,
                                Message: `Ad Count: ${e.value}-${props?.pageFilterInfo?.AdCount?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdsFilterAfterSearchStart())
                              : dispatch(applySavedAdsallfilters());
                          }
                          // dispatch(
                          //   AdCountvalueStart({
                          //     name: "AdCount",
                          //     min: Number(e.value),
                          //     max: appliedFilters?.AdCount?.max,
                          //     Message: `Ad Count: ${e.value}-${appliedFilters?.AdCount?.max}`,
                          //   })
                          // );
                          // document.getElementById("searchbar").value
                          //   ? dispatch(searchStart(searchBarData))
                          //   : dispatch(applyallfilters());
                        }
                      }}
                    />
                    {/* <EditableLabel
                      text={appliedFilters.AdCount.min}                      
                      inputWidth="100px"
                      onFocus={(e) => {
                        setOnFocusEditTextField(() => e);
                      }}
                      onFocusOut={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(onFocusEditTextField) !== e) {
                          if (props.name === "AllAdsPage") {
                            console.log(
                              "==============================in all page"
                            );
                            setRangeEditTextField((pre) => {
                              return { ...pre, min: Number(e) };
                            });
                            dispatch(
                              AdCountvalueStart({
                                name: "AdCount",
                                // componentName: props.name,
                                min: Number(e),
                                max: props?.pageFilterInfo?.AdCount?.max,
                                Message: `Ad Count: ${e}-${props?.pageFilterInfo?.AdCount?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            console.log(
                              "============================== in save page"
                            );
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "AdCount",
                                min: Number(e),
                                max: props?.pageFilterInfo?.AdCount?.max,
                                Message: `Ad Count: ${e}-${props?.pageFilterInfo?.AdCount?.max}`,
                              })
                            );
                            // document.getElementById("searchbar").value
                            //   ? dispatch(SavedAdssearchStart(props.search))
                            // :
                            dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    /> */}

                    <Typography>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={props?.pageFilterInfo?.AdCount?.max.toString()}
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          if (props.name === "AllAdsPage") {
                            // setRangeEditTextField((pre) => {
                            //   return { ...pre, max: Number(e) };
                            // });
                            console.log(props?.ranger?.AdCount?.max+"-------------------------++++++++++++++++")
                            if (Number(e.value) > props?.ranger?.AdCount?.max) {
                              dispatch(
                                rangerefixMinMaxSiler({
                                  name: "AdCount",
                                  // min: 1,
                                  max: Number(e.value),
                                })
                              );
                            }
                            dispatch(
                              AdCountvalueStart({
                                name: "AdCount",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.AdCount?.min,
                                max: Number(e.value),
                                Message: `Ad Count: ${props?.pageFilterInfo?.AdCount?.min}-${e.value}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            console.log(
                              "ssssssssssssssssssssssaaaaaaaaaaaaaaaaavvvvvvvvvvvveeeeeeeeeeeeeddddddddddd" +
                                document.getElementById("searchbar").value
                            );
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "AdCount",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.AdCount?.min,
                                max: Number(e.value),
                                Message: `Ad Count: ${props?.pageFilterInfo?.AdCount?.min}-${e.value}`,
                              })
                            );

                            // props.search!==""
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdsFilterAfterSearchStart())
                              : dispatch(applySavedAdsallfilters());
                          }
                          // dispatch(
                          //   AdCountvalueStart({
                          //     name: "AdCount",
                          //     min: Number(e.value),
                          //     max: appliedFilters?.AdCount?.max,
                          //     Message: `Ad Count: ${e.value}-${appliedFilters?.AdCount?.max}`,
                          //   })
                          // );
                          // document.getElementById("searchbar").value
                          //   ? dispatch(searchStart(searchBarData))
                          //   : dispatch(applyallfilters());
                        }
                      }}
                    />
                    {/* <EditableLabel
                      text={appliedFilters.AdCount.max}
                      inputWidth="100px"
                      onFocus={(e) => {
                        setOnFocusEditTextField(() => e);
                      }}
                      onFocusOut={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(onFocusEditTextField) !== e) {
                          if (props.name === "AllAdsPage") {
                            setRangeEditTextField((pre) => {
                              return { ...pre, max: Number(e) };
                            });
                            dispatch(
                              AdCountvalueStart({
                                name: "AdCount",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.AdCount?.min,
                                max: Number(e),
                                Message: `Ad Count: ${props?.pageFilterInfo?.AdCount?.min}-${e}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            console.log(
                              "ssssssssssssssssssssssaaaaaaaaaaaaaaaaavvvvvvvvvvvveeeeeeeeeeeeeddddddddddd"
                            );
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "AdCount",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.AdCount?.min,
                                max: Number(e),
                                Message: `Ad Count: ${props?.pageFilterInfo?.AdCount?.min}-${e}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdssearchStart(props.search))
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    /> */}
                  </Stack>
                </Box>
                {/* <Typography contentEditable  onInput ={(newValue)=>{
  console.log(newValue)
  console.log("-----------------------------------------")
  if (props.name === "AllAdsPage") {
    dispatch(
      AdCountvalueStart({
        name: "AdCount",
        // componentName: props.name,
        min: props?.pageFilterInfo?.AdCount?.min,
        max: Number(
          newValue.currentTarget.textContent
        ),
        Message: `Ad Count: ${props?.pageFilterInfo?.AdCount?.min}-${Number(
          newValue.currentTarget.textContent
        )}`,
      })
    );
    document.getElementById("searchbar").value
      ? dispatch(searchStart(props.search))
      : dispatch(applyallfilters());
  } else if (props.name === "SavedPage") {
    console.log(
      "ssssssssssssssssssssssaaaaaaaaaaaaaaaaavvvvvvvvvvvveeeeeeeeeeeeeddddddddddd"
    );
    dispatch(
      SavedAdsAdCountvalueStart({
        name: "AdCount",
        // componentName: props.name,
        min: props?.pageFilterInfo?.AdCount?.min,
        max: Number(
          newValue.currentTarget.textContent
        ),
        Message: `Ad Count: ${props?.pageFilterInfo?.AdCount?.min}-${Number(
          newValue.currentTarget.textContent
        )}`,
      })
    );
    document.getElementById("searchbar").value
      ? dispatch(SavedAdssearchStart(props.search))
      : dispatch(applySavedAdsallfilters());
  }
}}>{props?.pageFilterInfo?.AdCount?.max}</Typography> */}
                <Slider
                  id="adcount"
                  size="small"
                  value={[
                    props.pageFilterInfo?.AdCount?.min,
                    props.pageFilterInfo?.AdCount?.max,
                  ]}
                  min={props?.ranger?.AdCount?.min}
                  max={props.ranger?.AdCount?.max}
                  sx={{ color: "#00CBFF" }}
                  onChange={counterIncremten}
                />
                <Button
                  disabled={props.loading}
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    if (props.name === "AllAdsPage") {
                      dispatch(
                        AdCountvalueStart({
                          name: "AdCount",
                          // componentName: props.name,
                          min: 1,
                          max: 1000,
                          Message: "",
                        })
                      );
                      document.getElementById("searchbar").value
                        ? dispatch(FilterAfterSearchStart())
                        : dispatch(applyallfilters());
                    } else if (props.name === "SavedPage") {
                      dispatch(
                        SavedAdsAdCountvalueStart({
                          name: "AdCount",
                          // componentName: props.name,
                          min: 1,
                          max: 1000,
                          Message: "",
                        })
                      );
                      document.getElementById("searchbar").value
                        ? dispatch(SavedAdsFilterAfterSearchStart())
                        : dispatch(applySavedAdsallfilters());
                    }
                    // dispatch(applyallfilters());
                    // searchBarData !== []
                    //   ? dispatch(searchStart(searchBarData))
                    //   : dispatch(applyallfilters());
                    // setAppliedFilters((pre) => ({
                    //   ...pre,
                    //   AdCount: { min: 0, max: 1000, Message: "" },
                    // }));

                    setrangeAnchorEl(null);
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Popover>

          <Button
            disabled={props.loading}
            variant="outlined"
            onClick={(e) => setAdStatusAnchorel(e.currentTarget)}
            size="large"
            disableElevation
            disableRipple
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
            }}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography noWrap textTransform="capitalize">
              {" "}
              Ad status{" "}
            </Typography>
          </Button>
          <Popover
            anchorEl={adStatusAnchorel}
            add={openAdStatusAnchorel ? "simple-popover" : undefined}
            onClose={() => {
              setAdStatusAnchorel(null);
            }}
            open={openAdStatusAnchorel}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ width: "190px" }}>
              <FormControl sx={{ padding: "10px" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={props?.pageFilterInfo?.AdStatus?.status}
                  onChange={handleChangeStatus}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Inactive"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Inactive"
                  />
                </RadioGroup>
                <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    disabled={props.loading}
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    onClick={() => {
                      if (props.name === "AllAdsPage") {
                        dispatch(
                          statusValueStart({
                            name: "AdStatus",
                            // componentName: props.name,
                            status: "",
                            Message: "",
                          })
                        );

                        document.getElementById("searchbar").value
                          ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                          : dispatch(applyallfilters());
                        dispatch(SortvalueStart());
                      } else if (props.name === "SavedPage") {
                        dispatch(
                          SavedAdsstatusValueStart({
                            name: "AdStatus",
                            // componentName: props.name,
                            status: "",
                            Message: "",
                          })
                        );
                        document.getElementById("searchbar").value
                          ? dispatch(SavedAdsFilterAfterSearchStart())
                          : dispatch(applySavedAdsallfilters());
                      }
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Popover>

          <Button
            disabled={props.loading}
            variant="outlined"
            onClick={(e) => setFacebookLikeAnchorEl(e.currentTarget)}
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
            }}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography noWrap textTransform="capitalize">
              {" "}
              Facebook Page Likes
            </Typography>
          </Button>
          <Popover
            open={openFaceboolLike}
            anchorEl={facebookLikeanchorel}
            add={openFaceboolLike ? "simple-popover" : undefined}
            onClose={() => {
              setFacebookLikeAnchorEl(null);
            }}
            transformOrigin={{
              horizontal: "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: "left",
              vertical: "bottom",
            }}
          >
            <Box
              sx={{
                margin: 2,
                width: "210px",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={props?.pageFilterInfo?.FacebookLikes?.min.toString()}
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          if (props.name === "AllAdsPage") {
                            dispatch(
                              AdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: Number(e.value),
                                max: props?.pageFilterInfo?.FacebookLikes?.max,
                                Message: `FacebookLikes: ${e.value}-${props?.pageFilterInfo?.FacebookLikes?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: Number(e.value),
                                max: props?.pageFilterInfo?.FacebookLikes?.max,
                                Message: `Facebook Likes page: ${e.value}-${props?.pageFilterInfo?.FacebookLikes?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdsFilterAfterSearchStart())
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    />
                    {/* <EditableLabel
                      text={props?.pageFilterInfo?.FacebookLikes?.min || ""}
                      inputWidth="100px"
                      onFocus={(e) => {
                        setOnFocusEditTextField(() => e);
                      }}
                      onFocusOut={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(onFocusEditTextField) !== e) {
                          if (props.name === "AllAdsPage") {
                            dispatch(
                              AdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: Number(e),
                                max: props?.pageFilterInfo?.FacebookLikes?.max,
                                Message: `FacebookLikes: ${e}-${props?.pageFilterInfo?.FacebookLikes?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          }
                        } else if (props.name === "SavedPage") {
                          dispatch(
                            SavedAdsAdCountvalueStart({
                              name: "FacebookLikes",
                              // componentName: props.name,
                              min: Number(e),
                              max: props?.pageFilterInfo?.FacebookLikes?.max,
                              Message: `Facebook Likes page: ${e}-${props?.pageFilterInfo?.FacebookLikes?.max}`,
                            })
                          );
                          document.getElementById("searchbar").value
                            ? dispatch(SavedAdssearchStart(props.search))
                            : dispatch(applySavedAdsallfilters());
                        }
                      }}
                    /> */}

                    <Typography>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={props?.pageFilterInfo?.FacebookLikes?.max.toString()}
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          if (props.name === "AllAdsPage") {
                            if (Number(e.value) > props?.ranger?.FacebookLikes?.max) {
                              dispatch(
                                rangerefixMinMaxSiler({
                                  name: "FacebookLikes",
                                  // min: 1,
                                  max: Number(e.value),
                                })
                              );
                            }
                            dispatch(
                              AdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.FacebookLikes?.min,
                                max: Number(e.value),
                                Message: `FacebookLikes : ${props?.pageFilterInfo?.FacebookLikes?.min}-${e.value}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.FacebookLikes?.min,
                                max: Number(e.value),
                                Message: `FacebookLikes : ${props?.pageFilterInfo?.FacebookLikes?.min}-${e.value}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdsFilterAfterSearchStart())
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    />

                    {/* <EditableLabel
                      text={props?.pageFilterInfo?.FacebookLikes?.max || ""}
                      inputWidth="100px"
                      onFocus={(e) => {
                        setOnFocusEditTextField(() => e);
                      }}
                      onFocusOut={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(onFocusEditTextField) !== e) {
                          if (props.name === "AllAdsPage") {
                            dispatch(
                              AdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.FacebookLikes?.min,
                                max: Number(e),
                                Message: `FacebookLikes : ${props?.pageFilterInfo?.FacebookLikes?.min}-${e}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) // dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "FacebookLikes",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.FacebookLikes?.min,
                                max: Number(e),
                                Message: `FacebookLikes : ${props?.pageFilterInfo?.FacebookLikes?.min}-${e}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdssearchStart(props.search))
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    /> */}
                  </Stack>
                </Box>

                <Slider
                  id="facebook"
                  size="small"
                  value={[
                    props?.pageFilterInfo?.FacebookLikes?.min,
                    props?.pageFilterInfo?.FacebookLikes?.max,
                  ]}
                  min={props?.ranger?.FacebookLikes?.min}
                  max={props?.ranger?.FacebookLikes?.max}
                  sx={{ color: "#00CBFF" }}
                  onChange={FacebookLikesIncremten}
                />
                <Button
                  disabled={props.loading}
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    if (props.name === "AllAdsPage") {
                      dispatch(
                        AdCountvalueStart({
                          name: "FacebookLikes",
                          componentName: props.name,
                          min: 1,
                          max: 100000,
                          Message: "",
                        })
                      );

                      document.getElementById("searchbar").value
                        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                        : dispatch(applyallfilters());
                    } else if (props.name === "SavedPage") {
                      dispatch(
                        SavedAdsAdCountvalueStart({
                          name: "FacebookLikes",
                          // componentName: props.name,
                          min: 1,
                          max: 100000,
                          Message: "",
                        })
                      );
                      document.getElementById("searchbar").value
                        ? dispatch(SavedAdsFilterAfterSearchStart())
                        : dispatch(applySavedAdsallfilters());
                    }

                    setFacebookLikeAnchorEl(null);
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Popover>

          <Button
            disabled={props.loading}
            variant="outlined"
            onClick={(e) => setInstragramFollowerAnchorEl(e.currentTarget)}
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
            }}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography noWrap textTransform="capitalize">
              {" "}
              Instagram Page Followers{" "}
            </Typography>
          </Button>
          <Popover
            open={openInstragramFollower}
            anchorEl={instragramFolloweranchorel}
            add={openInstragramFollower ? "simple-popover" : undefined}
            onClose={() => {
              setInstragramFollowerAnchorEl(null);
              // dispatch(applyallfilters());
              // let min = document.getElementById("minRange").innerText;
              // let max = document.getElementById("maxRange").innerText;
              // console.log(min);
              // console.log(max);
              // dispatch(
              //   AdCountvalueStart({
              //     name: "AdCount",
              //     min: min,
              //     max: max,
              //     Message: `Ad Count: ${min}-${max}`,
              //   })
              // );
              // console.log(
              //   "[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]"
              // );
            }}
            transformOrigin={{
              horizontal: "left",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: "left",
              vertical: "bottom",
            }}
          >
            <Box
              sx={{
                margin: 2,
                width: "210px",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>From</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={props?.pageFilterInfo?.InstragramLike?.min.toString()}
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          if (props.name === "AllAdsPage") {
                            dispatch(
                              AdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: Number(e.value),
                                max: props?.pageFilterInfo?.InstragramLike?.max,
                                Message: `InstragramLike: ${e.value}-${props?.pageFilterInfo?.InstragramLike?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: Number(e.value),
                                max: props?.pageFilterInfo?.InstragramLike?.max,
                                Message: `InstragramLike: ${e.value}-${props?.pageFilterInfo?.InstragramLike?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdsFilterAfterSearchStart())
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    />
                    {/* <EditableLabel
                      text={props?.pageFilterInfo?.InstragramLike?.min || ""}
                      inputWidth="100px"
                      onFocus={(e) => {
                        setOnFocusEditTextField(() => e);
                      }}
                      onFocusOut={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(onFocusEditTextField) !== e) {
                          if (props.name === "AllAdsPage") {
                            dispatch(
                              AdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: Number(e),
                                max: props?.pageFilterInfo?.InstragramLike?.max,
                                Message: `InstragramLike: ${e}-${props?.pageFilterInfo?.InstragramLike?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: Number(e),
                                max: props?.pageFilterInfo?.InstragramLike?.max,
                                Message: `InstragramLike: ${e}-${props?.pageFilterInfo?.InstragramLike?.max}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdssearchStart(props.search))
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    /> */}

                    <Typography>to</Typography>
                    <EditText
                      id="minRange"
                      type="number"
                      style={{ maxWidth: "100px" }}
                      // width="30px"

                      defaultValue={props?.pageFilterInfo?.InstragramLike?.max.toString()}
                      onSave={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(e.value) !== e.previousValue) {
                          if (props.name === "AllAdsPage") {
                            if (Number(e.value) > props.ranger.InstragramLike.max) {
                              dispatch(
                                rangerefixMinMaxSiler({
                                  name: "InstragramLike",
                                  // min: 1,
                                  max: Number(e.value),
                                })
                              );
                            }
                            dispatch(
                              AdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.InstragramLike?.min,
                                max: Number(e.value),
                                Message: `InstragramLike: ${props?.pageFilterInfo?.InstragramLike?.min}-${e.value}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                              : dispatch(applyallfilters());
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.InstragramLike?.min,
                                max: Number(e.value),
                                Message: `InstragramLike: ${props?.pageFilterInfo?.InstragramLike?.min}-${e.value}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdsFilterAfterSearchStart())
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    />
                    {/* <EditableLabel
                      text={props?.pageFilterInfo?.InstragramLike?.max || ""}
                      inputWidth="100px"
                      onFocus={(e) => {
                        setOnFocusEditTextField(() => e);
                      }}
                      onFocusOut={(e) => {
                        console.log(e);
                        console.log("==============================");
                        if (Number(onFocusEditTextField) !== e) {
                          if (props.name === "AllAdsPage") {
                            dispatch(
                              AdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.InstragramLike?.min,
                                max: Number(e),
                                Message: `InstragramLike: ${props?.pageFilterInfo?.InstragramLike?.min}-${e}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                              : dispatch(
                                  applyallfilters({ componentName: props.name })
                                );
                          } else if (props.name === "SavedPage") {
                            dispatch(
                              SavedAdsAdCountvalueStart({
                                name: "InstragramLike",
                                // componentName: props.name,
                                min: props?.pageFilterInfo?.InstragramLike?.min,
                                max: Number(e),
                                Message: `InstragramLike: ${props?.pageFilterInfo?.InstragramLike?.min}-${e}`,
                              })
                            );
                            document.getElementById("searchbar").value
                              ? dispatch(SavedAdssearchStart(props.search))
                              : dispatch(applySavedAdsallfilters());
                          }
                        }
                      }}
                    /> */}
                  </Stack>
                </Box>

                <Slider
                  id="instragram"
                  size="small"
                  value={[
                    props?.pageFilterInfo?.InstragramLike?.min,
                    props?.pageFilterInfo?.InstragramLike?.max,
                  ]}
                  min={props?.ranger?.InstragramLike?.min}
                  max={props.ranger.InstragramLike.max}
                  sx={{ color: "#00CBFF" }}
                  onChange={InstragramFollowerIncremten}
                />
                <Button
                  disabled={props.loading}
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    borderWidth: 2,
                  }}
                  onClick={() => {
                    if (props.name === "AllAdsPage") {
                      dispatch(
                        AdCountvalueStart({
                          name: "InstragramLike",
                          // componentName: props.name,
                          min: 1,
                          max: 10000,
                          Message: "",
                        })
                      );
                      document.getElementById("searchbar").value
                        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                        : dispatch(applyallfilters());
                    } else if (props.name === "SavedPage") {
                      dispatch(
                        SavedAdsAdCountvalueStart({
                          name: "InstragramLike",
                          // componentName: props.name,
                          min: 1,
                          max: 10000,
                          Message: "",
                        })
                      );

                      document.getElementById("searchbar").value
                        ? dispatch(SavedAdsFilterAfterSearchStart())
                        : dispatch(applySavedAdsallfilters());
                    }

                    setInstragramFollowerAnchorEl(null);
                  }}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </Popover>

          <Button
            disabled={props.loading}
            variant="outlined"
            onClick={(e) => setMediaTypeAnchorel(e.currentTarget)}
            disableElevation
            disableRipple
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
            }}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
            size="large"
          >
            <Typography noWrap textTransform="capitalize">
              {" "}
              Media Type{" "}
            </Typography>
          </Button>
          <Popover
            anchorEl={mediaTypeAnchorel}
            add={openMediaTypeAnchorel ? "simple-popover" : undefined}
            onClose={() => {
              setMediaTypeAnchorel(null);
            }}
            open={openMediaTypeAnchorel}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ width: "190px" }}>
              <FormControl sx={{ padding: "10px" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={props?.pageFilterInfo?.MediaType?.selectedData}
                  onChange={handlechange}
                >
                  <FormControlLabel
                    value="Video or Photo"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Video or Photo"
                  />
                  <FormControlLabel
                    value="video"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Video"
                  />
                  <FormControlLabel
                    value="image"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="photo"
                  />
                </RadioGroup>
                <Box
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    disabled={props.loading}
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      fontWeight: 600,
                      borderColor: "#00CBFF",
                      color: "#00CBFF",
                      height: "35px",
                      width: "80px",
                      borderWidth: 2,
                    }}
                    onClick={() => {
                      if (props.name === "AllAdsPage") {
                        dispatch(
                          MediaTypevalueStart({
                            name: "MediaType",
                            // componentName: props.name,
                            selectedData: "Video or Photo",
                            Message: "",
                          })
                        );

                        document.getElementById("searchbar").value
                          ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                          : dispatch(applyallfilters());
                        dispatch(SortvalueStart());
                      } else if (props.name === "SavedPage") {
                        dispatch(
                          SavedAdsMediaTypevalueStart({
                            name: "MediaType",
                            // componentName: props.name,
                            selectedData: "Video or Photo",
                            Message: "",
                          })
                        );

                        document.getElementById("searchbar").value
                          ? dispatch(SavedAdsFilterAfterSearchStart())
                          : dispatch(applySavedAdsallfilters());
                      }

                      setMediaTypeAnchorel(null);
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Popover>

          <Button
            disabled={props.loading}
            variant="outlined"
            onClick={(e) => setButtonTypeAnchorEl(e.currentTarget)}
            sx={{
              color: "#2B2F42",
              whiteSpace: "nowrap",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              marginRight: "14px",
              marginTop: "22px",
            }}
            endIcon={
              <img
                alt="arrowdown"
                src={Arrowdown}
                className={classes.DropDownArrow}
              />
            }
          >
            <Typography noWrap textTransform="capitalize">
              {" "}
              Button{" "}
            </Typography>
          </Button>
          <Popover
            anchorEl={ButtonTypeanchorel}
            add={openButtonType ? "simple-popover" : undefined}
            onClose={() => {
              setButtonTypeAnchorEl(null);
            }}
            open={openButtonType}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ width: "190px" }}>
              <FormControl sx={{ padding: "10px" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={props?.pageFilterInfo?.PurchaseType?.selctedButton}
                  onChange={handleButtonType}
                >
                  {ctaStatus.map((value) => {
                    return (
                      <FormControlLabel
                        key={value}
                        value={`${value}`}
                        control={<Radio style={{ color: "#00CBFF" }} />}
                        label={`${value}`}
                      />
                    );
                  })}
                  {/* <FormControlLabel
                    value="Shop Now"
                    control={<Radio style={{ color: "#00CBFF" }} />}
                    label="Shop Now"
                  /> */}
                </RadioGroup>
                {/* <Box
                        display={"flex"}
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            borderRadius: 50,
                            fontWeight: 600,
                            borderColor: "#00CBFF",
                            color: "#00CBFF",
                            height: "35px",
                            width: "80px",
                            borderWidth: 2,
                          }}
                          onClick={() => {
                            dispatch(
                              MediaTypevalueStart({
                                name: "MediaType",
                                selectedData: "Video or Photo",
                                Message: "",
                              })
                            );
                            // dispatch(applyallfilters());
                            // searchBarData !== []
                            //   ? dispatch(searchStart(searchBarData))
                            //   : dispatch(applyallfilters());
                            document.getElementById("searchbar").value
                              ? dispatch(searchStart(searchBarData))
                              : dispatch(applyallfilters());
                            dispatch(SortvalueStart());
                            // setAppliedFilters((pre) => ({
                            //   ...pre,
                            //   MediaType: {
                            //     selectedData: "Video or Photo",
                            //     Message: "",
                            //   },
                            // }));

                            setMediaTypeAnchorel(null);
                          }}
                        >
                          Reset
                        </Button>
                      </Box> */}
              </FormControl>
            </Box>
          </Popover>
        </Grid>
        <Grid item lg={1} md={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid item sx={{ marginTop: "20px" }}>
                <Button
                  disabled={props.loading}
                  variant="outlined"
                  style={{
                    // background: "#00CBFF",
                    borderRadius: 50,
                    fontWeight: 600,
                    borderColor: "#00CBFF",
                    color: "#00CBFF",
                    height: "35px",
                    width: "80px",
                    borderWidth: 2,
                    texttransform: "none"
                  }}
                  onClick={() => {
                    const emptyFilter = {};
                    console.log("00000000000000000000000000000")
                      console.log(appliedFilters)
                      console.log("1111111111111111111111111111111111111111")
                    if (props.name === "AllAdsPage") {
                     
                    
                        
                        dispatch(clearFilteredDataStart({
                          StartRunningDate: { startdate: "", enddate: "", Message: "" },
                          AdStatus: { status: "", Message: "" },
                          AdCount: { min: 1, max: 1000, Message: "" },
                          FacebookLikes: { min: 1, max: 100000, Message: "" },
                          InstragramLike: { min: 1, max: 10000, Message: "" },
                          MediaType: { selectedData: "Video or Photo", Message: "" },
                          PurchaseType: { selctedButton: "", Message: "" }
                        }));
                       
                        document.getElementById("searchbar").value
                        ? dispatch(FilterAfterSearchStart()) //dispatch(searchStart(props.search))
                        : dispatch(applyallfilters());
                    
                    } else if (props.name === "SavedPage") {
                      dispatch(
                        SavedAdsclearFilteredDataStart({
                          StartRunningDate: { startdate: "", enddate: "", Message: "" },
                          AdStatus: { status: "", Message: "" },
                          AdCount: { min: 1, max: 1000, Message: "" },
                          FacebookLikes: { min: 1, max: 100000, Message: "" },
                          InstragramLike: { min: 1, max: 10000, Message: "" },
                          MediaType: { selectedData: "Video or Photo", Message: "" },
                          PurchaseType: { selctedButton: "", Message: "" },
                        })
                      );
                      document.getElementById("searchbar").value
                      ? dispatch(SavedAdsFilterAfterSearchStart())
                      : dispatch(applySavedAdsallfilters());

                      // dispatch(applySavedAdsallfilters());
                      // Object.keys(props?.pageFilterInfo).map(
                      //   (filter, index) => {
                      //     const FilterRemoveDat = [];
                      //     for (let dum in props?.pageFilterInfo[filter]) {
                      //       FilterRemoveDat[dum] =
                      //         typeof props?.pageFilterInfo[filter][dum] ===
                      //         "number"
                      //           ? dum === "min"
                      //             ? 1
                      //             : 1000
                      //           : typeof props?.pageFilterInfo[filter][dum] ===
                      //             "string"
                      //           ? dum === "Mediatype"
                      //             ? "Video or Photo"
                      //             : dum === "status"
                      //             ? ""
                      //             : ""
                      //           : new Date();
                      //     }
                          
                      //     // setAppliedFilters((pre) => ({
                      //     //   ...pre,
                      //     //   [`${filter}`]: FilterRemoveDat,
                      //     // }));
                      //     emptyFilter[filter] = FilterRemoveDat;
                      //     // setAdsFilteredData(() => allMediaAds[1]?.all_ads);
                      //   }
                      // );
                      // dispatch(SavedAdsclearFilteredDataStart(emptyFilter));
                      
                    }
                  }}
                  
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container sx={{ marginTop: 1 }}>
        {Object.keys(appliedFilters).map((filter, index) => {
          return (
            appliedFilters[filter]["Message"] && (
              <Chip
                key={index}
                color="primary"
                label={appliedFilters[filter]["Message"]}
                deleteIcon={
                  <CloseIcon
                    style={{ color: "white", backgroundColor: "#00CBFF" }}
                  />
                }
                onDelete={() => {
                  const filters = Object(appliedFilters[filter]);
                  const AdsRemovedElement = {
                    MIN: "min",
                    MEDIATYPE: "selectedData",
                    STATUS: "status",
                    SELECTEDDATE: "StartRunningDate",
                  };
                  console.log(filter);

                  console.log(";;;;;;;;;;;;;;;");
                  const FilterRemoveData = [];
                  for (let dum in filters) {
                    console.log("dum" + dum);
                    console.log(dum, filters[dum]);
                    // console.log(typeof appliedFilters[filter][dum]);
                    FilterRemoveData[dum] =
                      typeof appliedFilters[filter][dum] === "number"
                        ? dum === AdsRemovedElement.MIN
                          ? 1
                          : filter === "FacebookLikes"
                          ? 100000
                          : filter === "InstragramLike"
                          ? 10000
                          : 1000
                        : typeof appliedFilters[filter][dum] === "string"
                        ? dum === AdsRemovedElement.MEDIATYPE
                          ? dum === AdsRemovedElement.STATUS
                            ? "Active"
                            : "Video or Photo"
                          : ""
                        : new Date();
                  }
                  console.table(FilterRemoveData);
                  console.log(FilterRemoveData);
                  dispatch(
                    clearSingleFilteredDataStart({
                      name: filter,
                      data: FilterRemoveData,
                    })
                  );
                  // dispatch(
                  //   SetSortOrdervalueStart({
                  //     name: "type",
                  //     data: "",
                  //   })
                  // );
                  // dispatch(applyallfilters());
                  console.log(document.getElementById("searchbar").value);
                  console.log(
                    "-----------======================================"
                  );
                  document.getElementById("searchbar").value !== ""
                    ? dispatch(searchStart(searchBarData))
                    : dispatch(applyallfilters({ componentName: props.name }));
                  dispatch(SortvalueStart());
                  // setAppliedFilters((pre) => ({
                  //   ...pre,
                  //   [`${filter}`]: FilterRemoveData,
                  // }));

                  console.log(filter);
                }}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#00CBFF",
                  marginLeft: 1,
                }}
              />
            )
          );
        })}
      </Grid> */}
      {/* </Grid> */}
    </>
  );
}

export default AllFilters;
