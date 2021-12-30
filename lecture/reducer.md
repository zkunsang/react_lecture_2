# reducer

useReducer는 reducer와 INITIAL_STATE를 사용한다.
[state, dispatch]함수가 생성되게 된다.

dispatch를 통해 actionType과 action을 넣어준다.

```js
export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <User />
        <Product />
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}

const INITIAL_STATE = {
  user: { name: "mike" },
  product: { name: "iphone" },
};

function reducer(state, action) {
  switch (action.type) {
    case "setUserName":
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };
  }
}
```

Context를 사용하게 되는 경우
Product와 User에서 사용하는 AppContext를 사용하는 녀석이 수정되면 모두가 수정되는 단점이 있다.

Redux는 user만 렌더링 되게 할 수가 있다.

Context로도 가능 어떻게?
UserContext
ProductContext로 나누어서

# react-reducer

```js
export default function App() {
  return (
    <Provider store={store}>
      <User />
      <Product />
    </Provider>
  );
}

const INITIAL_STATE = {
  user: { name: "mike" },
  product: { name: "iphone" },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setUserName":
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
```
