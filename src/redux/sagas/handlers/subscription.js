import { requestGetSubscription } from "../requests/subscription";
import { call, put } from "redux-saga/effects";
import {
  loadSubscriptionError,
  loadSubscriptionSuccess,
} from "../../ducks/subscription";

export function* handleGetSubscription() {
  try {
    const response = yield call(requestGetSubscription);
    console.log("handleGetSubscription Saga :", response);

    if (response.status === 200) {
      yield put(loadSubscriptionSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadSubscriptionError(error));
  }
}
