# 명시적으로 useOnMount와 같은 훅을 만드는게 중요하다.

# userId가 mount될때만 실행된다고 하면

```js
import { useEffect } from "react";

export default function useOnMount(effect) {
  useEffect(effect, []);
}

useOnMount(() => {
  fetchUser(userId, needDetail).tehn((data) => setUser(data));
});
```

# 의존성 배열에 값을 안넣을 때 무슨 문제가 발생하는지

# useEffect에는 async await을 사용할 수 없다. Promise역시 useEffect는 Promise형태가 아닌 함수 형태만 반환해야 한다.

```js
useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);
```

# 만약 async await을 사용하고 싶다고 하면 아래와 같이 사용해야한다.

```js
useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }

  fetchAndSetUser();
}, [userId]);
```

# 위와같은 상황에서 fetchAndSetUser를 다른 곳에서 사용하고 싶다고 하면 밖으로 빼야한다.

```js
function Profile({ userId }) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchAndSetUser(needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    }

    fetchAndSetUser(false);
  }, [userId]);
}
```

근데 아래와 같이 빼게 되면 의존성 배열 안에 들어가야하는게 렌더링 될 때마다 변경되는 fetchAndSetUser함수가 되어야 한다. (ex.jsx에서 onClick에서)

```js
function Profile({ userId }) {
  const [user, setUser] = useState();
  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }

  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);
}
```

이럴 때는 useCallback
userId가 변경될 때만 저 함수가 생성된다.

```js
function Profile({ userId }) {
  const [user, setUser] = useState();
  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );

  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);
}
```

# 의존성 배열을 사용하지 않는것이 좋다. 의존성 배열을 관리하는게 힘들다.

의존성 배열에 들어가는 함수는 자주 변경되지 않도록 신경써야 한다.

# useEffect안에서 조건을 걸어 처리한다.

```js
function Profile({ userId }) {
  const [user, setUser] = useState();
  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }

  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchAndSetUser(false);
    }
  });
}
```

#

```js
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
    }

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  });
}
```
