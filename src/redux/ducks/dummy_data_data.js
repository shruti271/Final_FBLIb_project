export const LOAD_FILTERDATA = "LOAD_FILTERDATA";
export const PUT_FILTERDATA = "PUT_FILTERDATA";
export const CREATE_FILTERDATA = "CREATE_FILTERDATA";
export const APPLIED_FILTERS = "APPLIED_FILTERS";
export const DATEFILTER = "DATEFILTER";
export const NOODADS_START = "NOODADS_START";
export const MEDIATYPE_START = "MEDIATYPE_START";
export const BUTTONTYPETYPE_START = "BUTTONTYPETYPE_START";
export const SET_SORT_FILTER_START = "SET_SORT_FILTER_START";
export const SORT_TYPE_START = "SORT_TYPE_START";
export const STATUS_START = "STATUS_START";
export const FACEBOOKLIKES_START = "FACEBOOKLIKES_START";
export const SET_POSTION_SCROLL = "SET_POSTION_SCROLL";
export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const EMPTY_SEARCH_SUCCESS = "EMPTY_SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const ALL_FILTER_AFTER_SEARCH_SUCCESS =
  "ALL_SEARCH_SUFILTER_AFTER_SEARCH_SUCCESSCCESS";
export const INCREASE_DECREASE_DATA_START = "INCREASE_DECREASE_DATA_START";
export const CLEAR_FILTERDATA = "CLEAR_FILTERDATA";
export const APPLY_ALL_FILTER = "APPLY_ALL_FILTER";
export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";
export const CHANGE_SEARCH_TYPE = "CHANGE_SEARCH_TYPE";

export const ALL_STATUS_START = "ALL_STATUS_START";
export const ALL_STATUS_SUCCESS = "ALL_STATUS_SUCCESS";
export const ALL_STATUS_ERROR = "ALL_STATUS_ERROR";

export const loadFilteredDataStart = () => ({
  type: LOAD_FILTERDATA,
});

export const putFilteredDataStart = (allData) => ({
  type: PUT_FILTERDATA,
  payload: allData,
});

export const applyallfilters = () => ({
  type: APPLY_ALL_FILTER,
  // payload: pageName,
});
export const applysortingfilters = () => ({
  type: SORT_TYPE_START,
});
export const datevalueStart = (filter) => ({
  type: DATEFILTER,
  payload: filter,
});

export const AdCountvalueStart = (filter) => ({
  type: NOODADS_START,
  payload: filter,
});
export const MediaTypevalueStart = (filter) => ({
  type: MEDIATYPE_START,
  payload: filter,
});
export const FilterAfterSearchStart = (filter) => ({
  type: ALL_FILTER_AFTER_SEARCH_SUCCESS,
  payload: filter,
});
export const ButtonTypevalueStart = (filter) => ({
  type: BUTTONTYPETYPE_START,
  payload: filter,
});
export const facebookLikesStart = (filter) => ({
  type: FACEBOOKLIKES_START,
  payload: filter,
});
export const SetSortOrdervalueStart = (filter) => ({
  type: SET_SORT_FILTER_START,
  payload: filter,
});
export const fluctuatedDataEnd = () => ({
  type: INCREASE_DECREASE_DATA_START,
});
export const SortvalueStart = () => ({
  type: SORT_TYPE_START,
  // payload: filter,
});
export const statusValueStart = (filter) => ({
  type: STATUS_START,
  payload: filter,
});
export const searchValueStart = (filter) => ({
  type: SEARCH_START,
  payload: filter,
});

export const EmptySearchValueStart = () => ({
  type: EMPTY_SEARCH_SUCCESS,
  // payload: filter,
});
// export const createFilteredDataStart = (ads) => ({
//   type: CREATE_FILTERDATA,
//   payload: ads,
// });
export const srtPostionForScrollValueStart = (filter) => ({
  type: SET_POSTION_SCROLL,
  payload: filter,
});

export const clearFilteredDataStart = (ads) => ({
  type: CLEAR_FILTERDATA,
  payload: ads,
});

export const clearSingleFilteredDataStart = (ads) => ({
  type: CLEAR_SINGLE_FILTER,
  payload: ads,
});

export const searchStart = (Ads) => ({
  type: SEARCH_START,
  payload: Ads,
});

export const searchSuccess = (Ads) => ({
  type: SEARCH_SUCCESS,
  payload: Ads,
});

export const searchError = (error) => ({
  type: SEARCH_ERROR,
  payload: error,
});

export const chnageSearchType = (data) => ({
  type: CHANGE_SEARCH_TYPE,
  payload: data,
});

export const getSetCatSatus = () => ({
  type: ALL_STATUS_START,
});

export const setCatSatusSuccess = (Ads) => ({
  type: ALL_STATUS_SUCCESS,
  payload: Ads,
});

export const setCatSatusError = (error) => ({
  type: ALL_STATUS_ERROR,
  payload: error,
});

const initialState = {
  allData: [],
  filteredData: [],
  appliedFilters: {
    StartRunningDate: { startdate: "", enddate: "", Message: "" },
    AdStatus: { status: "", Message: "" },
    AdCount: { min: 1, max: 1000, Message: "" },
    FacebookLikes: { min: 1, max: 100000, Message: "" },
    InstragramLike: { min: 1, max: 10000, Message: "" },
    MediaType: { selectedData: "Video or Photo", Message: "" },
    PurchaseType: { selctedButton: "", Message: "" },
  },

  sortFilter: {
    type: "",
    order: "Ascending",
  },
  postionYoffset: 0,
  searchBarData: "",
  searchType: "All these words",
  seactBarFilterData: [],
  search_loading: false,
  ctaStatus: [],
  error: "",
};

const FilterDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTERDATA:
      return {
        ...state,

        // filteredData: action.payload,
      };
    case PUT_FILTERDATA:
      return {
        ...state,
        // : {
        //   ...state,

        filteredData: action.payload.data,
        allData: action.payload.data,
        // },
      };
    case DATEFILTER:
      return {
        ...state,
        // : {
        //   ...state,
        //
        // filteredData: [
        //   ...state.filteredData,
        // ],
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            startdate: action.payload.startdate,
            enddate: action.payload.enddate,
            Message: action.payload.Message,
          },
        },
        // },
      };
    case NOODADS_START:
      return {
        ...state,
        // : {
        //   ...state,
        //
        // filteredData: state.filteredData,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            min: action.payload.min,
            max: action.payload.max,
            Message: action.payload.Message,
          },
        },
        // },
      };
    case MEDIATYPE_START:
      return {
        ...state,
        // : {
        //   ...state,
        //
        // filteredData: [...state.filteredData],
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            selectedData: action.payload.selectedData,
            Message: action.payload.Message,
          },
        },
        // },
      };
    case BUTTONTYPETYPE_START:
      return {
        ...state,
        // : {
        //   ...state,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            selctedButton: action.payload.selctedButton,
            Message: action.payload.Message,
          },
        },
        // },
      };
    case SET_POSTION_SCROLL:
      return {
        ...state,

        filteredData: [...state.filteredData],
        appliedFilters: state.appliedFilters,
        postionYoffset: action.payload,
      };
    case SET_SORT_FILTER_START:
      return {
        ...state,
        // : {
        //   ...state,
        sortFilter: {
          ...state.sortFilter,
          [`${action.payload.name}`]: `${action.payload.data}`,
        },
        // },
        //
        // appliedFilters: state.appliedFilters,

        // filteredData: [...state.filteredData],
      };
    case INCREASE_DECREASE_DATA_START:     
      return {
        ...state,
        appliedFilters: state.appliedFilters,
        sortFilter: { ...state.sortFilter, type: "" },        
        filteredData: state.allData,        
      };
    case SORT_TYPE_START:
      const dummy = [...state.filteredData];
      console.log(state.sortFilter.type);

      state.sortFilter?.order === "Ascending"
        ? state.sortFilter?.type === "startDate"
          ? dummy?.sort(
              (firstAd, secondAd) =>
                Date.parse(firstAd[state.sortFilter?.type]) -
                Date.parse(secondAd[state.sortFilter?.type])
            )
          : state.sortFilter?.type === "likes"
          ? dummy?.sort(
              (firstAd, secondAd) =>
                firstAd["pageInfo"]["platforms"][0][state.sortFilter?.type] -
                secondAd["pageInfo"]["platforms"][0][state.sortFilter?.type]
            )
          : state.sortFilter?.type ===
            ("Ad count increase" || "Ad count decrease")
          ? dummy?.sort(
              (firstAd, secondAd) =>
                firstAd["noOfCopyAds"] - secondAd["noOfCopyAds"]
            )
          : state.sortFilter?.type === "lastUpdatedTime"
          ? dummy?.sort(
              (firstAd, secondAd) =>
                secondAd["lastUpdatedTime"] - firstAd["lastUpdatedTime"]
            )
          : dummy?.sort(
              (firstAd, secondAd) =>
                firstAd[state.sortFilter?.type] -
                secondAd[state.sortFilter?.type]
            )
        : state.sortFilter?.type === "startDate"
        ? dummy?.sort(
            (firstAd, secondAd) =>
              Date.parse(secondAd[state.sortFilter?.type]) -
              Date.parse(firstAd[state.sortFilter?.type])
          )
        : state.sortFilter?.type === "likes"
        ? dummy?.sort(
            (firstAd, secondAd) =>
              secondAd["pageInfo"]["platforms"][0][state.sortFilter?.type] -
              firstAd["pageInfo"]["platforms"][0][state.sortFilter?.type]
          )
        : state.sortFilter?.type ===
          ("Ad count increase" || "Ad count decrease")
        ? dummy?.sort(
            (firstAd, secondAd) =>
              secondAd["noOfCopyAds"] - firstAd["noOfCopyAds"]
          )
        : state.sortFilter?.type === "lastUpdatedTime"
        ? dummy?.sort(
            (firstAd, secondAd) =>
              firstAd["lastUpdatedTime"]- secondAd["lastUpdatedTime"] 
          )
        : dummy?.sort(
            (firstAd, secondAd) =>
              secondAd[state.sortFilter?.type] - firstAd[state.sortFilter?.type]
          );
      console.log(dummy);
      console.log("..............................................");

      return {
        ...state,
        // : {
        // ...state,
        filteredData: dummy,
        // },
        //
        // appliedFilters: state.appliedFilters,
        // sortFilter: state.sortFilter,
      };
    case STATUS_START:
      return {
        ...state,
        // : {
        //   ...state,
        //
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: {
            status: action.payload.status,
            Message: action.payload.Message,
          },
        },
        // filteredData: state.filteredData,
        // },
      };
    // case FACEBOOKLIKES_START:
    //   return {
    //     ...state,
    //
    //     appliedFilters: {
    //       ...state.appliedFilters,
    //       [`${action.payload.name}`]: {
    //         status: action.payload.status,
    //         Message: action.payload.Message,
    //       },
    //     },
    //     filteredData: [...state.filteredData],
    //   };
    case EMPTY_SEARCH_SUCCESS:
      return {
        ...state,
        searchBarData: "",
        seactBarFilterData: [],
        filteredData: state.allData,
      };
    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };
    case SEARCH_START:
      return {
        ...state,
        search_loading: true,
        searchBarData: action.payload.data,
        // appliedFilters: state.appliedFilters,
        // searchBarData: action.payload,
        // filteredData: [
        //   ...state.allData.filter((ads) => {
        //     console.log(action.payload)
        //     const dummyData = JSON.stringify(Object.values(ads)).toLowerCase();
        //     console.log(dummyData)
        //     const darr = action.payload.split(" ").join(",").toLowerCase();
        //     // console.log(darr);
        //     console.log("|^ darr;;;;;" + dummyData.includes(...darr));
        //     // console.log(ads);
        //     console.log("000000000000000000000000000000000000")
        //     return dummyData.includes(...darr);
        //   }),
        // ],
      };
    //   case SEARCH_SUCCESS:
    //     var temp_arr = state.filteredData;
    //     temp_arr.filter((fil) => {
    //   let dum = 0;
    //   for (dum; state.searchBarData.length < dum; dum++) {
    //     console.log(state.searchBarData[dum]);
    //     if (Object.values(fil).toString().includes(state.searchBarData[dum])) {
    //       console.log(state.searchBarData[dum]);
    //       // console.log(Object.values(filteredData[0]).toString())
    //       console.log("0000000000");
    //       console.log(fil);
    //       // console.log("yesssssssssssss")
    //     } else {
    //       console.log("break........................................");
    //       return null;
    //       // return false;
    //     }
    //   }
    //   // if(words.length === dum+1){
    //   return true;
    //   // }else return false;
    // });
    // console.log(temp_arr);
    // console.log("{{{{{{{{{{{{{{{{{{{{{{first}}}}}}}}}}}}}}}}}}}}}}");
    //     return {
    //       ...state,
    //
    //       appliedFilters: state.appliedFilters,
    //       // searchBarData: state.searchBarData,
    //       filteredData:temp_arr,
    //     };
    case SEARCH_SUCCESS:
      return {
        ...state,
        search_loading: false,
        appliedFilters: state.appliedFilters,
        seactBarFilterData: action.payload,
        filteredData:
          // state.searchBarData !==""
          // ?
          action.payload
            ? action.payload.filter(
                (ads) =>
                  (state.appliedFilters?.AdCount?.min !== 0 ||
                  state.appliedFilters?.AdCount?.max !== 1000
                    ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
                      ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
                    : true) &&
                  (state.appliedFilters?.MediaType?.selectedData === "" ||
                  state.appliedFilters?.MediaType?.selectedData ===
                    "Video or Photo"
                    ? true
                    : ads.adMediaType ===
                      state.appliedFilters?.MediaType?.selectedData) &&
                  (state.appliedFilters?.AdStatus?.status !== ""
                    ? ads?.status === state.appliedFilters?.AdStatus?.status
                    : true) &&
                  (state.appliedFilters?.StartRunningDate?.startdate &&
                  state.appliedFilters?.StartRunningDate?.enddate
                    ? state.appliedFilters?.StartRunningDate?.startdate <=
                        ads?.startDate &&
                      state.appliedFilters?.StartRunningDate?.enddate >=
                        ads?.startDate
                    : true) &&
                  (state.appliedFilters?.FacebookLikes?.min !== 0 ||
                  state.appliedFilters?.FacebookLikes?.max !== 1000
                    ? state.appliedFilters?.FacebookLikes?.max === 0
                      ? ads?.pageInfo?.platforms[0]?.likes >=
                        state.appliedFilters?.FacebookLikes?.min
                      : ads?.pageInfo?.platforms[0]?.likes >=
                          state.appliedFilters?.FacebookLikes?.min &&
                        ads?.pageInfo?.platforms[0]?.likes <=
                          state.appliedFilters?.FacebookLikes?.max
                    : true)
              )
            : null,
        // : state.filteredData,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        search_loading: false,
        error: action.payload,
      };
    case ALL_FILTER_AFTER_SEARCH_SUCCESS:
      return {
        ...state,
        // : {
        //   ...state,

        filteredData: [
          ...state.seactBarFilterData.filter((ads) => {
            // console.log(ads?.pageInfo?.platforms[0]?.likes);
            // console.log(ads?.pageInfo?.platforms[1]?.followers);
            // console.log("#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            return (
              (state.appliedFilters?.AdCount?.min !== 1 ||
              state.appliedFilters?.AdCount?.max !== 1000
                ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
                  ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
                : true) &&
              (state.appliedFilters?.FacebookLikes?.min !== 1 ||
              state.appliedFilters?.FacebookLikes?.max !== 100000
                ? ads?.pageInfo?.platforms[0]?.likes >=
                    state.appliedFilters?.FacebookLikes?.min &&
                  ads?.pageInfo?.platforms[0]?.likes <=
                    state.appliedFilters?.FacebookLikes?.max
                : true) &&
              (state.appliedFilters?.InstragramLike?.min !== 1 ||
              state.appliedFilters?.InstragramLike?.max !== 10000
                ? ads?.pageInfo?.platforms[1]?.followers >=
                    state.appliedFilters?.InstragramLike?.min &&
                  ads?.pageInfo?.platforms[1]?.followers <=
                    state.appliedFilters?.InstragramLike?.max
                : true) &&
              (state.appliedFilters?.MediaType?.selectedData === "" ||
              state.appliedFilters?.MediaType?.selectedData === "Video or Photo"
                ? true
                : ads.adMediaType ===
                  state.appliedFilters?.MediaType?.selectedData) &&
              (state.appliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.appliedFilters?.AdStatus?.status
                : true) &&
              (state.appliedFilters?.PurchaseType?.selctedButton === "" ||
              state.appliedFilters?.PurchaseType?.selctedButton === "Shop Now"
                ? true
                : ads.ctaStatus.toLowerCase ===
                  state.appliedFilters?.PurchaseType?.selctedButton
                    .toLowerCase) &&
              (state.appliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.appliedFilters?.AdStatus?.status
                : true) &&
              (state.appliedFilters?.StartRunningDate?.startdate &&
              state.appliedFilters?.StartRunningDate?.enddate
                ? state.appliedFilters?.StartRunningDate?.startdate <=
                    ads?.startDate &&
                  state.appliedFilters?.StartRunningDate?.enddate >=
                    ads?.startDate
                : true) &&
              (state.appliedFilters?.FacebookLikes?.min !== 1 ||
              state.appliedFilters?.FacebookLikes?.max !== 1000
                ? state.appliedFilters?.FacebookLikes?.max === 0
                  ? ads?.pageInfo?.platforms[0]?.likes >=
                    state.appliedFilters?.FacebookLikes?.min
                  : ads?.pageInfo?.platforms[0]?.likes >=
                      state.appliedFilters?.FacebookLikes?.min &&
                    ads?.pageInfo?.platforms[0]?.likes <=
                      state.appliedFilters?.FacebookLikes?.max
                : true) &&
                (state.sortFilter?.type === "AdCountIncrease"
                ? Object.values(ads.history)[Object.keys(ads.history).length -1]['noOfCopyAds'] >
                  Object.values(ads.history)[
                    Object.keys(ads.history).length - 2
                  ]['noOfCopyAds']
                : true) &&
              (state.sortFilter?.type === "AdCountDecrease"
                ? Object.values(ads.history)[Object.keys(ads.history).length -1]['noOfCopyAds'] <
                  Object.values(ads.history)[
                    Object.keys(ads.history).length - 2
                  ]['noOfCopyAds']
                : true)
            );
          }),
        ],
        appliedFilters: state.appliedFilters,
        // },
      };
    case APPLY_ALL_FILTER://--done      
      return {
        ...state,
        filteredData: [
          ...state.allData.filter((ads) => {
            console.log( Object.keys(ads.history).length -1)
            console.log(Object.values(ads.history)[Object.keys(ads.history).length -1]['noOfCopyAds'])           
            return (
              (state.appliedFilters?.AdCount?.min !== 1 ||
              state.appliedFilters?.AdCount?.max !== 1000
                ? ads.noOfCopyAds >= state.appliedFilters?.AdCount?.min &&
                  ads.noOfCopyAds <= state.appliedFilters?.AdCount?.max
                : true) &&
              (state.appliedFilters?.PurchaseType?.selctedButton !== ""
                ? ads.ctaStatus ===
                  state.appliedFilters?.PurchaseType?.selctedButton
                : true) &&
              (state.appliedFilters?.FacebookLikes?.min !== 1 ||
              state.appliedFilters?.FacebookLikes?.max !== 100000
                ? ads?.pageInfo?.platforms[0]?.likes >=
                    state.appliedFilters?.FacebookLikes?.min &&
                  ads?.pageInfo?.platforms[0]?.likes <=
                    state.appliedFilters?.FacebookLikes?.max
                : true) &&
              (state.appliedFilters?.InstragramLike?.min !== 1 ||
              state.appliedFilters?.InstragramLike?.max !== 10000
                ? ads?.pageInfo?.platforms[1]?.followers >=
                    state.appliedFilters?.InstragramLike?.min &&
                  ads?.pageInfo?.platforms[1]?.followers <=
                    state.appliedFilters?.InstragramLike?.max
                : true) &&
              (state.appliedFilters?.MediaType?.selectedData === "" ||
              state.appliedFilters?.MediaType?.selectedData === "Video or Photo"
                ? true
                : ads.adMediaType ===
                  state.appliedFilters?.MediaType?.selectedData) &&
              (state.appliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.appliedFilters?.AdStatus?.status
                : true) &&
              (state.appliedFilters?.PurchaseType?.selctedButton === "" ||
              state.appliedFilters?.PurchaseType?.selctedButton === "Shop Now"
                ? true
                : ads.ctaStatus.toLowerCase ===
                  state.appliedFilters?.PurchaseType?.selctedButton
                    .toLowerCase) &&
              (state.appliedFilters?.AdStatus?.status !== ""
                ? ads?.status === state.appliedFilters?.AdStatus?.status
                : true) &&
              (state.appliedFilters?.StartRunningDate?.startdate &&
              state.appliedFilters?.StartRunningDate?.enddate
                ? state.appliedFilters?.StartRunningDate?.startdate <=
                    ads?.startDate &&
                  state.appliedFilters?.StartRunningDate?.enddate >=
                    ads?.startDate
                : true) &&
              (state.sortFilter?.type === "AdCountIncrease"
                ? Object.values(ads.history)[Object.keys(ads.history).length -1]['noOfCopyAds'] >
                  Object.values(ads.history)[
                    Object.keys(ads.history).length - 2
                  ]['noOfCopyAds']
                : true) &&
              (state.sortFilter?.type === "AdCountDecrease"
                ? Object.values(ads.history)[Object.keys(ads.history).length -1]['noOfCopyAds'] <
                  Object.values(ads.history)[
                    Object.keys(ads.history).length - 2
                  ]['noOfCopyAds']
                : true)
            );
          }),
        ],     
      };

    case APPLIED_FILTERS:
      return {
        ...state,

        filteredData: [...state.filteredData],
        appliedFilters: {
          ...state.filteredData,
          [`${action.payload.name}`]: `${action.payload.data}`,
        },
      };
    case CLEAR_FILTERDATA:
      return {
        ...state,

        filteredData: [...state.allData],
        appliedFilters: action.payload,
      };
    case CLEAR_SINGLE_FILTER:
      return {
        ...state,
        // : {
        //   ...state,
        //
        // filteredData: state.filteredData,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.name}`]: action.payload.data,
        },
        // },
      };
    case ALL_STATUS_START:
      return { ...state };
    case ALL_STATUS_SUCCESS:
      return {
        ...state,
        ctaStatus: action.payload,
      };
    case ALL_STATUS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default FilterDataReducer;