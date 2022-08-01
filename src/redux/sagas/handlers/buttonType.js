import { call, put } from "redux-saga/effects";
import { getButtonTypesSuccess, getButtonTypesError } from "../../ducks/buttonType";
import { requestCatSatusData } from "../requests/buttonType";

export function* handleGetButtonType() {
  try {
    const response = yield call(requestCatSatusData);
    if (response.status === 200) {
      yield put(getButtonTypesSuccess(response?.data?.data.cta_status));      
    }
  } catch (error) {
    yield put(getButtonTypesError(error));
  }
}
