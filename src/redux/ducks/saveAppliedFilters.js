export const SAVED_DATEFILTER = "SAVED_DATEFILTER";
export const SAVED_CLEAR_SINGLE_FILTER = "SAVED_CLEAR_SINGLE_FILTER";
export const SAVED_NOODADS_START = "SAVED_SAVED_NOODADS_START";
export const SAVED_STATUS_START = "SAVED_STATUS_START";
export const SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER = "SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER";
export const SAVED_BUTTONTYPETYPE_START = "SAVED_BUTTONTYPETYPE_START";
export const SAVED_MEDIATYPE_START = "SAVED_MEDIATYPE_START";

export const SAVED_ALL_STATUS_START = "SAVED_ALL_STATUS_START";
export const SAVED_ALL_STATUS_SUCCESS = "SAVED_ALL_STATUS_SUCCESS";
export const SAVED_ALL_STATUS_ERROR = "SAVED_ALL_STATUS_ERROR";

export const SAVED_CLEAR_FILTERDATA = "SAVED_CLEAR_FILTERDATA";
export const SAVED_SET_SORT_FILTER_START = "SAVED_SET_SORT_FILTER_START";
export const SAVED_CHANGE_SEARCH_TYPE = "SAVED_CHANGE_SEARCH_TYPE";
export const SAVED_SEARCH_START = "SEARCH_START";

// export const SAVED_CHANGE_SEARCH_TYPE = "SAVED_SAVED_CHANGE_SEARCH_TYPE";
export const SAVED_SEARCH_PHRASE_START = "SAVED_SAVED_SEARCH_PHRASE_START";

export const saveddatevalueStart = (filter) => ({
    type: SAVED_DATEFILTER,
    payload: filter,
  });
  export const savedclearSingleFilteredDataStart = (ads) => ({
    type: SAVED_CLEAR_SINGLE_FILTER,
    payload: ads,
  });
  export const savedAdCountvalueStart = (filter) => ({
    type: SAVED_NOODADS_START,
    payload: filter,
  });
  
  export const savedstatusValueStart = (filter) => ({
    type: SAVED_STATUS_START,
    payload: filter,
  });
  export const savedrangerefixMinMaxSiler = (data) => ({
    type: SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER,
    payload: data,
  });
  export const savedButtonTypevalueStart = (filter) => ({
    type: SAVED_BUTTONTYPETYPE_START,
    payload: filter,
  });
  export const savedMediaTypevalueStart = (filter) => ({
    type: SAVED_MEDIATYPE_START,
    payload: filter,
  });
  
  export const savedgetSetCatSatus = () => ({
    type: SAVED_ALL_STATUS_START,
  });
  export const savedsetCatSatusSuccess = (Ads) => ({
    type: SAVED_ALL_STATUS_SUCCESS,
    payload: Ads,
  });
  
  export const savedsetCatSatusError = (error) => ({
    type: SAVED_ALL_STATUS_ERROR,
    payload: error,
  });
  
  export const savedclearFilteredDataStart = (ads) => ({
    type: SAVED_CLEAR_FILTERDATA,
    payload: ads,
  });
  
  export const savedSetSortOrdervalueStart = (filter) => ({
    type: SAVED_SET_SORT_FILTER_START,
    payload: filter,
  });
  export const savedchnageSearchType = (data) => ({
    type: SAVED_CHANGE_SEARCH_TYPE,
    payload: data,
  });
//   -----------------------

  export const savedsearchStart = (Ads) => ({
    type: SAVED_SEARCH_START,
    payload: Ads,
  });
//   -----------------------
  export const savedsavedShnageSearchType = (data) => ({
    type: SAVED_CHANGE_SEARCH_TYPE,
    payload: data,
  });
  export const savedsearchPhraseStart = (Ads) => ({
    type: SAVED_SEARCH_PHRASE_START,
    payload: Ads,
  });

const initialState = {SavedAppliedFilters: {
    StartRunningDate: { startdate: "", enddate: "", Message: "" },
    AdStatus: { status: "", Message: "" },
    AdCount: { min: 1, max: 1000, Message: "" },
    FacebookLikes: { min: 1, max: 100000, Message: "" },
    InstragramLike: { min: 1, max: 10000, Message: "" },
    MediaType: { selectedData: "", Message: "" },
    PurchaseType: { selctedButton: "", Message: "" },
  },
  maxRanger: {
    AdCount: { min: 1, max: 1000 },
    FacebookLikes: { min: 1, max: 100000 },
    InstragramLike: { min: 1, max: 10000 },
  },

  sortFilter: {
    type: "",
    order: "",
  },
};


const saveFilterReducer = (state = initialState, action) => {
    switch (action.type) {  
      case SAVED_DATEFILTER:
        return {
          ...state,
          // : {
          //   ...state,
          //
          // filteredData: [
          //   ...state.filteredData,
          // ],
          SavedAppliedFilters: {
            ...state.SavedAppliedFilters,
            [`${action.payload.name}`]: {
              startdate: action.payload.startdate,
              enddate: action.payload.enddate,
              Message: action.payload.Message,
            },
          },
          // },
        };
      case SAVED_CLEAR_SINGLE_FILTER:
        return {
          ...state,
          SavedAppliedFilters: {
            ...state.SavedAppliedFilters,
            [`${action.payload.name}`]: action.payload.data,
          },
        };
      case SAVED_NOODADS_START:
        return {
          ...state,
          SavedAppliedFilters: {
            ...state.SavedAppliedFilters,
            [`${action.payload.name}`]: {
              min: action.payload.min,
              max: action.payload.max,
              Message: action.payload.Message,
            },
          },          
        };
      case SAVED_STATUS_START:
        return {
          ...state,
          // : {
          //   ...state,
          //
          SavedAppliedFilters: {
            ...state.SavedAppliedFilters,
            [`${action.payload.name}`]: {
              status: action.payload.status,
              Message: action.payload.Message,
            },
          },
          // filteredData: state.filteredData,
          // },
        };
      case SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER:
        return {
          ...state,
          maxRanger: {
            ...state.maxRanger,
            [`${action.payload.name}`]: {
              min: 1,
              max: action.payload.max,
            },
          },
        };
      case SAVED_BUTTONTYPETYPE_START:
        return {
          ...state,
          // : {
          //   ...state,
          SavedAppliedFilters: {
            ...state.SavedAppliedFilters,
            [`${action.payload.name}`]: {
              selctedButton: action.payload.selctedButton,
              Message: action.payload.Message,
            },
          },
          // },
        };
      case SAVED_MEDIATYPE_START:
        return {
          ...state,
          SavedAppliedFilters: {
            ...state.SavedAppliedFilters,
            [`${action.payload.name}`]: {
              selectedData: action.payload.selectedData,
              Message: action.payload.Message,
            },
          },
          // },
        };
      case SAVED_ALL_STATUS_START:
        return { ...state };
      case SAVED_ALL_STATUS_SUCCESS:
        return {
          ...state,
          ctaStatus: action.payload,
        };
      case SAVED_ALL_STATUS_ERROR:
        return { ...state, error: action.payload };
  
      case SAVED_CLEAR_FILTERDATA:
        // console.log(action.payload.name + action.payload.type)
        // console.log("---------------")
        return {
          ...state,
          // allMediaAdsData:state.allAds,
          SavedAppliedFilters: action.payload,
        };
      case SAVED_SET_SORT_FILTER_START:
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
          // SavedAppliedFilters: state.SavedAppliedFilters,
  
          // filteredData: [...state.filteredData],
        };
      case SAVED_CHANGE_SEARCH_TYPE:
        return {
          ...state,
          searchType: action.payload,
        };
      case SAVED_SEARCH_START:
        return {
          ...state,          
          searchBarData: action.payload.data,
        };
      
      case SAVED_SEARCH_PHRASE_START:
        return {
          ...state,
          // search_loading: true,
          searchBarData: action.payload.data,
        };
      default:
        return state;
    }
  };
  
  export default saveFilterReducer;
