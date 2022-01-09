# 리덕스

- 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있다.
- 미들웨어를 활용한 다양한 기능 추가
- 강력한 미들웨어 라이브러리( redux-saga)
- 로컬 스토리지에 데이터 저장하기 및 불러오기

- SSR시 데이터 전달이 간편하다(서버 사이드 렌더링)
- 리액트 콘텍스트보다 효율적인 렌더링 가능

# 리액트의 컨택스트 API를 사용하면 되지 않냐? 리덕스가 더 좋음

# 리덕스의 구조

액션 미들웨어 리듀서 스토어 뷰

뷰쪽에서 액션을 발생
액션이 발생되면 미들웨어가 처리
리듀서에서는 해당 액션에 의해 상태값이 어떻게 변화되는지 새로운 상태값을 스토어에 알려주면 스토어에 저장

이 데이터에 관심있는 옵저버 -> 뷰에게 알려줌

단방향 리덕스의 장점

# 리덕스의 리턴값

리덕스의 리턴값이 next

```js
const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;

  if (!delay) {
    return next(action); // reducer가 되고 reducer의 리턴값이 state이므로 dispatch의 값이 state가 된다.
  }
  console.log("delayAction", delay);

  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  }; // 요기로 오면 함수를 리턴하게 된다.
};

const store = createStore(myReducer, applyMiddleware(delayAction));
const ret = store.dispatch({ type: "someAction", meta: { delay: 3000 } });
console.log(ret);
```
