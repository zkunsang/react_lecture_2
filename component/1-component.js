// 타입 정보
MyComponent.propTypes = {};

// 함수 이름을 작성해 준다.
// 명명된 매개 변수로 작성하도로고 한다.
export default function MyComponent({ prop1, prop2 }) {}

// 대문자로 작성하는게 좋음
// 외부로 빼서 만드는게 좋음 -> 렌더링 할 때마다 호출 되기 때문
const COLUMNS = [
  { id: 1, name: "phoneNumber", width: 200, color: "white" },
  { id: 2, name: "city", width: 100, color: "grey" },
];

const URL_PRODUCT_LIST = "api/products";
function getTotalPrice({ price, total }) {}
