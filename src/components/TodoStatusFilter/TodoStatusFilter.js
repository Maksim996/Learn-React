import React, { Component } from 'react';
import './TodoStatusFilter.css';

export default class TodoStatusFilter extends Component {
  btn = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  render() {
    const {filter, onFilterChange} = this.props;
    const buttons = this.btn.map(({name, label}) => {
        const clazz = name === filter ? 'btn-primary' : 'btn-outline-secondary';
        return (
          <button onClick={() => onFilterChange(name)}
                  type="button"
                  className={`btn ${clazz}`}
                  key={name}
          >
            {label}
          </button>
        )
      });
    return (
      <div className="btn-group todo-status-filter" role="group" aria-label="Basic example">
        { buttons }
      </div>
    )
  }
}
