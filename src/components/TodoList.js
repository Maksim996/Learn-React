import React from 'react';
import TodoListItem from './TodoListItems';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="drink coffee" important/></li>
      <li><TodoListItem label="Build react app" /></li>
    </ul>
  );
};

export default TodoList
