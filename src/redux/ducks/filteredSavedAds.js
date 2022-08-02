export const LOAD_SAVED_FILTERED_ADS_START = "LOAD_SAVED_FILTERED_ADS_START";
export const LOAD_SAVED_FILTERED_ADS_SUCCESS =
  "LOAD_SAVED_FILTERED_ADS_SUCCESS";
export const LOAD_SAVED_FILTERED_ADS_ERROR = "LOAD_SAVED_FILTERED_ADS_ERROR";

export const LOAD_MORE_SAVED_FILTERED_ADS_START =
  "LOAD_MORE_SAVED_FILTERED_ADS_START";
export const LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS =
  "LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS";
export const LOAD_MORE_SAVED_FILTERED_ADS_ERROR =
  "LOAD_MORE_SAVED_FILTERED_ADS_ERROR";

export const REMOVE_SAVED_FILTERED_AD = "REMOVE_SAVED_FILTERED_AD";
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_START =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_START";
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS";
export const ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR =
  "ADD_TO_SAVED_FILTERED_AD_LOCAL_ERROR";

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

export const removesavedFilteredAdLocal = (adToBeRemoved) => ({
  type: REMOVE_SAVED_FILTERED_AD,
  payload: adToBeRemoved,
});

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

export const loadMoresavedFilteredAdsStart = (request) => ({
  type: LOAD_MORE_SAVED_FILTERED_ADS_START,
  payload: request,
});

export const loadMoresavedFilteredAdsSuccess = (filteredSavedAds) => ({
  type: LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS,
  payload: filteredSavedAds,
});

export const loadMoresavedFilteredAdsError = (error) => ({
  type: LOAD_MORE_SAVED_FILTERED_ADS_ERROR,
  payload: error,
});

const initialState = {
  filteredSavedAds: [],
  savedAdsIds: [],
  hasMoreData:true,
  loading: false,
  error: "",
};

const filteredSavedAdsReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_SAVED_FILTERED_ADS_START:
      return {
        ...state,
        filteredAds: [],
        savedAdsIds:[],
        loading: true,
      };
    case LOAD_MORE_SAVED_FILTERED_ADS_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_SAVED_FILTERED_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredSavedAds:action.payload?.error === true ? [] : action.payload?.data,
        hasMoreData:action.payload?.data?.length < 8 ? false : true,
      };

    case LOAD_MORE_SAVED_FILTERED_ADS_SUCCESS:
      return {
        ...state,
        loading: false, 
        filteredSavedAds: action.payload?.error === true ? state.filteredSavedAds : [...state.filteredSavedAds].concat(action.payload),      
        hasMoreData:action.payload?.length < 8 ? false : true,
      };

    case LOAD_SAVED_FILTERED_ADS_ERROR:
    case LOAD_MORE_SAVED_FILTERED_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.data?.error,
      };

    case REMOVE_SAVED_FILTERED_AD:
      return {
        ...state,
        filteredSavedAds: state.filteredSavedAds.filter(function (ad) {
          return ad.id !== action.payload?.id;
        }),
      };

    case ADD_TO_SAVED_FILTERED_AD_LOCAL_SUCCESS:
      const filterdListToBeUpdated = [...state.filteredSavedAds]
      filterdListToBeUpdated.unshift(action.payload?.AdDetails)
      return {
        ...state,
        filteredSavedAds: action.payload?.valid
          ? filterdListToBeUpdated
          : state.filteredSavedAds,
      };
      
    default:
      return state;
  }
};

export default filteredSavedAdsReducer;
