export const LOAD_ACCOUNT_SETTINGS_START = "LOAD_ACCOUNT_SETTINGS_START";
export const LOAD_ACCOUNT_SETTINGS_SUCCESS = "LOAD_ACCOUNT_SETTINGS_SUCCESS";
export const LOAD_ACCOUNT_SETTINGS_ERROR = "LOAD_ACCOUNT_SETTINGS_ERROR";

export const UPDATE_ACCOUNT_SETTINGS_START = "UPDATE_ACCOUNT_SETTINGS_START";
export const UPDATE_ACCOUNT_SETTINGS_SUCCESS =
  "UPDATE_ACCOUNT_SETTINGS_SUCCESS";
export const UPDATE_ACCOUNT_SETTINGS_ERROR = "UPDATE_ACCOUNT_SETTINGS_ERROR";

export const loadAccountSettingsStart = () => ({
  type: LOAD_ACCOUNT_SETTINGS_START,
});

export const loadAccountSettingsSuccess = (accountSettings) => ({
  type: LOAD_ACCOUNT_SETTINGS_SUCCESS,
  payload: accountSettings,
});

export const loadAccountSettingsError = (error) => ({
  type: LOAD_ACCOUNT_SETTINGS_SUCCESS,
  payload: error,
});

export const updateAccountSettingsStart = (updateAccountSettings) => ({
  type: UPDATE_ACCOUNT_SETTINGS_START,
  payload: updateAccountSettings,
});

export const updateAccountSettingsSuccess = (updatedAccountSettings) => ({
  type: UPDATE_ACCOUNT_SETTINGS_SUCCESS,
  payload: updatedAccountSettings,
});

export const updateAccountSettingsError = (error) => ({
  type: UPDATE_ACCOUNT_SETTINGS_ERROR,
  payload: error,
});

const initialState = {
  accountSettings: null,
  loading: false,
  error: "",
};

const accountSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ACCOUNT_SETTINGS_START:
    case UPDATE_ACCOUNT_SETTINGS_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ACCOUNT_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        accountSettings: action?.payload,
      };
    case UPDATE_ACCOUNT_SETTINGS_SUCCESS:
      console.log("HandleUpdateAccountSettings Response: --- ",action?.payload?.data?.error)      
      return {
        ...state,
        loading: false,
        accountSettings: action?.payload?.data?.error ? state.accountSettings : action?.payload?.data?.data,
        error: action?.payload?.data?.error ? action?.payload?.data?.message : ""
        // accountSettings: action.payload.error? state.accountSettings : action.payload.data,
        // error: action.payload.error? action.payload.message :""
      };
    case LOAD_ACCOUNT_SETTINGS_ERROR:
    case UPDATE_ACCOUNT_SETTINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountSettingsReducer;
