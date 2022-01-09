import prdouce from "immer";

export function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    return prdouce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

export function createSetValueAction(type) {
  return (key, value) => ({ type, key, value });
}

export function setValueReducer(state, action) {
  state[action.key] = action.value;
}
