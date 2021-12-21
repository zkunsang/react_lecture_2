useEffect안에서
inputRef.current.focus()를 하는것에 주목을 해야한다.

돔요소를 다 그리고 난 후에 접근이 가능

```js
useEffect(() => {
  inputRef.current.focus();
}, []);
```

# useRef를 사용하던 것을 useState로 사용할 수는 없을까?

```js
ref={(ref) =>
    setBoxListRef((r) => {
        return { ...r, [item.id]: ref };
    })
}
```

이런식으로 하면 될거 같지만 setBoxListRef를 하는 순간 dom요소를 다시 그리게 되어서 infinite에러가 발생하게 된다

# ref는 dom요소에 직접 접글할 때 사용됨

# 돔 요소는 어떠한 것도 넣을 수 있다.

#

```js
const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <div>
      <button onClick={onClick} ref={ref}>
        저장
      </button>
    </div>
  );
});
<Button ref={buttonRef} />;
```
