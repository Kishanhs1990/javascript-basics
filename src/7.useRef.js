import { useEffect, useRef, useState } from "react";

//The useRef Hook allows you to persist values between renders.
// It can be used to access a DOM element directly

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  // ref always return an object with { current : 0 }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // const [renderCount, setRenderCount] = useState(0);
  //   useEffect(() => {
  //     setRenderCount((prevCount) => prevCount + 1);
  //   });

  //drawaback with commented useEffect code is re-render issue everytime count value changes

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      {/* <FocusElement /> */}
    </>
  );
}

function FocusElement() {
  const inputRef = useRef(null);
  const onBtnClick = () => inputRef.current.focus();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={onBtnClick}>Focus the text input</button>
    </>
  );
}

export default App;

//But it also allows you to just hold a mutable value through any render.
// mutating the value of ref.current will not cause any render
