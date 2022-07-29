export const SET_ADLIBRARY_DATABASE_PAGE_INDEX =
  "SET_ADLIBRARY_DATABASE_PAGE_INDEX";
export const SET_SAVED_ADS_PAGE_INDEX = "SET_SAVED_ADS_PAGE_INDEX";
export const SET_ALL_DOMAIN_PAGE_INDEX = "SET_ALL_DOMAIN_PAGE_INDEX";

export const setDatabasePageIndex = (pageIndex) => ({
  type: SET_ADLIBRARY_DATABASE_PAGE_INDEX,
  payload: pageIndex,
});

export const setSavedAdsPageIndex = (pageIndex) => ({
  type: SET_SAVED_ADS_PAGE_INDEX,
  payload: pageIndex,
});

export const setAllDomainPageIndex = (pageIndex) => ({
  type: SET_ALL_DOMAIN_PAGE_INDEX,
  payload: pageIndex,
});

const initialPageIndexSaverState = {
  databasePageIndex: 0,
  savedAdsPageIndex: 0,
  allDomainpageIndex: 0,
};

const pageIndexSaverReducer = (state = initialPageIndexSaverState, action) => {
  switch (action.type) {
    case SET_ADLIBRARY_DATABASE_PAGE_INDEX:
      return {
        ...state,
        databasePageIndex: action.payload,
      };
    case SET_SAVED_ADS_PAGE_INDEX:
      return {
        ...state,
        savedAdsPageIndex: action.payload,
      };
    case SET_ALL_DOMAIN_PAGE_INDEX:
      return {
        ...state,
        allDomainpageIndex: action.payload,
      };
    default:
      return state;
  }
};

export default pageIndexSaverReducer;
