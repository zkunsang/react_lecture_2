# 속성값은 불변 변수이다 props는 불변 부모

```js
function Title(props) {
  console.log("title rendered");
  props.title = 10;
  return <p>{props.title}</p>;
}
```

# 상태값역시 불변 값으로 관리하는게 좋다.

const [count, setCount] = useState(0);  
보다는  
const [count, setCount] = useState({value: 1})  
로 관리 하는게 좋다.
