import React, { Component } from 'react';
import './TodoStatusFilter.css';

export default class TodoStatusFilter extends Component {
  state ={
    activeBtn: 'All',
    btn: [
      {name: 'All', className: 'btn btn-outline-secondary active', type: 'button', onClick: () => this.onChangeFilter('All') },
      {name: 'Active', className: 'btn btn-outline-secondary', type: 'button', onClick: () => this.onChangeFilter('Active') },
      {name: 'Done', className: 'btn btn-outline-secondary', type: 'button', onClick: () => this.onChangeFilter('Done') }
    ]
  };
  onChangeFilter = (value) => {
    this.setState(({ btn }) => {
      const idx = btn.findIndex(el => el.name === value);
      console.log(btn[idx]['className'] + ' active')
      return [
        ...btn.slice(0, idx),
        { ...btn[idx], className: btn[idx]['className'] + ' active'},
        ...btn.slice(idx + 1)
      ];
    })
  };

  render() {
    return (
      <div className="btn-group todo-status-filter" role="group" aria-label="Basic example">
        {this.state.btn.map(
          (el) => {
            const {name, ...elem} = el;
            return <button {...elem} key={name}>{name}</button>
          }
        )}
        {/*<button type="button" className={`btn btn-primary`} onClick={() => this.onChangeFilter('all')}>All</button>*/}
        {/*<button type="button" className={`btn btn-outline-secondary`} onClick={() => this.onChangeFilter('active')}>Active</button>*/}
        {/*<button type="button" className={`btn btn-outline-secondary`} onClick={() => this.onChangeFilter('done')}>Done</button>*/}
      </div>
    )
  }
}
