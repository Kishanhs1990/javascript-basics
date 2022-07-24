import { useState } from "react";
import "./App.css";

function App(props) {
  //es6 destructing could be used for props here

  const [name, setName] = useState("Kishan");
  // The first value, name, is our current state.
  // The second value, setName, is the function that is used to update our state.
  const [age, setAge] = useState(20);
  const [isMale, setIsMale] = useState(true);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>I am {isMale ? "Male" : "Female"}</h1>
      <h1>
        My Car is '{car.brand}'. It is a '{car.color}' '{car.model}' from '
        {car.year}' .
      </h1>
      {props.name ? <h1>Hello {props.name}</h1> : ""}
    </div>
  );
}

export default App;

// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
// We could create multiple state Hooks to track individual values.
