import React, { Component } from 'react';
import './TodoStatusFilter.css';

export default class TodoStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group todo-status-filter" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">All</button>
        <button type="button" className="btn btn-outline-secondary">Active</button>
        <button type="button" className="btn btn-outline-secondary">Done</button>
      </div>
    )
  }
}
