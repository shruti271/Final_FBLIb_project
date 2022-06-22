import { call, put } from "redux-saga/effects";
import {
  requestGetAccountSettings,
  requestUpdateAccountSettings,
} from "../requests/accountSettings";
import {
  loadAccountSettingsError,
  loadAccountSettingsSuccess,
  updateAccountSettingsError,
  updateAccountSettingsSuccess,
} from "../../ducks/accountSettings";

export function* handleGetAccountSettings() {
  try {
    const response = yield call(requestGetAccountSettings);
    console.log("HandleGetAccountSettings Response:", response);

    if (response.status === 200) {
      yield put(loadAccountSettingsSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadAccountSettingsError(error));
  }
}

export function* handleUpdateAccountSettings({ payload }) {
  try {
    const response = yield call(requestUpdateAccountSettings, payload);
    console.log("HandleUpdateAccountSettings Response:", response);
    if (response.status === 200) {
      yield put(updateAccountSettingsSuccess(response.data.data));
    }
  } catch (error) {
    yield put(updateAccountSettingsError(error));
  }
}
