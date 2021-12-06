# render props Consumer사이에 함수형으로 작성되는데 함수형이 아니면 에러가 난다.

```js
function Greeting() {
  return (
    <UserContext.Consumer>
      {/* {(username) => <p>{`${username}님 안녕하세요`}</p>} */}
      {`${username}님 안녕하세요`}
    </UserContext.Consumer>
  );
}
```

# Provider 와 Consumer

Provider의 value값을

Consumer의 render props에서의 안에 값들

```js
export default function App() {
  return (
    <div>
      <UserContext.Provider value={{ test: 123 }}>
        <div>상단메뉴</div>
        <Profile></Profile>
        <div>하단 메뉴</div>
      </UserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/* {} */}
    </div>
  );
}

function Greeting() {
  return (
    <UserContext.Consumer>
      {(test) => <p>{`${test.test}님 안녕하세요`}</p>}
      {/* {`${username}님 안녕하세요`} */}
    </UserContext.Consumer>
  );
}
```

# Provider는 현재 있는 Consumer부터 한단계씩 올라가다가 Provider를 못만나면 최초 초기값

createContext값을 가져오게된다.

# 한번만 렌더링 되게 하기

```js
const Profile = React.memo(function () {
  console.log("Profile render");
  return (
    <div>
      <Greeting />
      {/* {} */}
    </div>
  );
});
```

# hook을 이용한 방법

```js
const username = useContext(UserContext);
return <p>{`${username}님 안녕하세요`}</p>;
```
