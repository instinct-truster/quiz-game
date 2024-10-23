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
