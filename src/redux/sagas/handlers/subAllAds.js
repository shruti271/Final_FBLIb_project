import { call, put } from "redux-saga/effects";
import {
  loadSubAllAdsSuccess,
  loadSubAllAdsError,
  loadMoreSubAllAdsSuccess,
  loadMoreSubAllAdsError,
} from "../../ducks/subAllAds";
import { requestGetSubAllAds } from "../requests/subAllAds";

export function* handleGetSubAllAds({ payload }) {
  try {
    const response = yield call(requestGetSubAllAds, payload);
    console.log("response", response);

    if (response.status === 200) {
      yield put(loadSubAllAdsSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadSubAllAdsError(error));
  }
}

export function* handleGetMoreSubAllAds({ payload }) {
  try {
    const response = yield call(requestGetSubAllAds, payload);
    console.log("response", response);

    if (response.status === 200) {
      yield put(loadMoreSubAllAdsSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadMoreSubAllAdsError(error));
  }
}
