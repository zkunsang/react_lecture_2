import React, { forwardRef, useState, useImperativeHadle } from "react";

function Profile(_, ref) {
  const [name, setName] = useSate("mike");
  const [age, setAge] = useState(0);

  useImperativeHadle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  );
}

export default forwardRef(Profile);
