import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/ToDo';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
        <h1>To-Do List App</h1>
          <ToDo />
        </header>
      </div>;
  }
}

export default App;
