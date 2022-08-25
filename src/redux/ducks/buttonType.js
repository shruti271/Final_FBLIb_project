export const GET_BUTTON_TYPES_START = "GET_BUTTON_TYPES_START";
export const GET_BUTTON_TYPES_SUCCESS = "GET_BUTTON_TYPES_SUCCESS";
export const GET_BUTTON_TYPES_ERROR = "GET_BUTTON_TYPES_ERROR";

export const getButtonTypes = () => ({
  type: GET_BUTTON_TYPES_START,
});

export const getButtonTypesSuccess = (Ads) => ({
  type: GET_BUTTON_TYPES_SUCCESS,
  payload: Ads,
});

export const getButtonTypesError = (error) => ({
  type: GET_BUTTON_TYPES_ERROR,
  payload: error,
});

const initialState = {
  buttonTypes: [],
  loading: false,
  error: null,
};

const buttonTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUTTON_TYPES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_BUTTON_TYPES_SUCCESS:
      return {
        ...state,
        buttonTypes: action.payload,
        loading: false,
      };
    case GET_BUTTON_TYPES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default buttonTypesReducer;
