import { useState, useLayoutEffect, useRef, useEffect } from "react";
import "./App.css";

//useLayoutEffect hook is same as useEffect hook
//useEffect is Asynchronous
//useLayoutEffect is Synchronous and value is updated only just before dom is painted and hence impacts the performace.

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("UseEffect called");
  }, [windowWidth]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
  }, [windowWidth]);

  return (
    <div>
      <h1>Window width {windowWidth}</h1>
    </div>
  );
}

export default App;
