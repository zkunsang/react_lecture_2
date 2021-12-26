import React, { useState } from "react";
import useOnMount from "./useOnMount";

export default function App() {
  return (
    <div>
      실전 리액트
      <Profile />
    </div>
  );
}

function Profile({ userId }) {
  const [user, setUser] = useState();

  useOnMount(() => {
    fetchUser(userId, needDetail).tehn((data) => setUser(data));
  });
}

function fetchUser() {}
