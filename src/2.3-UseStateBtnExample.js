import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  // const [newColor, setNewColor] = useState({
  //   color: "Black",
  // });
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("yellow")}>
        yellow
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      {/* <h1>My favorite color is {newColor.color}!</h1>
      <button type="button" onClick={() => setNewColor({ color: "Black" })}>
        Black
      </button>
      <button type="button" onClick={() => setNewColor({ color: "Brown" })}>
        Brown
      </button> */}
    </div>
  );
}

export default App;
