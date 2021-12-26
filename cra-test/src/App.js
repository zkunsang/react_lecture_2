import React, { useState } from "react";

import { getNextFriend } from "./data";
import FriendPage from "./container/FriendPage";

export default function App() {
  return (
    <div>
      <FriendPage />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
