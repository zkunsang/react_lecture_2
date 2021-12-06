import React, { useState, useEffect } from "react";
import useUser from "../cra-test/src/useUser";

function Profile({ userId }) {
  const user = useUser(userId);

  return (
    <div>
      {!props && <p>사용자 정보를 가죠오는 중....</p>}
      {props && (
        <>
          <p>{`name is ${user.userId}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

export default React.memo(Profile);
