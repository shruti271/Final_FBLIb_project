export const LOAD_MEDIA_START = "LOAD_MEDIA_START";
export const LOAD_MEDIA_SUCCESS = "LOAD_MEDIA_SUCCESS";
export const LOAD_MEDIA_ERROR = "LOAD_MEDIA_ERROR";

export const loadMediaStart = () => ({
  type: LOAD_MEDIA_START,
});

export const loadMediaSuccess = (allMediaAds) => ({
  type: LOAD_MEDIA_SUCCESS,
  payload: allMediaAds,
});

export const loadMediaError = (error) => ({
  type: LOAD_MEDIA_ERROR,
  payload: error,
});

const initialState = {
  allMediaAds: [],
  loading: false,
  error: "",
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEDIA_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        allMediaAds: action.payload,
      };
    case LOAD_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;
