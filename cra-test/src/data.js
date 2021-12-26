const FRIENDS = [
  { name: "zzeuwi", age: 15 },
  { name: "suji", age: 27 },
  { name: "iu", age: 13 },
  { name: "miss son", age: 11 },
];

let nextId = 0;
export function getNextFriend() {
  return { ...FRIENDS[nextId % 4], id: nextId++ };
}
