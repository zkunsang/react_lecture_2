import prdouce from "immer";

export default function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    return prdouce(state, (draft) => {
      const handler = handlerMap(action.type);
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
