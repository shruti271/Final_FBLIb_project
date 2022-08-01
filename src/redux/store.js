import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import filteredAdsReducer from "./ducks/filteredAds";
import watcherSaga from "./sagas/rootSaga";
import accountSettingsReducer from "./ducks/accountSettings";
import isAliveReducer from "./ducks/session";
import subscriptionReducer from "./ducks/subscription";
import allAdsPeramsReducer from "./ducks/allAdsPerams";
import savedAdsPeramsReducer from "./ducks/savedAdsPerams";
import subAllAdsReducer from "./ducks/subAllAds";
import filteredSavedAdsReducer from "./ducks/filteredSavedAds";
import buttonTypesReducer from "./ducks/buttonType";
import savedAdsManagerReducer from "./ducks/savedAdsManager";

const reducer = combineReducers({
  filteredAds: filteredAdsReducer,
  filteredSavedAds: filteredSavedAdsReducer,
  buttonTypes: buttonTypesReducer,
  accountSettings: accountSettingsReducer,
  subAllAds: subAllAdsReducer,
  isAliveData: isAliveReducer,
  subscriptionData: subscriptionReducer,
  allAdsPerams: allAdsPeramsReducer,
  savedAdsPerams:savedAdsPeramsReducer,
  savedAdsManager: savedAdsManagerReducer
});

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const sagaMiddleWares = createSagaMiddleware();
const middleWares = [sagaMiddleWares];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

export const getStore = () => {
  return store;
}
// const store = createStore(reducer, applyMiddleware(...middleWares));

sagaMiddleWares.run(watcherSaga);

export default store;
