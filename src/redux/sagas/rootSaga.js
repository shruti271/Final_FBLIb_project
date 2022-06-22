import { all, fork, takeLatest } from 'redux-saga/effects';
import { LOAD_MEDIA_START } from "../ducks/mediaAds";
import { CREATE_SAVEADS_START, DELETE_SAVEADS_START, LOAD_SAVEADS_START } from '../ducks/saveAds';
import { handleGetMedia } from "./handlers/mediaAds";
import { handleCreateSavedAds, handleDeleteSavedAds, handleGetSavedAds } from './handlers/savedAds';

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

const mediaSagas = [
	fork(onLoadMeida),
	
];

const savedAdsSagas = [
	fork(onLoadSavedAds),
	fork(onCreateSavedAds),
	fork(onDeleteSavedAds),
	
];
export default function* watcherSaga() {
	yield all([
		...mediaSagas,
		...savedAdsSagas
	]);
}