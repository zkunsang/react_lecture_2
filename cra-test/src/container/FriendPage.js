import React, { useState } from "react";

import { getNextFriend } from "./data";
import FriendList from "./component/FriendList";
import NumberSelect from "./component/NumberSelect";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLimit, setNameLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);

  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  return (
    <div>
      <button onClick={onAdd}>add Friends</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label="세 이하만"
        onChange={setAgeLimit}
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        value={nameLimit}
        options={NAME_LIMIT_OPTIONS}
        label="세 이하만"
        onChange={setNameLimit}
      />
      <FriendList friends={friendsWithAgeLimit} />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

const MAX_NAME_LIMIT = 3;
const NAME_LIMIT_OPTIONS = [15, 20, 25, MAX_NAME_LIMIT];
