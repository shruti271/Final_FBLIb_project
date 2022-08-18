import { requestGetFilteredAds } from "../requests/filteredAds";
import { call, put } from "redux-saga/effects";
import { loadFilteredAdsSuccess, loadFilteredAdsError, loadMoreFilteredAdsError, loadMoreFilteredAdsSuccess } from "../../ducks/filteredAds";
import { loadSavedAdsIdsLocal } from "../../ducks/filteredSavedAds";
// import { loadSavedAdsIdsLocal } from "../../ducks/savedAdsManager";

export function* handleGetFilteredAds({payload}) {
  try {
    const response = yield call(requestGetFilteredAds,payload);

    if (response.status === 200) {
      yield put(loadFilteredAdsSuccess(response?.data));
      yield put(loadSavedAdsIdsLocal(response?.data.data?.saved_ads))
    }
  } catch (error) {
    yield put(loadFilteredAdsError(error));
  }
}


export function* handleGetMoreFilteredAds({payload}) {
  try {
    const response = yield call(requestGetFilteredAds,payload);

    if (response.status === 200) {
      yield put(loadMoreFilteredAdsSuccess(response?.data));
    }
  } catch (error) {
    yield put(loadMoreFilteredAdsError(error));
  }
}
