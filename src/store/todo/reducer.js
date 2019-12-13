import { getToDoList, saveToDoItem } from "./actions";

export const initialState = {
  items: [],
  isGetInProgress: false
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case saveToDoItem.SUCCESS: {
      const { item } = action.payload;
      return {
        ...state,
        items: [...state.items, item]
      };
    }
    case getToDoList.REQUEST: {
      return {
        ...state,
        isGetInProgress: true
      };
    }
    case getToDoList.SUCCESS: {
      return {
        ...state,
        isGetInProgress: false,
        items: action.payload.items
      };
    }

    default:
      return state;
  }
}
