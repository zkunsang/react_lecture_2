# useEffect

부수 효과
useEffect함수에 마지막 인자가 빈 배열이면 mount될 때만 호출
의존성 배열

```js
const value = userId + 10;
useEffect(() => {
  console.log(value);
  getUserApi(props.userId).then((data) => setUser(data));
}, [props.userId, value]);
```

getUserApi는 `외부함수`라 작성하지 않아도 되고  
setUser는 값이 변경되지 않는다는게 보장됨
상태 변경 함수는 의존성 배열에 넣지 않아도 된다.
지역 변수
`지역 함수` => 렌더링 될 때마다 생성는 함수가 된다. 그래서 warning이 뜨고 useCallback을 사용해야한다.

# useEffect의 리턴 함수

```jsx
return () => {
  window.removeEventListener;
};
```

unmount되기 직전에 , 다음 부수효과 이전에 실행

[] 빈 배열이면 mount될때 생성되고 unm

의존성 배열이 없으면 매 함수 호출 때마다 부수효과가 이러난다.
되
