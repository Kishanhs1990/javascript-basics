import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //prepare the state in advance with a constructor
  constructor(props) {
    super(props);
    //here we have inheritance with super which passes props uptill parent constructor to extends Component

    // we dont have a set of functions instead this is an object here
    this.state = {
      name: "",
      age: 20,
      isMale: false,
    };
  }
  handleChange = (e) => {
    //TO CHANGE we use this.setState({name : ""})
    this.setState({ name: e.target.value });
  };
  render() {
    //destructuring with es6
    // const { name, age, isMale } = this.state;

    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <h1>My age is {this.state.age}</h1>
        <h1>I am {this.state.isMale ? "Male" : "Female"}</h1>
        {this.props.name ? <h1>Hello {this.props.name}</h1> : ""}
        <input value={this.state.name} onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default App;
