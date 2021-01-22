import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
  const todoObj = [
    {id: 1, completed: 'false', name: 'Buy beer'},
    {id: 1, completed: 'false', name: 'Buy car'},
    {id: 1, completed: 'false', name: 'Buy bus'},
  ]

  return (
    <div className={'wrapper'}>
      <h2>Title react</h2>
      <TodoList obj={todoObj}/>
    </div>
  );
}

export default App;
