import React, { useContext, createContext, useState, useRef } from "react";

export default function App() {
  const boxListRef = useRef({});

  function onClick() {
    for (const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];

      if (ref) {
        const rect = ref.getBoundingClientRect();
      }
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          height: "100%",
        }}
      >
        {BOX_LIST.map((item) => {
          <div
            key={item.id}
            ref={(ref) => (boxListRef.current[item.id] = ref)}
            style={{
              flex: "0 0 auto",
              width: item.width,
              height: 100,
              backgroundColor: "yellow",
              border: "solid 1px red",
            }}
          >{`box_${item.id}`}</div>;
        })}
      </div>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 71 },
  { id: 3, width: 72 },
  { id: 4, width: 73 },
  { id: 5, width: 74 },
  { id: 6, width: 75 },
  { id: 7, width: 76 },
];
