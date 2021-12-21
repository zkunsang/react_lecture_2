import React from "react";
import useChangeAppState, { STATE_START, STATE_RUNNING } from "./useChangeApp";

export default function App() {
  const [state, next] = useChangeAppState(true);

  const msg =
    state === STATE_START
      ? "앱 시작"
      : state === STATE_RUNNING
      ? "앱 시작"
      : "앱 종료";

  return (
    <div>
      <p>{msg}</p>
      <button onClick={next}>next</button>
    </div>
  );
}
