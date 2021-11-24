import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";

export default function App() {
  return (
    <div style={{ padding: 20, border: "5px solid gray" }}>
      <BrowserRouter>
        <Link to="/">홈</Link>
        <Link to="/photo">사진</Link>
        <Link to="/rooms">방소개</Link>
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h2>이곳은 홈페이지 입니다.</h2>;
}

function Photo() {
  return <h2>여기서 사진을</h2>;
}
