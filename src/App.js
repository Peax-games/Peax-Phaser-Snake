import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Snake from './Game/Snake';

class App extends Component {
  render() {
    Snake();
    return (
      <div id="myCanvas">
       
      </div>
    );
  }
}

export default App;
