export const LOAD_SUBSCRIPTION_START = "LOAD_SUBSCRIPTION_START";
export const LOAD_SUBSCRIPTION_SUCCESS = "LOAD_SUBSCRIPTION_SUCCESS";
export const LOAD_SUBSCRIPTION_ERROR = "LOAD_SUBSCRIPTION_ERROR";
export const SET_SUBSCRIPTION = "SET_SUBSCRIPTION";
export const UPDATE_SUBSCRIPTION = "UPDATE_SUBSCRIPTION";
export const SET_TRIAL_STATUS = "SET_TRIAL_STATUS";

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
export const updateScubsciptionStatus = (data) => ({
  type: UPDATE_SUBSCRIPTION,
  payload: data,
});
export const setTrialStatus = (data) => ({
  type: SET_TRIAL_STATUS,
  payload: data,
});

const initialState = {
  data: {
    status:null,
  },
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
      console.log("?????????????????",action.payload.status)
      return {
        ...state,
        loading: false,
        data: {          
          status:action.payload?.status,
          trial_end_date:action?.payload?.trial_end_date
        },
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
      case UPDATE_SUBSCRIPTION:
        return {
          ...state,
          laoding:false,
          data:action.payload,
          
        }
        case SET_TRIAL_STATUS:
          return {
            ...state,
            data:{
              ...state.data,
              status:action.payload,
            }
          }
    default:
      return state;
  }
};

export default subscriptionReducer;
