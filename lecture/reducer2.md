## 불변 객체 관리는 아래와 같이 변경 여부를 쉽게 확인할 수 있다.

## immer 사용을 추천

## 서버 api를 리듀서에서 호출 하면 안된다.

## 랜덤값을 넣으면 안된다.

## useSelector 값에서 렌더링 여부를 지정할 수 있다.

const [firends, friends2] = useSelector(state => [state.friend.friends, state.friend.friends2], shallowEqual);

## useSelector state에 변경 점이 있다면 useSelector안에 함수가 실행 되게 된다.

## reslect의 createSelector는 메모이 제이션을 지원한다.

컴포넌트안에는 필터 연산을 따로 만들어서 관리하는게 좋다.
메모이제이션 기능을 사용하려고 하면 어렵다. -> 성능이슈가 있으면 대응을 하는게 좋다.
