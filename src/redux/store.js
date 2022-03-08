import { applyMiddleware, compose, createStore } from "redux";
import appReducer from "./reducers";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
