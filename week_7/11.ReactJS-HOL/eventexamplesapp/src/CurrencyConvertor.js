import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: '',
    };
  }

  handleInput = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (this.state.rupees / 90).toFixed(2); // 1 Euro ≈ ₹90
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount (INR): </label>
          <input type="number" value={this.state.rupees} onChange={this.handleInput} />
          <br /><br />
          <label>Currency : </label>
          <input type="text" value={this.state.euro} readOnly />
          <br /><br />
          <button type="submit">Convert</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
