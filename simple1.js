function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "unlike" : "like";

  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(LikeButton), domContainer);
