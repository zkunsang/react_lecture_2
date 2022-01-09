import { callApiLike } from "../cra-test/src/common/api";

function* loginFlow() {
  while (true) {
    const { id, password } = yield take(types.LOGIN);
    const userInfo = yield callApiLike(callApiLogin, id, password);
    yield put(types.SET_USER_INFO, userInfo);
    yield take(types.LOGOUT);
    yield callApiLike(callApiLogOut, id);
    yield put(types.SET_USER_INFO, null);
  }
}
