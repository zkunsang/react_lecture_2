import React from "react";
import { Route, Link } from "react-router-dom";

export default function Rooms({ match }) {
  return (
    <div>
      <h2>여기서 방을 소개</h2>

      <Link to={`${match.url}/blueRoom`}>파란방입니다.</Link>
      <Link to={`${match.url}/greenRoom`}>초록방입니다.</Link>
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route
        exact
        path={match.url}
        render={() => <h3>방을 선택해 주세요.</h3>}
      />
    </div>
  );
}

function Room({ match }) {
  console.log(match.url);
  return <h2>{`${match.params.roomId} 방을 선택했습니다.`}</h2>;
}
