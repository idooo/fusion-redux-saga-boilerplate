import { increaseCounter } from "./actions";

export const initialState = {
  value: 0,
  isInProgress: false,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case increaseCounter.REQUEST: {
      return {
        ...state,
        isInProgress: true,
      };
    }
    case increaseCounter.SUCCESS: {
      return {
        ...state,
        isInProgress: false,
        value: state.value + 1
      };
    }

    default:
      return state;
  }
}
