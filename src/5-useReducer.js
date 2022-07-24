import { useReducer, useState } from "react";
import "./App.css";

//useReducer hook is same as useState hook

const initialState = { count: 0 };

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function App() {
  //react useReducer returns 2 elemts as an array, current state & dispatch function
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState); // 2 args reducer function & initial state

  //useReducer hook uses same concept as reducers in redux. Its pure function with no side effects
  //means the function always produces same output when same no of args are passed

  return (
    <div>
      Count: {state.count}
      {/* <button onClick={() => setCount(count+1)}>+</button> */}
      {/* <button onClick={() => setCount(count-1)}>+</button> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
export default App;
