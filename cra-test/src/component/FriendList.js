import React, { useState } from "react";

import { getNextFriend } from "./data";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
      ))}
    </ul>
  );
}
