import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Welcome to the React Event Example.");
  };

  sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  handleSyntheticEvent = (e) => {
    alert("I was clicked (Synthetic Event)!");
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling</h1>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>Click on me</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
