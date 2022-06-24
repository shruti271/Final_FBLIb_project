import { all, fork, takeLatest } from "redux-saga/effects";
import { LOAD_MEDIA_START } from "../ducks/mediaAds";
import {
  CREATE_SAVEADS_START,
  DELETE_SAVEADS_START,
  LOAD_SAVEADS_START,
} from "../ducks/saveAds";
import { handleGetMedia } from "./handlers/mediaAds";
import {
  handleGetAccountSettings,
  handleUpdateAccountSettings,
} from "./handlers/accountSettings";
import {
  handleCreateSavedAds,
  handleDeleteSavedAds,
  handleGetSavedAds,
} from "./handlers/savedAds";
import {
  LOAD_ACCOUNT_SETTINGS_START,
  UPDATE_ACCOUNT_SETTINGS_START,
} from "./../ducks/accountSettings";
import { LOAD_SUBALLMEDIA_START } from "../ducks/subAllAds";
import { handleGetSubAllMedia } from "./handlers/subAllAds";

function* onLoadMeida() {
  yield takeLatest(LOAD_MEDIA_START, handleGetMedia);
}

function* onLoadSavedAds() {
  yield takeLatest(LOAD_SAVEADS_START, handleGetSavedAds);
}

function* onCreateSavedAds() {
  yield takeLatest(CREATE_SAVEADS_START, handleCreateSavedAds);
}

function* onDeleteSavedAds() {
  yield takeLatest(DELETE_SAVEADS_START, handleDeleteSavedAds);
}

function* onGetAccountSettings() {
  yield takeLatest(LOAD_ACCOUNT_SETTINGS_START, handleGetAccountSettings);
}

function* onUpdateAccountSettings() {
  yield takeLatest(UPDATE_ACCOUNT_SETTINGS_START, handleUpdateAccountSettings);
}

function* onLoadSubAllMeida() {
  yield takeLatest(LOAD_SUBALLMEDIA_START, handleGetSubAllMedia);
}

const mediaSagas = [fork(onLoadMeida)];

const savedAdsSagas = [
  fork(onLoadSavedAds),
  fork(onCreateSavedAds),
  fork(onDeleteSavedAds),
];

const accountSettingsSagas = [
  fork(onGetAccountSettings),
  fork(onUpdateAccountSettings),
];

const suballadsSagas = [fork(onLoadSubAllMeida)];

export default function* watcherSaga() {
  yield all([
    ...mediaSagas,
    ...savedAdsSagas,
    ...accountSettingsSagas,
    ...suballadsSagas,
  ]);
}
