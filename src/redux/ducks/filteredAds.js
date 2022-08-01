export const LOAD_FILTERED_ADS_START = "LOAD_FILTERED_ADS_START";
export const LOAD_FILTERED_ADS_SUCCESS = "LOAD_FILTERED_ADS_SUCCESS";
export const LOAD_FILTERED_ADS_ERROR = "LOAD_FILTERED_ADS_ERROR";

export const LOAD_MORE_FILTERED_ADS_START = "LOAD_MORE_FILTERED_ADS_START";
export const LOAD_MORE_FILTERED_ADS_SUCCESS = "LOAD_MORE_FILTERED_ADS_SUCCESS";
export const LOAD_MORE_FILTERED_ADS_ERROR = "LOAD_MORE_FILTERED_ADS_ERROR";

export const REMOVE_FILTERED_AD = "REMOVE_FILTERED_AD";

export const removeFilteredAd = (adToBeRemoved) => ({
  type: REMOVE_FILTERED_AD,
  payload:adToBeRemoved,
});

export const loadFilteredAdsStart = (filters) => ({
  type: LOAD_FILTERED_ADS_START,
  payload:filters,
});//done

export const loadFilteredAdsSuccess = (filteredAds) => ({
  type: LOAD_FILTERED_ADS_SUCCESS,
  payload: filteredAds,
});//done

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

const initialState = {
  filteredAds: [],
  savedAdsIds:[],
  hasMoreData:true,
  loading: false,
  error: "",
};

const filteredAdsReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_FILTERED_ADS_START:
      return {
        ...state,
        filteredAds: [],
        savedAdsIds:[],
        loading: true,
      };
    case LOAD_MORE_FILTERED_ADS_START:
      return {
        ...state,
        loading: true,
      };
                                                                  
    case LOAD_FILTERED_ADS_SUCCESS:
      console.log("11111",action.payload , state.filteredAds)
      // console.log(action.payload?.data[0]?.saved_ads)
      return {
        ...state,
        loading: false,
        filteredAds:action.payload?.error === true ? [] : action.payload?.data?.all_ads,
        savedAdsIds:action.payload?.error === true ? [] : action.payload?.data?.saved_ads ,
        hasMoreData: action.payload?.data?.all_ads?.length < 8 ? false : true
      };

    case LOAD_MORE_FILTERED_ADS_SUCCESS:console.log("..... ",action.payload?.data?.all_ads)
      return {
        ...state,
        loading: false,
        filteredAds: action.payload?.error === true ? state.filteredAds : [...state.filteredAds].concat(action.payload?.data?.all_ads),
        savedAdsIds:action.payload?.error === true ? state.savedAdsIds : [...state.savedAdsIds].concat(action.payload?.data?.saved_ads),

        hasMoreData: action.payload?.data?.all_ads?.length < 8 ? false : true
      };

    case LOAD_FILTERED_ADS_ERROR:
    case LOAD_MORE_FILTERED_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.data?.error,
      };

    case REMOVE_FILTERED_AD:
      return {
        ...state,
        filteredAds: state.filteredAds.filter(function (ad) {
          return ad.id !== action.payload?.id;
      })
      }
    default:
      return state;
  }
};

export default filteredAdsReducer;
