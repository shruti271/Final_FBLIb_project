import { requestGetMedia } from "../requests/mediaAds";
import { call, put } from "redux-saga/effects";
import { loadMediaError, loadMediaSuccess } from "../../ducks/mediaAds";

export function* handleGetMedia({payload}) {
  try {
    console.log(payload,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
    const response = yield call(requestGetMedia,payload);
    console.log("response****************", response);

    if (response.status === 200) {
      yield put(loadMediaSuccess(response?.data));
    }
  } catch (error) {
    yield put(loadMediaError(error));
  }
}
