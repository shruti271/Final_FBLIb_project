export const LOAD_SUBALLADS_START = "LOAD_SUBALLADS_START";
export const LOAD_SUBALLADS_SUCCESS = "LOAD_SUBALLADS_SUCCESS";
export const LOAD_SUBALLADS_ERROR = "LOAD_SUBALLADS_ERROR";

export const LOAD_MORE_SUBALLADS_START = "LOAD_MORE_SUBALLADS_START";
export const LOAD_MORE_SUBALLADS_SUCCESS = "LOAD_MORE_SUBALLADS_SUCCESS";
export const LOAD_MORE_SUBALLADS_ERROR = "LOAD_MORE_SUBALLADS_ERROR";

export const SUBALLADS_GET_PAGE_POSITION = "SUBALLADS_GET_PAGE_POSITION";

export const loadSubAllAdsStart = (subAdsInfo) => ({
  type: LOAD_SUBALLADS_START,
  payload: subAdsInfo,
});

export const loadSubAllAdsSuccess = (subAllAds) => ({
  type: LOAD_SUBALLADS_SUCCESS,
  payload: subAllAds,
});

export const loadSubAllAdsError = (error) => ({
  type: LOAD_SUBALLADS_ERROR,
  payload: error,
});

export const loadMoreSubAllAdsStart = (subAdsInfo) => ({
  type: LOAD_MORE_SUBALLADS_START,
  payload: subAdsInfo,
});

export const loadMoreSubAllAdsSuccess = (subAllAds) => ({
  type: LOAD_MORE_SUBALLADS_SUCCESS,
  payload: subAllAds,
});

export const loadMoreSubAllAdsError = (error) => ({
  type: LOAD_MORE_SUBALLADS_ERROR,
  payload: error,
});
export const setPostionForSubAllAdsToScrollValueStart = (data) => ({
  type: SUBALLADS_GET_PAGE_POSITION,
  payload: data,
});
const initialState = {
  pageIndex:0,
  pageName:"",
  subAllAds: [],
  hasMoreData:true,
  postionOfPage:0,
  loading: false,
  error: "",
};

const subAllAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUBALLADS_START:
      return {
        ...state,
        pageIndex: action.payload.page_index,
        pageName: action.payload.page_name,
        subAllAds:[],
        hasMoreData:true,
        loading: true,
      };
    case LOAD_MORE_SUBALLADS_START:
      return {
        ...state,
        pageIndex: action.payload.page_index,
        loading: true,
      };
    case LOAD_SUBALLADS_SUCCESS:
      return {
        ...state,
        loading: false,
        subAllAds: action.payload,
        hasMoreData:action.payload?.length < 8 ? false : true,
      };
    case LOAD_MORE_SUBALLADS_SUCCESS:
      return {
        ...state,
        loading: false,
        subAllAds: [...state.subAllAds].concat(action.payload),
        hasMoreData:action.payload?.length < 8 ? false : true,
      }
    case LOAD_SUBALLADS_ERROR:
    case LOAD_MORE_SUBALLADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case SUBALLADS_GET_PAGE_POSITION:
        return {
          ...state,
          // [`${action.payload.key}`]:action.payload.data,
          postionOfPage:action.payload
        }
    default:
      return state;
  }
};

export default subAllAdsReducer;
