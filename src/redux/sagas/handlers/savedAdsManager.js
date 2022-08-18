import { call, put } from "redux-saga/effects";
import { addToSavedAdsError, removeFromSavedAdsError, removeFromSavedAdsSuccess } from "../../ducks/filteredSavedAds";
import {
  // addToSavedAdsError,
  addToSavedAdsSuccess,
  // removeFromSavedAdsError,
  // removeFromSavedAdsSuccess,
  removeFromSkipedSavedFilteredAds,
} from "../../ducks/savedAdsManager";
import { requestAddToSavedAds, requestRemoveFromSavedAds } from "../requests/savedAdsManager";

export function* handleAddToSavedAds({ payload }) {
  console.log("009",payload)
  try {
    const response = yield call(requestAddToSavedAds, payload);

    if (response.status === 200) {//done add succes response
      // yield put(addToSavedAdsSuccess(response.data));
    }
  } catch (error) {
    console.log("009",payload)
    yield put(addToSavedAdsError({error:error,errorId:payload.ad}));
  }
}



export function* handleRemoveFromSavedAds({ payload }) {
  try {
    const response = yield call(requestRemoveFromSavedAds, payload);

    if (response.status === 200) {
      console.log("404 555",response.data)
      yield put(removeFromSavedAdsSuccess(response.data.data[0]));
      // yield put(removeFromSkipedSavedFilteredAds(response.data.data[0]?.id));
    }
  } catch (error) {
    yield put(removeFromSavedAdsError({error:error,AdDetail:payload}));
  }
}
