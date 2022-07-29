export const LOAD_FILTERED_ADS_START = "LOAD_FILTERED_ADS_START";
export const LOAD_FILTERED_ADS_SUCCESS = "LOAD_FILTERED_ADS_SUCCESS";
export const LOAD_FILTERED_ADS_ERROR = "LOAD_FILTERED_ADS_ERROR";

export const LOAD_MORE_FILTERED_ADS_START = "LOAD_MORE_FILTERED_ADS_START";
export const LOAD_MORE_FILTERED_ADS_SUCCESS = "LOAD_MORE_FILTERED_ADS_SUCCESS";
export const LOAD_MORE_FILTERED_ADS_ERROR = "LOAD_MORE_FILTERED_ADS_ERROR";

export const UPDATE_FILTERED_ADS_START = "UPDATE_FILTERED_ADS_START";
export const UPDATE_FILTERED_ADS_SUCCESS = "UPDATE_FILTERED_ADS_SUCCESS";
export const UPDATE_FILTERED_ADS_ERROR = "UPDATE_FILTERED_ADS_ERROR";

export const loadFilteredAdsStart = (filters) => ({
  type: LOAD_FILTERED_ADS_START,
  payload:filters,
});

export const loadFilteredAdsSuccess = (filteredAds) => ({
  type: LOAD_FILTERED_ADS_SUCCESS,
  payload: filteredAds,
});

export const loadFilteredAdsError = (error) => ({
  type: LOAD_FILTERED_ADS_ERROR,
  payload: error,
});

export const loadMoreFilteredAdsStart = (filters) => ({
  type: LOAD_MORE_FILTERED_ADS_START,
  payload:filters,
});

export const loadMoreFilteredAdsSuccess = (filteredAds) => ({
  type: LOAD_MORE_FILTERED_ADS_SUCCESS,
  payload: filteredAds,
});

export const loadMoreFilteredAdsError = (error) => ({
  type: LOAD_MORE_FILTERED_ADS_ERROR,
  payload: error,
});


export const updateAdsStart = (updatead) => ({
  type: UPDATE_FILTERED_ADS_START,
  payload: updatead,
});

export const updateAdsSuccess = (updatead) => ({
  type: UPDATE_FILTERED_ADS_SUCCESS,
  payload: updatead,
});

export const updateAdsError = (error) => ({
  type: UPDATE_FILTERED_ADS_ERROR,
  payload: error,
});

const initialState = {
  filteredAds: [],
  savedAdsIds:[],
  loading: false,
  error: "",
};

const filteredAdsReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_FILTERED_ADS_START:
    case LOAD_MORE_FILTERED_ADS_START:
      return {
        ...state,
        loading: true,
      };
                                                                  
    case LOAD_FILTERED_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredAds: action.payload?.data?.all_ads,
        savedAdsIds:action.payload?.data?.saved_ads
      };

    case LOAD_MORE_FILTERED_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredAds: [...state.filteredAds].concat(action.payload?.data?.all_ads),
      };

    case LOAD_FILTERED_ADS_ERROR:
    case LOAD_MORE_FILTERED_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.data?.error,
      };
    default:
      return state;
  }
};

export default filteredAdsReducer;
