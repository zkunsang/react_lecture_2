import React, { useState, useEffect } from "react";

export default function WithPrinter() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    console.log("useEffect - 1");
    window.addEventListener("resize", onResize);
    return () => {
      console.log("useEffect - 2");
      window.removeEventListener("resize", onResize);
    };
  });

  return <div>{`width is ${width}`}</div>;
}
