import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Hello World Class Component</div>;
  }
}
export default App;

//Previously only class based components could have state
//Class based components comes with state management and life cycle management but we might not need these always. We need to keep components light weighted
//This is no longer the case in react hooks

//Hooks work side-by-side with existing code so you can adopt them gradually. There is no rush to migrate to Hooks.
