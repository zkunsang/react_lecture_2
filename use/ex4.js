import React, { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "setName", name: e.currentTarget.value })
        }
      />

      <input
        type="number"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: "setAge", age: e.currentTarget.value })
        }
      />
    </div>
  );
}

const INITIAL_STATE = { name: "empty", age: 0 };
const MAX_AGE = 50;

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age > MAX_AGE ? MAX_AGE : action.age };
    default:
      return state;
  }
}
