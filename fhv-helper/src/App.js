import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './components/Fetch.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Fetch/>
        </header>
      </div>
    );
  }
}

export default App;
