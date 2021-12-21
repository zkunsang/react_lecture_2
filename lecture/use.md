# 리액트 내장 훅

- useState
- useEffect
- useContext
- useRef
- useMemo
- useCallback
- useReducer
- useImperativeHandle
- useLayoutEffect
- useDebugValue

# useRef

렌더링과 상관없는 값을 저장할 때 사용한다.
useState를 사용하면 렌더링이 발생하게 된다.

```js
export default function App() {
  const itmeIdRef = useRef(-1);

  useEffect(() => {
    timeIdRef.current = setTimeout(() => {}, 1000);
  });

  useEffect(() => {
    if (timeIdRef.current >= 0) {
      setTimeout(timeIdRef.current);
    }
  });
}
```

이전 상태 저장

# useEffect는 렌더가 끝나고 나서 호출된다.

# useMemo render실행 전에 호출된다.

# useCallback 함수 메모이제이션에 특화된 함수

# rendering 될때 마다 함수값은 계속해서 생성되게 된다

```jsx
<UserEdit
  onSave={() => saveToServer(name, age)}
  setName={setName}
  setAge={setAge}
/>;

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log("userEdit render");
  return null;
});
```

이렇게 해도 rendering 될 때마다 saveToServer를 포함하는 함수는 계속해서 호출 되기때문에 onSave가 계속해서 새로운값

이럴때 사용 되는게 useCallback

# 만약 React.memo를 사용하지 않게 되면 불필요한 userEdit render를 하게 된다.

```js
const onSave = useCallback(() => saveToServer(name, age), [name, age]);

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log("userEdit render");
  return null;
});
```

# useReducer

```js
const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
```

변경된 state를 return 해줘야해

```js
function reducer(state, action) {
  switch (action.type) {
    case "setName": {
      return { ...state, name: action.name };
    }
    case "setAge": {
      return { ...state, age: action.age };
    }
    default: {
      return state;
    }
  }
}
```

# useImperativeHadle 상위 컴포넌트로 에게 하위 컴포넌트안에 있는 handler를 전달할 수 있다.

# useEffect함수는 렌더링 결과가 돔에 반영된 후에 비동기로 호출이 된다.

- 의존성 배열이 비어있다면 초기 렌더될때 한번만 호출된다
- 의존성 배열이 null이면 매번 호출된다.

# useLayoutEffect

- useEffect와 비슷하지만 `동기`로 처리가 됨
- 렌더링 결과가 돔에 반영된 직후에 바로 호출
- 연산량이 많으면 브라우저가 먹통이 될 수가있다.
- 특별한 이유가 없다면 useEffect를 사용
- 언제 사용하냐? 돔 요소의 값을 불러들이는 경우 사용

```js
useEffect(() => {
  if (width > 500) {
    setWidth(500);
  }
}, [width]);
```

렌더링이 되고 난 후에 500 이상 사이즈가 되고 나면 깜빡이게 보이는 현상이 발생됨
렌더링 결과 후에 호출 되게 만들어야함

- 실행되는 시점 렌더링을 하고 실제 돔에 반영은 했지만
- 브라우저가 그리기 전에 실행

useEffect는 버튼을 눌러 width를 수정한 후에 2번 호출 된다.
useLayoutEffect역시 동일하게 2번 호출 되지만 그리는 시점이 다르다.

# useDebugValue

- 좀 더 풍부한 정보를 제공해 줄 수 있다.
