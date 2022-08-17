export const LOAD_SUBALLADS_START = "LOAD_SUBALLADS_START";
export const LOAD_SUBALLADS_SUCCESS = "LOAD_SUBALLADS_SUCCESS";
export const LOAD_SUBALLADS_ERROR = "LOAD_SUBALLADS_ERROR";

export const LOAD_MORE_SUBALLADS_START = "LOAD_MORE_SUBALLADS_START";
export const LOAD_MORE_SUBALLADS_SUCCESS = "LOAD_MORE_SUBALLADS_SUCCESS";
export const LOAD_MORE_SUBALLADS_ERROR = "LOAD_MORE_SUBALLADS_ERROR";

export const SUBALLADS_GET_PAGE_POSITION = "SUBALLADS_GET_PAGE_POSITION";
export const SET_SUBALL_CURRENT_PAGINATION_INDEX="SET_SUBALL_CURRENT_PAGINATION_INDEX";

export const GET_SUBALL_CASHED_PAGE_DATA = "GET_SUBALL_CASHED_PAGE_DATA";

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
export const setSubAllCurrentPaginationIndex = (page) => ({
  type: SET_SUBALL_CURRENT_PAGINATION_INDEX,  
  payload:page,
});

export const laodSubAllCashedPageData = (page) => ({
  type: GET_SUBALL_CASHED_PAGE_DATA,
  payload: page,
});

const initialState = {
  pageIndex:0,
  pageName:"",
  subAllAds: [],
  filterSubAllData:{},
  totalPages:0,
  // paginationIndex:0,
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
        filterSubAllData:{},        
        hasMoreData:true,
        loading: true,
      };
    case LOAD_MORE_SUBALLADS_START:
      return {
        ...state,
        pageIndex: action.payload.page_index,    
        subAllAds:[],    
        loading: true,
      };
    case LOAD_SUBALLADS_SUCCESS:
      console.log("909 more",action.payload ,"-----",action?.payload.data)

      return {
        ...state,
        loading: false,
        subAllAds: action.payload.data,
        hasMoreData:action.payload?.length < 8 ? false : true,
        filterSubAllData: {
          ...state.filterSubAllData,
          [`${state.pageIndex}`] : action.payload.data
        },
        totalPages: action.payload?.total_pages,
      };
    case LOAD_MORE_SUBALLADS_SUCCESS:
      console.log("909 more",action.payload ,"-----",action?.payload.data)
      return {
        ...state,
        loading: false,
        subAllAds: action?.payload.data,
        hasMoreData:action.payload?.length < 8 ? false : true,
        filterSubAllData: {
          ...state.filterSubAllData,
          [`${state.pageIndex}`] : action.payload.data
        },
        totalPages: action.payload?.total_pages,
      }
      case GET_SUBALL_CASHED_PAGE_DATA:
  console.log("909 0-0  cash data",state.filterSubAllData[action.payload] , state.filterSubAllData)
  return {
    ...state,
    subAllAds:state.filterSubAllData[action.payload],
    pageIndex:action.payload
  };
      case SET_SUBALL_CURRENT_PAGINATION_INDEX:
        return {
          ...state,
          paginationIndex:action.payload
        };
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
