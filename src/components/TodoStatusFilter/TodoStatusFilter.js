import React from 'react';
import './TodoStatusFilter.css';

const TodoStatusFilter = () => {
  return (
    <div className="btn-group todo-status-filter" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  )
}

export default TodoStatusFilter;
