import { call, takeEvery, put } from "@redux-saga/core/effects";
import { increaseCounter } from "./actions";

export function* worker() {
  yield call(console.log, "Clicked!");
  yield put(increaseCounter.success({}));
}

export function* counterSaga() {
  yield takeEvery(increaseCounter.REQUEST, worker);
}
