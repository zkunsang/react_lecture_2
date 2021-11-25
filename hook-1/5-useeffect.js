import React, { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("useEffect has called");
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

const USER1 = { name: "mike", age: 23 };
const USER2 = { name: "jane", age: 31 };

function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("setTimeout called");
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
