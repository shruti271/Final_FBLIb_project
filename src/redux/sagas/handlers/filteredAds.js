import { requestGetFilteredAds } from "../requests/filteredAds";
import { call, put } from "redux-saga/effects";
import { loadFilteredAdsSuccess, loadFilteredAdsError, loadMoreFilteredAdsError, loadMoreFilteredAdsSuccess } from "../../ducks/filteredAds";

export function* handleGetFilteredAds({payload}) {
  try {
    const response = yield call(requestGetFilteredAds,payload);

    if (response.status === 200) {
      yield put(loadFilteredAdsSuccess(response?.data));
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
