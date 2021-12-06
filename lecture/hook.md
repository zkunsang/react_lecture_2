# 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.

if문안에서 사용하면 안된다.
for문 안에서 사용하면 안된다.
함수 안에서 훅을 호출해도 안됩니다.

```js
function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  if (!user) return null;

  const [test, setTest] = useState(0);

  return (
    <div>
      {!user && <p>사용자 정보를 가죠오는 중....</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}
```

# 내가 지금까지 궁금했던 useState를 햇을 때 어떻게 구분하냐! 그것은 순서이다.

useState를 쓰면서 어떠한 정보도 주지 않고 아이디도 없고 받는 변수 밖에 없는데 해당 내용을 어디선가 관리한다고 하는데 그것이 바로 `순서`  
컴포넌트안에서 useState에 대한 아이디를

위와 같은 실수는 하면안된다. 어쩔때는 호출되고 어쩔때는 호출되지 않으면 안된다.

# rule

```js
export function useHook() {
  hooks.push(hookData);
}

function process_a_componenet_rendering(component) {
  hooks = [];
  component();
  let hooksForThisComponent = hooks;
  hooks = null;
}
```

배열에 순차적으로 저장됨

# 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출되어야 한다.
