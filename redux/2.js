// action creator

function addTodo({ title, priority }) {
  return { type: "todo/ADD", title, priority };
}

function removeTodo({ id }) {
  return { type: "todo/REMOVE", id };
}

function removeAllTodo() {
  return { type: "todo/REMOVE_ALL" };
}

store.dispatch(addTodo({ title: "watch movie", priority: "high" }));
store.dispatch(removeTodo({ id: 1 }));
store.dispatch(removeAllTodo());
