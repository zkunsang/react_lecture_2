import React, { useState, useEffect } from "react";
import WithPrinter from "./WithPrinter";

export default function App() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount((v) => v + 1);
  }

  return (
    <div>
      <WithPrinter />
      {/* <Profile userId={userId} /> */}
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
