import { requestGetSingleAdData } from "../requests/singleAdsData";
import { call, put } from "redux-saga/effects";
import {
  loadSingleAdDataError,
  loadSingleAdDataSuccess,
} from "../../ducks/singleAdsData";

export function* handleGetSingleAdData({ payload }) {
  try {
    const response = yield call(requestGetSingleAdData, payload);

    if (response.status === 200) {
      yield put(loadSingleAdDataSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadSingleAdDataError(error));
  }
}
