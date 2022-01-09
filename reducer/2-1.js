const state = {
  user: {
    name: "mike",
    friends: [
      { name: "jane", age: 23 },
      { name: "jake", age: 24 },
    ],
  },
  products: [],
};

//불변 객체 관리는 아래와 같이 변경 여부를 쉽게 확인할 수 있다.
prevState.user === nextState.user;

prevState.products === nextState.products;
prevState.friends[0] === nextState.friends[0];
