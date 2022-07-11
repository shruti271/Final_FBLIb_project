import { call, put } from "redux-saga/effects";
import { searchError, searchSuccess } from "../../ducks/filtered_Data";
import { requestSearchData } from "../requests/searchBar";


export function* handleGetSearchedData({ payload }) {
  try {
    const response = yield call(requestSearchData, payload);
    console.log("response", response);

    if (response.status === 200) {
      console.log("......................................................")
      console.log(response?.data?.data)
      console.log("......................................................")
      yield put(searchSuccess(response?.data?.data));      
    }
  } catch (error) {
    yield put(searchError(error));
  }
}
