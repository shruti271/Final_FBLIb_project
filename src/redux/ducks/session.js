export const LOAD_ISALIVE_START = "LOAD_ISALIVE_START";
export const LOAD_ISALIVE_SUCCESS = "LOAD_ISALIVE_SUCCESS";
export const LOAD_ISALIVE_ERROR = "LOAD_ISALIVE_ERROR";
export const SET_ISALIVE = "SET_ISALIVE";

export const loadIsAliveStart = () => ({
  type: LOAD_ISALIVE_START,
});

export const loadIsAliveSuccess = (data) => ({
  type: LOAD_ISALIVE_SUCCESS,
  payload: data,
});

export const loadIsAliveError = (error) => ({
  type: LOAD_ISALIVE_ERROR,
  payload: error,
});

export const setIsAlive = (data) => ({
  type: SET_ISALIVE,
  payload: data,
});

const initialState = {
  isAlive: false,
  loading: true,
  error: "",
};

const isAliveReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ISALIVE_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ISALIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAlive: action.payload,
      };
    case SET_ISALIVE:
      return {
        ...state,
        isAlive: action.payload,
      };
    case LOAD_ISALIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default isAliveReducer;
