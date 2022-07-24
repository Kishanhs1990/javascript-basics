import { useState, useContext, createContext } from "react";
import "./App.css";

//React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

//The Problem -> Prop Drilling

//The Solution -> create context

//Step 1 : To create context, you must Import createContext and initialize it:
//Step 2 : Next we'll use the Context Provider to wrap the tree of components that need the state Context.
//Step 3 : In order to use the Context in a child component, we need to access it using the useContext Hook.

const UserContext = createContext();

function App() {
  const [name, setName] = useState("Kishan");
  return (
    <UserContext.Provider value={name}>
      <h1>Component 1</h1>
      <h2>{`Hello ${name}!`}</h2>
      <Component2 name={name} />
    </UserContext.Provider>
  );
}

function Component2() {
  const name = useContext(UserContext);
  return (
    <>
      <h1>Component 2</h1>
      <h2>{`Hello ${name} again!`}</h2>
    </>
  );
}

export default App;
