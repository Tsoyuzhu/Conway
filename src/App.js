import React, { Component } from 'react';
import Board from './components/board.js';
// import styled from 'styled-components'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textTransform: 'uppercase'}}> Conway's Game of Life</h1>
        
        <Board/>
      </div>
    );
  }
}

export default App;
