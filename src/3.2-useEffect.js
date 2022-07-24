import { useState, useEffect } from "react";
import "./App.css";

//useEffect hook allows us to perform side effects on a functional component
// 1st argument for use effect is an arrow function, 2nd one is optional [dependency list] based on this bheviour changes of useEffect
// multiple useEffects could be used based on our requirements

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [todo, setTodo] = useState();

  //On every render
  // useEffect(() => {
  //   console.log("I am rendering on every update");
  // });

  //On first Render/Mount only [componentDidMount Alternative]
  useEffect(() => {
    console.log("I am rendering only once, component mounted ");
  }, []);
  //By passing dependency list we inform useEffect Hook to run only on first render

  //Example:- Used usually for API calls with axios
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((data) => setTodo(data))
  //     .catch((error) => console.log(error.message));
  // }, []);

  // console.log("after api call with useeffect", todo);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/1"
  //     );
  //     response = await response.json();
  //     setTodo(response);
  //   }
  //   fetchMyAPI();
  // }, []);

  //On first Render + whenever dependency changes [componentDidUpdate Alternative]
  // useEffect(() => {
  //   console.log(`name changed ${name}`);
  // }, [name]);
  //Here in dependency array we can include one or more variables

  //follows same rules, except this unmounts [componentWillUnmount Alternative]
  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowWidth);
  //   return () => {
  //     window.removeEventListener("resize", updateWindowWidth);
  //   };
  //   //getEventListners(window) -> check browser console
  // });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <h1>Window width {windowWidth}</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
    </div>
  );
}

export default App;
