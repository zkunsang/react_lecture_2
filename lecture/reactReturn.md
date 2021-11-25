# React.Fragment는 요소의 순서를 키값으로 가지고 있다.

```jsx
return [<p>안녕</p><p>하세요</p>]
```

위와 같으면 key값에 대한 에러가 발생하지만

```jsx
return [
  <React.Fragment>
    <p>안녕</p>
    <p>하세요</p>
  </React.Fragment>,
];
```

는 문제가 발생하지 않는다.
<></>

# ReactDOM.createPortal같은 경우에 모달에 사용될 수있다.
