import { call, put } from "redux-saga/effects";
import { searchError, searchSuccess } from "../../ducks/filtered_Data";
import { SavedAdsearchError, SavedAdssearchSuccess } from "../../ducks/saveAds_clientSide";
import { requestSavedAdsSearchData } from "../requests/save_searchAds";
import { requestSearchData } from "../requests/searchBar";


export function* handleGetSavedAdsSearchedData({ payload }) {
  try {
    const response = yield call(requestSavedAdsSearchData, payload);
    console.log("response", response);

    if (response.status === 200) {
      console.log("......................................................")
      console.log(response?.data?.data)
      console.log("......................................................")
      yield put(SavedAdssearchSuccess(response?.data?.data));      
    }
  } catch (error) {
    yield put(SavedAdsearchError(error));
  }
}
