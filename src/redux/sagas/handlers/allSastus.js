import { call, put } from "redux-saga/effects";
import { setCatSatusError, setCatSatusSuccess } from "../../ducks/appliedFilterData";
// import { setCatSatusError } from "../../ducks/mediaAds";
// import { setCatSatusError, setCatSatusSuccess } from "../../ducks/filterData";
// import { setCatSatusError, setCatSatusSuccess } from "../../ducks/mediaAds";
// import {  setCatSatusError, setCatSatusSuccess } from "../../ducks/filtered_Data";
import { requestCatSatusData } from "../requests/allStatus";


export function* handleGetCatStatus() {
  try {
    const response = yield call(requestCatSatusData);
    console.log("response", response);

    if (response.status === 200) {
      console.log("............................................9999999999999999..........")
      console.log(response?.data?.data)
      console.log(".............................................9999999999.........")
      yield put(setCatSatusSuccess(response?.data?.data.cta_status));      
    }
  } catch (error) {
    yield put(setCatSatusError(error));
  }
}
