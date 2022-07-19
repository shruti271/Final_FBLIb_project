import { call, put } from "redux-saga/effects";
import { searchError, searchPhraseError, searchPhraseSuccess, searchSuccess } from "../../ducks/filtered_Data";
import { requestSearchData, requestSearchPhraseData } from "../requests/searchBar";


export function* handleGetSearchedData({ payload }) {
  try {
    const response = yield call(requestSearchData, payload);
    console.log("response", response);

    if (response.status === 200) {
      // console.log("....................................................okkkkk..")
      // console.log(response?.data?.data)
      // console.log("..................................................okkk....")
      yield put(searchSuccess(response?.data?.data));      
    }
  } catch (error) {
    yield put(searchError(error));
  }
}

export function* handleGetSearchedPhraseData({ payload }) {
  try {
    const response = yield call(requestSearchPhraseData, payload);
    console.log("response", response);

    if (response.status === 200) {
      // console.log("....................................................okkkkk..")
      // console.log(response?.data?.data)
      // console.log("..................................................okkk....")
      yield put(searchPhraseSuccess(response?.data?.data));      
    }
  } catch (error) {
    yield put(searchPhraseError(error));
  }
}
