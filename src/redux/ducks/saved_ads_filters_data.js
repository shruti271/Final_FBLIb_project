// export const LOAD_FILTERDATA = "LOAD_FILTERDATA";
// export const PUT_FILTERDATA = "PUT_FILTERDATA";
// export const CREATE_FILTERDATA = "CREATE_FILTERDATA";
// export const APPLIED_FILTERS = "APPLIED_FILTERS";
// export const DATEFILTER = "DATEFILTER";
// export const NOODADS_START = "NOODADS_START";
// export const MEDIATYPE_START = "MEDIATYPE_START";
// export const BUTTONTYPETYPE_START = "BUTTONTYPETYPE_START";
// export const SET_SORT_FILTER_START = "SET_SORT_FILTER_START";
// export const SORT_TYPE_START = "SORT_TYPE_START";
// export const STATUS_START = "STATUS_START";
// export const FACEBOOKLIKES_START = "FACEBOOKLIKES_START";
// export const SET_POSTION_SCROLL ="SET_POSTION_SCROLL";
// export const SEARCH_START = "SEARCH_START";
// export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
// export const SEARCH_ERROR = "SEARCH_ERROR";
// export const INCREASE_DECREASE_DATA_START = "INCREASE_DECREASE_DATA_START";
// export const CLEAR_FILTERDATA = "CLEAR_FILTERDATA";
// export const APPLY_ALL_FILTER = "APPLY_ALL_FILTER";
// export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";

// export const loadFilteredDataStart = () => ({
//   type: LOAD_FILTERDATA,
// });

// export const putFilteredDataStart = (allData) => ({
//   type: PUT_FILTERDATA,
//   payload: allData,
// });

// export const applyallfilters = () => ({
//   type: APPLY_ALL_FILTER,
// });
// export const applysortingfilters = () => ({
//   type: SORT_TYPE_START,
// });
// export const datevalueStart = (filter) => ({
//   type: DATEFILTER,
//   payload: filter,
// });

// export const AdCountvalueStart = (filter) => ({
//   type: NOODADS_START,
//   payload: filter,
// });
// export const MediaTypevalueStart = (filter) => ({
//   type: MEDIATYPE_START,
//   payload: filter,
// });

// export const ButtonTypevalueStart = (filter) => ({
//   type: BUTTONTYPETYPE_START,
//   payload: filter,
// });
// export const facebookLikesStart = (filter) => ({
//   type: FACEBOOKLIKES_START,
//   payload: filter,
// });
// export const SetSortOrdervalueStart = (filter) => ({
//   type: SET_SORT_FILTER_START,
//   payload: filter,
// });
// export const fluctuatedDataEnd = () => ({
//   type: INCREASE_DECREASE_DATA_START,
// });
// export const SortvalueStart = () => ({
//   type: SORT_TYPE_START,
//   // payload: filter,
// });
// export const statusValueStart = (filter) => ({
//   type: STATUS_START,
//   payload: filter,
// });
// export const searchValueStart = (filter) => ({
//   type: SEARCH_START,
//   payload: filter,
// });
// // export const createFilteredDataStart = (ads) => ({
// //   type: CREATE_FILTERDATA,
// //   payload: ads,
// // });
// export const srtPostionForScrollValueStart = (filter) => ({
//   type: SET_POSTION_SCROLL,
//   payload: filter,
// });

// export const clearFilteredDataStart = (ads) => ({
//   type: CLEAR_FILTERDATA,
//   payload: ads,
// });

// export const clearSingleFilteredDataStart = (ads) => ({
//   type: CLEAR_SINGLE_FILTER,
//   payload: ads,
// });

// export const searchStart = (Ads) => ({
//   type: SEARCH_START,
//   payload: Ads,
// });

// export const searchSuccess = (Ads) => ({
//   type: SEARCH_SUCCESS,
//   payload: Ads,
// });

// export const searchError = (error) => ({
//   type: SEARCH_ERROR,
//   payload: error,
// });

// const initialState = {
//   allData: [],
//   savedFilteredData: [],
//   savedAppliedFilters: {
//     StartRunningDate: { startdate: "", enddate: "", Message: "" },
//     AdStatus: { status: "", Message: "" },
//     AdCount: { min: 1, max: 1000, Message: "" },
//     FacebookLikes: { min: 1, max: 100000, Message: "" },
//     InstragramLike: { min: 1, max: 10000, Message: "" },
//     MediaType: { selectedData: "Video or Photo", Message: "" },
//     PurchaseType: { selctedButton: "", Message: "" },
//   },
//   savedSortFilter: {
//     type: "",
//     order: "Ascending",
//   },
//   savedPostionYoffset:0,
//   savedSearchBarData: [],
//   // fluctuatedDataHistroy: [],
// //   search_loading: false,
//   error: "",
// };

// const FilterDataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD_FILTERDATA:
//       return {
//         ...state,
//         search_loading: false,
//         // filteredData: action.payload,
//       };
//     case PUT_FILTERDATA:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: action.payload,
//         allData: action.payload,
//       };
//     case DATEFILTER:
//       console.log(action.payload);
//       console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.filteredData],
//         appliedFilters: {
//           ...state.appliedFilters,
//           [`${action.payload.name}`]: {
//             startdate: action.payload.startdate,
//             enddate: action.payload.enddate,
//             Message: action.payload.Message,
//           },
//         },
//       };
//     case NOODADS_START:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: state.filteredData,
//         appliedFilters: {
//           ...state.appliedFilters,
//           [`${action.payload.name}`]: {
//             min: action.payload.min,
//             max: action.payload.max,
//             Message: action.payload.Message,
//           },
//         },
//       };
//     case MEDIATYPE_START:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.filteredData],

//         appliedFilters: {
//           ...state.appliedFilters,
//           [`${action.payload.name}`]: {
//             selectedData: action.payload.selectedData,
//             Message: action.payload.Message,
//           },
//         },
//       };
//     case BUTTONTYPETYPE_START:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.filteredData],

//         appliedFilters: {
//           ...state.appliedFilters,
//           [`${action.payload.name}`]: {
//             selctedButton: action.payload.selctedButton,
//             Message: action.payload.Message,
//           },
//         },
//       };
//     case SET_POSTION_SCROLL:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.filteredData],
//         appliedFilters: state.appliedFilters,
//         postionYoffset:action.payload
//       };
//       case SET_SORT_FILTER_START:
//       return {
//         ...state,
//         search_loading: false,
//         appliedFilters: state.appliedFilters,
//         sortFilter: {
//           ...state.sortFilter,
//           [`${action.payload.name}`]: `${action.payload.data}`,
//         },

//         filteredData: [...state.filteredData],
//       };
//     case INCREASE_DECREASE_DATA_START:
//       // const fluctuate_date = [...state.filteredData];
//       // if (state.sortFilter.type === "AdCountIncrease") {
//       //   fluctuate_date.filter((ads) => {
//       //     var cou = Object.keys(ads.history).length;
//       //     if (cou > 1) {
//       //       console.log(
//       //         "llllllllllllllllllllllllllllllllllllllllllllll@@@@@@@@@@@@@@@@@"
//       //       );
//       //       console.log(Object.values(ads.history));
//       //       console.log(
//       //         "llllllllllllllllllllllllllllllllllllllllllllll-@@@@@@@@@@@@@@@@@---------" +
//       //           cou
//       //       );
//       //       return (
//       //         Object.values(ads.history)[Object.keys(ads.history).length - 1] <
//       //         Object.values(ads.history)[Object.keys(ads.history).length - 2]
//       //       );
//       //     }
//       //   });
//       // }
//       return {
//         ...state,
//         search_loading: false,
//         appliedFilters: state.appliedFilters,
//         sortFilter: {...state.sortFilter,type:""},
//         // filteredData: [...state.filteredData],
//         filteredData:state.allData
//           // state.sortFilter.type === "AdCountIncrease"
//             // ?
//             //  [
//             //     ...state.filteredData.filter((ads) => {
//             //       // if()
//             //       var cou = Object.keys(ads.history).length;
//             //       console.log("hereeeeeeeeeeeeeeeeeeeeeeeee");
//             //       if (cou > 1) {
//             //         return (
//             //           Object.values(ads.history)[Object.keys(ads.history).length - 1] <
//             //           Object.values(ads.history)[Object.keys(ads.history).length - 2]
//             //         );
//             //       } else return false;
//             //     }),
//             //   ]
//             // : [
//             //     ...state.filteredData.filter((ads) => {
//             //       var cou = Object.keys(ads.history).length;
//             //       if (cou > 1) {
//             //         return (
//             //           ads.history[ads.history.length - 1] <
//             //           ads.history[ads.history.length - 2]
//             //         );
//             //       } else return false;
//             //     }),
//             //   ],
//       };
//     case SORT_TYPE_START:
//       const dummy = [...state.filteredData];
//       console.log(state.sortFilter.type);

//       state.sortFilter?.order === "Ascending"
//         ? state.sortFilter?.type === "startDate"
//           ? dummy?.sort(
//               (firstAd, secondAd) =>
//                 Date.parse(firstAd[state.sortFilter?.type]) -
//                 Date.parse(secondAd[state.sortFilter?.type])
//             )
//           : state.sortFilter?.type === "likes"
//           ? dummy?.sort(
//               (firstAd, secondAd) =>
//                 firstAd["pageInfo"]["platforms"][0][state.sortFilter?.type] -
//                 secondAd["pageInfo"]["platforms"][0][state.sortFilter?.type]
//             )
//           : state.sortFilter?.type ===
//             ("Ad count increase" || "Ad count decrease")
//           ? dummy?.sort(
//               (firstAd, secondAd) =>
//                 firstAd["noOfCopyAds"] - secondAd["noOfCopyAds"]
//             )
//           : dummy?.sort(
//               (firstAd, secondAd) =>
//                 firstAd[state.sortFilter?.type] -
//                 secondAd[state.sortFilter?.type]
//             )
//         : state.sortFilter?.type === "startDate"
//         ? dummy?.sort(
//             (firstAd, secondAd) =>
//               Date.parse(secondAd[state.sortFilter?.type]) -
//               Date.parse(firstAd[state.sortFilter?.type])
//           )
//         : state.sortFilter?.type === "likes"
//         ? dummy?.sort(
//             (firstAd, secondAd) =>
//               secondAd["pageInfo"]["platforms"][0][state.sortFilter?.type] -
//               firstAd["pageInfo"]["platforms"][0][state.sortFilter?.type]
//           )
//         : state.sortFilter?.type ===
//           ("Ad count increase" || "Ad count decrease")
//         ? dummy?.sort(
//             (firstAd, secondAd) =>
//               secondAd["noOfCopyAds"] - firstAd["noOfCopyAds"]
//           )
//         : dummy?.sort(
//             (firstAd, secondAd) =>
//               secondAd[state.sortFilter?.type] - firstAd[state.sortFilter?.type]
//           );
//       console.log(dummy);
//       console.log("..............................................");

//       return {
//         ...state,
//         search_loading: false,
//         appliedFilters: state.appliedFilters,
//         sortFilter: state.sortFilter,
//         filteredData: dummy,
//         // state.sortFilter?.order === "Ascending"
//         //   ? state.sortFilter?.type === "startDate"
//         //     ? state.filteredData?.sort(
//         //         (firstAd, secondAd) =>
//         //           Date.parse(firstAd["startDate"]) -
//         //           Date.parse(secondAd["startDate"])
//         //       )
//         //     : state.filteredData?.sort(
//         //         (firstAd, secondAd) =>
//         //           firstAd[state.sortFilter?.type] -
//         //           secondAd[state.sortFilter?.type]
//         //       )
//         //   : state.sortFilter?.type === "startDate"
//         //   ? state.filteredData?.sort(
//         //       (firstAd, secondAd) =>
//         //         Date.parse(secondAd[state.sortFilter?.type]) -
//         //         Date.parse(firstAd[state.sortFilter?.type])
//         //     )
//         //   : state.filteredData?.sort(
//         //       (firstAd, secondAd) =>
//         //         secondAd[state.sortFilter?.type] -
//         //         firstAd[state.sortFilter?.type]
//         // ),
//       };
//     case STATUS_START:
//       return {
//         ...state,
//         search_loading: false,
//         appliedFilters: {
//           ...state.appliedFilters,
//           [`${action.payload.name}`]: {
//             status: action.payload.status,
//             Message: action.payload.Message,
//           },
//         },
//         filteredData: [...state.filteredData],
//       };
//     // case FACEBOOKLIKES_START:
//     //   return {
//     //     ...state,
//     //     search_loading: false,
//     //     appliedFilters: {
//     //       ...state.appliedFilters,
//     //       [`${action.payload.name}`]: {
//     //         status: action.payload.status,
//     //         Message: action.payload.Message,
//     //       },
//     //     },
//     //     filteredData: [...state.filteredData],
//     //   };
//     case SEARCH_START:
//       return {
//         ...state,
//         search_loading: false,
//         searchBarData: action.payload,
//         // appliedFilters: state.appliedFilters,
//         // searchBarData: action.payload,
//         // filteredData: [
//         //   ...state.allData.filter((ads) => {
//         //     console.log(action.payload)
//         //     const dummyData = JSON.stringify(Object.values(ads)).toLowerCase();
//         //     console.log(dummyData)
//         //     const darr = action.payload.split(" ").join(",").toLowerCase();
//         //     // console.log(darr);
//         //     console.log("|^ darr;;;;;" + dummyData.includes(...darr));
//         //     // console.log(ads);
//         //     console.log("000000000000000000000000000000000000")
//         //     return dummyData.includes(...darr);
//         //   }),
//         // ],
//       };

//     case SEARCH_SUCCESS:
//       return {
//         ...state,
//         search_loading: false,
//         appliedFilters: state.appliedFilters,
//         searchBarData: state.searchBarData,
//         filteredData:
//           state.searchBarData !== []
//             ? action.payload.filter(
//                 (ads) =>
//                   (state.appliedFilters?.AdCount?.min !== 0 ||
//                   state.appliedFilters?.AdCount?.max !== 1000
//                     ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
//                       ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
//                     : true) &&
//                   (state.appliedFilters?.MediaType?.selectedData === "" ||
//                   state.appliedFilters?.MediaType?.selectedData ===
//                     "Video or Photo"
//                     ? true
//                     : ads.adMediaType ===
//                       state.appliedFilters?.MediaType?.selectedData) &&
//                   (state.appliedFilters?.AdStatus?.status !== ""
//                     ? ads?.status === state.appliedFilters?.AdStatus?.status
//                     : true) &&
//                   (state.appliedFilters?.StartRunningDate?.startdate &&
//                   state.appliedFilters?.StartRunningDate?.enddate
//                     ? state.appliedFilters?.StartRunningDate?.startdate <=
//                         ads?.startDate &&
//                       state.appliedFilters?.StartRunningDate?.enddate >=
//                         ads?.startDate
//                     : true) &&
//                   (state.appliedFilters?.FacebookLikes?.min !== 0 ||
//                   state.appliedFilters?.FacebookLikes?.max !== 1000
//                     ? state.appliedFilters?.FacebookLikes?.max === 0
//                       ? ads?.pageInfo?.platforms[0]?.likes >=
//                         state.appliedFilters?.FacebookLikes?.min
//                       : ads?.pageInfo?.platforms[0]?.likes >=
//                           state.appliedFilters?.FacebookLikes?.min &&
//                         ads?.pageInfo?.platforms[0]?.likes <=
//                           state.appliedFilters?.FacebookLikes?.max
//                     : true)
//               )
//             : state.filteredData,

//         // filteredData: [
//         //   ...state.allData.filter((ads) => {
//         //     console.log(action.payload)
//         //     const dummyData = JSON.stringify(Object.values(ads)).toLowerCase();
//         //     console.log(dummyData)
//         //     const darr = action.payload.split(" ").join(",").toLowerCase();
//         //     // console.log(darr);
//         //     console.log("|^ darr;;;;;" + dummyData.includes(...darr));
//         //     // console.log(ads);
//         //     console.log("000000000000000000000000000000000000")
//         //     return dummyData.includes(...darr);
//         //   }),
//         // ],
//       };

//     case SEARCH_ERROR:
//       return {
//         ...state,
//         search_loading: false,
//         error: action.payload,
//       };
//     case APPLY_ALL_FILTER:
//       console.log(state.appliedFilters?.StartRunningDate?.startdate);
//       console.log("..???????????????");
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [
//           ...state.allData.filter((ads) => {
//             console.log(ads?.pageInfo?.platforms[0]?.likes);
//             console.log(ads?.pageInfo?.platforms[1]?.followers);
//             console.log("#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//             return (
//               (state.appliedFilters?.AdCount?.min !== 1 ||
//               state.appliedFilters?.AdCount?.max !== 1000
//                 ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
//                   ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
//                 : true) &&
//               (state.appliedFilters?.FacebookLikes?.min !== 1 ||
//               state.appliedFilters?.FacebookLikes?.max !== 100000
//                 ? ads?.pageInfo?.platforms[0]?.likes >=
//                     state.appliedFilters?.FacebookLikes?.min &&
//                   ads?.pageInfo?.platforms[0]?.likes <=
//                     state.appliedFilters?.FacebookLikes?.max
//                 : true) &&
//               (state.appliedFilters?.InstragramLike?.min !== 1 ||
//               state.appliedFilters?.InstragramLike?.max !== 10000
//                 ? ads?.pageInfo?.platforms[1]?.followers >=
//                     state.appliedFilters?.InstragramLike?.min &&
//                   ads?.pageInfo?.platforms[1]?.followers <=
//                     state.appliedFilters?.InstragramLike?.max
//                 : true) &&
//               (state.appliedFilters?.MediaType?.selectedData === "" ||
//               state.appliedFilters?.MediaType?.selectedData === "Video or Photo"
//                 ? true
//                 : ads.adMediaType ===
//                   state.appliedFilters?.MediaType?.selectedData) &&
//               (state.appliedFilters?.AdStatus?.status !== ""
//                 ? ads?.status === state.appliedFilters?.AdStatus?.status
//                 : true) &&
//               (state.appliedFilters?.PurchaseType?.selctedButton === "" ||
//               state.appliedFilters?.PurchaseType?.selctedButton === "Shop Now"
//                 ? true
//                 : ads.ctaStatus.toLowerCase ===
//                   state.appliedFilters?.PurchaseType?.selctedButton
//                     .toLowerCase) &&
//               (state.appliedFilters?.AdStatus?.status !== ""
//                 ? ads?.status === state.appliedFilters?.AdStatus?.status
//                 : true) &&
//               (state.appliedFilters?.StartRunningDate?.startdate &&
//               state.appliedFilters?.StartRunningDate?.enddate
//                 ? state.appliedFilters?.StartRunningDate?.startdate <=
//                     ads?.startDate &&
//                   state.appliedFilters?.StartRunningDate?.enddate >=
//                     ads?.startDate
//                 : true) &&
//               (state.appliedFilters?.FacebookLikes?.min !== 1 ||
//               state.appliedFilters?.FacebookLikes?.max !== 1000
//                 ? state.appliedFilters?.FacebookLikes?.max === 0
//                   ? ads?.pageInfo?.platforms[0]?.likes >=
//                     state.appliedFilters?.FacebookLikes?.min
//                   : ads?.pageInfo?.platforms[0]?.likes >=
//                       state.appliedFilters?.FacebookLikes?.min &&
//                     ads?.pageInfo?.platforms[0]?.likes <=
//                       state.appliedFilters?.FacebookLikes?.max
//                 : true) && ( state.sortFilter?.type === "AdCountIncrease"                   
//                     ?  Object.values(ads.history)[Object.keys(ads.history).length - 1] >
//                     Object.values(ads.history)[Object.keys(ads.history).length - 2]
//                     : true) && (state.sortFilter?.type === "AdCountDecrease"                   
//                     ?  Object.values(ads.history)[Object.keys(ads.history).length - 1] <
//                     Object.values(ads.history)[Object.keys(ads.history).length - 2]
//                     : true)



//             );
//           }),
//         ],
//         appliedFilters: state.appliedFilters,
//       };

//     case APPLIED_FILTERS:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.filteredData],
//         appliedFilters: {
//           ...state.filteredData,
//           [`${action.payload.name}`]: `${action.payload.data}`,
//         },
//       };
//     case CLEAR_FILTERDATA:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.allData],
//         appliedFilters: action.payload,
//       };
//     case CLEAR_SINGLE_FILTER:
//       return {
//         ...state,
//         search_loading: false,
//         filteredData: [...state.filteredData],
//         appliedFilters: {
//           ...state.appliedFilters,
//           [`${action.payload.name}`]: action.payload.data,
//         },
//       };
//     // case CREATE_FILTERDATA:
//     //   return {
//     //     ...state,
//     //     search_loading: false,
//     //     filteredData: [...state.filteredData.concat(action.payload)],
//     //   };
//     // case DELETE_FILTERDATA:
//     //   return {
//     //     ...state,
//     //     search_loading: false,
//     //     filteredData: state.filteredData.filter(
//     //       (savedads) => savedads.adID !== action.payload.adID
//     //     ),
//     //   };

//     default:
//       return state;
//   }
// };

// export default FilterDataReducer;
