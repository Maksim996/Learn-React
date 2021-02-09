import React, { Component } from 'react';

export default class AddTodos extends Component {
  state = {
    label : '',
  };
  onChange = (e) => {
   this.setState(({label}) =>  {
     return {
      label: e.target.value
     }
   })
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoItem(this.state.label);
    this.setState({label: ''} );
  };
  render() {
    return (
      <form className="input-group mt-3" onSubmit={ this.onSubmit }>
        <input id="add-todo-item" type="text" className="form-control" onChange={this.onChange} value={this.state.label}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
                  type="submit"
          >Add</button>
        </div>
      </form>
    )
  }
};

// export default AddTodos
