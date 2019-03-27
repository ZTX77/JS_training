import React, { Component } from 'react';
import Reverse from './Reverse.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='app'>
          <Reverse>123456789</Reverse>
            <Reverse>abcdefgh</Reverse>
        </div>
    );
  }
}

export default App;
