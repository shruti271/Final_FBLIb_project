export const DATEFILTER = "DATEFILTER";
export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";
export const NOODADS_START = "NOODADS_START";
export const STATUS_START = "STATUS_START";
export const REFIX_MIN_MAX_RANGE_IN_SLIDER = "REFIX_MIN_MAX_RANGE_IN_SLIDER";
export const BUTTONTYPETYPE_START = "BUTTONTYPETYPE_START";
export const MEDIATYPE_START = "MEDIATYPE_START";

export const ALL_STATUS_START = "ALL_STATUS_START";
export const ALL_STATUS_SUCCESS = "ALL_STATUS_SUCCESS";
export const ALL_STATUS_ERROR = "ALL_STATUS_ERROR";

export const CLEAR_FILTERDATA = "CLEAR_FILTERDATA";
export const SET_SORT_FILTER_START = "SET_SORT_FILTER_START";
export const CHANGE_SEARCH_TYPE = "CHANGE_SEARCH_TYPE";
export const SEARCH_START = "SEARCH_START";

export const SAVED_CHANGE_SEARCH_TYPE = "SAVED_CHANGE_SEARCH_TYPE";
export const SEARCH_PHRASE_START = "SEARCH_PHRASE_START";

export const datevalueStart = (filter) => ({
    type: DATEFILTER,
    payload: filter,
  });
  export const clearSingleFilteredDataStart = (ads) => ({
    type: CLEAR_SINGLE_FILTER,
    payload: ads,
  });
  export const AdCountvalueStart = (filter) => ({
    type: NOODADS_START,
    payload: filter,
  });
  
  export const statusValueStart = (filter) => ({
    type: STATUS_START,
    payload: filter,
  });
  export const rangerefixMinMaxSiler = (data) => ({
    type: REFIX_MIN_MAX_RANGE_IN_SLIDER,
    payload: data,
  });
  export const ButtonTypevalueStart = (filter) => ({
    type: BUTTONTYPETYPE_START,
    payload: filter,
  });
  export const MediaTypevalueStart = (filter) => ({
    type: MEDIATYPE_START,
    payload: filter,
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
  
  export const clearFilteredDataStart = (ads) => ({
    type: CLEAR_FILTERDATA,
    payload: ads,
  });
  
  export const SetSortOrdervalueStart = (filter) => ({
    type: SET_SORT_FILTER_START,
    payload: filter,
  });
  export const chnageSearchType = (data) => ({
    type: CHANGE_SEARCH_TYPE,
    payload: data,
  });
//   -----------------------

  export const searchStart = (Ads) => ({
    type: SEARCH_START,
    payload: Ads,
  });
//   -----------------------
  export const savedShnageSearchType = (data) => ({
    type: SAVED_CHANGE_SEARCH_TYPE,
    payload: data,
  });
  export const searchPhraseStart = (Ads) => ({
    type: SEARCH_PHRASE_START,
    payload: Ads,
  });

const initialState = {appliedFilters: {
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


const filterReducer = (state = initialState, action) => {
    switch (action.type) {  
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
      case CLEAR_SINGLE_FILTER:
        return {
          ...state,
          appliedFilters: {
            ...state.appliedFilters,
            [`${action.payload.name}`]: action.payload.data,
          },
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
      case REFIX_MIN_MAX_RANGE_IN_SLIDER:
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
      case MEDIATYPE_START:
        return {
          ...state,
          appliedFilters: {
            ...state.appliedFilters,
            [`${action.payload.name}`]: {
              selectedData: action.payload.selectedData,
              Message: action.payload.Message,
            },
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
  
      case CLEAR_FILTERDATA:
        // console.log(action.payload.name + action.payload.type)
        // console.log("---------------")
        return {
          ...state,
          // allMediaAdsData:state.allAds,
          appliedFilters: action.payload,
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
      case CHANGE_SEARCH_TYPE:
        return {
          ...state,
          searchType: action.payload,
        };
      case SEARCH_START:
        return {
          ...state,
          // search_loading: true,
          searchBarData: action.payload.data,
        };
      case SAVED_CHANGE_SEARCH_TYPE:
        return {
          ...state,
          searchType: action.payload,
        };
      case SEARCH_PHRASE_START:
        return {
          ...state,
          // search_loading: true,
          searchBarData: action.payload.data,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
