export const LOAD_SAVED_FILTERED_ADS_START = "LOAD_SAVED_FILTERED_ADS_START"; 
export const LOAD_SAVED_FILTERED_ADS_SUCCESS =
  "LOAD_SAVED_FILTERED_ADS_SUCCESS"; 
export const LOAD_SAVED_FILTERED_ADS_ERROR = "LOAD_SAVED_FILTERED_ADS_ERROR"; 

export const ADD_TO_SAVED_ADS_START = "ADD_TO_SAVED_ADS_START"; 
export const ADD_TO_SAVED_ADS_ERROR = "ADD_TO_SAVED_ADS_ERROR"; 

export const ADD_TO_SAVED_FILTERED_AD_LOCAL_START =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_START"; 
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS"; 
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR"; 

export const REMOVED_FROM_SAVED_ADS_START = "REMOVED_FROM_SAVED_ADS_START"; 
export const REMOVED_FROM_SAVED_ADS_ERROR = "REMOVED_FROM_SAVED_ADS_ERROR"; 

export const SAVED_GET_PAGE_POSITION = "SAVED_GET_PAGE_POSITION"; 
export const SET_PAGINATION_SAVED_ADS = "SET_PAGINATION_SAVED_ADS"; 
export const LOAD_SAVED_ADS_IDS_LOCAL = "LOAD_SAVED_ADS_IDS_LOCAL"; 

export const loadsavedFilteredAdsStart = (request) => ({
  type: LOAD_SAVED_FILTERED_ADS_START,
  payload: request,
}); 

export const loadsavedFilteredAdsSuccess = (filteredSavedAds) => ({
  type: LOAD_SAVED_FILTERED_ADS_SUCCESS,
  payload: filteredSavedAds,
}); 

export const loadsavedFilteredAdsError = (error) => ({
  type: LOAD_SAVED_FILTERED_ADS_ERROR,
  payload: error,
}); 

export const addToSavedAdsFilterLocalStart = (adToBeAdded) => ({
  type: ADD_TO_SAVED_FILTERED_AD_LOCAL_START,
  payload: adToBeAdded,
}); 

export const addToSavedAdsFilterLocalSuccess = (adToBeAdded) => ({
  type: ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS,
  payload: adToBeAdded,
}); 

export const addToSavedAdsFilterLocalError = (error) => ({
  type: ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR,
  payload: error,
}); 

export const addToSavedAdsStart = (request) => ({
  type: ADD_TO_SAVED_ADS_START,
  payload: request,
}); 

export const addToSavedAdsError = (error) => ({
  type: ADD_TO_SAVED_ADS_ERROR,
  payload: error,
}); 

export const removeFromSavedAdsStart = (request) => ({
  type: REMOVED_FROM_SAVED_ADS_START,
  payload: request,
}); 

export const removeFromSavedAdsError = (error) => ({
  type: REMOVED_FROM_SAVED_ADS_ERROR,
  payload: error,
}); 

export const setPostionForSavedPageToScrollValueStart = (error) => ({
  type: SAVED_GET_PAGE_POSITION,
  payload: error,
}); 

export const setSavedCurrentPaginationAds = (page) => ({
  type: SET_PAGINATION_SAVED_ADS,
  payload: page,
}); 

export const loadSavedAdsIdsLocal = (savedAdsIds) => ({
  type: LOAD_SAVED_ADS_IDS_LOCAL,
  payload: savedAdsIds,
}); 

const initialState = {
  filteredSavedAds: [],
  savedAdsIds: [],
  SavedCurrentPage: [],
  SavedCurrentPageStartPoint: 0,
  SavedCurrentPageEndPoint: process.env.NO_OF_ADS_PER_PAGE,
  totalPages: 0,
  totalAds: 0,
  paginationIndex: 1,  
  postionOfPage: 0,
  loading: false,
  error: "",
};

const filteredSavedAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SAVED_FILTERED_ADS_START:
      return {
        ...state,
        filteredSavedAds: [],
        SavedCurrentPage: [],
        loading: true,
      }; 
    case LOAD_SAVED_FILTERED_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredSavedAds: action.payload?.data.all_ads,
        totalPages: Math.ceil(
          action.payload.data.total_ads /
            process.env.REACT_APP_NO_OF_ADS_PER_PAGE
        ),
        totalAds: action.payload.data.total_ads,
        SavedCurrentPage: action.payload.data.all_ads.slice(
          state.SavedCurrentPageStartPoint,
          state.SavedCurrentPageEndPoint
        ),
      }; 
    case LOAD_SAVED_FILTERED_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.data?.error,
      }; 

    case ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS:
      const filterdListToBeUpdated = [...state.filteredSavedAds];
      filterdListToBeUpdated.unshift(action.payload?.AdDetails);
      return {
        ...state,
        filteredSavedAds: action.payload?.valid
          ? filterdListToBeUpdated
          : state.filteredSavedAds,
        SavedCurrentPage: state.filteredSavedAds.slice(
          state.SavedCurrentPageStartPoint,
          state.SavedCurrentPageEndPoint
        ),
        paginationIndex: 1,
        totalAds: state.totalAds + 1,
      }; 
    case ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR:
      return {
        ...state.SavedCurrentPage,
        totalAds: state.totalAds - 1,
      }; 

    case ADD_TO_SAVED_ADS_START:
      return {
        ...state,
        savedAdsIds: state.savedAdsIds.concat(action.payload.ad),
      }; 
    case ADD_TO_SAVED_ADS_ERROR:
      return {
        ...state,
        savedAdsIds: state.savedAdsIds.filter(function (adId) {
          return adId !== action.payload?.errorId;
        }),
      }; 

    case REMOVED_FROM_SAVED_ADS_START:
      return {
        ...state,
        filteredSavedAds: state.filteredSavedAds.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
        SavedCurrentPage: state.SavedCurrentPage.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
        savedAdsIds: state.savedAdsIds.filter(function (adId) {
          return adId !== action.payload.id;
        }),
        paginationIndex:
          state.SavedCurrentPage.length === 1
            ? state.paginationIndex - 1
            : state.paginationIndex,
        totalAds: state.totalAds - 1,
      }; 
    case REMOVED_FROM_SAVED_ADS_ERROR:
      return {
        ...state,
        filteredSavedAds: state.filteredSavedAds.concat(
          action.payload.AdDetail
        ),
        savedAdsIds: state.savedAdsIds.concat(action.payload.AdDetail.id),
        totalAds: state.totalAds + 1,
      }; 

    case SAVED_GET_PAGE_POSITION:
      return {
        ...state,
        postionOfPage: action.payload,
      }; 
    case SET_PAGINATION_SAVED_ADS:
      return {
        ...state,
        SavedCurrentPage: state.filteredSavedAds.slice(
          action.payload.start,
          action.payload.end
        ),
        SavedCurrentPageStartPoint: action.payload.start,
        SavedCurrentPageEndPoint: action.payload.end,
        paginationIndex: action.payload.currentPage,
      }; 
    case LOAD_SAVED_ADS_IDS_LOCAL:
      return {
        ...state,
        savedAdsIds: action.payload,
      }; 

    default:
      return state;
  }
};

export default filteredSavedAdsReducer;
