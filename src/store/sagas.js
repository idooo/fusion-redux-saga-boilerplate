import { all, fork } from "@redux-saga/core/effects";
import { counterSaga } from "./counter/sagas";
import { todoSaga } from "./todo/sagas";

export const getRootSaga = () => {
  return function* rootSaga() {
    yield all([fork(counterSaga), fork(todoSaga)]);
  };
};
