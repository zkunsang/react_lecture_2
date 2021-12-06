import React, { useState, useEffect } from "react";

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {!user && <p>사용자 정보를 가죠오는 중....</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

export default React.memo(Profile);
const USER1 = { name: "mike", age: 23 };
const USER2 = { name: "jane", age: 31 };

function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(userId);
      res(userId % 2 ? USER1 : USER2);
    }, 1000);
  });
}
