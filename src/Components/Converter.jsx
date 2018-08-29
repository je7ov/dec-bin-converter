import React, { Component } from 'react';

class Converter extends Component {
  constructor() {
    super();

    this.state = {
      decimalText: '',
      binaryText: ''
    };

    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleBinary = this.handleBinary.bind(this);
    this.handleConvertClick = this.handleConvertClick.bind(this);
  }

  handleDecimal(e) {
    this.setState({ decimalText: e.target.value });
    this.convertD2B(e.target.value);
  }

  handleBinary(e) {
    this.setState({ binaryText: e.target.value });
  }

  handleConvertClick(e) {
    e.preventDefault();
    this.convertD2B(this.state.decimalText);
  }

  convertD2B(dec) {
    let arr = [];

    while (dec > 1) {
      const mod = dec % 2;
      arr.push(mod);
      dec = Math.floor(dec / 2);
    }
    arr.push(dec);
    arr.reverse();

    this.setState({ binaryText: arr.join('') });
  }

  render() {
    return (
      <div className="converter">
        <form>
          <label htmlFor="decimalText">Decimal</label>
          <input
            type="text"
            name="decimalText"
            onChange={this.handleDecimal}
            value={this.state.decimalText}
          />
          <label htmlFor="binaryText">Binary</label>
          <input
            type="text"
            name="binaryText"
            onChange={this.handleBinary}
            value={this.state.binaryText}
          />
          <button
            id="btn_convert"
            type="submit"
            disabled
            onClick={this.handleConvertClick}
          >
            Convert!
          </button>
        </form>
      </div>
    );
  }
}

export default Converter;
