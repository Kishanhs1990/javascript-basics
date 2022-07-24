import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("kishan");
  return (
    <div>
      <div>Hello World Functional Component</div>
      <div>My name is {name}</div>
      <div>
        <button onClick={() => setName("test")}>Change name</button>
      </div>
    </div>
  );
}

export default App;

//This is Functional Component bcoz its a function that returns something
//Straight forward with just props as input and gives jsx as output
//Increases productivity of development

//Hooks were added to React in version v16.8.0

// Hook is a special function that let’s you hook into react features
// 1.	Hooks allow you to reuse stateful logic without changing component hierarchy
// 2.	Hooks lets your split one component into smaller functions based on what pieces are related
// 3.	Hooks lets us use react features without classes

// Rules of hooks
// 1.	Only call hooks on top level. Don’t call hooks inside loops, conditions, or nested functions. This helps us to follow hooks are called in same order each time component renders
// 2.	Only call hooks from react function components and not from regular JavaScript functions
//    a. Call hooks from react functional components
//    b. Call hooks from within custom hooks

// We released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules. You can add this plugin to your project if you’d like to try it:

//Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.
