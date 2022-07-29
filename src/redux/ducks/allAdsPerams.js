export const CHANGE_APPLIEDFILTERS = "CHANGE_APPLIEDFILTERS";
export const CHANGE_MAXRANGER = "CHANGE_MAXRANGER";
export const CHANGE_SORTFILTERS = "CHANGE_SORTFILTERS";
export const CHANGE_SEARCHTYPE = "CHANGE_SEARCHTYPE";
export const CHANGE_SEARCHBARDATA = "CHANGE_SEARCHBARDATA";
export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER";
export const REFIX_MIN_MAX_RANGE_IN_SLIDER = "REFIX_MIN_MAX_RANGE_IN_SLIDER";
export const CLEAR_FILTERDATA = "CLEAR_FILTERDATA";
export const SET_ADLIBRARY_DATABASE_PAGE_INDEX =
  "SET_ADLIBRARY_DATABASE_PAGE_INDEX";

export const setDatabasePageIndex = (pageIndex) => ({
  type: SET_ADLIBRARY_DATABASE_PAGE_INDEX,
  payload: pageIndex,
});

export const changeAppliedFilters = (filter) => ({
  type: CHANGE_APPLIEDFILTERS,
  payload: filter,
});

export const changeMaxRanger = (filter) => ({
  type: CHANGE_MAXRANGER,
  payload: filter,
});

export const changeSortFilters = (filter) => ({
  type: CHANGE_SORTFILTERS,
  payload: filter,
});

export const changeSearchType = (filter) => ({
  type: CHANGE_SEARCHTYPE,
  payload: filter,
});

export const changeSearchBarData = (filter) => ({
  type: CHANGE_SEARCHBARDATA,
  payload: filter,
});

export const clearSingleFilter = (filter) => ({
  type: CLEAR_SINGLE_FILTER,
  payload: filter,
});

export const refixMinMaxRange = (filter) => ({
  type: REFIX_MIN_MAX_RANGE_IN_SLIDER,
  payload: filter,
});

export const clearFilterData = () => ({
  type: CLEAR_FILTERDATA,
});

const initialState = {
  pageIndex: 0,
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
    type: { selectedValue: "" },
    order: { selectedValue: "" },
  },
  searchType: "All these words",
  searchBarData: "",
};

const allAdsPeramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APPLIEDFILTERS:
      return {
        ...state,
        pageIndex: 0,
        appliedFilters: {
          ...state.appliedFilters,
          [`${action.payload.key}`]: {
            ...action.payload.value,
          },
        },
      };

    case CLEAR_SINGLE_FILTER:
      switch (action.payload.key) {
        case "AdStatus":
        case "MediaType":
        case "ButtonStatus":
          return {
            ...state,
            pageIndex: 0,
            appliedFilters: {
              ...state.appliedFilters,
              [`${action.payload.key}`]: {
                selectedValue: "",
                chipText: "",
                isApplied: false,
              },
            },
          };
        case "StartRunningDate":
          return {
            ...state,
            pageIndex: 0,
            appliedFilters: {
              ...state.appliedFilters,
              [`${action.payload.key}`]: {
                StartRunningDate: {
                  startdate: "",
                  enddate: "",
                  chipText: "",
                  isApplied: false,
                },
            }
          }
        }
        case "FacebookLikes":
        case "InstagramFollowers":
          return {
            ...state,
            pageIndex: 0,
            appliedFilters: {
              ...state.appliedFilters,
              [`${action.payload.key}`]: { min: 1, max: 100000, chipText: "", isApplied: false },
            },
          };
        case "AdCount":
          return {
            ...state,
            pageIndex: 0,
            appliedFilters: {
              ...state.appliedFilters,
              [`${action.payload.key}`]: { min: 1, max: 1000, chipText: "", isApplied: false },
            },
          };
        default:
          return state;
      }

    case REFIX_MIN_MAX_RANGE_IN_SLIDER:
      return {
        ...state,
        pageIndex: 0,
        maxRanger: {
          ...state.maxRanger,
          [`${action.payload.key}`]: {
            ...state.appliedFilters[action.payload.key],
            max: action.payload.value.max,
          },
        },
      };

    case CLEAR_FILTERDATA:
      console.log("CLEAR_FILTERDATA");
      return {
        ...state,
        pageIndex: 0,
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

    case CHANGE_SORTFILTERS:
      return {
        ...state,
        pageIndex: 0,
        sortFilter: {
          ...state.sortFilter,
          [`${action.payload.key}`]: action.payload.value,
        },
      };

    case CHANGE_SEARCHTYPE:
    case CHANGE_SEARCHBARDATA:
      return {
        ...state,
        pageIndex: 0,
        [`${action.payload.key}`]: `${action.payload.value}`,
      };

    case SET_ADLIBRARY_DATABASE_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };

    default:
      return state;
  }
};

export default allAdsPeramsReducer;
