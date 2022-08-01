import { call, put } from "redux-saga/effects";
import {
  addToSavedAdsError,
  addToSavedAdsSuccess,
  removeFromSavedAdsError,
  removeFromSavedAdsSuccess,
  removeFromSkipedSavedFilteredAds,
} from "../../ducks/savedAdsManager";
import { requestAddToSavedAds, requestRemoveFromSavedAds } from "../requests/savedAdsManager";

export function* handleAddToSavedAds({ payload }) {
  try {
    const response = yield call(requestAddToSavedAds, payload);

    if (response.status === 200) {
      yield put(addToSavedAdsSuccess(response.data));
    }
  } catch (error) {
    yield put(addToSavedAdsError(error));
  }
}

export function* handleRemoveFromSavedAds({ payload }) {
  try {
    const response = yield call(requestRemoveFromSavedAds, payload);

    if (response.status === 200) {
      yield put(removeFromSavedAdsSuccess(response.data.data[0]));
      yield put(removeFromSkipedSavedFilteredAds(response.data.data[0]?.id));
    }
  } catch (error) {
    yield put(removeFromSavedAdsError(error));
  }
}
