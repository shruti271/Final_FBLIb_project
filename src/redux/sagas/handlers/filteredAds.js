import { requestGetFilteredAds } from "../requests/filteredAds";
import { call, put } from "redux-saga/effects";
import {
  loadFilteredAdsSuccess,
  loadFilteredAdsError,
} from "../../ducks/filteredAds";
import { loadSavedAdsIdsLocal } from "../../ducks/filteredSavedAds";
import { updateScubsciptionStatus } from "../../ducks/subscription";

export function* handleGetFilteredAds({ payload }) {
  try {
    const response = yield call(requestGetFilteredAds, payload);

    if (response.status === 200) {
      yield put(loadFilteredAdsSuccess(response?.data));            
      yield put(loadSavedAdsIdsLocal(response?.data.data?.saved_ads));
    }
  } catch (error) {    
    yield put(updateScubsciptionStatus(error.response.data.data))
    yield put(loadFilteredAdsError(error));
  }
}
