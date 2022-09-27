export const LOAD_SUBSCRIPTION_START = "LOAD_SUBSCRIPTION_START";
export const LOAD_SUBSCRIPTION_SUCCESS = "LOAD_SUBSCRIPTION_SUCCESS";
export const LOAD_SUBSCRIPTION_ERROR = "LOAD_SUBSCRIPTION_ERROR";
export const SET_SUBSCRIPTION = "SET_SUBSCRIPTION";

export const loadSubscriptionStart = () => ({
  type: LOAD_SUBSCRIPTION_START,
});

export const loadSubscriptionSuccess = (data) => ({
  type: LOAD_SUBSCRIPTION_SUCCESS,
  payload: data,
});

export const loadSubscriptionError = (error) => ({
  type: LOAD_SUBSCRIPTION_ERROR,
  payload: error,
});

export const setSubscription = (data) => ({
  type: SET_SUBSCRIPTION,
  payload: data,
});

const initialState = {
  data: {},
  loading: true,
  error: "",
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUBSCRIPTION_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUBSCRIPTION_SUCCESS:
      console.log("?????????????????",action.payload)
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SET_SUBSCRIPTION:
      return {
        ...state,
        data: action.payload,
      };
    case LOAD_SUBSCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default subscriptionReducer;
