import React, { useContext, createContext, useReducer } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const AppContext = createContext({});
const DispatchContext = createContext(() => {});

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

function reducer(state, action) {
  switch (action.type) {
    case "setUserName":
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };
  }
}

const store = createStore(reducer);

function User() {
  console.log("User render");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button onClick={() => dispatch({ type: "setUserName", name: "john" })}>
        사용자 이름 수정
      </button>
    </div>
  );
}

function Product() {
  console.log("product render");

  const product = useSelector((state) => state.product);
  return <p>{`제품 이름: ${product.name}`}</p>;
}
