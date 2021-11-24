import React from "react";

function Title(props) {
  console.log("title rendered");
  return <p>{props.title}</p>;
}

export default React.memo(Title);
