import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //We have special functions called life cycle methods componentDidMount() etc..
  //We could tap into these lifecycle methods and execute a peice of code
  constructor(props) {
    super();
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  componentDidMount() {
    //LifeCycle method - when component mounts/loads
  }

  componentDidUpdate() {
    //LifeCycle method - when component props change
  }

  componentWillUnmount() {
    //LifeCycle method - when component unmounts/cleanup happens
  }

  render() {
    return (
      <div>
        <h1>window width is {this.state.windowWidth}</h1>
      </div>
    );
  }
}

export default App;
