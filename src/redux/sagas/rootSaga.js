import { all, fork, takeLatest } from "redux-saga/effects";
import { LOAD_FILTERED_ADS_START } from "../ducks/filteredAds";
import { handleGetFilteredAds } from "./handlers/filteredAds";
import {
  handleGetAccountSettings,
  handleUpdateAccountSettings,
} from "./handlers/accountSettings";
import {
  LOAD_ACCOUNT_SETTINGS_START,
  UPDATE_ACCOUNT_SETTINGS_START,
} from "./../ducks/accountSettings";
import { LOAD_ISALIVE_START } from "../ducks/session";
import { handleGetIsAlive } from "./handlers/session";
import { LOAD_SUBSCRIPTION_START } from "../ducks/subscription";
import { handleGetSubscription } from "./handlers/subscription";
import {
  LOAD_SUBALLADS_START,
  LOAD_MORE_SUBALLADS_START,
} from "../ducks/subAllAds";
import {
  handleGetSubAllAds,
  handleGetMoreSubAllAds,
} from "../sagas/handlers/subAllAds";
import {
  handleAddToSavedAds,
  handleCheckAdByFilter,
  handleGetFilteredSavedAds,
  handleRemoveFromSavedAds,
} from "./handlers/filteredSavedAds";
import {
  ADD_TO_SAVED_ADS_START,
  ADD_TO_SAVED_FILTERED_AD_LOCAL_START,
  LOAD_SAVED_FILTERED_ADS_START,
  REMOVED_FROM_SAVED_ADS_START,
} from "../ducks/filteredSavedAds";
import { GET_BUTTON_TYPES_START } from "../ducks/buttonType";
import { handleGetButtonType } from "../sagas/handlers/buttonType";
import { LOAD_SINGLEAD_START } from "../ducks/singleAdsData";
import { handleGetSingleAdData } from "./handlers/singleAdsData";

function* onAddToSavedFilterLocal() {
  yield takeLatest(ADD_TO_SAVED_FILTERED_AD_LOCAL_START, handleCheckAdByFilter);
}

function* onLoadFilteredAds() {
  yield takeLatest(LOAD_FILTERED_ADS_START, handleGetFilteredAds);
}

function* onLoadFilteredSavedAds() {
  yield takeLatest(LOAD_SAVED_FILTERED_ADS_START, handleGetFilteredSavedAds);
}

function* onAddToSavedAds() {
  yield takeLatest(ADD_TO_SAVED_ADS_START, handleAddToSavedAds);
}

function* onRemoveFromSavedAds() {
  yield takeLatest(REMOVED_FROM_SAVED_ADS_START, handleRemoveFromSavedAds);
}

function* onLoadIsAlive() {
  yield takeLatest(LOAD_ISALIVE_START, handleGetIsAlive);
}

function* onLoadSubscription() {
  yield takeLatest(LOAD_SUBSCRIPTION_START, handleGetSubscription);
}

function* onGetAccountSettings() {
  yield takeLatest(LOAD_ACCOUNT_SETTINGS_START, handleGetAccountSettings);
}

function* onUpdateAccountSettings() {
  yield takeLatest(UPDATE_ACCOUNT_SETTINGS_START, handleUpdateAccountSettings);
}

function* onLoadSubAllAds() {
  yield takeLatest(LOAD_SUBALLADS_START, handleGetSubAllAds);
}

function* onLoadMoreSubAllAds() {
  yield takeLatest(LOAD_MORE_SUBALLADS_START, handleGetMoreSubAllAds);
}

function* onGetButtonTypes() {
  yield takeLatest(GET_BUTTON_TYPES_START, handleGetButtonType);
}
function* onGetSingleAdData() {
  yield takeLatest(LOAD_SINGLEAD_START, handleGetSingleAdData);
}

const filteredAdsSagas = [fork(onLoadFilteredAds)];
const filteredSavedAdsSagas = [
  fork(onLoadFilteredSavedAds),
  fork(onAddToSavedAds),
  fork(onRemoveFromSavedAds),
  fork(onAddToSavedFilterLocal),
];
const isAliveSagas = [fork(onLoadIsAlive)];
const subscriptionSagas = [fork(onLoadSubscription)];
const buttonTypesSagas = [fork(onGetButtonTypes)];
const accountSettingsSagas = [
  fork(onGetAccountSettings),
  fork(onUpdateAccountSettings),
];
const suballadsSagas = [fork(onLoadSubAllAds), fork(onLoadMoreSubAllAds)];
const singleAdDataSagas = [fork(onGetSingleAdData)];

export default function* watcherSaga() {
  yield all([
    ...filteredAdsSagas,
    ...filteredSavedAdsSagas,
    ...buttonTypesSagas,
    ...accountSettingsSagas,
    ...suballadsSagas,
    ...isAliveSagas,
    ...subscriptionSagas,
    ...singleAdDataSagas,
  ]);
}
