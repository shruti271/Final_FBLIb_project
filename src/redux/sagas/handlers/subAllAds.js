import { call, put } from "redux-saga/effects";
import { loadSubAllMediaError, loadSubAllMediaSuccess } from "../../ducks/subAllAds";
import { requestGetSubAllMedia } from "../requests/subAllAds";

export function* handleGetSubAllMedia() {
  try {
    const response = yield call(requestGetSubAllMedia);
    console.log("response", response);

    if (response.status === 200) {
      yield put(loadSubAllMediaSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadSubAllMediaError(error));
  }
}
