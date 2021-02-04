import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css'

const TodoList = ({ items }) => {
  return (
    <ul className="list-group todo-list">
      { items.map((item) => {
        const { id, ...itemProps} = item;

        return (
          <li key={ id }
              className="list-group-item"
          >
            {/*<TodoListItem label={item.label} important={item.important}/>*/}
            <TodoListItem { ...itemProps }/>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList
