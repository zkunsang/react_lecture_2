// action type 속성값을 가지고 있음
// todo와 같은 prefix를 사용

store.dispatch({ type: "todo/ADD", title: "영화보기", priority: "high" });
store.dispatch({ type: "todo/REMOVE", id: 123 });
store.dispatch({ type: "todo/REMOVE_ALL" });
