import React from "react";
import Style from "./Box.module.css";
import cn from "classnames";

export default function Box({ size }) {
  const isBig = size === "big";

  console.log({
    [Style.big]: isBig,
    [Style.small]: !isBig,
  });

  const test = {
    age: 10,
    name: "ks",
  };

  console.log({ [test.name]: "hello" });

  console.log(Style.big);
  return (
    <div
      className={cn(
        { [Style.box]: true },
        {
          [Style.big]: isBig,
          [Style.small]: !isBig,
        }
      )}
    >
      {isBig ? "큰 버튼" : "작은 버튼"}
    </div>
  );
  // if (size === "big") {
  //   return <div className={cn(Style.box, Style.big)}>큰 박스</div>;
  // } else {
  //   return <div className={cn(Style.box, Style.small)}>작은 박스</div>;
  // }
}
