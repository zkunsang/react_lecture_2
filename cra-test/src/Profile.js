import React, { useState, useEffect } from "react";

function Profile(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(props.userId).then((data) => setUser(data));
  }, [props.userId]);

  console.log("Profile rendered");
  return (
    <div>
      {!props && <p>사용자 정보를 가죠오는 중....</p>}
      {props && (
        <>
          <p>{`name is ${props.userId}`}</p>
          <p>{`age is ${props.age}`}</p>
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
      console.log("setTimeout called");
      res(userId % 2 ? USER1 : USER2);
    }, 3500);
  });
}
