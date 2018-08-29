import React, { Component } from 'react';
import './App.css';
import Converter from './Components/Converter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topSection">
          <h1 className="title">Decimal to Binary Converter</h1>
        </div>
        <div className="botSection">
          <Converter />
        </div>
      </div>
    );
  }
}

export default App;
