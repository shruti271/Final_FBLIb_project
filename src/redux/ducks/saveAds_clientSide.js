export const LOAD_SAVEADSCLIENTSIDE_START = "LOAD_SAVEADSCLIENTSIDE_START";

export const CREATE_SAVEADSCLIENTSIDE_START = "CREATE_SAVEADSCLIENTSIDE_START";

export const DELETE_SAVEADSCLIENTSIDE_START = "DELETE_SAVEADSCLIENTSIDE_START";

// export const ALL_SAVED_ADS_LOAD_FILTERDATA = "ALL_SAVED_ADS_LOAD_FILTERDATA";
// export const ALL_SAVED_ADS_PUT_FILTERDATA = "ALL_SAVED_ADS_PUT_FILTERDATA";
// export const ALL_SAVED_ADS_CREATE_FILTERDATA =
//   "ALL_SAVED_ADS_CREATE_FILTERDATA";
// export const ALL_SAVED_ADS_APPLIED_FILTERS = "ALL_SAVED_ADS_APPLIED_FILTERS";
// export const ALL_SAVED_ADS_DATEFILTER = "ALL_SAVED_ADS_DATEFILTER";
// export const ALL_SAVED_ADS_NOODADS_START = "ALL_SAVED_ADS_NOODADS_START";
// export const ALL_SAVED_ADS_MEDIATYPE_START = "ALL_SAVED_ADS_MEDIATYPE_START";
// export const ALL_SAVED_ADS_BUTTONTYPETYPE_START =
//   "ALL_SAVED_ADS_BUTTONTYPETYPE_START";
// export const ALL_SAVED_ADS_SET_SORT_FILTER_START =
//   "ALL_SAVED_ADS_SET_SORT_FILTER_START";
// export const ALL_SAVED_ADS_SORT_TYPE_START = "ALL_SAVED_ADS_SORT_TYPE_START";
// export const ALL_SAVED_ADS_STATUS_START = "ALL_SAVED_ADS_STATUS_START";
// export const ALL_SAVED_ADS_FACEBOOKLIKES_START =
//   "ALL_SAVED_ADS_FACEBOOKLIKES_START";
// export const ALL_SAVED_ADS_SET_POSTION_SCROLL =
//   "ALL_SAVED_ADS_SET_POSTION_SCROLL";
// export const ALL_SAVED_ADS_SEARCH_START = "ALL_SAVED_ADS_SEARCH_START";
// export const ALL_SAVED_ADS_SEARCH_SUCCESS = "ALL_SAVED_ADS_SEARCH_SUCCESS";
// export const ALL_SAVED_ADS_SEARCH_ERROR = "ALL_SAVED_ADS_SEARCH_ERROR";
// export const ALL_SAVED_ADS_INCREASE_DECREASE_DATA_START =
//   "ALL_SAVED_ADS_INCREASE_DECREASE_DATA_START";
// export const ALL_SAVED_ADS_CLEAR_FILTERDATA = "ALL_SAVED_ADS_CLEAR_FILTERDATA";
// export const ALL_SAVED_ADS_APPLY_ALL_FILTER = "ALL_SAVED_ADS_APPLY_ALL_FILTER";
// export const ALL_SAVED_ADS_CLEAR_SINGLE_FILTER =
//   "ALL_SAVED_ADS_CLEAR_SINGLE_FILTER";
// export const SAVED_CHANGE_SEARCH_TYPE = "SAVED_CHANGE_SEARCH_TYPE";
// export const ALL_FILTER_AFTER_SAVED_SEARCH_SUCCESS =
//   "ALL_FILTER_AFTER_SAVED_SEARCH_SUCCESS";
// export const EMPTY_SAVED_SEARCH_SUCCESS = "EMPTY_SAVED_SEARCH_SUCCESS";
// export const SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER="SAVED_REFIX_MIN_MAX_RANGE_IN_SLIDER";
// export const SAVED_SEARCH_PHRASE_START="SAVED_SEARCH_PHRASE_START";
// export const SAVED_SEARCH_PHRASE_SUCCESS="SAVED_SEARCH_PHRASE_SUCCESS";
// export const SAVED_SEARCH_PHRASE_ERROR="SAVED_SEARCH_PHRASE_ERROR";

export const LOAD_SAVEADS_START = "LOAD_SAVEADS_START";
export const LOAD_SAVEADS_SUCCESS = "LOAD_SAVEADS_SUCCESS";
export const LOAD_SAVEADS_ERROR = "LOAD_SAVEADS_ERROR";

export const CREATE_SAVEADS_START = "CREATE_SAVEADS_START";
export const CREATE_SAVEADS_SUCCESS = "CREATE_SAVEADS_SUCCESS";
export const CREATE_SAVEADS_ERROR = "CREATE_SAVEADS_ERROR";

export const DELETE_SAVEADS_START = "DELETE_SAVEADS_START";
export const DELETE_SAVEADS_SUCCESS = "DELETE_SAVEADS_SUCCESS";
export const DELETE_SAVEADS_ERROR = "DELETE_SAVEADS_ERROR";

export const loadSavedAdsStart = (data) => ({
  type: LOAD_SAVEADS_START,
  payload:data,
});//DONE

export const loadSavedAdsSuccess = (savedMediaAds) => ({
  type: LOAD_SAVEADS_SUCCESS,
  payload: savedMediaAds,
});//DONE

export const loadSavedAdsError = (error) => ({
  type: LOAD_SAVEADS_ERROR,
  payload: error,
});//DONE

export const createSavedAdsStart = (addAd) => ({
  type: CREATE_SAVEADS_START,
  payload: addAd,
});//DONE

export const createSavedAdsSuccess = (addAd) => ({
  type: CREATE_SAVEADS_SUCCESS,
  payload: addAd,
});//DONE

export const createSavedAdsError = (error) => ({
  type: CREATE_SAVEADS_ERROR,
  payload: error,
});//DONE

export const deleteSavedAdsStart = (saveId) => ({
  type: DELETE_SAVEADS_START,
  payload: saveId,
});//DONE

export const deleteSavedAdsSuccess = (saveId) => ({
  type: DELETE_SAVEADS_SUCCESS,
  payload: saveId,
});//DONE

export const deleteSavedAdsError = (error) => ({
  type: DELETE_SAVEADS_ERROR,
  payload: error,
});//DONE
// --------------------


const initialState = {
  savedAdsLocal: [],
  savedIds: [],
  page_index:-1,
  postionYoffset: 0,
  search_loading: false,
  save_loading:false,
  error: "",
};

const savedAdsClienSideReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case DELETE_SAVEADSCLIENTSIDE_START:
      console.log("???????????????????????????????????????????????????");
      console.log(action.payload);
      console.log("???????????????????????????????????????????????????");

      return {
        ...state,
        loading: true,
      };
    case LOAD_SAVEADS_START:
      return {
        ...state,
        save_loading:true,
        page_index:action.payload.page_index,                
        savedAdsLocal:action.payload.page_index===0?[]:state.savedAdsLocal,
            // savedIds:action.payload.error ===false?state.savedIds.concat(action.payload.data[0].id):state.savedIds,

            // page_index: action.payload.page_index,
            // allMediaAdsData:action.payload.page_index===0?[]:state.allMediaAdsData,
        // loading: false,
        // allMediaAdsData: action.payload.error ===false?state.allMediaAdsData.concat(
        //   action.payload.data[1]?.all_ads
        // ):state.allMediaAdsData,
        // savedIds:action.payload.error ===false?state.savedIds.concat(action.payload.saved_ads):state.savedIds,
        // allAds:action.payload.error ===false?state.allMediaAdsData.concat(
        //   action.payload.data[1]?.all_ads
        // ):state.allMediaAdsData,
      }
    case CREATE_SAVEADS_START:
      return {
        ...state,
        save_loading: true,
        savedIds: [...state.savedIds.concat(action.payload.ad)],
      };
    case DELETE_SAVEADS_START:
      return {
        ...state,
        save_loading: true,
        savedIds: [...state.savedIds.filter((savedads) => savedads !== action.payload.ad)],
      };
    case LOAD_SAVEADS_SUCCESS:      
      return {
        ...state,
        save_loading: false,
        savedAdsLocal:action.payload.error ===false?state.savedAdsLocal.concat(
          action.payload.data
        ):state.savedAdsLocal,
        savedIds:
        action.payload !== "" ? state.savedIds.concat(action.payload?.data.map((abc) => abc.id)) : [],
       
      };
    case CREATE_SAVEADS_SUCCESS:      
      return {
        ...state,
        save_loading: false,
        savedAdsLocal: action.payload.error === false && state.savedAdsLocal.concat(action.payload?.data[0]),                          
        
      };
    case LOAD_SAVEADS_ERROR:
    case CREATE_SAVEADS_ERROR:
      return {
        ...state,
        save_loading: false,
        error: action.payload,
      };
      case DELETE_SAVEADS_SUCCESS: {
        console.log(action.payload.id)
        console.log("00000000000000000000000000",state.savedAdsLocal)
        return {
          ...state,
          save_loading: false,
          savedAdsLocal: state.savedAdsLocal.filter((savedads) => savedads.id !== action.payload.id),
          // savedIds: [...state.savedIds.filter((savedads) => savedads !== action.payload.id)],
            
        };
      }
    default:
      return state;
  }
};

export default savedAdsClienSideReducer;
