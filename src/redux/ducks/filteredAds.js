export const LOAD_FILTERED_ADS_START = "LOAD_FILTERED_ADS_START";
export const LOAD_FILTERED_ADS_SUCCESS = "LOAD_FILTERED_ADS_SUCCESS";
export const LOAD_FILTERED_ADS_ERROR = "LOAD_FILTERED_ADS_ERROR";

export const REMOVE_FILTERED_AD = "REMOVE_FILTERED_AD";
export const GET_PAGE_POSITION = "GET_PAGE_POSITION";

export const GET_CASHED_PAGE_DATA = "GET_CASHED_PAGE_DATA";
export const CLEAR_CASHED_PAGE_DATA = "CLEAR_CASHED_PAGE_DATA";
export const SET_CURRENT_PAGINATION_INDEX = "SET_CURRENT_PAGINATION_INDEX";

export const loadFilteredAdsStart = (filters) => ({
  type: LOAD_FILTERED_ADS_START,
  payload: filters,
}); //keep

export const loadFilteredAdsSuccess = (filteredAds) => ({
  type: LOAD_FILTERED_ADS_SUCCESS,
  payload: filteredAds,
}); //keep

export const loadFilteredAdsError = (error) => ({
  type: LOAD_FILTERED_ADS_ERROR,
  payload: error,
}); //keep

export const removeFilteredAd = (adToBeRemoved) => ({
  type: REMOVE_FILTERED_AD,
  payload: adToBeRemoved,
});

export const setPostionForScrollValueStart = (error) => ({
  type: GET_PAGE_POSITION,
  payload: error,
});

export const laodCashedPageData = (page) => ({
  type: GET_CASHED_PAGE_DATA,
  payload: page,
});
export const clearCashedPageData = () => ({
  type: CLEAR_CASHED_PAGE_DATA,
});
export const setCurrentPaginationIndex = (page) => ({
  type: SET_CURRENT_PAGINATION_INDEX,
  payload: page,
});

const initialState = {
  filteredAds: [],
  filterData: {},
  savedAdsIds: [],
  totalPages: 0,
  paginationIndex: 0,  
  postionOfPage: 0,
  loading: false,
  error: "",
};

const filteredAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTERED_ADS_START:      
      return {
        ...state,
        filteredAds: [],
        savedAdsIds: [],
        paginationIndex: action?.payload?.page_index,
        loading: true,
      };

    case LOAD_FILTERED_ADS_SUCCESS:      
      return {
        ...state,
        loading: false,
        filteredAds:
          action.payload?.error === true ? [] : action.payload?.data?.all_ads,
        savedAdsIds:
          action.payload?.error === true ? [] : action.payload?.data?.saved_ads,
        filterData: {
          ...state.filterData,
          [`${state.paginationIndex}`]: action.payload?.data?.all_ads,
        },
        totalPages: action.payload?.data?.total_pages,
      };

    case GET_CASHED_PAGE_DATA:
      
      return {
        ...state,
        filteredAds: state.filterData[action.payload],
      };
    case CLEAR_CASHED_PAGE_DATA:
      return {
        ...state,
        paginationIndex: 0,
        filterData: {},
      };
    case SET_CURRENT_PAGINATION_INDEX:
      return {
        ...state,
        paginationIndex: action.payload,
      };
    case LOAD_FILTERED_ADS_ERROR:
      // case LOAD_MORE_FILTERED_ADS_ERROR:
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
        }),
      };
    case GET_PAGE_POSITION:
      return {
        ...state,
        postionOfPage: action.payload,
      };
    default:
      return state;
  }
};

export default filteredAdsReducer;
