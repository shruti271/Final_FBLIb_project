import { call, put } from "redux-saga/effects";
import {
  loadSubAllMediaError,
  loadSubAllMediaSuccess,
} from "../../ducks/subAllAds";
import { requestGetSubAllMedia } from "../requests/subAllAds";

export function* handleGetSubAllMedia({ payload }) {
  try {
    const response = yield call(requestGetSubAllMedia, payload);
    console.log("response", response);

    if (response.status === 200) {
      yield put(loadSubAllMediaSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadSubAllMediaError(error));
  }
}
