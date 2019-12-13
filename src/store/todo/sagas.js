import { call, takeEvery, put } from "@redux-saga/core/effects";
import { saveToDoItem, getToDoList } from "./actions";
import { apiClient } from '../helpers';


export function* saveToDoItemWorker(action) {
  const { item } = action.payload;
  try {
    yield call(apiClient.post, {
      path: "/api/todos",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item })
    });
    yield put(saveToDoItem.success({ item }));
  }
  catch (error) {
    yield put(saveToDoItem.failure({ error }));
  }
}


export function* getToDoListWorker(action) {
  try {
    const items = yield call(apiClient.get, {
      path: "/api/todos",
    });
    yield put(getToDoList.success({ items }));
  }
  catch (error) {
    yield put(getToDoList.failure({ error }));
  }
}

export function* todoSaga() {
  yield takeEvery(saveToDoItem.REQUEST, saveToDoItemWorker);
  yield takeEvery(getToDoList.REQUEST, getToDoListWorker);

  yield put(getToDoList.request());
}
