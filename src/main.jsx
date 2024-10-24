import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const person = { name: "lance", age: 24 };

// // const { name, age } = person;
// const name = person.name;
// const age = person.age;

// const pair = ["shoe", "dice"];

// // const [item1, item2] = pair;
// const item1 = pair[0];
// const item2 = pair[1];

// // const [value, setValue] = useState("lance")
// const returnValue = useState("lance")
// const value = returnValue[0]
// const setValue = returnValue[1]

// const numbers = [0, 20, 2, 5, 8];

// const evenNumbers = numbers.reduce((accumulator, current) => {
//   if (current % 2 === 0) {
//     accumulator.push(current);
//   }
//   return accumulator;
// }, []);

// const sum = numbers.reduce((total, currentNumber) => total + currentNumber);

// let sum = 0;
// for (const number of numbers) {
//   sum = sum + number;
// }

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// const evenNumbers = [];
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// }

// const doubleNumbers = numbers.map((number) => number * 2);
