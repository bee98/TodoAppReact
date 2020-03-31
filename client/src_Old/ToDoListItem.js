import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title"></div>
        <div className="ToDoListItem-description"></div>
      </div>
    );
  }
}

export default ToDoListItem;