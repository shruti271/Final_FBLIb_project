import store from "../../store";

import { call, put } from "redux-saga/effects";
import {
  requestCheckAdByFilter,
  requestGetSavedAds,
} from "../requests/filteredSavedAds";
import {
  loadMoresavedFilteredAdsSuccess,
  loadMoresavedFilteredAdsError,
  loadsavedFilteredAdsError,
  loadsavedFilteredAdsSuccess,
  addToSavedAdsFilterLocalSuccess,
  addToSavedAdsFilterLocalError
} from "../../ducks/filteredSavedAds";
// import { addToSkipedSavedFilteredAds } from "../../ducks/savedAdsManager";

export function* handleGetFilteredSavedAds({ payload }) {
  try {
    const response = yield call(requestGetSavedAds, payload);

    if (response.status === 200) {
      console.log("009 come in handler",response?.data)
      yield put(loadsavedFilteredAdsSuccess(response?.data));
    }
  } catch (error) {
    yield put(loadsavedFilteredAdsError(error));
  }
}

export function* handleGetMoreFilteredSavedAds({ payload }) {
  try {
    const response = yield call(requestGetSavedAds, payload);
    const toBeSkipedSavedAdsId = store.getState().savedAdsManager.toBeSkipedSavedAdsId;
    console.log("savedAdsIds", toBeSkipedSavedAdsId);
    console.log("response.data before", response?.data?.data);
    response.data.data = response?.data?.data.filter(ad => !toBeSkipedSavedAdsId.includes(ad?.id));

    console.log("response.data after", response?.data?.data);

    if (response.status === 200) {
      yield put(loadMoresavedFilteredAdsSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(loadMoresavedFilteredAdsError(error));
  }
}//remove

export function* handleCheckAdByFilter({ payload }) {
  try {
    const response = yield call(requestCheckAdByFilter, payload);

    if (response.status === 200) {
      console.log("10001",response?.data)
      yield put(addToSavedAdsFilterLocalSuccess(response?.data?.data));
      console.log("009 handleCheckAdByFilter: ", response?.data?.data?.AdDetails?.id);
      console.log("009",response)
      // if(response?.data?.data?.valid){
      //   yield put((addToSkipedSavedFilteredAdsresponse?.data?.data?.AdDetails?.id));
      // }
    }
  } catch (error) {
    yield put(addToSavedAdsFilterLocalError(error));
  }
}
