export const LOAD_MEDIA_START = "LOAD_MEDIA_START";
export const LOAD_MEDIA_SUCCESS = "LOAD_MEDIA_SUCCESS";
export const LOAD_MEDIA_ERROR = "LOAD_MEDIA_ERROR";

export const UPDATE_MEDIA_START = "UPDATE_MEDIA_START";
export const UPDATE_MEDIA_SUCCESS = "UPDATE_MEDIA_SUCCESS";
export const UPDATE_MEDIA_ERROR = "UPDATE_MEDIA_ERROR";

export const SET_POSTION_SCROLL = "SET_POSTION_SCROLL";

// ?---------------filters
// export const DATEFILTER = "DATEFILTER";
// export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";
// export const NOODADS_START = "NOODADS_START";
// export const STATUS_START = "STATUS_START";
// export const REFIX_MIN_MAX_RANGE_IN_SLIDER = "REFIX_MIN_MAX_RANGE_IN_SLIDER";
// export const BUTTONTYPETYPE_START = "BUTTONTYPETYPE_START";
// export const MEDIATYPE_START = "MEDIATYPE_START";

// export const ALL_STATUS_START = "ALL_STATUS_START";
// export const ALL_STATUS_SUCCESS = "ALL_STATUS_SUCCESS";
// export const ALL_STATUS_ERROR = "ALL_STATUS_ERROR";

// export const CLEAR_FILTERDATA = "CLEAR_FILTERDATA";
// export const SET_SORT_FILTER_START = "SET_SORT_FILTER_START";
// export const CHANGE_SEARCH_TYPE = "CHANGE_SEARCH_TYPE";
// export const SEARCH_START = "SEARCH_START";

// export const SAVED_CHANGE_SEARCH_TYPE = "SAVED_CHANGE_SEARCH_TYPE";
// export const SEARCH_PHRASE_START = "SEARCH_PHRASE_START";

export const loadMediaStart = (allMediaAds) => ({
  type: LOAD_MEDIA_START,
  payload: allMediaAds,
});

export const loadMediaSuccess = (allMediaAds) => ({
  type: LOAD_MEDIA_SUCCESS,
  payload: allMediaAds,
});

export const loadMediaError = (error) => ({
  type: LOAD_MEDIA_ERROR,
  payload: error,
});

export const updateMediaStart = (updatead) => ({
  type: UPDATE_MEDIA_START,
  payload: updatead,
});

export const updateMediaSuccess = (updatead) => ({
  type: UPDATE_MEDIA_SUCCESS,
  payload: updatead,
});

export const updateMediaError = (error) => ({
  type: UPDATE_MEDIA_ERROR,
  payload: error,
});

export const srtPostionForScrollValueStart = (filter) => ({
  type: SET_POSTION_SCROLL,
  payload: filter,
});

// -----------------filters
// export const datevalueStart = (filter) => ({
//   type: DATEFILTER,
//   payload: filter,
// });
// export const clearSingleFilteredDataStart = (ads) => ({
//   type: CLEAR_SINGLE_FILTER,
//   payload: ads,
// });
// export const AdCountvalueStart = (filter) => ({
//   type: NOODADS_START,
//   payload: filter,
// });

// export const statusValueStart = (filter) => ({
//   type: STATUS_START,
//   payload: filter,
// });
// export const rangerefixMinMaxSiler = (data) => ({
//   type: REFIX_MIN_MAX_RANGE_IN_SLIDER,
//   payload: data,
// });
// export const ButtonTypevalueStart = (filter) => ({
//   type: BUTTONTYPETYPE_START,
//   payload: filter,
// });
// export const MediaTypevalueStart = (filter) => ({
//   type: MEDIATYPE_START,
//   payload: filter,
// });

// export const getSetCatSatus = () => ({
//   type: ALL_STATUS_START,
// });
// export const setCatSatusSuccess = (Ads) => ({
//   type: ALL_STATUS_SUCCESS,
//   payload: Ads,
// });

// export const setCatSatusError = (error) => ({
//   type: ALL_STATUS_ERROR,
//   payload: error,
// });

// export const clearFilteredDataStart = (ads) => ({
//   type: CLEAR_FILTERDATA,
//   payload: ads,
// });

// export const SetSortOrdervalueStart = (filter) => ({
//   type: SET_SORT_FILTER_START,
//   payload: filter,
// });
// export const chnageSearchType = (data) => ({
//   type: CHANGE_SEARCH_TYPE,
//   payload: data,
// });
// export const searchStart = (Ads) => ({
//   type: SEARCH_START,
//   payload: Ads,
// });
// export const savedShnageSearchType = (data) => ({
//   type: SAVED_CHANGE_SEARCH_TYPE,
//   payload: data,
// });
// export const searchPhraseStart = (Ads) => ({
//   type: SEARCH_PHRASE_START,
//   payload: Ads,
// });

const initialState = {
  allAds: [],
  allMediaAds: [],
  allMediaAdsData: [],
  endOfData: false,
  savedIds: [],
  page_index: 0,
  loading: false,
  error: "",
  postionYoffset: 0,
  // searchBarData: "",
  // searchType: "All these words",
  // seactBarFilterData: [],
  // search_loading: false,
  // ctaStatus: [],
  // error: "",
};
const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEDIA_START:      
      return {
        ...state,        
        loading: true,
        page_index: action.payload.page_index,
        // allMediaAds:state.allMediaAdsData,
        // allMediaAdsData:
        //   action.payload.page_index === 0 ? [] : state.allMediaAdsData,
        
      };

    case UPDATE_MEDIA_START:
      return {
        ...state,
        loading: false,
      };
    case LOAD_MEDIA_SUCCESS:
     
      return {
        ...state,
        loading: false,
        allMediaAdsData:
          action.payload.error === false
            ? state.page_index===0?action.payload.data[1]?.all_ads: state.allMediaAdsData.concat(action.payload.data[1]?.all_ads)
            : state.allMediaAdsData,
        savedIds:
          action.payload.error === false
            ? state.savedIds.concat(action.payload.saved_ads)
            : state.savedIds,
      };
    case UPDATE_MEDIA_SUCCESS:
      const index = state.allMediaAds.findIndex(
        (ads) => ads.adID === action.payload.adID
      );

      const newArray = [...state.allMediaAds];

      newArray[index] = action.payload;

      return {
        ...state,
        loading: false,
        allMediaAds: newArray,
      };
    case LOAD_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        page_index: state.page_index - 1,
      };
    case UPDATE_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case SET_POSTION_SCROLL:
        return {
          ...state,
  
          filteredData: state.filteredData,
          appliedFilters: state.appliedFilters,
          postionYoffset: action.payload,
        };
    default:
      return state;
  }
};

export default mediaReducer;

// export const LOAD_MEDIA_START = "LOAD_MEDIA_START";
// export const LOAD_MEDIA_SUCCESS = "LOAD_MEDIA_SUCCESS";
// export const LOAD_MEDIA_ERROR = "LOAD_MEDIA_ERROR";

// export const UPDATE_MEDIA_START = "UPDATE_MEDIA_START";
// export const UPDATE_MEDIA_SUCCESS = "UPDATE_MEDIA_SUCCESS";
// export const UPDATE_MEDIA_ERROR = "UPDATE_MEDIA_ERROR";

// export const loadMediaStart = (allMediaAds) => ({
//   type: LOAD_MEDIA_START,
//   payload:allMediaAds,
// });

// export const loadMediaSuccess = (allMediaAds) => ({
//   type: LOAD_MEDIA_SUCCESS,
//   payload: allMediaAds,
// });

// export const loadMediaError = (error) => ({
//   type: LOAD_MEDIA_ERROR,
//   payload: error,
// });

// export const updateMediaStart = (updatead) => ({
//   type: UPDATE_MEDIA_START,
//   payload: updatead,
// });

// export const updateMediaSuccess = (updatead) => ({
//   type: UPDATE_MEDIA_SUCCESS,
//   payload: updatead,
// });

// export const updateMediaError = (error) => ({
//   type: UPDATE_MEDIA_ERROR,
//   payload: error,
// });

// const initialState = {
//   allMediaAds: [],
//   // savedIds:[],
//   page_index:0,
//   loading: false,
//   error: "",
// };
// const mediaReducer = (state = initialState, action) => {
// console.log("555555555555555",action.payload)

//   // console.log(action?.payload?.adID);
//   // console.log(allMediaAds[0].adID);
//   // console.log("88888888888888888888888888888888888888888");
//   switch (action.type) {
//     case LOAD_MEDIA_START:
//       console.log("11111--------",action.payload.initialState)
//       return {
//         ...state,
//         // initialState:action.payload,
//         loading: true,
//         // page_index:action.payload.page_index+1,
//         // initialState: [...state.action.payload, ...action.allMediaAds],
//       };

//     case UPDATE_MEDIA_START:
//       return {
//         ...state,
//         loading: true,
//       };
//     case LOAD_MEDIA_SUCCESS:
//         // const updateData = [...state.allMediaAds,action.payload]
//       console.log(":::::",action.payload)
//       return {
//         ...state,
//         loading: false,
//         allMediaAds: action.payload,
//       };
//     case UPDATE_MEDIA_SUCCESS:
//       const index = state.allMediaAds.findIndex(
//         (ads) => ads.adID === action.payload.adID
//       );

//       const newArray = [...state.allMediaAds];

//       newArray[index] = action.payload;

//       return {
//         ...state,
//         loading: false,
//         allMediaAds: newArray,
//       };
//     case LOAD_MEDIA_ERROR:
//     case UPDATE_MEDIA_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,

//       };
//     default:
//       return state;
//   }
// };

// export default mediaReducer;
