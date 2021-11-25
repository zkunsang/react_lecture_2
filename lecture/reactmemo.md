# 메모 사용시

```jsx
<Profile userId={userId} />
<Profile userId={userId % 2} />
<Profile userId={userId === 1 ? 0 : 1} />
```

위에 두개는 React.memo(Profile)이 동작하지 않는다. rendering을 계속하게 된다.
하지만 맨 아래 것은 memo가 정상 동작하게 된다.
