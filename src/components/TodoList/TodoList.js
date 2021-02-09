import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css'

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {

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
                          onToggleImportant={ () => onToggleImportant(id) }
                          onToggleDone={ () => onToggleDone(id) }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList
