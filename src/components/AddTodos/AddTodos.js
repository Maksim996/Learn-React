import React from 'react';

const AddTodos = ({addTodoItem}) => {

  function addItem() {
    const input = document.getElementById('add-todo-item')
    addTodoItem(input.value);
    input.value = '';
  };

  return (
    <div className="input-group mt-3">
      <input id="add-todo-item" type="text" className="form-control"/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary"
                type="button"
                onClick={ addItem }
        >Add</button>
      </div>
    </div>
)};

export default AddTodos
