import { put, take } from "@redux-saga/core/effects";
import fetch from "isomorphic-fetch";

export const createAction = prefix => {
  const type = `${prefix}_REQUEST`;
  const action = (payload = {}) => ({ type, payload });

  action.payload = {};
  action.REQUEST = type;
  action.SUCCESS = `${prefix}_SUCCESS`;
  action.FAILURE = `${prefix}_FAILURE`;
  action.request = (payload = {}) => ({ type: action.REQUEST, payload });
  action.success = (payload = {}) => ({ type: action.SUCCESS, payload });
  action.failure = error => ({
    type: action.FAILURE,
    payload: error,
    error: true
  });

  action.call = function*(payload) {
    yield put(action(payload));
    const result = yield take([action.SUCCESS, action.FAILURE]);
    return result;
  };

  return action;
};

const client = {};
["get", "post", "put", "patch", "delete"].forEach((method) => {
  client[method] = ({ path, ...rest }) => {
    const request = new Request(path, {
      method: method.toUpperCase(),
      credentials: "include",
      mode: "cors",
      ...rest,
    });

    return fetch(request).then((response) => {
      return response.text();
    });
  };
});

export const apiClient = client;

