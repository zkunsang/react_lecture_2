const friends = [
  { name: "name1", age: 15 },
  { name: "name2", age: 167 },
  { name: "name3", age: 17 },
  { name: "name4", age: 18 },
];

const timelines = [
  { desc: "it tastes good", likes: 0 },
  { desc: "i am so cool", likes: 10 },
  { desc: "i go to the hotel", likes: 20 },
  { desc: "I bought a expensive phone", likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;

  return function getNextTimeline() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
