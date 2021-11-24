import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("red");

  function onClick() {
    setColor(color === "blue" ? "red" : "blue");
  }

  return (
    <button sytle={{ backgroundColor: color }} onClick>
      좋아요
    </button>
  );
}
