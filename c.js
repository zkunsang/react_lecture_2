import { sayHello } from "./b.js";

console.log("module_c");

export const sayHello2 = () => {
  console.log("hello2");
  sayHello();
  sayHello();
};
