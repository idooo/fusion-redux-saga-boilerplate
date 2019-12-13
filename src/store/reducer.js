import { combineReducers } from "redux";
import {
  counterReducer,
  initialState as counterInitialState
} from "./counter/reducer";
import { todoReducer, initialState as todoInitialState } from "./todo/reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});

export const initialState = {
  counter: counterInitialState,
  todo: todoInitialState
};
