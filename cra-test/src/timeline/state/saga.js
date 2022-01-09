import { all, call, put, takeLeading, debounce } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../common/api";

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue("error", ""));

  try {
    yield call(callApiLike); // 요기서 예외가 발생 할 수 있음
  } catch (error) {
    yield put(actions.setValue("error", error));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}

export default function* fetch() {
  yield all([
    takeLeading(types.REQUEST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText), // 0.5초 기다렸다 더이상
  ]);
}

export function* trySetText(action) {
  yield put(actions.setValue("text", action.text));
}
// [디바운스]
// ㅇ

// takeLeading 뒤에 들어오는것을 무시해준다.
// takeLatest

// const a = take(types.REQUEST_LIKE);
// const b = put(actions.setLoading(false));
// const c = call(callApiLike);

// console.log({a , b, c});

// const logResult = {
//     a: {
//         TAKE: {
//             pattern: 'timeline/REQUEST_LIKE'
//         }
//     },
//     b: {
//         PUT: {
//             channel: null,
//             action: {
//                 type: 'timeline/SET_LOADING',
//                 isLoading: false
//             }
//         }
//     },
//     c: {
//         CALL: {
//             context: null,
//             fn: callApiLike,
//             args: []
//         }
//     }
// }
