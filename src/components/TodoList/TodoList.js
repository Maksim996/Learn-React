import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css'

const TodoList = ({ items, onDeleted, toggleImportant, toggleDone }) => {

  return (
    <ul className="list-group todo-list">
      { items.map((item) => {
        const { id, ...itemProps} = item;

        return (
          <li key={ id }
              className="list-group-item"
          >
            {/*<TodoListItem label={item.label} important={item.important}/>*/}
            <TodoListItem { ...itemProps }
                          onDeleted={ () => onDeleted(id) }
                          toggleImportant={ () => toggleImportant(id) }
                          toggleDone={ () => toggleDone(id) }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList
