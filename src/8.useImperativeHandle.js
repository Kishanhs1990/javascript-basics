// import { forwardRef, useImperativeHandle, useEffect, useRef } from "react";

// const TextInputWithRef = forwardRef(App);

// function App() {
//   const inputRef = useRef(null);
//   const onBtnClick = () => inputRef.current.focus();

//   useImperativeHandle(ref, () => {
//     focusInput: () => inputRef.current.focus();
//   });

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={onBtnClick}>Focus the text input</button>
//     </div>
//   );
// }

// function Parent() {
//   const ref = useRef(null);

//   useEffect(() => {
//     ref.focusInput();
//   }, []);

//   return (
//     <div>
//       <TextInputWithRef ref={ref} />
//     </div>
//   );
// }

// export default App;
