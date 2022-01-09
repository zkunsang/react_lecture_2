// 세번 감싸진 이유 store > next 를 사용하기 위해서

const myMiddleware = (store) => (next) => (action) => next(action);
