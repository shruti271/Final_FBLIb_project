import { call, put } from "redux-saga/effects";
import { createSavedAdsError, createSavedAdsSuccess, deleteSavedAdsError, deleteSavedAdsSuccess, loadSavedAdsError, loadSavedAdsSuccess } from "../../ducks/saveAds_clientSide";
import {
  requestCreateSavedAds,
  requestDeleteSavedAds,
  requestGetSavedAds,
} from "../requests/savedAds";

export function* handleGetSavedAds({payload}) {
  try {
    const response = yield call(requestGetSavedAds,payload);
    console.log("response", response);

    if (response.status === 200) {
      // console.log(response?.data?.data)      
      yield put(loadSavedAdsSuccess(response?.data));
    }
  } catch (error) {
    yield put(loadSavedAdsError(error));
  }
}

export function* handleCreateSavedAds({ payload }) {
  try {
    const response = yield call(requestCreateSavedAds, payload);

    if (response.status === 200) {
      yield put(createSavedAdsSuccess(response.data));
    }
  } catch (error) {
    yield put(createSavedAdsError(error));
  }
}

export function* handleDeleteSavedAds({ payload }) {
  try {
    const response = yield call(requestDeleteSavedAds, payload);

    if (response.status === 200) {
      console.log("8*************************")
      console.log(response.data.data)
      console.log(payload)
      yield put(deleteSavedAdsSuccess(response.data.data[0]));
    }
  } catch (error) {
    yield put(deleteSavedAdsError(error));
  }
}
