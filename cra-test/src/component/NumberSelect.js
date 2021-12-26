import React, { useState } from "react";

import { getNextFriend } from "../data";
import FriendList from "./FriendList";

export default function NumberSelect({ onChange, options, value, label }) {
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);

    onChange(value);
  }

  return (
    <div>
      <select onChange={onChangeOption} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {label}
    </div>
  );
}
