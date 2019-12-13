import App from "fusion-react";
import React from "react";
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  PreloadedStateToken
} from "fusion-plugin-react-redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";

import TodosPlugin from "./plugins/todos";
import Root from "./components/root";

import { rootReducer, getRootSaga, initialState } from "./store";

export default async function start() {
  const app = new App(Root);
  const sagaMiddleware = createSagaMiddleware();

  app.register(ReduxToken, Redux);
  app.register(ReducerToken, rootReducer);
  app.register(PreloadedStateToken, initialState);
  app.register(EnhancerToken, applyMiddleware(sagaMiddleware));

  if (__BROWSER__) {
    setTimeout(() => {
      sagaMiddleware.run(getRootSaga());
    });
  }

  if (__NODE__) {
    app.middleware(require("koa-bodyparser")());
    app.middleware(TodosPlugin);
  }

  return app;
}
