import { requestGetIsAlive } from "../requests/session";
import { call, put } from "redux-saga/effects";
import { loadIsAliveError, loadIsAliveSuccess } from "../../ducks/session";

export function* handleGetIsAlive() {
  try {
    const response = yield call(requestGetIsAlive);
    console.log("response form IsAlive Saga :", response);

    if (response.status === 200) {
      yield put(loadIsAliveSuccess(response?.data?.data?.is_alive));
    }
  } catch (error) {
    yield put(loadIsAliveError(error));
  }
}