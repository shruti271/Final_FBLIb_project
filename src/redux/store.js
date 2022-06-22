import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import mediaReducer from "./ducks/mediaAds";
import watcherSaga from "./sagas/rootSaga";
import savedAdsReducer from "./ducks/saveAds";
import accountSettingsReducer from "./ducks/accountSettings";

const reducer = combineReducers({
  allMediaAds: mediaReducer,
  savedAds: savedAdsReducer,
  accountSettings: accountSettingsReducer,
});

const sagaMiddleWares = createSagaMiddleware();
const middleWares = [sagaMiddleWares];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleWares));

sagaMiddleWares.run(watcherSaga);

export default store;
