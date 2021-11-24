function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "unlike" : "like";

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>{text}</button>
    </div>
  );
  // return React.createElement(
  //   "button",
  //   { onClick: () => setLiked(!liked) },
  //   text
  // );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div>
        <span>현재 카운트: </span>
        <span style={{ marginRight: 10 }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(Container), domContainer);
