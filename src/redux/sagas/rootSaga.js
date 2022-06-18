import { all, fork, takeLatest } from 'redux-saga/effects';
import { LOAD_MEDIA_START } from "../ducks/mediaAds";
import { handleGetMedia } from "./handlers/mediaAds";

function* onLoadMeida() {
	yield takeLatest(LOAD_MEDIA_START, handleGetMedia);
}

const mediaSagas = [
	fork(onLoadMeida),
	
];

export default function* watcherSaga() {
	yield all([
		...mediaSagas,
	]);
}