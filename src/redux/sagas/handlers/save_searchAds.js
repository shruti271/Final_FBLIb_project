import { call, put } from "redux-saga/effects";
import {
  SavedAdsearchError,
  SavedAdssearchSuccess,
  savedSearchPhraseError,
  savedSearchPhraseSuccess,
} from "../../ducks/saveAds_clientSide";
import { requestSavedAdsSearchData, requestSavedSearchPhraseData } from "../requests/save_searchAds";

export function* handleGetSavedAdsSearchedData({ payload }) {
  try {
    const response = yield call(requestSavedAdsSearchData, payload);
    console.log("response", response);

    if (response.status === 200) {
      console.log(response?.data?.data)
      console.log("-----------------------------1------------------")
      yield put(SavedAdssearchSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(SavedAdsearchError(error));
  }
}


export function* handleGetSavedSearchedPhraseData({ payload }) {
  try {
    const response = yield call(requestSavedSearchPhraseData, payload);
    console.log("response", response);

    if (response.status === 200) {
      // console.log("....................................................okkkkk..")
      // console.log(response?.data?.data)
      // console.log("..................................................okkk....")
      yield put(savedSearchPhraseSuccess(response?.data?.data));      
    }
  } catch (error) {
    yield put(savedSearchPhraseError(error));
  }
}
