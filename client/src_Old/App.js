import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ToDoListItem
          />
        </div>
      </div>
    );
  }
}

export default App;