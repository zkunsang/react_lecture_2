function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_ALL:
      return {
        ...state,
        todos: [],
      };
  }
}