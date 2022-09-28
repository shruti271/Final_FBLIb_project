import { call, put } from "redux-saga/effects";
import {
  requestAddToSavedAds,
  requestCheckAdByFilter,
  requestGetSavedAds,
  requestRemoveFromSavedAds,
} from "../requests/filteredSavedAds";
import {
  loadsavedFilteredAdsError,
  loadsavedFilteredAdsSuccess,
  addToSavedAdsFilterLocalSuccess,
  addToSavedAdsFilterLocalError,
  addToSavedAdsError,
  removeFromSavedAdsError,
} from "../../ducks/filteredSavedAds";
import { updateScubsciptionStatus } from "../../ducks/subscription";

export function* handleGetFilteredSavedAds({ payload }) {
  try {
    const response = yield call(requestGetSavedAds, payload);

    if (response.status === 200) {
      yield put(loadsavedFilteredAdsSuccess(response?.data));
    }
  } catch (error) {
    yield put(updateScubsciptionStatus(error.response.data.data))
    yield put(loadsavedFilteredAdsError(error));
  }
}

export function* handleCheckAdByFilter({ payload }) {
  try {
    const response = yield call(requestCheckAdByFilter, payload);

    if (response.status === 200) {
      yield put(addToSavedAdsFilterLocalSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(addToSavedAdsFilterLocalError(error));
  }
}

export function* handleAddToSavedAds({ payload }) {
  try {
    const response = yield call(requestAddToSavedAds, payload);

    if (response.status === 200) {
      //nothing to do for success response
    }
  } catch (error) {
    yield put(addToSavedAdsError({ error: error, errorId: payload.ad }));
  }
}

export function* handleRemoveFromSavedAds({ payload }) {
  try {
    const response = yield call(requestRemoveFromSavedAds, payload);

    if (response.status === 200) {
      //no need to do anythinbg on remove from database as we altready managed on local redux directly
    }
  } catch (error) {
    yield put(removeFromSavedAdsError({ error: error, AdDetail: payload }));
  }
}
