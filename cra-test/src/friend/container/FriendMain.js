import React, { useEffect, useReducer } from "react";
import store from "../../common/store";

import { getNextFriend } from "../../common/mockData";
import { addFriend, setShowLimit, setValue } from "../state";
import FriendList from "../component/FriendList";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import {
  getAgeLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
  getShowLimit,
} from "../state/selector";

export default function FriendMain() {
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
    useSelector((state) => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ]);

  const dispatch = useDispatch();
  function onAdd() {
    const timeline = getNextFriend();
    store.dispatch(addFriend(timeline));
  }

  console.log("[FriendMain] render!");
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(setValue("ageLimit", v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setValue("showLimit", v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령 제한 적용"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
