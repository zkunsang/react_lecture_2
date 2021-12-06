import React, { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

export default function WithPrinter() {
  const width = useWindowWidth();

  return <div>{`width is ${width}`}</div>;
}
