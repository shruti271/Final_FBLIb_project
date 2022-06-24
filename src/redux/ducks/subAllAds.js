export const LOAD_SUBALLMEDIA_START = "LOAD_SUBALLMEDIA_START";
export const LOAD_SUBALLMEDIA_SUCCESS = "LOAD_SUBALLMEDIA_SUCCESS";
export const LOAD_SUBALLMEDIA_ERROR = "LOAD_SUBALLMEDIA_ERROR";

export const loadSubAllMediaStart = () => ({
    type: LOAD_SUBALLMEDIA_START,
  });
  
  export const loadSubAllMediaSuccess = (subAllMediaAds) => ({
    type: LOAD_SUBALLMEDIA_SUCCESS,
    payload: subAllMediaAds,
  });
  
  export const loadSubAllMediaError = (error) => ({
    type: LOAD_SUBALLMEDIA_ERROR,
    payload: error,
  });
  
  const initialState = {
    subAllMediaAds: [],
    loading: false,
    error: "",
  };
  
  const subAllMediaReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_SUBALLMEDIA_START:
        return {
          ...state,
          loading: true,
        };
      case LOAD_SUBALLMEDIA_SUCCESS:
        return {
          ...state,
          loading: false,
          subAllMediaAds: action.payload,
        };
      case LOAD_SUBALLMEDIA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default subAllMediaReducer;
  