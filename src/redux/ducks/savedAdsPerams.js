export const SAVED_CHANGE_APPLIEDFILTERS = "SAVED_CHANGE_APPLIEDFILTERS";
export const SAVED_CHANGE_MAXRANGER = "SAVED_CHANGE_MAXRANGER";
export const SAVED_CHANGE_SORTFILTERS = "SAVED_CHANGE_SORTFILTERS";
export const SAVED_CHANGE_SEARCHTYPE = "SAVED_CHANGE_SEARCHTYPE";
export const SAVED_CHANGE_SEARCHBARDATA = "SAVED_CHANGE_SEARCHBARDATA";
export const SAVED_CLEAR_SINGLE_FILTER = "SAVED_CLEAR_SINGLE_FILTER";
export const SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER = "SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER";
export const SAVED_CLEAR_FILTERDATA = "SAVED_CLEAR_FILTERDATA";

export const changeSavedAppliedFilters = (filter) => ({
    type: SAVED_CHANGE_APPLIEDFILTERS,
    payload: filter,
});

export const changeSavedMaxRanger = (filter) => ({
    type: SAVED_CHANGE_MAXRANGER,
    payload: filter,
});

export const changeSavedSortFilters = (filter) => ({
    type: SAVED_CHANGE_SORTFILTERS,
    payload: filter,
});

export const changeSavedSearchType = (filter) => ({
    type: SAVED_CHANGE_SEARCHTYPE,
    payload: filter,
});

export const changeSavedSearchBarData = (filter) => ({
    type: SAVED_CHANGE_SEARCHBARDATA,
    payload: filter,
});

export const changeSavedSingleFilter = (filter) => ({
    type: SAVED_CLEAR_SINGLE_FILTER,
    payload: filter,
});

export const refixSavedMinMaxRange = (filter) => ({
    type: SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER,
    payload: filter,
});

export const clearSavedFilterData = () => ({
    type: SAVED_CLEAR_FILTERDATA,
});

const initialState = {
  appliedFilters: {
    StartRunningDate: {
      startdate: "",
      enddate: "",
      chipText: "",
      isApplied: false,
    },
    AdStatus: { selectedValue: "", chipText: "", isApplied: false },
    AdCount: { min: 1, max: 1000, chipText: "", isApplied: false },
    FacebookLikes: { min: 1, max: 100000, chipText: "", isApplied: false },
    InstagramFollowers: { min: 1, max: 10000, chipText: "", isApplied: false },
    MediaType: { selectedValue: "", chipText: "", isApplied: false },
    ButtonStatus: { selectedValue: "", chipText: "", isApplied: false },
  },
  maxRanger: {
    AdCount: { min: 1, max: 1000 },
    FacebookLikes: { min: 1, max: 100000 },
    InstagramFollowers: { min: 1, max: 10000 },
  },
  sortFilter: {
    type: { selectedValue: ""},
    order: { selectedValue: ""},
  },
  searchType: "All these words",
  searchBarData: "",
};

const savedAdsPeramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_CHANGE_APPLIEDFILTERS:
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.key}`]: {
            ...action.payload.value,
          },
        },
      };

    case SAVED_CLEAR_SINGLE_FILTER:
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.key}`]: {
            ...state.appliedFilters[action.payload.key],
            isApplied: false,
          },
        },
      };
      
    case SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER:
      return {
        ...state,
        maxRanger: {
          ...state.maxRanger,
          [`${action.payload.key}`]: {
            ...state.appliedFilters[action.payload.key],
            max: action.payload.value.max,
          },
        },
      };
    case SAVED_CLEAR_FILTERDATA:
      console.log("CLEAR_FILTERDATA");
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          StartRunningDate: {
            startdate: "",
            enddate: "",
            chipText: "",
            isApplied: false,
          },
          AdStatus: { selectedValue: "", chipText: "", isApplied: false },
          AdCount: { min: 1, max: 1000, chipText: "", isApplied: false },
          FacebookLikes: {
            min: 1,
            max: 100000,
            chipText: "",
            isApplied: false,
          },
          InstagramFollowers: {
            min: 1,
            max: 10000,
            chipText: "",
            isApplied: false,
          },
          MediaType: { selectedValue: "", chipText: "", isApplied: false },
          ButtonStatus: { selectedValue: "", chipText: "", isApplied: false },
        },
        maxRanger: {
          ...state.maxRanger,
          AdCount: { min: 1, max: 1000 },
          FacebookLikes: { min: 1, max: 100000 },
          InstagramFollowers: { min: 1, max: 10000 },
        },
      };
    case SAVED_CHANGE_SORTFILTERS:
      return {
        ...state,
        sortFilter: {
          ...state.sortFilter,
          [`${action.payload.key}`]: action.payload.value,
        },
      };
    case SAVED_CHANGE_SEARCHTYPE:
      case SAVED_CHANGE_SEARCHBARDATA:
      return {
        ...state,
        [`${action.payload.key}`]: `${action.payload.value}`,
      };
    default:
      return state;
  }
};

export default savedAdsPeramsReducer;
