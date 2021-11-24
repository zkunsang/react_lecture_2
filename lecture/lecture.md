# window.history.pushState("v1", "", "/page1")

state, title, route

# 시작할때 onpopstate 에 함수를 바인딩

```js
useEffect(() => {
  window.onpopstate = function (event) {
    console.log(`location: ${document.location}, state: ${event.state}`);
  };
}, []);
```
