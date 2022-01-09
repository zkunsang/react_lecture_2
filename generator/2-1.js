function* f1() {
  console.log("f1 - 1");
  yield 10;
  console.log("f1 - 2");
  yield 20;
  console.log("f1 - 3");

  return "finished";
}

const gen = f1();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// iterator
// -next 메소드를 가지고 있다.
// - next메소느느 value와 done을 가진 객체를반환한다.
// - done 속성ㄱ밧은 작업이 끝났을 때 참이 된다.

// 다음 조건을 만족하면 iterable한 객체이다
// - Symbol.iterator 속성값으로 함수를 가지고 있다.
// - 해당 함수를 호출하면 반복자(iterator)를 반환한다.
